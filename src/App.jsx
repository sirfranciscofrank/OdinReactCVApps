import { Header } from "./components/Header"
import { EducationSection, ExperienceSection } from "./components/Section"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div
      className="min-h-screen py-14 px-4"
      style={{ backgroundColor: 'var(--page)' }}
    >
      {/* Ghost label above the card */}
      <p style={{
        textAlign: 'center',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '0.5rem',
        letterSpacing: '0.55em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.12)',
        marginBottom: '1.5rem',
        userSelect: 'none',
      }}>
        Curriculum Vitae
      </p>

      {/* CV card */}
      <main
        className="mx-auto"
        style={{
          maxWidth: '780px',
          backgroundColor: 'var(--paper)',
          borderLeft: '3px solid var(--terra)',
          boxShadow: '0 0 100px rgba(0,0,0,0.55), 0 4px 32px rgba(0,0,0,0.35)',
          padding: '3.5rem 4.5rem 3.5rem 4.25rem',
        }}
      >
        <Header />
        <EducationSection />
        <ExperienceSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
