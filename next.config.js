/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  typescript: {
    // Type checking is handled by CI/CD
    ignoreBuildErrors: false,
  },
  eslint: {
    // ESLint is handled by CI/CD
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig