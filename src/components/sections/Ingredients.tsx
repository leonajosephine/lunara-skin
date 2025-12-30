import Container from "../layout/Container";
import { ingredients as ingredientList } from "../../data/content";

export default function Ingredients() {
  return (
    <section
      id="ingredients"
      className="py-16 border-t border-ls-border/70 bg-cover bg-center relative"
    >
      <div
        className="absolute inset-0 bg-black opacity-20"
        style={{ backgroundImage: "url('../src/assets/texture.png')" }}
      ></div>
      <Container className="relative grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <p className="text-[0.7rem] tracking-[0.22em] uppercase">Ingredient philosophy</p>
          <h2 className="font-serif text-2xl md:text-3xl">Fewer ingredients. Higher impact.</h2>
          <p className="text-sm text-neutral-700">
            We formulate with clinically studied actives at gentle concentrations, pairing
            them with soothing, barrier-supportive bases. Every ingredient has a job,
            nothing is there just for marketing.
          </p>
        </div>

        <div className="space-y-4 text-sm text-neutral-700">
          <h3 className="font-serif text-lg">Hero ingredients</h3>
          <ul className="space-y-2">
            {ingredientList.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
