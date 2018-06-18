/*
 * Converts HTML entity codes in a string to the characters they represent.
 *
 * Example:
 * `decodeHTMLEntities('Beets &amp; carrots');`
 * will return "Beets & carrots".
 *
 * The regex makes sure we only replace the HTML entities in the string.
 * For example, the regex would match "&lt;" as well as "&#58;".
 * The decoding works by setting the innerHTML of a dummy element and then
 * retrieving the innerText. Per the spec, innerText is a property that
 * represents the "rendered" text content of an element.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText
 * https://developer.mozilla.org/en-US/docs/Glossary/Entity
 *
 */
const decodeHTMLEntities = str => {
  const el = document.createElement('div');
  return str.replace(/\&[#0-9a-z]+;/gi, enc => {
    el.innerHTML = enc;
    return el.innerText;
  });
};

export default decodeHTMLEntities;
