import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "work" as const,
    title: "Fullstack Developer",
    company: "Web Innovative Software",
    location: "Wroclaw, Poland",
    period: "Jan 2022 - Present",
    highlights: [
      "Developed key modules for a financial-legal app serving 4M+ monthly users, focusing on scalability, SEO, and UI performance",
      "Designed state management architecture using Angular Signals, simplifying data flow and improving component reactivity",
      "Led migration of production app from Angular 9 to Angular 19",
      "Refactored forms from Reactive Forms to Signal Forms, reducing component complexity",
      "Conduct code reviews ensuring Clean Code standards, SOLID and DRY principles",
    ],
  },
  {
    type: "work" as const,
    title: "Programming Instructor",
    company: "Music & More",
    location: "Wroclaw, Poland",
    period: "Oct 2021 - Jan 2022",
    highlights: [
      "Developed communication and mentoring skills, translating complex programming concepts into accessible lessons",
    ],
  },
  {
    type: "education" as const,
    title: "Engineer's Degree - Telecommunications",
    company: "Wroclaw University of Science and Technology",
    location: "Wroclaw, Poland",
    period: "2018 - 2022",
    highlights: ["GPA: 4.5 / 5.0"],
  },
  {
    type: "certificate" as const,
    title: "10xDevs - AI Full Stack MVPs",
    company: "Przeprogramowani",
    location: "",
    period: "",
    highlights: [
      "Comprehensive course on building full-stack AI-powered applications",
    ],
  },
];

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  certificate: Award,
};

const colorMap = {
  work: "bg-rose/10 text-rose-dark",
  education: "bg-purple/10 text-purple-dark",
  certificate: "bg-sage/10 text-sage-dark",
};

const dotColor = {
  work: "bg-rose",
  education: "bg-purple",
  certificate: "bg-sage",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-cream-light/40 px-4 py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="experience-heading"
          className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl"
        >
          Experience & <span className="text-rose">education</span>
        </h2>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div
            className="absolute top-0 bottom-0 left-[19px] w-px bg-cream"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.type];
              return (
                <div key={index} className="relative pl-14">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2.5 top-1 flex h-[22px] w-[22px] items-center justify-center rounded-full ${dotColor[exp.type]} ring-4 ring-bg`}
                    aria-hidden="true"
                  >
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  <div className="rounded-2xl border border-cream bg-white p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${colorMap[exp.type]}`}
                          >
                            <Icon size={12} aria-hidden="true" />
                            {exp.type === "work"
                              ? "Work"
                              : exp.type === "education"
                                ? "Education"
                                : "Certificate"}
                          </span>
                        </div>
                        <h3 className="mt-2 font-heading text-lg font-bold text-text">
                          {exp.title}
                        </h3>
                        <p className="text-sm font-medium text-text-muted">
                          {exp.company}
                          {exp.location && ` · ${exp.location}`}
                        </p>
                      </div>
                      {exp.period && (
                        <span className="text-sm text-text-light whitespace-nowrap">
                          {exp.period}
                        </span>
                      )}
                    </div>

                    {exp.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2" role="list">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm leading-relaxed text-text-muted"
                          >
                            <span
                              className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-sage"
                              aria-hidden="true"
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
