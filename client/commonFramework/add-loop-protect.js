window.common = (function(global) {
  const {
    loopProtect,
    common = { init: [] }
  } = global;

  loopProtect.hit = function hit(line) {
     var err = 'Error: Exiting potential infinite loop at line ' +
     line +
     '. To disable loop protection, write: \n\\/\\/ noprotect\nas the first' +
     'line. Beware that if you do have an infinite loop in your code' +
     'this will crash your browser.';
    console.error(err);
  };

  common.addLoopProtect = function addLoopProtect(code = '') {
    return loopProtect(code);
  };

  return common;
})(window);
