/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: ""
  },
  basePath: "/ahmann-dev",
  assetPrefix: "/ahmann-dev"
}

module.exports = nextConfig
