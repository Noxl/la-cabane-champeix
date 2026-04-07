const headerHTML = `
<ul id="connection-menu">
    <!-- Left placeholder -->
    <li class="left"></li>

    <!-- Centered title -->
    <li class="title">La Cabane</li>

    <!-- Right icons -->
<li class="right">
    <a href="#" class="snipcart-checkout">
        <iconify-icon icon="mynaui:shopping-bag" width="30" height="30"></iconify-icon>
        <span>Panier</span>
    </a>
</li>
<li class="right account-menu">
    <a href="#" class="snipcart-customer-signin">
        <span class="icon-wrapper" style="position: relative; display: inline-block;">
            <iconify-icon class="user-icon" icon="mynaui:user" width="30" height="30"></iconify-icon>
            <span class="status-dot"></span>
        </span>
        <span>Compte</span>
    </a>

    <!-- Dropdown menu -->
<ul class="account-dropdown">
    <li><a href="#" class="order-history">Order History</a></li>
    <li><a href="#" class="logout">Logout</a></li>
</ul>
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