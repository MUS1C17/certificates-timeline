import { certificates } from "../data/certificates";
import TimelineView from "../components/TimelineView";
import Footer from "../components/Footer.tsx"

export default function Home() {
    return (
        <main className="min-h-screen mx-auto max-w-5xl px-4 py-10">
            <header className="bg-base-100 border-b border-gray-700 py-6 px-6 rounded-xl">
                <h1 className="text-3xl text-center font-bold text-base-content">Certifications & Achievements</h1>
                <p className="text-xl text-center text-gray-400 mb-2">A journey of learning and doing.</p>
            </header>

            <section className="rounded-2xl bg-base-100 shadow-xl p-4 md:p-6">
                <TimelineView items={certificates} />
            </section>

            <Footer />
        </main>
    );
}

 Home();