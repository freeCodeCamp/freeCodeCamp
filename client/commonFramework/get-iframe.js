window.common = (function(global) {
  const {
    Rx: { Observable },
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

    return previewFrame;
  };

  common.getIframeDocument = function getIframeDocument(id) {
    const previewFrame = common.getIframe(id);

    return previewFrame.contentDocument ||
      previewFrame.contentWindow.document;
  };

  common.reloadIframe = function reloadIframe(id) {
    const previewFrame = common.getIframe(id);

    previewFrame.contentWindow.location.reload(true);

    return Observable.fromEvent(previewFrame, 'load').first();
  };

  return common;
})(window);
