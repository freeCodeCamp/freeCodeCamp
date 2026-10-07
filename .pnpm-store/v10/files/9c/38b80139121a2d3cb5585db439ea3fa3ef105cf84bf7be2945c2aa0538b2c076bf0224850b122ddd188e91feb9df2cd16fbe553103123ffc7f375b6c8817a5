"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipV4Extended = ipV4Extended;
const globals_1 = require("../utils/globals");
const oneof_1 = require("./oneof");
const tuple_1 = require("./tuple");
const StringifiedNatArbitraryBuilder_1 = require("./_internals/builders/StringifiedNatArbitraryBuilder");
function dotJoinerMapper(data) {
    return (0, globals_1.safeJoin)(data, '.');
}
function dotJoinerUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Invalid type');
    }
    return (0, globals_1.safeSplit)(value, '.');
}
function ipV4Extended() {
    return (0, oneof_1.oneof)((0, tuple_1.tuple)((0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255)).map(dotJoinerMapper, dotJoinerUnmapper), (0, tuple_1.tuple)((0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(65535)).map(dotJoinerMapper, dotJoinerUnmapper), (0, tuple_1.tuple)((0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(255), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(16777215)).map(dotJoinerMapper, dotJoinerUnmapper), (0, StringifiedNatArbitraryBuilder_1.buildStringifiedNatArbitrary)(4294967295));
}
