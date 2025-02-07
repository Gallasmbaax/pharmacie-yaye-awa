// Gestion du formulaire de contact
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    this.reset();
});

// Gestion du formulaire d'avis
document.getElementById('review-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre avis !');
    this.reset();
});