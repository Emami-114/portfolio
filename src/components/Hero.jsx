import { useState, useEffect } from 'react'
import './Hero.css'

const ROLES = [
  'Cybersecurity Specialist',
  'Mobile App Developer',
  'iOS / Swift Developer',
  'Android / Kotlin Developer',
  'CompTIA PenTest+',
]

function useTypingEffect(words, typingSpeed = 80, erasingSpeed = 40, pauseMs = 2000) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const word = words[wordIdx % words.length]

    if (phase === 'typing') {
      if (text.length < word.length) {
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), typingSpeed)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('erasing'), pauseMs)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'erasing') {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), erasingSpeed)
        return () => clearTimeout(t)
      } else {
        setWordIdx(i => i + 1)
        setPhase('typing')
      }
    }
  }, [text, phase, wordIdx, words, typingSpeed, erasingSpeed, pauseMs])

  return text
}

export default function Hero() {
  const role = useTypingEffect(ROLES)

  return (
    <section className="hero" id="home">
      <div className="hero-scan-line" />

      <div className="hero-terminal">
        <div className="terminal-header">
          <span className="t-dot red" />
          <span className="t-dot yellow" />
          <span className="t-dot green" />
          <span className="t-title">emami@terminal:~</span>
        </div>
        <div className="terminal-body">
          <p className="t-line">
            <span className="t-prompt">root@system</span>
            <span className="t-separator">:</span>
            <span className="t-path">~</span>
            <span className="t-dollar">$</span>
            <span className="t-cmd"> whoami</span>
          </p>

          <div className="hero-name-block">
            <span className="hero-label">IDENTIFIED_SUBJECT</span>
            <h1 className="hero-name">Abdul Emami</h1>
          </div>

          <p className="t-line">
            <span className="t-prompt">root@system</span>
            <span className="t-separator">:</span>
            <span className="t-path">~</span>
            <span className="t-dollar">$</span>
            <span className="t-cmd"> cat role.txt</span>
          </p>

          <div className="hero-role-block">
            <span className="t-arrow">{'>'}</span>
            <span className="hero-role">{role}</span>
            <span className="t-cursor">|</span>
          </div>

          <p className="hero-bio">
            <span className="t-comment">/*</span>
            {' '}Cybersecurity Specialist in Weiterbildung (CompTIA PenTest+, Security+, Network+)
            mit Erfahrung als Mobile App Developer (iOS/Swift, Android/Kotlin).
            Leidenschaft für sichere Systeme und innovative Applikationen.
            {' '}<span className="t-comment">*/</span>
          </p>

          <div className="hero-actions">
            <a
              href="https://github.com/Emami-114"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber"
            >
              <span className="btn-icon">{'>'}_</span> GitHub
            </a>
            <a
              href="https://linkedin.com/in/abdul-emami-4bb489251"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber btn-outline"
            >
              <span className="btn-icon">//</span> LinkedIn
            </a>
            <a href="#contact" className="btn-cyber btn-outline" onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              <span className="btn-icon">#</span> Kontakt
            </a>
          </div>

          <div className="hero-status-bar">
            <span className="status-item">
              <span className="status-dot active" /> SYSTEM_ONLINE
            </span>
            <span className="status-item">
              <span className="status-dot cyan" /> ENCRYPTION_AES256
            </span>
            <span className="status-item">
              <span className="status-dot warning" /> THREAT_LEVEL: LOW
            </span>
          </div>
        </div>
      </div>

      <div className="hero-hex-grid" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={`hex-item hex-${i}`}>{Math.random() > 0.5 ? '1' : '0'}</div>
        ))}
      </div>
    </section>
  )
}
