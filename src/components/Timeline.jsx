import { useEffect, useRef, useState } from 'react'
import './Timeline.css'

const ENTRIES = [
  {
    date: '05.2025 – 05.2026',
    title: 'Cyber Security Specialist',
    org: 'Weiterbildung',
    type: 'security',
    items: [
      'CompTIA PenTest+ — Pentesting & Vulnerability Management',
      'CompTIA Security+ — IT-Sicherheit & Kryptografie',
      'CompTIA Network+ — Netzwerkinfrastruktur',
      'CompTIA Linux+ — Linux Administration',
      'CompTIA A+ — IT-Operations & Support',
      'IHK-Advisor Zertifikat',
    ],
  },
  {
    date: '06.2023 – 03.2025',
    title: 'iOS Developer',
    org: 'Coachwhisperer GmbH',
    type: 'work',
    items: [
      'Swift (Expert) · Objective-C (Grundkenntnisse)',
      'SwiftUI · UIKit · Combine · SwiftData / Core Data',
      'Architektur: MVVM, Clean Architecture, Dependency Injection',
      'Tools: Xcode · Git · Firebase · REST / GraphQL',
      'CI/CD: GitHub Actions · Xcode Cloud',
    ],
  },
]

const TYPE_ICON = {
  security: '🛡',
  work: '💼',
}

export default function Timeline() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="cv" ref={ref}>
      <p className="section-label">cat ~/cv/experience.log</p>
      <h2 className="section-title">Lebenslauf</h2>
      <p className="section-subtitle">timeline --sort=desc --format=detailed</p>

      <div className="timeline">
        <div className="timeline-track" />
        {ENTRIES.map((entry, i) => (
          <div
            key={i}
            className={`timeline-entry type-${entry.type}${visible ? ' visible' : ''}`}
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            <div className="entry-connector">
              <div className={`entry-dot dot-${entry.type}`}>
                <span>{TYPE_ICON[entry.type]}</span>
              </div>
            </div>

            <div className="entry-card">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className={`entry-date date-${entry.type}`}>{entry.date}</span>
                  <span className="entry-org">{entry.org}</span>
                </div>
                <h3 className="entry-title">{entry.title}</h3>
              </div>

              <ul className="entry-items">
                {entry.items.map((item, j) => (
                  <li key={j} className="entry-item">
                    <span className="item-prefix">{'>'}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
