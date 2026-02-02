# Git commands to push your changes to GitHub (and Vercel)

Run these in **Terminal**, from your **project folder**. Replace `"Your message"` with a short description if you want.

---

## 1. Open Terminal and go to your project

```bash
cd /Users/chasesutphin/The-Bible-Project
```

---

## 2. See what changed (optional)

```bash
git status
```

You should see modified files (e.g. `src/pages/read/...`, `README.md`). If it says "nothing to commit, working tree clean", your changes are already committed.

---

## 3. Stage all changes

```bash
git add .
```

(The dot means "everything that changed".)

---

## 4. Commit

```bash
git commit -m "Update read aloud and add console logs"
```

If you get **"nothing to commit, working tree clean"**, you already committed; skip to step 5.

If you get **"fatal: not a git repository"**, you never ran `git init` in this folder. Tell me and we can fix that.

---

## 5. Push to GitHub

```bash
git push origin main
```

If your default branch is `master` instead of `main`, use:

```bash
git push origin master
```

You may be asked for your GitHub username and **Personal Access Token** (not your GitHub password). Paste the token when it asks for a password.

---

## 6. Check that it worked

- Open your repo on **github.com** (e.g. `https://github.com/YOUR-USERNAME/The-Bible-Project`). The latest commit and time should match what you just pushed.
- Open your site on **Vercel**. In the Vercel dashboard, your project should show a new **Deployment** (triggered by the push). Wait until it says **Ready** (usually 1–2 minutes).

---

## 7. See the new version in the browser

- Go to your live site (e.g. `https://your-project.vercel.app`).
- Do a **hard refresh** so you don’t get an old cached version:
  - **Mac:** `Cmd + Shift + R`
  - **Windows:** `Ctrl + Shift + R`
- Open **Chapter 1**, open DevTools (F12 or right‑click → Inspect), go to the **Console** tab, then click **Read aloud**. You should see lines starting with `[Read aloud]`.

---

## One-line version (after you’ve done the first-time setup)

Once your repo and remote are set up, you can usually do:

```bash
cd /Users/chasesutphin/The-Bible-Project
git add .
git commit -m "Update read aloud and add console logs"
git push origin main
```

Then wait for Vercel to finish deploying and hard-refresh the site before testing again.
