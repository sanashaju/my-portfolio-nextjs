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
  metadataBase: new URL("https://sanaillikkal.in"),
  title: {
    default: "Sana Illikkal | Full Stack Developer & Backend Engineer",
    template: "%s | Sana Illikkal",
  },
  description:
    "Portfolio of Sana Illikkal, a Full Stack Developer from Kerala, India. Specializing in MERN stack, Next.js 15, scalable backend systems, and performance-driven web applications.",
  keywords: [
    "Sana Illikkal",
    "Sana Shaju",
    "Full Stack Developer India",
    "Backend Developer Kerala",
    "MERN Stack Developer",
    "Next.js Developer",
    "Node.js Expert",
    "TypeScript Developer",
    "React.js Developer",
    "Web Development Thrissur",
    "Software Engineer Portfolio",
    "Scalable Web Applications",
    "Irinjalakuda Developer",
  ],
  authors: [{ name: "Sana Illikkal", url: "https://github.com/sanashaju" }],
  creator: "Sana Illikkal",
  publisher: "Sana Illikkal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanaillikkal.in",
    title: "Sana Illikkal - Full Stack Developer | Engineering Reliable Web Systems",
    description:
      "Crafting high-performance digital solutions with MERN stack and Next.js. Explore the portfolio of Sana Illikkal.",
    siteName: "Sana Illikkal Portfolio",
    images: [
      {
        url: "/sana 1.jpeg", // Using the actual profile image for better personal branding on share
        width: 1200,
        height: 630,
        alt: "Sana Illikkal - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sana Illikkal - Full Stack Developer",
    description:
      "Full Stack Developer specializing in scalable MERN stack applications. Check out my latest work.",
    creator: "@sanashaju",
    images: ["/sana 1.jpeg"],
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
    google: "9qkue7Pq9jDLE5uMpNjs54xEWpkrGp0ng7LG365Af0Y",
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
              name: "Sana Illikkal",
              url: "https://sanaillikkal.in",
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer specializing in Node.js, Express, and scalable backend architectures.",
              image: "https://sanaillikkal.in/sana 1.jpeg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Irinjalakuda, Thrissur",
                addressRegion: "Kerala",
                addressCountry: "India",
              },
              knowsAbout: [
                "Full Stack Development",
                "Node.js",
                "Next.js",
                "React",
                "Nest.js",
                "Prisma",
                "TypeScript",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Tailwind CSS",
                "AWS",
                "Docker",
                "System Design",
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
