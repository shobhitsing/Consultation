import React from 'react'

interface SupportingPoint {
    id: string
    stepNumber: string
    title: string
    description: string
}

const SUPPORTING_POINTS: SupportingPoint[] = [
    {
        id: 'requirements',
        stepNumber: '01',
        title: 'Understand Your Requirements',
        description:
            'Discuss your goals, challenges, business needs, and technical requirements.',
    },
    {
        id: 'solutions',
        stepNumber: '02',
        title: 'Explore Suitable Solutions',
        description:
            'Identify practical approaches based on your project scope and priorities.',
    },
    {
        id: 'next-steps',
        stepNumber: '03',
        title: 'Define Next Steps',
        description:
            'Create a clear direction for the next stage of your project or engagement.',
    },
]

const Introduction: React.FC = () => {
    return (
        <section
            id="introduction"
            className="py-20 lg:py-28 bg-white border-b border-slate-200"
            aria-labelledby="intro-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 border border-blue-100 mb-4">
                        <span>ABOUT THE CONSULTATION</span>
                    </div>

                    <h2 id="intro-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                        Let&apos;s understand your goals and find the right path forward.
                    </h2>

                    <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                        <p>
                            Every project starts with understanding the right problem. A
                            consultation gives us an opportunity to learn about your goals,
                            challenges, technical requirements, and priorities before
                            recommending the next steps.
                        </p>

                        <p>
                            Whether you are planning a new digital product, improving an
                            existing application, or exploring a technical solution, we can
                            use the consultation to understand your requirements and identify
                            suitable options.
                        </p>
                    </div>
                </div>

                <div
                    className="lg:col-span-7 flex flex-col gap-4"
                    role="list"
                    aria-label="Consultation focus areas"
                >
                    {SUPPORTING_POINTS.map((point) => (
                        <div
                            key={point.id}
                            className="group p-6 rounded-2xl border border-slate-200/80 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex items-start gap-5"
                            role="listitem"
                        >
                            <div
                                className="w-12 h-12 rounded-xl bg-blue-100/70 text-blue-700 font-bold flex items-center justify-center text-base shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm"
                                aria-hidden="true"
                            >
                                {point.stepNumber}
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                                    {point.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Introduction
