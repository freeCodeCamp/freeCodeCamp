'use strict';

exports['application/x-www-form-urlencoded'] = require('./urlencoded');
exports['application/json'] = require('./json');
exports.text = require('./text');

const binary = require('./image');
exports['application/octet-stream'] = binary;
exports['application/pdf'] = binary;
exports.image = binary;
