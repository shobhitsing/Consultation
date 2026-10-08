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
        <p id={id} className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 font-medium" role="alert">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-100 text-red-600 font-bold text-[10px]" aria-hidden="true">
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
        isSelect = false
    ) => {
        const hasError = Boolean(errors[fieldName])
        const base =
            'w-full rounded-xl border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none transition-all duration-200'
        const padding = isSelect
            ? 'px-4 py-3 pr-10 appearance-none cursor-pointer'
            : 'px-4 py-3'
        const state = hasError
            ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100 bg-red-50/20'
            : 'border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-slate-400'

        return `${base} ${padding} ${state}`
    }

    return (
        <section
            id="consultation"
            className="py-20 lg:py-28 bg-white border-b border-slate-200"
            aria-labelledby="consultation-heading"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-600 bg-blue-50 border border-blue-200/60 mb-3 shadow-xs">
                        <span>GET IN TOUCH</span>
                    </div>

                    <h2
                        id="consultation-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
                    >
                        Tell us about your project
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                        Share a few details about your requirements and
                        we&apos;ll use them to understand how we can help.
                    </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/50">
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit}
                        noValidate
                        aria-label="Consultation Request Form"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="block text-sm font-semibold text-slate-700 mb-2"
                                >
                                    Full Name{' '}
                                    <span
                                        className="text-red-500"
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

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-slate-700 mb-2"
                                >
                                    Email Address{' '}
                                    <span
                                        className="text-red-500"
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

                            <div>
                                <label
                                    htmlFor="company"
                                    className="block text-sm font-semibold text-slate-700 mb-2"
                                >
                                    Company{' '}
                                    <span className="text-xs font-normal text-slate-500">
                                        (Optional)
                                    </span>
                                </label>

                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-slate-400 transition-all duration-200"
                                    placeholder="Enter your company name"
                                    value={formData.company}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    autoComplete="organization"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-semibold text-slate-700 mb-2"
                                >
                                    Phone Number{' '}
                                    <span
                                        className="text-red-500"
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
                                    <span className="block mt-1.5 text-xs text-slate-500">
                                        e.g., +1 (555) 000-0000 or +91 98765 43210
                                    </span>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="country"
                                    className="block text-sm font-semibold text-slate-700 mb-2"
                                >
                                    Country{' '}
                                    <span
                                        className="text-red-500"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </label>

                                <div className="relative">
                                    <select
                                        id="country"
                                        name="country"
                                        className={getInputClassName('country', true)}
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
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400" aria-hidden="true">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                <FormError
                                    id="country-error"
                                    message={errors.country}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="service"
                                    className="block text-sm font-semibold text-slate-700 mb-2"
                                >
                                    Service / Requirement{' '}
                                    <span
                                        className="text-red-500"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </label>

                                <div
                                    className={`relative rounded-xl transition-all duration-300 ${
                                        highlightService ? 'ring-4 ring-blue-500/40' : ''
                                    }`}
                                >
                                    <select
                                        id="service"
                                        name="service"
                                        className={getInputClassName('service', true)}
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
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400" aria-hidden="true">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                <FormError
                                    id="service-error"
                                    message={errors.service}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-slate-700"
                                >
                                    Message{' '}
                                    <span
                                        className="text-red-500"
                                        aria-hidden="true"
                                    >
                                        *
                                    </span>
                                </label>

                                {formData.message.length > 0 && (
                                    <span
                                        className={`text-xs font-medium ${
                                            formData.message.trim().length >= 10
                                                ? 'text-emerald-600'
                                                : 'text-slate-400'
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
                                className={`${getInputClassName('message')} resize-y`}
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

                        <div className="space-y-1">
                            <label
                                htmlFor="consent"
                                className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                                    errors.consent
                                        ? 'border-red-400 bg-red-50/20'
                                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
                                }`}
                            >
                                <input
                                    id="consent"
                                    name="consent"
                                    type="checkbox"
                                    className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
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

                                <span className="text-sm text-slate-700 leading-snug">
                                    I agree to be contacted regarding my
                                    consultation request.{' '}
                                    <span
                                        className="text-red-500"
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

                        <div className="pt-2">
                            <button
                                type="submit"
                                id="submit-consultation-btn"
                                className="w-full sm:w-auto min-w-[240px] inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
                                disabled={isSubmitting}
                                aria-busy={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="inline-flex items-center gap-2">
                                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
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