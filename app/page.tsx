import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CollectionGrid, CraftFeatures } from "@/components/sections";
const hero =
  "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=2200&q=90";
export default function Home() {
  return (
    <>
      <section className="relative min-h-[690px] h-[82vh] max-h-[900px] bg-[#382d25] text-white overflow-hidden">
        <Image
          src={hero}
          alt="Elegant tailored men's suit"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#211b16]/80 via-[#211b16]/35 to-transparent" />
        <div className="container relative h-full flex items-center">
          <div className="max-w-2xl pt-8">
            <p className="eyebrow text-[#dfc69f] mb-7">
              Bespoke menswear · Ahmedabad
            </p>
            <h1 className="text-[clamp(54px,8vw,100px)] leading-[.98]">
              Elegance in
              <br />
              <i>Every Stitch.</i>
            </h1>
            <p className="text-white/80 max-w-lg leading-8 mt-8 text-sm md:text-base">
              Discover the art of personalised men's tailoring at Arsh Tailors.
              From timeless formal suits to traditional Indian attire, every
              garment begins with your style and fit in mind.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <Link href="/services" className="btn btn-light">
                Explore Collections <ArrowUpRight size={14} />
              </Link>
              <Link
                href="/contact#appointment"
                className="btn bg-[#f7f3ea] text-[#29251f] border-[#f7f3ea]"
              >
                Book Your Fitting
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 flex items-center gap-3 text-[9px] tracking-[.2em] uppercase">
          <ArrowDown size={13} /> Discover the craft
        </div>
      </section>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[480px] bg-[#e2d6c5]">
            <Image
              src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=1100&q=85"
              alt="Tailoring fabric and menswear detail"
              fill
              className="image-cover"
              sizes="50vw"
            />
          </div>
          <div>
            <p className="eyebrow mb-5">The Arsh approach</p>
            <h2 className="section-title">
              Where Tradition Meets Modern Tailoring.
            </h2>
            <div className="gold-line my-7" />
            <p className="body-copy">
              At Arsh Tailors, clothing is personal. Explore a considered range
              of men's formalwear and traditional Indian attire, with attention
              to individual measurements, preferred details and the way you want
              to present yourself.
            </p>
            <p className="body-copy mt-4">
              From the first conversation to the final fitting, our focus is on
              helping you find a style and fit that feels distinctly yours.
            </p>
            <Link className="btn mt-8" href="/about">
              Discover Our Story <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section bg-[#efe7d9]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-5">Made around you</p>
              <h2 className="section-title">The Collections</h2>
            </div>
            <Link href="/services" className="btn">
              View all collections <ArrowUpRight size={14} />
            </Link>
          </div>
          <CollectionGrid />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow mb-5">The difference is in the details</p>
          <h2 className="section-title mb-14">A more personal way to dress.</h2>
          <CraftFeatures />
        </div>
      </section>
      <section className="grid md:grid-cols-2 min-h-[530px]">
        <div className="relative min-h-[380px]">
          <Image
            src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=1200&q=85"
            alt="Tailoring craftsmanship detail"
            fill
            className="image-cover"
            sizes="50vw"
          />
        </div>
        <div className="bg-[#382d25] text-[#f7f3ea] flex items-center">
          <div className="p-10 md:p-16 max-w-xl">
            <p className="eyebrow mb-5">The craft of fit</p>
            <h2 className="text-5xl leading-tight">
              Made Around You. Finished with Care.
            </h2>
            <p className="text-[#d0c4b5] leading-8 text-sm mt-7">
              A garment is more than its fabric. It is the balance of
              proportion, movement and detail. Begin with a conversation about
              the piece you have in mind.
            </p>
            <Link href="/contact#appointment" className="btn btn-light mt-8">
              Start a Conversation <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container text-center">
          <p className="eyebrow mb-5">Your style, your fit</p>
          <h2 className="section-title mx-auto">
            Your Style Deserves the Perfect Fit.
          </h2>
          <p className="body-copy max-w-xl mx-auto mt-6">
            Let's create something that feels uniquely yours. Visit Arsh Tailors
            in Shahpur, Ahmedabad, or get in touch to discuss your requirements.
          </p>
          <div className="flex justify-center flex-wrap gap-3 mt-9">
            <Link className="btn btn-dark" href="/contact#appointment">
              Book an Appointment
            </Link>
            <Link className="btn" href="/contact">
              Contact the Studio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
