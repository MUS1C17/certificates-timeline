import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import type { Certificate } from "../data/certificates";
import { FileDown, FileText, Image as ImageIcon, ExternalLink, X } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0, transitionEnd: { pointerEvents: "none" as const } },
  show:   { opacity: 1, transitionEnd: { pointerEvents: "auto" as const } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.98, transitionEnd: { pointerEvents: "none" as const } },
  show:   { opacity: 1, scale: 1,     transitionEnd: { pointerEvents: "auto" as const } },
};

type Props = {
  items: Certificate[];
};




function formatDate(iso: string): string {
    const [y, m, d] = iso.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString("en-US", {year: "numeric",month: "long",day: "numeric"});
}

export default function TimelineView({ items }: Props) {
    const sorted = [...items].sort((a,b) => b.date.localeCompare(a.date));
    const [selected, setSelected] = useState<Certificate | null>(null);
    const [ready, setReady] = useState(false);

    const closeModal = () => {
        setReady(false);
        requestAnimationFrame(() => setSelected(null));
    };

    // Lock background scroll when modal open, and add ESC to close
    useEffect(() => {
        //const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
        if (selected) {
            document.body.style.overflow = "hidden";
            const t = setTimeout(() => setReady(true), 250);
            return () => {
                clearTimeout(t);
                setReady (false);
            };
        }
    }, [selected]);

    return(
        <>
            <VerticalTimeline animate={true}>
                {sorted.map((cert) => {
                    const icon = cert.assetType === "pdf" ? <FileText /> : <ImageIcon />;

                    const iconStyle: CSSProperties  =
                        cert.assetType === "pdf"
                        ? { 
                            background: "#1e293b", // solid background same as site
                            color: "#3b82f6",       // PDF blue
                            zIndex: 2,              // above the line
                        }
                        : { 
                            background: "#1e293b",
                            color: "#10b981",       // image green
                            zIndex: 2,
                        };
                    
                    return (
                        <VerticalTimelineElement
                        key = {cert.id}
                        icon = {icon}
                        iconStyle={iconStyle}
                        contentStyle={{
                            background: "hsl(var(--b1))",
                            color: "hsl(var(--bc))",
                            boxShadow: "none",
                            borderRadius: "1rem",
                            border: "1px solid hsl(var(--b3))"
                        }}
                        contentArrowStyle={{borderRight: "7px solid hsl(var(--b1))"}}
                        date={formatDate(cert.date)}
                        >
                            <motion.article 
                            layoutId={`card-${cert.id}`}
                            onClick={() => setSelected(cert)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(cert)}
                            whileHover={{scale: 1.2}}
                            transition={{type: "spring", stiffness: 380, damping: 28}}
                            className="
                            group
                            rounded-2xl
                            bg-base-100/90
                            outline outline-2 outline-white
                            p-5
                            shadow-sm
                            transition-transform duration-200 ease-out
                            hover:shadow-lg
                            will-change-transform
                            "
                            >
                                <h3 className="card-title text-xl">{cert.title}</h3>
                                <p className="text-sm text-base-content/70">
                                    <span className="font-medium text-base-content">{cert.issuer}</span>
                                    {"-"}
                                    <span>{formatDate(cert.date)}</span>
                                </p>

                                {cert.description && <p className="mt-2 line-clamp-2">{cert.description}</p>}

                                {(cert.thumbUrl || cert.assetType === "image") && (
                                    <motion.img
                                    src={cert.thumbUrl ?? cert.assetUrl}
                                    alt={`${cert.title} thumbnail`}
                                    className="mt-4 rounded-xl border border-base-300 w-full h-auto transition-transform duration-200 group-hover:scale-[1.02]"
                                    draggable="false"
                                    />
                                )}
                                <div className="mt-3 text-xs opacity-70">(Click card to view details)</div>
                                </motion.article>
                            </VerticalTimelineElement>
                        );
                    })}
            </VerticalTimeline>
            {/* MODAL (animated) */}
            <AnimatePresence mode="wait" initial={false} onExitComplete={() => {document.body.style.overflow=""}}>
                {selected && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                        className="fixed inset-0 bg-black/50 z-40"
                        initial="hidden"
                        animate="show"
                        variants={backdropVariants}
                        exit="hidden"
                        onClick={() => closeModal()}
                        />
                        {/* Morphing container — same layoutId as the card */}
                        <motion.div 
                        layoutId={`card-${selected.id}`}
                        className="fixed z-50 inset-3 md:inset-14 lg:inset-20
                        rounded-2xl bg-base-100 border border-base-300 shadow-xl p-5 overflow-auto"
                        role="dialog"
                        variants={modalVariants}
                        initial="hidden"
                        animate="show"
                        aria-modal="true"
                        aria-labelledby={`modal-title-${selected.id}`}
                        onClick={(e) => e.stopPropagation()}
                        >
                            {/* HEADER */}
                            <div className="flex justify-between items-start gap-4 mb-3">
                                <div>
                                    <h3 id={`modal-title-${selected.id}`} className="text-2xl font-bold">
                                        {selected.title}
                                    </h3>
                                    <p className="text-sm text-base-content/70">
                                        <span className="font-medium text-base-content">{selected.issuer}</span>
                                    </p>
                                </div>
                                {/* date badge */}
                                <div className="shrink-0 flex items-center gap-2">
                                    <span className="inline-block rounded-full bg-base-200 px-3 py-1 text-sm text-base-content/70">
                                        {formatDate(selected.date)}
                                    </span>
                                
                                    <button className="btn btn-sm" onClick={closeModal} aria-label="Close">
                                        <X className = "w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                                <div className="spacy-y-4 max-h-[75vh] overflow-auto pr-2">
                                    {selected.description && (
                                        <p className="text-base leading-relaxed">{selected.description}</p>
                                    )}
                                </div>
                                <div className="flex flex-col items-center md:items-end gap-3">
                                    {selected.assetType === "pdf" ? (
                                        <img  src={selected.thumbUrl} alt={`${selected.title} preview`} 
                                        className="max-h-[70vh] w-auto rounded-xl border border-base-300" draggable={false} loading="eager"
                                        />
                                    ):(
                                    <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={selected.assetUrl}
                                        alt={selected.title}
                                        className="max-h-[70vh] w-auto rounded-xl border border-base-300"
                                        draggable={false}
                                    />
                                    )}
                                    <div className="mt-2 flex w-full md:justify-end gap-3">
                                        <a href={selected.assetUrl} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm" title="Open original">
                                            View
                                        </a>
                                        <a href={selected.assetUrl} download className="btn btn-primary btn-sm" title="Download original">
                                            Download
                                        </a>
                                        {selected.verifyUrl && (
                                            <a href={selected.verifyUrl} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm" title="Verify certificate">
                                            Verify
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>    
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}