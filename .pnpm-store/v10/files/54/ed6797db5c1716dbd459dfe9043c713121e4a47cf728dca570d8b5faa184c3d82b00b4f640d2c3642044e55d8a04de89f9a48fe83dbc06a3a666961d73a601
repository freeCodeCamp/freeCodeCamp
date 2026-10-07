import assertString from './util/assertString';
var bech32 = /^(bc1|tb1|bc1p|tb1p)[ac-hj-np-z02-9]{39,58}$/;
var base58 = /^(1|2|3|m)[A-HJ-NP-Za-km-z1-9]{25,39}$/;
export default function isBtcAddress(str) {
  assertString(str);
  return bech32.test(str) || base58.test(str);
}