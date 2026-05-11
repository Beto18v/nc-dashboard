import Image from "next/image";
import type { Metadata } from "next";
import { FaMapMarkerAlt, FaStar, FaWhatsapp } from "react-icons/fa";

const business = {
  name: "PET SHOP",
  subtitle: "Peluqueria canina y productos para mascotas",
  description:
    "En PET SHOP te ayudamos con peluqueria canina, alimentos y productos basicos para que resuelvas lo de tu mascota en un solo lugar.",
  whatsappNumber: "314 480 1167",
  whatsappUrl:
    "https://wa.me/573144801167?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios%20y%20productos",
  cityLabel: "Bogota, Colombia",
  address: "Cl. 65 Sur #81c23, Bogota",
  mapsReferenceUrl:
    "https://www.google.com/maps/place/PET+SHOP/@4.6113523,-74.1873041,19z/data=!4m11!1m3!2m2!1spets!6e6!3m6!1s0x8e3f9fdd420d8f25:0xffd7c980e664aba2!8m2!3d4.6112796!4d-74.1874076!15sCgRwZXRzWgYiBHBldHOSAQlwZXRfc3RvcmXgAQA!16s%2Fg%2F11nmlz3p_j?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=4.6112796,-74.1874076&z=18&output=embed",
} as const;

const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Galeria", href: "#galeria" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Contacto", href: "#contacto" },
] as const;

const heroBadges = [
  "Atencion por WhatsApp",
  "Peluqueria canina",
  "Productos para el dia a dia",
] as const;

const services = [
  {
    emoji: "PC",
    title: "Peluqueria canina",
    description:
      "Nos encargamos de que tu perrito salga limpio, arreglado y bien cuidado, con un trato cercano y sin afanes.",
  },
  {
    emoji: "AL",
    title: "Alimentos para perros y gatos",
    description:
      "Manejamos alimentos para perros y gatos para que resuelvas la compra de siempre rapido y sin dar tantas vueltas.",
  },
  {
    emoji: "AC",
    title: "Accesorios para mascotas",
    description:
      "Tambien tenemos accesorios utiles para complementar lo que tu mascota necesita en casa o para salir.",
  },
  {
    emoji: "CU",
    title: "Productos de cuidado",
    description:
      "Aqui encuentras productos basicos de higiene y cuidado para tener a tu mascota bien atendida.",
  },
  {
    emoji: "WA",
    title: "Atencion por WhatsApp",
    description:
      "Si quieres preguntar por un servicio o confirmar un producto, nos escribes y te respondemos lo mas rapido posible.",
  },
] as const;

const galleryImages = [
  {
    src: "/images/pet-shop/fachada.jpg",
    alt: "Fachada principal de PET SHOP",
    title: "Fachada principal",
    description:
      "Asi se ve nuestro punto, un lugar cercano para traer a tu mascota o pasar por lo que necesitas.",
  },
  {
    src: "/images/pet-shop/fachada2.jpeg",
    alt: "Otra vista de la fachada de PET SHOP",
    title: "Negocio visible y local",
    description:
      "Queremos que nos ubiques facil y sientas confianza antes de venir.",
  },
  {
    src: "/images/pet-shop/alimentos.jpeg",
    alt: "Productos de alimento para mascotas en PET SHOP",
    title: "Productos para compra diaria",
    description:
      "Mostramos parte de lo que manejamos para que veas que aqui puedes resolver la compra del dia a dia.",
  },
  {
    src: "/images/pet-shop/alimentos2.jpeg",
    alt: "Mas productos para mascotas en PET SHOP",
    title: "Apoyo para pedidos por WhatsApp",
    description:
      "Si prefieres escribir primero, estas fotos tambien te ayudan a preguntar por lo que necesitas.",
  },
] as const;

const benefits = [
  {
    number: "01",
    title: "Atencion cercana",
    description:
      "Hablamos contigo de forma simple, te orientamos y buscamos que te vayas tranquilo con lo que necesitas.",
  },
  {
    number: "02",
    title: "Productos para el dia a dia",
    description:
      "Nos enfocamos en lo que mas se necesita: comida, cuidado, accesorios y peluqueria para resolver facil.",
  },
  {
    number: "03",
    title: "Contacto rapido por WhatsApp",
    description:
      "Dejamos WhatsApp a un clic para que nos escribas, preguntes y coordines todo sin complicarte.",
  },
] as const;

const reviews = [
  {
    name: "Diana Castillo",
    text: "Llevo a mi perrito a peluqueria y siempre queda muy bien. Son muy cuidadosos y el precio es justo. Ademas tienen todo lo basico para mascotas.",
    source: "Google Maps",
    rating: 5,
  },
  {
    name: "Jhon Perez",
    text: "Buen lugar para comprar concentrado y accesorios. Me gusta porque es cerca y atienden rapido, tambien responden por WhatsApp sin problema.",
    source: "Google Maps",
    rating: 4,
  },
  {
    name: "Sandra Mendez",
    text: "Excelente atencion, muy amables. Tienen variedad de productos y la peluqueria canina es muy buena, mi perrita quedo hermosa.",
    source: "Google Maps",
    rating: 5,
  },
  {
    name: "María Fernanda López",
    text: "Excelente atención, siempre encuentro lo que necesito para mi mascota. Los precios son buenos y atienden muy rápido.",
    source: "Google Maps",
    rating: 5,
  },
  {
    name: "Andrés Cárdenas",
    text: "Buen servicio de peluquería, mi perro salió limpio y tranquilo. Además tienen variedad de productos básicos.",
    source: "Google Maps",
    rating: 4,
  },
  {
    name: "Natalia Vargas",
    text: "Me gusta porque es un lugar confiable y cercano. He comprado comida y accesorios y todo bien, también responden por WhatsApp.",
    source: "Google Maps",
    rating: 5,
  },
] as const;

const reviewCarouselItems = [...reviews, ...reviews];

const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#0F766E] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0F766E]/20 transition hover:-translate-y-0.5 hover:bg-[#115E59]";

const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[#1D4ED8]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#1F2937] shadow-sm transition hover:-translate-y-0.5 hover:border-[#1D4ED8]/30";

export const metadata: Metadata = {
  title: "PET SHOP | Peluqueria canina y productos para mascotas",
  description:
    "PET SHOP en Bogota: peluqueria canina, alimentos, accesorios y atencion por WhatsApp para mascotas.",
  keywords: [
    "pet shop",
    "peluqueria canina",
    "productos para mascotas",
    "alimentos para mascotas",
    "accesorios para mascotas",
    "whatsapp pet shop",
  ],
  openGraph: {
    title: "PET SHOP | Peluqueria canina y productos para mascotas",
    description:
      "Cuidado, alimentos y accesorios para tu mascota con atencion cercana por WhatsApp.",
    type: "website",
    locale: "es_CO",
    siteName: "PET SHOP",
  },
  twitter: {
    card: "summary_large_image",
    title: "PET SHOP | Peluqueria canina y productos para mascotas",
    description:
      "Peluqueria canina, productos para mascotas y contacto rapido por WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PetShopPage() {
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <main className="min-h-screen bg-[#F4F9FC] text-[#1F2937]">
        {/* Header */}
        <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[28px] border border-[#DBEAFE] bg-white/88 px-4 py-4 shadow-lg shadow-sky-100/70 backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <a href="#inicio" className="inline-flex items-center gap-3 rounded-[26px] border border-[#BFDBFE] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(224,242,254,0.86),rgba(204,251,241,0.74))] px-4 py-3 shadow-md shadow-sky-100/80">
                <span className="flex h-11 w-11 items-center justify-center rounded-[18px] bg-[linear-gradient(135deg,#1D4ED8,#0F766E)] text-sm font-black tracking-[0.14em] text-white">
                  PS
                </span>
                <div className="leading-none">
                  <p className="text-[0.9rem] font-bold uppercase tracking-[0.48em] text-[#0F766E]">
                    PET
                  </p>
                  <p className="mt-1 text-[1.35rem] font-black uppercase tracking-[0.3em] text-[#0F172A] sm:text-[1.5rem]">
                    SHOP
                  </p>
                </div>
              </a>

              <nav className="hidden items-center gap-5 lg:flex">
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-[#6B7280] transition hover:text-[#1F2937]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={`${primaryButtonClass} px-5 py-3`}
              >
                <FaWhatsapp className="text-base" />
                WhatsApp
              </a>
            </div>
          </div>
        </header>

      {/* Hero */}
      <section id="inicio" className="relative scroll-mt-32 overflow-hidden sm:scroll-mt-36">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.16),rgba(20,184,166,0.12),rgba(244,249,252,0.94))]" />
        <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-[#38BDF8]/18 blur-3xl" />
        <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-[#14B8A6]/16 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24 lg:pt-36">
          <div className="overflow-hidden rounded-[40px] border border-[#BFDBFE] bg-white shadow-2xl shadow-sky-100/70">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative border-b border-[#BFDBFE] bg-[linear-gradient(180deg,#F8FCFF_0%,#E0F2FE_100%)] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <div className="inline-flex rounded-full bg-[#0F766E] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm">
                  Estamos cerca de ti y de tu mascota
                </div>

                <div className="mt-8 rounded-[32px] border border-[#BFDBFE] bg-white px-6 py-6 shadow-lg shadow-sky-100/70">
                  <h1 className="mt-4 text-5xl font-black uppercase leading-none text-[#1F2937] sm:text-6xl lg:text-7xl">
                    {business.name}
                  </h1>
                  <p className="mt-4 max-w-xl text-xl font-bold leading-8 text-[#0F766E] sm:text-2xl">
                    {business.subtitle}
                  </p>
                </div>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#6B7280] sm:text-lg">
                  {business.description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={business.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={primaryButtonClass}
                  >
                    <FaWhatsapp className="text-base" />
                    Escribenos por WhatsApp
                  </a>
                  <a href="#servicios" className={secondaryButtonClass}>
                    Ver servicios
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {heroBadges.map((badge) => (
                    <div
                      key={badge}
                      className="rounded-[22px] border border-[#BFDBFE] bg-white px-4 py-4 shadow-sm"
                    >
                      <p className="text-sm font-semibold leading-6 text-[#1F2937]">
                        {badge}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-[26px] border border-[#BFDBFE] bg-[#F7FCFF] p-5 shadow-sm">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]">
                        WhatsApp
                      </p>
                      <p className="mt-2 text-lg font-black text-[#1F2937]">
                        {business.whatsappNumber}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]">
                        Direccion
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-[#1F2937]">
                        {business.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#ECF8FF] p-5 sm:p-6 lg:p-8">
                <div className="rounded-[30px] border border-[#BFDBFE] bg-white p-3 shadow-lg shadow-sky-100/70">
                  <div className="relative h-[280px] overflow-hidden rounded-[24px] sm:h-[340px]">
                    <Image
                      src="/images/pet-shop/fachada.jpg"
                      alt="Fachada de PET SHOP"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                    />
                  </div>
                  <div className="grid gap-3 p-3 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[22px] bg-[#F7FCFF] p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]">
                        Servicio cercano
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                        Aqui mezclamos peluqueria canina, alimentos y una
                        atencion sencilla para que resuelvas rapido.
                      </p>
                    </div>
                    <div className="rounded-[22px] bg-[#1E3A8A] p-4 text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
                        Ubicacion
                      </p>
                      <p className="mt-3 text-sm font-semibold leading-7 text-white">
                        Cl. 65 Sur #81c23
                        <br />
                        Bogota
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-[24px] border border-[#BFDBFE] bg-white shadow-md shadow-sky-100/60">
                    <div className="relative h-44">
                      <Image
                        src="/images/pet-shop/fachada2.jpeg"
                        alt="Otra vista de PET SHOP"
                        fill
                        sizes="(max-width: 1024px) 100vw, 260px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-[24px] border border-[#BFDBFE] bg-white shadow-md shadow-sky-100/60">
                    <div className="relative h-44">
                      <Image
                        src="/images/pet-shop/alimentos.jpeg"
                        alt="Productos de PET SHOP"
                        fill
                        sizes="(max-width: 1024px) 100vw, 260px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre nosotros */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <span className="inline-flex rounded-full bg-[#CCFBF1] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0F766E]">
              Sobre nosotros
            </span>
            <h2 className="mt-5 max-w-2xl text-3xl font-black text-[#1F2937] sm:text-4xl">
              Aqui encuentras un pet shop cercano, practico y facil de contactar
            </h2>
          </div>

          <div className="rounded-[28px] border border-[#BFDBFE] bg-white p-6 shadow-lg shadow-sky-100/70">
            <p className="text-base leading-8 text-[#6B7280]">
              En PET SHOP trabajamos para que encuentres peluqueria canina,
              alimento para mascotas, accesorios y productos basicos en un mismo
              lugar, con un trato cercano y sin enredos.
            </p>
            <p className="mt-4 text-base leading-8 text-[#6B7280]">
              Queremos que apenas entres entiendas rapido lo que hacemos, veas
              que estamos aqui fisicamente y tengas a la mano nuestro WhatsApp
              para preguntar o pedir informacion.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section
        id="servicios"
        className="scroll-mt-32 border-y border-[#BFDBFE] bg-white/70 py-16 sm:scroll-mt-36 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#E0F2FE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1D4ED8]">
              Servicios y categorias
            </span>
            <h2 className="mt-5 text-3xl font-black text-[#1F2937] sm:text-4xl">
              Lo que tenemos para ayudarte con tu mascota
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              Reunimos lo mas importante para que veas rapido si aqui esta lo
              que necesitas y nos escribas de una.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[28px] border border-[#BFDBFE] bg-white p-6 shadow-lg shadow-sky-100/70 transition hover:-translate-y-1"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F9FF] text-sm font-black tracking-[0.18em] text-[#1E3A8A] shadow-sm">
                  {service.emoji}
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#1F2937]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="scroll-mt-32 py-16 sm:scroll-mt-36 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#CCFBF1] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0F766E]">
              Galeria del negocio
            </span>
            <h2 className="mt-5 text-3xl font-black text-[#1F2937] sm:text-4xl">
              Asi se ve nuestro espacio y parte de lo que manejamos
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              Queremos que nos veas como somos: un punto cercano, real y con
              productos para resolver lo que tu mascota necesita.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:items-stretch">
            <article className="flex h-full flex-col overflow-hidden rounded-[32px] border border-[#BFDBFE] bg-white shadow-lg shadow-sky-100/70 lg:col-span-7">
              <div className="relative h-80 sm:h-96 lg:min-h-[430px] lg:flex-1">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-lg font-bold text-[#1F2937]">
                  {galleryImages[0].title}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                  {galleryImages[0].description}
                </p>
              </div>
            </article>

            <div className="grid gap-5 lg:col-span-5">
              {galleryImages.slice(1).map((image) => (
                <article
                  key={image.src}
                  className="overflow-hidden rounded-[28px] border border-[#BFDBFE] bg-white shadow-lg shadow-sky-100/70"
                >
                  <div className="relative h-56">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-base font-bold text-[#1F2937]">
                      {image.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                      {image.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="scroll-mt-32 py-16 sm:scroll-mt-36 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[36px] border border-[#BFDBFE] bg-[linear-gradient(135deg,#F7FCFF_0%,#FFFFFF_45%,#E0F2FE_100%)] p-6 shadow-xl shadow-sky-100/70 sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1E3A8A] shadow-sm">
                Beneficios visibles
              </span>
              <h2 className="mt-5 text-3xl font-black text-[#1F2937] sm:text-4xl">
                Tres razones por las que muchas personas nos escriben primero
              </h2>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="rounded-[28px] border border-[#BFDBFE] bg-white p-6 shadow-md shadow-sky-100/60"
                >
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0F766E]">
                    {benefit.number}
                  </p>
                  <h3 className="mt-4 text-xl font-bold text-[#1F2937]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resenas */}
      <section className="border-y border-[#BFDBFE] bg-white/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#E0F2FE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#1D4ED8]">
              Reseñas
            </span>
            <h2 className="mt-5 text-3xl font-black text-[#1F2937] sm:text-4xl">
              Lo que dicen quienes ya han venido
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              Estos comentarios hablan de algo muy puntual: buena atencion,
              peluqueria bien hecha y productos faciles de conseguir.
            </p>
          </div>

          <div className="mt-10">
            <div className="-mx-3 overflow-hidden">
              <div id="pet-shop-reviews-track" className="flex">
                {reviewCarouselItems.map((review, index) => (
                  <article
                    key={`${review.name}-${index}`}
                    className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3"
                  >
                    <div className="h-full rounded-[28px] border border-[#BFDBFE] bg-white p-6 shadow-lg shadow-sky-100/70">
                      <div className="flex items-center gap-1 text-[#F59E0B]">
                        {Array.from({ length: review.rating }).map((_, starIndex) => (
                          <FaStar
                            key={`${review.name}-${starIndex}`}
                            className="text-sm"
                          />
                        ))}
                      </div>
                      <p className="mt-5 text-lg font-bold text-[#1F2937]">
                        {review.name}
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#1E3A8A]">
                        {review.source}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[#6B7280]">
                        {review.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto / ubicacion */}
      <section id="contacto" className="scroll-mt-32 py-16 sm:scroll-mt-36 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div>
            <span className="inline-flex rounded-full bg-[#CCFBF1] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0F766E]">
              Contacto y ubicacion
            </span>
            <h2 className="mt-5 text-3xl font-black text-[#1F2937] sm:text-4xl">
              Estamos listos para atenderte por WhatsApp o en nuestro punto
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6B7280]">
              Aqui te dejamos nuestro WhatsApp, la direccion y el mapa para que
              nos escribas, preguntes o vengas directo al punto.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[28px] border border-[#BFDBFE] bg-white p-6 shadow-lg shadow-sky-100/70">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
                  WhatsApp
                </p>
                <p className="mt-3 text-2xl font-black text-[#1F2937]">
                  {business.whatsappNumber}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                  Escribenos para preguntar por peluqueria, concentrado,
                  accesorios o cualquier producto que necesites.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#BFDBFE] bg-white p-6 shadow-lg shadow-sky-100/70">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
                  Direccion
                </p>
                <p className="mt-3 text-lg font-semibold text-[#1F2937]">
                  {business.address}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                  Aqui nos encuentras si prefieres venir directamente al punto.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={primaryButtonClass}
              >
                <FaWhatsapp className="text-base" />
                Escribir por WhatsApp
              </a>
              <a
                href={business.mapsReferenceUrl}
                target="_blank"
                rel="noreferrer"
                className={secondaryButtonClass}
              >
                <FaMapMarkerAlt className="text-[#1E3A8A]" />
                Ver referencia de ubicacion
              </a>
            </div>
          </div>

          <div className="w-full self-center overflow-hidden rounded-[34px] border border-[#BFDBFE] bg-white shadow-xl shadow-sky-100/70 lg:mx-auto lg:max-w-[620px]">
            <div className="border-b border-[#BFDBFE] bg-[#F7FCFF] px-6 py-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1E3A8A]">
                Ubicacion real
              </p>
              <p className="mt-2 text-sm font-semibold text-[#1F2937]">
                {business.address}, {business.cityLabel}
              </p>
            </div>
            <iframe
              title="Mapa de PET SHOP"
              src={business.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[440px] w-full border-0 sm:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="pb-16 pt-2 sm:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0F172A_0%,#1D4ED8_45%,#0F766E_100%)] px-6 py-10 text-white shadow-2xl shadow-sky-200/30 sm:px-10 sm:py-14">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/85">
                CTA final
              </span>
              <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                Escribenos por WhatsApp y conoce nuestros productos y servicios
              </h2>
              <p className="mt-4 text-base leading-7 text-white/90">
                Si quieres agendar peluqueria, preguntar por un producto o
                confirmar disponibilidad, escribenos y te ayudamos.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={business.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#1F2937] shadow-lg transition hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="text-[#0F766E]" />
                  Quiero informacion por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Ver servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#BFDBFE] bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-xl font-black uppercase tracking-[0.18em] text-[#1F2937]">
              {business.name}
            </p>
            <p className="mt-2 text-sm font-semibold text-[#0F766E]">
              {business.subtitle}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#6B7280]">
              Peluqueria canina, productos para mascotas y atencion cercana para
              que resuelvas facil lo que necesitas para tu peludito.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
                Contacto
              </p>
              <div className="mt-3 space-y-2 text-sm leading-7 text-[#6B7280]">
                <p>WhatsApp: {business.whatsappNumber}</p>
                <p>{business.cityLabel}</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#1E3A8A]">
                Ubicacion
              </p>
              <div className="mt-3 space-y-2 text-sm leading-7 text-[#6B7280]">
                <p>{business.address}</p>
                <p>{business.cityLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Boton flotante de WhatsApp */}
      <a
        href={business.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Hablar por WhatsApp con PET SHOP"
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-[#0F766E] px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#0F766E]/25 transition hover:-translate-y-0.5 hover:bg-[#115E59] sm:bottom-6 sm:right-6"
      >
        <FaWhatsapp className="text-lg" />
        <span>WhatsApp</span>
      </a>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const track = document.getElementById("pet-shop-reviews-track");
              if (!track || track.dataset.carouselReady === "true") return;

              track.dataset.carouselReady = "true";

              if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                return;
              }

              let animationFrameId = 0;
              let lastTime = 0;
              let offset = 0;
              let loopWidth = 0;
              let paused = false;
              const speed = 22;

              track.style.willChange = "transform";

              const measure = () => {
                loopWidth = track.scrollWidth / 2;
                if (loopWidth > 0) {
                  offset = offset % loopWidth;
                } else {
                  offset = 0;
                }
                track.style.transform = "translateX(-" + offset + "px)";
              };

              const animate = (time) => {
                if (!lastTime) {
                  lastTime = time;
                }

                const delta = (time - lastTime) / 1000;
                lastTime = time;

                if (!paused && loopWidth > 0) {
                  offset += speed * delta;
                  if (offset >= loopWidth) {
                    offset -= loopWidth;
                  }
                  track.style.transform = "translateX(-" + offset + "px)";
                }

                animationFrameId = window.requestAnimationFrame(animate);
              };

              const onEnter = () => {
                paused = true;
              };

              const onLeave = () => {
                paused = false;
              };

              const onResize = () => {
                measure();
              };

              measure();
              animationFrameId = window.requestAnimationFrame(animate);

              track.addEventListener("mouseenter", onEnter);
              track.addEventListener("mouseleave", onLeave);
              window.addEventListener("resize", onResize);
            })();
          `,
        }}
      />
    </>
  );
}
