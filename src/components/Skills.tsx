const skillCategories = [
  {
    title: "Frontend",
    color: "rose" as const,
    skills: [
      "Angular",
      "TypeScript",
      "JavaScript (ES2015+)",
      "HTML5",
      "CSS/SCSS",
      "RxJS",
      "NgRx",
      "Signals",
      "NX Monorepo",
      "Ag Grid",
    ],
  },
  {
    title: "Architecture",
    color: "purple" as const,
    skills: [
      "Smart/Dumb Components",
      "SOLID & DRY",
      "Signal Store",
      "Reactive Forms",
      "Signal Forms",
      "Design Patterns",
    ],
  },
  {
    title: "UI & Design",
    color: "sage" as const,
    skills: [
      "RWD / Mobile-first",
      "Figma",
      "Angular Material",
      "Bootstrap",
      "Web Accessibility",
      "Design Systems",
    ],
  },
  {
    title: "Testing & Tools",
    color: "peach" as const,
    skills: [
      "Jasmine / Karma",
      "Cypress",
      "Playwright",
      "Docker",
      "CI/CD",
      "Git & GitHub",
      "Jira",
      "Scrum / Agile",
    ],
  },
];

const colorMap = {
  rose: {
    border: "border-rose/30",
    bg: "bg-rose/5",
    heading: "text-rose-dark",
    pill: "bg-rose/10 text-rose-dark",
  },
  purple: {
    border: "border-purple/30",
    bg: "bg-purple/5",
    heading: "text-purple-dark",
    pill: "bg-purple/10 text-purple-dark",
  },
  sage: {
    border: "border-sage/30",
    bg: "bg-sage/5",
    heading: "text-sage-dark",
    pill: "bg-sage/10 text-sage-dark",
  },
  peach: {
    border: "border-peach/30",
    bg: "bg-peach/5",
    heading: "text-text",
    pill: "bg-peach/20 text-text-muted",
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-cream-light/40 px-4 py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="skills-heading"
          className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl"
        >
          Technical <span className="text-purple">skills</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => {
            const colors = colorMap[category.color];
            return (
              <div
                key={category.title}
                className={`rounded-2xl border ${colors.border} ${colors.bg} p-6`}
              >
                <h3
                  className={`font-heading text-lg font-semibold ${colors.heading}`}
                >
                  {category.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2" role="list">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      role="listitem"
                      className={`rounded-full ${colors.pill} px-3 py-1 text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
