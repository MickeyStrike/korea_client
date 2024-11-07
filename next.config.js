/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
      {
        protocol: 'http',
        hostname: '**'
      }
    ]
      // domains: ['zealy.io','crew3-production.s3.eu-west-3.amazonaws.com','nitter.net', 'cdn.discordapp.com'],
  },
  reactStrictMode: true,
  typescript:{    ignoreBuildErrors: true,  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }
    return config
  },
};

module.exports = nextConfig;
