'use strict';
const packageJson = require('package-json');

module.exports = name => packageJson(name.toLowerCase()).then(data => data.version);
