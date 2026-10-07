"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scan_1 = require("./scan");
var takeLast_1 = require("./takeLast");
var defaultIfEmpty_1 = require("./defaultIfEmpty");
var pipe_1 = require("../util/pipe");
function reduce(accumulator, seed) {
    if (arguments.length >= 2) {
        return function reduceOperatorFunctionWithSeed(source) {
            return pipe_1.pipe(scan_1.scan(accumulator, seed), takeLast_1.takeLast(1), defaultIfEmpty_1.defaultIfEmpty(seed))(source);
        };
    }
    return function reduceOperatorFunction(source) {
        return pipe_1.pipe(scan_1.scan(function (acc, value, index) { return accumulator(acc, value, index + 1); }), takeLast_1.takeLast(1))(source);
    };
}
exports.reduce = reduce;
//# sourceMappingURL=reduce.js.map