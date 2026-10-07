import React from 'react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    const handleScroll =
        (targetId: string) => (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
            event.preventDefault()

            const targetElement = document.getElementById(targetId)

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
        }

    return (
        <footer className="footer">
            <div className="container footer-main">
                <div className="footer-col footer-col-brand">
                    <a
                        href="#hero"
                        className="footer-logo"
                        onClick={handleScroll('hero')}
                        aria-label="ConsultPro home"
                    >
                        <span className="footer-logo-icon" aria-hidden="true">
                            ◆
                        </span>
                        <span className="footer-logo-text">ConsultPro</span>
                    </a>

                    <p className="footer-description">
                        Empowering modern businesses with senior technical advisory,
                        high-performance web applications, and intuitive digital product design.
                    </p>

                    <div className="footer-status-badge">
                        <span className="footer-status-dot" aria-hidden="true" />
                        <span>Accepting new client advisory engagements</span>
                    </div>

                    <div className="footer-social-links" aria-label="Social and professional links">
                        <a
                            href="mailto:hello@consultpro.example.com"
                            className="footer-social-btn"
                            aria-label="Send us an email"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </a>

                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-btn"
                            aria-label="Visit ConsultPro on GitHub"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-btn"
                            aria-label="Connect on LinkedIn"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>

                        <a
                            href="https://maps.google.com/?q=Connaught+Place,New+Delhi,India"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-btn"
                            aria-label="View office location on Google Maps"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="footer-col footer-col-nav">
                    <h3 className="footer-heading">Navigation</h3>
                    <ul className="footer-links">
                        <li>
                            <a href="#hero" onClick={handleScroll('hero')}>Home</a>
                        </li>
                        <li>
                            <a href="#introduction" onClick={handleScroll('introduction')}>About Our Practice</a>
                        </li>
                        <li>
                            <a href="#services" onClick={handleScroll('services')}>Services &amp; Capabilities</a>
                        </li>
                        <li>
                            <a href="#consultation" onClick={handleScroll('consultation')}>Book a Consultation</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={handleScroll('contact')}>Contact &amp; Location</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-col footer-col-services">
                    <h3 className="footer-heading">Key Services</h3>
                    <ul className="footer-links">
                        <li>
                            <a href="#services" onClick={handleScroll('services')}>Web &amp; Cloud Development</a>
                        </li>
                        <li>
                            <a href="#services" onClick={handleScroll('services')}>UI/UX &amp; Product Design</a>
                        </li>
                        <li>
                            <a href="#services" onClick={handleScroll('services')}>React &amp; Frontend Systems</a>
                        </li>
                        <li>
                            <a href="#services" onClick={handleScroll('services')}>Digital Transformation</a>
                        </li>
                        <li>
                            <a href="#services" onClick={handleScroll('services')}>Custom Software Engineering</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-col footer-col-contact">
                    <h3 className="footer-heading">Contact &amp; Office</h3>
                    <div className="footer-contact-details">
                        <div className="footer-contact-row">
                            <span className="footer-contact-label">Email</span>
                            <a href="mailto:hello@consultpro.example.com" className="footer-contact-value">
                                hello@consultpro.example.com
                            </a>
                        </div>
                        <div className="footer-contact-row">
                            <span className="footer-contact-label">Phone</span>
                            <a href="tel:+911234567890" className="footer-contact-value">
                                +91 12345 67890
                            </a>
                        </div>
                        <div className="footer-contact-row">
                            <span className="footer-contact-label">Office Location</span>
                            <span className="footer-contact-value">
                                Level 4, Connaught Place, New Delhi, 110001, India
                            </span>
                        </div>
                        <div className="footer-contact-row">
                            <span className="footer-contact-label">Business Hours</span>
                            <span className="footer-contact-value">
                                Mon – Fri: 9:00 AM – 6:00 PM IST
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-wrapper">
                <div className="container footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} ConsultPro Advisory Services. All rights reserved.
                    </p>

                    <div className="footer-bottom-meta">
                        <div className="footer-compliance-group">
                            <span className="footer-compliance-tag">Confidentiality Assured</span>
                            <span className="footer-compliance-dot" aria-hidden="true">•</span>
                            <span className="footer-compliance-tag">NDAs Honored</span>
                        </div>
                        <button
                            type="button"
                            className="footer-back-to-top"
                            onClick={handleScroll('hero')}
                            aria-label="Back to top of page"
                        >
                            Back to Top ↑
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer