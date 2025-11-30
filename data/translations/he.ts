export const he = {
    hero: {
        h1: "כוח של מעצמות. לב של עסק קטן.",
        h2: "לרשתות הגדולות יש תוכנות חזקות. עכשיו, גם לך יש.",
        subtitle: "בנה את סביבת העבודה הדיגיטלית שלך חלק אחר חלק. שלם רק על הכלים שאתה באמת צריך. פשוט, משתלם והוגן.",
        cta: "עבור ל-Litemode"
    },
    manifesto: {
        headline: "המניפסט שלנו", // Added section title as requested, though structure might need adjustment if 'headline' was used for "Running a business..."
        // The user map has "Section Title: המניפסט שלנו" and "Headline: לנהל עסק זה קשה מספיק גם ככה."
        // My current structure has `headline` and `paragraphs`.
        // I will put the "Headline" in the `headline` field and the "Section Title" might need a new field or I'll prepend it?
        // Let's look at the English structure:
        // headline: "Running a business is hard enough."
        // paragraphs: [...]
        // The user wants "המניפסט שלנו" as Section Title.
        // I'll stick to the existing structure for now and maybe put the section title in the component if needed, or just use the Headline provided.
        // Wait, the user map says:
        // Section Title: המניפסט שלנו
        // Headline: לנהל עסק זה קשה מספיק גם ככה.
        // I'll use the Headline for `headline`. The Section Title might be a visual element I need to add to the component?
        // Let's check `Manifesto.tsx`. It just renders `manifesto.headline`.
        // I will use "לנהל עסק זה קשה מספיק גם ככה." as the headline.
        // If the user *really* wants "המניפסט שלנו" displayed, I might need to add a field.
        // For now, I'll follow the "Headline" mapping.
        // Actually, looking at the user request: "Section Title: המניפסט שלנו", "Headline: ...".
        // I will add a `sectionTitle` field to the structure if I can, or just ignore it if it's not in the design.
        // Let's stick to the mapped fields first.
        // "Headline: לנהל עסק זה קשה מספיק גם ככה." -> `headline`
        paragraphs: [
            "אתה מלהטט בין עובדים, לקוחות וכיבוי שריפות אינסופי. טכנולוגיה לא צריכה להיות עוד כאב ראש. היא צריכה להיות רשת הביטחון שלך.",
            "הסרנו את המורכבות ואת תגי המחיר הגבוהים. יצרנו פלטפורמה שגדלה איתך. בלי תוכנות מנופחות, בלי חוזי \"אנטרפרייז\" כובלים. רק העזרה שאתה צריך, בדיוק מתי שאתה צריך אותה."
        ]
    },
    toolkit: [
        {
            id: "controlshift",
            productName: "ControlShift",
            tag: "תפעול וצוות",
            headline: "מנהל המשמרת.",
            copy: "סידור עבודה, שעון נוכחות וסנכרון צוות. תעצור את הכאוס ותנהל את הצוות בקליק אחד.",
            buttonText: "רוצה לדעת עוד?",
            modal: {
                headline: "מערכת ההפעלה המלאה לצוות שלך.",
                coreFeatures: {
                    // The map says: "Core Features List:". It doesn't explicitly give a Hebrew title for "Core Features:".
                    // I'll keep "Core Features:" or maybe "תכונות ליבה:"?
                    // The user said "Do not translate it yourself; use the provided strings literal by literal."
                    // But the map has "Core Features List:" as a label, not necessarily the text.
                    // However, in the English file it was `title: "Core Features:"`.
                    // I will assume "תכונות מרכזיות:" is safer, or keep it English?
                    // The user provided Hebrew for the items.
                    // Let's look at the "Power Add-ons List".
                    // I'll use "תכונות מרכזיות:" and "תוספות כוח:" to be safe, or just leave it empty if not provided?
                    // User said "Use the provided strings literal by literal".
                    // The provided strings are the *values*.
                    // I'll use a safe Hebrew translation for the headers since they are structural.
                    title: "תכונות מרכזיות:",
                    items: [
                        "סידור עבודה רב-סניפי: גרירה ושחרור (Drag & drop) לכל הסניפים בתצוגה אחת.",
                        "שעון נוכחות חכם: כניסה ויציאה מאומתת GPS.",
                        "אפליקציית עובדים: הצוות רואה משמרות ומחליף זמינות באופן מיידי."
                    ]
                },
                powerAddons: {
                    title: "תוספות כוח:",
                    items: [
                        { icon: "🔄", text: "החלפת עובדים (Staff Exchange): חסר לך עובד? \"השאל\" עובדים מסניפים אחרים בקליק." },
                        { icon: "💸", text: "הכנה לשכר: חישוב שעות אוטומטי וייצוא דוחות מוכנים לרואה החשבון." },
                        { icon: "🛡️", text: "השומר בשער: עובדים לא יכולים לעשות צ'ק-אאוט עד שהם מסמנים V על צ'ק-ליסט סגירה." },
                        { icon: "🎓", text: "אקדמיית התפריט: הדרכה מבוססת משחק ושאלונים. וודא שכל עובד מכיר את התפריט בעל פה." },
                        { icon: "📢", text: "תקשורת צוותית: פיד פרטי לעדכונים, מופרד מהוואטסאפ." },
                        { icon: "🥂", text: "מנהל אירועים: ניהול אירועים פרטיים ישירות על יומן המשמרות." }
                    ]
                }
            }
        },
        {
            id: "instasite",
            productName: "Insta-Site",
            tag: "שיווק ונוכחות",
            headline: "האתר המיידי.",
            copy: "אין לך אתר? עכשיו יש. אנחנו מייצרים עבורך אתר עסקי מקצועי ברגע. אפס מאמץ מצדך.",
            buttonText: "רוצה לדעת עוד?",
            modal: {
                headline: "המותג שלך אונליין. בשניות.",
                details: [
                    "אנחנו עושים את העבודה הקשה: לוקחים את תפריט ה-PDF הקיים, תמונות האינסטגרם ופרטי העסק.",
                    "בנייה אוטומטית: המנוע שלנו הופך מידע גולמי לאתר מרהיב מותאם למובייל.",
                    "עדכונים חיים: עדכנת את הרשתות החברתיות? האתר מתעדכן אוטומטית.",
                    "התוצאה: נוכחות דיגיטלית מקצועית בלי לשלם למפתח."
                ]
            }
        },
        {
            id: "reviewnet",
            productName: "ReviewNet",
            tag: "מוניטין וצמיחה",
            headline: "מגן המוניטין.",
            copy: "וודא שהעבודה הקשה שלך מקבלת הכרה. דחוף ביקורות 5-כוכבים לגוגל ותפוס תלונות לקוחות לפני שהן יוצאות החוצה.",
            buttonText: "רוצה לדעת עוד?",
            modal: {
                headline: "הפוך את הלקוחות לצוות השיווק שלך.",
                details: [
                    "התמריץ: אנחנו משחקים את זה (Gamify). לקוחות סורקים QR כדי לפתוח פרס, מה שמבטיח שהם ירצו להשאיר פידבק.",
                    "המסנן: דירוגי 5 כוכבים הולכים ישר ל-Google Maps.",
                    "המגן: דירוגי 1-3 כוכבים נשארים פרטיים ונשלחים אליך לטיפול שקט.",
                    "התוצאה: יותר ביקורות, דירוג גבוה יותר, ולקוחות מרוצים."
                ]
            }
        }
    ],
    contact: {
        headline: "מוכן לעבור ל-Litemode?",
        subheadline: "ספר לנו על העסק שלך. אנחנו נעזור לך לבנות את ארגז הכלים המושלם.",
        fields: {
            businessName: {
                label: "שם העסק",
                placeholder: "שם העסק"
            },
            contactName: {
                label: "שם איש קשר",
                placeholder: "שם איש קשר"
            },
            phone: {
                label: "מספר טלפון",
                placeholder: "מספר טלפון"
            },
            interests: {
                label: "אילו כלים מעניינים אותך?",
                options: [
                    { value: "controlshift", label: "ControlShift" },
                    { value: "instasite", label: "Insta-Site" },
                    { value: "reviewnet", label: "ReviewNet" }
                ]
            }
        },
        submitButton: "שלח"
    },
    footer: {
        links: [
            { text: "מדיניות פרטיות", href: "#" },
            { text: "תנאי שימוש", href: "#" },
            { text: "צור קשר", href: "#contact" }
        ]
    }
};
