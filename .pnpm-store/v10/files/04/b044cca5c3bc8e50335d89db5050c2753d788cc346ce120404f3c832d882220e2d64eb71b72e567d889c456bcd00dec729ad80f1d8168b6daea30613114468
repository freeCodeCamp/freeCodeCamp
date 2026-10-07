"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webAuthority = webAuthority;
const CharacterRangeArbitraryBuilder_1 = require("./_internals/builders/CharacterRangeArbitraryBuilder");
const constant_1 = require("./constant");
const domain_1 = require("./domain");
const ipV4_1 = require("./ipV4");
const ipV4Extended_1 = require("./ipV4Extended");
const ipV6_1 = require("./ipV6");
const nat_1 = require("./nat");
const oneof_1 = require("./oneof");
const option_1 = require("./option");
const string_1 = require("./string");
const tuple_1 = require("./tuple");
function hostUserInfo(size) {
    return (0, string_1.string)({ unit: (0, CharacterRangeArbitraryBuilder_1.getOrCreateAlphaNumericPercentArbitrary)("-._~!$&'()*+,;=:"), size });
}
function userHostPortMapper([u, h, p]) {
    return (u === null ? '' : `${u}@`) + h + (p === null ? '' : `:${p}`);
}
function userHostPortUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported');
    }
    const atPosition = value.indexOf('@');
    const user = atPosition !== -1 ? value.substring(0, atPosition) : null;
    const portRegex = /:(\d+)$/;
    const m = portRegex.exec(value);
    const port = m !== null ? Number(m[1]) : null;
    const host = m !== null ? value.substring(atPosition + 1, value.length - m[1].length - 1) : value.substring(atPosition + 1);
    return [user, host, port];
}
function bracketedMapper(s) {
    return `[${s}]`;
}
function bracketedUnmapper(value) {
    if (typeof value !== 'string' || value[0] !== '[' || value[value.length - 1] !== ']') {
        throw new Error('Unsupported');
    }
    return value.substring(1, value.length - 1);
}
function webAuthority(constraints) {
    const c = constraints || {};
    const size = c.size;
    const hostnameArbs = [
        (0, domain_1.domain)({ size }),
        ...(c.withIPv4 === true ? [(0, ipV4_1.ipV4)()] : []),
        ...(c.withIPv6 === true ? [(0, ipV6_1.ipV6)().map(bracketedMapper, bracketedUnmapper)] : []),
        ...(c.withIPv4Extended === true ? [(0, ipV4Extended_1.ipV4Extended)()] : []),
    ];
    return (0, tuple_1.tuple)(c.withUserInfo === true ? (0, option_1.option)(hostUserInfo(size)) : (0, constant_1.constant)(null), (0, oneof_1.oneof)(...hostnameArbs), c.withPort === true ? (0, option_1.option)((0, nat_1.nat)(65535)) : (0, constant_1.constant)(null)).map(userHostPortMapper, userHostPortUnmapper);
}
