import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // library styles
import type { Certificate } from "../data/certificates";
import { FileDown, FileText, Image as ImageIcon, ExternalLink } from "lucide-react";
import type { CSSProperties } from "react";

type Props = {
  items: Certificate[];
};


function formatDate(iso: string): string {
    const[y, m, d] = iso.split("-");
    return `${y}-${m}-${d}`;
}

export default function TimelineView({ items }: Props) {
    const sorted = [...items].sort((a,b) => b.date.localeCompare(a.date));

    return(
        <VerticalTimeline animate={true}>
            {sorted.map((cert) => {
                const icon = cert.assetType === "pdf" ? <FileText /> : <ImageIcon />;

                const iconStyle: CSSProperties  =
                    cert.assetType === "pdf"
                    ? { 
                        background: "#1e293b", // solid background same as site
                        color: "#3b82f6",       // PDF blue
                        zIndex: 2,              // above the line
                        position: "relative"
                    }
                    : { 
                        background: "#1e293b",
                        color: "#10b981",       // image green
                        zIndex: 2,
                        position: "relative"
                    };
                
                return (
                    <VerticalTimelineElement
                    key = {cert.id}
                    icon = {icon}
                    iconStyle={iconStyle}
                    contentStyle={{
                        background: "hsl(var(--b1))",
                        color: "hsl(var(--bc))",
                        boxShadow: "0 10px 15px -3px rgb(0 0 0, 0.1)",
                        borderRadius: "1rem",
                    }}
                    contentArrowStyle={{borderRight: "7px solid hsl(var(--b1))"}}
                    date={formatDate(cert.date)}
                    >
                        <h3 className="card-title text-xl">{cert.title}</h3>
                        <p className="text-sm text-base-content/70">
                            <span className="font-medium text-base-content">{cert.issuer}</span>
                            {"-"}
                            <span>{formatDate(cert.date)}</span>
                        </p>

                        {cert.description && <p className="mt-2">{cert.description}</p>}

                        {cert.thumbUrl && (
                            <div className="mt-3">
                                <img 
                                    src={cert.thumbUrl} 
                                    alt={`${cert.title} thumbnail`} 
                                    className="rounded-lg border border-base-300 max-h-48" 
                                />
                            </div>
                        )}

                        <div className="card-actions mt-4 flex flex-wrap gap-3">
                            {/* View: for now, just open in a new tab; later we’ll replace with a modal */}
                            <a 
                            href={cert.assetUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline btn-sm"
                            title="Open"
                            >
                                View <ExternalLink className="ml-2 h-4 w-4" />
                            </a>

                            <a href={cert.assetUrl} download className="btn btn-primary btn-sm" title="Download original">
                                Download <FileDown className="ml-2 h-4 w-4" />
                            </a>

                            {cert.verifyUrl && (
                                <a
                                href={cert.verifyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="link link-primary"
                                title="Verify certificate"
                                >
                                    Verify
                                </a>
                            )}
                        </div>
                    </VerticalTimelineElement>
                )
            })}
            
        </VerticalTimeline>
    )
}