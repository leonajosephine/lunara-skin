import Container from "./Container";
import { brand } from "../../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-ls-border/70">
      <Container className="py-10 flex flex-col md:flex-row gap-8 md:justify-between">
        <div className="space-y-2 max-w-sm">
          <p className="font-serif tracking-[0.25em] text-[0.7rem] uppercase">
            {brand.name}
          </p>
          <p className="text-sm text-neutral-700">
            Quiet luxury skincare for sensitive, overstimulated skin.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="space-y-2">
            <p className="text-[0.7rem] tracking-[0.18em] uppercase">Explore</p>
            <ul className="space-y-1 text-neutral-700">
              <li>Shop</li>
              <li>Ritual</li>
              <li>Journal</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-[0.7rem] tracking-[0.18em] uppercase">Connect</p>
            <ul className="space-y-1 text-neutral-700">
              <li>Instagram</li>
              <li>Contact</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
