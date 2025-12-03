import { createEffect, createSignal, onCleanup } from 'solid-js';

export default function EasterEgg() {
    const [history, setHistory] = createSignal<string[]>([]);
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    // 监听键盘
    const handleKeyDown = (e: KeyboardEvent) => {
        setHistory((prev) => {
            const newHistory = [...prev, e.key];
            // 只保留最近的 10 次按键
            if (newHistory.length > konamiCode.length) {
                newHistory.shift();
            }
            return newHistory;
        });
    };

    // 检测是否匹配
    createEffect(() => {
        const currentSeq = history();
        if (JSON.stringify(currentSeq) === JSON.stringify(konamiCode)) {
            activateRetroMode();
            setHistory([]); // 重置
        }
    });

    // 开启复古模式
    const activateRetroMode = () => {
        alert("🕹️ CHEAT CODE ACTIVATED: RETRO MODE ON");
        document.documentElement.classList.toggle('retro-mode');
    };

    createEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        onCleanup(() => window.removeEventListener('keydown', handleKeyDown));
    });

    return null; // 这个组件不可见
}