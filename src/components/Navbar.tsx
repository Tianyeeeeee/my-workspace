import { createSignal, Show } from 'solid-js'

export default function Navbar() {
    const [isOpen, setIsOpen] = createSignal(false)

    return (
        <nav class='fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100'>
            <div class='max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between'>
                {/* Logo */}
                <a href='/' class='text-lg font-bold tracking-tight text-gray-900'>
                    Tianyeeeeee<span class='text-gray-300'>.</span>
                </a>

                {/* 桌面端菜单 */}
                <div class='hidden md:flex gap-12 text-sm text-gray-600'>
                    <a href='#work' class='hover:text-gray-900 transition-colors duration-300 border-b-2 border-transparent hover:border-gray-300'>
                        Work
                    </a>
                    <a href='#about' class='hover:text-gray-900 transition-colors duration-300 border-b-2 border-transparent hover:border-gray-300'>
                        About
                    </a>
                </div>

                {/* 移动端汉堡按钮 */}
                <button
                    onClick={() => setIsOpen(!isOpen())}
                    class='md:hidden p-2 text-gray-600 hover:text-gray-900 active:scale-90 transition-all duration-200'
                >
                    <Show when={isOpen()} fallback={<span class='text-lg'>☰</span>}>
                        <span class='text-lg'>✕</span>
                    </Show>
                </button>
            </div>

            {/* 移动端下拉菜单 */}
            <Show when={isOpen()}>
                <div class='md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-md p-6 flex flex-col gap-4 animate-in slide-in-from-top-2 fade-in duration-200'>
                    <a href='#work' class='text-base font-medium text-gray-900 hover:text-gray-600 transition-colors'>
                        Work
                    </a>
                    <a href='#about' class='text-base font-medium text-gray-900 hover:text-gray-600 transition-colors'>
                        About
                    </a>
                </div>
            </Show>
        </nav>
    )
}
