import type { Certificate } from "../data/certificates";

type Props = {cert: Certificate};

export default function CertificateItem({ cert }: Props){
    return (
        <div>
            <h2 className="text-xl font-semibold">{cert.title}</h2>
            <div className="text-sm text-base-content/70">
                <strong className="font-medium text-base-content">{cert.issuer}</strong>
                - <span>{cert.date}</span>
            </div>
            {cert.description && <p className="mt-2">{cert.description}</p>}
            {cert.verifyUrl && (
                <a href={cert.assetUrl} download className="btn btn-primary">
                    Download
                </a>
            )}
        </div>
    );
}