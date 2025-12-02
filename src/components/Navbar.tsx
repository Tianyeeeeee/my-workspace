import { createSignal, Show } from 'solid-js'

export default function Navbar() {
    // 定义状态：菜单是否打开
    const [isOpen, setIsOpen] = createSignal(false)

    return (
        <nav class='fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100'>
            <div class='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
                {/* Logo */}
                <a href='/' class='text-xl font-black tracking-tighter'>
                    WL-PORTFOLIO<span class='text-brand'>.</span>
                </a>

                {/* 桌面端菜单 */}
                <div class='hidden md:flex gap-8 text-sm font-medium text-gray-500'>
                    <a href='#work' class='hover:text-black transition-colors'>
                        Work
                    </a>
                    <a href='#about' class='hover:text-black transition-colors'>
                        About
                    </a>
                </div>

                {/* 移动端汉堡按钮 */}
                <button
                    onClick={() => setIsOpen(!isOpen())}
                    class='md:hidden p-2 text-gray-600 active:scale-95 transition-transform'
                >
                    {/* 根据状态切换图标 */}
                    <Show when={isOpen()} fallback={<span>☰</span>}>
                        <span>✕</span>
                    </Show>
                </button>
            </div>

            {/* 移动端下拉菜单 (带简单的 Tailwind 动画类) */}
            <Show when={isOpen()}>
                <div class='md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 fade-in duration-200'>
                    <a href='#work' class='text-lg font-medium'>
                        Work
                    </a>
                    <a href='#about' class='text-lg font-medium'>
                        About
                    </a>
                </div>
            </Show>
        </nav>
    )
}
