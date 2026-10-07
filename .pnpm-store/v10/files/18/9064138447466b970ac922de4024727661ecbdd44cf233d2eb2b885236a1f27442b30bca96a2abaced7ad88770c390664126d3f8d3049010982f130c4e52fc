"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.specifierNameMatches = specifierNameMatches;
function specifierNameMatches(type, names) {
    if (typeof names === 'string') {
        names = [names];
    }
    const symbol = type.aliasSymbol ?? type.getSymbol();
    const candidateNames = symbol
        ? [symbol.escapedName, type.intrinsicName]
        : [type.intrinsicName];
    if (names.some(item => candidateNames.includes(item))) {
        return true;
    }
    return false;
}
//# sourceMappingURL=specifierNameMatches.js.map