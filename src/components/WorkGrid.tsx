import { createSignal, For, createEffect, onCleanup } from 'solid-js'

const projects = [
    { 
        id: 1, 
        title: 'Neon Future', 
        tag: '3D',
        color: 'bg-purple-100',
        description: '沉浸式 WebGL 体验，实时粒子特效与鼠标跟随。'
    },
    { 
        id: 2, 
        title: 'Clean Bank', 
        tag: 'UI',
        color: 'bg-blue-100',
        description: '金融科技 App 的设计与开发，极简风格与精细动画。'
    },
    { 
        id: 3, 
        title: 'Coffee Brand', 
        tag: 'Logo',
        color: 'bg-orange-100',
        description: '咖啡品牌的交互网站，融合美食摄影与动画体验。'
    },
    { 
        id: 4, 
        title: 'Dashboard', 
        tag: 'UI',
        color: 'bg-gray-100',
        description: '企业级数据可视化平台，实时更新与高性能图表。'
    },
]

interface Project {
    id: number
    title: string
    tag: string
    color: string
    description: string
}

export default function WorkGrid() {
    const [activeTag, setActiveTag] = createSignal('All')
    const [activeProject, setActiveProject] = createSignal<Project | null>(null)

    const filteredProjects = () => {
        if (activeTag() === 'All') return projects
        return projects.filter(p => p.tag === activeTag())
    }

    return (
        <div id='work' class='py-24 max-w-6xl mx-auto px-4 sm:px-6'>
            <div class="flex flex-col sm:flex-row justify-between sm:items-center gap-8 mb-16">
                <h2 class='text-5xl font-bold text-gray-900'>Selected Work</h2>
                
                <div class='flex gap-3 flex-wrap'>
                    {['All', 'UI', '3D', 'Logo'].map(tag => (
                        <button
                            onClick={() => setActiveTag(tag)}
                            class={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                activeTag() === tag
                                    ? 'bg-gray-900 text-white shadow-md'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <div class='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <For each={filteredProjects()}>
                    {item => (
                        <div
                            class={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer ${item.color} border border-gray-200 transition-all duration-500 hover:shadow-xl hover:scale-105`}
                            role='button'
                            tabindex='0'
                            onClick={() => setActiveProject(item)}
                        >
                            <div class={`w-full h-full transition-transform duration-500 group-hover:scale-110`}></div>

                            <div class='absolute inset-0 bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8'>
                                <div class='text-center'>
                                    <span class='inline-block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2'>
                                        {item.tag}
                                    </span>
                                    <h3 class='text-3xl font-bold text-gray-900'>{item.title}</h3>
                                </div>
                            </div>

                            <div class='absolute inset-0 flex flex-col justify-end p-6 group-hover:opacity-0 transition-opacity duration-300'>
                                <span class='text-xs font-bold uppercase tracking-wider text-gray-500 opacity-60'>
                                    {item.tag}
                                </span>
                                <h3 class='text-2xl font-bold text-gray-900 mt-2'>{item.title}</h3>
                            </div>
                        </div>
                    )}
                </For>
            </div>

            {activeProject() && (
                <div class='fixed inset-0 z-50 flex items-center justify-center p-6' aria-modal='true' role='dialog'>
                    <div class='absolute inset-0 bg-black/30' onClick={() => setActiveProject(null)}></div>
                    <div class='relative z-10 max-w-3xl w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200'>
                        <div class='flex justify-between items-start p-8 border-b border-gray-200'>
                            <div>
                                <span class='text-sm font-semibold text-gray-500 uppercase tracking-wide'>{activeProject()?.tag}</span>
                                <h3 class='text-3xl font-bold text-gray-900 mt-2'>{activeProject()?.title}</h3>
                            </div>
                            <button class='text-gray-400 hover:text-gray-600 text-2xl' onClick={() => setActiveProject(null)} aria-label='Close'>✕</button>
                        </div>
                        <div class='p-8'>
                            <p class='text-gray-700 leading-relaxed'>{activeProject()?.description}</p>
                            <div class='mt-8 flex gap-3'>
                                <a class='px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition' href='#'>View Demo</a>
                                <a class='px-6 py-2 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition' href='#'>View Code</a>
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
