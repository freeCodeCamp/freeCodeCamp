"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webSegment = webSegment;
const CharacterRangeArbitraryBuilder_1 = require("./_internals/builders/CharacterRangeArbitraryBuilder");
const string_1 = require("./string");
function webSegment(constraints = {}) {
    return (0, string_1.string)({ unit: (0, CharacterRangeArbitraryBuilder_1.getOrCreateAlphaNumericPercentArbitrary)("-._~!$&'()*+,;=:@"), size: constraints.size });
}
