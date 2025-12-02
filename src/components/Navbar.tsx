import { createSignal, Show } from 'solid-js'

export default function Navbar() {
    const [isOpen, setIsOpen] = createSignal(false)

    return (
        <nav class='fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200'>
            <div class='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
                {/* Logo */}
                <a href='/' class='text-xl font-black tracking-tighter text-slate-900'>
                    Tianyeeeeee<span class='text-purple-600'>.</span>
                </a>

                {/* 桌面端菜单 */}
                <div class='hidden md:flex gap-8 text-sm font-medium text-slate-600'>
                    <a href='#work' class='hover:text-slate-900 transition-colors'>
                        作品
                    </a>
                    <a href='#about' class='hover:text-slate-900 transition-colors'>
                        关于
                    </a>
                </div>

                {/* 移动端汉堡按钮 */}
                <button
                    onClick={() => setIsOpen(!isOpen())}
                    class='md:hidden p-2 text-slate-600 active:scale-95 transition-transform'
                >
                    <Show when={isOpen()} fallback={<span>☰</span>}>
                        <span>✕</span>
                    </Show>
                </button>
            </div>

            {/* 移动端下拉菜单 */}
            <Show when={isOpen()}>
                <div class='md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl p-6 flex flex-col gap-4'>
                    <a href='#work' class='text-lg font-medium text-slate-900 hover:text-purple-600 transition'>
                        作品
                    </a>
                    <a href='#about' class='text-lg font-medium text-slate-900 hover:text-purple-600 transition'>
                        关于
                    </a>
                </div>
            </Show>
        </nav>
    )
}
