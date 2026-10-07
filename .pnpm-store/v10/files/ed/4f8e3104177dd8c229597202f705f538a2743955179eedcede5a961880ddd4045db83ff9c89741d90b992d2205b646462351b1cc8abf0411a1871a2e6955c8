"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueOfLiteralType = void 0;
const valueIsPseudoBigInt = (value) => {
    return typeof value === 'object';
};
const pseudoBigIntToBigInt = (value) => {
    return BigInt((value.negative ? '-' : '') + value.base10Value);
};
const getValueOfLiteralType = (type) => {
    if (valueIsPseudoBigInt(type.value)) {
        return pseudoBigIntToBigInt(type.value);
    }
    return type.value;
};
exports.getValueOfLiteralType = getValueOfLiteralType;
//# sourceMappingURL=getValueOfLiteralType.js.map