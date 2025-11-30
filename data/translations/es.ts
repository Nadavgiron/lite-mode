export const es = {
    hero: {
        h1: "Poder empresarial. Corazón de pequeña empresa.",
        h2: "Las grandes cadenas tienen software potente. Ahora, tú también.",
        subtitle: "Construye tu espacio de trabajo digital pieza por pieza. Paga solo por las herramientas que realmente uses. Simple, asequible y justo.",
        cta: "Ir a Litemode"
    },
    manifesto: {
        headline: "Dirigir un negocio ya es bastante difícil.",
        paragraphs: [
            "Estás haciendo malabares con empleados, clientes e innumerables problemas. La tecnología no debería ser otro dolor de cabeza. Debería ser tu red de seguridad.",
            "Eliminamos la complejidad y los precios altos. Creamos una plataforma que crece contigo. Sin software inflado, sin contratos 'empresariales'. Solo la ayuda que necesitas, exactamente cuando la necesitas."
        ]
    },
    toolkit: [
        {
            id: "controlshift",
            productName: "ControlShift",
            tag: "Operaciones y Personal",
            headline: "El Gestor de Turnos.",
            copy: "Programación, seguimiento de tiempo y sincronización de equipo. Detén el caos y gestiona tu equipo con un solo clic.",
            buttonText: "¿Quieres saber más?",
            modal: {
                headline: "El sistema operativo completo para tu equipo.",
                coreFeatures: {
                    title: "Características principales:",
                    items: [
                        "Programador Multi-Sitio: Arrastra y suelta turnos para todas tus sucursales en una vista.",
                        "Reloj Inteligente: Entrada/salida verificada por GPS.",
                        "App para Empleados: El personal ve turnos e intercambia disponibilidad al instante."
                    ]
                },
                powerAddons: {
                    title: "Complementos avanzados:",
                    items: [
                        { icon: "🔄", text: "Intercambio de Personal: ¿Faltan empleados? Pide prestados de otras sucursales con un clic." },
                        { icon: "💸", text: "Preparación de Nómina: Calcula horas automáticamente y exporta informes listos para tu contador." },
                        { icon: "🛡️", text: "El Guardián: Los empleados no pueden salir hasta marcar su lista de cierre." },
                        { icon: "🎓", text: "Academia del Menú: Capacitación gamificada y cuestionarios periódicos. Asegúrate de que cada miembro del personal conozca el menú de memoria, siempre." },
                        { icon: "📢", text: "Comunicaciones del Equipo: Un canal privado para actualizaciones, separado de WhatsApp." },
                        { icon: "🥂", text: "Gestor de Eventos: Gestiona eventos privados directamente en tu calendario de turnos." }
                    ]
                }
            }
        },
        {
            id: "instasite",
            productName: "Insta-Site",
            tag: "Marketing y Presencia",
            headline: "El Sitio Web Instantáneo.",
            copy: "¿No tienes sitio web? Ahora sí. Generamos un sitio empresarial profesional para ti al instante. Cero esfuerzo requerido.",
            buttonText: "¿Quieres saber más?",
            modal: {
                headline: "Tu marca, en línea. En segundos.",
                details: [
                    "Hacemos el trabajo pesado: Tomamos tu menú PDF existente, tus fotos de Instagram y los detalles de tu negocio.",
                    "Construcción Automática: Nuestro motor transforma información en bruto en un sitio web impresionante y adaptable a móviles.",
                    "Actualizaciones en Vivo: ¿Actualizas tus redes sociales? Tu sitio también se actualiza.",
                    "El Resultado: Una presencia digital profesional sin pagar a un desarrollador."
                ]
            }
        },
        {
            id: "reviewnet",
            productName: "ReviewNet",
            tag: "Reputación y Crecimiento",
            headline: "El Escudo de Reputación.",
            copy: "Asegúrate de que tu trabajo duro sea notado. Envía reseñas de 5 estrellas a Google y detecta quejas de clientes antes de que se hagan públicas.",
            buttonText: "¿Quieres saber más?",
            modal: {
                headline: "Convierte clientes en tu equipo de marketing.",
                details: [
                    "El Incentivo (El Gancho): No solo pedimos un favor. Lo gamificamos. Los clientes escanean el código QR para desbloquear una recompensa (como un postre gratis o entrada a sorteo), asegurando que quieran dejar comentarios.",
                    "El Filtro: Las calificaciones de 5 estrellas van directamente a Google Maps para impulsar tu clasificación.",
                    "El Escudo: Las calificaciones de 1-3 estrellas permanecen privadas, enviadas directamente a ti para resolver en silencio.",
                    "El Resultado: Más reseñas, calificaciones más altas y clientes felices."
                ]
            }
        }
    ],
    contact: {
        headline: "¿Listo para ir a Litemode?",
        subheadline: "Cuéntanos sobre tu negocio. Te ayudaremos a construir el conjunto de herramientas perfecto.",
        fields: {
            businessName: {
                label: "Nombre del Negocio",
                placeholder: "Nombre de tu negocio"
            },
            contactName: {
                label: "Nombre de Contacto",
                placeholder: "Tu nombre"
            },
            phone: {
                label: "Número de Teléfono",
                placeholder: "+34 000 000 000"
            },
            interests: {
                label: "¿Qué herramientas te interesan?",
                options: [
                    { value: "controlshift", label: "ControlShift" },
                    { value: "instasite", label: "Insta-Site" },
                    { value: "reviewnet", label: "ReviewNet" }
                ]
            }
        },
        submitButton: "Enviar"
    },
    footer: {
        links: [
            { text: "Política de Privacidad", href: "#" },
            { text: "Términos de Uso", href: "#" },
            { text: "Contacto", href: "#contact" }
        ]
    }
};
