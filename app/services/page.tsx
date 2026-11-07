import type { Metadata } from "next";
import Image from "next/image";
import { collections, WhatsAppLink } from "@/components/sections";
import { PageIntro } from "@/components/site";
export const metadata: Metadata = {
  title: "Men’s Tailoring Services & Collections in Ahmedabad",
  description:
    "Explore bespoke suits, formal shirts, custom trousers, Jodhpuri suits, Pathani wear, kurta-payjama and traditional menswear at Arsh Tailors, Shahpur.",
};
export default function Services() {
  return (
    <>
      <PageIntro
        label="Services & Collections"
        title="Made for your moments. Tailored to your style."
        copy="Explore contemporary men's formalwear and traditional Indian attire. Discuss your preferred silhouette, details and fitting requirements with Arsh Tailors."
      />
      <section className="section">
        <div className="container space-y-20">
          {collections.map((c, i) => (
            <article
              id={c.name.toLowerCase().replaceAll(" ", "-")}
              key={c.name}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center scroll-mt-28 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative h-[390px] bg-[#e5dccf]">
                <Image
                  src={`https://images.unsplash.com/${c.image}?auto=format&fit=crop&w=1200&q=85`}
                  alt={`${c.name} tailoring inspiration`}
                  fill
                  className="image-cover"
                  sizes="50vw"
                />
              </div>
              <div>
                <p className="eyebrow mb-5">Collection 0{i + 1}</p>
                <h2 className="text-5xl">{c.name}</h2>
                <p className="body-copy mt-6">{c.desc}</p>
                <p className="body-copy mt-3">
                  Share your occasion, preferred style and fitting needs with
                  our team to discuss the possibilities for a made-to-measure
                  piece.
                </p>
                <div className="mt-8">
                  <WhatsAppLink service={c.name} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
