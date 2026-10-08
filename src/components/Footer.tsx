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
        <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:gap-8 lg:grid-cols-12 pb-12 border-b border-slate-800/80">
                    <div className="col-span-2 lg:col-span-4 flex flex-col items-start pb-6 border-b border-slate-800/80 lg:border-none lg:pb-0">
                        <a
                            href="#hero"
                            className="group inline-flex items-center gap-2.5 text-white font-bold text-xl tracking-tight mb-4 hover:opacity-90 transition-opacity"
                            onClick={handleScroll('hero')}
                            aria-label="ConsultPro home"
                        >
                            <span className="text-blue-500 text-lg leading-none inline-block transition-transform duration-300 group-hover:rotate-45" aria-hidden="true">
                                ◆
                            </span>
                            <span>ConsultPro</span>
                        </a>

                        <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
                            Empowering modern businesses with senior technical advisory,
                            high-performance web applications, and intuitive digital product design.
                        </p>

                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                            <span>Accepting new client advisory engagements</span>
                        </div>

                        <div className="flex items-center gap-3" aria-label="Social and professional links">
                            <a
                                href="mailto:hello@consultpro.example.com"
                                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
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
                                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
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
                                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
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
                                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                                aria-label="View office location on Google Maps"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Navigation</h3>
                        <ul className="space-y-2.5 text-sm list-none p-0 m-0">
                            <li>
                                <a href="#hero" className="text-slate-400 hover:text-white transition-colors" onClick={handleScroll('hero')}>Home</a>
                            </li>
                            <li>
                                <a href="#introduction" className="text-slate-400 hover:text-white transition-colors" onClick={handleScroll('introduction')}>About Our Practice</a>
                            </li>
                            <li>
                                <a href="#services" className="text-slate-400 hover:text-white transition-colors" onClick={handleScroll('services')}>Services &amp; Capabilities</a>
                            </li>
                            <li>
                                <a href="#consultation" className="text-slate-400 hover:text-white transition-colors" onClick={handleScroll('consultation')}>Book a Consultation</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-slate-400 hover:text-white transition-colors" onClick={handleScroll('contact')}>Contact &amp; Location</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-3">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Key Services</h3>
                        <ul className="space-y-2.5 text-sm list-none p-0 m-0">
                            <li>
                                <a href="#services" className="text-slate-400 hover:text-white transition-colors" onClick={handleScroll('services')}>Web &amp; Cloud Development</a>
                            </li>
                            <li>
                                <a href="#services" className="text-slate-400 hover:text-white transition-colors" onClick={handleScroll('services')}>UI/UX &amp; Product Design</a>
                            </li>
                            <li>
                                <a href="#services" className="text-slate-400 hover:text-white transition-colors" onClick={handleScroll('services')}>React &amp; Frontend Systems</a>
                            </li>
                            <li>
                                <a href="#services" className="text-slate-400 hover:text-white transition-colors" onClick={handleScroll('services')}>Digital Transformation</a>
                            </li>
                            <li>
                                <a href="#services" className="text-slate-400 hover:text-white transition-colors" onClick={handleScroll('services')}>Custom Software Engineering</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 lg:col-span-3 pt-6 border-t border-slate-800/80 lg:border-none lg:pt-0">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Contact &amp; Office</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-sm">
                            <div>
                                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-0.5">Email</span>
                                <a href="mailto:hello@consultpro.example.com" className="text-slate-300 hover:text-white transition-colors font-medium">
                                    hello@consultpro.example.com
                                </a>
                            </div>
                            <div>
                                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-0.5">Phone</span>
                                <a href="tel:+911234567890" className="text-slate-300 hover:text-white transition-colors font-medium">
                                    +91 12345 67890
                                </a>
                            </div>
                            <div>
                                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-0.5">Office Location</span>
                                <span className="text-slate-400 text-xs leading-relaxed block">
                                    Level 4, Connaught Place, New Delhi, 110001, India
                                </span>
                            </div>
                            <div>
                                <span className="block text-xs text-slate-500 uppercase tracking-wider mb-0.5">Business Hours</span>
                                <span className="text-slate-400 text-xs block">
                                    Mon – Fri: 9:00 AM – 6:00 PM IST
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
                    <p>
                        © {currentYear} ConsultPro Advisory Services. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5">
                        <div className="flex items-center gap-2">
                            <span>Confidentiality Assured</span>
                            <span aria-hidden="true">•</span>
                            <span>NDAs Honored</span>
                        </div>

                        <button
                            type="button"
                            className="inline-flex items-center gap-1 text-slate-400 hover:text-white font-medium transition-colors cursor-pointer"
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