"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipV4 = ipV4;
const globals_1 = require("../utils/globals");
const nat_1 = require("./nat");
const tuple_1 = require("./tuple");
const NatToStringifiedNat_1 = require("./_internals/mappers/NatToStringifiedNat");
function dotJoinerMapper(data) {
    return (0, globals_1.safeJoin)(data, '.');
}
function dotJoinerUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Invalid type');
    }
    return (0, globals_1.safeMap)((0, globals_1.safeSplit)(value, '.'), (v) => (0, NatToStringifiedNat_1.tryParseStringifiedNat)(v, 10));
}
function ipV4() {
    return (0, tuple_1.tuple)((0, nat_1.nat)(255), (0, nat_1.nat)(255), (0, nat_1.nat)(255), (0, nat_1.nat)(255)).map(dotJoinerMapper, dotJoinerUnmapper);
}
