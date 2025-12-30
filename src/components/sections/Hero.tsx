import Section from "../ui/Section";
import Button from "../ui/Button";
import ImageCard from "../ui/ImageCard";

// Import the hero image
import heroImg from "../../assets/hero.png";

export default function Hero() {
  return (
    <Section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-[0.7rem] tracking-[0.25em] uppercase">
            New • Quiet luxury skincare
          </p>

          <h1 className="font-serif text-3xl md:text-5xl leading-tight">
            Radiant skin for your <span className="italic">quietest moments.</span>
          </h1>

          <p className="text-sm md:text-base text-neutral-700 max-w-md">
            Lunara Skin pairs clinically-backed actives with soothing botanicals to support a
            calm, enduring glow — for sensitive, overstimulated skin.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button variant="primary">Shop collection</Button>
            <Button variant="outline">Discover ritual</Button>
          </div>

          <div className="text-[0.7rem] text-neutral-600 pt-4 space-x-4">
            <span>• Dermatologist-formulated</span>
            <span>• Fragrance-free</span>
          </div>
        </div>

        {/* visual placeholder */}
        <ImageCard
          src={heroImg}
          alt="Lunara Skin hero product shot"
          className="aspect-[3/4]"
        />
      </div>
    </Section>
  );
}
