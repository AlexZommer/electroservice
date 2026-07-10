import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  return {
    reactStrictMode: true,
    poweredByHeader: false,
    output: "export",
    images: {
      unoptimized: true,
    },
    // Keep the dev cache separate and export production files for Cloudflare Pages.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next" : "out",
  };
}
