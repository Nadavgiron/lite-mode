export const en = {
    hero: {
        h1: "Enterprise power. Small business heart.",
        h2: "The big chains have powerful software. Now, so do you.",
        subtitle: "Build your own digital workspace piece by piece. Pay only for the tools you actually use. Simple, affordable, and fair.",
        cta: "Go Litemode"
    },
    manifesto: {
        headline: "Running a business is hard enough.",
        paragraphs: [
            "You are juggling employees, customers, and endless fires to put out. Technology shouldn't be another headache. It should be your safety net.",
            "We stripped away the complexity and the high price tags. We created a platform that grows with you. No bloatware, no 'enterprise' contracts. Just the help you need, exactly when you need it."
        ]
    },
    toolkit: [
        {
            id: "controlshift",
            productName: "ControlShift",
            tag: "Operations & Staff",
            headline: "The Shift Manager.",
            copy: "Scheduling, time tracking, and team syncing. Stop the chaos and manage your team with a single click.",
            buttonText: "Want to know more?",
            modal: {
                headline: "The complete operating system for your team.",
                coreFeatures: {
                    title: "Core Features:",
                    items: [
                        "Multi-Site Scheduler: Drag & drop shifts for all your branches in one view.",
                        "Smart Time Clock: GPS-verified clock in/out.",
                        "Employee App: Staff view shifts and trade availability instantly."
                    ]
                },
                powerAddons: {
                    title: "Power Add-ons:",
                    items: [
                        { icon: "🔄", text: "Staff Exchange: Short on staff? Borrow employees from other branches with a click." },
                        { icon: "💸", text: "Payroll Prep: Auto-calculate hours and export ready-made reports for your accountant." },
                        { icon: "🛡️", text: "The Gatekeeper: Employees can't clock out until they tick off their closing checklist." },
                        { icon: "🎓", text: "Menu Academy: Gamified training & periodic quizzes. Ensure every staff member—new or veteran—knows the menu by heart, always." },
                        { icon: "📢", text: "Team Comms: A private feed for updates, separated from WhatsApp." },
                        { icon: "🥂", text: "Event Manager: Manage private events directly on your shift calendar." }
                    ]
                }
            }
        },
        {
            id: "instasite",
            productName: "Insta-Site",
            tag: "Marketing & Presence",
            headline: "The Instant Website.",
            copy: "Don't have a website? Now you do. We generate a professional business site for you instantly. Zero effort required.",
            buttonText: "Want to know more?",
            modal: {
                headline: "Your brand, online. In seconds.",
                details: [
                    "We do the heavy lifting: We take your existing PDF menu, your Instagram photos, and your business details.",
                    "Automatic Build: Our engine transforms raw info into a stunning, mobile-friendly website.",
                    "Live Updates: Update your socials? Your site updates too.",
                    "The Result: A professional digital presence without paying a developer."
                ]
            }
        },
        {
            id: "reviewnet",
            productName: "ReviewNet",
            tag: "Reputation & Growth",
            headline: "The Reputation Shield.",
            copy: "Make sure your hard work gets noticed. Push 5-star reviews to Google and catch customer complaints before they go public.",
            buttonText: "Want to know more?",
            modal: {
                headline: "Turn customers into your marketing team.",
                details: [
                    "The Incentive (The Hook): We don't just ask for a favor. We gamify it. Customers scan the QR code to unlock a reward (like a free dessert or raffle entry), ensuring they want to leave feedback.",
                    "The Filter: 5-star ratings go straight to Google Maps to boost your rank.",
                    "The Shield: 1-3 star ratings stay private, sent directly to you to solve quietly.",
                    "The Result: More reviews, higher ratings, and happy customers."
                ]
            }
        }
    ],
    contact: {
        headline: "Ready to Go Litemode?",
        subheadline: "Tell us about your business. We'll help you build the perfect toolkit.",
        fields: {
            businessName: {
                label: "Business Name",
                placeholder: "Your business name"
            },
            contactName: {
                label: "Contact Name",
                placeholder: "Your name"
            },
            phone: {
                label: "Phone Number",
                placeholder: "+1 (555) 000-0000"
            },
            interests: {
                label: "Which tools interest you?",
                options: [
                    { value: "controlshift", label: "ControlShift" },
                    { value: "instasite", label: "Insta-Site" },
                    { value: "reviewnet", label: "ReviewNet" }
                ]
            }
        },
        submitButton: "Send"
    },
    footer: {
        links: [
            { text: "Privacy Policy", href: "#" },
            { text: "Terms of Use", href: "#" },
            { text: "Contact", href: "#contact" }
        ]
    }
};
