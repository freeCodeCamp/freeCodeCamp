"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmptyError_1 = require("../util/EmptyError");
var filter_1 = require("./filter");
var takeLast_1 = require("./takeLast");
var throwIfEmpty_1 = require("./throwIfEmpty");
var defaultIfEmpty_1 = require("./defaultIfEmpty");
var identity_1 = require("../util/identity");
function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) { return source.pipe(predicate ? filter_1.filter(function (v, i) { return predicate(v, i, source); }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () { return new EmptyError_1.EmptyError(); })); };
}
exports.last = last;
//# sourceMappingURL=last.js.map