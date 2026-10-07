import { useEffect, useState } from 'react'
import type {
    ChangeEvent,
    FocusEvent,
    FormEvent,
} from 'react'
import { toast } from 'react-toastify'

import {
    COUNTRY_OPTIONS,
    SERVICE_ID_MAP,
    SERVICE_OPTIONS,
} from '../types/form'
import type {
    ConsultationFormData,
    FormErrors,
} from '../types/form'
import { saveConsultation } from '../utils/consultationStorage'
import {
    validateConsultationForm,
    validateField,
} from '../utils/validation'

const INITIAL_FORM_DATA: ConsultationFormData = {
    fullName: '',
    email: '',
    company: '',
    country: '',
    phone: '',
    service: '',
    message: '',
    consent: false,
}

interface FormErrorProps {
    id: string
    message?: string
}

const FormError = ({ id, message }: FormErrorProps) => {
    if (!message) {
        return null
    }

    return (
        <p id={id} className="form-error-msg" role="alert">
            <span className="form-error-icon" aria-hidden="true">
                !
            </span>
            {message}
        </p>
    )
}

const ConsultationForm = () => {
    const [formData, setFormData] =
        useState<ConsultationFormData>(INITIAL_FORM_DATA)

    const [errors, setErrors] = useState<FormErrors>({})
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [touchedFields, setTouchedFields] =
        useState<Record<string, boolean>>({})
    const [highlightService, setHighlightService] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        const handleServiceSelected = (event: Event) => {
            const customEvent =
                event as CustomEvent<{ id: string; title: string }>

            const { id, title } = customEvent.detail || {}
            const selectedService = SERVICE_ID_MAP[id] || title

            if (!selectedService) {
                return
            }

            setFormData((prev) => ({
                ...prev,
                service: selectedService,
            }))

            setHighlightService(true)
            const timer = setTimeout(() => {
                setHighlightService(false)
            }, 2500)

            setErrors((prev) => {
                if (!prev.service) {
                    return prev
                }

                const nextErrors = { ...prev }
                delete nextErrors.service

                return nextErrors
            })

            return () => clearTimeout(timer)
        }

        window.addEventListener(
            'service-selected',
            handleServiceSelected
        )

        return () => {
            window.removeEventListener(
                'service-selected',
                handleServiceSelected
            )
        }
    }, [])

    const updateFieldError = (
        fieldName: keyof ConsultationFormData,
        data: ConsultationFormData
    ) => {
        const fieldError = validateField(fieldName, data)

        setErrors((prev) => {
            const nextErrors = { ...prev }

            if (fieldError) {
                nextErrors[fieldName] = fieldError
            } else {
                delete nextErrors[fieldName]
            }

            return nextErrors
        })
    }

    const handleChange = (
        event: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name, value, type } = event.target

        const fieldValue =
            type === 'checkbox'
                ? (event.target as HTMLInputElement).checked
                : value

        const updatedFormData = {
            ...formData,
            [name]: fieldValue,
        }

        setFormData(updatedFormData)

        if (
            hasSubmitted ||
            touchedFields[name] ||
            errors[name as keyof FormErrors] ||
            name === 'consent'
        ) {
            updateFieldError(
                name as keyof ConsultationFormData,
                updatedFormData
            )
        }
    }

    const handleBlur = (
        event: FocusEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        const { name } = event.target

        setTouchedFields((prev) => ({
            ...prev,
            [name]: true,
        }))

        updateFieldError(
            name as keyof ConsultationFormData,
            formData
        )
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setHasSubmitted(true)

        const validationErrors =
            validateConsultationForm(formData)

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length > 0) {
            const firstErrorKey =
                Object.keys(validationErrors)[0]

            document.getElementById(firstErrorKey)?.focus()

            return
        }

        setIsSubmitting(true)

        try {
            const savedConsultation = saveConsultation(formData)

            if (!savedConsultation) {
                toast.error(
                    'Something went wrong. Please try again.'
                )
                setIsSubmitting(false)
                return
            }

            if (import.meta.env.DEV) {
                console.log('Consultation submission successful:', {
                    id: savedConsultation.id,
                    submittedAt: savedConsultation.submittedAt,
                })
            }

            toast.success(
                'Your consultation request has been submitted successfully!'
            )

            setFormData(INITIAL_FORM_DATA)
            setErrors({})
            setTouchedFields({})
            setHasSubmitted(false)
        } finally {
            setIsSubmitting(false)
        }
    }

    const getInputClassName = (
        fieldName: keyof FormErrors,
        baseClass = 'form-input'
    ) => {
        return `${baseClass} ${errors[fieldName] ? 'form-input-error' : ''
            }`
    }

    return (
        <section
            id="consultation"
            className="section consultation-section"
            aria-labelledby="consultation-heading"
        >
            <div className="container consultation-container">
                <div className="consultation-header">
                    <div className="consultation-eyebrow-wrapper">
                        <span className="consultation-eyebrow">
                            GET IN TOUCH
                        </span>
                    </div>

                    <h2
                        id="consultation-heading"
                        className="consultation-title"
                    >
                        Tell us about your project
                    </h2>

                    <p className="consultation-description">
                        Share a few details about your requirements and
                        we&apos;ll use them to understand how we can help.
                    </p>
                </div>

                <div className="consultation-card">
                    <form
                        className="consultation-form"
                        onSubmit={handleSubmit}
                        noValidate
                        aria-label="Consultation Request Form"
                    >
                        <div className="form-grid">
                            <div className="form-group">
                                <label
                                    htmlFor="fullName"
                                    className="form-label"
                                >
                                    Full Name{' '}
                                    <span
                                        className="form-required"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </label>

                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    className={getInputClassName('fullName')}
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    aria-required="true"
                                    aria-invalid={Boolean(errors.fullName)}
                                    aria-describedby={
                                        errors.fullName
                                            ? 'fullName-error'
                                            : undefined
                                    }
                                    autoComplete="name"
                                />

                                <FormError
                                    id="fullName-error"
                                    message={errors.fullName}
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="email"
                                    className="form-label"
                                >
                                    Email Address{' '}
                                    <span
                                        className="form-required"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={getInputClassName('email')}
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    aria-required="true"
                                    aria-invalid={Boolean(errors.email)}
                                    aria-describedby={
                                        errors.email
                                            ? 'email-error'
                                            : undefined
                                    }
                                    autoComplete="email"
                                />

                                <FormError
                                    id="email-error"
                                    message={errors.email}
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="company"
                                    className="form-label"
                                >
                                    Company{' '}
                                    <span className="form-optional">
                                        (Optional)
                                    </span>
                                </label>

                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    className="form-input"
                                    placeholder="Enter your company name"
                                    value={formData.company}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="organization"
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="phone"
                                    className="form-label"
                                >
                                    Phone Number{' '}
                                    <span
                                        className="form-required"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </label>

                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    className={getInputClassName('phone')}
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    aria-required="true"
                                    aria-invalid={Boolean(errors.phone)}
                                    aria-describedby={
                                        errors.phone
                                            ? 'phone-error'
                                            : undefined
                                    }
                                    autoComplete="tel"
                                />

                                <FormError
                                    id="phone-error"
                                    message={errors.phone}
                                />
                                {!errors.phone && (
                                    <span className="form-hint">
                                        e.g., +1 (555) 000-0000 or +91 98765 43210
                                    </span>
                                )}
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="country"
                                    className="form-label"
                                >
                                    Country{' '}
                                    <span
                                        className="form-required"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </label>

                                <div className="form-select-wrapper">
                                    <select
                                        id="country"
                                        name="country"
                                        className={getInputClassName(
                                            'country',
                                            'form-select'
                                        )}
                                        value={formData.country}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                        aria-required="true"
                                        aria-invalid={Boolean(errors.country)}
                                        aria-describedby={
                                            errors.country
                                                ? 'country-error'
                                                : undefined
                                        }
                                    >
                                        <option value="">
                                            Select your country
                                        </option>

                                        {COUNTRY_OPTIONS.map(
                                            (countryOption) => (
                                                <option
                                                    key={countryOption}
                                                    value={countryOption}
                                                >
                                                    {countryOption}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>

                                <FormError
                                    id="country-error"
                                    message={errors.country}
                                />
                            </div>

                            <div className="form-group">
                                <label
                                    htmlFor="service"
                                    className="form-label"
                                >
                                    Service / Requirement{' '}
                                    <span
                                        className="form-required"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </label>

                                <div
                                    className={`form-select-wrapper ${highlightService ? 'form-select-highlight' : ''
                                        }`}
                                >
                                    <select
                                        id="service"
                                        name="service"
                                        className={getInputClassName(
                                            'service',
                                            'form-select'
                                        )}
                                        value={formData.service}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                        aria-required="true"
                                        aria-invalid={Boolean(errors.service)}
                                        aria-describedby={
                                            errors.service
                                                ? 'service-error'
                                                : undefined
                                        }
                                    >
                                        <option value="">
                                            Select a service
                                        </option>

                                        {SERVICE_OPTIONS.map(
                                            (serviceOption) => (
                                                <option
                                                    key={serviceOption}
                                                    value={serviceOption}
                                                >
                                                    {serviceOption}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>

                                <FormError
                                    id="service-error"
                                    message={errors.service}
                                />
                            </div>
                        </div>

                        <div className="form-group form-group-full">
                            <div className="form-label-row">
                                <label
                                    htmlFor="message"
                                    className="form-label"
                                >
                                    Message{' '}
                                    <span
                                        className="form-required"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </label>

                                {formData.message.length > 0 && (
                                    <span
                                        className={`form-char-count ${formData.message.trim().length >= 10
                                            ? 'is-valid'
                                            : ''
                                            }`}
                                        aria-live="polite"
                                    >
                                        {formData.message.trim().length} / 10 min characters
                                    </span>
                                )}
                            </div>

                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                className={getInputClassName(
                                    'message',
                                    'form-textarea'
                                )}
                                placeholder="Tell us about your project, goals, challenges, or requirements..."
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                aria-required="true"
                                aria-invalid={Boolean(errors.message)}
                                aria-describedby={
                                    errors.message
                                        ? 'message-error'
                                        : undefined
                                }
                            />

                            <FormError
                                id="message-error"
                                message={errors.message}
                            />
                        </div>

                        <div className="form-group form-group-full form-consent-group">
                            <label
                                htmlFor="consent"
                                className={`form-consent-label ${errors.consent
                                    ? 'form-consent-error'
                                    : ''
                                    }`}
                            >
                                <input
                                    id="consent"
                                    name="consent"
                                    type="checkbox"
                                    className="form-checkbox"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    aria-required="true"
                                    aria-invalid={Boolean(errors.consent)}
                                    aria-describedby={
                                        errors.consent
                                            ? 'consent-error'
                                            : undefined
                                    }
                                />

                                <span className="form-consent-text">
                                    I agree to be contacted regarding my
                                    consultation request.{' '}
                                    <span
                                        className="form-required"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </span>
                            </label>

                            <FormError
                                id="consent-error"
                                message={errors.consent}
                            />
                        </div>

                        <div className="form-actions">
                            <button
                                type="submit"
                                id="submit-consultation-btn"
                                className="button button-primary form-submit-btn"
                                disabled={isSubmitting}
                                aria-busy={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="btn-loading-content">
                                        <span className="spinner" aria-hidden="true" />
                                        Submitting Request...
                                    </span>
                                ) : (
                                    'Submit Consultation Request'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ConsultationForm