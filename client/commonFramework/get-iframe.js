window.common = (function(global) {
  const {
    common = { init: [] },
    document: doc
  } = global;

  common.getIframe = function getIframe(id = 'preview') {
    let previewFrame = doc.getElementById(id);

    // create and append a hidden preview frame
    if (!previewFrame) {
      previewFrame = doc.createElement('iframe');
      previewFrame.id = id;
      previewFrame.setAttribute('style', 'display: none');
      doc.body.appendChild(previewFrame);
    }

    return previewFrame.contentDocument ||
      previewFrame.contentWindow.document;
  };

  return common;
})(window);
