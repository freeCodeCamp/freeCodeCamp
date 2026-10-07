'use strict';

// https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source === null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key;
  var i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    // eslint-disable-next-line no-continue
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

module.exports = _objectWithoutPropertiesLoose;
