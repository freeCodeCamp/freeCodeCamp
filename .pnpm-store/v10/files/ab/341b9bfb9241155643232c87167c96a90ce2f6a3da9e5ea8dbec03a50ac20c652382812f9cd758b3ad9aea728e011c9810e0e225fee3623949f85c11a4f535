"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSymbolFromDefaultLibrary = isSymbolFromDefaultLibrary;
function isSymbolFromDefaultLibrary(program, symbol) {
    if (!symbol) {
        return false;
    }
    const declarations = symbol.getDeclarations() ?? [];
    for (const declaration of declarations) {
        const sourceFile = declaration.getSourceFile();
        if (program.isSourceFileDefaultLibrary(sourceFile)) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=isSymbolFromDefaultLibrary.js.map