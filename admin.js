/**
 * DWIKAT NURSING HUB — Admin Dashboard
 */

function renderAdminPage(container) {
  const results = AppState.getResultsHistory();
  const user = AppState.get('user');

  const totalStudents = new Set(results.map(r => r.userName)).size;
  const totalExams = results.length;
  const passCount = results.filter(r => r.pass).length;
  const avgScore = results.length
    ? Math.round(results.reduce((a, r) => a + r.percentage, 0) / results.length)
    : 0;

  // Top subjects
  const subjectMap = {};
  results.forEach(r => {
    const key = `${r.level} — ${r.subject}`;
    if (!subjectMap[key]) subjectMap[key] = { count: 0, totalPct: 0 };
    subjectMap[key].count++;
    subjectMap[key].totalPct += r.percentage;
  });

  // Leaderboard: unique students, best score
  const leaderMap = {};
  results.forEach(r => {
    if (!leaderMap[r.userName] || r.percentage > leaderMap[r.userName].percentage) {
      leaderMap[r.userName] = { ...r };
    }
  });
  const leaderboard = Object.values(leaderMap)
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 10);

  container.innerHTML = `
    ${renderHeader(user, true)}
    ${renderBreadcrumb([
      { label: 'Home', route: '/' },
      { label: 'Admin Dashboard', current: true }
    ])}

    <div class="page-container">
      <!-- Header -->
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:28px;">
        <div>
          <h2 style="font-size:1.75rem;font-weight:800;color:var(--gray-900);margin-bottom:4px;">
            <i class="fas fa-chart-line" style="color:var(--primary);margin-right:10px;"></i>Admin Dashboard
          </h2>
          <p style="color:var(--gray-500);font-size:0.9rem;">Track student performance and exam statistics</p>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-secondary btn-sm" onclick="exportCSV()">
            <i class="fas fa-download"></i> Export CSV
          </button>
          <button class="btn btn-danger btn-sm" onclick="confirmClearData()">
            <i class="fas fa-trash"></i> Clear Data
          </button>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="admin-stats">
        <div class="stat-card">
          <div class="stat-icon blue"><i class="fas fa-users"></i></div>
          <div>
            <div class="stat-value">${totalStudents}</div>
            <div class="stat-label">Unique Students</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon yellow"><i class="fas fa-clipboard-list"></i></div>
          <div>
            <div class="stat-value">${totalExams}</div>
            <div class="stat-label">Total Exams</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon green"><i class="fas fa-graduation-cap"></i></div>
          <div>
            <div class="stat-value">${passCount}</div>
            <div class="stat-label">Passed</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon ${avgScore >= 70 ? 'green' : 'red'}"><i class="fas fa-percentage"></i></div>
          <div>
            <div class="stat-value">${avgScore}%</div>
            <div class="stat-label">Average Score</div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="tabs">
        <button class="tab-btn active" onclick="switchTab('results', this)">
          <i class="fas fa-list-alt"></i> All Results
        </button>
        <button class="tab-btn" onclick="switchTab('leaderboard', this)">
          <i class="fas fa-trophy"></i> Leaderboard
        </button>
        <button class="tab-btn" onclick="switchTab('stats', this)">
          <i class="fas fa-chart-bar"></i> By Subject
        </button>
      </div>

      <!-- Tab: All Results -->
      <div class="tab-pane active" id="tab-results">
        <div class="data-table-wrap">
          <div class="data-table-header">
            <div class="data-table-title">
              <i class="fas fa-clipboard-check" style="color:var(--primary);margin-right:8px;"></i>
              Exam Results (${results.length})
            </div>
            <div class="search-bar">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search by name..." oninput="filterTable(this.value)" id="search-input" />
            </div>
          </div>

          ${results.length === 0 ? `
            <div class="empty-state">
              <i class="fas fa-inbox"></i>
              <div style="font-size:1rem;font-weight:600;color:var(--gray-600);margin-bottom:8px;">No results yet</div>
              <div>Results will appear here after students complete exams</div>
            </div>
          ` : `
            <div style="overflow-x:auto;">
              <table class="data-table" id="results-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Student Name</th>
                    <th>Level / Subject</th>
                    <th>Score</th>
                    <th>Status</th>
                    <th>Duration</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody id="results-tbody">
                  ${results.map((r, i) => {
                    const date = new Date(r.date);
                    const dateStr = date.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
                    const mins = Math.floor((r.duration || 0) / 60);
                    const secs = (r.duration || 0) % 60;
                    return `
                      <tr data-name="${r.userName.toLowerCase()}">
                        <td style="color:var(--gray-400);font-size:0.8rem;">${i + 1}</td>
                        <td>
                          <div style="font-weight:600;color:var(--gray-800);">${r.userName}</div>
                          ${r.userPhone ? `<div style="font-size:0.75rem;color:var(--gray-400);">${r.userPhone}</div>` : ''}
                        </td>
                        <td>
                          <div style="font-size:0.85rem;">${r.level}</div>
                          <div style="font-size:0.78rem;color:var(--gray-400);">${r.subject}</div>
                        </td>
                        <td>
                          <strong>${r.score}/${r.total}</strong>
                          <span style="font-size:0.8rem;color:var(--gray-400);margin-left:4px;">(${r.percentage}%)</span>
                        </td>
                        <td>
                          <span class="score-pill ${r.pass ? 'pass' : 'fail'}">
                            ${r.pass ? '✅ Pass' : '❌ Fail'}
                          </span>
                        </td>
                        <td style="font-size:0.85rem;">${mins}m ${secs}s</td>
                        <td style="font-size:0.82rem;color:var(--gray-500);">${dateStr}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>
      </div>

      <!-- Tab: Leaderboard -->
      <div class="tab-pane" id="tab-leaderboard">
        <div class="card" style="padding:24px;">
          <h3 style="font-size:1rem;font-weight:700;color:var(--gray-800);margin-bottom:20px;">
            <i class="fas fa-trophy" style="color:var(--warning);margin-right:8px;"></i>
            Top Performing Students (Best Score)
          </h3>
          ${leaderboard.length === 0 ? `
            <div class="empty-state">
              <i class="fas fa-trophy"></i>
              <div>No results yet. Complete some exams to see the leaderboard!</div>
            </div>
          ` : leaderboard.map((s, i) => {
            const rankClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
            return `
              <div class="leaderboard-row">
                <div class="leaderboard-rank ${rankClass}">${i + 1}</div>
                <div class="leaderboard-name">
                  ${s.userName}
                  ${i === 0 ? ' 👑' : ''}
                  <div style="font-size:0.75rem;color:var(--gray-400);font-weight:400;">${s.level} — ${s.subject}</div>
                </div>
                <div class="leaderboard-score">${s.percentage}%</div>
                <div>
                  <span class="score-pill ${s.pass ? 'pass' : 'fail'}">
                    ${s.pass ? 'Pass' : 'Fail'}
                  </span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Tab: By Subject -->
      <div class="tab-pane" id="tab-stats">
        <div class="card" style="padding:24px;">
          <h3 style="font-size:1rem;font-weight:700;color:var(--gray-800);margin-bottom:20px;">
            <i class="fas fa-chart-bar" style="color:var(--primary);margin-right:8px;"></i>
            Performance by Subject
          </h3>
          ${Object.keys(subjectMap).length === 0 ? `
            <div class="empty-state">
              <i class="fas fa-chart-bar"></i>
              <div>No data yet.</div>
            </div>
          ` : Object.entries(subjectMap)
              .sort((a,b) => b[1].count - a[1].count)
              .map(([key, data]) => {
                const avg = Math.round(data.totalPct / data.count);
                return `
                  <div style="margin-bottom:18px;">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                      <span style="font-size:0.9rem;font-weight:600;color:var(--gray-700);">${key}</span>
                      <span style="font-size:0.85rem;color:var(--gray-500);">${data.count} exam${data.count !== 1 ? 's' : ''} · Avg: <strong>${avg}%</strong></span>
                    </div>
                    <div class="progress-bar-track">
                      <div class="progress-bar-fill" style="width:${avg}%;background:${avg >= 70 ? 'linear-gradient(90deg,var(--success),#22c55e)' : 'linear-gradient(90deg,var(--danger),#f87171)'};"></div>
                    </div>
                  </div>
                `;
              }).join('')}
        </div>
      </div>

    </div>

    ${renderFooter()}
  `;
}

function switchTab(tabName, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + tabName).classList.add('active');
}

function filterTable(query) {
  const rows = document.querySelectorAll('#results-tbody tr');
  rows.forEach(row => {
    const name = row.getAttribute('data-name') || '';
    row.style.display = name.includes(query.toLowerCase()) ? '' : 'none';
  });
}

function exportCSV() {
  const results = AppState.getResultsHistory();
  if (results.length === 0) {
    showToast('No data to export.');
    return;
  }

  const headers = ['#', 'Name', 'Phone/ID', 'Level', 'Subject', 'Score', 'Total', 'Percentage', 'Pass/Fail', 'Duration (sec)', 'Date'];
  const rows = results.map((r, i) => [
    i + 1,
    `"${r.userName}"`,
    `"${r.userPhone || ''}"`,
    r.level,
    `"${r.subject}"`,
    r.score,
    r.total,
    r.percentage + '%',
    r.pass ? 'Pass' : 'Fail',
    r.duration || 0,
    `"${new Date(r.date).toLocaleString()}"`
  ]);

  const csvContent = [headers, ...rows].map(r => r.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `dwikat_nursing_results_${Date.now()}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showToast('✅ CSV exported successfully!');
}

function confirmClearData() {
  if (confirm('Are you sure you want to delete ALL results data? This cannot be undone.')) {
    AppState.clearResultsHistory();
    showToast('✅ All data has been cleared.');
    Router.navigate('/admin');
  }
}
