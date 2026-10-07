'use strict';
// `Math.scale` method implementation
// https://rwaldron.github.io/proposal-math-extensions/
module.exports = function scale(x, inLow, inHigh, outLow, outHigh) {
  var nx = +x;
  var nInLow = +inLow;
  var nInHigh = +inHigh;
  var nOutLow = +outLow;
  var nOutHigh = +outHigh;
  // eslint-disable-next-line no-self-compare -- NaN check
  if (nx !== nx || nInLow !== nInLow || nInHigh !== nInHigh || nOutLow !== nOutLow || nOutHigh !== nOutHigh) return NaN;
  if (nx === Infinity || nx === -Infinity) return nx;
  return (nx - nInLow) * (nOutHigh - nOutLow) / (nInHigh - nInLow) + nOutLow;
};
