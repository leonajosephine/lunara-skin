import Container from "../layout/Container";
import { benefits } from "../../data/content";

export default function Benefits() {
  return (
    <section className="py-12 border-y border-ls-border/70">
      <Container className="grid md:grid-cols-3 gap-10 py-4">
        {benefits.map((item) => (
          <div key={item.title} className="space-y-2">
            <h3 className="font-serif text-lg">{item.title}</h3>
            <p className="text-sm text-neutral-700">{item.text}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

