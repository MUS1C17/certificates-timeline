import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-10 border-t border-gray-700 py-6 text-center text-sm text-gray-400">
            <div className="flex justify-center gap-6 text-2xl">
                <a
                href="https://github.com/MUS1C17"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="Github"
                >
                    <FaGithub />
                </a>
                <a
                href="https://www.linkedin.com/in/mark-sharovarov-b70492291/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="LinkedIn"
                >
                    <FaLinkedinIn />
                </a>
                <a
                href="mailto:marksharovarov@gmail.com"
                className="hover:text-white transition-colors"
                title="Email"
                >
                    <FaEnvelope />
                </a>
            </div>
            <p className="mt-4 text-xs">&copy; {new Date().getFullYear()} Mark Sharovarov. All rights reserved.</p>
        </footer>
    )
}