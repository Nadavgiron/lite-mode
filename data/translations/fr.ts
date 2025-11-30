export const fr = {
    hero: {
        h1: "Puissance d'entreprise. Cœur de petite entreprise.",
        h2: "Les grandes chaînes ont des logiciels puissants. Maintenant, vous aussi.",
        subtitle: "Construisez votre espace de travail numérique pièce par pièce. Payez uniquement pour les outils que vous utilisez réellement. Simple, abordable et équitable.",
        cta: "Passer à Litemode"
    },
    manifesto: {
        headline: "Gérer une entreprise est déjà assez difficile.",
        paragraphs: [
            "Vous jonglez entre employés, clients et problèmes sans fin. La technologie ne devrait pas être un autre casse-tête. Elle devrait être votre filet de sécurité.",
            "Nous avons éliminé la complexité et les prix élevés. Nous avons créé une plateforme qui grandit avec vous. Pas de logiciels gonflés, pas de contrats 'entreprise'. Juste l'aide dont vous avez besoin, exactement quand vous en avez besoin."
        ]
    },
    toolkit: [
        {
            id: "controlshift",
            productName: "ControlShift",
            tag: "Opérations & Personnel",
            headline: "Le Gestionnaire de Quarts.",
            copy: "Planification, suivi du temps et synchronisation d'équipe. Arrêtez le chaos et gérez votre équipe en un clic.",
            buttonText: "En savoir plus?",
            modal: {
                headline: "Le système d'exploitation complet pour votre équipe.",
                coreFeatures: {
                    title: "Fonctionnalités principales:",
                    items: [
                        "Planificateur Multi-Sites: Glissez-déposez les quarts pour toutes vos succursales dans une vue.",
                        "Horloge Intelligente: Pointage entrée/sortie vérifié par GPS.",
                        "App Employés: Le personnel voit les quarts et échange les disponibilités instantanément."
                    ]
                },
                powerAddons: {
                    title: "Modules complémentaires:",
                    items: [
                        { icon: "🔄", text: "Échange de Personnel: Manque de personnel? Empruntez des employés d'autres succursales en un clic." },
                        { icon: "💸", text: "Préparation de Paie: Calcul automatique des heures et export de rapports prêts pour votre comptable." },
                        { icon: "🛡️", text: "Le Gardien: Les employés ne peuvent pas pointer tant qu'ils n'ont pas coché leur liste de fermeture." },
                        { icon: "🎓", text: "Académie du Menu: Formation gamifiée et quiz périodiques. Assurez-vous que chaque membre de l'équipe connaît le menu par cœur." },
                        { icon: "📢", text: "Communications d'Équipe: Un fil privé pour les mises à jour, séparé de WhatsApp." },
                        { icon: "🥂", text: "Gestionnaire d'Événements: Gérez les événements privés directement sur votre calendrier de quarts." }
                    ]
                }
            }
        },
        {
            id: "instasite",
            productName: "Insta-Site",
            tag: "Marketing & Présence",
            headline: "Le Site Web Instantané.",
            copy: "Pas de site web? Maintenant oui. Nous générons un site professionnel pour vous instantanément. Zéro effort requis.",
            buttonText: "En savoir plus?",
            modal: {
                headline: "Votre marque, en ligne. En secondes.",
                details: [
                    "Nous faisons le gros du travail: Nous prenons votre menu PDF existant, vos photos Instagram et vos détails commerciaux.",
                    "Construction Automatique: Notre moteur transforme les informations brutes en un site web époustouflant et adapté aux mobiles.",
                    "Mises à Jour en Direct: Vous mettez à jour vos réseaux sociaux? Votre site aussi.",
                    "Le Résultat: Une présence numérique professionnelle sans payer de développeur."
                ]
            }
        },
        {
            id: "reviewnet",
            productName: "ReviewNet",
            tag: "Réputation & Croissance",
            headline: "Le Bouclier de Réputation.",
            copy: "Assurez-vous que votre travail acharné soit remarqué. Poussez les avis 5 étoiles vers Google et attrapez les plaintes avant qu'elles ne deviennent publiques.",
            buttonText: "En savoir plus?",
            modal: {
                headline: "Transformez les clients en votre équipe marketing.",
                details: [
                    "L'Incitatif: Nous ne demandons pas juste une faveur. Nous le gamifions. Les clients scannent le code QR pour débloquer une récompense.",
                    "Le Filtre: Les notes 5 étoiles vont directement sur Google Maps pour améliorer votre classement.",
                    "Le Bouclier: Les notes 1-3 étoiles restent privées, envoyées directement à vous pour résoudre en silence.",
                    "Le Résultat: Plus d'avis, de meilleures notes et des clients heureux."
                ]
            }
        }
    ],
    contact: {
        headline: "Prêt à passer à Litemode?",
        subheadline: "Parlez-nous de votre entreprise. Nous vous aiderons à créer la boîte à outils parfaite.",
        fields: {
            businessName: {
                label: "Nom de l'Entreprise",
                placeholder: "Nom de votre entreprise"
            },
            contactName: {
                label: "Nom du Contact",
                placeholder: "Votre nom"
            },
            phone: {
                label: "Numéro de Téléphone",
                placeholder: "+33 0 00 00 00 00"
            },
            interests: {
                label: "Quels outils vous intéressent?",
                options: [
                    { value: "controlshift", label: "ControlShift" },
                    { value: "instasite", label: "Insta-Site" },
                    { value: "reviewnet", label: "ReviewNet" }
                ]
            }
        },
        submitButton: "Envoyer"
    },
    footer: {
        links: [
            { text: "Politique de Confidentialité", href: "#" },
            { text: "Conditions d'Utilisation", href: "#" },
            { text: "Contact", href: "#contact" }
        ]
    }
};
