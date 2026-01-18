import type React from "react"
import type { Metadata, Viewport } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#DC2626",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://tow-truck-sakaka.vercel.app"),
  title: {
    default: "سطحة سكاكا | خدمة نقل سيارات 24/7 | اتصل: 0545825080",
    template: "%s | سطحة سكاكا",
  },
  description:
    "خدمة سطحة احترافية في سكاكا والمناطق المجاورة. نقل سيارات معطلة وحوادث على مدار الساعة. خدمة سريعة وموثوقة. اتصل الآن: 0545825080",
  keywords: [
    "سطحة سكاكا",
    "نقل سيارات سكاكا",
    "سطحة الجوف",
    "خدمة سطحة 24 ساعة",
    "نقل سيارات معطلة",
    "سطحة طريق سكاكا",
    "رقم سطحة سكاكا",
    "سطحة القريات",
    "سطحة دومة الجندل",
    "نقل سيارات حوادث",
    "سطحة طبرجل",
    "نقل سيارات الجوف",
    "ونش سكاكا",
    "سطحة رخيصة سكاكا",
    "سطحة 24 ساعة الجوف",
  ],
  authors: [{ name: "سطحة سكاكا" }],
  creator: "سطحة سكاكا",
  publisher: "سطحة سكاكا",
  applicationName: "سطحة سكاكا",
  category: "خدمات نقل السيارات",

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://tow-truck-sakaka.vercel.app",
    siteName: "سطحة سكاكا",
    title: "سطحة سكاكا | خدمة نقل سيارات 24/7",
    description: "خدمة سطحة احترافية في سكاكا والمناطق المجاورة. نقل سيارات معطلة وحوادث. اتصل: 0545825080",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "سطحة سكاكا - خدمة نقل سيارات",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "سطحة سكاكا | خدمة نقل سيارات 24/7",
    description: "خدمة سطحة احترافية في سكاكا. اتصل: 0545825080",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tow-truck-sakaka.vercel.app",
    languages: {
      "ar-SA": "https://tow-truck-sakaka.vercel.app",
    },
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://tow-truck-sakaka.vercel.app",
              name: "سطحة سكاكا",
              alternateName: "سطحة سكاكا لنقل السيارات",
              description:
                "خدمة سطحة احترافية في سكاكا والمناطق المجاورة لنقل السيارات المعطلة والحوادث على مدار الساعة",
              image: [
                "https://tow-truck-sakaka.vercel.app/og-image.jpg",
                "/images/satha-1.jpg",
              ],
              url: "https://tow-truck-sakaka.vercel.app",
              telephone: "+966545825080",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "سكاكا",
                addressLocality: "سكاكا",
                addressRegion: "الجوف",
                addressCountry: "SA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.9697,
                longitude: 40.2064,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: ["https://wa.me/966545825080"],
              serviceArea: [
                {
                  "@type": "City",
                  name: "سكاكا",
                },
                {
                  "@type": "City",
                  name: "القريات",
                },
                {
                  "@type": "City",
                  name: "دومة الجندل",
                },
                {
                  "@type": "City",
                  name: "طبرجل",
                },
                {
                  "@type": "City",
                  name: "الطوال",
                },
                {
                  "@type": "City",
                  name: "العيساوية",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "خدمات نقل السيارات",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "نقل سيارات معطلة",
                      description: "خدمة نقل السيارات المعطلة على الطريق إلى الورشة أو الموقع المحدد",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "سطحة سكاكا",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "نقل سيارات حوادث",
                      description: "نقل السيارات المتضررة من الحوادث بعناية فائقة وتوثيق كامل",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "سطحة سكاكا",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "خدمة طوارئ 24 ساعة",
                      description: "خدمة نقل سيارات متاحة على مدار الساعة طوال أيام الأسبوع",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "سطحة سكاكا",
                      },
                      hoursAvailable: {
                        "@type": "OpeningHoursSpecification",
                        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        opens: "00:00",
                        closes: "23:59",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "نقل سيارات فارهة",
                      description: "خدمة متخصصة في نقل السيارات الفارهة والكلاسيكية بأقصى درجات الحماية",
                      provider: {
                        "@type": "LocalBusiness",
                        name: "سطحة سكاكا",
                      },
                    },
                  },
                ],
              },
              
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "الرئيسية",
                  item: "https://tow-truck-sakaka.vercel.app",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "الخدمات",
                  item: "https://tow-truck-sakaka.vercel.app/services",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "مناطق الخدمة",
                  item: "https://tow-truck-sakaka.vercel.app/areas",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "اتصل بنا",
                  item: "https://tow-truck-sakaka.vercel.app/contact",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://tow-truck-sakaka.vercel.app/#organization",
              name: "سطحة سكاكا",
              url: "https://tow-truck-sakaka.vercel.app",
              logo: {
                "@type": "ImageObject",
                url: "https://tow-truck-sakaka.vercel.app/og-image.jpg",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+966545825080",
                contactType: "Customer Service",
                areaServed: "SA",
                availableLanguage: ["Arabic"],
              },
            }),
          }}
        />
      </head>
      <body className={`${cairo.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
