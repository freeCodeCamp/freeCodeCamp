"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUriQueryOrFragmentArbitrary = buildUriQueryOrFragmentArbitrary;
const CharacterRangeArbitraryBuilder_1 = require("./CharacterRangeArbitraryBuilder");
const string_1 = require("../../string");
function buildUriQueryOrFragmentArbitrary(size) {
    return (0, string_1.string)({ unit: (0, CharacterRangeArbitraryBuilder_1.getOrCreateAlphaNumericPercentArbitrary)("-._~!$&'()*+,;=:@/?"), size });
}
