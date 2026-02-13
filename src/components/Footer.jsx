import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-motivation reveal-on-scroll">
                <div className="motivation-content">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000"
                        alt="Motivational Posters"
                        className="motivation-img"
                    />
                    <div className="motivation-text">
                        <h3>Stay <span className="gradient-text">Focused</span>.</h3>
                        <p>Consistent discipline leads to extraordinary results. We believe in your journey.</p>
                    </div>
                </div>
            </div>
            <div className="container footer-container">
                <div className="footer-col">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                        <img
                            src="https://t4.ftcdn.net/jpg/05/54/85/47/360_F_554854785_51cLgZpLQixPvUt3qRvMtvYoEDOCGev5.jpg"
                            alt="NexGen Logo"
                            style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover' }}
                        />
                        <h4 style={{ marginBottom: 0 }}>NexGen</h4>
                    </div>
                    <p>Creating digital experiences that matter.</p>
                    <div className="social-links">
                        <a href="#"><i className="ri-twitter-x-fill"></i></a>
                        <a href="#"><i className="ri-github-fill"></i></a>
                        <a href="#"><i className="ri-dribbble-fill"></i></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4>Product</h4>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Documentation</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                    </ul>
                </div>
            </div>

            {/* Featured Assets Section */}
            <div className="container footer-assets reveal-on-scroll">
                <div className="assets-grid">
                    <div className="asset-card">
                        <img
                            src="https://www.shutterstock.com/shutterstock/photos/2016233150/display_1500/stock-vector-modern-abstract-digital-alphabet-font--technology-typography-creative-urban-sport-fashion-2016233150.jpg"
                            alt="Typography Asset"
                        />
                        <div className="asset-info">
                            <h4>Digital Typography</h4>
                            <p>Modern abstract font designs.</p>
                        </div>
                    </div>
                    <div className="asset-card">
                        <img
                            src="https://t3.ftcdn.net/jpg/02/69/82/76/360_F_269827623_3BuO9pyLBluaRnqd1T0Sh02ZkEjZpbqj.jpg"
                            alt="Futuristic Tech Asset"
                        />
                        <div className="asset-info">
                            <h4>Futuristic Tech</h4>
                            <p>Premium abstract patterns.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5 Logos with Text Section */}
            <div className="container footer-partners">
                <div className="partners-grid">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="partner-item">
                            <img
                                src={`https://picsum.photos/seed/footer-logo-${i}/100/100`}
                                alt={`Partner ${i}`}
                                className="partner-logo"
                            />
                            <span>Partner {i}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 NexGen Digital. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
