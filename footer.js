const footerHTML = `
  <div id="pre_footer">
    <div id="left_column">
      <h2>Horaires d'ouverture</h2>
      <p>Lundi : Fermé</p>
      <p>Mardi : Fermé</p>
      <p>Mercredi : Fermé</p>
      <p>Jeudi : Fermé</p>
      <p>Vendredi : Fermé</p>
      <p>Samedi : Fermé</p>
      <p>Dimanche : Fermé</p>
    </div>
    <div id="center_column">
      <img src="medias/logo_cabane.png" alt="Logo">
    </div>
    <div id="right_column">
      <h2>Contact et Informations</h2>
      <p>Tel : 07.89.92.93.04</p>
      <p>Mail : contact@lacabane-champeix.com</p>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <p>La Cabane - Champeix © 2026</p>
  </footer>
`;

// Insert it into the page
document.getElementById('footer-container').innerHTML = footerHTML;