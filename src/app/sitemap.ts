import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sanaillikkal.in",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // Since this is a single-page portfolio, we maximize indexing on the root.
    // If you add a blog or separate project pages later, they should be added here.
  ];
}
