import Section from "../ui/Section";
import Card from "../ui/Card";
import { testimonials } from "../../data/content";
import Reveal from "../ui/Reveal";

export default function Testimonials() {
  return (
    <Section withTopBorder>
      <Reveal delay={0} className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl">What our clients say.</h2>
        <p className="text-sm text-neutral-700 max-w-md">
          A calmer, more consistent glow — without overwhelming sensitive skin.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i * 120) as 0 | 120 | 220 | 320}>
            <Card className="p-6 flex flex-col justify-between">
              <p className="text-sm leading-relaxed">“{t.quote}”</p>
              <p className="mt-4 text-[0.7rem] tracking-[0.18em] uppercase text-neutral-600">
                {t.name}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
