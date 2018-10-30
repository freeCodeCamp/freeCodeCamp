'use strict';

/*
 * Info: http://www.termsys.demon.co.uk/vtansi.htm#colors 
 * Following caveats
 * bright    - brightens the color (bold-blue is same as brigthtBlue)
 * dim       - nothing on Mac or Linux
 * italic    - nothing on Mac or Linux
 * underline - underlines string
 * blink     - nothing on Mac or linux
 * inverse   - background becomes foreground and vice versa
 *
 * In summary, the only styles that work are:
 *  - bright, underline and inverse
 *  - the others are only included for completeness
 */

var styleNums = {
    reset     :  [0, 22]
  , bright    :  [1, 22]
  , dim       :  [2, 22]
  , italic    :  [3, 23]
  , underline :  [4, 24]
  , blink     :  [5, 25]
  , inverse   :  [7, 27]
  }
  , styles = {}
  ;

Object.keys(styleNums).forEach(function (k) {
  styles[k] = function (s) { 
    var open = styleNums[k][0]
      , close = styleNums[k][1];
    return '\u001b[' + open + 'm' + s + '\u001b[' + close + 'm';
  };
});

module.exports = styles;
