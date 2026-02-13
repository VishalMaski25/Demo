import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="badge">Version 2.0 Now Available</span>
                    <h1 className="hero-title">Experience the <span className="gradient-text">Future</span> of Web Design.</h1>
                    <p className="hero-subtitle">
                        A premium, responsive, and dynamic interface built for the modern web.
                        Featuring glassmorphism, smooth animations, and a user-centric layout.
                    </p>
                    <div className="hero-btns">
                        <a href="#" className="btn btn-primary">Start Building</a>
                        <a href="#" className="btn btn-secondary"><i className="ri-play-circle-line"></i> Watch Demo</a>
                    </div>
                </div>
                {/* Abstract visual element/placeholder */}
                <div className="hero-visual">
                    <div className="glowing-orb"></div>
                    <div className="glass-card" style={{ zIndex: 2 }}>
                        <i className="ri-code-s-slash-line card-icon"></i>
                        <h3>Clean Code</h3>
                        <p>Optimized for performance and readability.</p>
                    </div>
                    {/* New User Requested Image Card */}
                    <div className="image-card" style={{
                        position: 'absolute',
                        bottom: '-20px',
                        right: '-20px',
                        width: '200px',
                        height: '200px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                        transform: 'rotate(5deg)',
                        zIndex: 1
                    }}>
                        <img
                            src="https://t4.ftcdn.net/jpg/05/54/85/47/360_F_554854785_51cLgZpLQixPvUt3qRvMtvYoEDOCGev5.jpg"
                            alt="Featured"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
