/**
 * DWIKAT NURSING HUB — Results Page
 */

function renderResultsPage(container) {
  const user = AppState.get('user');
  const results = AppState.get('examResults');

  if (!user)    { Router.navigate('/', true); return; }
  if (!results) { Router.navigate('/subjects', true); return; }

  const { userName, userPhone, level, subject, score, total, percentage, pass, duration, questions } = results;

  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  const durationStr = `${minutes}m ${seconds}s`;
  const levelInfo = getLevels().find(l => l.id === level);

  container.innerHTML = `
    ${renderHeader(user)}
    ${renderBreadcrumb([
      { label: 'Home', route: '/' },
      { label: levelInfo ? levelInfo.name : level, route: '/levels' },
      { label: subject, route: '/subjects' },
      { label: 'Results', current: true }
    ])}

    <div class="page-container-md">

      <!-- Results Hero Card -->
      <div class="results-hero">
        <div style="font-size:0.85rem;opacity:0.7;margin-bottom:12px;">
          <i class="fas fa-calendar-alt"></i>
          ${new Date().toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' })}
        </div>

        <div class="result-score-circle">
          <span class="result-score-num">${score}</span>
          <span class="result-score-denom">/ ${total}</span>
        </div>

        <div class="result-name">
          <i class="fas fa-user-graduate" style="margin-right:8px;"></i>${userName}
        </div>
        ${userPhone ? `<div style="font-size:0.85rem;opacity:0.7;margin-bottom:4px;">📋 ${userPhone}</div>` : ''}

        <div class="result-percentage">${percentage}%</div>

        <div class="result-badge ${pass ? 'pass' : 'fail'}">
          ${pass ? '🏆 Passed' : '❌ Not Passed'}
        </div>

        <div style="margin-top:24px;display:flex;gap:20px;justify-content:center;flex-wrap:wrap;font-size:0.85rem;opacity:0.85;">
          <span><i class="fas fa-book"></i> ${level} — ${subject}</span>
          <span><i class="fas fa-clock"></i> Duration: ${durationStr}</span>
          <span><i class="fas fa-percent"></i> Pass mark: 70%</span>
        </div>
      </div>

      <!-- Summary Cards -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:16px;margin-bottom:32px;">
        <div class="stat-card">
          <div class="stat-icon green"><i class="fas fa-check-circle"></i></div>
          <div>
            <div class="stat-value">${score}</div>
            <div class="stat-label">Correct</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon red"><i class="fas fa-times-circle"></i></div>
          <div>
            <div class="stat-value">${total - score}</div>
            <div class="stat-label">Incorrect</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon blue"><i class="fas fa-percentage"></i></div>
          <div>
            <div class="stat-value">${percentage}%</div>
            <div class="stat-label">Score</div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon yellow"><i class="fas fa-stopwatch"></i></div>
          <div>
            <div class="stat-value">${durationStr}</div>
            <div class="stat-label">Time</div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:36px;">
        <button class="btn btn-primary" onclick="retakeExam()">
          <i class="fas fa-redo"></i> Retake Exam
        </button>
        <button class="btn btn-secondary" onclick="Router.navigate('/subjects')">
          <i class="fas fa-book-open"></i> Other Subject
        </button>
        <button class="btn btn-ghost" onclick="Router.navigate('/')">
          <i class="fas fa-home"></i> Back to Home
        </button>
        <button class="btn btn-ghost" onclick="printResults()" style="margin-left:auto;">
          <i class="fas fa-print"></i> Print
        </button>
      </div>

      <!-- Review Section -->
      <div style="margin-bottom:16px;">
        <h3 style="font-size:1.25rem;font-weight:700;color:var(--gray-900);margin-bottom:4px;">
          <i class="fas fa-clipboard-list" style="color:var(--primary);margin-right:8px;"></i>
          Detailed Review
        </h3>
        <p style="font-size:0.875rem;color:var(--gray-500);">Review all questions with correct answers and rationales</p>
      </div>

      ${questions.map((q, i) => `
        <div class="review-question ${q.is_correct ? 'correct' : 'incorrect'}">
          <div class="review-q-num">
            ${q.is_correct
              ? '<i class="fas fa-check-circle" style="color:var(--success);"></i>'
              : '<i class="fas fa-times-circle" style="color:var(--danger);"></i>'}
            Question ${i + 1}
            ${q.is_correct
              ? '<span class="badge badge-green" style="margin-left:8px;">Correct</span>'
              : '<span class="badge badge-red" style="margin-left:8px;">Incorrect</span>'}
          </div>

          <div class="review-q-text">${q.question}</div>

          <div class="review-answers">
            ${q.options.map(opt => {
              if (opt === q.user_answer && opt === q.correct_answer) {
                return `<div class="review-answer-row user-correct">
                  <i class="fas fa-check-circle"></i>
                  <span>Your answer (Correct): <strong>${opt}</strong></span>
                </div>`;
              } else if (opt === q.user_answer && opt !== q.correct_answer) {
                return `<div class="review-answer-row user-wrong">
                  <i class="fas fa-times-circle"></i>
                  <span>Your answer: <strong>${opt}</strong></span>
                </div>`;
              } else if (opt === q.correct_answer) {
                return `<div class="review-answer-row answer-correct">
                  <i class="fas fa-check-circle"></i>
                  <span>Correct answer: <strong>${opt}</strong></span>
                </div>`;
              }
              return '';
            }).join('')}
          </div>

          <div class="review-rationale">
            <div class="review-rationale-label">📖 Rationale</div>
            ${q.rationale}
          </div>
        </div>
      `).join('')}

      <!-- Bottom Action Buttons -->
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:32px;padding-top:24px;border-top:1px solid var(--gray-200);">
        <button class="btn btn-primary" onclick="retakeExam()">
          <i class="fas fa-redo"></i> Retake Exam
        </button>
        <button class="btn btn-ghost" onclick="Router.navigate('/')">
          <i class="fas fa-home"></i> Back to Home
        </button>
      </div>
    </div>

    ${renderFooter()}
  `;
}

function retakeExam() {
  const level = AppState.get('selectedLevel');
  const subject = AppState.get('selectedSubject');

  AppState.resetExam();

  const questions = getQuestions(level, subject, true);
  AppState.set('examQuestions', questions);
  AppState.set('currentQuestion', 0);
  AppState.set('answers', {});
  AppState.set('examStartTime', Date.now());

  Router.navigate('/exam');
}

function printResults() {
  window.print();
}
