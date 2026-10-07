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
            className="hero-section"
            aria-labelledby="hero-heading"
        >
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-eyebrow-wrapper">
                        <span className="hero-eyebrow">LET&apos;S WORK TOGETHER</span>
                    </div>

                    <h1 id="hero-heading" className="hero-title">
                        Request a Consultation
                    </h1>

                    <p className="hero-description">
                        Tell us about your goals, challenges, or project requirements. Our
                        team will review your request and get back to you with the right
                        next steps.
                    </p>

                    <div className="hero-actions">
                        <a
                            href="#consultation"
                            className="button button-primary hero-btn-primary"
                            onClick={handleScroll('consultation')}
                        >
                            Request a Consultation
                        </a>

                        <a
                            href="#services"
                            className="button button-secondary hero-btn-secondary"
                            onClick={handleScroll('services')}
                        >
                            Explore Our Services
                        </a>
                    </div>

                    <div className="hero-trust-badges">
                        <div className="hero-trust-item">
                            <span className="hero-trust-icon" aria-hidden="true">✓</span>
                            <span>Free Initial Discovery</span>
                        </div>
                        <div className="hero-trust-item">
                            <span className="hero-trust-icon" aria-hidden="true">✓</span>
                            <span>24-Hour Response</span>
                        </div>
                        <div className="hero-trust-item">
                            <span className="hero-trust-icon" aria-hidden="true">✓</span>
                            <span>No Obligation</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-card">
                        <div className="hero-card-header">
                            <div className="hero-card-badge">
                                <span className="hero-card-pulse" aria-hidden="true" />
                                <span>Consultation Intake</span>
                            </div>

                            <span className="hero-card-tag">Advisory Workflow</span>
                        </div>

                        <div className="hero-card-body">
                            <div className="hero-step">
                                <div className="hero-step-badge" aria-hidden="true">01</div>

                                <div className="hero-step-details">
                                    <span className="hero-step-name">
                                        Discovery &amp; Objectives
                                    </span>

                                    <span className="hero-step-desc">
                                        Review your business scope and requirements
                                    </span>
                                </div>
                            </div>

                            <div className="hero-step">
                                <div className="hero-step-badge" aria-hidden="true">02</div>

                                <div className="hero-step-details">
                                    <span className="hero-step-name">
                                        Strategy &amp; Architecture
                                    </span>

                                    <span className="hero-step-desc">
                                        Define technical roadmap &amp; milestones
                                    </span>
                                </div>
                            </div>

                            <div className="hero-step">
                                <div className="hero-step-badge" aria-hidden="true">03</div>

                                <div className="hero-step-details">
                                    <span className="hero-step-name">
                                        Action Plan &amp; Kickoff
                                    </span>

                                    <span className="hero-step-desc">
                                        Clear next steps and engagement options
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="hero-card-footer">
                            <span className="hero-card-commitment">
                                ✓ We review every consultation request carefully
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

