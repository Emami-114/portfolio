import MatrixRain from './components/MatrixRain'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <>
      <MatrixRain />
      <div className="app-container">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <footer className="footer">
          <span className="footer-text">
            <span className="footer-bracket">[</span>
            &copy; 2025 Abdul Emami
            <span className="footer-bracket">]</span>
            <span className="footer-sep"> :: </span>
            <span className="footer-tag">cybersecurity & development</span>
          </span>
        </footer>
      </div>
    </>
  )
}
