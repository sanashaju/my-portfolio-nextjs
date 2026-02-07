import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import FluidCursor from "@/components/ui/FluidCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shasbin.in"),
  title: "Sana Illikkal - Full Stack Developer | Backend Expert",
  description:
    "Portfolio of Sana Shaju, a Full Stack Developer from Irinjalakuda, Thrissur, India. Expert in Node.js, Express, React, Next.js, and scaling secure backend systems.",
  keywords: [
    "Sana Shaju",
    "Full Stack Developer",
    "Full Stack Development",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Thrissur",
    "Kerala",
    "Software Engineer",
  ],
  authors: [{ name: "Sana Shaju", url: "https://github.com/sanashaju" }],
  creator: "Sana Shaju",
  publisher: "Sana Shaju",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // Recommendation: update this to your actual domain
    title: "Sana Shaju - Full Stack Developer Portfolio",
    description:
      "Explore the projects and skills of Sana Shaju. Specializing in scalable backend systems and modern frontend interfaces.",
    siteName: "Sana Shaju Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sana Shaju Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sana Shaju - Full Stack Developer",
    description:
      "Explore the projects and skills of Sana Shaju. Specializing in scalable backend systems and modern frontend interfaces.",
    creator: "@sanashaju  ",
    images: ["/twitter-image.png"],
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
  verification: {
    google: "your-google-verification-code", // Note: You might want to update this too
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://skillicons.dev" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sana Shaju",
              url: "https://your-domain.com",
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer specializing in Node.js, Express, and scalable backend architectures.",
              image: "https://your-domain.com/profile-image.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Irinjalakuda, Thrissur",
                addressRegion: "Kerala",
                addressCountry: "India",
              },
              knowsAbout: [
                "Full Stack Development",
                "Node.js",
                "Express.js",
                "TypeScript",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Docker",
              ],
              sameAs: [
                "https://github.com/sanashaju",
                "https://www.linkedin.com/in/sanashaju/",
                "https://leetcode.com/u/sanaillikkal/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${outfit.className} antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
        <FluidCursor />
        <Analytics />
      </body>
    </html>
  );
}
