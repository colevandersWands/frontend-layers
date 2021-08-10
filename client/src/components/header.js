/**
 * Renders some text into a header with class "fancy".
 *
 * @param {string} [text=''] - The text to render.
 * @returns {HTMLHeadingElement} A header containing the text.
 */
export const header = (text = '') => {
  const headerEl = document.createElement('h1');
  headerEl.innerText = text;
  headerEl.className = 'fancy';
  return headerEl;
};
