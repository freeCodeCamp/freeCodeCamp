/* ! The MIT License (MIT) Copyright (c) 2014 Scott Corgan */

// This is adopted from https://github.com/scottcorgan/glob-slash/

const path = require('path');
const normalize = value => path.posix.normalize(path.posix.join('/', value));

module.exports = value => (value.charAt(0) === '!' ? `!${normalize(value.substr(1))}` : normalize(value));
module.exports.normalize = normalize;
