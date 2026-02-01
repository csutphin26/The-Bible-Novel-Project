# Prompts to Use When Writing the Next Chapter

Use this file every time you want to move forward with the next chapter. Copy the prompt below, update the one line that changes, then paste into Cursor.

---

## Step 1: Update the “last completed” line

Before you prompt, set the **last completed chapter** to whatever you most recently finished. Right now it is:

**Last completed chapter:** Genesis – Chapter Five: The Flood

So the **next chapter to write** is: **Genesis – Chapter Six: A Promise in the Sky** (from `ROADMAP.md`).

When you finish Chapter 2, change the line above to “Genesis – Chapter Two: The Garden” and the next prompt will ask for Chapter 3, and so on.

---

## Step 2: Copy and paste this prompt

Use this **exact** prompt each time (only change the “last completed” line as you progress):

```
We are continuing the project Bible as a Novel.
The last completed chapter was: Genesis – Chapter Five: The Flood.
Write the next chapter following PROJECT_INSTRUCTIONS.md and the style of the existing chapters in src/content/chapters/ (flowing novel prose, paragraphs, easy to read but not childish).

Create the new chapter file in src/content/chapters/ with the correct frontmatter (book, bookSubtitle, bookSlug, chapterNumber, title). Use the next chapter title from ROADMAP.md. Write only the chapter prose—no commentary, no verse numbers, no study questions.
```

**What to change each time:**  
Replace **Genesis – Chapter One: Order and Breath** with the actual last chapter you completed (e.g. after Chapter 2, use **Genesis – Chapter Two: The Garden**).

---

## Short version (if you prefer)

If you’ve already said “we’re continuing Bible as a Novel” in the chat, you can use:

```
The last completed chapter was: Genesis – Chapter Five: The Flood. Write the next chapter, create the file in src/content/chapters/ with correct frontmatter, and use the next chapter title from ROADMAP.md.
```

Again: update the “last completed chapter” line each time.

---

## Where to get the next chapter title

- **Book 1 (Genesis):** See the “Book 1 — Beginnings” table in `ROADMAP.md`.  
  Next up: **Chapter 2 – The Garden**, then **The Choice**, **Brothers**, etc.
- **Later books:** Use the chapter counts and focus in `ROADMAP.md`; you can ask the AI to suggest a title from the biblical content if you prefer.

---

## After the chapter is written

1. **ROADMAP.md** — In the progress table at the top, add 1 to “Chapters Completed” for that book and update “% Complete” and the Notes column (e.g. “Order and Breath ✓, The Garden ✓”).
2. **ROADMAP.md** — In the book’s chapter list, mark the new chapter as “✓ Complete” instead of “Planned”.
3. **This file** — Update the “Last completed chapter” line in Step 1 so your next prompt asks for the following chapter.

---

## Quick reference

| You want… | Use… |
|-----------|------|
| Full prompt (new chat or cold start) | The “Step 2” prompt above, with “last completed” updated. |
| Short prompt (same chat, context set) | The “Short version” above, with “last completed” updated. |
| Next chapter title | `ROADMAP.md` → Book 1 (or current book) → chapter table. |
| Style and rules | `PROJECT_INSTRUCTIONS.md`. |
| Frontmatter pattern | Any existing file in `src/content/chapters/` or the example in `CONTINUE.md`. |
