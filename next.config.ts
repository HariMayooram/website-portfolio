// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export',
//   basePath: process.env.NODE_ENV === "production" ? "/website-portfolio" : "",
//   assetPrefix: process.env.NODE_ENV === "production" ? "/website-portfolio" : "",
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/website-portfolio',
  assetPrefix: '/website-portfolio',
};

export default nextConfig;
