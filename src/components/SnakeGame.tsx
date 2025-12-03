import { createSignal, onMount, onCleanup, For, Show } from 'solid-js';

export default function SnakeGame() {
    const GRID_SIZE = 20;
    const CELL_SIZE = 15; // px
    
    // 游戏状态
    const [snake, setSnake] = createSignal([{x: 10, y: 10}]);
    const [food, setFood] = createSignal({x: 15, y: 15});
    const [direction, setDirection] = createSignal({x: 1, y: 0});
    const [gameOver, setGameOver] = createSignal(false);
    const [score, setScore] = createSignal(0);
    const [started, setStarted] = createSignal(false);

    let gameLoop: number;

    const moveSnake = () => {
        if (gameOver() || !started()) return;

        const newSnake = [...snake()];
        const head = { ...newSnake[0] };
        const dir = direction();

        head.x += dir.x;
        head.y += dir.y;

        // 撞墙检测 (穿墙模式)
        if (head.x < 0) head.x = GRID_SIZE - 1;
        if (head.x >= GRID_SIZE) head.x = 0;
        if (head.y < 0) head.y = GRID_SIZE - 1;
        if (head.y >= GRID_SIZE) head.y = 0;

        // 撞自己检测
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
            setGameOver(true);
            return;
        }

        newSnake.unshift(head);

        // 吃食物
        if (head.x === food().x && head.y === food().y) {
            setScore(s => s + 1);
            setFood({
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE)
            });
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    };

    const handleKey = (e: KeyboardEvent) => {
        if(!started()) setStarted(true);
        if(gameOver()) restart();
        
        switch(e.key) {
            case 'ArrowUp': if(direction().y === 0) setDirection({x: 0, y: -1}); break;
            case 'ArrowDown': if(direction().y === 0) setDirection({x: 0, y: 1}); break;
            case 'ArrowLeft': if(direction().x === 0) setDirection({x: -1, y: 0}); break;
            case 'ArrowRight': if(direction().x === 0) setDirection({x: 1, y: 0}); break;
        }
    };

    const restart = () => {
        setSnake([{x: 10, y: 10}]);
        setScore(0);
        setGameOver(false);
        setDirection({x: 1, y: 0});
        setStarted(true);
    };

    onMount(() => {
        window.addEventListener('keydown', handleKey);
        gameLoop = window.setInterval(moveSnake, 150);
    });

    onCleanup(() => {
        window.removeEventListener('keydown', handleKey);
        clearInterval(gameLoop);
    });

    return (
        <div class="inline-block border border-green-900 bg-black/50 p-1 relative">
            <div 
                style={{
                    width: `${GRID_SIZE * CELL_SIZE}px`,
                    height: `${GRID_SIZE * CELL_SIZE}px`,
                    position: 'relative'
                }}
            >
                {/* Snake */}
                <For each={snake()}>
                    {(segment) => (
                        <div 
                            class="absolute bg-green-500 border border-black"
                            style={{
                                left: `${segment.x * CELL_SIZE}px`,
                                top: `${segment.y * CELL_SIZE}px`,
                                width: `${CELL_SIZE}px`,
                                height: `${CELL_SIZE}px`
                            }}
                        />
                    )}
                </For>

                {/* Food */}
                <div 
                    class="absolute bg-red-500 animate-pulse"
                    style={{
                        left: `${food().x * CELL_SIZE}px`,
                        top: `${food().y * CELL_SIZE}px`,
                        width: `${CELL_SIZE}px`,
                        height: `${CELL_SIZE}px`,
                        "border-radius": "2px"
                    }}
                />

                {/* UI Overlays */}
                <Show when={!started() && !gameOver()}>
                    <div class="absolute inset-0 flex items-center justify-center bg-black/60 text-green-400 text-xs font-mono">
                        PRESS ARROW KEYS
                    </div>
                </Show>

                <Show when={gameOver()}>
                    <div class="absolute inset-0 flex flex-col items-center justify-center bg-red-900/40 text-white font-mono z-10">
                        <div class="text-xl font-bold mb-2">GAME OVER</div>
                        <div class="text-xs">SCORE: {score()}</div>
                        <div class="text-[10px] mt-2 animate-pulse">PRESS ANY KEY</div>
                    </div>
                </Show>
            </div>
            
            <div class="mt-2 flex justify-between text-[10px] font-mono text-green-600">
                <span>SCORE: {score()}</span>
                <span>STATUS: {gameOver() ? 'CRASHED' : 'RUNNING'}</span>
            </div>
        </div>
    );
}