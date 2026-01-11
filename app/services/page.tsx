import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"
import { Phone, Truck, Shield, Clock, Zap, Car, Wrench, CircleDollarSign, HeadphonesIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "خدماتنا - سطحة سكاكا | نقل سيارات معطلة وحوادث",
  description:
    "خدمات سطحة شاملة في سكاكا: نقل سيارات معطلة، نقل سيارات حوادث، خدمة طوارئ 24/7، أسعار تنافسية. اتصل: 0545825080",
}

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Truck,
      title: "نقل سيارات معطلة",
      description: "خدمة نقل السيارات المعطلة من موقع العطل إلى الورشة أو المنزل بكل أمان واحترافية",
      features: ["فحص أولي للسيارة", "تأمين السيارة بشكل صحيح", "نقل آمن ومريح", "إيصال إلى الموقع المطلوب"],
    },
    {
      icon: Shield,
      title: "نقل سيارات حوادث",
      description: "خدمة متخصصة في نقل السيارات المتضررة من الحوادث مع العناية الفائقة بالسيارة",
      features: [
        "معدات متخصصة للحوادث",
        "فريق مدرب على التعامل مع الحوادث",
        "تأمين شامل أثناء النقل",
        "تنسيق مع شركات التأمين",
      ],
    },
    {
      icon: Clock,
      title: "خدمة طوارئ 24/7",
      description: "متاحون على مدار الساعة طوال أيام الأسبوع للرد على استفساراتكم وحالات الطوارئ",
      features: ["استجابة فورية", "توفر على مدار الساعة", "خدمة في الأعياد والعطلات", "تغطية شاملة للمنطقة"],
    },
    {
      icon: Zap,
      title: "خدمة سريعة",
      description: "نصل إليك في أسرع وقت ممكن بفضل انتشارنا الواسع في جميع أنحاء المنطقة",
      features: ["وقت استجابة قصير", "سطحات متعددة في الخدمة", "تتبع موقع السطحة", "تحديث مستمر للحالة"],
    },
  ]

  const additionalServices = [
    {
      icon: Car,
      title: "نقل سيارات فاخرة",
      description: "خدمة خاصة للسيارات الفاخرة والكلاسيكية",
    },
    {
      icon: Wrench,
      title: "مساعدة على الطريق",
      description: "خدمات بسيطة على الطريق قبل النقل",
    },
    {
      icon: CircleDollarSign,
      title: "أسعار تنافسية",
      description: "أفضل الأسعار في المنطقة مع جودة عالية",
    },
    {
      icon: HeadphonesIcon,
      title: "خدمة عملاء متميزة",
      description: "فريق دعم محترف للرد على استفساراتكم",
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-extrabold text-foreground md:text-5xl">خدماتنا المتميزة</h1>
              <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
                نقدم مجموعة شاملة من خدمات نقل السيارات بأعلى معايير الجودة والاحترافية
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:gap-12">
              {mainServices.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg"
                >
                  <CardContent className="p-0">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                      {/* Content */}
                      <div className="space-y-6 p-8 md:p-12">
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>

                        <div>
                          <h2 className="text-2xl font-bold text-foreground md:text-3xl">{service.title}</h2>
                          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{service.description}</p>
                        </div>

                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm font-medium text-foreground">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {feature}
                            </li>
                          ))}
                        </ul>

                        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          <a href="tel:+966545825080" className="gap-2">
                            <Phone className="h-4 w-4" />
                            اطلب الخدمة الآن
                          </a>
                        </Button>
                      </div>

                      {/* Image */}
                      <div className="relative h-64 md:h-full md:min-h-[400px]">
                        <Image
                          src={`/images/d8-b3-d8-b7-d8-ad-d8-a9-20-d8-b4-d9-85-d8-a7-d9-84-20-d8-a7-d9-84-d8-b1-d9-8a-d8-a7-d8-b6-20-28.jpg
                            index + 2
                          }%29-${
                            [
                              "dWdun5ZdESfJBPO0tJmUMHevvXyZQv",
                              "AtoWEFkU8Krn7Z8lxtdGTFQSM6wY8V",
                              "Py3H0DEcCFhuUqRN05kKeTsTQV3TqL",
                              "wSQEHbuAjb0pOkPYZtwx6x80jBw5we",
                            ][index]
                          }.jpg`}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">خدمات إضافية</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">مزيد من الخدمات لتلبية جميع احتياجاتكم</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {additionalServices.map((service, index) => (
                <Card key={index} className="border-2 transition-all hover:border-primary hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden border-2 border-primary bg-gradient-to-br from-primary to-accent">
              <CardContent className="p-8 text-center text-primary-foreground md:p-12">
                <h2 className="text-balance text-3xl font-bold md:text-4xl">جاهزون لخدمتك الآن</h2>
                <p className="mt-4 text-pretty text-lg md:text-xl">اتصل بنا في أي وقت ونحن نصل إليك بأسرع وقت ممكن</p>

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
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
