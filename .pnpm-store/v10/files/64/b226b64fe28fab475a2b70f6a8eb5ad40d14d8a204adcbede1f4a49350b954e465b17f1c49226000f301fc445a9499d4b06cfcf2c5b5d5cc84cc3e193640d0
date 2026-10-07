"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmptyError_1 = require("../util/EmptyError");
var filter_1 = require("./filter");
var take_1 = require("./take");
var defaultIfEmpty_1 = require("./defaultIfEmpty");
var throwIfEmpty_1 = require("./throwIfEmpty");
var identity_1 = require("../util/identity");
function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function (source) { return source.pipe(predicate ? filter_1.filter(function (v, i) { return predicate(v, i, source); }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () { return new EmptyError_1.EmptyError(); })); };
}
exports.first = first;
//# sourceMappingURL=first.js.map