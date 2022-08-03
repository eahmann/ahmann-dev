/** @type {import('next').NextConfig} */
const ghPages = process.env.NEXT_PUBLIC_GH_PAGES ? "/ahmann-dev" : undefined

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: ""
  },
}

module.exports = nextConfig
