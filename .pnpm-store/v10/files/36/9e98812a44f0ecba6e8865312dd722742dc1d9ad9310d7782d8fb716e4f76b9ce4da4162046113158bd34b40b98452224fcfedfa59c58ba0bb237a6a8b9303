import assertString from './util/assertString';
export default function whitelist(str, chars) {
  assertString(str);
  return str.replace(new RegExp("[^".concat(chars, "]+"), 'g'), '');
}