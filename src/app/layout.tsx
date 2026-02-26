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
    default:
      "Sana Illikkal | Full Stack Developer & Backend Engineer | Portfolio",
    template: "%s | Sana Illikkal",
  },
  description:
    "Portfolio of Sana Illikkal, a Full Stack Developer (MERN Stack) from Irinjalakuda, Thrissur, Kerala. Specializing in Next.js, Node.js, TypeScript, and scalable backend architectures. View projects, skills, and experience.",
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
    "MERN Stack",
    "Nest.js",
    "PostgreSQL",
    "MongoDB",
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
    title: "Sana Illikkal | Full Stack Developer & Backend Engineer",
    description:
      "Full Stack Developer specializing in MERN stack and Next.js. Building scalable, high-performance web systems from Kerala, India. Explore my portfolio.",
    siteName: "Sana Illikkal Portfolio",
    images: [
      {
        url: "/sana 1.jpeg",
        width: 1200,
        height: 630,
        alt: "Sana Illikkal - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sana Illikkal | Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in scalable MERN stack applications. Check out my latest work and experience.",
    creator: "@sanashaju",
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
  verification: {
    google: "9qkue7Pq9jDLE5uMpNjs54xEWpkrGp0ng7LG365Af0Y",
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Thrissur, Kerala, India",
    "geo.position": "10.35, 76.21", // Irinjalakuda coordinates roughly
    ICBM: "10.35, 76.21",
    "revisit-after": "7 days",
    language: "English",
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
        
        {/* Apple Touch Icon - using the professional image */}
        <link rel="apple-touch-icon" href="/sana 1.jpeg" />

        {/* Apple Touch Icon - using the professional image */}
        <link rel="apple-touch-icon" href="/sana 1.jpeg" />

        {/* Apple Touch Icon - using the professional image */}
        <link rel="apple-touch-icon" href="/sana 1.jpeg" />

        {/* Structured Data: Combining Person, ProfessionalService, and WebSite schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Sana Illikkal",
                url: "https://sanaillikkal.in",
                image: "https://sanaillikkal.in/sana 1.jpeg",
                jobTitle: "Full Stack Developer",
                worksFor: {
                  "@type": "Organization",
                  name: "Freelance",
                },
                description:
                  "Full Stack Developer specializing in MERN stack, Next.js, and scalable backend architectures.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Irinjalakuda, Thrissur",
                  addressRegion: "Kerala",
                  addressCountry: "IN",
                },
                sameAs: [
                  "https://github.com/sanashaju",
                  "https://linkedin.com/in/sanashaju",
                  "https://leetcode.com/u/sanaillikkal/",
                ],
                knowsAbout: [
                  "Full Stack Development",
                  "MERN Stack",
                  "Node.js",
                  "Next.js",
                  "React.js",
                  "TypeScript",
                  "MongoDB",
                  "PostgreSQL",
                  "Backend Architecture",
                  "API Development",
                  "AWS",
                  "Docker",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                name: "Sana Illikkal - Full Stack Development Services",
                description:
                  "Specialized in building robust, scalable MERN stack applications and high-performance frontend interfaces.",
                image: "https://sanaillikkal.in/og-image.png",
                provider: {
                  "@type": "Person",
                  name: "Sana Illikkal",
                },
                areaServed: {
                  "@type": "Country",
                  name: "India",
                },
                serviceType: [
                  "Web Development",
                  "Full Stack Development",
                  "Backend Engineering",
                  "Software Development",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Sana Illikkal Portfolio",
                url: "https://sanaillikkal.in/",
                description:
                  "Professional portfolio website covering projects, skills, and experience as a Full Stack Developer.",
                author: {
                  "@type": "Person",
                  name: "Sana Illikkal",
                },
              },
            ]),
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
