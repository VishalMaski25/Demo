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
                    <div className="glass-card">
                        <i className="ri-code-s-slash-line card-icon"></i>
                        <h3>Clean Code</h3>
                        <p>Optimized for performance and readability.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
