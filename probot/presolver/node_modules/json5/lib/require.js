// require.js
// Node.js only: adds a require() hook for .json5 files, just like the native
// hook for .json files.
//
// Usage:
// require('json5/require');
// require('./foo');    // will check foo.json5 after foo.js, foo.json, etc.
// require('./bar.json5');

var FS = require('fs');
var JSON5 = require('./json5');

// Modeled off of (v0.6.18 link; check latest too):
// https://github.com/joyent/node/blob/v0.6.18/lib/module.js#L468-L472
require.extensions['.json5'] = function (module, filename) {
    var content = FS.readFileSync(filename, 'utf8');
    module.exports = JSON5.parse(content);
};
