export default function AboutSection() {
    return (
        <section class="max-w-6xl mx-auto px-4 sm:px-6 mb-32">
            <h2 class="text-5xl font-bold mb-16 text-gray-900">About</h2>
            <div class="grid md:grid-cols-2 gap-16">
                <div class="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        我是 Tianyeeeeee，2018-2022 届本科毕业，从大学开始就扎进了前端开发的世界。现在在零跑汽车（Leapmotor）工作，写代码、做交互体验、思考如何让用户界面更有趣。
                    </p>
                    <p>
                        特别痴迷于动画、WebGL 和那种「咦，这个效果怎么做到的」的魔法时刻。用 React、Solid 和各种黑科技来实现想象中的交互。
                    </p>
                    <p>
                        闲下来喜欢刷 GitHub、试新技术、打游戏、看动画或者倒腾一些三维效果。本质上就是个代码爱好者 + 设计迷。
                    </p>
                </div>
                <div class="space-y-8">
                    <div class="pb-8 border-l-2 border-gray-200 pl-6">
                        <p class="text-sm text-gray-500 uppercase tracking-wide mb-2">2022 - 现在</p>
                        <h3 class="font-bold text-gray-900 mb-1">零跑汽车 · 前端工程师</h3>
                        <p class="text-sm text-gray-600">打造高性能的交互体验</p>
                    </div>
                    <div class="pb-8 border-l-2 border-gray-200 pl-6">
                        <p class="text-sm text-gray-500 uppercase tracking-wide mb-2">2018 - 2022</p>
                        <h3 class="font-bold text-gray-900 mb-1">本科毕业 · 开始职业生涯</h3>
                        <p class="text-sm text-gray-600">从学生到工程师的蜕变</p>
                    </div>
                    <div class="border-l-2 border-gray-200 pl-6">
                        <p class="text-sm text-gray-500 uppercase tracking-wide mb-2">大学期间</p>
                        <h3 class="font-bold text-gray-900 mb-1">自学前端 · 参与各种项目</h3>
                        <p class="text-sm text-gray-600">探索技术与设计的结合</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
