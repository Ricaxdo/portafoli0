/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? "/portafoli0" : "",
  assetPrefix: isProd ? "/portafoli0/" : "",
};
export default nextConfig;
