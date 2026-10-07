import type { ConsultationFormData } from '../types/form'

export interface StoredConsultation extends ConsultationFormData {
  id: string
  submittedAt: string
}

export const STORAGE_KEY = 'consultation_requests'

const generateUniqueId = (): string => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `consultation_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export const getConsultations = (): StoredConsultation[] => {
  try {
    const rawData = localStorage.getItem(STORAGE_KEY)
    if (!rawData) {
      return []
    }

    const parsedData = JSON.parse(rawData)
    return Array.isArray(parsedData) ? parsedData : []
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Failed to retrieve consultations from localStorage:', error)
    }
    return []
  }
}

export const saveConsultation = (
  formData: ConsultationFormData,
): StoredConsultation | null => {
  try {
    const existingConsultations = getConsultations()

    const newConsultation: StoredConsultation = {
      ...formData,
      id: generateUniqueId(),
      submittedAt: new Date().toISOString(),
    }

    const updatedConsultations = [...existingConsultations, newConsultation]

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updatedConsultations),
    )

    return newConsultation
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Failed to save consultation to localStorage:', error)
    }
    return null
  }
}

export const clearConsultations = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Failed to clear consultations from localStorage:', error)
    }
  }
}
