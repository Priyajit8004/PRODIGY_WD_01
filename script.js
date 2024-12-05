// Sticky navbar effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#222';
    } else {
        navbar.style.background = 'linear-gradient(90deg, #333, #555)';
    }
});
