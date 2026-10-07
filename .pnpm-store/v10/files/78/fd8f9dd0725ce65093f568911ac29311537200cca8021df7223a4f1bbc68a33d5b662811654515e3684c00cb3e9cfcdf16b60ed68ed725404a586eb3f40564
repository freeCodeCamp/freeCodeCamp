'use strict';

var map = require('../common/map.js');
var _null = require('../common/null.js');
var seq = require('../common/seq.js');
var string = require('../common/string.js');
var binary = require('./binary.js');
var bool = require('./bool.js');
var float = require('./float.js');
var int = require('./int.js');
var merge = require('./merge.js');
var omap = require('./omap.js');
var pairs = require('./pairs.js');
var set = require('./set.js');
var timestamp = require('./timestamp.js');

const schema = [
    map.map,
    seq.seq,
    string.string,
    _null.nullTag,
    bool.trueTag,
    bool.falseTag,
    int.intBin,
    int.intOct,
    int.int,
    int.intHex,
    float.floatNaN,
    float.floatExp,
    float.float,
    binary.binary,
    merge.merge,
    omap.omap,
    pairs.pairs,
    set.set,
    timestamp.intTime,
    timestamp.floatTime,
    timestamp.timestamp
];

exports.schema = schema;
