import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // permite todos los dominios HTTPS (no recomendado para producción)
      },
    ],
  },

};

export default nextConfig;
