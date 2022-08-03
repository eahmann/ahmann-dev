/** @type {import('next').NextConfig} */
const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

console.log(ghPages)

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: ghPages ? '/ahmann-dev' : '',
}

module.exports = nextConfig
