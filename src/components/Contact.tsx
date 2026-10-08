import React from 'react'

const Contact: React.FC = () => {
    return (
        <section
            id="contact"
            className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200"
            aria-labelledby="contact-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 border border-blue-200/60 mb-3 shadow-xs">
                        <span>GET IN TOUCH</span>
                    </div>

                    <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Let&apos;s start a conversation.
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                        Have a question or want to discuss your project? Reach out to our
                        team or visit our office.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    <div className="lg:col-span-5 flex flex-col gap-5">
                        <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-xs" aria-hidden="true">
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

                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email</h3>
                                <a href="mailto:hello@consultpro.example.com" className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                                    hello@consultpro.example.com
                                </a>
                                <span className="block text-xs text-slate-500 mt-1">Typically replies within 24 hours</span>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-xs" aria-hidden="true">
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

                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Phone</h3>
                                <a href="tel:+911234567890" className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                                    +91 12345 67890
                                </a>
                                <span className="block text-xs text-slate-500 mt-1">Mon – Fri, 9:00 AM – 6:00 PM IST</span>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 shadow-xs" aria-hidden="true">
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

                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Office</h3>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    Level 4, Connaught Place, Barakhamba Road,
                                    <br />
                                    New Delhi, 110001, India
                                </p>
                                <a
                                    href="https://maps.google.com/?q=Connaught+Place,New+Delhi,India"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 mt-2"
                                >
                                    Get Directions &rarr;
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg bg-white h-full min-h-[350px]">
                            <iframe
                                title="Office location on Google Maps"
                                src="https://www.google.com/maps?q=New+Delhi,India&output=embed"
                                className="w-full h-full min-h-[350px] border-0"
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