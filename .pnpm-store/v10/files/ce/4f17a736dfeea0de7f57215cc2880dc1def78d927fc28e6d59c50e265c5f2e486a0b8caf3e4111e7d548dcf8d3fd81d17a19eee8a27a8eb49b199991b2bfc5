"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.falsy = falsy;
const globals_1 = require("../utils/globals");
const constantFrom_1 = require("./constantFrom");
function falsy(constraints) {
    if (!constraints || !constraints.withBigInt) {
        return (0, constantFrom_1.constantFrom)(false, null, undefined, 0, '', NaN);
    }
    return (0, constantFrom_1.constantFrom)(false, null, undefined, 0, '', NaN, (0, globals_1.BigInt)(0));
}
