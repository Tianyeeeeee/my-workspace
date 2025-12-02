export default function SkillsSection() {
    const skills = ['React', 'Solid', 'TypeScript', 'Tailwind', 'WebGL', 'Three.js', 'Framer Motion', 'Next.js']

    return (
        <section class="max-w-7xl mx-auto px-6 mb-24">
            <h2 class="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">我的工具箱</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                    <div class="group p-4 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 border border-purple-300/30 hover:border-purple-400/50 transition cursor-pointer hover:shadow-lg hover:shadow-purple-500/10">
                        <div class="font-bold text-purple-700 group-hover:text-purple-800 transition">{skill}</div>
                        <div class="text-xs text-slate-500 mt-1">熟练使用</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
