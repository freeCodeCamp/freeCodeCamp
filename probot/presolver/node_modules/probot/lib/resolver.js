"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolve_1 = require("resolve");
var defaultOptions = {};
exports.resolve = function (appFnId, opts) {
    opts = opts || defaultOptions;
    // These are mostly to ease testing
    var basedir = opts.basedir || process.cwd();
    var resolver = opts.resolver || resolve_1.sync;
    return require(resolver(appFnId, { basedir: basedir }));
};
//# sourceMappingURL=resolver.js.map