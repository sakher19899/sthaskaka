import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "سطحة سكاكا - خدمة نقل سيارات 24/7",
    short_name: "سطحة سكاكا",
    description: "خدمة سطحة احترافية في سكاكا والمناطق المجاورة. نقل سيارات معطلة وحوادث على مدار الساعة",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#DC2626",
    orientation: "portrait",
    dir: "rtl",
    lang: "ar",
    categories: ["business", "transportation"],
    icons: [
      {
        src: "/icon?<generated>",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon?<generated>",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
