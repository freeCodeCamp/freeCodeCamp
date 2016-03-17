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
    // return loopProtect(code);
    /* eslint-disable no-undef */
    code =
      'var lGPL00001 = 30000;'
      + 'var lGPF00001 = function() {'
        + 'var i = 0;'
        + 'this.increase = function() {'
          + 'i++;'
          + 'if(i === lGPL00001){'
            + 'throw(\"Too many loops!\");'
          + '}'
        + '}'
      + '}; \n'+ code;
    code = 'try { \n' + G00001(code) + '\n} catch(e) { console.error (e);} ';
    //code = G00001(code);
    return(code);
  };

  return common;
})(window);
