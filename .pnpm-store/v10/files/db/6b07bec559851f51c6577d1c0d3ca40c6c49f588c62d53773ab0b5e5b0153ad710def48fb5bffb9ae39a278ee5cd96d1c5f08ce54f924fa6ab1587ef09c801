import assertString from './util/assertString';
export default function isLuhnNumber(str) {
  assertString(str);
  var sanitized = str.replace(/[- ]+/g, '');
  var sum = 0;
  var digit;
  var tmpNum;
  var shouldDouble;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}