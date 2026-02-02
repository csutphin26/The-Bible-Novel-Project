m# Deploying Bible as a Novel (GitHub + Vercel)

Follow these steps to put your project on GitHub and host it on Vercel with a free URL. You can do this even if you’ve never used GitHub or Vercel before.

---

## Part 1: Get the project on GitHub

### 1. Create a GitHub account (if you don’t have one)

- Go to [github.com](https://github.com) and click **Sign up**.
- Use your email and a password. Verify your email if asked.

### 2. Create a new repository on GitHub

- After signing in, click the **+** in the top right and choose **New repository**.
- **Repository name:** e.g. `The-Bible-Project` or `bible-as-a-novel`.
- **Description (optional):** e.g. “A novelized retelling of the Bible.”
- Choose **Public**.
- **Do not** check “Add a README” or “Add .gitignore”—you already have these locally.
- Click **Create repository**.

GitHub will show you a page with a URL like:

`https://github.com/YOUR-USERNAME/The-Bible-Project.git`

Copy that URL. You’ll need it in Step 4.

### 3. Open Terminal on your Mac and go to your project folder

```bash
cd /Users/chasesutphin/The-Bible-Project
```

### 4. Initialize Git and push to GitHub

Run these commands **one at a time** in Terminal. Replace `YOUR-USERNAME` and `The-Bible-Project` with your actual GitHub username and repo name if different.

```bash
# Turn this folder into a Git repo (only needed once)
git init

# Add all files (the .gitignore will exclude node_modules, dist, etc.)
git add .

# Save everything as the first commit
git commit -m "Initial commit: Bible as a Novel — Genesis chapters 1–5"

# Name the main branch "main" (GitHub’s default)
git branch -M main

# Connect this repo to your GitHub repo (use YOUR URL from Step 2)
git remote add origin https://github.com/YOUR-USERNAME/The-Bible-Project.git

# Push your code to GitHub (you may be asked to sign in)
git push -u origin main
```

If GitHub asks you to sign in, use your GitHub username and a **Personal Access Token** (not your normal password). To create a token:

- **Classic token:** GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**. Give it a name, choose an expiration, and check the **repo** scope. Copy the token and paste it when Terminal asks for a password.
- **Fine-grained token:** GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**. Under **Repository access**, select **Only select repositories** and choose your Bible project repo. Under **Repository permissions**, set **Contents** to **Read and write**. Generate the token, copy it, and paste it when Terminal asks for a password.

You only need **Contents: Read and write** for that repo to push your code.

After `git push` finishes, refresh your repo on GitHub. You should see all your project files there.

---

## Part 2: Deploy on Vercel (free domain)

### 1. Sign up / log in to Vercel

- Go to [vercel.com](https://vercel.com).
- Click **Sign Up** or **Log In**.
- Choose **Continue with GitHub** and authorize Vercel to use your GitHub account.

### 2. Import your project

- On the Vercel dashboard, click **Add New…** → **Project**.
- You should see a list of your GitHub repos. Find **The-Bible-Project** (or whatever you named it) and click **Import** next to it.

### 3. Configure the build (usually auto-filled)

Vercel often detects Astro automatically. Check that:

- **Framework Preset:** Astro (or leave as is).
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install` (default)

If any of these are wrong, fix them. Then click **Deploy**.

### 4. Wait for the build

Vercel will clone your repo, run `npm install` and `npm run build`, and deploy the `dist/` folder. This usually takes 1–2 minutes.

### 5. Get your free URL

When the build finishes, you’ll see a success screen with a URL like:

**https://the-bible-project-xxxx.vercel.app**

That’s your live site. Click **Visit** to open it. You can share this link; it’s public.

---

## Updating the site when you add chapters

1. Add or edit chapter files in your project (e.g. in Cursor).
2. In Terminal, from your project folder:

   ```bash
   git add .
   git commit -m "Add Genesis Chapter 6"
   git push
   ```

3. Vercel will automatically detect the push, run a new build, and update your live site in a minute or two. No need to do anything on Vercel.

---

## Optional: Natural-sounding “Read aloud” (ElevenLabs)

The **Read aloud** button tries, in order: (1) an uploaded MP3 at `public/audio/{chapter-slug}.mp3`, (2) the ElevenLabs API, (3) the device’s built-in voice. To use ElevenLabs on Vercel:

1. Get an API key at [elevenlabs.io](https://elevenlabs.io).
2. In Vercel: open your project → **Settings** → **Environment Variables**.
3. Add `ELEVENLABS_API_KEY` with your key. Optionally add `ELEVENLABS_VOICE_ID` (a voice ID from ElevenLabs; if omitted, a default voice is used).
4. Redeploy (e.g. push a small change or click **Redeploy** in Vercel).

The `api/speak.js` serverless function runs only on Vercel; it will not work when you run the site locally with `npm run dev` unless you use a tool that runs Vercel dev locally.

---

## Optional: Custom domain later

If you buy a domain (e.g. `bibleasanovel.com`):

- In Vercel, open your project → **Settings** → **Domains**.
- Add your domain and follow Vercel’s steps to point the domain to Vercel (they’ll show you what to set at your domain registrar).

---

## Audio: Read aloud vs. your own audio files

**Read aloud (already added)**  
Each chapter page has a **“Read aloud”** button. It uses your **device’s built-in text-to-speech** (same tech as Siri or accessibility “Speak screen”). No audio files or hosting needed. Click **“Read aloud”** to start; click **“Stop”** to stop. Works on Vercel and locally.

**Your own audio files (e.g. narrated MP3s)**  
Yes, you can add those too:

1. Put MP3 (or other) files in the project, e.g. `public/audio/genesis-01-order-and-breath.mp3`.
2. In the chapter page you can add an `<audio>` element that points to `/audio/genesis-01-order-and-breath.mp3`.
3. Those files will be deployed with the site on Vercel and play in the browser. If you want, we can wire a “Play narration” button per chapter that uses a file when present and falls back to “Read aloud” when not.

For now, “Read aloud” works everywhere and requires no extra hosting.
