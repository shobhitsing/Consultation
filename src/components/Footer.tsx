import React from 'react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    const handleScroll =
        (targetId: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
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
            <div className="container footer-container">
                <div className="footer-brand">
                    <a
                        href="#hero"
                        className="footer-logo"
                        onClick={handleScroll('hero')}
                        aria-label="ConsultPro home"
                    >
                        <span
                            className="footer-logo-icon"
                            aria-hidden="true"
                        >
                            ◆
                        </span>

                        <span className="footer-logo-text">
                            ConsultPro
                        </span>
                    </a>

                    <p className="footer-description">
                        Helping businesses turn ideas and requirements into
                        practical digital solutions.
                    </p>
                </div>

                <nav
                    className="footer-nav"
                    aria-label="Footer navigation"
                >
                    <a
                        href="#hero"
                        onClick={handleScroll('hero')}
                    >
                        Home
                    </a>

                    <a
                        href="#services"
                        onClick={handleScroll('services')}
                    >
                        Services
                    </a>

                    <a
                        href="#consultation"
                        onClick={handleScroll('consultation')}
                    >
                        Consultation
                    </a>

                    <a
                        href="#contact"
                        onClick={handleScroll('contact')}
                    >
                        Contact
                    </a>
                </nav>
            </div>

            <div className="container footer-bottom">
                <p>
                    © {currentYear} ConsultPro. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer