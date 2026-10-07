"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResponseKeyFromInfo = void 0;
/**
 * Get the key under which the result of this resolver will be placed in the response JSON. Basically, just
 * resolves aliases.
 * @param info The info argument to the resolver.
 */
function getResponseKeyFromInfo(info) {
    return info.fieldNodes[0].alias != null ? info.fieldNodes[0].alias.value : info.fieldName;
}
exports.getResponseKeyFromInfo = getResponseKeyFromInfo;
