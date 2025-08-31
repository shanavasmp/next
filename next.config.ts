import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export
  output: 'export',

  // Set base path if your repo name is not the root
  // Replace 'YOUR_REPO_NAME' with your GitHub repo name
  basePath: '/next',

  // Optional: remove trailing slash in URLs
  trailingSlash: true,
};

export default nextConfig;
