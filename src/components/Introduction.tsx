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
      className="section intro-section"
      aria-labelledby="intro-heading"
    >
      <div className="container intro-container">
        <div className="intro-content">
          <div className="intro-eyebrow-wrapper">
            <span className="intro-eyebrow">ABOUT THE CONSULTATION</span>
          </div>

          <h2 id="intro-heading" className="intro-title">
            Let&apos;s understand your goals and find the right path forward.
          </h2>

          <div className="intro-text-group">
            <p className="intro-text">
              Every project starts with understanding the right problem. A
              consultation gives us an opportunity to learn about your goals,
              challenges, technical requirements, and priorities before
              recommending the next steps.
            </p>

            <p className="intro-text">
              Whether you are planning a new digital product, improving an
              existing application, or exploring a technical solution, we can
              use the consultation to understand your requirements and identify
              suitable options.
            </p>
          </div>
        </div>

        <div
          className="intro-points"
          role="list"
          aria-label="Consultation focus areas"
        >
          {SUPPORTING_POINTS.map((point) => (
            <div key={point.id} className="intro-card" role="listitem">
              <div className="intro-card-badge" aria-hidden="true">
                {point.stepNumber}
              </div>

              <div className="intro-card-content">
                <h3 className="intro-card-title">{point.title}</h3>
                <p className="intro-card-desc">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Introduction
