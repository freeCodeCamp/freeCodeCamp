"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webPath = webPath;
const MaxLengthFromMinLength_1 = require("./_internals/helpers/MaxLengthFromMinLength");
const UriPathArbitraryBuilder_1 = require("./_internals/builders/UriPathArbitraryBuilder");
function webPath(constraints) {
    const c = constraints || {};
    const resolvedSize = (0, MaxLengthFromMinLength_1.resolveSize)(c.size);
    return (0, UriPathArbitraryBuilder_1.buildUriPathArbitrary)(resolvedSize);
}
