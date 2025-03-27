// Smooth fade-in for cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card, .letter-card');
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transition = 'opacity 1s ease';
        setTimeout(() => card.style.opacity = 1, 100);
    });
});
