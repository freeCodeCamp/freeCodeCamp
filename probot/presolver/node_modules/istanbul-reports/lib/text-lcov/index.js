/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var util = require('util'),
    LcovOnly = require('../lcovonly');

function TextLcov(opts) {
    opts.file = '-';
    LcovOnly.call(this, opts);
}

util.inherits(TextLcov, LcovOnly);
module.exports = TextLcov;
