import React from "react";
import "../styles/Certifications.css";

const Certifications = () => {
    const certifications = [
        {
            title: "Databases for Developers: Foundations",
            issuer: "Oracle",
            year: "Jun 2026",
            icon: "🗄️",
            description:
                "Completed Oracle's Databases for Developers: Foundations with a 90% score. Gained expertise in Oracle SQL, database design, joins, aggregations, filtering, and relational database concepts.",
            skills: ["MySQL", "PostgreSQL", "Oracle SQL"],
        },
        {
            title: "Certificate of Appreciation",
            issuer: "SriFin Credit Pvt Ltd",
            year: "Apr 2026",
            icon: "🏆",
            description:
                "Recognized for contributions to the successful execution of GCP Migration and IT Operations projects. Supported cloud migration initiatives, infrastructure operations, and service reliability.",
            skills: ["GCP", "React.js", "JavaScript", "IT Operations"],
        },
        {
            title: "Certified JAVA Developer Associate (JDAC-24)",
            issuer: "itechcert",
            year: "Jul 2024",
            icon: "☕",
            description:
                "Earned the Certified JAVA Developer Associate credential demonstrating proficiency in Core Java, OOP concepts, exception handling, collections, JDBC, and application development.",
            skills: ["Core Java", "OOP", "JDBC", "Collections"],
        },
    ];

    return (
        <section className="certifications" id="certifications">
            <div className="certifications-container">
                <div className="section-header">
                    <h4>Achievements</h4>
                    <h2>Certifications</h2>
                    <p>
                        Certifications and professional training that have strengthened
                        my technical expertise and practical development skills.
                    </p>
                </div>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div className="cert-card" key={index}>
                            <div className="cert-icon">🏆</div>

                            <h3>{cert.title}</h3>

                            <div className="cert-meta">
                                <span>{cert.issuer}</span>
                                <span>{cert.year}</span>
                            </div>

                            <p>{cert.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;