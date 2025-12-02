export default function ContactSection() {
    return (
        <section class="max-w-4xl mx-auto px-4 sm:px-6 mb-32 text-center">
            <div class="rounded-xl bg-gray-50 border border-gray-200 p-12">
                <h2 class="text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
                <p class="text-gray-600 mb-12 text-lg">想合作或者只是打个招呼？我很乐意听到你的声音。</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="mailto:hello@example.com" class="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition duration-300">
                        Send Email
                    </a>
                    <a href="https://github.com/Tianyeeeeee" target="_blank" rel="noopener" class="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition duration-300">
                        Visit GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}
