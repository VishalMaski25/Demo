document.addEventListener('DOMContentLoaded', () => {
    // --- Random Logo Generator ---
    const logoElement = document.getElementById('logo');
    const logoOptions = [
        "NexGen",
        "Aurora.io",
        "Vortex",
        "Cipher",
        "Zenith",
        "NovaLabs",
        "Prism"
    ];

    const getRandomLogo = () => {
        const randomIndex = Math.floor(Math.random() * logoOptions.length);
        return logoOptions[randomIndex];
    };

    // Set initial logo
    logoElement.textContent = getRandomLogo();

    // Optional: Change logo on click (fun interaction)
    logoElement.addEventListener('click', (e) => {
        e.preventDefault();
        logoElement.style.opacity = '0';
        setTimeout(() => {
            logoElement.textContent = getRandomLogo();
            logoElement.style.opacity = '1';
        }, 200);
    });

    // --- Sidebar Toggle Logic ---
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    const overlay = document.getElementById('overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-links a');

    const toggleMenu = () => {
        const isActive = sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : ''; // Prevent background scrolling
    };

    const closeMenu = () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    menuToggle.addEventListener('click', toggleMenu);
    closeSidebar.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Close sidebar when clicking a link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(11, 11, 14, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(11, 11, 14, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // --- Simple Reveal Animation on Scroll ---
    const revealElements = document.querySelectorAll('.feature-card, .section-header');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for reveal elements
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    console.log("Welcome to NexGen Demo - Loaded Successfully");
});
