# Fundación CIC — Revival

**A reconstruction of the 2009–2011 website of Fundación “C.I.C.”, the non-profit from Trelew (Chubut, Patagonia Argentina) behind the _Certamen Internacional de Coros de Trelew_, an international choir competition.**

🔗 **Live:** https://kevinch3.github.io/fundacioncic-revival/
🗄️ **The original 2009 files, untouched:** [`original-2009/`](original-2009/) ([view it rendered](https://kevinch3.github.io/fundacioncic-revival/original-2009/index.html))

> This is an archival reconstruction made in 2026 by the site's original author. It is **not** the official site of the Fundación and has no official affiliation with it. The original domain, `fundacioncic.org`, is no longer online.

---

## Table of contents

1. [What the Fundación C.I.C. is](#1-what-the-fundación-cic-is)
2. [What the 2009 website was](#2-what-the-2009-website-was)
3. [What was found in the archive](#3-what-was-found-in-the-archive)
4. [What this revival does](#4-what-this-revival-does)
5. [Section by section](#5-section-by-section)
6. [Original vs. revival: technology](#6-original-vs-revival-technology)
7. [What is original and what is reconstructed](#7-what-is-original-and-what-is-reconstructed)
8. [Project structure](#8-project-structure)
9. [Running locally](#9-running-locally)
10. [Deploying to GitHub Pages](#10-deploying-to-github-pages)
11. [Editing content](#11-editing-content)
12. [Credits and licences](#12-credits-and-licences)

---

## 1. What the Fundación C.I.C. is

The archive's own text describes it this way. The **Fundación “C.I.C.”** was created in **1997** in Trelew, Chubut, Argentina. Its main purpose was to support and promote the **Certamen Internacional de Coros de Trelew**, an international choir competition, and all related activities.

- **Legal status:** a non-governmental, philanthropic, cultural and non-profit organisation. *Personería Jurídica Nº 1761/97*, with statutes approved by *Resolución 96/97* of the Chubut *Inspección General de Justicia*.
- **Leadership:** a Board of Directors (*Consejo de Administración*) whose permanent president is **Prof. Alejandro Daniel Garavano**.
- **Networks:**
  - founding member of **OFADAC** (Organización Federada Argentina de Actividades Corales);
  - member of **CAMU** (Consejo Argentino de la Música, CIM–UNESCO);
  - affiliated with the **CFN** (Choral Festival Network) within the framework of the **FIMC/IFCM** (International Federation for Choral Music);
  - linked to **ADICORA** (Asociación de Directores de Coro de la República Argentina).
- **Activities:** concerts and tours, professional development courses, sitting on juries, publications, and a specialist **choral library** of scores, books, magazines and recordings. The library grew from material that arrived with each competition.
- **Projects it ran:**
  - the children's and youth festival *“Chubut Canta a la Naturaleza”* (1998);
  - *Primavera Coral del Chubut* (2000, 2002);
  - the *Conciertos de Invierno / de Primavera* series (2000–2003);
  - *Trelew Coral 2001*;
  - co-production of *AUTOSUR 2003*;
  - a yearly celebration of the **International Day of Choral Singing**.
- **The 9th Certamen** ran **13–19 September 2009**. Its emblem is a smiling frog inside a golden seal.

## 2. What the 2009 website was

The folder was called `Fundacion CIC 2.0`: a second-generation site that was meant to replace an earlier one. A leftover `REDIR.html` points to `fundacioncic.org/v2`. The last-modified stamp on the pages reads **15/10/09**, and a bundled media player is dated January 2011. The site was therefore worked on between late 2009 and early 2011, around the *Simposio Coral 2011*.

The build is a typical small-NGO site of that era:

| Layer | 2009 implementation |
|---|---|
| Layout | The [Free CSS Templates](http://www.freecsstemplates.org) **“Compressed”** template (May 2008, CC BY 2.5): three fixed columns, 960px wide, Georgia serif, sky-blue gradients, built for 1024×768 screens |
| Main menu | A Flash menu (`menu.swf`, 800×90) made with **Flash Menu Labs**. Its config (`menu_data.xml`) is obfuscated. It came with an MP3 hover sound and `flying.js`, which made the menu *float* down the page as you scrolled (IE/Netscape-era code) |
| Sidebar menu | Image buttons sliced from a Photoshop file (`Menu_img/Menu.psd`). Dreamweaver's `MM_swapImage()` swapped blue buttons for violet ones on hover |
| Partners | A 640×75 image map in the header linking to IFCM, OFADAC, CAMU, CFN and ADICORA. A `LOGOS LATERAL` slice set and an `ads_1` set held grayscale-to-colour rollover logos |
| “Leer más” | A home-made toggle, `verocultar()`, tagged in the source as *“Scripts KevinRoberts edición GOLD”* |
| Social | A Facebook “share” link through the 2009 `sharer.php` and an fbcdn icon |
| Video | A JW Player 5.4 Flash player streaming `SimposioCora2011.flv` from the Fundación's server |
| Extras in the folder | jQuery 1.4.4, a jQuery **Coda-style bubble popup** demo, a Shadowbox lightbox zip, and an *“En construcción / Out of Service”* page |

## 3. What was found in the archive

Working through the folder showed what survived and what was missing:

- **All 10 section pages were identical.** `historia.html`, `quiensms.html`, `proyectos.html`, `relaciones.html`, `Simposio.html`, `actcoral.html`, `certamen.html`, `contacto.html`, `libro.html` and `calendario.html` are byte-for-byte copies of a single template (11,892 bytes each). Each repeats the home page's “about” text. The site was mid-construction: the navigation and graphics were done, the per-section content was not.
- **The Flash menu cannot be recovered.** `menu.swf` needs Flash, which browsers dropped in 2020, and `menu_data.xml` is obfuscated. The labels were rebuilt from the sidebar's image buttons, which show the same sections.
- **Lost external resources:** the video (`SimposioCora2011.flv`), the registration form behind the *“Descargar formulario de inscripción de coros”* button, the list of board members (*“Ver autoridades”*), the guestbook backend, and images hot-linked from `fundacioncic.org`.
- **Intact:** the stylesheet, every sliced graphic and its hover state, the photos, the partner logos, the Certamen 2009 banner, the Photoshop sources and the institutional text.
- **Small bugs, kept as found:**
  - `MM_preloadImages()` preloads `image_over_0N.gif` files that never existed;
  - the CSS has a typo, `padding-left0:px`;
  - one file is named `banner-red-inf-glanco.jpg` (for *blanco*);
  - another is named `certanen-foto.jpg` (for *certamen*).

## 4. What this revival does

The goal is to **finish the site the way it seems to have been heading in 2009**, using only technology that runs today on a static host. It is an interpretation, not a pixel replica.

- **The look stays.** It keeps:
  - the original palette (`#549DC7` blue, `#E58C43` orange) and Georgia typography;
  - the framed content card with the large *FUNDACIÓN CIC* logo header (`img02.jpg`), its side rails (`img03.jpg`) and bottom cap (`img04.jpg`);
  - the sky gradient (`img01.jpg`) and the footer cap (`img05.jpg`);
  - the exact sliced sidebar buttons, with their blue-to-violet rollovers;
  - the bordered *“Sobre nosotros”* panel, the *“Descargar formulario”* badge, and the partner logos with their grayscale-to-colour hover.
- **Flash is gone.** The Flash menu and its “floating” script are replaced by a sticky HTML nav bar that collapses into a *Menú* button on small screens.
- **Every section has content.** Each section page now has its own text, built from facts in the archive (see [§7](#7-what-is-original-and-what-is-reconstructed)).
- **The planned features work:**
  - **Leer más** is a real `<button>` with `aria-expanded`;
  - **Coda bubble popups** are rebuilt in plain CSS on the partner logos;
  - the **calendar** comes from the WordPress-style `#calendar` styles that shipped unused with the template, and is now a navigable month view;
  - the **guestbook** stores entries in the visitor's own browser, since there is no server;
  - the **Facebook share** link uses the current sharer URL;
  - the **“En construcción”** image is now the site's **404 page**.
- **It is responsive and accessible.** The fixed 960px float layout became a CSS grid that works down to phone width. Other changes:
  - a skip link and alt text everywhere;
  - keyboard-reachable rollovers;
  - darker body text for contrast;
  - `prefers-reduced-motion` support.
- **Original URLs are kept.** The same file names are used (`historia.html`, `Simposio.html` with a capital S, `quiensms.html`…), so links to the old site's paths still work.
- **The shared layout is generated, not copied.** In 2009 each page repeated about 200 lines of header, menu and footer markup. Now each page holds only its own `<main>`, and [`js/site.js`](js/site.js) builds the shared chrome around it.
- **Honest labelling.** A ribbon on every page states that this is an archival reconstruction and links to the untouched original. It is the only disclaimer on the site; this README is where reconstructed and lost material is documented.

## 5. Section by section

| Page | 2009 state | Revival |
|---|---|---|
| `index.html` — Inicio | Certamen 2009 banner + “about” text with *Leer más* | Same, verbatim, plus “Destacados” cards |
| `historia.html` — Historia | Copy of home | Photo + timeline 1997 → 2011 built from the archive's text |
| `quiensms.html` — ¿Quiénes somos? | Copy of home | Legal status, board president, committee photo, institutional memberships |
| `proyectos.html` — Proyectos | Copy of home | Ongoing work areas (library, concerts, courses, juries, publications) and past projects |
| `relaciones.html` — Relaciones Institucionales | Copy of home | One card per partner (FIMC/IFCM, CFN, OFADAC, CAMU, ADICORA), with the 2009 links |
| `Simposio.html` — Simposio Coral 2011 | Copy of home; separate Flash video page | Symposium banner, context, and a stand-in for the lost video |
| `actcoral.html` — Actividad Coral Mundial | Copy of home | International Day of Choral Singing, festival network, national networks |
| `certamen.html` — Certamen Internac. de Coros | Copy of home | 9th edition 2009 (13–19 Sept, Trelew, Teatro Verdi), photos, the frog emblem, registration section |
| `contacto.html` — Contacto | Copy of home | Address block + form (shows a message; does not send — see below) |
| `libro.html` — Libro de Visitas | Copy of home | Working guestbook stored in `localStorage` |
| `calendario.html` — Calendario | Copy of home | Month-view calendar + agenda list, driven by `js/data.js` |
| `404.html` | `Construcc.html` (“En construcción / Out of Service”) | The same artwork as the GitHub Pages 404 |

## 6. Original vs. revival: technology

| Original (2009) | Revival (2026) |
|---|---|
| Flash Menu Labs `menu.swf` + obfuscated XML | Sticky HTML `<nav>`, generated by `js/site.js` |
| `flying.js` floating menu (IE/Netscape sniffing) | `position: sticky` |
| Dreamweaver `MM_swapImage()` / `MM_preloadImages()` | About 15 lines of plain JS using the **same GIFs**, with focus support |
| `verocultar()` toggle on an `<a href="javascript:void(0)">` | `<button class="leermas" aria-expanded>` |
| jQuery 1.4.4 + Coda popup demo | No dependencies; CSS bubble tooltip |
| Header image map of partner logos | Partner logo column with grayscale-to-colour hover + bubble |
| JW Player Flash `.flv` | Labelled placeholder (the video file did not survive) |
| Facebook `share.php` + fbcdn icon | `facebook.com/sharer/sharer.php` + CSS icon |
| Fixed 960px, 3 float columns | CSS grid; 3 → 2 → 1 columns |
| XHTML 1.0 Strict doctype, `<div align>` | HTML5, semantic `<main>`, `<nav>`, `<aside>`, `<figure>` |
| Server-side guestbook (planned) | `localStorage`, rendered with `textContent` (XSS-safe) |

No build step, no framework, no external requests. The site is plain HTML, CSS and JavaScript.

## 7. What is original and what is reconstructed

The guiding rule: **no invented facts about real people or events.** Where the archive is silent, the page leaves the gap rather than filling it in.

**Verbatim or directly from the 2009–2011 archive:**
- all institutional text: founding, legal numbers, president, memberships, activities and project list;
- the dates of the 9th Certamen;
- the tags, including *Teatro Verdi*;
- every image, logo and partner URL;
- the section names and their order;
- the per-page “Última modificación: 15/10/09” stamp.

**Written for the revival** (all framed as context and drawn from the archived facts):
- the section intros and the timeline layout;
- the descriptions of the partner organisations;
- the general description of the *World Symposium on Choral Music*, and the statement that its 2011 edition was held in Puerto Madryn, Chubut. **this has not been verified against IFCM sources**;
- the International Day of Choral Singing dates in the calendar, calculated as the second Sunday of December.

**Lost:** the video, the registration form and rules, the board member list, the guestbook entries, and the Fundación's current contact details.

## 8. Project structure

```
fundacioncic-revival/
├── index.html            # Inicio
├── historia.html         # Historia
├── quiensms.html         # ¿Quiénes somos?   (original file name kept)
├── proyectos.html        # Proyectos
├── relaciones.html       # Relaciones Institucionales
├── Simposio.html         # Simposio Coral 2011 (capital S kept from 2009)
├── actcoral.html         # Actividad Coral Mundial
├── certamen.html         # Certamen Internacional de Coros
├── contacto.html         # Contacto
├── libro.html            # Libro de Visitas
├── calendario.html       # Calendario
├── 404.html              # "En construcción" page
├── .nojekyll             # serve files as-is on GitHub Pages
│
├── css/style.css         # the 2009 "Compressed" stylesheet, re-interpreted
├── js/
│   ├── site.js           # shared chrome: ribbon, nav, rollover sidebar, partners, footer, Leer más
│   ├── data.js           # calendar events
│   ├── calendario.js     # month-view calendar
│   └── libro.js          # guestbook (localStorage)
│
├── assets/
│   ├── layout/           # img01–06 template frame, Construcc.jpg, frog emblem, download badge
│   ├── menu/             # sliced sidebar buttons: image_NN + img_over_NN (hover)
│   ├── logos/            # partner logos: ads_0N (gray) + ads_over_0N (colour), LOGOS LATERAL set
│   └── fotos/            # Certamen banner, committee and choir photos, symposium banner
│
├── original-2009/        # untouched snapshot of the 2009–2011 working folder
└── .github/workflows/deploy.yml
```

The git history has two layers:
1. **`Import original 2009 Fundación CIC site snapshot`** — the archive exactly as found. Only OS junk (`.DS_Store`, `Thumbs.db`, `.thumb/`) and two third-party zips with non-free licences (JW Player, Shadowbox) were left out.
2. **The revival**, built on top of it.

`original-2009/` is published too, so anyone can open the 2009 site and compare. Its Flash menu shows the *“You need to upgrade your Flash Player”* fallback, as it would in any modern browser.

## 9. Running locally

The pages need no server: you can open `index.html` straight from disk. To mirror GitHub Pages, serve the folder over HTTP:

```bash
cd fundacioncic-revival
python3 -m http.server 8080
# open http://localhost:8080
```

## 10. Deploying to GitHub Pages

The repository deploys itself. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) uploads the repository root as a Pages artifact on every push to `main`.

If you fork it, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**. The site will then be served at `https://<user>.github.io/<repo>/`. All asset paths are relative, so it works under any sub-path.

The only absolute path is in `404.html`, which uses `/fundacioncic-revival/…` (with a relative fallback), because GitHub serves the 404 page from whatever URL was requested. Change it if you rename the repo.

## 11. Editing content

- **Text:** each page is plain HTML. Edit what is inside `<article class="post">`. The `data-updated` attribute on `<body>` sets the “Última modificación” stamp.
- **Menu:** the `SECTIONS` / `EXTRAS` arrays at the top of `js/site.js`. The `SHORT` map holds the shorter labels used in the top bar.
- **Partner logos and their bubble text:** the `PARTNERS` array in `js/site.js`.
- **Calendar:** add objects to `window.CIC_EVENTS` in `js/data.js`, in the form `{ y, m, from, to, kind: "certamen" | "festival", title, place, href }`.
- **Contact form:** it is deliberately inert. To make it send mail without a server, point the `<form>` at a static form service such as [Formspree](https://formspree.io) (`action="https://formspree.io/f/<id>" method="POST"`) and remove the inline submit handler.

## 12. Credits and licences

- **Original site design, slicing and scripts (2009–2011):** Kevin Roberts.
- **Base template:** “Compressed” by [Free CSS Templates](http://www.freecsstemplates.org), released under [Creative Commons Attribution 2.5](original-2009/license.txt). The derived stylesheet keeps that attribution.
- **Photos, the Certamen emblem and the Fundación's logo** belong to Fundación C.I.C. **Partner logos** belong to their respective organisations. They are included here for historical and archival purposes only.
- **Revival code (2026):** the HTML, CSS and JS outside `original-2009/` may be reused freely. The content and imagery may not; they remain the property of their owners.
