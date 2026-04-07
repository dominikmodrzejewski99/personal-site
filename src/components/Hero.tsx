import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center px-4 pt-24 pb-16"
      aria-label="Introduction"
    >
      {/* Decorative gradient blobs */}
      <div
        className="pointer-events-none absolute top-20 left-10 h-72 w-72 rounded-full bg-rose/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 bottom-20 h-96 w-96 rounded-full bg-sage/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
        {/* Text content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-1.5 text-sm font-medium text-text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-sage" aria-hidden="true" />
            Available for new projects
          </p>

          <h1 className="font-heading text-5xl leading-tight font-bold tracking-tight text-text sm:text-6xl lg:text-7xl">
            Dominik
            <br />
            <span className="text-rose">Modrzejewski</span>
          </h1>

          <p className="mt-4 font-heading text-xl font-medium text-text-muted sm:text-2xl">
            Frontend Developer
          </p>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-light">
            Building scalable web applications serving millions of users.
            4+ years of crafting performant, accessible interfaces with modern
            JavaScript frameworks.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-rose px-7 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-rose-dark"
            >
              Let&apos;s work together
            </a>
            <a
              href="#projects"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border-2 border-purple/30 px-7 py-3 text-base font-semibold text-purple transition-colors duration-200 hover:border-purple hover:bg-purple/5"
            >
              View projects
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/dominikmodrzejewski99"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-text-light transition-colors duration-200 hover:text-purple"
              aria-label="GitHub profile"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href="https://linkedin.com/in/dominikmodrzejewski"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-text-light transition-colors duration-200 hover:text-purple"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={22} />
            </a>
            <a
              href="mailto:modrzejewskidominik@proton.me"
              className="cursor-pointer text-text-light transition-colors duration-200 hover:text-purple"
              aria-label="Send email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="relative flex-shrink-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-cream shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <Image
              src="/dominik.jpg"
              alt="Dominik Modrzejewski - Frontend Developer"
              fill
              className="object-cover"
              priority
              unoptimized
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
            />
          </div>
          {/* Decorative ring */}
          <div
            className="absolute -inset-3 rounded-full border-2 border-dashed border-sage/40"
            aria-hidden="true"
          />
          <div
            className="absolute -inset-6 rounded-full border border-dashed border-purple/20"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-text-light transition-colors duration-200 hover:text-rose"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </a>
    </section>
  );
}
