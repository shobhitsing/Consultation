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
      className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 border border-blue-200/60 mb-3 shadow-xs">
            <span>WHAT WE CAN HELP WITH</span>
          </div>

          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Solutions tailored to your goals
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore our areas of expertise and choose the service that best
            matches your current needs.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          role="list"
          aria-label="Available consultation services"
        >
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group relative rounded-2xl border border-slate-200/90 bg-white p-7 sm:p-8 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              role="listitem"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm" aria-hidden="true">
                  {renderServiceIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-50 hover:bg-blue-600 hover:text-white group/btn transition-all duration-200 active:scale-95 cursor-pointer"
                  onClick={() => handleServiceSelect(service)}
                  aria-label={`Discuss ${service.title} service`}
                >
                  <span>Discuss This Service</span>
                  <span className="transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true">
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
