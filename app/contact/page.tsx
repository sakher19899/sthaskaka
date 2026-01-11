import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"
import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "اتصل بنا - سطحة سكاكا | خدمة 24/7 | 0545825080",
  description:
    "تواصل مع سطحة سكاكا على مدار الساعة. اتصل: 0545825080 | واتساب متاح | خدمة سريعة في سكاكا والمناطق المجاورة",
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "اتصل بنا",
      description: "متاحون للرد على اتصالاتكم على مدار الساعة",
      value: "0545825080",
      action: "tel:+966545825080",
      buttonText: "اتصل الآن",
      color: "bg-success",
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      description: "تواصل معنا عبر واتساب للرد السريع",
      value: "0545825080",
      action: "https://wa.me/966545825080?text=مرحباً، أحتاج إلى خدمة سطحة",
      buttonText: "أرسل رسالة",
      color: "bg-[#25D366]",
    },
  ]

  const officeInfo = [
    {
      icon: MapPin,
      title: "الموقع",
      value: "سكاكا، منطقة الجوف\nالمملكة العربية السعودية",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "متاحون 24 ساعة\n7 أيام في الأسبوع",
    },
    {
      icon: Mail,
      title: "مناطق الخدمة",
      value: "سكاكا والمناطق المجاورة\nتغطية شاملة للجوف",
    },
  ]

  const quickActions = [
    {
      title: "طلب سطحة عاجل",
      description: "اتصل مباشرة للطوارئ",
      action: "tel:+966545825080",
      buttonText: "اتصال طارئ",
      variant: "default" as const,
    },
    {
      title: "استفسار عام",
      description: "للأسئلة والاستفسارات",
      action: "https://wa.me/966545825080",
      buttonText: "واتساب",
      variant: "outline" as const,
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
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-balance text-4xl font-extrabold text-foreground md:text-5xl">تواصل معنا</h1>
              <p className="mt-4 text-pretty text-lg text-muted-foreground md:text-xl">
                نحن هنا لخدمتك على مدار الساعة. اتصل بنا في أي وقت
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">طرق التواصل</h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">اختر الطريقة الأنسب لك للتواصل معنا</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {contactMethods.map((method, index) => (
                <Card key={index} className="border-2 transition-all hover:border-primary hover:shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl ${method.color}`}
                    >
                      <method.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="mb-2 text-2xl font-bold text-foreground">{method.title}</h3>

                    <p className="mb-4 text-sm text-muted-foreground">{method.description}</p>

                    <div className="mb-6 text-3xl font-bold text-foreground">{method.value}</div>

                    <Button asChild size="lg" className={`w-full ${method.color} text-white hover:opacity-90`}>
                      <a href={method.action} className="gap-2">
                        <method.icon className="h-5 w-5" />
                        {method.buttonText}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Office Info */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">معلومات الخدمة</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {officeInfo.map((info, index) => (
                <Card key={index} className="border-2">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-foreground">{info.title}</h3>

                    <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{info.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">إجراءات سريعة</h2>
                <p className="mt-4 text-pretty text-lg text-muted-foreground">اختر نوع الخدمة التي تحتاجها</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {quickActions.map((action, index) => (
                  <Card key={index} className="border-2 transition-all hover:border-primary hover:shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="mb-2 text-xl font-bold text-foreground">{action.title}</h3>
                      <p className="mb-6 text-sm text-muted-foreground">{action.description}</p>
                      <Button asChild size="lg" variant={action.variant} className="w-full">
                        <a href={action.action}>{action.buttonText}</a>
                      </Button>
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
            <h2 className="text-balance text-3xl font-bold md:text-4xl">جاهزون للرد على اتصالك</h2>
            <p className="mt-4 text-pretty text-lg md:text-xl">فريقنا متاح الآن للرد على جميع استفساراتك وطلباتك</p>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-14 border-2 bg-white px-12 text-base font-bold text-primary hover:bg-white/90"
              >
                <a href="tel:+966545825080" className="gap-2">
                  <Phone className="h-5 w-5" />
                  اتصل الآن: 0545825080
                </a>
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
