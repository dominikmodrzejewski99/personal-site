import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-4 py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-cream bg-cream-light px-6 py-16 sm:px-16">
          {/* Decorative blobs */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-rose/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-1/2 left-1/3 h-48 w-48 rounded-full bg-sage/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <h2
              id="contact-heading"
              className="font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl"
            >
              Let&apos;s build something{" "}
              <span className="text-rose">great together</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-text-muted">
              I&apos;m always open to new opportunities and interesting projects.
              Whether you need a frontend expert or a full-stack collaborator,
              let&apos;s talk.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="mailto:modrzejewskidominik@proton.me"
                className="group flex cursor-pointer items-center gap-3 rounded-xl border border-cream bg-white/80 p-4 transition-colors duration-200 hover:border-rose/30 hover:bg-white"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose/10">
                  <Mail size={18} className="text-rose" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-light">Email</p>
                  <p className="text-sm font-medium text-text">
                    modrzejewskidominik@proton.me
                  </p>
                </div>
              </a>

              <a
                href="tel:+48503181784"
                className="group flex cursor-pointer items-center gap-3 rounded-xl border border-cream bg-white/80 p-4 transition-colors duration-200 hover:border-sage/30 hover:bg-white"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sage/10">
                  <Phone size={18} className="text-sage-dark" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-text-light">Phone</p>
                  <p className="text-sm font-medium text-text">
                    +48 503 181 784
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-cream bg-white/80 p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple/10">
                  <MapPin size={18} className="text-purple" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-text-light">Location</p>
                  <p className="text-sm font-medium text-text">
                    Wroc&#322;aw, Poland
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-3">
                  <a
                    href="https://github.com/dominikmodrzejewski99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-rose/10 text-text-muted transition-colors duration-200 hover:bg-rose/20 hover:text-rose-dark"
                    aria-label="GitHub profile"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/in/dominikmodrzejewski"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-purple/10 text-text-muted transition-colors duration-200 hover:bg-purple/20 hover:text-purple-dark"
                    aria-label="LinkedIn profile"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
