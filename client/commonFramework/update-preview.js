window.common = (function({ common = { init: [] } }) {
  var libraryIncludes = `
<link
  rel='stylesheet'
  href='//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.min.css'
  />
<link
  rel='stylesheet'
  href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css'
  />

<link
  rel='stylesheet'
  href='//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'
  />

<style>
  body { padding: 0px 3px 0px 3px; }
</style>
  `;

  var iFrameScript = "<script src='/js/iFrameScripts.js'></script>";


  common.updatePreview = function updatePreview(code = '', shouldTest = false) {
    const previewFrame = document.getElementById('preview');
    const preview = previewFrame.contentDocument ||
      previewFrame.contentWindow.document;
    if (!preview) {
      return code;
    }
    preview.open();
    preview.write(libraryIncludes + code + (shouldTest ? iFrameScript : ''));
    preview.close();

    return code;
  };

  return common;
}(window));
