import { ImageResponse } from "next/og";
import { ABOUT_ME, SOCIAL_LINKS } from "../components/constants/data";

export const runtime = "edge";
export const alt = `${ABOUT_ME.name} - Portfolio Website`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom right, #0a0a0a, #1a1a1a)",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(168, 85, 247, 0.3)",
            borderRadius: "32px",
            padding: "60px",
            background: "rgba(255, 255, 255, 0.03)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", marginBottom: "30px" }}>
             <div style={{ width: "120px", height: "120px", borderRadius: "60px", background: "#A855F7", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "30px" }}>
                 <span style={{ fontSize: "60px", color: "white", fontWeight: "bold" }}>S</span>
             </div>
             <div style={{ display: "flex", flexDirection: "column" }}>
                <h1 style={{ fontSize: 72, color: "#fff", fontWeight: 800, margin: 0 }}>
                  {ABOUT_ME.name}
                </h1>
                <p style={{ fontSize: 32, color: "#A855F7", fontWeight: 600, margin: "8px 0 0 0" }}>
                  {ABOUT_ME.title}
                </p>
             </div>
          </div>
          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
             {["React", "Next.js", "Node.js", "TypeScript", "AWS"].map((skill) => (
                <div key={skill} style={{ padding: "8px 20px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#ccc", fontSize: "20px" }}>
                    {skill}
                </div>
             ))}
          </div>
          <p style={{ fontSize: 24, color: "#666", marginTop: "40px", fontFamily: "monospace" }}>
            {SOCIAL_LINKS.github.replace("https://github.com/", "github.com/")}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
