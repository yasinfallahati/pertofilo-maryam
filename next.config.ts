import type { NextConfig } from "next";

const repo = "pertofilo-maryam";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repo}` : "",
  assetPrefix: isGitHubPages ? `/${repo}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
