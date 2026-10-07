import type { ConsultationFormData, FormErrors } from '../types/form'

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const PHONE_CHAR_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]+$/

export function validateConsultationForm(data: ConsultationFormData): FormErrors {
  const errors: FormErrors = {}

  const trimmedName = data.fullName.trim()
  if (!trimmedName) {
    errors.fullName = 'Full Name is required.'
  } else if (trimmedName.length < 2) {
    errors.fullName = 'Full Name must be at least 2 characters.'
  }

  const trimmedEmail = data.email.trim()
  if (!trimmedEmail) {
    errors.email = 'Email Address is required.'
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.'
  }

  const trimmedCountry = data.country.trim()
  if (!trimmedCountry) {
    errors.country = 'Please select your country.'
  }

  const trimmedPhone = data.phone.trim()
  const digitsOnly = trimmedPhone.replace(/\D/g, '')
  if (!trimmedPhone) {
    errors.phone = 'Phone Number is required.'
  } else if (
    digitsOnly.length < 7 ||
    digitsOnly.length > 15 ||
    !PHONE_CHAR_REGEX.test(trimmedPhone)
  ) {
    errors.phone = 'Please enter a valid phone number (at least 7 digits).'
  }

  const trimmedService = data.service.trim()
  if (!trimmedService) {
    errors.service = 'Please select a service or requirement.'
  }

  const trimmedMessage = data.message.trim()
  if (!trimmedMessage) {
    errors.message = 'Message is required.'
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  if (!data.consent) {
    errors.consent = 'You must agree to be contacted regarding your consultation request.'
  }

  return errors
}

export function validateField(
  field: keyof ConsultationFormData,
  data: ConsultationFormData
): string | undefined {
  const allErrors = validateConsultationForm(data)
  return allErrors[field]
}

export function isFormValid(errors: FormErrors): boolean {
  return Object.keys(errors).length === 0
}
