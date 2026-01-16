/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // For GitHub Pages subfolder deployment (fork)
  // Set basePath to the repository name
  // For custom domain (upstream), this will be overridden by environment variable
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/projectalita.github.io',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/projectalita.github.io',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fix for mermaid cytoscape import issue
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      }
    }
    return config
  },
}

module.exports = nextConfig