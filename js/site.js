/*
 * Fundación CIC — revival (2026)
 *
 * In 2009 every page repeated ~200 lines of identical markup (Flash menu,
 * Dreamweaver rollover sidebar, partner banner, footer). Here each page only
 * contains its own <main>, and this script builds the shared chrome around it.
 *
 * Revived behaviours:
 *   - Flash Menu Labs top menu + flying.js "floating" menu  -> sticky <nav>
 *   - Dreamweaver MM_swapImage() rollover sidebar           -> same GIFs, CSS-free JS swap
 *   - verocultar() "Leer más" toggle (KevinRoberts GOLD)    -> accessible <button>
 *   - Coda bubble popups (jQuery)                           -> CSS bubble on partner logos
 *   - Facebook share link                                   -> current sharer URL
 */
(function () {
	"use strict";

	// Section list, in the order of the original sidebar (Menu_img/imagenes).
	var SECTIONS = [
		{ id: "inicio",     href: "index.html",      label: "Inicio",                    img: "01", ext: "gif", w: 236, h: 53 },
		{ id: "historia",   href: "historia.html",   label: "Historia",                  img: "02", ext: "gif", w: 236, h: 26 },
		{ id: "quienes",    href: "quiensms.html",   label: "¿Quiénes somos?",           img: "03", ext: "gif", w: 236, h: 26 },
		{ id: "proyectos",  href: "proyectos.html",  label: "Proyectos",                 img: "05", ext: "gif", w: 236, h: 27 },
		{ id: "relaciones", href: "relaciones.html", label: "Relaciones Institucionales", img: "06", ext: "gif", w: 236, h: 24 },
		{ id: "simposio",   href: "Simposio.html",   label: "Simposio Coral 2011",       img: "07", ext: "gif", w: 236, h: 25 },
		{ id: "actcoral",   href: "actcoral.html",   label: "Actividad Coral Mundial",   img: "08", ext: "gif", w: 236, h: 24 },
		{ id: "certamen",   href: "certamen.html",   label: "Certamen Internac. de Coros", img: "09", ext: "gif", w: 236, h: 24 },
		{ id: "contacto",   href: "contacto.html",   label: "Contacto",                  img: "10", ext: "gif", w: 236, h: 26 }
	];
	var EXTRAS = [
		{ id: "libro",      href: "libro.html",      label: "Libro de Visitas",          img: "11", ext: "jpg", w: 236, h: 69 },
		{ id: "calendario", href: "calendario.html", label: "Calendario de actividades", img: "13", ext: "jpg", w: 236, h: 69 }
	];

	// Partner logos: grayscale (ads_0N) -> colour (ads_over_0N) on hover,
	// exactly like the 2009 images/ads_1 slices.
	var PARTNERS = [
		{ n: "04", name: "FIMC / IFCM", url: "https://www.ifcm.net/", w: 112,
		  text: "Federación Internacional para la Música Coral. Marco mundial en el que actúa la Fundación." },
		{ n: "03", name: "OFADAC", url: "http://www.ofadac.org/", w: 110,
		  text: "Organización Federada Argentina de Actividades Corales. La Fundación es Miembro Fundador." },
		{ n: "02", name: "CAMU", url: null, w: 119,
		  text: "Consejo Argentino de la Música (CIM–UNESCO). La Fundación es socia." },
		{ n: "05", name: "CFN", url: "http://www.choralfestivalnetwork.org/", w: 86,
		  text: "Choral Festival Network. La Fundación está afiliada en el ámbito de la FIMC." },
		{ n: "01", name: "ADICORA", url: "http://www.adicora.org.ar/", w: 136,
		  text: "Asociación de Directores de Coro de la República Argentina." }
	];

	var body = document.body;
	var page = body.getAttribute("data-page") || "";
	var updated = body.getAttribute("data-updated") || "";
	var main = document.getElementById("main");
	if (!main) return;

	function el(tag, attrs, html) {
		var e = document.createElement(tag);
		for (var k in attrs || {}) e.setAttribute(k, attrs[k]);
		if (html != null) e.innerHTML = html;
		return e;
	}

	function isCurrent(s) { return s.id === page ? ' aria-current="page"' : ""; }

	// ---------------------------------------------------------------- ribbon
	var ribbon = el("div", { "class": "ribbon", role: "note" },
		"Reconstrucción de archivo (2026) del sitio web de la Fundación C.I.C. de 2009–2011. " +
		"No es el sitio oficial. <a href=\"original-2009/index.html\">Ver el original de 2009</a> · " +
		"<a href=\"https://github.com/kevinch3/fundacioncic-revival\">Código</a>");

	// -------------------------------------------------------------- top nav
	// Short labels so the bar fits on one row; the image sidebar keeps the full list.
	var SHORT = {
		quienes: "Quiénes somos", relaciones: "Relaciones", simposio: "Simposio 2011",
		actcoral: "Coral mundial", certamen: "Certamen", libro: "Libro",
		calendario: "Calendario"
	};
	var links = SECTIONS.slice(1).concat(EXTRAS).map(function (s) {
		return '<li><a href="' + s.href + '"' + isCurrent(s) + ">" + (SHORT[s.id] || s.label) + "</a></li>";
	}).join("");
	var nav = el("nav", { "class": "topnav", "aria-label": "Secciones" },
		'<div class="inner">' +
		'<a class="brand" href="index.html"><img src="assets/layout/img06.jpg" alt="" width="26" height="26">Fundación C.I.C.</a>' +
		'<button class="toggle" type="button" aria-expanded="false">Menú</button>' +
		"<ul>" + links + "</ul></div>");
	nav.querySelector(".toggle").addEventListener("click", function () {
		var open = nav.classList.toggle("open");
		this.setAttribute("aria-expanded", String(open));
	});

	// --------------------------------------------- left: rollover image menu
	function menuItem(s) {
		var src = "assets/menu/image_" + s.img + "." + s.ext;
		var over = "assets/menu/img_over_" + s.img + "." + s.ext;
		return '<li><a href="' + s.href + '"' + isCurrent(s) + ' data-over="' + over + '">' +
			'<img src="' + src + '" alt="' + s.label + '" width="' + s.w + '" height="' + s.h + '"></a></li>';
	}
	var left = el("aside", { "class": "sidebar left", "aria-label": "Secciones (menú gráfico)" },
		"<h2>Secciones</h2>" +
		'<ul class="imgmenu">' + SECTIONS.map(menuItem).join("") + "</ul>" +
		'<ul class="imgmenu extras">' + EXTRAS.map(menuItem).join("") + "</ul>");

	// MM_preloadImages + MM_swapImage, minus the 2009 bugs (the original
	// preloaded "image_over_0N.gif", files that never existed).
	Array.prototype.forEach.call(left.querySelectorAll("a[data-over]"), function (a) {
		var img = a.querySelector("img");
		var normal = img.getAttribute("src");
		var over = a.getAttribute("data-over");
		new Image().src = over;
		function on() { img.src = over; }
		function off() { img.src = normal; }
		a.addEventListener("mouseenter", on);
		a.addEventListener("mouseleave", off);
		a.addEventListener("focus", on);
		a.addEventListener("blur", off);
	});

	// ------------------------------------------------------- right sidebar
	var wall = PARTNERS.map(function (p) {
		var imgs = '<img src="assets/logos/ads_' + p.n + '.png" alt="' + p.name + '" width="' + p.w + '" height="100">' +
			'<img class="over" src="assets/logos/ads_over_' + p.n + '.png" alt="" width="' + p.w + '" height="100">';
		var inner = p.url
			? '<a href="' + p.url + '" rel="noopener" target="_blank">' + imgs + "</a>"
			: '<a href="relaciones.html#' + p.name.toLowerCase() + '">' + imgs + "</a>";
		return '<li class="bubble">' + inner + '<span class="pop" role="tooltip"><b>' + p.name + "</b>" + p.text + "</span></li>";
	}).join("");

	var right = el("aside", { "class": "sidebar right", "aria-label": "Sobre nosotros" },
		'<div><h2>Sobre nosotros</h2>' +
		'<div class="panel"><a href="quiensms.html" class="download" aria-label="Comisión directiva">' +
		'<img src="assets/fotos/Comision_small.jpg" alt="Integrantes de la comisión directiva" width="190" height="90"></a>' +
		'<span class="caption">Comisión directiva</span>' +
		'<a href="quiensms.html">Ver autoridades</a></div></div>' +
		'<div class="panel"><a class="download" href="certamen.html#inscripcion">' +
		'<img src="assets/layout/descargaformulario.png" alt="Descargar formulario de inscripción de coros" width="150" height="90"></a></div>' +
		'<div><h2>Redes</h2><ul class="logowall">' + wall + "</ul></div>");

	// --------------------------------------------------------------- footer
	var footer = el("footer", { "class": "footer" },
		"Fundación C.I.C., Trelew, Chubut — <strong>fundacioncic.org</strong>" +
		"<small>Diseño 2009 basado en «Compressed» de Free CSS Templates (CC BY 2.5).</small>");

	// ------------------------------------------------------------- assemble
	var wrap = el("div", { "class": "page" });
	main.parentNode.insertBefore(wrap, main);
	wrap.appendChild(left);
	wrap.appendChild(main);
	wrap.appendChild(right);
	body.insertBefore(nav, body.firstChild);
	body.insertBefore(ribbon, nav);
	body.insertBefore(el("a", { "class": "skip", href: "#main" }, "Saltar al contenido"), ribbon);
	wrap.parentNode.insertBefore(footer, wrap.nextSibling);

	// -------------------------------------- post header: date + share link
	var post = main.querySelector(".post");
	if (post) {
		var meta = el("p", { "class": "meta-top" },
			(updated ? 'Última modificación: <span class="date">' + updated + "</span>" : "") +
			'<a class="share" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=' +
			encodeURIComponent(location.href) + '">Compartir en Facebook</a>');
		post.insertBefore(meta, post.firstChild);
	}

	// ------------------------------------------------- verocultar() revival
	// Markup: <button class="leermas"> immediately followed by the hidden block.
	Array.prototype.forEach.call(document.querySelectorAll(".leermas"), function (btn, i) {
		var target = btn.nextElementSibling;
		if (!target) return;
		if (!target.id) target.id = "mas-" + i;
		target.hidden = true;
		btn.setAttribute("aria-expanded", "false");
		btn.setAttribute("aria-controls", target.id);
		btn.addEventListener("click", function () {
			var show = target.hidden;
			target.hidden = !show;
			btn.setAttribute("aria-expanded", String(show));
		});
	});
})();
