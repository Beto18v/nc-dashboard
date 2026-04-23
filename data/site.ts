// Nombre de la empresa para uso destacado con gradiente
export const companyName = "NEXVAL";

export const siteMetadata = {
  lang: "es",
  title: "Desarrollo de sitios web",
  description:
    "Desarrollo web de servicios para negocios modernos. Creamos sitios web rápidos, responsivos y optimizados para SEO, adaptados a tus necesidades.",
  preconnectUrls: ["https://images.unsplash.com"],
};

export const siteBanner = {
  message: "🚀 Recibe más clientes por WhatsApp esta semana",
  messageMobile: "🚀 Más clientes por WhatsApp esta semana",
  whatsappNumber: "573142482943",
  whatsappText:
    "Hola, quiero conseguir más clientes por WhatsApp con una página simple para mi negocio.\nMi negocio es: ->\nEstoy ubicado en: ->\nMi objetivo este mes es: ->",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappText)}`;
  },
  buttonLabel: "Quiero más clientes",
  buttonLabelMobile: "Más clientes",
};

// Hero section data
export const siteHero = {
  sectionId: "inicio",
  // Usa companyName en el título para destacar con gradiente en el componente
  title: "Consigue más clientes sin pagar publicidad con " + companyName,
  subtitle:
    "Te ayudo a tener una página simple que lleva a tus clientes directo a WhatsApp para que te escriban, te pregunten y compren más rápido.",
  cta: {
    primary: {
      label: "Quiero más clientes",
      href: "https://wa.me/573142482943?text=Hola%2C%20quiero%20m%C3%A1s%20clientes%20por%20WhatsApp%20para%20mi%20negocio.%20%C2%BFC%C3%B3mo%20empezamos%3F",
    },
    secondary: {
      label: "Ver cómo funciona",
      href: "#proceso",
    },
  },
  disclaimer: [
    "✔ Simple y fácil de vender",
    "✔ Enfoque en mensajes y ventas",
    "✔ Sin complicarte con tecnología",
  ],
  stats: [
    {
      icon: "MdWhatsapp",
      title: "Más clientes",
    },
    {
      icon: "MdFlashOn",
      title: "Más mensajes",
    },
    {
      icon: "MdAttachMoney",
      title: "Más ventas",
    },
    {
      icon: "MdLocationOn",
      title: "Ubicación y contacto",
    },
  ],
};

export const siteDevicePreview = {
  labels: {
    desktop: "PC",
    laptop: "Laptop",
    tablet: "Tablet",
    phone: "Celular",
  },
};

// Services section data
export const siteServices = {
  sectionId: "servicios",
  label: "Servicios",
  title: "Un servicio simple para conseguir más clientes por WhatsApp",
  badge: "Incluido en todos los planes, sin costos ocultos.",
  services: [
    {
      icon: "Code",
      title: "Captación de clientes",
      description:
        "Creamos una oferta clara para que las personas interesadas te escriban por WhatsApp y pidan información de inmediato.",
    },
    {
      icon: "Zap",
      title: "Página optimizada para convertir",
      description:
        "Diseñamos una página simple, directa y enfocada en que cada visita se convierta en mensaje y posible venta.",
    },
    {
      icon: "Globe",
      title: "Integración directa con WhatsApp",
      description:
        "Todo queda preparado para que tus clientes te contacten en un clic, sin formularios largos ni pasos innecesarios.",
    },
  ],
};

// Process section data
export const siteProcess = {
  sectionId: "proceso",
  label: "Proceso",
  title: "Así de simple empezamos",
  subtitle:
    "Cuatro pasos claros para que empieces a recibir más clientes lo antes posible.",
  stepLabelPrefix: "Paso",
  footerText:
    "Tendrás avances y versión de prueba para que lo revises antes de publicar.",
  steps: [
    {
      number: "01",
      title: "Analizo tu negocio",
      description:
        "Revisamos qué vendes, a quién le vendes y qué tipo de clientes quieres atraer.",
    },
    {
      number: "02",
      title: "Te muestro una demo",
      description:
        "Te presento una propuesta simple para que veas cómo llegaría la gente a tu WhatsApp.",
    },
    {
      number: "03",
      title: "Lo activamos",
      description:
        "Hacemos los ajustes finales y dejamos tu página lista para empezar a generar contactos.",
    },
    {
      number: "04",
      title: "Empiezas a recibir mensajes",
      description:
        "Tu negocio queda visible y preparado para que más personas te escriban por WhatsApp.",
    },
  ],
};

// Header data layout
export const headerData = {
  brand: {
    name: "Nexval",
    accent: "",
    href: "/",
    logo: {
      src: "/Logonobg.png",
      alt: "Nexval Logo",
      width: 112,
      height: 112,
      sizes: "112px",
    },
  },
  navItems: [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proceso", href: "#proceso" },
    { name: "Ejemplos", href: "#ejemplos" },
    { name: "Contacto", href: "#contacto" },
  ],
  mobileMenu: {
    openLabel: "Abrir menú",
    closeLabel: "Cerrar menú",
  },
  button: {
    label: "Ver planes",
    href: "#precios",
  },
};

// Footer data layout
export const footerData = {
  brand: {
    name: "Nexval",
    accent: ".",
    href: "/",
  },
  description: "Más clientes por WhatsApp para negocios.",
  navItems: [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proceso", href: "#proceso" },
    { name: "Ejemplos", href: "#ejemplos" },
    { name: "Precios", href: "#precios" },
    { name: "Contacto", href: "#contacto" },
  ],
  socialLinks: [
    {
      icon: "FaWhatsapp",
      label: "WhatsApp",
      href: "https://wa.me/573142482943",
    },
    {
      icon: "FaInstagram",
      label: "Instagram",
      href: "https://wa.me/573142482943",
    },
    {
      icon: "FaFacebook",
      label: "Facebook",
      href: "https://wa.me/573142482943",
    },
    {
      icon: "FaXTwitter",
      label: "X (Twitter)",
      href: "https://wa.me/573142482943",
    },
  ],
  copyright: {
    label: "Todos los derechos reservados.",
    privacy: {
      label: "Política de privacidad",
      href: "#",
    },
    terms: {
      label: "Términos de uso",
      href: "#",
    },
  },
};

// Examples section data
export const siteExamples = {
  sectionId: "ejemplos",
  label: "Ejemplos",
  title: "Así podría verse tu sitio web",
  subtitle: "Estos son ejemplos de páginas premium.",
  secondarySubtitle:
    "Creamos páginas web para negocios con  enfoque en conversión, diseño web profesional y landing optimizada para atraer clientes.",
  imageAltPrefix: "Demo",
  whatsappMessageTemplate:
    "Hola, quiero una página web para negocios similar al demo {demoName}. Quiero una landing premium y diseño web profesional para mi marca.",
  buttons: {
    viewDemo: "Ver Demo",
    quoteSimilar: "Quiero una web así",
    openDemo: "Abrir demo",
    quoteWhatsapp: "Cotizar por WhatsApp",
  },
  modal: {
    closeLabel: "Cerrar detalle",
    closeText: "Cerrar",
  },
  cta: {
    title: "¿Quieres una web como estas?",
    description:
      "Te diseñamos una página a medida con estructura de venta, branding sólido y enfoque de resultados para tu negocio.",
    buttonLabel: "Cotizar por WhatsApp",
  },
  demos: [
    {
      name: "Restaurante Élite",
      category: "Restaurante",
      href: "/demo/restaurant",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
      shortDescription:
        "Landing premium para reservas y pedidos directos por WhatsApp.",
      longDescription:
        "Diseño web profesional para restaurantes que quieren verse exclusivos, captar más reservas y convertir visitas en clientes con una experiencia clara desde celular.",
      features: ["Botón de WhatsApp", "Módulo de reservas", "SEO local"],
    },
    {
      name: "Spa Serenity",
      category: "Spa",
      href: "/demo/spa",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80",
      shortDescription:
        "Web elegante que transmite confianza y aumenta solicitudes de cita.",
      longDescription:
        "Página orientada a tratamientos premium con bloques de servicios, testimonios y llamadas a la acción para generar más conversiones en negocios de bienestar.",
      features: [
        "Agenda por WhatsApp",
        "Sección de servicios",
        "Copy comercial",
      ],
    },
    {
      name: "Gym Performance",
      category: "Gimnasio",
      href: "/demo/gym",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80",
      shortDescription:
        "Sitio de alto impacto para captar leads de clases y planes mensuales.",
      longDescription:
        "Ejemplo de landing premium para gimnasios que necesitan más prospectos, mejor posicionamiento y una propuesta clara para convertir tráfico en membresías.",
      features: [
        "Formulario de contacto",
        "Planes destacados",
        "SEO para Google",
      ],
    },
    {
      name: "Barbería Clásica",
      category: "Barbería",
      href: "/demo/barberia",
      image:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1400&q=80",
      shortDescription:
        "Imagen sólida de marca para barberías que buscan vender más citas.",
      longDescription:
        "Demo de páginas web para negocios de barbería con identidad visual fuerte, acceso rápido a WhatsApp y estructura enfocada en cerrar clientes desde móvil.",
      features: [
        "Reserva rápida",
        "Galería de estilos",
        "Integración WhatsApp",
      ],
    },
    {
      name: "Beauty Studio",
      category: "Belleza",
      href: "/demo/beauty",
      image:
        "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=80",
      shortDescription:
        "Diseño aspiracional para salones que quieren elevar su percepción premium.",
      longDescription:
        "Propuesta de diseño web profesional para marcas de belleza que desean posicionarse con autoridad, mostrar resultados y generar más consultas.",
      features: [
        "Portafolio visual",
        "CTA de cotización",
        "Optimización mobile",
      ],
    },
    {
      name: "Clínica Dental Pro",
      category: "Dental",
      href: "/demo/dental",
      image:
        "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=80",
      shortDescription:
        "Web confiable para clínicas que quieren más citas agendadas.",
      longDescription:
        "Ejemplo pensado para clínicas odontológicas que necesitan transmitir seguridad, explicar procedimientos y aumentar conversiones con una experiencia simple.",
      features: [
        "Agenda de citas",
        "Sección de tratamientos",
        "SEO local profesional",
      ],
    },
  ],
};

// Pricing section data
export const sitePricing = {
  sectionId: "precios",
  label: "Precios",
  title: "Planes claros para empezar hoy",
  subtitle:
    "Elige el plan según tu momento. Todos están enfocados en ayudarte a recibir más clientes por WhatsApp.",
  whatsappBaseUrl: "https://wa.me/573142482943?text=Me interesa el plan ",
  buttonText: "Quiero este plan",
  cardLabels: {
    default: "Plan",
    featured: "Plan recomendado",
    featuredBadge: "Más vendido",
  },
  footerText:
    "Precios de entrada para negocios locales. Podemos ajustarlo según lo que necesites.",
  guaranteeText:
    "Si no te gusta el diseño inicial, lo ajustamos hasta que te encante.",
  packages: [
    {
      name: "Básico",
      price: "Desde $150.000 COP",
      description:
        "Ideal para probar una página simple y empezar a recibir mensajes.",
      features: [
        "Página simple",
        "Botón WhatsApp",
        "Mensaje claro para vender",
        "Ideal para probar",
      ],
      featured: false,
    },
    {
      name: "Profesional",
      price: "Desde $270.000 COP",
      description:
        "Para negocios que quieren más contactos y más oportunidades.",
      features: [
        "Mejor diseño",
        "Optimización de mensajes",
        "Más secciones",
        "Integración directa con WhatsApp",
        "Ideal para captar más clientes",
      ],
      featured: true,
    },
    {
      name: "Premium",
      price: "Desde $500.000 COP",
      description:
        "Para negocios que quieren una solución completa y acompañamiento.",
      features: [
        "Todo completo",
        "Soporte",
        "Optimización",
        "Más enfoque en ventas por WhatsApp",
        "Ajustes para mejorar resultados",
      ],
      featured: false,
    },
  ],
  comparison: {
    title: "¿Qué incluye cada plan?",
    subtitle:
      "Compara rápidamente el alcance y toma una decisión con claridad.",
    includedLabel: "Incluye",
    positiveLabel: "✔",
    negativeLabel: "—",
    rows: [
      {
        item: "Página simple y responsive",
        included: [true, true, true],
      },
      {
        item: "Botón WhatsApp integrado",
        included: [true, true, true],
      },
      {
        item: "Mensaje claro para vender",
        included: [true, true, true],
      },
      {
        item: "Optimización de mensajes",
        included: [false, true, true],
      },
      {
        item: "Más secciones",
        included: [false, true, true],
      },
      {
        item: "Acompañamiento y ajustes para mejorar resultados",
        included: [false, false, true],
      },
    ],
  },
  optionalExtras: {
    title: "Extras opcionales para potenciar tu negocio",
    subtitle: "Puedes agregarlos ahora o más adelante",
    itemLabel: "Complemento opcional",
    buttonText: "Agregar a mi plan",
    whatsappTextTemplate:
      "Hola, me interesa el extra {extraName}. Quisiera más información y el precio final.",
    items: [
      {
        name: "Dominio + Hosting Gestionado",
        icon: "🌐",
        description:
          "Asegura una base técnica confiable para que tu web se vea profesional desde el primer día.",
        includes: [
          "Dominio (.com o .com.co) + hosting rápido con SSL",
          "Configuración completa para salir en línea sin fricción",
          "Soporte básico inicial para acompañar el arranque",
        ],
        price: "Desde $250.000 COP / año",
      },
      {
        name: "Mantenimiento y Soporte Mensual",
        icon: "🛠️",
        description:
          "Mantén tu sitio actualizado, seguro y ágil sin distraerte de la operación del negocio.",
        includes: [
          "Cambios pequeños de contenido cuando lo necesites",
          "Actualizaciones y seguridad para una web estable",
          "Soporte por WhatsApp con ajustes rápidos",
        ],
        price: "Desde $150.000 COP / mes",
      },
      {
        name: "Pack de Reels Publicitarios (Instagram/TikTok)",
        icon: "🎬",
        description:
          "Contenido corto pensado para captar atención y reforzar tu presencia comercial en redes.",
        includes: [
          "3 a 5 videos verticales (15-30 segundos)",
          "Producción rápida con herramientas modernas (IA + edición)",
          "Texto promocional y edición dinámica lista para publicar",
        ],
        price: "Desde $450.000 COP",
      },
      {
        name: "Pack de Contenido para Redes Sociales",
        icon: "📣",
        description:
          "Publica con más consistencia y una imagen de marca clara para mejorar tu comunicación.",
        includes: [
          "10 diseños de posts listos para usar",
          "5 historias (stories) en formato de alto impacto",
          "Estilo de marca y textos listos para publicar",
        ],
        price: "Desde $350.000 COP",
      },
    ],
  },
  advisoryCta: {
    title:
      "Agenda una asesoría gratis por WhatsApp y te decimos qué plan te conviene.",
    description:
      "Te orientamos sin compromiso para que inviertas de forma inteligente y con objetivos claros.",
    buttonText: "Agendar asesoría gratis",
    whatsappText:
      "Hola, quiero agendar una asesoría gratis para saber qué plan web me conviene para mi negocio.",
  },
};

// FAQ section data
export const siteFaq = {
  sectionId: "faq",
  label: "Preguntas frecuentes",
  title: "Resolvemos tus dudas antes de empezar",
  subtitle:
    "Estas respuestas te ayudan a tomar una decisión informada y segura.",
  items: [
    {
      question: "¿Cuánto tarda la entrega?",
      answer:
        "Depende del plan y de la rapidez con la que recibamos tu información. En promedio, Básico se entrega más rápido y Profesional/Premium requieren más iteraciones estratégicas.",
    },
    {
      question: "¿Incluye dominio y hosting?",
      answer:
        "No están incluidos por defecto para que mantengas el control total de tus cuentas, pero podemos gestionarlo por ti como extra opcional.",
    },
    {
      question: "¿Puedo pagar por cuotas?",
      answer:
        "Sí. Podemos definir un esquema por etapas del proyecto para que avances con comodidad y claridad.",
    },
    {
      question: "¿Qué pasa si quiero agregar más secciones?",
      answer:
        "Lo podemos ampliar en cualquier momento. Te compartimos una propuesta adicional según el alcance nuevo.",
    },
    {
      question: "¿Puedo pedir cambios después de la entrega?",
      answer:
        "Sí. Cada plan incluye rondas de cambios y, luego de eso, puedes solicitar ajustes adicionales o contratar mantenimiento.",
    },
    {
      question: "¿Incluye posicionamiento en Google?",
      answer:
        "Todos los planes salen con una base optimizada. En Profesional trabajamos SEO básico y en Premium una optimización SEO avanzada inicial.",
    },
  ],
};

// Contact section data
export const siteContact = {
  sectionId: "contacto",
  label: "Contacto",
  title: "Hablemos de tu negocio",
  subtitle:
    "Hablemos y te muestro cómo podrías recibir más clientes esta misma semana.",
  contacts: [
    {
      icon: "Mail",
      label: "Correo",
      href: "mailto:nicolasalbertov18@gmail.com",
      text: "nicolasalbertov18@gmail.com",
    },
    {
      icon: "MessageCircle",
      label: "WhatsApp",
      href: "https://wa.me/573142482943",
      text: "+57 3142482943",
    },
  ],
  quickResponseText: "Respuesta en menos de 2 horas (horario laboral)",
  quoteChecklist: {
    icon: "📋",
    title: "Para cotizar más rápido, envíame:",
    items: [
      {
        icon: "FaRegBuilding",
        text: "¿A qué se dedica tu negocio?",
      },
      {
        icon: "FaMapMarkerAlt",
        text: "¿En qué ciudad te encuentras?",
      },
      {
        icon: "FaRegStar",
        text: "Comparte un ejemplo de web que te guste",
      },
      {
        icon: "FaRegCalendarCheck",
        text: "¿Quieres reservas, citas o catálogo?",
      },
    ],
  },
  footerText: "Te respondemos de lunes a viernes, de 9:00 a 18:00.",
  confidenceText:
    "Si no sabes qué plan elegir, te recomendamos el ideal según tu negocio.",
};

export const siteWhatsappFloat = {
  ariaLabel: "Contactar por WhatsApp",
  whatsappText:
    "Hola, vi tu página y quiero cotizar una página web.\n\nMi negocio es: \nCiudad: \nTengo WhatsApp Business: Sí/No\nTengo dominio: Sí/No\n\n¿Qué información adicional necesitas?",
};

export const siteUi = {
  listBullet: "•",
  sheetCloseLabel: "Cerrar",
};
