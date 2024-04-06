// Get Metadata returns a static object that is used.
// For dynamic metadata use https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
import { Metadata } from "next";

// page.tsx
export const getMetadataIndex = (): Metadata => {
  return {
    title: "My App",
    description: "App created with template.",
  };
};
