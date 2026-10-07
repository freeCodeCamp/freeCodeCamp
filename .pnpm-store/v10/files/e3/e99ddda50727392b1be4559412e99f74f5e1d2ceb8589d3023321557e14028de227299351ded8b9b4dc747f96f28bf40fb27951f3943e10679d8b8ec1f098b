import assertString from './util/assertString';

// http://www.brainjar.com/js/validation/
// https://www.aba.com/news-research/research-analysis/routing-number-policy-procedures
// series reserved for future use are excluded
var isRoutingReg = /^(?!(1[3-9])|(20)|(3[3-9])|(4[0-9])|(5[0-9])|(60)|(7[3-9])|(8[1-9])|(9[0-2])|(9[3-9]))[0-9]{9}$/;
export default function isAbaRouting(str) {
  assertString(str);
  if (!isRoutingReg.test(str)) return false;
  var checkSumVal = 0;
  for (var i = 0; i < str.length; i++) {
    if (i % 3 === 0) checkSumVal += str[i] * 3;else if (i % 3 === 1) checkSumVal += str[i] * 7;else checkSumVal += str[i] * 1;
  }
  return checkSumVal % 10 === 0;
}