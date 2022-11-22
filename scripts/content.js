const article = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegEx = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegEx);
  
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("span");
  
  const timerSvg = '<?xml version="1.0" ?><svg height="18" viewBox="-4 -4 28 28" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.4819568,10.0677432 C11.6471834,10.0235573 11.8208407,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,11.8208407 10.0235573,11.6471834 10.0677432,11.4819568 L6.29289322,7.70710678 L7.70710678,6.29289322 L11.4819568,10.0677432 Z M13,3.05492878 L13,7 L11,7 L11,1 L12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 C5.92486775,23 1,18.0751322 1,12 C1,9.03657516 2.17863997,6.25738075 4.23642055,4.20725745 L5.64799552,5.62410469 C3.9631621,7.30266862 3,9.57377327 3,12 C3,16.9705627 7.02943725,21 12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.36744635 17.4999505,3.55237307 13,3.05492878 Z" fill-rule="evenodd"/></svg>';

  // Use the same styling as the article's publication date info
  badge.classList.add("dateline", "story-dateline");
  badge.style.fontSize = 'inherit';

  // Determine the use of singular or plural
  const a = readingTime > 1 ? 'Λεπτά' : 'Λεπτό';

  badge.innerHTML = `\u2015 ${timerSvg} ${readingTime} ${a} Ανάγνωσης`;

  const heading = article.querySelector("h1");
  const date = article.querySelector("time")?.parentNode;

  // Place badge inside the targeted (`date` or if it's null, `heading`) element, right before its end
  (date ?? heading).insertAdjacentElement("beforeend", badge);
}