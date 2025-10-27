// next.config.mjs
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // <- genera /out para GitHub Pages
  images: { unoptimized: true }, // <- obligatorio en export
  trailingSlash: true, // <- crea /ruta/index.html (evita 404 en GH Pages)
  basePath: isProd ? "/portafoli0" : "", // <- NOMBRE EXACTO DEL REPO
  assetPrefix: isProd ? "/portafoli0/" : "",

  // Opcional: si estás en pleno desarrollo con tipos
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
