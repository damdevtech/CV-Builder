export default function CVPreview({ cvData }) {
    return (
        <main id="cv-preview" className="cv-preview bg-white p-8 shadow-lg rounded-md">

            <section className="border-b-2 pb-4 text-center">
                <h1 className="text-3xl font-bold">
                    {cvData.personal.fullName}
                </h1>
                <p className="text-sm">
                    {cvData.personal.email} • {cvData.personal.phone} • {cvData.personal.address}
                </p>
            </section>

            <section>
                <h2 className="section-title">Professional Summary</h2>
                <p>{cvData.personal.summary}</p>
            </section>

            <section>
                <h3 className="section-title">Experience</h3>
                {cvData.experience.map((exp, i) => (
                    <div key={i} className="item">
                        <strong>{exp.title}</strong> — {exp.company}
                        <p className="item-sub">
                            {exp.startDate} – {exp.endDate}
                        </p>
                        <ul className="list-disc ml-5">
                            {exp.roles.map((r, j) => (
                                <li key={j}>{r}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section>
                <h3 className="section-title">Education</h3>
                {cvData.education.map((edu, i) => (
                    <div key={i} className="item">
                        <strong>{edu.school}</strong> — {edu.course}
                        <p className="item-sub">
                            {edu.year} | {edu.grade}
                        </p>
                        <ul className="list-disc ml-5">
                            {edu.notes.map((n, j) => (
                                <li key={j}>{n}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section>
                <h3 className="section-title">Skills</h3>

                {cvData.skills.length === 0 && (
                    <p className="text-sm italic">No skills added</p>
                )}

                <ul className="list-disc ml-5">
                    {cvData.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                </ul>
            </section>


            <section>
                <h3 className="section-title">References</h3>

                {cvData.references.length === 0 && (
                    <p className="text-sm italic">Available on request</p>
                )}

                {cvData.references.map((ref, i) => (
                    <div key={i} className="item">
                        <strong>{ref.name}</strong>
                        <p className="item-sub">
                            {ref.title}
                        </p>
                        <p className="text-sm">
                            {ref.phone}
                        </p>
                    </div>
                ))}
            </section>

        </main>
    );
}
