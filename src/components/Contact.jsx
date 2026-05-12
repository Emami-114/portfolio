import './Contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <p className="section-label">ping -c 1 emami</p>
      <h2 className="section-title">Kontakt</h2>
      <p className="section-subtitle">connection_request --protocol=secure</p>

      <div className="contact-wrapper">
        <div className="contact-terminal">
          <div className="ct-header">
            <span className="ct-prompt">connection_status:</span>
            <span className="ct-online"> ONLINE</span>
            <span className="ct-ping"> [ping: 1ms]</span>
          </div>

          <div className="contact-channels">
            <a
              href="https://github.com/Emami-114"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-item"
            >
              <div className="ch-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <div className="ch-info">
                <span className="ch-label">GitHub</span>
                <span className="ch-value">github.com/Emami-114</span>
              </div>
              <span className="ch-arrow">→</span>
            </a>

            <a
              href="https://linkedin.com/in/abdul-emami-4bb489251"
              target="_blank"
              rel="noopener noreferrer"
              className="channel-item"
            >
              <div className="ch-icon ch-linkedin">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="ch-info">
                <span className="ch-label">LinkedIn</span>
                <span className="ch-value">abdul-emami-4bb489251</span>
              </div>
              <span className="ch-arrow">→</span>
            </a>

            <a
              href="mailto:ab.emami1140@gmail.com"
              className="channel-item"
            >
              <div className="ch-icon ch-email">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="ch-info">
                <span className="ch-label">E-Mail</span>
                <span className="ch-value">ab.emami1140@gmail.com</span>
              </div>
              <span className="ch-arrow">→</span>
            </a>
          </div>

          <div className="contact-footer">
            <span className="cf-line">
              <span className="cf-prompt">$</span> echo &quot;Ready for new connections&quot;
            </span>
            <span className="cf-output cf-green">Ready for new connections</span>
          </div>
        </div>

        <div className="contact-deco" aria-hidden="true">
          {['ACCESS GRANTED', 'SECURE CHANNEL', 'HANDSHAKE OK', 'KEYS EXCHANGED'].map((t, i) => (
            <div key={i} className={`deco-line dl-${i}`}>{t}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
