/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

let nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/ahmann-dev' : '' 
}

module.exports = nextConfig
