(function () {
  var STORAGE_KEY = 'bible-novel-read';

  function getProgress() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (_) {
      return {};
    }
  }

  function setProgress(obj) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
    } catch (_) {}
  }

  function markRead(slug) {
    var progress = getProgress();
    progress[slug] = true;
    setProgress(progress);
  }

  function refreshReadIndicators() {
    var progress = getProgress();
    document.querySelectorAll('[data-chapter-slug]').forEach(function (el) {
      var slug = el.getAttribute('data-chapter-slug');
      if (progress[slug]) {
        el.classList.add('read');
      } else {
        el.classList.remove('read');
      }
    });
    document.querySelectorAll('[data-book-progress]').forEach(function (el) {
      var bookSlug = el.getAttribute('data-book-slug');
      var slugs = (el.getAttribute('data-book-chapters') || '').split(',').filter(Boolean);
      var read = slugs.filter(function (s) { return progress[s]; }).length;
      var total = slugs.length;
      el.textContent = read + ' of ' + total + ' read';
    });
  }

  if (window.BIBLE_NOVEL_CHAPTER_SLUG) {
    markRead(window.BIBLE_NOVEL_CHAPTER_SLUG);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refreshReadIndicators);
  } else {
    refreshReadIndicators();
  }
})();
