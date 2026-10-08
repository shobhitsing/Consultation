import React from 'react'

const Hero: React.FC = () => {
    const handleScroll =
        (targetId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault()

            const targetElement = document.getElementById(targetId)

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            }
        }

    return (
        <section
            id="hero"
            className="relative bg-gradient-to-b from-white to-slate-50 text-slate-900 py-16 sm:py-20 lg:py-24 border-b border-slate-200"
            aria-labelledby="hero-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col items-start">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-600/10 border border-blue-600/20 mb-6">
                        <span>LET&apos;S WORK TOGETHER</span>
                    </div>

                    <h1
                        id="hero-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6"
                    >
                        Request a Consultation
                    </h1>

                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
                        Tell us about your goals, challenges, or project requirements. Our
                        team will review your request and get back to you with the right
                        next steps.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10 w-full sm:w-auto">
                        <a
                            href="#consultation"
                            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
                            onClick={handleScroll('consultation')}
                        >
                            Request a Consultation
                        </a>

                        <a
                            href="#services"
                            className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
                            onClick={handleScroll('services')}
                        >
                            Explore Our Services
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-6 border-t border-slate-200 text-sm text-slate-600 w-full">
                        <div className="flex items-center gap-2">
                            <span
                                className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 font-bold text-xs"
                                aria-hidden="true"
                            >
                                ✓
                            </span>
                            <span className="font-medium">Free Initial Discovery</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span
                                className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 font-bold text-xs"
                                aria-hidden="true"
                            >
                                ✓
                            </span>
                            <span className="font-medium">24-Hour Response</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span
                                className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-600 font-bold text-xs"
                                aria-hidden="true"
                            >
                                ✓
                            </span>
                            <span className="font-medium">No Obligation</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
                    <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 sm:p-7 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                            <div className="inline-flex items-center gap-2 text-slate-900 font-semibold text-sm">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span>Consultation Intake</span>
                            </div>

                            <span className="text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md uppercase tracking-wider">
                                Advisory Workflow
                            </span>
                        </div>

                        <div className="space-y-3 py-5">
                            <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200 hover:bg-white hover:border-blue-600/30 transition-all">
                                <div
                                    className="w-7 h-7 rounded-md bg-blue-600/10 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0"
                                    aria-hidden="true"
                                >
                                    01
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900 mb-0.5">
                                        Discovery &amp; Objectives
                                    </h3>

                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        Review your business scope and requirements
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200 hover:bg-white hover:border-blue-600/30 transition-all">
                                <div
                                    className="w-7 h-7 rounded-md bg-blue-600/10 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0"
                                    aria-hidden="true"
                                >
                                    02
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900 mb-0.5">
                                        Strategy &amp; Architecture
                                    </h3>

                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        Define technical roadmap &amp; milestones
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-slate-50 border border-slate-200 hover:bg-white hover:border-blue-600/30 transition-all">
                                <div
                                    className="w-7 h-7 rounded-md bg-blue-600/10 text-blue-600 font-bold text-xs flex items-center justify-center shrink-0"
                                    aria-hidden="true"
                                >
                                    03
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900 mb-0.5">
                                        Action Plan &amp; Kickoff
                                    </h3>

                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        Clear next steps and engagement options
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-dashed border-slate-200 flex items-center gap-2 text-xs text-slate-500 font-medium">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>Direct team review within 24 business hours</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
