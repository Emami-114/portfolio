import { useEffect, useRef } from 'react'
import './MatrixRain.css'

const NODE_COUNT = 55
const MAX_DIST = 165
const PACKET_INTERVAL = 28

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const nodes = []
    const packets = []

    const init = () => {
      nodes.length = 0
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          t: Math.random() * Math.PI * 2,
          ts: 0.012 + Math.random() * 0.018,
        })
      }
    }
    init()

    const spawnPacket = () => {
      const a = Math.floor(Math.random() * nodes.length)
      let b = Math.floor(Math.random() * nodes.length)
      while (b === a) b = Math.floor(Math.random() * nodes.length)
      const d = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y)
      if (d < MAX_DIST) {
        packets.push({ a, b, t: 0, speed: 0.01 + Math.random() * 0.013 })
      }
    }

    let tick = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      tick++

      if (tick % PACKET_INTERVAL === 0) spawnPacket()

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        n.t += n.ts
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y)
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.14
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0, 140, 255, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i]
        p.t += p.speed
        if (p.t >= 1) { packets.splice(i, 1); continue }
        const na = nodes[p.a], nb = nodes[p.b]
        const x = na.x + (nb.x - na.x) * p.t
        const y = na.y + (nb.y - na.y) * p.t
        const grd = ctx.createRadialGradient(x, y, 0, x, y, 6)
        grd.addColorStop(0, 'rgba(0, 229, 255, 0.85)')
        grd.addColorStop(1, 'rgba(0, 140, 255, 0)')
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()
        ctx.beginPath()
        ctx.arc(x, y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(210, 245, 255, 0.95)'
        ctx.fill()
      }

      for (const n of nodes) {
        const pulse = (Math.sin(n.t) + 1) / 2
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r + pulse * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 160, 255, ${0.18 + pulse * 0.28})`
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-canvas" />
}
