import React, { useEffect, useState } from 'react'

const NAV_ITEMS = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'consultation', label: 'Consultation' },
    { id: 'contact', label: 'Contact' },
]

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScrollState = () => {
            setIsScrolled(window.scrollY > 16)
        }

        window.addEventListener('scroll', handleScrollState, { passive: true })
        return () => window.removeEventListener('scroll', handleScrollState)
    }, [])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false)
            }
        }

        const handleResize = () => {
            if (window.innerWidth > 768 && isMobileMenuOpen) {
                setIsMobileMenuOpen(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('resize', handleResize)
        }
    }, [isMobileMenuOpen])

    useEffect(() => {
        const sectionElements = NAV_ITEMS.map((item) =>
            document.getElementById(item.id)
        ).filter(Boolean) as HTMLElement[]

        if (sectionElements.length === 0) return

        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, observerOptions)

        sectionElements.forEach((el) => observer.observe(el))

        return () => {
            sectionElements.forEach((el) => observer.unobserve(el))
        }
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    const handleScroll =
        (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault()
            setIsMobileMenuOpen(false)
            document.body.style.overflow = ''
            setActiveSection(id)

            const target = document.getElementById(id)

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
        }

    return (
        <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <a
                    href="#hero"
                    className="navbar-brand"
                    onClick={handleScroll('hero')}
                    aria-label="ConsultPro home"
                >
                    <span className="navbar-logo-icon" aria-hidden="true">
                        ◆
                    </span>
                    <span className="navbar-brand-text">
                        ConsultPro
                    </span>
                </a>

                <nav
                    id="primary-navigation"
                    className="navbar-nav-desktop"
                    aria-label="Main navigation"
                >
                    <ul className="navbar-links">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id} className="navbar-item">
                                <a
                                    href={`#${item.id}`}
                                    className={`navbar-link ${activeSection === item.id ? 'is-active' : ''}`}
                                    onClick={handleScroll(item.id)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="navbar-action">
                    <a
                        href="#consultation"
                        className="button button-primary navbar-cta navbar-desktop-cta"
                        onClick={handleScroll('consultation')}
                    >
                        Get Started
                    </a>

                    <button
                        type="button"
                        className={`navbar-toggle ${isMobileMenuOpen ? 'is-active' : ''}`}
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        aria-expanded={isMobileMenuOpen}
                        aria-label={
                            isMobileMenuOpen
                                ? 'Close navigation menu'
                                : 'Open navigation menu'
                        }
                        aria-controls="mobile-navigation"
                    >
                        <span className="navbar-toggle-bar" />
                        <span className="navbar-toggle-bar" />
                        <span className="navbar-toggle-bar" />
                    </button>
                </div>
            </div>

            <div
                id="mobile-navigation"
                className={`navbar-mobile-drawer ${isMobileMenuOpen ? 'is-open' : ''}`}
            >
                <ul className="navbar-mobile-links">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.id} className="navbar-mobile-item">
                            <a
                                href={`#${item.id}`}
                                className={`navbar-mobile-link ${activeSection === item.id ? 'is-active' : ''}`}
                                onClick={handleScroll(item.id)}
                            >
                                <span>{item.label}</span>
                                <span className="navbar-mobile-arrow" aria-hidden="true">→</span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="navbar-mobile-footer">
                    <a
                        href="#consultation"
                        className="button button-primary navbar-mobile-btn"
                        onClick={handleScroll('consultation')}
                    >
                        Get Started
                    </a>

                    <div className="navbar-mobile-contact">
                        <a href="tel:+911234567890" className="navbar-mobile-contact-link">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            +91 12345 67890
                        </a>
                        <a href="mailto:hello@consultpro.example.com" className="navbar-mobile-contact-link">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            hello@consultpro.example.com
                        </a>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                    className="navbar-backdrop"
                    onClick={() => {
                        setIsMobileMenuOpen(false)
                        document.body.style.overflow = ''
                    }}
                    aria-hidden="true"
                />
            )}
        </header>
    )
}

export default Navbar