import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  serverExternalPackages: ["@napi-rs/canvas"],
  redirects: async () => [
    {
      source: "/materials/setup",
      destination:
        "https://colab.research.google.com/drive/1Q4AWi5-Z8K9ww0l-P6e_sobUss0ARyMU?usp=sharing",
      permanent: true,
    },
  ],
};

export default nextConfig;
