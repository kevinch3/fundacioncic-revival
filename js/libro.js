/*
 * Libro de Visitas (guestbook).
 *
 * The 2009 site linked to a guestbook that was never built. GitHub Pages has
 * no backend, so entries are stored in the visitor's own browser
 * (localStorage). They are never sent anywhere — the page says so.
 * All user text is rendered with textContent, never innerHTML.
 */
(function () {
	"use strict";
	var KEY = "cic-libro-v1";
	var MAX_NAME = 60, MAX_MSG = 600;

	var form = document.getElementById("libro-form");
	var list = document.getElementById("libro-entries");
	var msg = document.getElementById("libro-msg");
	if (!form || !list) return;

	function load() {
		try { return JSON.parse(localStorage.getItem(KEY)) || []; }
		catch (e) { return []; }
	}
	function save(entries) {
		try { localStorage.setItem(KEY, JSON.stringify(entries)); return true; }
		catch (e) { return false; }
	}

	// Returns an error message (string) or null when the entry is acceptable.
	function validate(name, city, text) {
		if (!name) return "Por favor, escribí tu nombre.";
		if (text.length < 3) return "El mensaje es demasiado corto.";
		if (name.length > MAX_NAME || city.length > MAX_NAME) return "Nombre o ciudad demasiado largos.";
		if (text.length > MAX_MSG) return "El mensaje supera los " + MAX_MSG + " caracteres.";
		if ((text.match(/https?:\/\//g) || []).length > 1) return "Por favor, no incluyas más de un enlace.";
		return null;
	}

	function render() {
		var entries = load();
		list.textContent = "";
		if (!entries.length) {
			var empty = document.createElement("li");
			empty.textContent = "Todavía no hay firmas en este navegador. ¡Sé el primero en dejar tu saludo!";
			list.appendChild(empty);
			return;
		}
		entries.slice().reverse().forEach(function (e) {
			var li = document.createElement("li");
			var who = document.createElement("span");
			who.className = "who";
			who.textContent = e.name + (e.city ? " — " + e.city : "");
			var when = document.createElement("span");
			when.className = "when";
			when.textContent = new Date(e.t).toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" });
			var p = document.createElement("p");
			p.textContent = e.text;
			li.appendChild(who); li.appendChild(when); li.appendChild(p);
			list.appendChild(li);
		});
	}

	form.addEventListener("submit", function (ev) {
		ev.preventDefault();
		var name = form.nombre.value.trim();
		var city = form.ciudad.value.trim();
		var text = form.mensaje.value.trim();
		var err = validate(name, city, text);
		if (err) { msg.textContent = err; return; }
		var entries = load();
		entries.push({ name: name, city: city, text: text, t: Date.now() });
		if (!save(entries)) { msg.textContent = "No se pudo guardar (¿navegación privada?)."; return; }
		form.reset();
		msg.textContent = "¡Gracias por firmar el libro!";
		render();
	});

	var clear = document.getElementById("libro-clear");
	if (clear) clear.addEventListener("click", function () {
		try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
		msg.textContent = "Se borraron las firmas guardadas en este navegador.";
		render();
	});

	render();
})();
