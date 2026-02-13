import React, { useState, useEffect } from 'react';

const Navbar = ({ toggleSidebar }) => {
    const [logoText, setLogoText] = useState('NexGen');
    const [scrolled, setScrolled] = useState(false);

    const logoOptions = [
        "NexGen", "Aurora.io", "Vortex", "Cipher", "Zenith", "NovaLabs", "Prism"
    ];

    const getRandomLogo = () => {
        const randomIndex = Math.floor(Math.random() * logoOptions.length);
        return logoOptions[randomIndex];
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        // Simple fade effect could be enhanced with CSS or animation library
        // For now, just change state
        setLogoText(getRandomLogo());
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Set initial random logo
        setLogoText(getRandomLogo());

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarStyle = scrolled ? {
        background: 'rgba(11, 11, 14, 0.95)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    } : {
        background: 'rgba(11, 11, 14, 0.8)',
        boxShadow: 'none'
    };

    return (
        <nav class="navbar" style={navbarStyle}>
            <div class="container nav-container">
                <div class="brand">
                    <a href="#" id="logo" class="logo-text" onClick={handleLogoClick}>{logoText}</a>
                </div>

                <ul class="nav-links desktop-only">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div class="nav-actions desktop-only">
                    <a href="#" class="btn btn-primary">Get Started</a>
                </div>

                <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Menu" onClick={toggleSidebar}>
                    <i class="ri-menu-3-line"></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
