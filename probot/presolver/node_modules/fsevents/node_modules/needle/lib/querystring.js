// based on the qs module, but handles null objects as expected
// fixes by Tomas Pollak.

var toString = Object.prototype.toString;

function stringify(obj, prefix) {
  if (prefix && (obj === null || typeof obj == 'undefined')) {
    return prefix + '=';
  } else if (toString.call(obj) == '[object Array]') {
    return stringifyArray(obj, prefix);
  } else if (toString.call(obj) == '[object Object]') {
    return stringifyObject(obj, prefix);
  } else if (toString.call(obj) == '[object Date]') {
    return obj.toISOString();
  } else if (prefix) { // string inside array or hash
    return prefix + '=' + encodeURIComponent(String(obj));
  } else if (String(obj).indexOf('=') !== -1) { // string with equal sign
    return String(obj);
  } else {
    throw new TypeError('Cannot build a querystring out of: ' + obj);
  }
};

function stringifyArray(arr, prefix) {
  var ret = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    if (prefix)
      ret.push(stringify(arr[i], prefix + '[]'));
    else
      ret.push(stringify(arr[i]));
  }

  return ret.join('&');
}

function stringifyObject(obj, prefix) {
  var ret = [];

  Object.keys(obj).forEach(function(key) {
    ret.push(stringify(obj[key], prefix
      ? prefix + '[' + encodeURIComponent(key) + ']'
      : encodeURIComponent(key)));
  })

  return ret.join('&');
}

exports.build = stringify;
