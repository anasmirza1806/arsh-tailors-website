import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/site";
export const metadata: Metadata = {
  title: "Gallery | Arsh Tailors Ahmedabad",
  description:
    "Explore a visual moodboard of men's tailoring, formalwear and traditional menswear styles. Replace editorial placeholders with verified Arsh Tailors work.",
};
const shots = [
  ["photo-1593032465175-481ac7f401a0", "Suiting"],
  ["photo-1603252109303-2751441dd157", "Formal shirts"],
  ["photo-1473966968600-fa801b869a1a", "Trousers"],
  ["photo-1598033129183-c4f50c736f10", "Traditional style"],
  ["photo-1617137968427-85924c800a22", "Menswear"],
  ["photo-1610030469983-98e550d6193c", "Indian attire"],
  ["photo-1596755094514-f87e34085b2c", "Shirting"],
  ["photo-1592878904946-b3cd8ae243d0", "Craft details"],
];
export default function Gallery() {
  return (
    <>
      <PageIntro
        label="Gallery"
        title="A study in style, fabric and detail."
        copy="A visual starting point for your next garment. The current images are editorial placeholders; replace them with photographs of Arsh Tailors' actual work before publishing as a business portfolio."
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {shots.map(([id, alt], i) => (
              <div
                key={id}
                className={`relative overflow-hidden bg-[#e8dfd2] ${i === 0 || i === 5 ? "aspect-[4/5]" : "aspect-[4/5]"}`}
              >
                <Image
                  src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`}
                  alt={`${alt} editorial placeholder`}
                  fill
                  sizes="(max-width:700px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition duration-700"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/55 to-transparent p-4 text-white text-xs tracking-widest uppercase">
                  {alt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
