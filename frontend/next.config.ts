import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // 👇 Important for container hosts (smaller runtime bundle + fewer surprises)
  output: "standalone",

  // If you use remote images (e.g., Cloudinary), uncomment and adapt:
  // images: {
  //   remotePatterns: [
  //     { protocol: "https", hostname: "res.cloudinary.com" }
  //   ]
  // }
};

export default nextConfig;
