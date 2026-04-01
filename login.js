/**
 * DWIKAT NURSING HUB — Login Page
 */

function renderLoginPage(container) {
  container.innerHTML = `
    <div class="login-hero">
      <!-- Decorative circles -->
      <div style="position:absolute;width:400px;height:400px;border-radius:50%;background:rgba(255,255,255,0.04);top:-100px;right:-80px;"></div>
      <div style="position:absolute;width:300px;height:300px;border-radius:50%;background:rgba(255,255,255,0.04);bottom:-60px;left:-60px;"></div>

      <div class="login-content">
        <div class="login-box" style="position:relative;z-index:1;">
          <div class="login-logo">
            <div class="login-logo-icon">
              <i class="fas fa-heartbeat"></i>
            </div>
            <h1>Dwikat Nursing Hub</h1>
            <p><i class="fas fa-star" style="font-size:0.7rem;"></i> Empowering Future Nurses</p>
          </div>

          <form id="login-form" novalidate>
            <div class="form-group">
              <label class="form-label" for="student-name">
                Full Name <span class="required">*</span>
              </label>
              <div class="input-icon-wrap">
                <i class="fas fa-user input-icon"></i>
                <input
                  type="text"
                  id="student-name"
                  class="form-input"
                  placeholder="Enter your full name"
                  autocomplete="name"
                  maxlength="80"
                />
              </div>
              <div class="form-hint">Your name will appear on the results report</div>
            </div>

            <div class="form-group">
              <label class="form-label" for="student-id">
                Phone Number or Student ID <span style="color:var(--gray-400);font-weight:400;">(optional)</span>
              </label>
              <div class="input-icon-wrap">
                <i class="fas fa-id-card input-icon"></i>
                <input
                  type="text"
                  id="student-id"
                  class="form-input"
                  placeholder="e.g. 0799123456 or S-12345"
                  autocomplete="off"
                  maxlength="40"
                />
              </div>
            </div>

            <div id="login-error" class="hidden" style="
              background:var(--danger-light);
              border:1px solid #fca5a5;
              border-radius:8px;
              padding:10px 14px;
              font-size:0.875rem;
              color:var(--danger);
              margin-bottom:16px;
              display:flex;
              align-items:center;
              gap:8px;">
              <i class="fas fa-exclamation-circle"></i>
              <span id="login-error-text">Please enter your full name.</span>
            </div>

            <button type="submit" class="btn btn-primary btn-full btn-lg" id="login-btn">
              <i class="fas fa-arrow-right"></i>
              Start Practice
            </button>
          </form>

          <div class="divider"></div>

          <div style="text-align:center;font-size:0.82rem;color:var(--gray-400);">
            <i class="fas fa-shield-alt" style="color:var(--primary);"></i>
            Your data is stored locally on this device.
            <br>
            <a data-route="/admin" style="color:var(--primary);text-decoration:none;margin-top:8px;display:inline-block;">
              <i class="fas fa-chart-bar"></i> Admin Dashboard
            </a>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div style="text-align:center;color:rgba(255,255,255,0.55);font-size:0.8rem;padding:20px;">
        &copy; 2025 Dwikat Nursing Hub &mdash; All rights reserved
      </div>
    </div>
  `;

  // Form submission
  const form = document.getElementById('login-form');
  const nameInput = document.getElementById('student-name');
  const idInput = document.getElementById('student-id');
  const errorDiv = document.getElementById('login-error');
  const errorText = document.getElementById('login-error-text');

  // Pre-fill from saved state
  const existingUser = AppState.get('user');
  if (existingUser) {
    nameInput.value = existingUser.name || '';
    idInput.value = existingUser.phone || '';
  }

  nameInput.focus();

  function showError(msg) {
    errorText.textContent = msg;
    errorDiv.classList.remove('hidden');
    errorDiv.style.display = 'flex';
    nameInput.style.borderColor = 'var(--danger)';
  }

  function clearError() {
    errorDiv.classList.add('hidden');
    errorDiv.style.display = 'none';
    nameInput.style.borderColor = '';
  }

  nameInput.addEventListener('input', clearError);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const phone = idInput.value.trim();

    if (!name) {
      showError('Please enter your full name to continue.');
      nameInput.focus();
      return;
    }

    if (name.length < 2) {
      showError('Name must be at least 2 characters.');
      nameInput.focus();
      return;
    }

    AppState.set('user', { name, phone });
    AppState.resetExam();

    // Animate button
    const btn = document.getElementById('login-btn');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    btn.disabled = true;

    setTimeout(() => {
      Router.navigate('/levels');
    }, 400);
  });
}
