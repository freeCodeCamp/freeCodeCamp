window.common = (function(global) {
  const {
    loopProtect,
    common = { init: [] }
  } = global;

  loopProtect.hit = function hit(line) {
    var err = `Error: Exiting potential infinite loop at line ${line}Does your for loop  meet its end condition, or if using a while loop does its condition never becomes falsey?Look there and make sure that it does `;
    console.error(err);
  };

  common.addLoopProtect = function addLoopProtect(code = '') {
    return loopProtect(code);
  };

  return common;
})(window);
