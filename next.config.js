/** @type {import('next').NextConfig} */
const isPages = process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isPages ? '/ahmann-dev' : '' 
}

module.exports = nextConfig
