import { createSignal, For } from 'solid-js'

// 模拟数据
const projects = [
    { id: 1, title: 'Neon Future', tag: '3D', color: 'bg-purple-100' },
    { id: 2, title: 'Clean Bank', tag: 'UI', color: 'bg-blue-100' },
    { id: 3, title: 'Coffee Brand', tag: 'Logo', color: 'bg-orange-100' },
    { id: 4, title: 'Dashboard', tag: 'UI', color: 'bg-gray-100' },
]

export default function WorkGrid() {
    const [activeTag, setActiveTag] = createSignal('All')

    // 简单的筛选逻辑
    const filteredProjects = () => {
        if (activeTag() === 'All') return projects
        return projects.filter(p => p.tag === activeTag())
    }

    return (
        <div id='work' class='py-20 max-w-7xl mx-auto px-6'>
            <div class='flex justify-between items-end mb-10'>
                <h2 class='text-3xl font-bold'>Selected Work</h2>

                {/* 筛选按钮组 */}
                <div class='flex gap-2'>
                    {['All', 'UI', '3D', 'Logo'].map(tag => (
                        <button
                            onClick={() => setActiveTag(tag)}
                            class={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                                activeTag() === tag
                                    ? 'bg-black text-white'
                                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* 网格布局 */}
            <div class='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* 使用 <For> 循环，性能优于 .map */}
                <For each={filteredProjects()}>
                    {item => (
                        <div class='group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer'>
                            {/* 背景色模拟图片 */}
                            <div
                                class={`w-full h-full ${item.color} transition-transform duration-500 group-hover:scale-105`}
                            ></div>

                            {/* 悬浮文字内容 */}
                            <div class='absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/50 to-transparent text-white opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0'>
                                <span class='text-xs font-bold uppercase tracking-wider opacity-80'>
                                    {item.tag}
                                </span>
                                <h3 class='text-xl font-bold'>{item.title}</h3>
                            </div>
                        </div>
                    )}
                </For>
            </div>
        </div>
    )
}
