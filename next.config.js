/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compress: true,
    poweredByHeader: false,
    generateEtags: true,
    headers: async () => [
        {
            source: '/:path*',
            headers: [
                {
                    key: 'X-DNS-Prefetch-Control',
                    value: 'on'
                },
                {
                    key: 'X-Frame-Options',
                    value: 'SAMEORIGIN'
                }
            ]
        }
    ]
}

module.exports = nextConfig
