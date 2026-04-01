/**
 * DWIKAT NURSING HUB — State Management
 * Central application state with localStorage persistence
 */

const AppState = (() => {
  const STATE_KEY = 'dwikat_nursing_hub_state';
  const RESULTS_KEY = 'dwikat_results_history';

  let state = {
    user: null,           // { name, phone }
    selectedLevel: null,  // e.g. "Bachelor"
    selectedSubject: null,// e.g. "Medical-Surgical"
    examQuestions: [],    // shuffled questions for current exam
    currentQuestion: 0,   // index
    answers: {},          // { qId: selectedAnswer }
    examStartTime: null,
    examEndTime: null,
    examResults: null     // { score, total, percentage, pass, questions }
  };

  function save() {
    try {
      localStorage.setItem(STATE_KEY, JSON.stringify(state));
    } catch(e) {}
  }

  function load() {
    try {
      const saved = localStorage.getItem(STATE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...state, ...parsed };
      }
    } catch(e) {}
  }

  function get(key) {
    return key ? state[key] : { ...state };
  }

  function set(key, value) {
    state[key] = value;
    save();
  }

  function resetExam() {
    state.examQuestions = [];
    state.currentQuestion = 0;
    state.answers = {};
    state.examStartTime = null;
    state.examEndTime = null;
    state.examResults = null;
    save();
  }

  function resetAll() {
    state = {
      user: null,
      selectedLevel: null,
      selectedSubject: null,
      examQuestions: [],
      currentQuestion: 0,
      answers: {},
      examStartTime: null,
      examEndTime: null,
      examResults: null
    };
    save();
  }

  // ─── Results History ───────────────────────────────────────
  function saveResult(resultData) {
    const results = getResultsHistory();
    results.unshift({
      id: Date.now(),
      ...resultData,
      date: new Date().toISOString()
    });
    // Keep max 200 results
    const trimmed = results.slice(0, 200);
    try {
      localStorage.setItem(RESULTS_KEY, JSON.stringify(trimmed));
    } catch(e) {}
    return trimmed[0];
  }

  function getResultsHistory() {
    try {
      const saved = localStorage.getItem(RESULTS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch(e) {
      return [];
    }
  }

  function clearResultsHistory() {
    localStorage.removeItem(RESULTS_KEY);
  }

  // Initialize
  load();

  return { get, set, save, resetExam, resetAll, saveResult, getResultsHistory, clearResultsHistory };
})();
