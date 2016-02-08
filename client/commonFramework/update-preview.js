window.common = (function(global) {
  const {
    Rx: { BehaviorSubject, Observable },
    common = { init: [] }
  } = global;

  // the first script tag here is to proxy jQuery
  // We use the same jQuery on the main window but we change the
  // context to that of the iframe.
  var libraryIncludes = `
<script>
  window.loopProtect = parent.loopProtect;
  window.__err = null;
  window.loopProtect.hit = function(line) {
    window.__err = new Error(
      'Potential infinite loop at line ' +
      line +
      '. To disable loop protection, write:' +
      ' \\n\\/\\/ noprotect\\nas the first' +
      ' line. Beware that if you do have an infinite loop in your code' +
      ' this will crash your browser.'
    );
  };
</script>
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
  const codeDisabledError = `
    <script>
      window.__err = new Error('code has been disabled');
    </script>
  `;

  const iFrameScript$ =
    common.getScriptContent$('/js/iFrameScripts.js').shareReplay();
  const jQueryScript$ = common.getScriptContent$(
    '/bower_components/jquery/dist/jquery.js'
  ).shareReplay();

  // behavior subject allways remembers the last value
  // we use this to determine if runPreviewTest$ is defined
  // and prime it with false
  common.previewReady$ = new BehaviorSubject(false);

  // These should be set up in the preview window
  // if this error is seen it is because the function tried to run
  // before the iframe has completely loaded
  common.runPreviewTests$ =
    common.checkPreview$ =
    () => Observable.throw(new Error('Preview not fully loaded'));


  common.updatePreview$ = function updatePreview$(code = '') {
    const preview = common.getIframe('preview');

    return Observable.combineLatest(
      iFrameScript$,
      jQueryScript$,
      (iframe, jQuery) => ({
        iframeScript: `<script>${iframe}</script>`,
        jQuery: `<script>${jQuery}</script>`
      })
    )
      .first()
      .flatMap(({ iframeScript, jQuery }) => {
        // we make sure to override the last value in the
        // subject to false here.
        common.previewReady$.onNext(false);
        preview.open();
        preview.write(
          libraryIncludes +
          jQuery +
          (common.shouldRun() ? code : codeDisabledError) +
          '<!-- -->' +
          iframeScript
        );
        preview.close();
        // now we filter false values and wait for the first true
        return common.previewReady$
          .filter(ready => ready)
          .first()
          // the delay here is to give code within the iframe
          // control to run
          .delay(400);
      })
      .map(() => code);
  };

  return common;
}(window));
