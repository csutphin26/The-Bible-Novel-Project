# How to Continue Across Chats

When you start a **new chat or new file** to write the next chapter, paste this at the start:

---

> We are continuing the project **Bible as a Novel**.
> The last completed chapter was: **Genesis – Chapter Two: The Garden**.
> Please continue with the next chapter, following the project instructions.

---

Update the “last completed chapter” line each time you finish a new chapter so the next chat stays anchored.

## Where things live

- **Full series plan and progress table:** `ROADMAP.md` (root) — 19 books, ~150–170 chapters; update the progress table as you complete chapters.
- **Project instructions (style, tone, rules):** `PROJECT_INSTRUCTIONS.md` (root)
- **Chapter content:** `src/content/chapters/` — one file per chapter
- **Adding a chapter:** Create a new `.md` file in `src/content/chapters/` with the same frontmatter pattern as existing chapters (see below). Use `ROADMAP.md` for the next chapter title and book.

## Frontmatter for each chapter

```yaml
---
book: Genesis
bookSubtitle: Beginnings
bookSlug: genesis
chapterNumber: 2
title: Your Chapter Title Here
---
```

Then paste or write the chapter body below the frontmatter (plain paragraphs, no verse numbers or commentary).

## Cursor rule

There is a Cursor rule for **chapter content** in `.cursor/rules/bible-novel-chapters.mdc`. When you (or the AI) edit or add chapter files, that rule keeps style and tone consistent.
