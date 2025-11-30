export const de = {
    hero: {
        h1: "Unternehmenskraft. Kleinunternehmerherz.",
        h2: "Die großen Ketten haben leistungsstarke Software. Jetzt hast du sie auch.",
        subtitle: "Bauen Sie Ihren digitalen Arbeitsbereich Stück für Stück auf. Bezahle nur für die Tools, die du tatsächlich nutzt. Einfach, erschwinglich und fair.",
        cta: "Zu Litemode wechseln"
    },
    manifesto: {
        headline: "Ein Unternehmen zu führen ist schwer genug.",
        paragraphs: [
            "Sie jonglieren mit Mitarbeitern, Kunden und endlosen Problemen. Technologie sollte nicht noch ein Kopfschmerz sein. Sie sollte Ihr Sicherheitsnetz sein.",
            "Wir haben die Komplexität und die hohen Preise eliminiert. Wir haben eine Plattform geschaffen, die mit Ihnen wächst. Keine aufgeblähte Software, keine 'Enterprise'-Verträge. Nur die Hilfe, die Sie brauchen, genau dann, wenn Sie sie brauchen."
        ]
    },
    toolkit: [
        {
            id: "controlshift",
            productName: "ControlShift",
            tag: "Betrieb & Personal",
            headline: "Der Schichtmanager.",
            copy: "Zeitplanung, Zeiterfassung und Team-Synchronisation. Stoppen Sie das Chaos und verwalten Sie Ihr Team mit einem Klick.",
            buttonText: "Mehr erfahren?",
            modal: {
                headline: "Das komplette Betriebssystem für Ihr Team.",
                coreFeatures: {
                    title: "Kernfunktionen:",
                    items: [
                        "Multi-Standort-Planer: Ziehen und ablegen Sie Schichten für alle Ihre Filialen in einer Ansicht.",
                        "Intelligente Zeiterfassung: GPS-verifizierte Ein-/Ausstempelung.",
                        "Mitarbeiter-App: Mitarbeiter sehen Schichten und tauschen sofort Verfügbarkeiten aus."
                    ]
                },
                powerAddons: {
                    title: "Power-Add-ons:",
                    items: [
                        { icon: "🔄", text: "Personalaustausch: Zu wenig Personal? Leihen Sie sich Mitarbeiter von anderen Filialen mit einem Klick." },
                        { icon: "💸", text: "Lohnabrechnung: Automatische Stundenberechnung und Export fertiger Berichte für Ihren Buchhalter." },
                        { icon: "🛡️", text: "Der Türsteher: Mitarbeiter können erst ausstempeln, wenn sie ihre Schließliste abgehakt haben." },
                        { icon: "🎓", text: "Menü-Akademie: Gamifiziertes Training & regelmäßige Quiz. Stellen Sie sicher, dass jedes Teammitglied das Menü auswendig kennt." },
                        { icon: "📢", text: "Team-Kommunikation: Ein privater Feed für Updates, getrennt von WhatsApp." },
                        { icon: "🥂", text: "Event-Manager: Verwalten Sie private Events direkt in Ihrem Schichtkalender." }
                    ]
                }
            }
        },
        {
            id: "instasite",
            productName: "Insta-Site",
            tag: "Marketing & Präsenz",
            headline: "Die Sofort-Website.",
            copy: "Keine Website? Jetzt schon. Wir erstellen sofort eine professionelle Unternehmenswebsite für Sie. Null Aufwand erforderlich.",
            buttonText: "Mehr erfahren?",
            modal: {
                headline: "Ihre Marke, online. In Sekunden.",
                details: [
                    "Wir erledigen die schwere Arbeit: Wir nehmen Ihre bestehende PDF-Speisekarte, Ihre Instagram-Fotos und Ihre Geschäftsdaten.",
                    "Automatischer Aufbau: Unsere Engine verwandelt Rohdaten in eine beeindruckende, mobilfreundliche Website.",
                    "Live-Updates: Social Media aktualisiert? Ihre Website auch.",
                    "Das Ergebnis: Eine professionelle digitale Präsenz ohne Entwickler zu bezahlen."
                ]
            }
        },
        {
            id: "reviewnet",
            productName: "ReviewNet",
            tag: "Reputation & Wachstum",
            headline: "Der Reputationsschild.",
            copy: "Stellen Sie sicher, dass Ihre harte Arbeit bemerkt wird. Senden Sie 5-Sterne-Bewertungen an Google und fangen Sie Kundenbeschwerden ab, bevor sie öffentlich werden.",
            buttonText: "Mehr erfahren?",
            modal: {
                headline: "Verwandeln Sie Kunden in Ihr Marketingteam.",
                details: [
                    "Der Anreiz: Wir bitten nicht nur um einen Gefallen. Wir machen es spielerisch. Kunden scannen den QR-Code, um eine Belohnung freizuschalten.",
                    "Der Filter: 5-Sterne-Bewertungen gehen direkt zu Google Maps, um Ihr Ranking zu steigern.",
                    "Der Schild: 1-3-Sterne-Bewertungen bleiben privat, direkt an Sie gesendet, um sie in Ruhe zu lösen.",
                    "Das Ergebnis: Mehr Bewertungen, höhere Ratings und glückliche Kunden."
                ]
            }
        }
    ],
    contact: {
        headline: "Bereit für Litemode?",
        subheadline: "Erzählen Sie uns von Ihrem Unternehmen. Wir helfen Ihnen, das perfekte Toolkit zusammenzustellen.",
        fields: {
            businessName: {
                label: "Firmenname",
                placeholder: "Ihr Firmenname"
            },
            contactName: {
                label: "Kontaktname",
                placeholder: "Ihr Name"
            },
            phone: {
                label: "Telefonnummer",
                placeholder: "+49 000 000 0000"
            },
            interests: {
                label: "Welche Tools interessieren Sie?",
                options: [
                    { value: "controlshift", label: "ControlShift" },
                    { value: "instasite", label: "Insta-Site" },
                    { value: "reviewnet", label: "ReviewNet" }
                ]
            }
        },
        submitButton: "Senden"
    },
    footer: {
        links: [
            { text: "Datenschutz", href: "#" },
            { text: "Nutzungsbedingungen", href: "#" },
            { text: "Kontakt", href: "#contact" }
        ]
    }
};
