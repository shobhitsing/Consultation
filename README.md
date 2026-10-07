# ConsultPro — Request a Consultation

A modern, responsive consultation landing page and client intake application built with **React 19**, **TypeScript**, and **Vite**.

The project is designed for digital agencies, consulting companies, and software development teams that need a professional way to present their services and collect consultation requests from potential clients.

---

## Overview

ConsultPro provides a complete consultation experience from service discovery to form submission.

The page includes:

- Professional sticky navigation
- Hero section with clear call-to-action
- Consultation process overview
- Interactive services section
- Consultation request form
- Client-side form validation
- Service pre-selection from service cards
- Toast notifications
- Browser localStorage persistence
- Contact information
- Google Maps integration
- Responsive layout
- Accessible form controls and navigation
- Dynamic footer copyright year

The current implementation is a **React frontend application**. Form submissions are currently stored in the browser using `localStorage` and can later be connected to a backend or CRM.

---

## Features

### 1. Hero Section

The hero section introduces the consultation service with a clear value proposition.

Includes:

- "Request a Consultation" headline
- Supporting description
- Primary CTA — Request a Consultation
- Secondary CTA — Explore Our Services
- Consultation workflow preview

The workflow highlights:

1. Discovery & Objectives
2. Strategy & Architecture
3. Action Plan & Kickoff

---

### 2. Consultation Process

The introduction section explains how the consultation works.

It focuses on:

- Understanding client requirements
- Exploring suitable solutions
- Defining clear next steps

This section helps users understand what they can expect before submitting the form.

---

### 3. Services

The application provides six consultation/service categories:

- Web Development
- UI/UX Design
- React & Frontend Development
- Business Consulting
- Digital Transformation
- Custom Software Solutions

Each service includes a short description and an action to discuss that service.

When a user selects **"Discuss This Service"**:

1. The selected service is identified.
2. A custom browser event is dispatched.
3. The consultation form receives the selected service.
4. The user is smoothly scrolled to the consultation form.

This creates a simple connection between service discovery and lead submission.

---

### 4. Consultation Form

The consultation form collects the following information:

- Full Name
- Business Email
- Company / Organization
- Country / Region
- Phone Number
- Service / Requirement
- Project Message
- Consent Agreement

The form includes:

- Required field validation
- Email validation
- Phone validation
- Message length validation
- Consent validation
- Field-level error messages
- Accessible error states
- Validation on blur
- Validation during input changes
- Validation on submit
- Automatic focus on the first invalid field

---

### 5. Form Notifications

The project uses **React Toastify** for user feedback.

Users receive notifications when:

- A consultation request is submitted successfully
- A submission cannot be saved
- An unexpected form error occurs

The form is reset after a successful submission.

---

### 6. Local Data Persistence

Consultation requests are currently stored in the browser using:

```text
localStorage