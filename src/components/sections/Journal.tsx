import Section from "../ui/Section";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { journalPosts } from "../../data/content";

export default function Journal() {
  return (
    <Section id="journal" withTopBorder className="mb-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl">From the journal.</h2>
        <Button variant="ghost" className="focus-ring rounded">
          View all articles
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {journalPosts.map((post) => (
          <Card key={post.title} className="p-5 flex flex-col justify-between min-h-[180px]">
            <div className="space-y-2">
              <p className="text-[0.7rem] tracking-[0.18em] uppercase text-neutral-600">
                {post.tag}
              </p>
              <h3 className="font-serif text-lg">{post.title}</h3>
            </div>

            <Button variant="ghost" className="w-fit focus-ring rounded mt-4">
              Read article
            </Button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
