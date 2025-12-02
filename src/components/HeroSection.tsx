import { onMount } from 'solid-js'

export default function HeroSection() {
    onMount(() => {
        const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement
        if (!canvas) return

        const ctx = canvas.getContext('2d')!
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        interface Particle {
            x: number
            y: number
            vx: number
            vy: number
            opacity: number
            update(): void
            draw(): void
        }

        class ParticleImpl implements Particle {
            x: number
            y: number
            vx: number
            vy: number
            opacity: number

            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.vx = (Math.random() - 0.5) * 2
                this.vy = (Math.random() - 0.5) * 2
                this.opacity = Math.random() * 0.5 + 0.3
            }

            update() {
                this.x += this.vx
                this.y += this.vy
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1
            }

            draw() {
                ctx.fillStyle = `rgba(147, 51, 234, ${this.opacity})`
                ctx.beginPath()
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const particles: Particle[] = []
        for (let i = 0; i < 50; i++) {
            particles.push(new ParticleImpl())
        }

        const mouse = { x: 0, y: 0 }
        document.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
            particles.forEach(p => {
                const dx = mouse.x - p.x
                const dy = mouse.y - p.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                if (distance < 150) {
                    const angle = Math.atan2(dy, dx)
                    p.vx = Math.cos(angle) * 2
                    p.vy = Math.sin(angle) * 2
                }
            })
        })

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
                p.update()
                p.draw()
            })
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(147, 51, 234, ${0.2 * (1 - distance / 100)})`
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                })
            })
            requestAnimationFrame(animate)
        }
        animate()
    })

    return (
        <section class="max-w-7xl mx-auto px-6 mb-24">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="space-y-8">
                    <div class="inline-block">
                        <div class="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-400/40 text-sm text-purple-700 backdrop-blur-sm font-medium">
                            👋 嘿！我是 Tianyeeeeee
                        </div>
                    </div>

                    <h1 class="text-5xl md:text-7xl font-black leading-tight">
                        <span class="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">打造炫酷</span>
                        <br />
                        <span class="text-slate-900">交互体验</span>
                    </h1>

                    <p class="text-lg text-slate-600 max-w-lg leading-relaxed font-medium">
                        18-22 届本科毕业，正在零跑汽车（Leapmotor）做前端工程。热爱用 React、Solid 和 WebGL 把疯狂想法变成真实产品。🚀
                    </p>

                    <div class="flex flex-wrap gap-3 pt-4">
                        <a href="#work" class="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-white overflow-hidden transition hover:shadow-lg hover:shadow-purple-500/30">
                            <span class="relative z-10">✨ 看看我的作品</span>
                        </a>
                        <a href="mailto:hello@tianyeeeeee.dev" class="inline-flex items-center px-6 py-3 border border-purple-400/50 rounded-lg font-bold text-purple-700 hover:bg-purple-100 transition">
                            💬 来聊天
                        </a>
                    </div>

                    <div class="flex items-center gap-4 pt-4">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span class="text-sm text-slate-600 font-medium">@零跑汽车 | 一直在做有趣的事 🚗</span>
                        </div>
                        <div class="flex gap-3">
                            <a href="https://github.com/Tianyeeeeee" target="_blank" rel="noopener" class="text-slate-600 hover:text-purple-600 transition font-medium" aria-label="GitHub">GitHub</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener" class="text-slate-600 hover:text-cyan-600 transition font-medium" aria-label="Twitter">𝕏</a>
                        </div>
                    </div>
                </div>

                <div class="relative h-96 hidden md:block">
                    <div class="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-cyan-300/20 rounded-3xl blur-2xl"></div>
                    <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-white p-8 border border-purple-200/50 h-full flex flex-col items-center justify-center shadow-xl">
                        <canvas id="hero-canvas" class="w-full h-full" style="display: block;"></canvas>
                    </div>
                </div>
            </div>
        </section>
    )
}
