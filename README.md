# Jasmin Fathima P — Portfolio

A premium, minimal portfolio built with React + Tailwind CSS + Framer Motion.

## ✨ Features
- **3D tilt cards** on project hover with glare effect
- **Framer Motion** smooth page load staggered animations
- **Animated skill bars** with scroll trigger
- **Glassmorphism** floating cards in hero
- **Custom cursor** with smooth ring tracking
- **Orbit animations** around avatar
- **Project modals** with full detail view
- **Responsive** — mobile + desktop
- **Noise texture** overlay for premium feel
- **Scroll-triggered** reveal animations

## 🚀 Deploy to Vercel (Recommended — Free)

### Option 1: Vercel CLI
```bash
npm install -g vercel
cd jasmin-portfolio
npm install
vercel
```
Follow the prompts — your site is live in ~60 seconds!

### Option 2: Vercel Dashboard
1. Push this folder to a GitHub repository
2. Go to **vercel.com** → New Project
3. Import your GitHub repo
4. Click **Deploy** — done!

Your live URL: `https://jasmin-portfolio.vercel.app`

---

## 🐙 Deploy to GitHub Pages

```bash
npm install
npm run build
# Then push the /dist folder contents to gh-pages branch
```

Or use: `npm install -D gh-pages` and add to package.json:
```json
"homepage": "https://YOUR_USERNAME.github.io/jasmin-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
Then run: `npm run deploy`

---

## 🛠 Local Development

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## 📁 Project Structure

```
jasmin-portfolio/
├── src/
│   ├── components/
│   │   ├── Cursor.jsx       # Custom cursor
│   │   ├── Navbar.jsx       # Sticky nav with scroll effect
│   │   ├── Hero.jsx         # 3D avatar + typewriter
│   │   ├── About.jsx        # Bio + highlights
│   │   ├── Skills.jsx       # Animated skill bars + tools
│   │   ├── Projects.jsx     # 3D tilt cards + modals
│   │   ├── Journey.jsx      # Timeline education
│   │   ├── Contact.jsx      # Form + social links
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js     # ← Edit your info here!
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── vercel.json
```

## ✏️ How to Update Your Info

**All your personal data is in one file:** `src/data/portfolio.js`

Edit that file to update:
- Name, title, tagline, contact info
- Education details
- Skills and percentages
- Project descriptions and tech stack

After editing, run `npm run build` and redeploy.
