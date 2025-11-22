import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ace Tomato - Fresh Software, Delivered On Target",
  description: "Custom AI-integrated software that actually solves problems. We help businesses grow by solving big challenges on modest budgets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
