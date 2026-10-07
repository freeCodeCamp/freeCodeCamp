import assertString from './util/assertString';
export default function toBoolean(str, strict) {
  assertString(str);
  if (strict) {
    return str === '1' || /^true$/i.test(str);
  }
  return str !== '0' && !/^false$/i.test(str) && str !== '';
}