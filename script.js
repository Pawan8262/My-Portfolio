document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark-theme') {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    } else {
        // Default to light theme if no preference is saved
        body.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light-theme');
        }
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        for (let i = 0; i < revealElements.length; i++) {
            const windowHeight = window.innerHeight;
            const revealTop = revealElements[i].getBoundingClientRect().top;
            const revealPoint = 150; // Adjust this value to control when the animation triggers

            if (revealTop < windowHeight - revealPoint) {
                revealElements[i].classList.add('active');
            } else {
                revealElements[i].classList.remove('active'); // Optional: removes animation if scrolled back up
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run on page load to reveal elements already in view

    // Smooth Scrolling for Navbar Links
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});