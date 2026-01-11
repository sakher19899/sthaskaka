import Link from "next/link"
import { Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary-foreground">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                </svg>
              </div>
              <span className="text-lg font-bold">سطحة سكاكا</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              خدمة نقل السيارات الأكثر احترافية في سكاكا والمناطق المجاورة. نعمل على مدار الساعة لخدمتكم.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/areas" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  مناطق الخدمة
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">خدماتنا</h3>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">نقل سيارات معطلة</li>
              <li className="text-sm text-muted-foreground">نقل سيارات حوادث</li>
              <li className="text-sm text-muted-foreground">خدمة طوارئ 24/7</li>
              <li className="text-sm text-muted-foreground">تغطية واسعة</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">معلومات التواصل</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href="tel:+966545825080"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  0545825080
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  سكاكا، منطقة الجوف
                  <br />
                  المملكة العربية السعودية
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">متاحون 24 ساعة / 7 أيام</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">© {currentYear} سطحة سكاكا. جميع الحقوق محفوظة.</p>
          <p className="mt-2 text-xs text-muted-foreground">
            تصميم وتطوير{" "}
            <a
              href="https://www.sakhrs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary transition-colors hover:text-primary/80"
            >
              sakhr
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
