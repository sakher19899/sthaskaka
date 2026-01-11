import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Phone, Clock, Shield, MapPin, Truck, Zap, CheckCircle, Star } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Truck,
      title: "نقل سيارات معطلة",
      description: "نقل احترافي وآمن للسيارات المعطلة إلى أي موقع تحدده",
    },
    {
      icon: Shield,
      title: "نقل سيارات حوادث",
      description: "خدمة متخصصة في نقل السيارات المتضررة من الحوادث بعناية فائقة",
    },
    {
      icon: Clock,
      title: "خدمة 24/7",
      description: "متاحون على مدار الساعة طوال أيام الأسبوع لخدمتكم",
    },
    {
      icon: Zap,
      title: "استجابة سريعة",
      description: "نصل إليك في أسرع وقت ممكن أينما كنت",
    },
  ]

  const areas = ["سكاكا", "القريات", "دومة الجندل", "طبرجل", "الطوال", "العيساوية"]

  const features = [
    "سطحات حديثة ومجهزة",
    "فريق محترف ومدرب",
    "أسعار تنافسية",
    "تأمين شامل على السيارات",
    "خدمة عملاء متميزة",
    "تغطية واسعة للمنطقة",
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Content */}
              <div className="space-y-6 text-center lg:text-right">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-2">
                  <span className="text-sm font-semibold text-primary">خدمة موثوقة منذ سنوات</span>
                </div>

                <h1 className="text-balance text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
                  خدمة سطحة احترافية في <span className="text-primary">سكاكا</span>
                </h1>

                <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                  نقل سيارات معطلة وحوادث على مدار الساعة. خدمة سريعة، آمنة، وموثوقة في سكاكا وجميع المناطق المجاورة.
                </p>

                <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 w-full bg-success px-8 text-base font-bold text-success-foreground hover:bg-success/90 sm:w-auto"
                  >
                    <a href="tel:+966545825080" className="gap-2">
                      <Phone className="h-5 w-5" />
                      اتصل الآن: 0545825080
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 w-full border-2 px-8 text-base font-bold sm:w-auto bg-transparent"
                  >
                    <Link href="/services">تعرف على خدماتنا</Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6 pt-4 lg:justify-start">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">خدمة ممتازة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <span className="text-sm font-medium text-muted-foreground">+1000 عميل راضٍ</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/d8-b3-d8-b7-d8-ad-d8-a9-20-d8-b4-d9-85-d8-a7-d9-84-20-d8-a7-d9-84-d8-b1-d9-8a-d8-a7-d8-b6-20-2810-29.jpg"
                    alt="سطحة سكاكا - خدمة نقل سيارات احترافية"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 rounded-xl bg-card p-4 shadow-lg md:p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-success/10">
                      <Clock className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">متاحون الآن</p>
                      <p className="text-xs text-muted-foreground">24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">خدماتنا المتميزة</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">نقدم مجموعة شاملة من خدمات نقل السيارات</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Card key={index} className="border-2 transition-all hover:border-primary hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">مناطق الخدمة</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">نغطي سكاكا وجميع المناطق المجاورة</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {areas.map((area, index) => (
                <Card key={index} className="border-2 transition-all hover:border-primary hover:shadow-md">
                  <CardContent className="flex items-center gap-3 p-4">
                    <MapPin className="h-5 w-5 shrink-0 text-primary" />
                    <span className="font-semibold text-foreground">{area}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline" className="border-2 bg-transparent">
                <Link href="/areas">عرض جميع المناطق</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Images Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/d8-b3-d8-b7-d8-ad-d8-a9-20-d8-b4-d9-85-d8-a7-d9-84-20-d8-a7-d9-84-d8-b1-d9-8a-d8-a7-d8-b6-20-289-29.jpg"
                    alt="سطحة احترافية"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/d8-b3-d8-b7-d8-ad-d8-a9-20-d8-b4-d9-85-d8-a7-d9-84-20-d8-a7-d9-84-d8-b1-d9-8a-d8-a7-d8-b6-20-288-29.jpg"
                    alt="نقل سيارات آمن"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/d8-b3-d8-b7-d8-ad-d8-a9-20-d8-b4-d9-85-d8-a7-d9-84-20-d8-a7-d9-84-d8-b1-d9-8a-d8-a7-d8-b6-20-285-29.jpg"
                    alt="خدمة سريعة"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-xl">
                  <Image
                    src="/images/d8-b3-d8-b7-d8-ad-d8-a9-20-d8-b4-d9-85-d8-a7-d9-84-20-d8-a7-d9-84-d8-b1-d9-8a-d8-a7-d8-b6-20-283-29.jpg"
                    alt="فريق محترف"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">لماذا تختار سطحة سكاكا؟</h2>
                <p className="text-pretty text-lg text-muted-foreground">
                  نحن الخيار الأمثل لنقل السيارات في المنطقة بفضل خبرتنا واحترافيتنا
                </p>

                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10">
                        <CheckCircle className="h-4 w-4 text-success" />
                      </div>
                      <span className="text-base font-medium text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="tel:+966545825080" className="gap-2">
                    <Phone className="h-5 w-5" />
                    اطلب الخدمة الآن
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                  خدمات نقل السيارات في سكاكا والجوف
                </h2>
                <p className="mt-4 text-pretty text-lg text-muted-foreground">
                  دليلك الشامل لخدمات السطحة والنقل في المنطقة
                </p>
              </div>

              <div className="space-y-8 text-pretty leading-relaxed">
                <div className="rounded-xl bg-muted/30 p-6 md:p-8">
                  <h3 className="mb-4 text-2xl font-bold text-foreground">سطحة سكاكا - الخدمة الأمثل لنقل السيارات</h3>
                  <p className="mb-4 text-base text-muted-foreground">
                    نحن نقدم أفضل <strong className="text-foreground">خدمة سطحة في سكاكا</strong> والمناطق المجاورة، حيث
                    نتخصص في <strong className="text-foreground">نقل السيارات المعطلة</strong> و
                    <strong className="text-foreground">سيارات الحوادث</strong> بأعلى معايير السلامة والاحترافية. فريقنا
                    المدرب متاح على مدار الساعة لتلبية احتياجاتكم الطارئة.
                  </p>
                  <p className="text-base text-muted-foreground">
                    سواء كنت بحاجة إلى <strong className="text-foreground">سطحة في سكاكا</strong> أو{" "}
                    <strong className="text-foreground">نقل سيارة من سكاكا إلى القريات</strong>، نحن هنا لخدمتك بأفضل
                    الأسعار وأسرع الأوقات.
                  </p>
                </div>

                <div className="rounded-xl bg-card p-6 shadow-sm md:p-8">
                  <h3 className="mb-4 text-2xl font-bold text-foreground">مناطق تغطية خدماتنا</h3>
                  <p className="mb-4 text-base text-muted-foreground">
                    نغطي جميع مناطق <strong className="text-foreground">منطقة الجوف</strong> بما في ذلك:
                  </p>
                  <ul className="mb-4 grid gap-3 sm:grid-cols-2">
                    <li className="flex items-center gap-2 text-base text-muted-foreground">
                      <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                      <span>
                        <strong className="text-foreground">سطحة سكاكا</strong> - خدمة 24 ساعة
                      </span>
                    </li>
                    <li className="flex items-center gap-2 text-base text-muted-foreground">
                      <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                      <span>
                        <strong className="text-foreground">سطحة القريات</strong> - استجابة فورية
                      </span>
                    </li>
                    <li className="flex items-center gap-2 text-base text-muted-foreground">
                      <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                      <span>
                        <strong className="text-foreground">سطحة دومة الجندل</strong> - خدمة موثوقة
                      </span>
                    </li>
                    <li className="flex items-center gap-2 text-base text-muted-foreground">
                      <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                      <span>
                        <strong className="text-foreground">سطحة طبرجل</strong> - أسعار مناسبة
                      </span>
                    </li>
                    <li className="flex items-center gap-2 text-base text-muted-foreground">
                      <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                      <span>
                        <strong className="text-foreground">نقل سيارات الطوال</strong>
                      </span>
                    </li>
                    <li className="flex items-center gap-2 text-base text-muted-foreground">
                      <CheckCircle className="h-5 w-5 shrink-0 text-success" />
                      <span>
                        <strong className="text-foreground">نقل سيارات العيساوية</strong>
                      </span>
                    </li>
                  </ul>
                  <p className="text-base text-muted-foreground">
                    كما نقدم خدمات <strong className="text-foreground">نقل السيارات بين المدن</strong> في جميع أنحاء
                    المنطقة الشمالية.
                  </p>
                </div>

                <div className="rounded-xl bg-muted/30 p-6 md:p-8">
                  <h3 className="mb-4 text-2xl font-bold text-foreground">خدمات النقل المتخصصة</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-foreground">نقل السيارات المعطلة</h4>
                      <p className="text-base text-muted-foreground">
                        هل تعطلت سيارتك على الطريق؟ نحن نوفر{" "}
                        <strong className="text-foreground">خدمة سطحة طريق سكاكا</strong> السريعة لنقل سيارتك المعطلة
                        إلى أقرب ورشة أو إلى الموقع الذي تحدده. فريقنا مجهز بأحدث معدات النقل الآمن.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-foreground">نقل سيارات الحوادث</h4>
                      <p className="text-base text-muted-foreground">
                        نتعامل مع <strong className="text-foreground">نقل سيارات الحوادث</strong> بعناية خاصة وبخبرة
                        واسعة، حيث نضمن الحفاظ على سلامة السيارة أثناء النقل وتوثيق حالتها. نتعاون مع شركات التأمين
                        والمرور لتسهيل الإجراءات.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-foreground">نقل السيارات الفارهة</h4>
                      <p className="text-base text-muted-foreground">
                        نوفر خدمة خاصة <strong className="text-foreground">لنقل السيارات الفارهة والكلاسيكية</strong>{" "}
                        باستخدام سطحات مخصصة مع ضمان أقصى درجات الحماية والأمان لسيارتك الثمينة.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-card p-6 shadow-sm md:p-8">
                  <h3 className="mb-4 text-2xl font-bold text-foreground">لماذا نحن الخيار الأفضل؟</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex gap-3">
                      <Clock className="h-6 w-6 shrink-0 text-primary" />
                      <div>
                        <h4 className="mb-1 font-semibold text-foreground">سرعة الاستجابة</h4>
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">رقم سطحة سكاكا</strong> 0545825080 متاح دائماً، نصل إليك في
                          أقل من 30 دقيقة داخل المدينة
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Shield className="h-6 w-6 shrink-0 text-primary" />
                      <div>
                        <h4 className="mb-1 font-semibold text-foreground">تأمين شامل</h4>
                        <p className="text-sm text-muted-foreground">
                          جميع خدمات النقل لدينا مؤمنة بالكامل لضمان راحة بالك
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Truck className="h-6 w-6 shrink-0 text-primary" />
                      <div>
                        <h4 className="mb-1 font-semibold text-foreground">معدات حديثة</h4>
                        <p className="text-sm text-muted-foreground">
                          أسطول من <strong className="text-foreground">السطحات الحديثة</strong> المجهزة بأحدث التقنيات
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Star className="h-6 w-6 shrink-0 text-primary" />
                      <div>
                        <h4 className="mb-1 font-semibold text-foreground">فريق محترف</h4>
                        <p className="text-sm text-muted-foreground">
                          سائقون مدربون وذوو خبرة طويلة في نقل جميع أنواع السيارات
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 p-6 md:p-8">
                  <h3 className="mb-4 text-2xl font-bold text-foreground">احصل على خدمة سطحة سكاكا الآن</h3>
                  <p className="mb-6 text-base text-muted-foreground">
                    لا تتردد في الاتصال بنا على <strong className="text-foreground">رقم 0545825080</strong> للحصول على{" "}
                    <strong className="text-foreground">أفضل خدمة سطحة في سكاكا والمنطقة الشمالية</strong>. نحن نعمل على
                    مدار الساعة، 7 أيام في الأسبوع، ونصل إليك أينما كنت في سكاكا، القريات، دومة الجندل، طبرجل، وجميع
                    المناطق المجاورة.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg" className="bg-success text-success-foreground hover:bg-success/90">
                      <a href="tel:+966545825080" className="gap-2">
                        <Phone className="h-5 w-5" />
                        اتصل الآن: 0545825080
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-2 bg-transparent">
                      <Link href="/services">عرض جميع الخدمات</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">هل تحتاج إلى سطحة الآن؟</h2>
            <p className="mt-4 text-pretty text-lg text-primary-foreground/90 md:text-xl">
              اتصل بنا على مدار الساعة ونحن نصل إليك أينما كنت
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-14 w-full border-2 bg-white px-8 text-base font-bold text-primary hover:bg-white/90 sm:w-auto"
              >
                <a href="tel:+966545825080" className="gap-2">
                  <Phone className="h-5 w-5" />
                  0545825080
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 w-full border-2 border-white bg-transparent px-8 text-base font-bold text-white hover:bg-white/10 sm:w-auto"
              >
                <Link href="/contact">تواصل معنا</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
