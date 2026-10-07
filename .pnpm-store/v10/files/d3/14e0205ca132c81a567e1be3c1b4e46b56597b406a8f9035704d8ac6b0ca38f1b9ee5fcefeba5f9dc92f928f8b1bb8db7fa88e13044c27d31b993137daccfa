"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTokenPosition = calculateTokenPosition;
const calculate_token_characters_range_1 = require("./calculate-token-characters-range");
const calculate_token_location_1 = require("./calculate-token-location");
function calculateTokenPosition(state, options) {
    const range = (0, calculate_token_characters_range_1.calculateTokenCharactersRange)(state, options);
    const loc = (0, calculate_token_location_1.calculateTokenLocation)(state.sourceCode.source, range);
    return {
        range,
        loc,
    };
}
