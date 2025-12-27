/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for static export (GitHub Pages / Netlify / Vercel static)
  output: 'export',

  // Ignore ESLint errors during production build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disable dev build indicators
  devIndicators: false,

  // Required for static export image handling
  images: {
    unoptimized: true,
  },

  // Disable webpack caching to avoid stale builds
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
