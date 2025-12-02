import { createSignal, For, createEffect, onCleanup } from 'solid-js'

// 🎨 丰富的项目数据 - 加入表情、成就、技术栈
const projects = [
    { 
        id: 1, 
        title: 'Neon Future', 
        tag: '3D 交互', 
        emoji: '🌈',
        color: 'bg-gradient-to-br from-purple-600 to-purple-900',
        achievement: '50K+ 用户',
        description: '沉浸式 WebGL 体验，实时粒子特效与鼠标跟随。',
        tech: ['Three.js', 'React', 'WebGL']
    },
    { 
        id: 2, 
        title: 'Clean Bank', 
        tag: 'UI 设计', 
        emoji: '🏦',
        color: 'bg-gradient-to-br from-blue-600 to-cyan-900',
        achievement: '4.9★ 评分',
        description: '金融科技 App 的设计与开发，极简风格与精细动画。',
        tech: ['Figma', 'React', 'Tailwind']
    },
    { 
        id: 3, 
        title: 'Coffee Brand', 
        tag: '互动营销', 
        emoji: '☕',
        color: 'bg-gradient-to-br from-orange-600 to-red-900',
        achievement: '3x 奖项',
        description: '咖啡品牌的交互网站，融合美食摄影与动画体验。',
        tech: ['Solid', 'GSAP', 'WebGL']
    },
    { 
        id: 4, 
        title: 'Dashboard Pro', 
        tag: 'SaaS', 
        emoji: '📊',
        color: 'bg-gradient-to-br from-indigo-600 to-slate-900',
        achievement: '$100K MRR',
        description: '企业级数据可视化平台，实时更新与高性能图表。',
        tech: ['Next.js', 'TypeScript', 'Prisma']
    },
]

interface Project {
    id: number
    title: string
    tag: string
    emoji: string
    color: string
    achievement: string
    description: string
    tech: string[]
}

export default function WorkGrid() {
    const [activeTag, setActiveTag] = createSignal('全部')
    const [activeProject, setActiveProject] = createSignal<Project | null>(null)

    const filteredProjects = () => {
        if (activeTag() === '全部') return projects
        return projects.filter(p => p.tag === activeTag())
    }

    return (
        <div id='work' class='py-20 max-w-7xl mx-auto px-6'>
            <div class="flex justify-between items-end mb-10">
                <h2 class='text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent'>🎬 作品集</h2>
                <div class='flex gap-2 flex-wrap'>
                    {['全部', '3D 交互', 'UI 设计', '互动营销', 'SaaS'].map(tag => (
                        <button
                            onClick={() => setActiveTag(tag)}
                            class={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                                activeTag() === tag
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <div class='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <For each={filteredProjects()}>
                    {(item: Project) => (
                        <div
                            class='group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer'
                            role='button'
                            tabindex='0'
                            onClick={() => setActiveProject(item)}
                        >
                            <div class={`w-full h-full ${item.color} transition-transform duration-500 group-hover:scale-105`}></div>
                            <div class='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6'>
                                <div>
                                    <div class='text-4xl mb-2'>{item.emoji}</div>
                                    <div class='inline-block px-2 py-1 bg-purple-500/30 rounded text-xs font-bold text-purple-200 backdrop-blur'>{item.tag}</div>
                                </div>
                                <div>
                                    <h3 class='text-2xl font-black text-white mb-2'>{item.title}</h3>
                                    <p class='text-sm text-gray-200 mb-3'>{item.description}</p>
                                    <div class='flex flex-wrap gap-1'>
                                        <For each={item.tech}>{(t: string) => <span class='text-xs px-2 py-1 bg-white/10 rounded text-gray-300'>{t}</span>}</For>
                                    </div>
                                </div>
                            </div>
                            <div class='absolute top-4 right-4 text-2xl opacity-60 group-hover:opacity-0 transition'>{item.emoji}</div>
                            <div class='absolute bottom-4 left-4 right-4 text-white'>
                                <h3 class='text-lg font-bold group-hover:opacity-0 transition'>{item.title}</h3>
                                <div class='text-xs text-gray-400 group-hover:opacity-0 transition'>{item.achievement}</div>
                            </div>
                        </div>
                    )}
                </For>
            </div>

            {activeProject() && (
                <div class='fixed inset-0 z-50 flex items-center justify-center p-6' aria-modal='true' role='dialog'>
                    <div class='absolute inset-0 bg-black/30' onClick={() => setActiveProject(null)}></div>
                    <div class='relative z-10 max-w-4xl w-full bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-2xl overflow-hidden border border-slate-200'>
                        <div class='flex justify-between items-start p-6 border-b border-slate-200'>
                            <div>
                                <div class='text-5xl mb-2'>{activeProject()?.emoji}</div>
                                <div class='flex items-center gap-3'>
                                    <div class='text-sm text-purple-600 font-semibold'>{activeProject()?.tag}</div>
                                    <div class='text-sm text-green-600 font-bold'>✨ {activeProject()?.achievement}</div>
                                </div>
                                <h3 class='text-3xl font-black text-slate-900 mt-2'>{activeProject()?.title}</h3>
                            </div>
                            <button class='text-slate-400 hover:text-slate-600 text-2xl' onClick={() => setActiveProject(null)} aria-label='Close'>✕</button>
                        </div>
                        <div class='p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <h4 class='text-lg font-bold text-purple-600 mb-3'>📖 项目描述</h4>
                                <p class='text-slate-700 mb-6 leading-relaxed'>{activeProject()?.description}</p>
                                <h4 class='text-lg font-bold text-purple-600 mb-3'>🛠 技术栈</h4>
                                <div class='flex flex-wrap gap-2 mb-6'>
                                    <For each={activeProject()?.tech || []}>{(t: string) => <span class='px-3 py-1 bg-slate-100 border border-slate-300 rounded-full text-sm text-slate-700'>{t}</span>}</For>
                                </div>
                                <div class='mt-6 flex gap-3'>
                                    <a class='px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md font-bold hover:shadow-lg hover:shadow-purple-600/50 transition' href='#'>🚀 查看演示</a>
                                    <a class='px-4 py-2 border border-slate-300 rounded-md text-slate-700 hover:bg-slate-100 transition' href='#'>💻 查看源码</a>
                                </div>
                            </div>
                            <div>
                                <div class='w-full h-56 bg-gradient-to-tr from-slate-100 to-slate-50 rounded-lg flex items-center justify-center text-slate-500 font-bold border border-slate-300'>🎨 项目截图占位</div>
                                <p class='text-xs text-slate-500 mt-3 text-center'>点击「查看演示」预览完整交互效果</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {(() => {
                createEffect(() => {
                    const handler = (e: KeyboardEvent) => {
                        if (e.key === 'Escape') setActiveProject(null)
                    }
                    window.addEventListener('keydown', handler as EventListener)
                    onCleanup(() => window.removeEventListener('keydown', handler as EventListener))
                })
                return null
            })()}
        </div>
    )
}
