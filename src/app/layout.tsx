import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";

import { ConvexClientProvider } from "@/components/convex-client-provider";

const inter = Inter({
  subsets: ["latin"]
})
export const metadata: Metadata = {
  title: {
    template: "%s | Google Docs Clone",
    default: "Google Docs Clone | Karandeep",
  },
  description:
    "A real-time collaborative document editor replicating core Google Docs functionality. Features live multi-user editing, live cursors, rich text formatting, comments, and a templates gallery — powered by Liveblocks WebSocket infrastructure for sub-100ms edit sync across concurrent users with zero write conflicts.",
  keywords: [
    "Google Docs Clone",
    "Real-Time Collaboration",
    "Liveblocks",
    "Convex",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "shadcn/ui",
    "Live Cursors",
    "WebSocket",
    "Real-Time Systems",
    "Collaborative Editor",
    "Karandeep",
  ],
  authors: [
    {
      name: "Karandeep",
      // url: "https://my-portfolio.com"  TODO: add your portfolio
    },
  ],
  creator: "Karandeep",
  openGraph: {
    title: "Google Docs Clone | Real-Time Collaborative Editor",
    description:
      "Built with Next.js, TypeScript, Liveblocks, and Convex. Features live multi-user editing with sub-100ms sync, live cursors, rich text formatting, comments, and a templates gallery.",
    url: "https://google-docs-project-ten.vercel.app/",
    siteName: "Google Docs Clone",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster />
            {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
