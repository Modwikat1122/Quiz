/**
 * DWIKAT NURSING HUB — Main Entry Point
 * Registers routes and shared UI components
 */

// ============================================================
// SHARED UI COMPONENTS
// ============================================================

function renderHeader(user, isAdmin = false) {
  const name = user ? user.name : '';
  return `
    <header class="site-header">
      <a class="header-brand" data-route="/">
        <div class="header-logo">
          <i class="fas fa-heartbeat"></i>
        </div>
        <div>
          <div class="header-title">Dwikat Nursing Hub</div>
          <div class="header-sub">Empowering Future Nurses</div>
        </div>
      </a>
      <div class="header-right">
        ${name ? `
          <div class="header-user">
            <i class="fas fa-user-circle"></i>
            <span>${name}</span>
          </div>
        ` : ''}
        <a class="btn-admin-link" data-route="/admin" title="Admin Dashboard">
          <i class="fas fa-chart-bar"></i>
          <span>Dashboard</span>
        </a>
      </div>
    </header>
  `;
}

function renderBreadcrumb(items) {
  const parts = items.map((item, i) => {
    if (item.current) {
      return `<span class="current">${item.label}</span>`;
    }
    return `<a data-route="${item.route}">${item.label}</a>`;
  });

  return `
    <nav class="breadcrumb" aria-label="breadcrumb">
      <i class="fas fa-home" style="color:var(--primary);font-size:0.9rem;"></i>
      ${parts.join('<span class="sep"> <i class="fas fa-chevron-right" style="font-size:0.65rem;"></i> </span>')}
    </nav>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <strong>Dwikat Nursing Hub</strong> &mdash; Empowering Future Nurses
      <br>
      <span style="font-size:0.75rem;">&copy; ${new Date().getFullYear()} All rights reserved. Built for nursing education excellence.</span>
    </footer>
  `;
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================

let toastTimeout;

function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove('hidden');

  const colors = {
    info: '#1f2937',
    success: '#15803d',
    warning: '#92400e',
    error: '#dc2626'
  };
  toast.style.background = colors[type] || colors.info;

  // Force reflow
  toast.offsetHeight;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, 3500);
}

// ============================================================
// ROUTE REGISTRATION
// ============================================================

Router.register('/', renderLoginPage);
Router.register('/levels', renderLevelsPage);
Router.register('/subjects', renderSubjectsPage);
Router.register('/exam', renderExamPage);
Router.register('/results', renderResultsPage);
Router.register('/admin', renderAdminPage);

// ============================================================
// INITIALIZE APP
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  Router.init();
});

// Handle page visibility change (pause timer when tab hidden)
document.addEventListener('visibilitychange', () => {
  // Timer continues in background — this is intentional
});

// Prevent accidental back navigation during exam
window.addEventListener('beforeunload', (e) => {
  const current = Router.getCurrent();
  if (current === '/exam') {
    e.preventDefault();
    e.returnValue = 'You have an exam in progress. Are you sure you want to leave?';
  }
});
