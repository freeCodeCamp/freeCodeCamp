import assertString from './util/assertString';
var imeiRegexWithoutHyphens = /^[0-9]{15}$/;
var imeiRegexWithHyphens = /^\d{2}-\d{6}-\d{6}-\d{1}$/;
export default function isIMEI(str, options) {
  assertString(str);
  options = options || {};

  // default regex for checking imei is the one without hyphens

  var imeiRegex = imeiRegexWithoutHyphens;
  if (options.allow_hyphens) {
    imeiRegex = imeiRegexWithHyphens;
  }
  if (!imeiRegex.test(str)) {
    return false;
  }
  str = str.replace(/-/g, '');
  var sum = 0,
    mul = 2,
    l = 14;
  for (var i = 0; i < l; i++) {
    var digit = str.substring(l - i - 1, l - i);
    var tp = parseInt(digit, 10) * mul;
    if (tp >= 10) {
      sum += tp % 10 + 1;
    } else {
      sum += tp;
    }
    if (mul === 1) {
      mul += 1;
    } else {
      mul -= 1;
    }
  }
  var chk = (10 - sum % 10) % 10;
  if (chk !== parseInt(str.substring(14, 15), 10)) {
    return false;
  }
  return true;
}