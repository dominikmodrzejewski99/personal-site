export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cream px-4 py-8" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text-light">
          &copy; {currentYear} Dominik Modrzejewski. All rights reserved.
        </p>
        <p className="text-sm text-text-light">
          Designed & developed by Dominik Modrzejewski
        </p>
      </div>
    </footer>
  );
}
