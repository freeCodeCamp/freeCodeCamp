/**
 * Gets the source (i.e. host) of the script currently running.
 * @returns {string}
 */
function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to get the current running script,
  // but is not supported in all browsers (most notably, IE).
  if ('currentScript' in document) {
    // In some cases, `document.currentScript` would be `null` even if the browser supports it:
    // e.g. asynchronous chunks on Firefox.
    // We should not fallback to the list-approach as it would not be safe.
    if (document.currentScript == null) return;
    return document.currentScript.getAttribute('src');
  }
  // Fallback to getting all scripts running in the document,
  // and finding the last one injected.
  else {
    const scriptElementsWithSrc = Array.prototype.filter.call(
      document.scripts || [],
      function (elem) {
        return elem.getAttribute('src');
      }
    );
    if (!scriptElementsWithSrc.length) return;
    const currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
    return currentScript.getAttribute('src');
  }
}

module.exports = getCurrentScriptSource;
