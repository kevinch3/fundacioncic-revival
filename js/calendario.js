/*
 * Month-view calendar. The 2009 "Compressed" template already shipped
 * #calendar styles (a WordPress-style widget) that were never used; this
 * renders that widget for real, driven by js/data.js.
 */
(function () {
	"use strict";
	var root = document.getElementById("calendar");
	var agenda = document.getElementById("agenda");
	if (!root || !window.CIC_EVENTS) return;

	var events = window.CIC_EVENTS;
	var cur = { y: window.CIC_CALENDAR_START.y, m: window.CIC_CALENDAR_START.m };
	var MONTHS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
		"agosto", "septiembre", "octubre", "noviembre", "diciembre"];
	var DAYS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sá", "Do"];

	function eventsOn(y, m, d) {
		return events.filter(function (e) { return e.y === y && e.m === m && d >= e.from && d <= e.to; });
	}

	function render() {
		var y = cur.y, m = cur.m;
		var first = new Date(y, m - 1, 1);
		var offset = (first.getDay() + 6) % 7;          // Monday-first weeks
		var days = new Date(y, m, 0).getDate();

		var html = '<div class="head">' +
			'<button class="btn secondary" type="button" data-step="-1" aria-label="Mes anterior">&laquo;</button>' +
			'<strong aria-live="polite">' + MONTHS[m - 1] + " " + y + "</strong>" +
			'<button class="btn secondary" type="button" data-step="1" aria-label="Mes siguiente">&raquo;</button></div>' +
			"<table><thead><tr>" + DAYS.map(function (d) { return "<th scope=\"col\">" + d + "</th>"; }).join("") +
			"</tr></thead><tbody><tr>";

		var cell = 0;
		for (; cell < offset; cell++) html += '<td class="out"></td>';
		for (var d = 1; d <= days; d++, cell++) {
			if (cell && cell % 7 === 0) html += "</tr><tr>";
			var evs = eventsOn(y, m, d);
			if (evs.length) {
				var t = evs.map(function (e) { return e.title; }).join(" · ");
				html += '<td class="ev ' + evs[0].kind + '" title="' + t + '">' + d + "</td>";
			} else {
				html += "<td>" + d + "</td>";
			}
		}
		while (cell % 7) { html += '<td class="out"></td>'; cell++; }
		html += "</tr></tbody></table>";
		root.innerHTML = html;

		Array.prototype.forEach.call(root.querySelectorAll("[data-step]"), function (b) {
			b.addEventListener("click", function () {
				cur.m += Number(b.getAttribute("data-step"));
				if (cur.m < 1) { cur.m = 12; cur.y--; }
				if (cur.m > 12) { cur.m = 1; cur.y++; }
				render();
			});
		});
	}

	function renderAgenda() {
		agenda.innerHTML = events.map(function (e) {
			var when = e.from === e.to
				? e.from + " de " + MONTHS[e.m - 1] + " de " + e.y
				: "Del " + e.from + " al " + e.to + " de " + MONTHS[e.m - 1] + " de " + e.y;
			return '<li><span class="when">' + when + '</span><a href="' + e.href + '">' + e.title + "</a> — " + e.place + "</li>";
		}).join("");
	}

	render();
	if (agenda) renderAgenda();
})();
