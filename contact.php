<?php $currentPage = 'contact'; ?> <!-- For the class"Active" in the components -->

<!doctype html>
<html lang="fr">

<head>
  <meta charset="utf-8">
  <title>Contact</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong">
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
  <script src="script.js"></script>
</head>

<body>
  <!-- NAVBAR -->
  <?php include "components/navbar.php" ?>

  <!-- Main -->
  <section class="contact-section">
    <section class="left-contact-section">
      <h1>test</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, reiciendis? Facere voluptatibus ex
        laudantium
        consequatur, fugit possimus recusandae hic ipsam? Rem natus necessitatibus odio incidunt est, harum fugiat
        impedit
        nemo?</p>
    </section>

    <section class="right-contact-section">
      <div class="contact-intro">
        <h2 class="contact-title">Nous contacter</h2>
        <p class="contact-description">
          Pour nous contacter, remplissez le formulaire ci-dessous.
        </p>
      </div>

      <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">

        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
        <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
        <input type="hidden" name="from_name" value="My Website" />

        <div class="form-group-container">
          <div class="form-group">
            <label for="name" class="form-label">Nom</label>
            <input id="name" name="name" class="form-input" placeholder="Votre nom" type="text" />
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input id="email" name="email" class="form-input" placeholder="Votre email" type="email" />
          </div>
          <div class="form-group">
            <label for="phone" class="form-label">Téléphone</label>
            <input id="phone" name="phone" class="form-input" type="text" />
          </div>
          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-textarea" id="message" name="message" placeholder="Message"></textarea>
          </div>
        </div>
        <button class="form-submit" type="submit">Envoyer</button>
      </form>

    </section>
  </section>

  <!-- FOOTER -->
  <?php include "components/footer.php" ?>

</html>