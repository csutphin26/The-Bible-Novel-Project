/**
 * Full series roadmap for Bible as a Novel.
 * bookSlug must match frontmatter bookSlug in src/content/chapters/.
 */

export interface SeriesBook {
  number: number;
  slug: string;
  title: string;
  subtitle: string;
  biblicalCoverage: string;
  plannedChapters: number;
}

export const series: SeriesBook[] = [
  { number: 1, slug: 'genesis', title: 'Beginnings', subtitle: 'Genesis', biblicalCoverage: 'Genesis', plannedChapters: 10 },
  { number: 2, slug: 'exodus', title: 'The God Who Delivers', subtitle: 'Exodus', biblicalCoverage: 'Exodus', plannedChapters: 7 },
  { number: 3, slug: 'leviticus', title: 'Learning to Live with God', subtitle: 'Leviticus', biblicalCoverage: 'Leviticus', plannedChapters: 5 },
  { number: 4, slug: 'numbers', title: 'Between Freedom and the Promise', subtitle: 'Numbers', biblicalCoverage: 'Numbers', plannedChapters: 6 },
  { number: 5, slug: 'deuteronomy', title: 'Remember and Choose', subtitle: 'Deuteronomy', biblicalCoverage: 'Deuteronomy', plannedChapters: 5 },
  { number: 6, slug: 'joshua', title: 'Taking the Land', subtitle: 'Joshua', biblicalCoverage: 'Joshua', plannedChapters: 6 },
  { number: 7, slug: 'judges', title: 'When Everyone Did What They Wanted', subtitle: 'Judges', biblicalCoverage: 'Judges', plannedChapters: 7 },
  { number: 8, slug: 'ruth', title: 'A Quiet Faithfulness', subtitle: 'Ruth', biblicalCoverage: 'Ruth', plannedChapters: 4 },
  { number: 9, slug: '1-samuel', title: 'A King Like the Others', subtitle: '1 Samuel', biblicalCoverage: '1 Samuel', plannedChapters: 8 },
  { number: 10, slug: '2-samuel-1-kings', title: 'The Rise and Fall of Kings', subtitle: '2 Samuel + 1 Kings', biblicalCoverage: '2 Samuel + 1 Kings (partial)', plannedChapters: 9 },
  { number: 11, slug: '1-kings-2-kings', title: 'A Divided Kingdom', subtitle: '1 & 2 Kings', biblicalCoverage: '1 Kings (rest) + 2 Kings', plannedChapters: 9 },
  { number: 12, slug: 'job', title: 'Voices in the Fire', subtitle: 'Job', biblicalCoverage: 'Job', plannedChapters: 5 },
  { number: 13, slug: 'wisdom', title: 'Songs, Wisdom, and Love', subtitle: 'Psalms, Proverbs, Ecclesiastes, Song of Songs', biblicalCoverage: 'Psalms, Proverbs, Ecclesiastes, Song of Songs', plannedChapters: 10 },
  { number: 14, slug: 'major-prophets', title: 'Warnings and Hope', subtitle: 'Major Prophets', biblicalCoverage: 'Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel', plannedChapters: 14 },
  { number: 15, slug: 'minor-prophets', title: 'The Twelve Voices', subtitle: 'Minor Prophets', biblicalCoverage: 'Minor Prophets', plannedChapters: 8 },
  { number: 16, slug: 'gospels', title: 'The King Arrives', subtitle: 'The Gospels', biblicalCoverage: 'Matthew, Mark, Luke, John', plannedChapters: 15 },
  { number: 17, slug: 'acts', title: 'The Story Spreads', subtitle: 'Acts', biblicalCoverage: 'Acts', plannedChapters: 7 },
  { number: 18, slug: 'epistles', title: 'Letters to a Growing Church', subtitle: 'Epistles', biblicalCoverage: 'Epistles', plannedChapters: 12 },
  { number: 19, slug: 'revelation', title: 'All Things Made New', subtitle: 'Revelation', biblicalCoverage: 'Revelation', plannedChapters: 7 },
];

export const totalPlannedChapters = series.reduce((sum, b) => sum + b.plannedChapters, 0);
