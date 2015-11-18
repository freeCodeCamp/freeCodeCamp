window.common = (function(global) {
  const {
    $,
    Rx: { Observable, Disposable },
    common = { init: [] }
  } = global;


  function getFaux() {
    return new Observable(function(observer) {
      const jqXHR = $.get('/js/faux.js')
        .success(data => observer.onNext(data))
        .fail(e => observer.onError(e))
        .always(() => observer.onCompleted());

      return new Disposable(() => {
        jqXHR.abort();
      });
    });
  }

  const faux$ = getFaux().shareReplay();

  common.safeHTMLRun = function safeHTMLRun(code) {
    if (!code.match(/\<script\>/gi)) {
      return Observable.just(code);
    }

    // grab user javaScript
    var scriptCode = code
      .split(/\<\s?script\s?\>/gi)[1]
      .split(/\<\s?\/\s?script\s?\>/gi)[0];
    return faux$.map(faux => faux + scriptCode);
  };

  return common;
}(window));
