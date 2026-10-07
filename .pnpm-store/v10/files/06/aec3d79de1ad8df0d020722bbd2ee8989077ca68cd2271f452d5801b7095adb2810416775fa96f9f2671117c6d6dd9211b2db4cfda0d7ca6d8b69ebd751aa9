'use strict';

var map = require('../common/map.js');
var _null = require('../common/null.js');
var seq = require('../common/seq.js');
var string = require('../common/string.js');
var bool = require('./bool.js');
var float = require('./float.js');
var int = require('./int.js');

const schema = [
    map.map,
    seq.seq,
    string.string,
    _null.nullTag,
    bool.boolTag,
    int.intOct,
    int.int,
    int.intHex,
    float.floatNaN,
    float.floatExp,
    float.float
];

exports.schema = schema;
