import assertString from './util/assertString';
import isBase64 from './isBase64';
export default function isJWT(str) {
  assertString(str);
  var dotSplit = str.split('.');
  var len = dotSplit.length;
  if (len !== 3) {
    return false;
  }
  return dotSplit.reduce(function (acc, currElem) {
    return acc && isBase64(currElem, {
      urlSafe: true
    });
  }, true);
}