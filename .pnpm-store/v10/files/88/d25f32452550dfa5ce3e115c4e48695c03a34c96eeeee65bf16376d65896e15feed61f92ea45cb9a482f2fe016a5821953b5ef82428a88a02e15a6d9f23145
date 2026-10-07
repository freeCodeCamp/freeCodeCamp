"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonConstraintsBuilder = jsonConstraintsBuilder;
const boolean_1 = require("../../boolean");
const constant_1 = require("../../constant");
const double_1 = require("../../double");
function jsonConstraintsBuilder(stringArbitrary, constraints) {
    const { depthSize, maxDepth } = constraints;
    const key = stringArbitrary;
    const values = [
        (0, boolean_1.boolean)(),
        (0, double_1.double)({ noDefaultInfinity: true, noNaN: true }),
        stringArbitrary,
        (0, constant_1.constant)(null),
    ];
    return { key, values, depthSize, maxDepth };
}
