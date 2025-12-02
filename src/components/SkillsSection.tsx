export default function SkillsSection() {
    const skills = ['React', 'Solid', 'TypeScript', 'Tailwind', 'WebGL', 'Three.js', 'Framer Motion', 'Next.js']

    return (
        <section class="max-w-6xl mx-auto px-4 sm:px-6 mb-32">
            <h2 class="text-5xl font-bold mb-16 text-gray-900">Skills</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill) => (
                    <div class="group p-6 rounded-lg bg-gray-50 border border-gray-200 hover:border-gray-400 hover:bg-gray-100 transition duration-300">
                        <div class="font-semibold text-gray-900 group-hover:text-gray-700 transition">{skill}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
