import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Services from './components/Services'
import ConsultationForm from './components/ConsultationForm'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        pauseOnHover
        closeOnClick
        theme="light"
      />

      <Navbar />

      <main>
        <Hero />
        <Introduction />
        <Services />
        <ConsultationForm />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App