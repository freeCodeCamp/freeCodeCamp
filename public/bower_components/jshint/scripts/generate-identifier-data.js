// Based on https://gist.github.com/mathiasbynens/6334847 by @mathias

'use strict';

var regenerate = require('regenerate');

// Which Unicode version should be used?
var version = '6.3.0'; // note: also update `package.json` when this changes

// Shorthand function
var get = function(what) {
  return require('unicode-' + version + '/' + what + '/code-points');
};

// Unicode categories needed to construct the ES5 regex
var Lu = get('categories/Lu');
var Ll = get('categories/Ll');
var Lt = get('categories/Lt');
var Lm = get('categories/Lm');
var Lo = get('categories/Lo');
var Nl = get('categories/Nl');
var Mn = get('categories/Mn');
var Mc = get('categories/Mc');
var Nd = get('categories/Nd');
var Pc = get('categories/Pc');

var generateES5Data = function() { // ES 5.1
  // http://mathiasbynens.be/notes/javascript-identifiers#valid-identifier-names
  var identifierStart = regenerate('$', '_')
    .add(Lu, Ll, Lt, Lm, Lo, Nl)
    .removeRange(0x010000, 0x10FFFF) // remove astral symbols
    .removeRange(0x0, 0x7F); // remove ASCII symbols (JSHint-specific)
  var identifierStartCodePoints = identifierStart.toArray();
  var identifierPart = regenerate()
    .add(0x200C, 0x200D, Mn, Mc, Nd, Pc)
    // remove astral symbols
    .removeRange(0x010000, 0x10FFFF)
    // remove ASCII symbols (JSHint-specific)
    .removeRange(0x0, 0x7F)
    // just to make sure no `IdentifierStart` code points are repeated here
    .remove(identifierStartCodePoints);
  return {
    'nonAsciiIdentifierStart': identifierStart.toArray(),
    'nonAsciiIdentifierPart': identifierPart.toArray()
  };
};

var fs = require('fs');
var writeFile = function(fileName, data) {
  fs.writeFileSync(
    fileName,
    [
    'var str = \'' + data.join(',') + '\';',
    'var arr = str.split(\',\').map(function(code) {',
    '  return parseInt(code, 10);',
    '});',
    'module.exports = arr;'
    ].join('\n')
  );
};

var result = generateES5Data();
writeFile('./data/non-ascii-identifier-start.js', result.nonAsciiIdentifierStart);
writeFile('./data/non-ascii-identifier-part-only.js', result.nonAsciiIdentifierPart);
