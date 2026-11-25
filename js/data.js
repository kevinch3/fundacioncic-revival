/*
 * Activity calendar data. Only dates that appear in the 2009–2011 archive (or
 * well-known recurring choral dates) are listed. Months are 1-based.
 * kind: "certamen" (orange) | "festival" (blue)
 */
window.CIC_EVENTS = [
	{ y: 2009, m: 9,  from: 13, to: 19, kind: "certamen",
	  title: "9º Certamen Internacional de Coros",
	  place: "Trelew, Chubut", href: "certamen.html" },
	{ y: 2009, m: 12, from: 13, to: 13, kind: "festival",
	  title: "Día Internacional del Canto Coral",
	  place: "Recitales con los elencos de la región", href: "actcoral.html" },
	{ y: 2010, m: 12, from: 12, to: 12, kind: "festival",
	  title: "Día Internacional del Canto Coral",
	  place: "Recitales con los elencos de la región", href: "actcoral.html" }
];

// The month the calendar opens on (the site was last edited in Oct 2009,
// right after the 9th Certamen).
window.CIC_CALENDAR_START = { y: 2009, m: 9 };
