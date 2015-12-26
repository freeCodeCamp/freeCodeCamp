window.common = (function(global) {
  const {
    loopProtect,
    common = { init: [] }
  } = global;

  loopProtect.hit = function hit(line) {
    var err = 'Error: Exiting potential infinite loop at line ${line}. ' + 
      'You can disable loop protection by adding "//noprotect" to your code; ' + 
      'however, be aware that by disabling this feature, you run the risk ' + 
      'of your browser crashing should an infinite loop occur.';
    console.error(err);
  };

  common.addLoopProtect = function addLoopProtect(code = '') {
    return loopProtect(code);
  };

  return common;
})(window);
