
import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer, WhatsApp } from "@/components/site";

export const metadata: Metadata = {
    metadataBase: new URL("https://example.com"),
    title: {
        default: "Arsh Tailors | Men's Custom Tailoring in Shahpur, Ahmedabad",
        template: "%s | Arsh Tailors",
    },
    description:
        "Discover personalised men's tailoring at Arsh Tailors in Shahpur, Ahmedabad. Explore bespoke suits, formalwear and traditional Indian menswear.",
    openGraph: {
        title: "Arsh Tailors — Elegance in Every Stitch",
        description: "Personalised men's tailoring in Shahpur, Ahmedabad.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
                <WhatsApp />
            </body>
        </html>
    );
}
