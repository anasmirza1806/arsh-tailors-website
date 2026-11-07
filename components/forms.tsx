"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
export function AppointmentForm() {
  const [status, setStatus] = useState("");
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const phone = String(f.get("phone") || "");
    const service = String(f.get("service") || "");
    const date = String(f.get("date") || "Not specified");
    const time = String(f.get("time") || "Not specified");
    const notes = String(f.get("notes") || "");
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "91XXXXXXXXXX";
    const message = `Hello Arsh Tailors! I would like to make an appointment enquiry.\nName: ${name}\nMobile: ${phone}\nService: ${service}\nPreferred date: ${date}\nPreferred time: ${time}\nRequirements: ${notes}`;
    if (number.includes("X")) {
      setStatus(
        "Please configure the verified WhatsApp number in the .env.local file before using this form.",
      );
      return;
    }
    window.open(
      `https://wa.me/${number}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setStatus(
      "Your enquiry is ready in WhatsApp. Please send the message there. The appointment is not confirmed until Arsh Tailors replies.",
    );
  }
  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <label>
          <span className="form-label">Full name *</span>
          <input
            className="form-field"
            name="name"
            required
            placeholder="Your name"
          />
        </label>
        <label>
          <span className="form-label">Mobile number *</span>
          <input
            className="form-field"
            name="phone"
            required
            type="tel"
            pattern="[0-9+() -]{8,18}"
            placeholder="Your phone number"
          />
        </label>
      </div>
      <label>
        <span className="form-label">Email (optional)</span>
        <input
          className="form-field"
          name="email"
          type="email"
          placeholder="you@example.com"
        />
      </label>
      <label>
        <span className="form-label">Select a service *</span>
        <select className="form-field" name="service" required defaultValue="">
          <option value="" disabled>
            Select a collection
          </option>
          {[
            "Bespoke Suits",
            "Formal Shirts",
            "Custom Trousers",
            "Jodhpuri Suits",
            "Pathani Wear",
            "Kurta-Payjama",
            "Zabbha-Salwar",
            "Paint-Shirts",
            "Other",
          ].map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </label>
      <div className="grid sm:grid-cols-2 gap-5">
        <label>
          <span className="form-label">Preferred date</span>
          <input
            className="form-field"
            name="date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
          />
        </label>
        <label>
          <span className="form-label">Preferred time</span>
          <input className="form-field" name="time" type="time" />
        </label>
      </div>
      <label>
        <span className="form-label">Special requirements</span>
        <textarea
          className="form-field min-h-28"
          name="notes"
          placeholder="Tell us about the garment or occasion..."
        />
      </label>
      <button className="btn btn-dark w-full" type="submit">
        Continue to WhatsApp <ArrowUpRight size={14} />
      </button>
      {status && (
        <p role="status" className="text-sm text-[#66513a] leading-6">
          {status}
        </p>
      )}
    </form>
  );
}
