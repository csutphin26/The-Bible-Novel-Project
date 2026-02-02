# Bible as a Novel

A novelized retelling of the Bible—easy to read, flowing like a novel, faithful to Scripture—so anyone can read it, understand it, and want to keep going.

## Purpose

- **Main text:** Story only. No verse numbers, no commentary, no study questions.
- **Companion workbook:** Separate, later. Key moments, reflection questions, prayer prompts.

## Project structure

- **Full series plan:** `ROADMAP.md` — 19 books, ~150–170 chapters, with a progress table and chapter breakdowns for Book 1 (Genesis).
- **One book of the Bible = one “book” in the app** (e.g. Genesis).
- **One chapter = one Markdown file** in `src/content/chapters/`.
- **Style and rules:** See `PROJECT_INSTRUCTIONS.md` (and paste into new chats when writing chapters).
- **How to continue:** See `CONTINUE.md` for cross-chat continuity and adding new chapters.
- **Series page:** In the webapp, **Series** shows the full roadmap and progress (X of Y chapters per book).

## Running the webapp

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). You’ll see the table of contents and can read chapters like a novel.

- **Build for production:** `npm run build`
- **Preview build:** `npm run preview`

## Adding a new chapter

1. Create a new file in `src/content/chapters/`, e.g. `genesis-02-the-garden.md`.
2. Add frontmatter (see `CONTINUE.md` or copy from an existing chapter).
3. Write or paste the chapter body below the frontmatter.
4. The app will pick it up automatically; no code changes needed.

## Read aloud (audio)

Each chapter page has a **“Read aloud”** button. The app tries, in order:

1. **Uploaded audio file** — If you add an MP3 at `public/audio/{chapter-slug}.mp3` (e.g. `public/audio/genesis-01-order-and-breath.mp3`), that file is played. No API needed.
2. **ElevenLabs (natural voice)** — If you set an API key (see below), the app calls ElevenLabs to generate speech from the chapter text and plays it.
3. **Browser TTS** — If neither is available, it falls back to the device’s built-in text-to-speech.

**To use ElevenLabs:** Get an API key at [elevenlabs.io](https://elevenlabs.io). In Vercel: Project → **Settings** → **Environment Variables**. Add:
- `ELEVENLABS_API_KEY` = your API key  
- `ELEVENLABS_VOICE_ID` = (optional) a voice ID from ElevenLabs; if omitted, a default voice is used.

Redeploy after adding env vars. The **Read aloud** button will then use ElevenLabs for natural-sounding narration when no uploaded file exists for that chapter.

---

## Hosting / Making it public

The site is a **static** build (HTML, CSS, JS in `dist/` after `npm run build`), so you can host it for free on several platforms. Each time you push new chapters and redeploy, the live site updates.

**Step-by-step (GitHub + Vercel, free domain):** See **[DEPLOY.md](DEPLOY.md)** for a full walkthrough from “no GitHub” to a live Vercel URL.

### Option 1: Vercel (recommended)

1. Push your project to **GitHub** (create a repo, then `git init`, add, commit, push).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project** and import your Bible-as-a-novel repo.
4. Vercel will detect Astro. Leave **Build Command** as `npm run build` and **Output Directory** as `dist`. Click **Deploy**.
5. You get a URL like `the-bible-project.vercel.app`. Every push to your main branch will trigger a new deploy.

### Option 2: Netlify

1. Push your project to **GitHub** (as above).
2. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
3. Click **Add new site → Import an existing project** and choose your repo.
4. Build command: `npm run build`. Publish directory: `dist`. Click **Deploy**.
5. You get a URL like `something.netlify.app`. Netlify will auto-deploy on each push.

### Option 3: GitHub Pages

1. Push your project to GitHub.
2. In the repo, go to **Settings → Pages**. Under "Build and deployment," choose **GitHub Actions**.
3. Create a workflow that runs `npm run build` and uploads the `dist/` folder to GitHub Pages (you can use the official `peaceiris/actions-astro` or a simple static deploy action). After the first successful run, the site will be at `https://<username>.github.io/<repo-name>/`.

**Custom domain:** On Vercel or Netlify you can add your own domain (e.g. `bibleasanovel.com`) in the project settings. Both have instructions for connecting a domain you own.

---

## Tech

- **Content:** Astro content collections (Markdown in `src/content/chapters/`).
- **App:** Astro static site; read-focused layout and typography.
