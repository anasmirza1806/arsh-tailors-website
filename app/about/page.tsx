import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/site";
import { CraftFeatures } from "@/components/sections";
export const metadata: Metadata = {
  title:
    "About Arsh Tailors | Our Approach to Men's Tailoring',description:'Learn about Arsh Tailors, a men’s tailoring studio in Shahpur, Ahmedabad, and its approach to personalised formal and traditional clothing.",
};
export default function About() {
  return (
    <>
      <PageIntro
        label="About Arsh Tailors"
        title="A personal approach to the art of tailoring."
        copy="Rooted in Shahpur, Ahmedabad, Arsh Tailors brings together men's formalwear and traditional Indian clothing in one place. Our focus is simple: understand your preferences and create a garment around them."
      />
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-14 items-center">
          <div className="relative h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=1200&q=85"
              alt="Tailoring materials and craftsmanship"
              fill
              className="image-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-5">Our philosophy</p>
            <h2 className="section-title">
              Clothing should feel like it belongs to you.
            </h2>
            <p className="body-copy mt-7">
              Personal style is different for everyone. Whether you are looking
              for a formal suit, a wardrobe essential or traditional attire for
              a special occasion, the process starts with understanding what you
              need.
            </p>
            <p className="body-copy mt-4">
              We avoid one-size-fits-all thinking. Measurements, design
              preferences and fitting discussions help shape a more individual
              result.
            </p>
          </div>
        </div>
      </section>
      <section className="section bg-[#efe7d9]">
        <div className="container">
          <p className="eyebrow mb-5">What guides our work</p>
          <h2 className="section-title mb-14">The details matter.</h2>
          <CraftFeatures />
        </div>
      </section>
      <section className="section">
        <div className="container max-w-3xl text-center">
          <p className="eyebrow mb-5">Our heritage</p>
          <h2 className="section-title mx-auto">
            A local tailoring destination in Shahpur.
          </h2>
          <p className="body-copy mt-7">
            The previous Arsh Tailors website references more than 30 years of
            experience and historical garment and customer milestones. These
            figures are not presented as current verified claims here. They can
            be added once the business confirms the latest accurate information.
          </p>
        </div>
      </section>
    </>
  );
}
