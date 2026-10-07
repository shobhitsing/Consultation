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

    const handleScroll =
        (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault()
            setIsMobileMenuOpen(false)
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
        <header className="navbar">
            <div className="container navbar-container">
                <a
                    href="#hero"
                    className="navbar-brand"
                    onClick={handleScroll('hero')}
                    aria-label="ConsultPro home"
                >
                    <span
                        className="navbar-logo-icon"
                        aria-hidden="true"
                    >
                        ◆
                    </span>

                    <span className="navbar-brand-text">
                        ConsultPro
                    </span>
                </a>

                <nav
                    id="primary-navigation"
                    className={`navbar-nav ${isMobileMenuOpen ? 'navbar-nav-open' : ''}`}
                    aria-label="Main navigation"
                >
                    <ul className="navbar-links">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
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
                        className="button button-primary navbar-cta"
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
                        aria-controls="primary-navigation"
                    >
                        <span className="navbar-toggle-bar" />
                        <span className="navbar-toggle-bar" />
                        <span className="navbar-toggle-bar" />
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                    className="navbar-backdrop"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </header>
    )
}

export default Navbar