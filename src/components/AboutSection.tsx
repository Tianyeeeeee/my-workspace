export default function AboutSection() {
    return (
        <section class="max-w-7xl mx-auto px-6 mb-24">
            <h2 class="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">关于我</h2>
            <div class="grid md:grid-cols-2 gap-12">
                <div class="space-y-6 text-slate-700 leading-relaxed">
                    <p class="font-medium">
                        我是 Tianyeeeeee，18-22 届本科毕业，从大学开始就扎进了前端开发的世界。现在在零跑汽车（Leapmotor）工作，写代码、做交互体验、思考如何让用户界面更有趣。
                    </p>
                    <p>
                        特别痴迷于动画、WebGL 和那种「咦，这个效果怎么做到的」的魔法时刻。用 React、Solid 和各种黑科技来实现想象中的交互。
                    </p>
                    <p>
                        闲下来喜欢刷 GitHub、试新技术、打游戏、看动画或者倒腾一些三维效果。本质上就是个代码爱好者 + 设计迷 🎨
                    </p>
                </div>
                <div class="space-y-6">
                    <div class="relative pl-6 pb-6 border-l-2 border-purple-400">
                        <div class="absolute -left-3 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                        <h3 class="font-bold text-purple-700">现在</h3>
                        <p class="text-slate-600">零跑汽车 · 前端工程师 🚗</p>
                    </div>
                    <div class="relative pl-6 pb-6 border-l-2 border-cyan-400">
                        <div class="absolute -left-3 top-0 w-4 h-4 bg-cyan-500 rounded-full"></div>
                        <h3 class="font-bold text-cyan-700">18-22 届</h3>
                        <p class="text-slate-600">本科毕业 · 开始职业生涯</p>
                    </div>
                    <div class="relative pl-6 border-l-2 border-pink-400">
                        <div class="absolute -left-3 top-0 w-4 h-4 bg-pink-500 rounded-full"></div>
                        <h3 class="font-bold text-pink-700">大学期间</h3>
                        <p class="text-slate-600">自学前端 · 参与各种项目</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
