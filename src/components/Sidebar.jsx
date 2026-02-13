import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            {/* Overlay for mobile sidebar */}
            <div
                className={`overlay ${isOpen ? 'active' : ''}`}
                id="overlay"
                onClick={toggleSidebar}
            ></div>

            {/* Sidebar */}
            <aside className={`sidebar ${isOpen ? 'active' : ''}`} id="sidebar">
                <div className="sidebar-header">
                    <h3 className="sidebar-logo">Menu</h3>
                    <button
                        className="close-sidebar"
                        id="close-sidebar"
                        aria-label="Close Menu"
                        onClick={toggleSidebar}
                    >
                        <i className="ri-close-line"></i>
                    </button>
                </div>
                <ul className="sidebar-links">
                    <li><a href="#home" onClick={toggleSidebar}><i className="ri-home-4-line"></i> Home</a></li>
                    <li><a href="#products" onClick={toggleSidebar}><i className="ri-macbook-line"></i> Products</a></li>
                    <li><a href="#about" onClick={toggleSidebar}><i className="ri-team-line"></i> About</a></li>
                    <li><a href="#contact" onClick={toggleSidebar}><i className="ri-mail-send-line"></i> Contact</a></li>
                </ul>
                <div className="sidebar-footer">
                    <a href="#" className="btn btn-primary btn-block">Get Started</a>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
