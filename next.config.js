/** @type {import('next').NextConfig} */
const ghPages = process.env.GH_PAGES ? "/ahmann-dev" : undefined

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: ""
  },
  assetPrefix: ghPages
}

module.exports = nextConfig
