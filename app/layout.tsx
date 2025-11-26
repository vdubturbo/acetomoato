import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ace Tomato - Fresh Software, Delivered On Target",
  description: "Custom AI-integrated software that actually solves problems. We help businesses grow by solving big challenges on modest budgets. Custom software delivered in weeks or months, not years.",
  keywords: ["custom software", "SaaS development", "AI integration", "software consulting", "web development", "application development"],
  authors: [{ name: "The Ace Tomato Company" }],
  creator: "The Ace Tomato Company",
  publisher: "The Ace Tomato Company",
  metadataBase: new URL("https://theacetomato.company"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theacetomato.company",
    siteName: "The Ace Tomato Company",
    title: "Ace Tomato - Fresh Software, Delivered On Target",
    description: "Custom AI-integrated software that actually solves problems. We help businesses grow by solving big challenges on modest budgets.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Ace Tomato Company - Fresh Software, Delivered On Target",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ace Tomato - Fresh Software, Delivered On Target",
    description: "Custom AI-integrated software that actually solves problems. We help businesses grow by solving big challenges on modest budgets.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="9cb6d108-08f7-4080-9949-4248323e3879"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
