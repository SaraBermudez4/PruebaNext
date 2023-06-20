/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      'd2sk3o7yhm4ek9.cloudfront.net',
      'differentstorage175648-prod.s3.eu-west-1.amazonaws.com',
      'differentstorage221324-test.s3.eu-west-1.amazonaws.com',
      'tws.tourknife.com',
      'images.kiwi.com',
      'images.unsplash.com',
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
}

module.exports = nextConfig
