/** @type {import('next').NextConfig} */
// const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

// console.log(ghPages)

let nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

if (nextConfig.basePath) {
  nextConfig = {
    assetPrefix: '/ahmann-dev',
    ...nextConfig
  }
}

module.exports = nextConfig
