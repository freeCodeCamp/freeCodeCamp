"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeArguments = void 0;
function getTypeArguments(type, checker) {
    var _a;
    // getTypeArguments was only added in TS3.7
    if (checker.getTypeArguments) {
        return checker.getTypeArguments(type);
    }
    return (_a = type.typeArguments) !== null && _a !== void 0 ? _a : [];
}
exports.getTypeArguments = getTypeArguments;
//# sourceMappingURL=getTypeArguments.js.map