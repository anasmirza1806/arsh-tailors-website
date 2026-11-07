import type { Metadata } from "next";
import { PageIntro } from "@/components/site";
import { AppointmentForm } from "@/components/forms";
export const metadata: Metadata = {
  title: "Contact & Appointment Enquiries | Arsh Tailors Shahpur",
  description:
    "Contact Arsh Tailors in Shahpur, Ahmedabad to discuss bespoke suits, formalwear and traditional men's tailoring.",
};
export default function Contact() {
  return (
    <>
      <PageIntro
        label="Contact"
        title="Let's begin with a conversation."
        copy="Tell us what you have in mind. Get in touch with Arsh Tailors in Shahpur, Ahmedabad to discuss a garment, fitting or appointment enquiry."
      />
      <section className="section">
        <div className="container grid lg:grid-cols-[.8fr_1.2fr] gap-16">
          <div>
            <p className="eyebrow mb-5">Visit the studio</p>
            <h2 className="text-4xl">Arsh Tailors</h2>
            <p className="body-copy mt-6">
              Opp. Shoail Parlor, Lal School,
              <br />
              Sarkiwad, Shahpur,
              <br />
              Ahmedabad – 380001,
              <br />
              Gujarat, India.
            </p>
            <a
              className="btn mt-7"
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/search/?api=1&query=Arsh+Tailors+Sarkiwad+Shahpur+Ahmedabad"
            >
              Get Directions ↗
            </a>
            <div className="mt-12 border-t border-[#d9d0c3] pt-7">
              <p className="eyebrow mb-3">Contact details</p>
              <p className="body-copy">
                Phone, WhatsApp, email and business hours will be added after
                verification.
              </p>
            </div>
            <div className="mt-8 aspect-[4/3] bg-[#e8dfd2]">
              <iframe
                title="Arsh Tailors location map"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Arsh%20Tailors%20Sarkiwad%20Shahpur%20Ahmedabad&output=embed"
              />
            </div>
          </div>
          <div
            id="appointment"
            className="bg-[#efe7d9] p-7 md:p-10 scroll-mt-28"
          >
            <p className="eyebrow mb-4">Appointment enquiry</p>
            <h2 className="text-4xl">Tell us what you need.</h2>
            <p className="body-copy mt-4 mb-8">
              This form prepares your enquiry in WhatsApp. Your appointment is
              not confirmed until the business replies and confirms it.
            </p>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
