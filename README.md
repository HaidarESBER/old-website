# Haidar Esber – Personal Portfolio (old version)

An earlier version of the personal portfolio website of **Haidar Esber**, a web & application
developer. It is a bilingual (English / French) single-page portfolio covering services, resume,
certifications, pricing, and a contact form.

This is the predecessor of the current [haidaresber.github.io](https://github.com/HaidarESBER/haidaresber.github.io)
site. Here the full portfolio lives directly at `index.html` (there is no animated language/action
landing gate, and the pages are not yet moved into an `Interactive/` folder). Some leftover working
files are still present.

## Built With

- HTML5 and CSS
- [Bootstrap](https://getbootstrap.com/) (layout and modals)
- [jQuery](https://jquery.com/)
- [AOS](https://michalsnik.github.io/aos/) – scroll animations
- [Slick](https://kenwheeler.github.io/slick/) – carousels
- [Feather Icons](https://feathericons.com/), WOW.js, particles.js, Modernizr
- [EmailJS](https://www.emailjs.com/) for the contact form (the form markup also references a `mail.php` action)

All libraries are bundled locally under `assets/` (`assets/css/`, `assets/js/`, fonts, images).

## Structure

- `index.html` – the main single-page portfolio (home, services, resume, certifications, pricing, contact) with a language-selection modal
- `english.html` / `french.html` – English and French versions of the portfolio
- `prices.html` – standalone pricing table fragment (Static / Standard / Premium tiers)
- `cv.pdf` – downloadable CV
- `basic-site/` – simple one-page sample (`basicsite.html`, `basicsitefr.html`)
- `assets/` – CSS, JS vendor libraries, fonts, and images
- `Diagramme sans nom.drawio` – a draw.io diagram file kept in the repo
- `contact form`, `useless` – stray HTML snippet files left in the repo (not part of the served pages)

## Running Locally

No build step. Serve the folder with a static server so relative paths resolve:

```bash
npx serve
```

Then open the served URL (start at `index.html` or `english.html` / `french.html`). Opening the HTML
files directly in a browser also works for most of the site.

## Notes

- This is an **older/early version** of the portfolio; the layout was later reorganized into the
  `haidaresber.github.io` GitHub Pages repo with an animated bilingual landing page.
- **Bilingual:** English and French versions of the main pages.
- Based on a Bootstrap "Inbio"-style personal-portfolio template, customized with Haidar's content.
- Repository: `https://github.com/HaidarESBER/old-website`
