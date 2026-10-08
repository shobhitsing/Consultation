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
        <header
            className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${isScrolled
                ? 'bg-slate-950/95 shadow-xl shadow-slate-950/30 border-slate-800 backdrop-blur-md'
                : 'bg-slate-950/90 border-slate-800/60 backdrop-blur-md'
                }`}
        >
            <div
                className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-16 md:h-20'
                    }`}
            >
                <a
                    href="#hero"
                    className="group inline-flex items-center gap-2.5 text-white font-bold text-xl tracking-tight hover:opacity-90 transition-opacity"
                    onClick={handleScroll('hero')}
                    aria-label="ConsultPro home"
                >
                    <span
                        className="text-blue-500 text-lg leading-none inline-block transition-transform duration-300 group-hover:rotate-45"
                        aria-hidden="true"
                    >
                        ◆
                    </span>
                    <span>ConsultPro</span>
                </a>

                <nav
                    id="primary-navigation"
                    className="hidden md:flex items-center"
                    aria-label="Main navigation"
                >
                    <ul className="flex items-center gap-2 list-none m-0 p-0">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className={`px-3.5 py-2 text-sm transition-colors ${activeSection === item.id
                                        ? 'text-blue-500 font-semibold'
                                        : 'text-slate-300 hover:text-white font-medium'
                                        }`}
                                    onClick={handleScroll(item.id)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#consultation"
                        className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-200 active:scale-95"
                        onClick={handleScroll('consultation')}
                    >
                        Get Started
                    </a>

                    <button
                        type="button"
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/70 border border-slate-800/80 transition-colors p-2 gap-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        aria-expanded={isMobileMenuOpen}
                        aria-label={
                            isMobileMenuOpen
                                ? 'Close navigation menu'
                                : 'Open navigation menu'
                        }
                        aria-controls="mobile-navigation"
                    >
                        <span
                            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <span
                            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </button>
                </div>
            </div>

            <div
                id="mobile-navigation"
                className={`md:hidden absolute top-full left-0 w-full bg-[#090d16] border-b border-slate-800 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden z-50 ${isMobileMenuOpen
                    ? 'max-h-[520px] opacity-100 visible py-6 px-4 sm:px-6'
                    : 'max-h-0 opacity-0 invisible py-0 px-4 sm:px-6 pointer-events-none'
                    }`}
            >
                <ul className="flex flex-col gap-2 list-none p-0 m-0 mb-6">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeSection === item.id
                                    ? 'text-white bg-blue-600/20 border border-blue-500/40 font-semibold'
                                    : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent'
                                    }`}
                                onClick={handleScroll(item.id)}
                            >
                                <span>{item.label}</span>
                                <span className="text-slate-400 text-sm" aria-hidden="true">
                                    →
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-4">
                    <a
                        href="#consultation"
                        className="w-full text-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 transition-all active:scale-95"
                        onClick={handleScroll('consultation')}
                    >
                        Get Started
                    </a>

                    <div className="flex flex-col gap-2.5 text-xs text-slate-400 pt-1">
                        <a
                            href="tel:+911234567890"
                            className="inline-flex items-center gap-2 hover:text-slate-200 transition-colors"
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            +91 12345 67890
                        </a>
                        <a
                            href="mailto:hello@consultpro.example.com"
                            className="inline-flex items-center gap-2 hover:text-slate-200 transition-colors"
                        >
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
                    className="fixed inset-0 top-16 z-40 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 md:hidden"
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