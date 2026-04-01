/**
 * DWIKAT NURSING HUB — Exam Page
 */

let timerInterval = null;

function renderExamPage(container) {
  const user = AppState.get('user');
  const level = AppState.get('selectedLevel');
  const subject = AppState.get('selectedSubject');
  const questions = AppState.get('examQuestions');
  const currentIdx = AppState.get('currentQuestion');

  if (!user)     { Router.navigate('/', true); return; }
  if (!level)    { Router.navigate('/levels', true); return; }
  if (!subject)  { Router.navigate('/subjects', true); return; }
  if (!questions || questions.length === 0) { Router.navigate('/subjects', true); return; }

  const levelInfo = getLevels().find(l => l.id === level);
  const q = questions[currentIdx];
  const answers = AppState.get('answers');
  const totalQ = questions.length;
  const progressPct = Math.round((currentIdx / totalQ) * 100);

  if (timerInterval) clearInterval(timerInterval);

  container.innerHTML = `
    ${renderHeader(user)}
    ${renderBreadcrumb([
      { label: 'Home', route: '/' },
      { label: levelInfo ? levelInfo.name : level, route: '/levels' },
      { label: subject, route: '/subjects' },
      { label: 'Exam', current: true }
    ])}

    <div class="page-container">
      <!-- Progress Bar -->
      <div class="exam-progress-wrap">
        <div class="exam-progress-top">
          <span class="exam-progress-label">
            <i class="fas fa-tasks" style="color:var(--primary);margin-right:6px;"></i>
            Progress
          </span>
          <span class="exam-progress-count">Question ${currentIdx + 1} of ${totalQ}</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" id="progress-fill" style="width:${progressPct}%"></div>
        </div>
      </div>

      <div class="exam-layout">
        <!-- Question Column -->
        <div>
          <div class="question-card" id="question-card">
            <div class="question-number-badge">
              <i class="fas fa-question-circle"></i>
              Question ${currentIdx + 1}
            </div>

            <p class="question-text">${q.question}</p>

            <div class="options-list" id="options-list">
              ${q.shuffledOptions.map((opt, i) => {
                const letter = ['A','B','C','D','E'][i];
                return `
                  <button
                    class="option-item"
                    data-option="${opt}"
                    onclick="selectAnswer('${q.id}', this, '${escapeStr(opt)}')"
                  >
                    <span class="option-letter">${letter}</span>
                    <span class="option-text">${opt}</span>
                    <span class="option-result-icon" id="icon-${i}"></span>
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Feedback box -->
            <div class="feedback-box" id="feedback-box">
              <div class="feedback-header">
                <span class="feedback-icon" id="feedback-icon"></span>
                <span class="feedback-title" id="feedback-title"></span>
              </div>
              <div class="feedback-rationale-label">📖 Rationale</div>
              <div class="feedback-rationale-text" id="feedback-rationale"></div>
            </div>

            <!-- Next Button -->
            <div style="margin-top:24px;display:flex;gap:12px;flex-wrap:wrap;" id="nav-buttons" class="hidden">
              ${currentIdx < totalQ - 1 ? `
                <button class="btn btn-primary" id="next-btn" onclick="goToNext()">
                  Next Question <i class="fas fa-arrow-right"></i>
                </button>
              ` : `
                <button class="btn btn-success btn-lg" id="finish-btn" onclick="finishExam()">
                  <i class="fas fa-flag-checkered"></i> Finish Exam
                </button>
              `}
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="exam-sidebar">
          <!-- Timer -->
          <div class="sidebar-card">
            <div class="sidebar-card-title"><i class="fas fa-clock"></i> Timer</div>
            <div class="timer-display" id="timer-display">00:00</div>
          </div>

          <!-- Quick Stats -->
          <div class="sidebar-card">
            <div class="sidebar-card-title"><i class="fas fa-chart-bar"></i> Score So Far</div>
            <div class="stats-mini">
              <div class="stat-mini">
                <div class="stat-mini-value" id="correct-count" style="color:var(--success);">0</div>
                <div class="stat-mini-label">Correct</div>
              </div>
              <div class="stat-mini">
                <div class="stat-mini-value" id="wrong-count" style="color:var(--danger);">0</div>
                <div class="stat-mini-label">Wrong</div>
              </div>
              <div class="stat-mini">
                <div class="stat-mini-value" id="answered-count">0</div>
                <div class="stat-mini-label">Answered</div>
              </div>
              <div class="stat-mini">
                <div class="stat-mini-value" id="remaining-count" style="color:var(--warning);">${totalQ}</div>
                <div class="stat-mini-label">Remaining</div>
              </div>
            </div>
          </div>

          <!-- Question Navigator -->
          <div class="sidebar-card">
            <div class="sidebar-card-title"><i class="fas fa-th"></i> Questions</div>
            <div class="q-nav-grid" id="q-nav">
              ${questions.map((_, i) => `
                <button class="q-nav-btn ${i === currentIdx ? 'current' : ''}" id="nav-q-${i}" onclick="jumpToQuestion(${i})">${i+1}</button>
              `).join('')}
            </div>
            <div style="margin-top:10px;font-size:0.75rem;color:var(--gray-400);display:flex;gap:10px;flex-wrap:wrap;">
              <span><span style="color:var(--success);">■</span> Correct</span>
              <span><span style="color:var(--danger);">■</span> Wrong</span>
              <span><span style="color:var(--primary);">■</span> Current</span>
            </div>
          </div>

          <!-- Subject Info -->
          <div class="sidebar-card">
            <div class="sidebar-card-title"><i class="fas fa-info-circle"></i> Info</div>
            <div style="font-size:0.85rem;color:var(--gray-600);line-height:1.7;">
              <div><strong>Level:</strong> ${level}</div>
              <div><strong>Subject:</strong> ${subject}</div>
              <div><strong>Total:</strong> ${totalQ} questions</div>
              <div><strong>Pass:</strong> 70% or above</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    ${renderFooter()}
  `;

  // Start timer
  startTimer();

  // Update stats
  updateExamStats();

  // Restore previous answers visually for current question
  if (answers[q.id]) {
    restoreAnswerUI(q, answers[q.id]);
  }
}

function escapeStr(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function selectAnswer(questionId, btn, selectedOption) {
  const questions = AppState.get('examQuestions');
  const currentIdx = AppState.get('currentQuestion');
  const answers = AppState.get('answers');
  const q = questions[currentIdx];

  // Already answered
  if (answers[questionId]) return;

  // Disable all options
  document.querySelectorAll('.option-item').forEach(b => {
    b.classList.add('disabled');
    b.onclick = null;
  });

  // Save answer
  answers[questionId] = selectedOption;
  AppState.set('answers', answers);

  const isCorrect = selectedOption === q.correct_answer;
  const feedbackBox = document.getElementById('feedback-box');
  const feedbackIcon = document.getElementById('feedback-icon');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackRationale = document.getElementById('feedback-rationale');

  // Apply styles to options
  document.querySelectorAll('.option-item').forEach((optBtn, i) => {
    const optText = optBtn.querySelector('.option-text').textContent;
    const icon = optBtn.querySelector('.option-result-icon');

    if (optText === q.correct_answer) {
      optBtn.classList.add('correct-answer');
      icon.innerHTML = '<i class="fas fa-check-circle" style="color:var(--success);"></i>';
    } else if (optText === selectedOption && !isCorrect) {
      optBtn.classList.add('selected-wrong');
      icon.innerHTML = '<i class="fas fa-times-circle" style="color:var(--danger);"></i>';
    }
  });

  // Mark selected correct
  if (isCorrect) {
    btn.classList.add('selected-correct');
  }

  // Show feedback
  if (isCorrect) {
    feedbackBox.className = 'feedback-box correct';
    feedbackIcon.textContent = '✅';
    feedbackTitle.textContent = 'Correct! Well done!';
    feedbackTitle.style.color = 'var(--success)';
  } else {
    feedbackBox.className = 'feedback-box incorrect';
    feedbackIcon.textContent = '❌';
    feedbackTitle.innerHTML = `Incorrect. The correct answer is: <strong>${q.correct_answer}</strong>`;
    feedbackTitle.style.color = 'var(--danger)';
  }
  feedbackRationale.textContent = q.rationale;

  // Show nav buttons
  document.getElementById('nav-buttons').classList.remove('hidden');

  // Update navigator
  updateQuestionNav();
  updateExamStats();
}

function restoreAnswerUI(q, selectedOption) {
  const isCorrect = selectedOption === q.correct_answer;
  const feedbackBox = document.getElementById('feedback-box');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackIcon = document.getElementById('feedback-icon');
  const feedbackRationale = document.getElementById('feedback-rationale');

  document.querySelectorAll('.option-item').forEach((optBtn) => {
    const optText = optBtn.querySelector('.option-text').textContent;
    const icon = optBtn.querySelector('.option-result-icon');
    optBtn.classList.add('disabled');
    optBtn.onclick = null;

    if (optText === q.correct_answer) {
      optBtn.classList.add('correct-answer');
      icon.innerHTML = '<i class="fas fa-check-circle" style="color:var(--success);"></i>';
    } else if (optText === selectedOption && !isCorrect) {
      optBtn.classList.add('selected-wrong');
      icon.innerHTML = '<i class="fas fa-times-circle" style="color:var(--danger);"></i>';
    }
  });

  if (isCorrect) {
    feedbackBox.className = 'feedback-box correct';
    feedbackIcon.textContent = '✅';
    feedbackTitle.textContent = 'Correct! Well done!';
    feedbackTitle.style.color = 'var(--success)';
  } else {
    feedbackBox.className = 'feedback-box incorrect';
    feedbackIcon.textContent = '❌';
    feedbackTitle.innerHTML = `Incorrect. The correct answer is: <strong>${q.correct_answer}</strong>`;
    feedbackTitle.style.color = 'var(--danger)';
  }
  feedbackRationale.textContent = q.rationale;
  document.getElementById('nav-buttons').classList.remove('hidden');
}

function goToNext() {
  const questions = AppState.get('examQuestions');
  const currentIdx = AppState.get('currentQuestion');
  const answers = AppState.get('answers');
  const q = questions[currentIdx];

  if (!answers[q.id]) {
    showToast('⚠️ Please select an answer before moving to the next question.');
    return;
  }

  AppState.set('currentQuestion', currentIdx + 1);
  renderExamPage(document.getElementById('current-page'));
}

function jumpToQuestion(idx) {
  const questions = AppState.get('examQuestions');
  const answers = AppState.get('answers');
  const currentIdx = AppState.get('currentQuestion');

  // Only allow jumping to answered questions or current
  if (idx === currentIdx) return;
  if (answers[questions[idx].id] || idx <= currentIdx) {
    const currentQ = questions[currentIdx];
    if (!answers[currentQ.id] && idx > currentIdx) {
      showToast('⚠️ Please answer the current question first.');
      return;
    }
    AppState.set('currentQuestion', idx);
    renderExamPage(document.getElementById('current-page'));
  } else {
    showToast('⚠️ Please answer questions in order.');
  }
}

function finishExam() {
  const questions = AppState.get('examQuestions');
  const answers = AppState.get('answers');
  const currentIdx = AppState.get('currentQuestion');
  const q = questions[currentIdx];

  if (!answers[q.id]) {
    showToast('⚠️ Please answer this question before finishing.');
    return;
  }

  if (timerInterval) clearInterval(timerInterval);

  const endTime = Date.now();
  AppState.set('examEndTime', endTime);

  // Calculate results
  let correct = 0;
  const reviewData = questions.map(question => {
    const userAnswer = answers[question.id] || null;
    const isCorrect = userAnswer === question.correct_answer;
    if (isCorrect) correct++;
    return {
      id: question.id,
      question: question.question,
      options: question.shuffledOptions,
      correct_answer: question.correct_answer,
      user_answer: userAnswer,
      rationale: question.rationale,
      is_correct: isCorrect
    };
  });

  const total = questions.length;
  const percentage = Math.round((correct / total) * 100);
  const pass = percentage >= 70;
  const user = AppState.get('user');
  const level = AppState.get('selectedLevel');
  const subject = AppState.get('selectedSubject');
  const startTime = AppState.get('examStartTime');
  const duration = Math.round((endTime - startTime) / 1000); // seconds

  const results = {
    userName: user.name,
    userPhone: user.phone,
    level,
    subject,
    score: correct,
    total,
    percentage,
    pass,
    duration,
    questions: reviewData
  };

  AppState.set('examResults', results);

  // Save to history
  AppState.saveResult({
    userName: user.name,
    userPhone: user.phone || '',
    level,
    subject,
    score: correct,
    total,
    percentage,
    pass,
    duration
  });

  Router.navigate('/results');
}

function updateQuestionNav() {
  const questions = AppState.get('examQuestions');
  const answers = AppState.get('answers');
  const currentIdx = AppState.get('currentQuestion');

  questions.forEach((q, i) => {
    const btn = document.getElementById(`nav-q-${i}`);
    if (!btn) return;
    btn.className = 'q-nav-btn';
    if (i === currentIdx) {
      btn.classList.add('current');
    } else if (answers[q.id]) {
      const isCorrect = answers[q.id] === q.correct_answer;
      btn.classList.add(isCorrect ? 'answered-c' : 'answered-w');
    }
  });
}

function updateExamStats() {
  const questions = AppState.get('examQuestions');
  const answers = AppState.get('answers');
  const currentIdx = AppState.get('currentQuestion');

  let correct = 0, wrong = 0, answered = 0;
  questions.forEach(q => {
    if (answers[q.id]) {
      answered++;
      if (answers[q.id] === q.correct_answer) correct++;
      else wrong++;
    }
  });

  const remaining = questions.length - answered;

  const el = (id) => document.getElementById(id);
  if (el('correct-count'))  el('correct-count').textContent = correct;
  if (el('wrong-count'))    el('wrong-count').textContent = wrong;
  if (el('answered-count')) el('answered-count').textContent = answered;
  if (el('remaining-count'))el('remaining-count').textContent = remaining;

  // Update progress
  const progressEl = document.getElementById('progress-fill');
  if (progressEl) {
    const pct = Math.round(((currentIdx) / questions.length) * 100);
    progressEl.style.width = pct + '%';
  }
}

function startTimer() {
  const startTime = AppState.get('examStartTime') || Date.now();
  if (!AppState.get('examStartTime')) AppState.set('examStartTime', startTime);

  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    const display = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;

    const timerEl = document.getElementById('timer-display');
    if (timerEl) {
      timerEl.textContent = display;
      timerEl.className = 'timer-display';
      if (elapsed > 3600) timerEl.classList.add('danger');
      else if (elapsed > 1800) timerEl.classList.add('warning');
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
}
