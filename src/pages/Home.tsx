import { certificates } from "../data/certificates";
import TimelineView from "../components/TimelineView";
import Footer from "../components/Footer.tsx"

export default function Home() {
    return (
        <main className="miin-h-screen mx-auto max-w05xl px-4 py-10">
            <header className="mb-8 text-center">
                <h1 className="text-4xl font-bold">Certifications & Achievements</h1>
                <p className="text-base-content/70">A journey of learning and doing.</p>
            </header>

            <section className="rounded-2xl bg-base-100 shadow-xl p-4 md:p-6">
                <TimelineView items={certificates} />
            </section>

            <Footer />
        </main>
    );
}

 Home();