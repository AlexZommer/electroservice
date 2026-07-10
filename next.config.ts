import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  return {
    reactStrictMode: true,
    poweredByHeader: false,
    // Dev and production builds must not overwrite each other's manifests.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next" : ".next-build",
  };
}
