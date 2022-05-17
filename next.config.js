/** @type {import('next').NextConfig} */

const nextConfig = {
  // reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"]
  },
  env: {
    BASE_URL: process.env.URL
  },
  
}

module.exports = nextConfig
