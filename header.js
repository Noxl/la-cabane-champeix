const headerHTML = `
<ul id="connection-menu">
    <!-- Left placeholder -->
    <li class="left"></li>

    <!-- Centered title -->
    <li class="title">La Cabane</li>

    <!-- Right icons -->
    <li class="right">
        <a href="panier.html" class="popup-link" data-width="600" data-height="500">
            <iconify-icon icon="mynaui:shopping-bag" width="30" height="30"></iconify-icon>
            <span>Panier</span>
        </a>
    </li>
    <li class="right">
        <a href="compte.html" class="snipcart-customer-signin" data-width="600" data-height="500">
            <iconify-icon icon="mynaui:user" width="30" height="30"></iconify-icon>
            <span>Compte</span>
        </a>
    </li>
</ul>

<ul id="menu">
    <li class="logo"><img src="medias/logo_cabane.png" alt="La Cabane Logo"></li>
    <li><a href="index.html">ACCUEIL</a></li>
    <li><a href="salon.html">SALON DE THE</a></li>
    <li><a href="boutique.html">BOUTIQUE</a></li>
    <li><a href="actualites.html">ACTUALITES</a></li>
    <li><a href="contact.html">CONTACT</a></li>
</ul>
`;

// Insert it into the page
document.getElementById('header-container').innerHTML = headerHTML;