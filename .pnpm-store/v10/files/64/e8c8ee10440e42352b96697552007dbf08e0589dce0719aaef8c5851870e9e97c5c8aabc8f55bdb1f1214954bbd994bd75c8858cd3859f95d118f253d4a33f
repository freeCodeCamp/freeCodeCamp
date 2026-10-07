"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNodeFrom = createNodeFrom;
const clone_location_1 = require("./clone-location");
const clone_range_1 = require("./clone-range");
function createNodeFrom(token) {
    const loc = (0, clone_location_1.cloneLocation)(token.loc);
    const range = (0, clone_range_1.cloneRange)(token.range);
    const ret = {
        type: token.type,
        value: token.value,
        loc,
        range,
    };
    // @ts-ignore
    if (token.parts) {
        // @ts-ignore
        ret.parts = token.parts;
    }
    return ret;
}
