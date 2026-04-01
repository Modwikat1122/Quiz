/**
 * DWIKAT NURSING HUB — Subject Selection Page
 */

function renderSubjectsPage(container) {
  const user = AppState.get('user');
  const level = AppState.get('selectedLevel');

  if (!user) { Router.navigate('/', true); return; }
  if (!level) { Router.navigate('/levels', true); return; }

  const subjects = getSubjectsForLevel(level);
  const levelInfo = getLevels().find(l => l.id === level);

  container.innerHTML = `
    ${renderHeader(user)}
    ${renderBreadcrumb([
      { label: 'Home', route: '/' },
      { label: 'Levels', route: '/levels' },
      { label: levelInfo ? levelInfo.name : level, route: '/levels' },
      { label: 'Select Subject', current: true }
    ])}

    <div class="page-container">
      <div class="section-header">
        <div class="section-icon" style="background:var(--primary-light);">
          <span style="font-size:2rem;">${levelInfo ? levelInfo.icon : '📚'}</span>
        </div>
        <h2 class="section-title">${levelInfo ? levelInfo.name : level} Program</h2>
        <p class="section-subtitle">Select a subject to start your practice exam</p>
      </div>

      <div class="subjects-grid">
        ${subjects.map(subject => {
          const count = getQuestionCount(level, subject.id);
          return `
            <div class="subject-card" onclick="selectSubject('${subject.id.replace(/'/g, "\\'")}')">
              <div class="subject-card-icon">${subject.icon}</div>
              <div>
                <div class="subject-card-name">${subject.name}</div>
                <div class="subject-card-count">
                  <i class="fas fa-question-circle"></i>
                  ${count} question${count !== 1 ? 's' : ''} available
                </div>
              </div>
              <i class="fas fa-chevron-right subject-card-arrow"></i>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Back Button -->
      <div style="margin-top:32px;">
        <button class="btn btn-secondary" onclick="Router.navigate('/levels')">
          <i class="fas fa-arrow-left"></i> Back to Levels
        </button>
      </div>
    </div>

    ${renderFooter()}
  `;
}

function selectSubject(subjectId) {
  const level = AppState.get('selectedLevel');
  const count = getQuestionCount(level, subjectId);

  if (count === 0) {
    showToast('⚠️ No questions available for this subject yet. More coming soon!', 'warning');
    return;
  }

  AppState.set('selectedSubject', subjectId);
  AppState.resetExam();

  // Load questions
  const questions = getQuestions(level, subjectId, true);
  AppState.set('examQuestions', questions);
  AppState.set('currentQuestion', 0);
  AppState.set('answers', {});
  AppState.set('examStartTime', Date.now());

  Router.navigate('/exam');
}
