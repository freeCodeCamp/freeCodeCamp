window.common = (function(global) {
  const {
    common = { init: [] }
  } = global;


  const faux$ = common.getScriptContent$('/js/faux.js').shareReplay();

  common.hasJs = function hasJs(code = '') {
    return code.match(/\<\s?script\s?\>/gi) &&
      code.match(/\<\s?\/\s?script\s?\>/gi);
  };

  common.addFaux$ = function addFaux$(code) {
    // grab user javaScript
    var scriptCode = code
      .split(/\<\s?script\s?\>/gi)[1]
      .split(/\<\s?\/\s?script\s?\>/gi)[0];

    return faux$.map(faux => faux + scriptCode);
  };

  return common;
}(window));
