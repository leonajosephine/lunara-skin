import Section from "../ui/Section";
import Card from "../ui/Card";
import { ritualSteps } from "../../data/content";

export default function Ritual() {
  return (
    <Section id="ritual" withTopBorder>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl">A three-step evening ritual.</h2>
        <p className="text-sm text-neutral-700 max-w-md">
          Designed to be both sensory and simplified. No 12-step routines, no decision fatigue —
          just what your skin actually needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {ritualSteps.map((item) => (
          <Card key={item.step} className="p-6 flex flex-col justify-between min-h-[210px]">
            <div className="space-y-2">
              <p className="text-[0.7rem] tracking-[0.22em] uppercase text-neutral-600">
                {item.step}
              </p>
              <h3 className="font-serif text-lg">{item.title}</h3>
              <p className="text-sm text-neutral-700">{item.text}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
