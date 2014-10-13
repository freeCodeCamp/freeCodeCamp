exports.javascript = function(element, code, filename) {
  var doc = element.ownerDocument, window = doc && doc.parentWindow;
  if (window) {
    try {
      window.run(code, filename);
    } catch (e) {
      element.raise(
        'error', 'Running ' + filename + ' failed.',
        {error: e, filename: filename}
      );
    }
  }
};
