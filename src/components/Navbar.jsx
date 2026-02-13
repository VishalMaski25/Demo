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
        <nav className="navbar" style={navbarStyle}>
            <div className="container nav-container">
                <div className="brand">
                    <a href="#" id="logo" className="logo-text" onClick={handleLogoClick} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img
                            src="https://t4.ftcdn.net/jpg/05/54/85/47/360_F_554854785_51cLgZpLQixPvUt3qRvMtvYoEDOCGev5.jpg"
                            alt="NexGen Logo"
                            style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                        />
                        {logoText}
                    </a>
                </div>

                <ul className="nav-links desktop-only">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="nav-actions desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div className="user-stack" style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <img
                                key={i}
                                src={`https://picsum.photos/seed/nav-${i}/40/40`}
                                alt={`User ${i}`}
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    border: '2px solid var(--bg-color)',
                                    marginLeft: i === 1 ? '0' : '-10px',
                                    objectFit: 'cover'
                                }}
                            />
                        ))}
                    </div>
                    <a href="#" className="btn btn-primary">Get Started</a>
                </div>

                <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Menu" onClick={toggleSidebar}>
                    <i class="ri-menu-3-line"></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
