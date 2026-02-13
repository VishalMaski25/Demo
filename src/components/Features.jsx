import React from 'react';

const Features = () => {
    return (
        <section id="products" className="features">
            <div className="container">
                <div className="section-header reveal-on-scroll">
                    <h2>Why Choose Us</h2>
                    <p>Crafted with precision and passion.</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card reveal-on-scroll">
                        <div className="icon-box"><i className="ri-speed-mini-line"></i></div>
                        <h3>Fast Performance</h3>
                        <p>Lightning fast load times and smooth interactions.</p>
                    </div>
                    <div className="feature-card reveal-on-scroll">
                        <div className="icon-box"><i className="ri-layout-masonry-line"></i></div>
                        <h3>Responsive Layout</h3>
                        <p>Looks amazing on desktops, tablets, and mobile devices.</p>
                    </div>
                    <div className="feature-card reveal-on-scroll">
                        <div className="icon-box"><i className="ri-shield-check-line"></i></div>
                        <h3>Secure & Reliable</h3>
                        <p>Built with best practices for security and stability.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
