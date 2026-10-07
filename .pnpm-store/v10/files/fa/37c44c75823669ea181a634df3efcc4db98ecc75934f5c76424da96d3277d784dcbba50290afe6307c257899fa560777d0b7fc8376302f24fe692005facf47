"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_1 = require("@sindresorhus/is");
function deepFreeze(object) {
    for (const value of Object.values(object)) {
        if (is_1.default.plainObject(value) || is_1.default.array(value)) {
            deepFreeze(value);
        }
    }
    return Object.freeze(object);
}
exports.default = deepFreeze;
