
// Handles Snipcart account menu interactions
document.addEventListener('snipcart.ready', () => {

  // Wait for the header to be injected by header.js
  function init() {
    const accountBtn  = document.getElementById('account-btn');
    const dropdown    = document.getElementById('account-dropdown');
    const statusDot   = document.getElementById('status-dot');
    const orderBtn    = document.getElementById('btn-order-history');
    const logoutBtn   = document.getElementById('btn-logout');

    // Retry if header hasn't rendered yet
    if (!accountBtn || !dropdown || !statusDot) {
      setTimeout(init, 100);
      return;
    }

    let isLoggedIn = false;

    // Toggle dropdown only when logged in; otherwise open Snipcart sign-in modal
    accountBtn.addEventListener('click', (e) => {
      if (isLoggedIn) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('open');
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!accountBtn.closest('.account-menu').contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });

    // Update dot colour and login state
    function updateAuth(customer) {
      isLoggedIn = !!(customer?.email);
      statusDot.classList.toggle('connected', isLoggedIn);
      if (!isLoggedIn) dropdown.classList.remove('open');
    }

    // Subscribe to Snipcart store changes
    Snipcart.store.subscribe(() => {
      updateAuth(Snipcart.store.getState().customer);
    });

    // Dropdown actions
    orderBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.remove('open');
      Snipcart.api.theme.cart.open();
    });

    logoutBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.remove('open');
      Snipcart.api.customer.signout();
    });
  }

  init();
});
