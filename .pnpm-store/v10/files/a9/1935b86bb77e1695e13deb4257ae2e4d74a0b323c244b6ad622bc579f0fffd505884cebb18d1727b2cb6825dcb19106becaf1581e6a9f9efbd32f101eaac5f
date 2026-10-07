"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeclaration = getDeclaration;
/**
 * Gets the declaration for the given variable
 */
function getDeclaration(services, node) {
    const symbol = services.getSymbolAtLocation(node);
    if (!symbol) {
        return null;
    }
    const declarations = symbol.getDeclarations();
    return declarations?.[0] ?? null;
}
//# sourceMappingURL=getDeclaration.js.map