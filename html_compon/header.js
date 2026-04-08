// header.js — La Cabane

document.getElementById('header-container').innerHTML = `
  <!-- Top utility bar -->
  <ul id="connection-menu">
    <li class="left">
      <iconify-icon icon="ph:leaf" width="13" height="13"></iconify-icon>
      Champeix, Auvergne
    </li>
    <li class="title">La Cabane</li>
    <li class="right-icons">
      <!-- Cart with live badge -->
      <a href="#" class="nav-icon-link snipcart-checkout" aria-label="Panier">
        <span class="cart-icon-wrap">
          <iconify-icon icon="ph:shopping-bag" width="18" height="18"></iconify-icon>
          <span class="cart-badge" id="cart-badge">0</span>
        </span>
        <span>Panier</span>
      </a>
      <!-- Account -->
      <div class="account-menu">
        <a href="#" class="nav-icon-link snipcart-customer-signin" id="account-btn" aria-label="Mon compte">
          <span class="icon-wrapper">
            <iconify-icon icon="ph:user" width="18" height="18"></iconify-icon>
            <span class="status-dot" id="status-dot"></span>
          </span>
          <span id="account-greet">Compte</span>
        </a>
        <ul class="account-dropdown" id="account-dropdown">
          <li><a href="#" id="btn-order-history">
            <iconify-icon icon="ph:receipt" width="14" height="14"></iconify-icon>
            Mes commandes
          </a></li>
          <li><a href="#" id="btn-logout">
            <iconify-icon icon="ph:sign-out" width="14" height="14"></iconify-icon>
            Déconnexion
          </a></li>
        </ul>
      </div>
    </li>
  </ul>

  <!-- Main navbar -->
  <nav id="menu" role="navigation" aria-label="Navigation principale">
    <div class="logo">
      <img src="medias/logo_cabane.png" alt="Logo La Cabane">
    </div>
    <span class="logo-text">La Cabane</span>

    <button id="menu-toggle" aria-label="Menu" aria-expanded="false" aria-controls="nav-links">
      <span></span><span></span><span></span>
    </button>

    <ul id="nav-links">
      <li><a href="index.html">Accueil</a></li>
      <li><a href="salon.html">Salon de thé</a></li>
      <li><a href="boutique.html">Boutique</a></li>
      <li><a href="actualites.html">Actualités</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
`;

// ---- Active link ----
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

// ---- Scroll: frosted navbar ----
const menu = document.getElementById('menu');
window.addEventListener('scroll', () => {
  menu.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ---- Hamburger toggle ----
const toggle   = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  });
});
