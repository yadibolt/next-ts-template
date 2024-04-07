import type { Metadata } from "next";
import { getMetadataIndex } from "@/layout/metadata";
import "@/UI/global.css";
import { Providers } from "./providers";

export const metadata: Metadata = getMetadataIndex();

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
