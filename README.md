# Apex Rig — Personal Portfolio

A responsive, static portfolio website built with plain HTML, CSS, and JavaScript. No build step or framework is required.

## Included
- `index.html` — site structure and content
- `styles.css` — responsive dark emerald-green design
- `script.js` — mobile navigation, scroll reveals, active navigation, live public GitHub repository list, and email-app contact flow
- `assets/favicon.svg` — simple Apex Rig favicon
- `assets/apex-rig-cv-template.pdf` — editable-by-replacement CV template PDF; replace it with your real CV before publishing

## Run locally
Open `index.html` in a browser. For a local web server, run this in the project folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy free with GitHub Pages
1. Create a repository on GitHub (for example, `apex-rig-portfolio`).
2. Upload the contents of this folder to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site.

Netlify and Cloudflare Pages can also deploy this folder as a static site without a build command.

## Before publishing — important personalisation checklist
- Confirm the public name you want displayed (currently `Mark` / `Apex Rig`).
- Review social links in `index.html` and `script.js` before publishing.
- The sample CV PDF is not linked from the site and should not be published as a real CV. Replace it with your actual CV before adding a download link.
- Replace sample/concept project cards with your real projects and specific repository/demo links. Concept and planned-work cards are deliberately labelled.
- Add only certifications and achievements you have actually earned; update the placeholder items in the Credentials section.
- If you want the contact form to send without opening the visitor's email app, connect a form service (such as Formspree) or add a backend. The current form does not store or send data itself.
- The GitHub repository widget reads public repositories for `markk2140-svg` via GitHub's public API. Change the username in `script.js` if needed.

## Privacy and security
This is a front-end static site. Never put API keys, passwords, tokens, or private information in its source. The public contact section links to GitHub and Instagram; it does not publish an email address or collect visitor messages.
