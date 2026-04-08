// snipcart_interactions.js — La Cabane

window.SnipcartSettings = {
  publicApiKey: "N2I3ZTkwZDktMjliMy00YjJiLThjYzItYmY2MzNhMmRmOGRmNjM5MTEwODQ5MDM4MjI0MzM3",
  loadStrategy: "immediate",
  modalStyle: "side"
};

document.addEventListener('snipcart.ready', () => {

  function init() {
    const accountBtn  = document.getElementById('account-btn');
    const dropdown    = document.getElementById('account-dropdown');
    const statusDot   = document.getElementById('status-dot');
    const cartBadge   = document.getElementById('cart-badge');
    const orderBtn    = document.getElementById('btn-order-history');
    const logoutBtn   = document.getElementById('btn-logout');
    const greetSpan   = document.getElementById('account-greet');

    if (!accountBtn || !dropdown || !statusDot) {
      setTimeout(init, 100);
      return;
    }

    let isLoggedIn = false;

    // ── Cart badge ──────────────────────────────────────────────
    function updateBadge(count) {
      if (!cartBadge) return;
      cartBadge.textContent = count;
      cartBadge.classList.toggle('visible', count > 0);
    }

    // ── Auth state ──────────────────────────────────────────────
    function updateAuth(state) {
      const customer = state.customer;
      const count    = state.cart?.items?.count ?? 0;

      isLoggedIn = !!(customer?.email);
      statusDot.classList.toggle('connected', isLoggedIn);
      if (!isLoggedIn) {
        dropdown.classList.remove('open');
        if (greetSpan) greetSpan.textContent = 'Compte';
      } else {
        const firstName = customer.billingAddress?.firstName
                       || customer.shippingAddress?.firstName
                       || customer.email.split('@')[0];
        if (greetSpan) greetSpan.textContent = firstName;
      }

      updateBadge(count);
    }

    Snipcart.store.subscribe(() => {
      updateAuth(Snipcart.store.getState());
    });
    // Run once immediately
    updateAuth(Snipcart.store.getState());

    // ── Account button ──────────────────────────────────────────
    accountBtn.addEventListener('click', (e) => {
      if (isLoggedIn) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('open');
      }
    });

    document.addEventListener('click', (e) => {
      if (!accountBtn.closest('.account-menu').contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });

    // ── "Mes commandes" → custom order history panel ────────────
    orderBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.remove('open');
      openOrderHistory();
    });

    // ── Logout ──────────────────────────────────────────────────
    logoutBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.remove('open');
      Snipcart.api.customer.signout();
    });
  }

  init();
});

// ══════════════════════════════════════════════════════════════
//  ORDER HISTORY PANEL
//  Uses Snipcart.api.customer.orders.list() to fetch real orders
// ══════════════════════════════════════════════════════════════

function openOrderHistory() {
  // Create overlay if it doesn't exist yet
  let panel = document.getElementById('order-history-panel');
  if (!panel) {
    panel = buildOrderPanel();
    document.body.appendChild(panel);
  }
  panel.classList.add('open');
  document.body.style.overflow = 'hidden';
  loadOrders(panel);
}

function buildOrderPanel() {
  const overlay = document.createElement('div');
  overlay.id = 'order-history-panel';
  overlay.innerHTML = `
    <div class="ohp-backdrop"></div>
    <aside class="ohp-drawer" role="dialog" aria-label="Mes commandes" aria-modal="true">
      <header class="ohp-header">
        <div class="ohp-title-block">
          <span class="ohp-eyebrow">La Cabane</span>
          <h2 class="ohp-title">Mes commandes</h2>
        </div>
        <button class="ohp-close" aria-label="Fermer">
          <iconify-icon icon="ph:x" width="20" height="20"></iconify-icon>
        </button>
      </header>
      <div class="ohp-body" id="ohp-body">
        <div class="ohp-loading">
          <div class="ohp-spinner"></div>
          <p>Chargement…</p>
        </div>
      </div>
    </aside>
  `;

  // Close on backdrop click
  overlay.querySelector('.ohp-backdrop').addEventListener('click', closeOrderPanel);
  overlay.querySelector('.ohp-close').addEventListener('click', closeOrderPanel);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeOrderPanel();
  });

  return overlay;
}

function closeOrderPanel() {
  const panel = document.getElementById('order-history-panel');
  if (panel) {
    panel.classList.remove('open');
    document.body.style.overflow = '';
  }
}

async function loadOrders(panel) {
  const body = panel.querySelector('#ohp-body');
  body.innerHTML = `<div class="ohp-loading"><div class="ohp-spinner"></div><p>Chargement…</p></div>`;

  try {
    const result = await Snipcart.api.customer.orders.list({ limit: 50 });
    const orders = result?.items ?? [];

    if (orders.length === 0) {
      body.innerHTML = `
        <div class="ohp-empty">
          <iconify-icon icon="ph:package" width="48" height="48"></iconify-icon>
          <p>Vous n'avez pas encore de commande.</p>
          <a href="boutique.html" class="ohp-shop-btn" onclick="closeOrderPanel()">Découvrir notre boutique</a>
        </div>`;
      return;
    }

    body.innerHTML = orders.map(order => renderOrder(order)).join('');

    // Toggle item detail accordion
    body.querySelectorAll('.ohp-order-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const items = btn.closest('.ohp-order').querySelector('.ohp-order-items');
        const isOpen = items.classList.toggle('open');
        btn.querySelector('.ohp-toggle-icon').style.transform = isOpen ? 'rotate(180deg)' : '';
      });
    });

  } catch (err) {
    body.innerHTML = `
      <div class="ohp-empty">
        <iconify-icon icon="ph:warning" width="40" height="40"></iconify-icon>
        <p>Impossible de charger vos commandes.<br>Veuillez réessayer.</p>
      </div>`;
    console.error('Order history error:', err);
  }
}

const STATUS_LABELS = {
  'Processed':  { label: 'Traitée',    color: '#2e7d32' },
  'Disputed':   { label: 'Litige',     color: '#b71c1c' },
  'Refunded':   { label: 'Remboursée', color: '#7a7468' },
  'Cancelled':  { label: 'Annulée',    color: '#b71c1c' },
  'Pending':    { label: 'En attente', color: '#b8924a' },
  'PaymentProcessing': { label: 'Paiement…', color: '#b8924a' },
};

function renderOrder(order) {
  const date = new Date(order.creationDate).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
  const total = (order.total ?? 0).toFixed(2).replace('.', ',') + ' €';
  const itemCount = order.items?.length ?? 0;
  const status = STATUS_LABELS[order.paymentStatus] ?? { label: order.paymentStatus, color: '#7a7468' };
  const trackingUrl = order.shippingInfo?.trackingUrl;

  const itemsHTML = (order.items ?? []).map(item => `
    <div class="ohp-item">
      <span class="ohp-item-name">${escOHP(item.name)}</span>
      <span class="ohp-item-meta">× ${item.quantity} &nbsp;·&nbsp; ${(item.price * item.quantity).toFixed(2).replace('.', ',')} €</span>
    </div>
  `).join('');

  return `
    <div class="ohp-order">
      <div class="ohp-order-header">
        <div class="ohp-order-meta">
          <span class="ohp-order-number">#${escOHP(order.invoiceNumber ?? order.token?.slice(0,8) ?? '—')}</span>
          <span class="ohp-order-date">${date}</span>
        </div>
        <div class="ohp-order-right">
          <span class="ohp-status" style="color:${status.color}">${status.label}</span>
          <span class="ohp-order-total">${total}</span>
        </div>
      </div>

      <button class="ohp-order-toggle" aria-label="Voir les articles">
        <span>${itemCount} article${itemCount > 1 ? 's' : ''}</span>
        <iconify-icon class="ohp-toggle-icon" icon="ph:caret-down" width="14" height="14" style="transition:transform 0.2s ease;"></iconify-icon>
      </button>

      <div class="ohp-order-items">
        ${itemsHTML}
        ${trackingUrl ? `<a class="ohp-tracking-link" href="${escOHP(trackingUrl)}" target="_blank" rel="noopener">
          <iconify-icon icon="ph:truck" width="14" height="14"></iconify-icon> Suivre la livraison
        </a>` : ''}
      </div>
    </div>
  `;
}

function escOHP(str) {
  return String(str ?? '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
