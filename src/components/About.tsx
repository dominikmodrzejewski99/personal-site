import { Code2, Users, Calendar, Rocket } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "4+",
    label: "Years experience",
  },
  {
    icon: Users,
    value: "4M+",
    label: "Users served monthly",
  },
  {
    icon: Code2,
    value: "3+",
    label: "Production apps",
  },
  {
    icon: Rocket,
    value: "A9→A19",
    label: "Angular migrations",
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl">
        <h2
          id="about-heading"
          className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl"
        >
          About <span className="text-rose">me</span>
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-text-muted">
              I&apos;m a frontend developer based in Wroc&#322;aw, Poland, with a
              passion for building scalable, accessible web applications. I
              specialize in component architecture, reactive programming with
              TypeScript and RxJS, and state management with Angular Signals.
            </p>
            <p className="text-lg leading-relaxed text-text-muted">
              At Web Innovative Software, I&apos;ve been instrumental in developing
              a financial-legal platform serving over 4 million monthly users,
              making key architectural decisions that improved UX/UI and
              application performance.
            </p>
            <p className="text-lg leading-relaxed text-text-muted">
              I design modern, secure web interfaces using RWD, mobile-first
              approach and design systems with Figma. I&apos;m passionate about
              clean code, SOLID principles, and delivering exceptional user
              experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-cream bg-cream-light/50 p-6 transition-colors duration-200 hover:border-sage/50"
              >
                <stat.icon
                  size={28}
                  className="text-sage transition-colors duration-200 group-hover:text-sage-dark"
                  aria-hidden="true"
                />
                <p className="mt-3 font-heading text-2xl font-bold text-text sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-text-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
