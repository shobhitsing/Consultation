import React from 'react'

const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            className="section contact-section"
            aria-labelledby="contact-heading"
        >
            <div className="container contact-container">
                <div className="contact-header">
                    <div className="contact-eyebrow-wrapper">
                        <span className="contact-eyebrow">GET IN TOUCH</span>
                    </div>

                    <h2 id="contact-heading" className="contact-title">
                        Let&apos;s start a conversation.
                    </h2>

                    <p className="contact-description">
                        Have a question or want to discuss your project? Reach out to our
                        team or visit our office.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon" aria-hidden="true">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </div>

                            <div className="contact-item-details">
                                <h3>Email</h3>
                                <a href="mailto:hello@consultpro.example.com">
                                    hello@consultpro.example.com
                                </a>
                                <span className="contact-subtext">Typically replies within 24 hours</span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon" aria-hidden="true">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>

                            <div className="contact-item-details">
                                <h3>Phone</h3>
                                <a href="tel:+911234567890">
                                    +91 12345 67890
                                </a>
                                <span className="contact-subtext">Mon – Fri, 9:00 AM – 6:00 PM IST</span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon" aria-hidden="true">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>

                            <div className="contact-item-details">
                                <h3>Office</h3>
                                <p>
                                    Level 4, Connaught Place, Barakhamba Road,
                                    <br />
                                    New Delhi, 110001, India
                                </p>
                                <a
                                    href="https://maps.google.com/?q=Connaught+Place,New+Delhi,India"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-map-link"
                                >
                                    Get Directions &rarr;
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-map-wrapper">
                        <div className="contact-map">
                            <iframe
                                title="Office location on Google Maps"
                                src="https://www.google.com/maps?q=New+Delhi,India&output=embed"
                                className="contact-map-iframe"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact