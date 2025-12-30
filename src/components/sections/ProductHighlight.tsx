import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import productImg from "../../assets/productImage.png";
import ImageCard from "../ui/ImageCard";

export default function ProductHighlight() {
  return (
    <section className="py-16">
      <Container className="grid md:grid-cols-2 gap-12 items-center">
        <Reveal delay={0} className="order-2 md:order-1 space-y-4">
          <div className="order-2 md:order-1 space-y-4">
            <p className="text-[0.7rem] tracking-[0.22em] uppercase">Hero collection</p>
            <h2 className="font-serif text-2xl md:text-3xl">The Essential Ritual Set</h2>
            <p className="text-sm text-neutral-700">
              A three-step routine for barrier support and lasting luminosity: a cream-gel
              cleanser, peptide serum and ceramide-rich moisturizer.
            </p>
            <ul className="text-sm text-neutral-700 space-y-1">
              <li>• Barrier-supporting ceramides</li>
              <li>• Encapsulated vitamin C derivative</li>
              <li>• No added fragrance or essential oils</li>
            </ul>
            <div className="flex items-center justify-between pt-4">
              <span className="text-sm">€98 · Set of 3 full-size products</span>
              <button className="text-[0.7rem] border border-ls-text px-5 py-2 rounded-full uppercase tracking-[0.18em] hover:bg-ls-text hover:text-ls-bg transition-colors">
                View details
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={220} className="order-1 md:order-2">
          <div className="order-1 md:order-2">
            <ImageCard src={productImg} alt="Lunara Skin product set" className="aspect-video" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

