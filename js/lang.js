const getLangStr = (key) => {
    return lang[select_language.value][key]
} 
const lang = {
    "English": {
        "subtitle": "...Quickly generate simple calendars",
        "starts_at": "Calendar starts at...",
        "ends_at": "and ends at...",
        "generate": "Generate",
        "day": ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        "month": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]
    },
    "Deutsch": {
        "subtitle": "...Schnell, einfache Kalender generieren",
        "starts_at": "Kalender beginnt im...",
        "ends_at": "und endet im...",
        "generate": "Generieren",
        "day": ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
        "month": [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember"
        ]
    },

    "Polski": {
        "subtitle": "...Szybko generuj proste kalendarze",
        "starts_at": "Kalendarz zaczyna się...",
        "ends_at": "a kończy...",
        "generate": "Generuj",
        "day": ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"],
        "month": [
            "Styczeń",
            "Luty",
            "Marzec",
            "Kwiecień",
            "Maj",
            "Czerwiec",
            "Lipiec",
            "Sierpień",
            "Wrzesień",
            "Październik",
            "Listopad",
            "Grudzień"
        ]
    }
}