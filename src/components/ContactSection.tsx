export default function ContactSection() {
    return (
        <section class="max-w-4xl mx-auto px-6 mb-24 text-center">
            <div class="rounded-2xl bg-gradient-to-r from-purple-200/40 to-cyan-200/40 border border-purple-300/50 p-12 backdrop-blur-sm">
                <h2 class="text-3xl font-bold mb-4 text-slate-900">想合作或者只是打个招呼？</h2>
                <p class="text-slate-700 mb-8 font-medium">发邮件给我吧，我看到所有信息的 💌</p>
                <div class="flex flex-col md:flex-row gap-4 justify-center">
                    <a href="mailto:hello@example.com" class="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-purple-500/30 transition">
                        📧 联系我
                    </a>
                    <a href="https://github.com/Tianyeeeeee" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-8 py-3 border border-slate-400 rounded-lg font-bold text-slate-700 hover:bg-slate-100 transition">
                        💻 GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}
