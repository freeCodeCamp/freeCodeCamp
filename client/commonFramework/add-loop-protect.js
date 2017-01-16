window.common = (function(global) {
  const {
    loopProtect,
    common = { init: [] }
  } = global;

  loopProtect.hit = function(line) {
    var msg = 'Potential infinite loop at line ' +
      line +
      '. To disable loop protection, write:' +
      ' \\n\\/\\/ noprotect\\nas the first' +
      ' line. Beware that if you do have an infinite loop in your code' +
      ' this will crash your browser.';
    console.error(msg);
    throw new Error(msg);
  };

  common.addLoopProtect = function addLoopProtect(code = '') {
    return loopProtect(code);
  };

  return common;
})(window);
