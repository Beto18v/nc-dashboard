import Image from "next/image";
import type { Metadata } from "next";
import type { IconType } from "react-icons";
import {
  FaBone,
  FaInstagram,
  FaMapMarkerAlt,
  FaMotorcycle,
  FaPills,
  FaShippingFast,
  FaStar,
  FaWhatsapp,
} from "react-icons/fa";
import { GiDogBowl } from "react-icons/gi";

const business = {
  name: "Tienda Pets",
  category: "Tienda de productos para mascotas en Bogota",
  headline:
    "Productos para mascotas en Bogota con atencion rapida por WhatsApp",
  supportingLine:
    "Concentrado, accesorios, medicamentos, domicilios en Bogota y envios a otras ciudades.",
  description:
    "Si necesitas concentrado, accesorios o medicamentos para tu mascota, en Tienda Pets te respondemos rapido por WhatsApp y te ayudamos a pedir lo que buscas sin tanta vuelta.",
  instagramUrl: "https://www.instagram.com/tiendapets_col/",
  instagramUser: "@tiendapets_col",
  whatsappNumber: "316 482 2444",
  whatsappUrl:
    "https://wa.me/573164822444?text=Hola%20Tienda%20Pets%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20productos",
  mapsUrl:
    "https://www.google.com/maps/place/Tienda+Pets/@4.6483941,-74.0886246,14z/data=!4m11!1m3!2m2!1spets!6e6!3m6!1s0x8e3f9b193ac318bf:0x65d41b88ed84d792!8m2!3d4.648387!4d-74.0887896!15sCgRwZXRzWgYiBHBldHOSARBwZXRfc3VwcGx5X3N0b3Jl4AEA!16s%2Fg%2F11y464nj5v?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=4.648387,-74.0887896&z=15&output=embed",
  primaryAddress: "Cra 54 #46-44 Local 3 (La Esmeralda), Bogota, Colombia",
  secondaryAddress: "Calle 57 #57-10 (Pablo Sexto), Bogota, Colombia",
} as const;

const navigation = [
  { label: "Servicios", href: "#servicios" },
  { label: "Galeria", href: "#galeria" },
  { label: "Ubicacion", href: "#ubicacion" },
  { label: "Contacto", href: "#cta-final" },
] as const;

const heroCards = [
  {
    title: "WhatsApp directo",
    description:
      "Nos escribes, nos cuentas que buscas y te respondemos rapido para ayudarte con tu pedido.",
  },
  {
    title: "Dos puntos de atencion",
    description:
      "Tenemos dos puntos de atencion para que elijas el que te quede mejor y llegues sin enredos.",
  },
  {
    title: "Domicilios y envios",
    description:
      "Si estas en Bogota te lo llevamos a domicilio, y si estas fuera te guiamos con el envio.",
  },
] as const;

const services: Array<{
  icon: IconType;
  title: string;
  description: string;
}> = [
  {
    icon: GiDogBowl,
    title: "Alimentos para mascotas",
    description:
      "Te ayudamos a resolver la compra del dia a dia con respuesta rapida por WhatsApp y opcion de pasar por tienda o pedir domicilio.",
  },
  {
    icon: FaBone,
    title: "Accesorios",
    description:
      "Tambien manejamos accesorios para que completes la compra con lo que hace falta en casa para tu mascota.",
  },
  {
    icon: FaPills,
    title: "Medicamentos",
    description:
      "Si necesitas medicamentos, te confirmamos por WhatsApp y te orientamos para que sepas como pedirlos.",
  },
  {
    icon: FaMotorcycle,
    title: "Domicilios en Bogota",
    description:
      "Si ya sabes lo que vas a pedir, te ayudamos a coordinar el domicilio para que lo recibas sin salir.",
  },
  {
    icon: FaShippingFast,
    title: "Envios nacionales / contra entrega",
    description:
      "Si estas fuera de Bogota, tambien te ayudamos con el envio y la opcion contra entrega segun el destino.",
  },
];

const galleryImages = [
  {
    src: "/images/tienda-pets/fachada.jpg",
    alt: "Fachada de Tienda Pets en Bogota",
    title: "Fachada y punto de atencion",
    description:
      "Asi nos ubicas rapido y sabes a donde venir cuando prefieres comprar en persona.",
  },
  {
    src: "/images/tienda-pets/productos.jpg",
    alt: "Productos para mascotas en Tienda Pets",
    title: "Productos que manejan",
    description:
      "Aqui te mostramos parte de lo que manejamos para que veas que puedes resolver varias cosas en una sola compra.",
  },
  {
    src: "/images/tienda-pets/pet1.jpg",
    alt: "Mascota en Tienda Pets",
    title: "Una marca cercana",
    description:
      "Queremos que se sienta como lo que somos: una tienda cercana donde te ayudamos a escoger lo que necesitas.",
  },
  {
    src: "/images/tienda-pets/pet2.jpg",
    alt: "Mascota junto a productos de Tienda Pets",
    title: "Fotos que dan confianza",
    description:
      "Mostramos fotos reales del negocio y de mascotas para que la pagina se sienta mas cercana.",
  },
] as const;

const reviews = [
  {
    name: "Laura Gomez",
    text: "Muy buen servicio, lleve a mi perrito a peluqueria y quedo hermoso. Ademas tienen buena variedad de alimentos y precios accesibles. Super recomendados.",
    source: "Google Maps",
    rating: 5,
  },
  {
    name: "Carlos Rodriguez",
    text: "Siempre compro el concentrado aqui. Me gusta porque atienden rapido y por WhatsApp responden de una. Tambien hacen domicilios y eso ayuda mucho.",
    source: "Google Maps",
    rating: 5,
  },
  {
    name: "Andrea Martinez",
    text: "Tienen de todo para las mascotas, desde comida hasta accesorios. La atencion es muy amable y se nota que conocen bien los productos.",
    source: "Google Maps",
    rating: 4,
  },
  {
    name: "Paula Rincón",
    text: "Muy buen servicio, llevé a mi perro a peluquería y lo dejaron súper limpio y bien cuidado. Se nota que trabajan con cariño.",
    source: "Google Maps",
    rating: 5,
  },
  {
    name: "Luis Herrera",
    text: "Buen surtido de concentrado y precios normales. Me gusta porque queda cerca y atienden rápido, lo recomiendo para compras del día a día.",
    source: "Google Maps",
    rating: 4,
  },
  {
    name: "Camila Torres",
    text: "La atención es muy amable y siempre ayudan a elegir lo mejor para las mascotas. También responden por WhatsApp y eso facilita mucho todo.",
    source: "Google Maps",
    rating: 5,
  },
] as const;

const reviewCarouselItems = [...reviews, ...reviews];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: business.name,
  description: business.description,
  telephone: "+573164822444",
  image: galleryImages.map((image) => image.src),
  address: {
    "@type": "PostalAddress",
    streetAddress: business.primaryAddress,
    addressLocality: "Bogota",
    addressCountry: "CO",
  },
  sameAs: [business.instagramUrl, business.mapsUrl],
  hasMap: business.mapsUrl,
  areaServed: ["Bogota", "Colombia"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+573164822444",
    contactType: "customer service",
    availableLanguage: ["Spanish"],
  },
  knowsAbout: [
    "Alimentos para mascotas",
    "Accesorios",
    "Medicamentos",
    "Domicilios en Bogota",
    "Envios nacionales contra entrega",
  ],
};

const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#22C55E]/25 transition hover:-translate-y-0.5 hover:bg-[#16A34A] focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2";

const secondaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[#0EA5E9]/20 bg-white/90 px-6 py-3.5 text-sm font-semibold text-[#0F172A] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/40 hover:bg-white";

export const metadata: Metadata = {
  title: "Tienda Pets | Productos para mascotas en Bogota",
  description:
    "Tienda Pets en Bogota: alimentos, accesorios, medicamentos, domicilios en Bogota, envios nacionales contra entrega y atencion directa por WhatsApp.",
  keywords: [
    "Tienda Pets",
    "tienda de mascotas en Bogota",
    "productos para mascotas en Bogota",
    "alimentos para mascotas en Bogota",
    "medicamentos para mascotas en Bogota",
    "domicilios para mascotas en Bogota",
    "envios nacionales contra entrega mascotas",
  ],
  openGraph: {
    title: "Tienda Pets | Productos para mascotas en Bogota",
    description:
      "Alimentos, accesorios, medicamentos, domicilios en Bogota y atencion rapida por WhatsApp.",
    type: "website",
    locale: "es_CO",
    siteName: "Tienda Pets",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tienda Pets | Productos para mascotas en Bogota",
    description:
      "Atencion por WhatsApp, domicilios en Bogota y envios nacionales contra entrega.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TiendaPetsPage() {
  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/images/tienda-pets/logo.png"
                  alt="Logo de Tienda Pets"
                  fill
                  priority
                  sizes="48px"
                  className="object-contain p-1.5"
                />
              </div>
              <div>
                <p className="text-base font-black leading-none text-[#0F172A]">
                  {business.name}
                </p>
                <p className="mt-1 text-sm text-[#475569]">
                  Productos para mascotas en Bogota
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 lg:flex">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#475569] transition hover:text-[#0F172A]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Instagram de Tienda Pets"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0EA5E9]/20 bg-white text-[#0EA5E9] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/40 sm:hidden"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full border border-[#0EA5E9]/20 bg-white px-4 py-2.5 text-sm font-semibold text-[#0F172A] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0EA5E9]/40"
              >
                <FaInstagram className="text-[#0EA5E9]" />
                Instagram
              </a>
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#22C55E]/20 transition hover:-translate-y-0.5 hover:bg-[#16A34A]"
              >
                <FaWhatsapp className="text-base" />
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,197,94,0.14),rgba(14,165,233,0.10),rgba(139,92,246,0.12))]" />
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#22C55E]/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#8B5CF6]/18 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-[#22C55E]/20 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#15803D] shadow-sm">
                  Tienda fisica + ventas por WhatsApp
                </span>

                <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
                  {business.headline}
                </h1>

                <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-[#0F172A]">
                  {business.supportingLine}
                </p>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#475569] sm:text-lg">
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
                    Pedir por WhatsApp
                  </a>
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={secondaryButtonClass}
                  >
                    <FaInstagram className="text-[#0EA5E9]" />
                    Ver Instagram
                  </a>
                  <a href="#ubicacion" className={secondaryButtonClass}>
                    <FaMapMarkerAlt className="text-[#8B5CF6]" />
                    Ver ubicacion
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#0F172A] shadow-sm ring-1 ring-slate-200">
                    Cra 54 #46-44 Local 3
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#0F172A] shadow-sm ring-1 ring-slate-200">
                    Calle 57 #57-10
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#0F172A] shadow-sm ring-1 ring-slate-200">
                    Envios nacionales / contra entrega
                  </span>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {heroCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-[24px] border border-white/80 bg-white/90 p-5 shadow-lg shadow-slate-200/50"
                    >
                      <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0EA5E9]">
                        {card.title}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-[#475569]">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-4 -top-6 h-24 w-24 rounded-full bg-[#0EA5E9]/20 blur-2xl" />
                <div className="absolute -bottom-6 left-0 h-28 w-28 rounded-full bg-[#22C55E]/20 blur-2xl" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="relative overflow-hidden rounded-[32px] border border-white/80 bg-white shadow-2xl shadow-sky-200/40 sm:col-span-2">
                    <div className="relative h-[340px] sm:h-[400px]">
                      <Image
                        src="/images/tienda-pets/fachada.jpg"
                        alt="Fachada principal de Tienda Pets en Bogota"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/35 to-transparent p-6 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                        Ubicacion visible
                      </p>
                      <p className="mt-2 text-2xl font-bold">
                        Aqui nos encuentras facil y tambien puedes escribirnos
                        de una
                      </p>
                      <p className="mt-2 max-w-lg text-sm leading-6 text-white/85">
                        Si prefieres venir, aqui ubicas rapido la tienda. Y si
                        quieres ahorrar tiempo, nos escribes antes y te
                        confirmamos lo que necesitas.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-lg shadow-slate-200/50">
                    <div className="relative h-52">
                      <Image
                        src="/images/tienda-pets/productos.jpg"
                        alt="Productos para mascotas disponibles en Tienda Pets"
                        fill
                        sizes="(max-width: 1024px) 100vw, 280px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-[#0F172A]">
                        Productos a la vista
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#475569]">
                        Mostramos lo que manejamos para que preguntes sin tanta
                        vuelta.
                      </p>
                    </div>
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-lg shadow-slate-200/50">
                    <div className="relative h-52">
                      <Image
                        src="/images/tienda-pets/pet1.jpg"
                        alt="Mascota en Tienda Pets"
                        fill
                        sizes="(max-width: 1024px) 100vw, 280px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold text-[#0F172A]">
                        Una marca cercana
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#475569]">
                        Queremos que se vea como somos: cercanos, claros y
                        siempre pendientes de ayudarte a escoger.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-[#E0F2FE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0369A1]">
                Servicios
              </span>
              <h2 className="mt-5 text-3xl font-black text-[#0F172A] sm:text-4xl">
                Lo que puedes conseguir y pedir facilmente
              </h2>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                Desde concentrado hasta accesorios y medicamentos, aqui te
                mostramos todo de forma clara para que veas si te sirve y nos
                escribas de una.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-[28px] bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(34,197,94,0.16),rgba(14,165,233,0.16),rgba(139,92,246,0.16))] text-[#0F172A]">
                      <Icon className="text-2xl" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-[#0F172A]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#475569]">
                      {service.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section
          id="galeria"
          className="scroll-mt-20 border-y border-slate-200/70 bg-white/60 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full bg-[#F3E8FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7C3AED]">
                  Galeria
                </span>
                <h2 className="mt-5 text-3xl font-black text-[#0F172A] sm:text-4xl">
                  Fotos reales del negocio y de lo que tenemos
                </h2>
                <p className="mt-4 text-base leading-7 text-[#475569]">
                  Queremos que quien entra vea la tienda, los productos y el
                  ambiente real sin tener que imaginarse como es el lugar.
                </p>
              </div>

              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className={secondaryButtonClass}
              >
                <FaInstagram className="text-[#0EA5E9]" />
                {business.instagramUser}
              </a>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {galleryImages.map((image) => (
                <article
                  key={image.src}
                  className="overflow-hidden rounded-[30px] bg-white shadow-lg shadow-slate-200/50 ring-1 ring-slate-100"
                >
                  <div className="relative h-72">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-lg font-bold text-[#0F172A]">
                      {image.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#475569]">
                      {image.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Resenas */}
        <section id="resenas" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-[#FFF7ED] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#C2410C]">
                Reseñas
              </span>
              <h2 className="mt-5 text-3xl font-black text-[#0F172A] sm:text-4xl">
                Lo que mas nos destacan quienes compran con nosotros
              </h2>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                Lo que mas repiten es algo simple: atendemos bien, respondemos
                rapido y buscamos ayudarte a conseguir lo que necesitas.
              </p>
            </div>

            <div className="mt-10">
              <div className="-mx-3 overflow-hidden">
                <div id="tienda-pets-reviews-track" className="flex">
                  {reviewCarouselItems.map((review, index) => (
                    <article
                      key={`${review.name}-${index}`}
                      className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3"
                    >
                      <div className="h-full rounded-[28px] bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100">
                        <div className="flex items-center gap-1 text-[#F59E0B]">
                          {Array.from({ length: review.rating }).map((_, starIndex) => (
                            <FaStar
                              key={`${review.name}-${starIndex}`}
                              className="text-sm"
                            />
                          ))}
                        </div>

                        <p className="mt-5 text-lg font-bold text-[#0F172A]">
                          {review.name}
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#0EA5E9]">
                          {review.source}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-[#475569]">
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

        {/* Ubicacion */}
        <section
          id="ubicacion"
          className="scroll-mt-20 border-y border-slate-200/70 bg-white/60 py-16 sm:py-20"
        >
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <div>
              <span className="inline-flex rounded-full bg-[#E0F2FE] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0369A1]">
                Ubicacion
              </span>
              <h2 className="mt-5 text-3xl font-black text-[#0F172A] sm:text-4xl">
                Direcciones claras para comprar en tienda o pedir con mas
                confianza
              </h2>
              <p className="mt-4 text-base leading-7 text-[#475569]">
                Aqui te dejamos nuestras direcciones para que llegues sin
                enredos o nos escribas antes de venir y confirmes lo que buscas.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[28px] bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">
                    Direccion principal
                  </p>
                  <address className="mt-3 not-italic text-base font-semibold leading-7 text-[#0F172A]">
                    {business.primaryAddress}
                  </address>
                </div>

                <div className="rounded-[28px] bg-white p-6 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]">
                    Sede adicional
                  </p>
                  <address className="mt-3 not-italic text-base font-semibold leading-7 text-[#0F172A]">
                    {business.secondaryAddress}
                  </address>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryButtonClass}
                >
                  <FaMapMarkerAlt className="text-[#0EA5E9]" />
                  Abrir ubicacion
                </a>
                <a
                  href={business.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={primaryButtonClass}
                >
                  <FaWhatsapp className="text-base" />
                  Preguntar por WhatsApp
                </a>
              </div>
            </div>

            <div className="mx-auto h-[420px] w-full self-center overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl shadow-slate-200/50 sm:h-[460px] lg:max-w-[620px]">
              <iframe
                title="Mapa de Tienda Pets"
                src={business.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full w-full border-0"
              />
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section id="cta-final" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0F172A_0%,#0EA5E9_55%,#22C55E_100%)] px-6 py-10 text-white shadow-2xl shadow-sky-200/30 sm:px-10 sm:py-14">
              <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-10 left-0 h-48 w-48 rounded-full bg-[#8B5CF6]/25 blur-3xl" />

              <div className="relative max-w-3xl">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                  Contacto directo
                </span>
                <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                  Habla con Tienda Pets por WhatsApp y recibe atencion rapida
                </h2>
                <p className="mt-4 text-base leading-7 text-white/85">
                  Si quieres preguntar por un producto, confirmar un domicilio o
                  pedir informacion, por WhatsApp te respondemos rapido y te
                  ayudamos con lo que necesites.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={business.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0F172A] shadow-lg transition hover:-translate-y-0.5"
                  >
                    <FaWhatsapp className="text-[#22C55E]" />
                    Escribir ahora por WhatsApp
                  </a>
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
                  >
                    <FaInstagram />
                    Ver Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200/70 bg-white py-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="text-lg font-black text-[#0F172A]">
                {business.name}
              </p>
              <p className="mt-2 text-sm font-medium text-[#0EA5E9]">
                {business.category}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#475569]">
                Concentrado, accesorios, medicamentos y domicilios para que
                compres facil y siempre encuentres una respuesta rapida de
                nuestro lado.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">
                  Contacto
                </p>
                <div className="mt-3 space-y-2 text-sm text-[#475569]">
                  <p>
                    <a
                      href={business.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-[#0F172A] underline decoration-[#0EA5E9]/40 underline-offset-4"
                    >
                      <FaInstagram className="text-[#0EA5E9]" />
                      {business.instagramUser}
                    </a>
                  </p>
                  <p>
                    <a
                      href={business.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-semibold text-[#0F172A] underline decoration-[#22C55E]/40 underline-offset-4"
                    >
                      <FaWhatsapp className="text-[#22C55E]" />
                      {business.whatsappNumber}
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0EA5E9]">
                  Direcciones
                </p>
                <div className="mt-3 space-y-2 text-sm leading-6 text-[#475569]">
                  <p>{business.primaryAddress}</p>
                  <p>{business.secondaryAddress}</p>
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
          aria-label="Hablar por WhatsApp con Tienda Pets"
          className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-[#22C55E] px-3 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#22C55E]/35 transition hover:-translate-y-0.5 hover:bg-[#16A34A] sm:bottom-6 sm:right-6"
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const track = document.getElementById("tienda-pets-reviews-track");
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
