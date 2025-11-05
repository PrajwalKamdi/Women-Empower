/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  output: "standalone",
  // images: { remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }] },
};

export default nextConfig;
