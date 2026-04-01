/**
 * DWIKAT NURSING HUB — Client-Side Router
 * Hash-based routing: /#/login, /#/levels, /#/subjects, /#/exam, /#/results, /#/admin
 */

const Router = (() => {
  const routes = {};
  let currentRoute = null;

  function register(path, renderFn) {
    routes[path] = renderFn;
  }

  function navigate(path, replaceState = false) {
  const url = '#' + path;
  if (replaceState) {
    location.replace(url);
  } else {
    location.hash = path;
  }
}

  function getPath() {
    const hash = window.location.hash;
    if (!hash || hash === '#' || hash === '#/') return '/';
    return hash.replace('#', '') || '/';
  }

  function render(path) {
    currentRoute = path;
    const fn = routes[path];
    const app = document.getElementById('app');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (fn) {
      app.innerHTML = '';
      const pageEl = document.createElement('div');
      pageEl.className = 'page';
      pageEl.id = 'current-page';
      app.appendChild(pageEl);
      fn(pageEl);
    } else {
      // 404 — redirect home
      navigate('/', true);
    }
  }

  function init() {
    window.addEventListener('popstate', () => {
      render(getPath());
    });

    // Handle all link clicks with data-route attribute
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-route]');
      if (target) {
        e.preventDefault();
        const route = target.getAttribute('data-route');
        navigate(route);
      }
    });

    // Initial render
    render(getPath());
  }

  function getCurrent() { return currentRoute; }

  return { register, navigate, init, getCurrent };
})();
