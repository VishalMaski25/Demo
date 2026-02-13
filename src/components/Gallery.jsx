import React from 'react';

const Gallery = () => {
    // 10 random images with descriptive text
    const items = [
        { id: 1, title: 'Modern Architecture', desc: 'Sleek designs for the future.', color: 'var(--primary)' },
        { id: 2, title: 'Deep Learning', desc: 'Understanding the neural pathways.', color: 'var(--secondary)' },
        { id: 3, title: 'Digital Nomad', desc: 'Work from anywhere in the world.', color: 'var(--accent)' },
        { id: 4, title: 'Cloud Computing', desc: 'Scalable solutions for every need.', color: 'var(--primary)' },
        { id: 5, title: 'Cyber Security', desc: 'Protecting your digital footprint.', color: 'var(--secondary)' },
        { id: 6, title: 'Creative Minds', desc: 'Innovation through collaboration.', color: 'var(--accent)' },
        { id: 7, title: 'Sustainable Tech', desc: 'Building a greener tomorrow.', color: 'var(--primary)' },
        { id: 8, title: 'Quantum Computing', desc: 'The next frontier of processing.', color: 'var(--secondary)' },
        { id: 9, title: 'Space Exploration', desc: 'Reaching beyond the stars.', color: 'var(--accent)' },
        { id: 10, title: 'Artificial Intel', desc: 'Smart systems, simpler lives.', color: 'var(--primary)' },
    ];

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <div className="section-header reveal-on-scroll">
                    <h2>Our Vision in <span className="gradient-text">Pixels</span></h2>
                    <p>A collection of inspiration and technology.</p>
                </div>
                <div className="gallery-grid">
                    {items.map((item, index) => (
                        <div key={item.id} className="gallery-item reveal-on-scroll" style={{ '--delay': `${index * 0.1}s` }}>
                            <div className="gallery-img-wrapper">
                                <img
                                    src={`https://picsum.photos/seed/${item.id + 100}/600/600`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <div className="gallery-overlay">
                                    <span className="gallery-badge" style={{ backgroundColor: item.color }}>{item.id.toString().padStart(2, '0')}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
