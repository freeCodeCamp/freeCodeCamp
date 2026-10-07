function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}
export default function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}