import { useEffect, useRef, useState } from 'react'
import './Skills.css'

const SKILL_GROUPS = [
  {
    category: 'CYBERSECURITY',
    icon: '🛡',
    color: 'cyan',
    skills: [
      { name: 'CompTIA PenTest+', level: 70, tag: 'Zertifizierung' },
      { name: 'CompTIA Security+', level: 75, tag: 'Zertifizierung' },
      { name: 'CompTIA Network+', level: 72, tag: 'Zertifizierung' },
      { name: 'CompTIA Linux+', level: 68, tag: 'Zertifizierung' },
      { name: 'Penetration Testing', level: 65, tag: 'Offensive Sec' },
      { name: 'Vulnerability Management', level: 70, tag: 'Defensive' },
    ],
  },
  {
    category: 'MOBILE DEV',
    icon: '📱',
    color: 'green',
    skills: [
      { name: 'Swift / SwiftUI', level: 90, tag: 'Expert' },
      { name: 'iOS / Xcode', level: 88, tag: 'Expert' },
      { name: 'Kotlin / Android', level: 78, tag: 'Fortgeschritten' },
      { name: 'Jetpack Compose', level: 72, tag: 'Fortgeschritten' },
      { name: 'UIKit', level: 82, tag: 'Fortgeschritten' },
      { name: 'SwiftData / Core Data', level: 78, tag: 'Fortgeschritten' },
    ],
  },
  {
    category: 'BACKEND & TOOLS',
    icon: '⚙',
    color: 'yellow',
    skills: [
      { name: 'C# / ASP.NET', level: 72, tag: 'Backend' },
      { name: 'Firebase', level: 80, tag: 'Cloud' },
      { name: 'REST / GraphQL', level: 78, tag: 'API' },
      { name: 'Git / GitHub Actions', level: 82, tag: 'DevOps' },
      { name: 'MVVM / Clean Arch', level: 85, tag: 'Architektur' },
      { name: 'Figma', level: 75, tag: 'Design' },
    ],
  },
]

function SkillBar({ name, level, tag, color, visible }) {
  return (
    <div className={`skill-item${visible ? ' visible' : ''}`}>
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <div className="skill-meta">
          <span className="skill-tag">{tag}</span>
          <span className="skill-pct">{level}%</span>
        </div>
      </div>
      <div className="skill-track">
        <div
          className={`skill-fill fill-${color}`}
          style={{ width: visible ? `${level}%` : '0%' }}
        />
        <div className="skill-glow" style={{ left: visible ? `${level}%` : '0%' }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref}>
      <p className="section-label">cat /etc/skills.conf</p>
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">kompetenz_matrix --verbose --all</p>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <div key={group.category} className={`skill-group group-${group.color}`}>
            <div className="group-header">
              <span className="group-icon">{group.icon}</span>
              <span className="group-name">{group.category}</span>
              <span className="group-line" />
            </div>
            <div className="group-skills">
              {group.skills.map((s) => (
                <SkillBar key={s.name} {...s} color={group.color} visible={visible} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
