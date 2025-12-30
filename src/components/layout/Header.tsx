import Container from "./Container";
import { brand, navLinks } from "../../data/content";

export default function Header() {
  return (
    <header className="border-b border-ls-border/70 sticky top-0 z-20 bg-ls-bg/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <div className="font-serif tracking-[0.25em] text-[0.7rem] uppercase">
          {brand.name}
        </div>

        <nav className="hidden md:flex gap-8 text-xs tracking-[0.18em] uppercase">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:opacity-70 transition-opacity"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button className="text-[0.7rem] border border-ls-text px-4 py-2 rounded-full uppercase tracking-[0.18em] hover:bg-ls-text hover:text-ls-bg transition-colors">
          Shop
        </button>
      </Container>
    </header>
  );
}
