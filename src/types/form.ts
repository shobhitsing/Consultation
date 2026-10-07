export interface ConsultationFormData {
  fullName: string
  email: string
  company: string
  country: string
  phone: string
  service: string
  message: string
  consent: boolean
}

export type FormErrors = Partial<
  Record<keyof ConsultationFormData, string>
>

export const COUNTRY_OPTIONS = [
  'India',
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Singapore',
  'United Arab Emirates',
  'Other',
] as const

export const SERVICE_OPTIONS = [
  'Web Development',
  'UI/UX Design',
  'React & Frontend Development',
  'Business Consulting',
  'Digital Transformation',
  'Custom Software Solutions',
  'Other',
] as const

export const SERVICE_ID_MAP: Record<string, string> = {
  'web-development': 'Web Development',
  'ui-ux-design': 'UI/UX Design',
  'react-frontend': 'React & Frontend Development',
  'business-consulting': 'Business Consulting',
  'digital-transformation': 'Digital Transformation',
  'custom-software': 'Custom Software Solutions',
}
