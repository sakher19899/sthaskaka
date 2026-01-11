import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "مناطق الخدمة - سطحة سكاكا | نغطي جميع مناطق الجوف",
  description:
    "سطحة سكاكا تغطي: سكاكا، القريات، دومة الجندل، طبرجل، وجميع المناطق المجاورة في الجوف. خدمة 24/7. اتصل: 0545825080",
}

export default function AreasPage() {
  const mainAreas = [
    {
      name: "سكاكا",
      description: "المدينة الرئيسية ومقر خدمتنا. نغطي جميع أحياء ومناطق سكاكا بكفاءة عالية",
      coverage: "تغطية كاملة 24/7",
      responseTime: "15-20 دقيقة",
    },
    {
      name: "القريات",
      description: "خدمة سريعة وموثوقة في القريات وجميع أحيائها والطرق المؤدية إليها",
      coverage: "تغطية شاملة",
      responseTime: "30-40 دقيقة",
    },
    {
      name: "دومة الجندل",
      description: "نخدم مدينة دومة الجندل التاريخية وجميع المناطق المحيطة بها",
      coverage: "تغطية كاملة",
      responseTime: "25-35 دقيقة",
    },
    {
      name: "طبرجل",
      description: "خدمة متميزة في طبرجل وجميع الطرق السريعة المؤدية إليها ومنها",
      coverage: "تغطية كاملة",
      responseTime: "45-55 دقيقة",
    },
  ]

  const additionalAreas = [
    "الطوال",
    "العيساوية",
    "صوير",
    "قارا",
    "منوة",
    "كاف",
    "الحديثة",
    "زلوم",
    "الشويحطية",
    "النبك أبو قصر",
    "طريف",
    "الطرق السريعة بين المدن",
  ]

  const features = [
    "استجابة سريعة في جميع المناطق",
    "معرفة تامة بطرق المنطقة",
    "خدمة على مدار الساعة",
    "أسطول من السطحات الحديثة",
    "أسعار موحدة وعادلة",
    "فريق محترف ومدرب",
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-balance text-4xl font-extrabold text-foreground md:text-5xl">مناطق خدمتنا</h1>
              <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
                نغطي سكاكا وجميع مناطق الجوف بخدمة سريعة وموثوقة على مدار الساعة
              </p>
            </div>
          </div>
        </section>

        {/* Main Areas */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">المناطق الرئيسية</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">نقدم خدمة متميزة في المدن الرئيسية</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {mainAreas.map((area, index) => (
                <Card key={index} className="border-2 transition-all hover:border-primary hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-foreground">{area.name}</h3>

                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{area.description}</p>

                    <div className="space-y-2 border-t border-border pt-4">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-muted-foreground">{area.coverage}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium text-foreground">وقت الوصول: {area.responseTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Areas */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">مناطق إضافية</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">نخدم أيضاً العديد من المناطق الأخرى</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {additionalAreas.map((area, index) => (
                <Card key={index} className="border-2 transition-all hover:border-primary hover:shadow-md">
                  <CardContent className="flex items-center gap-3 p-4">
                    <MapPin className="h-5 w-5 shrink-0 text-primary" />
                    <span className="font-semibold text-foreground">{area}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
                  لماذا نغطي كل هذه المناطق؟
                </h2>
                <p className="mt-4 text-pretty text-lg text-muted-foreground">التزامنا بخدمة جميع سكان المنطقة</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success/10">
                        <CheckCircle className="h-4 w-4 text-success" />
                      </div>
                      <span className="text-base font-medium text-foreground">{feature}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">في أي منطقة؟ نحن نصل إليك</h2>
            <p className="mt-4 text-pretty text-lg md:text-xl">اتصل بنا الآن وسنكون عندك في أسرع وقت ممكن</p>

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
