import React from 'react'

export interface Service {
  id: string
  title: string
  description: string
  icon: string
}

interface ServicesProps {
  onSelectService?: (service: Service) => void
}

const SERVICES: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'Build modern, responsive, and scalable websites and web applications based on your business requirements.',
    icon: 'web-development',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Create intuitive and user-friendly digital experiences with a focus on usability, clarity, and consistency.',
    icon: 'ui-ux-design',
  },
  {
    id: 'react-frontend',
    title: 'React & Frontend Development',
    description:
      'Develop fast, maintainable frontend applications using modern React and frontend technologies.',
    icon: 'react-frontend',
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    description:
      'Explore practical strategies and technical approaches aligned with your business goals and priorities.',
    icon: 'business-consulting',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description:
      'Identify opportunities to improve digital workflows, customer experiences, and technology adoption.',
    icon: 'digital-transformation',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    description:
      'Plan and develop tailored software solutions around specific business processes and requirements.',
    icon: 'custom-software',
  },
]

const renderServiceIcon = (icon: string) => {
  switch (icon) {
    case 'web-development':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="m10 9-2 2 2 2" />
          <path d="m14 9 2 2-2 2" />
        </svg>
      )
    case 'ui-ux-design':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      )
    case 'react-frontend':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    case 'business-consulting':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
          <polyline points="15 9 19 9 19 13" />
        </svg>
      )
    case 'digital-transformation':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    case 'custom-software':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      )
    default:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const handleServiceSelect = (service: Service) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('service-selected', {
          detail: {
            id: service.id,
            title: service.title,
          },
        })
      )
    }

    if (onSelectService) {
      onSelectService(service)
    }

    const consultationElement = document.getElementById('consultation')
    if (consultationElement) {
      consultationElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      setTimeout(() => {
        const serviceSelect = document.getElementById('service')
        if (serviceSelect) {
          serviceSelect.focus({ preventScroll: true })
        }
      }, 400)
    }
  }

  return (
    <section
      id="services"
      className="section services-section"
      aria-labelledby="services-heading"
    >
      <div className="container services-container">
        <div className="services-header">
          <div className="services-eyebrow-wrapper">
            <span className="services-eyebrow">WHAT WE CAN HELP WITH</span>
          </div>

          <h2 id="services-heading" className="services-title">
            Solutions tailored to your goals
          </h2>

          <p className="services-description">
            Explore our areas of expertise and choose the service that best
            matches your current needs.
          </p>
        </div>

        <div
          className="services-grid"
          role="list"
          aria-label="Available consultation services"
        >
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="services-card"
              role="listitem"
            >
              <div className="services-card-icon" aria-hidden="true">
                {renderServiceIcon(service.icon)}
              </div>

              <div className="services-card-body">
                <h3 className="services-card-title">{service.title}</h3>
                <p className="services-card-desc">{service.description}</p>
              </div>

              <div className="services-card-action">
                <button
                  type="button"
                  className="button button-secondary services-card-button"
                  onClick={() => handleServiceSelect(service)}
                  aria-label={`Discuss ${service.title} service`}
                >
                  <span>Discuss This Service</span>
                  <span className="services-button-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
