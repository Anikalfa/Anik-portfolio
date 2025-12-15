/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export a fully static site suitable for GitHub Pages
  output: 'export',
  reactStrictMode: true,
  images: {
    // Disable Next.js image optimization for static export
    unoptimized: true,
  },
};

module.exports = nextConfig;
