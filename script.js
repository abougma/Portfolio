// script.js

// Exemple d'effet de survol pour afficher les détails des projets
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Afficher les détails du projet au survol
        card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
        // Revenir à l'état initial au survol
        card.style.boxShadow = 'none';
    });
});
