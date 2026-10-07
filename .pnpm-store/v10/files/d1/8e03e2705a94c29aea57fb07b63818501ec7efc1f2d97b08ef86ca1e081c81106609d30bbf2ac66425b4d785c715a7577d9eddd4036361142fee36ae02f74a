'use strict';

var path = require('path');

function getLongExtension(basename) {
  if (basename[basename.length - 1] === '.') {
    return null;
  }

  var startIndex = (basename[0] === '.') ? 1 : 0;

  var dotIndex = basename.indexOf('.', startIndex);
  if (dotIndex <= startIndex) {
    return null;
  }

  return basename.slice(dotIndex);
}

function getPossibleExtensions(longExtension) {
  var arr = [longExtension];
  var len = longExtension.length;
  var startIndex = 1;

  while (startIndex < len) {
    var dotIndex = longExtension.indexOf('.', startIndex);
    if (dotIndex < 0) {
      break;
    }
    arr.push(longExtension.slice(dotIndex));
    startIndex = dotIndex + 1;
  }

  return arr;
}

module.exports = function(input) {
  var basename = path.basename(input);
  var longExtension = getLongExtension(basename);
  if (!longExtension) {
    return;
  }
  return getPossibleExtensions(longExtension);
};
