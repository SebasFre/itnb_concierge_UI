/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://backend-concierge-itnb.pub.production.kvant.cloud/:path*'
      }
    ]
  }
}

module.exports = nextConfig 