import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h4>NexGen</h4>
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
            <div className="footer-bottom">
                <p>&copy; 2026 NexGen Digital. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
