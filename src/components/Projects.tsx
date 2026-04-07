import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./icons";

const projects = [
  {
    title: "10xCards",
    subtitle: "AI-powered flashcard generator",
    description:
      "Serverless application showcasing proficiency in the modern Angular ecosystem. Integrated with Open Router API for dynamic content generation, NgRx Signal Store for state management, and full flashcard learning functionality.",
    tech: [
      "Angular 21",
      "Signals",
      "TypeScript",
      "Supabase",
      "Open Router API",
      "Cloudflare CI/CD",
    ],
    github: "https://github.com/dominikmodrzejewski99",
    demo: "https://10x-cards-70n.pages.dev/",
    color: "rose" as const,
  },
  {
    title: "Hungry?",
    subtitle: "Restaurant matching app",
    description:
      "Quiz-based application that suggests the 3 best restaurants based on user preferences. Features a custom matching algorithm with result normalization and sorting logic, integrated with a Laravel REST API.",
    tech: ["Angular 19", "Signals", "TypeScript", "Laravel", "REST API"],
    github: "https://github.com/dominikmodrzejewski99",
    demo: null,
    color: "sage" as const,
  },
  {
    title: "WhatsApp → Google Chat",
    subtitle: "Real-time message relay service",
    description:
      "Event-driven service for real-time message forwarding using webhooks. Containerized with Docker for easy and secure deployment.",
    tech: ["Node.js", "Docker", "Webhooks"],
    github: "https://github.com/dominikmodrzejewski99",
    demo: null,
    color: "purple" as const,
  },
];

const colorMap = {
  rose: {
    border: "border-rose/30",
    hover: "hover:border-rose/60",
    accent: "bg-rose",
    tag: "bg-rose/10 text-rose-dark",
    link: "text-rose hover:text-rose-dark",
  },
  sage: {
    border: "border-sage/30",
    hover: "hover:border-sage/60",
    accent: "bg-sage",
    tag: "bg-sage/10 text-sage-dark",
    link: "text-sage-dark hover:text-sage",
  },
  purple: {
    border: "border-purple/30",
    hover: "hover:border-purple/60",
    accent: "bg-purple",
    tag: "bg-purple/10 text-purple-dark",
    link: "text-purple hover:text-purple-dark",
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-4 py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="projects-heading"
          className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl"
        >
          Featured <span className="text-sage-dark">projects</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-text-muted">
          A selection of personal projects that demonstrate my approach to
          building modern web applications.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => {
            const colors = colorMap[project.color];
            return (
              <article
                key={project.title}
                className={`group flex flex-col rounded-2xl border ${colors.border} bg-white p-6 transition-all duration-200 ${colors.hover} hover:shadow-lg`}
              >
                {/* Accent bar */}
                <div
                  className={`mb-4 h-1 w-12 rounded-full ${colors.accent}`}
                  aria-hidden="true"
                />

                <h3 className="font-heading text-xl font-bold text-text">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-text-light">
                  {project.subtitle}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5" role="list" aria-label="Technologies used">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      role="listitem"
                      className={`rounded-full ${colors.tag} px-2.5 py-0.5 text-xs font-medium`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-cream pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium ${colors.link} transition-colors duration-200`}
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <GithubIcon size={16} />
                    Source
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium ${colors.link} transition-colors duration-200`}
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
