import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    id: 0,
    title: 'Food Delivery App',
    subtitle: 'iOS · SwiftUI · Firebase',
    tags: ['Swift', 'SwiftUI', 'Firebase', 'iOS'],
    description:
      'Vollständige Food-Delivery-App für iPhone mit Echtzeit-Datenbankanbindung via Firebase, Nutzerauthentifizierung und modernem SwiftUI-Interface.',
    github: 'https://github.com/Emami-114/BiarFoodiphone',
    demo: null,
    type: 'mobile',
    status: 'COMPLETE',
  },
  {
    id: 1,
    title: 'Admin Dashboard (macOS)',
    subtitle: 'macOS · Swift · Firebase',
    tags: ['Swift', 'macOS', 'Firebase', 'Dashboard'],
    description:
      'Native macOS Admin-Dashboard zur Verwaltung des Food-Delivery-Backends. Erstellt mit Swift und Firebase für Echtzeit-Datenverwaltung.',
    github: 'https://github.com/Emami-114/BiarFoodMac',
    demo: null,
    type: 'desktop',
    status: 'COMPLETE',
  },
  {
    id: 2,
    title: 'Einbürgerungstest-App',
    subtitle: 'Android · Kotlin · Firebase',
    tags: ['Kotlin', 'Android', 'Firebase', 'Compose'],
    description:
      'Android-App zur Vorbereitung auf den deutschen Einbürgerungstest (Leben in Deutschland). Mit Fragenkatalogen, Fortschrittsverfolgung und Firebase-Backend.',
    github: 'https://github.com/Emami-114/lebenInDeutschland',
    demo: null,
    type: 'mobile',
    status: 'COMPLETE',
  },
  {
    id: 3,
    title: 'Learn App (Android)',
    subtitle: 'Android · Jetpack Compose · Firebase',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Android'],
    description:
      'Lern-App für Android mit Jetpack Compose. Beinhaltet Kurse, Quizze und Lernfortschrittsverfolgung mit Firebase-Integration.',
    github: 'https://github.com/Emami-114/LearnProject_Compose',
    demo: null,
    type: 'mobile',
    status: 'COMPLETE',
  },
  {
    id: 4,
    title: 'MalDeals Backend API',
    subtitle: 'C# · ASP.NET · REST API',
    tags: ['C#', 'ASP.NET', 'REST', 'Backend'],
    description:
      'Backend-Service mit C# und ASP.NET Core. Vollständige REST-API mit Authentifizierung, Scalar-Dokumentation und Live-Deployment.',
    github: 'https://github.com/Emami-114/MalDealsBackend',
    demo: 'https://api.maldeals.de/scalar',
    type: 'backend',
    status: 'LIVE',
    credentials: { email: 'test@test.com', password: '123456' },
  },
]

const TYPE_COLORS = {
  mobile: 'green',
  desktop: 'cyan',
  backend: 'yellow',
}

const STATUS_COLORS = {
  COMPLETE: 'green',
  LIVE: 'cyan',
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects">
      <p className="section-label">ls -la ~/projects/</p>
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">total {PROJECTS.length} entries</p>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <article
            key={p.id}
            className={`project-card type-${TYPE_COLORS[p.type]}${active === p.id ? ' expanded' : ''}`}
            onClick={() => setActive(active === p.id ? null : p.id)}
          >
            <div className="card-top">
              <div className="card-header-row">
                <span className={`card-status status-${STATUS_COLORS[p.status]}`}>
                  [{p.status}]
                </span>
                <span className={`card-type-badge badge-${TYPE_COLORS[p.type]}`}>
                  {p.type.toUpperCase()}
                </span>
              </div>

              <h3 className="card-title">{p.title}</h3>
              <p className="card-subtitle">{p.subtitle}</p>

              <div className="card-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <div className={`card-body${active === p.id ? ' open' : ''}`}>
              <p className="card-description">{p.description}</p>
              {p.credentials && (
                <div className="card-creds">
                  <span className="cred-label">TEST_CREDENTIALS:</span>
                  <span className="cred-item">{p.credentials.email}</span>
                  <span className="cred-sep"> / </span>
                  <span className="cred-item">{p.credentials.password}</span>
                </div>
              )}
              <div className="card-links">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="card-link" onClick={e => e.stopPropagation()}>
                  <span className="link-icon">{'>'}_</span> GitHub
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="card-link card-link-demo" onClick={e => e.stopPropagation()}>
                    <span className="link-icon">//</span> Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="card-expand-hint">
              {active === p.id ? '▲ schließen' : '▼ details'}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
