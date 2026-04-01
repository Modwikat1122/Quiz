/**
 * DWIKAT NURSING HUB — Level Selection Page
 */

function renderLevelsPage(container) {
  // Guard: must be logged in
  const user = AppState.get('user');
  if (!user) {
    Router.navigate('/', true);
    return;
  }

  const levels = getLevels();

  container.innerHTML = `
    ${renderHeader(user)}
    ${renderBreadcrumb([
      { label: 'Home', route: '/' },
      { label: 'Select Level', current: true }
    ])}

    <div class="page-container">
      <div class="section-header">
        <div class="section-icon">
          <i class="fas fa-layer-group"></i>
        </div>
        <h2 class="section-title">Select Your Program Level</h2>
        <p class="section-subtitle">Choose your nursing program to see relevant subjects and questions</p>
      </div>

      <div class="levels-grid">
        ${levels.map(level => {
          const subjectCount = getSubjectsForLevel(level.id).length;
          const totalQ = getSubjectsForLevel(level.id)
            .reduce((sum, s) => sum + getQuestionCount(level.id, s.id), 0);
          return `
            <div class="level-card" data-level="${level.id}" onclick="selectLevel('${level.id}')">
              <div class="level-icon ${level.color}">${level.icon}</div>
              <div class="level-name">${level.name}</div>
              <div class="level-name-ar">${level.nameAr}</div>
              <div class="level-desc">${level.desc}</div>
              <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
                <span class="level-count">
                  <i class="fas fa-book-open" style="font-size:0.75rem;"></i>
                  ${subjectCount} Subjects
                </span>
                <span class="level-count">
                  <i class="fas fa-question-circle" style="font-size:0.75rem;"></i>
                  ${totalQ} Questions
                </span>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Info Banner -->
      <div style="
        background: linear-gradient(135deg, #eff6ff, #dbeafe);
        border:1px solid #bfdbfe;
        border-radius:var(--radius);
        padding:20px 24px;
        margin-top:36px;
        display:flex;
        align-items:flex-start;
        gap:14px;
      ">
        <i class="fas fa-info-circle" style="color:var(--primary);font-size:1.2rem;margin-top:2px;"></i>
        <div>
          <div style="font-weight:700;color:var(--primary-dark);margin-bottom:4px;">How it works</div>
          <div style="font-size:0.875rem;color:var(--gray-600);line-height:1.6;">
            Select your level → Choose a subject → Answer MCQs with instant feedback and detailed rationales → Get your performance report at the end.
          </div>
        </div>
      </div>
    </div>

    ${renderFooter()}
  `;
}

function selectLevel(levelId) {
  // Visual feedback
  document.querySelectorAll('.level-card').forEach(c => c.classList.remove('active'));
  document.querySelector(`[data-level="${levelId}"]`).classList.add('active');

  AppState.set('selectedLevel', levelId);
  AppState.set('selectedSubject', null);
  AppState.resetExam();

  setTimeout(() => {
    Router.navigate('/subjects');
  }, 250);
}
