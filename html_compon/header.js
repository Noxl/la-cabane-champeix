// header.js — La Cabane

document.getElementById('header-container').innerHTML = `
  <!-- Top connection bar -->
  <ul id="connection-menu">
    <li class="left"></li>
    <li class="title">La Cabane</li>
    <li class="right-icons">
      <!-- Cart -->
      <a href="#" class="nav-icon-link snipcart-checkout" aria-label="Panier">
        <iconify-icon icon="mynaui:shopping-bag" width="26" height="26"></iconify-icon>
        <span>Panier</span>
      </a>

      <!-- Account (with dropdown) -->
      <div class="account-menu">
        <a href="#" class="nav-icon-link snipcart-customer-signin" id="account-btn" aria-label="Mon compte">
          <span class="icon-wrapper">
            <iconify-icon icon="mynaui:user" width="26" height="26"></iconify-icon>
            <span class="status-dot" id="status-dot"></span>
          </span>
          <span>Compte</span>
        </a>
        <ul class="account-dropdown" id="account-dropdown">
          <li><a href="#" id="btn-order-history">Mes commandes</a></li>
          <li><a href="#" id="btn-logout">Déconnexion</a></li>
        </ul>
      </div>
    </li>
  </ul>

  <!-- Main navbar -->
  <ul id="menu">
    <li class="logo"><img src="medias/logo_cabane.png" alt="Logo La Cabane"></li>
    <li><a href="index.html">Accueil</a></li>
    <li><a href="salon.html">Salon de thé</a></li>
    <li><a href="boutique.html">Boutique</a></li>
    <li><a href="actualites.html">Actualités</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
`;

// Highlight the active page link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('#menu li a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
