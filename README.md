# Arsh Tailors — Premium Website

A responsive Next.js 15 + TypeScript + Tailwind CSS website scaffold for Arsh Tailors, Shahpur, Ahmedabad.

## Run locally

1. Install Node.js 20.9+.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Replace `NEXT_PUBLIC_WHATSAPP_NUMBER` with the verified business WhatsApp number (country code + number, digits only; for India start with `91`).
5. Run `npm run dev` and open http://localhost:3000.
6. Run `npm run build` before deployment.

## Before publishing — required business verification

- Replace `https://example.com` in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` with the production domain.
- Verify the address and map pin with the business.
- Add verified phone, WhatsApp, email and opening hours.
- Replace editorial Unsplash images with actual Arsh Tailors photographs. The gallery currently states that its images are placeholders; do not present them as the shop's portfolio.
- Confirm historical claims from the previous website (30+ years, 4,000 suits, 2,500+ customers, 30,000 garments) before publishing.
- Add genuine customer reviews only after obtaining permission and verifying the source.
- Configure a real form backend (e.g. email provider/CRM) if enquiries must be stored or emailed. Current appointment form validates fields and opens a prefilled WhatsApp enquiry; it does not store submissions or confirm appointments.
- Validate final structured data, sitemap, metadata and Core Web Vitals after domain and business details are finalised.

## Routes

- `/` Home
- `/about` About Arsh Tailors
- `/services` Services and collections
- `/gallery` Gallery
- `/contact` Contact and appointment enquiry

## Notes

The design uses stock editorial images as replaceable visual placeholders. They are not claimed to be photographs of Arsh Tailors' work. No testimonials, phone number, opening hours, prices or delivery promises have been invented.
