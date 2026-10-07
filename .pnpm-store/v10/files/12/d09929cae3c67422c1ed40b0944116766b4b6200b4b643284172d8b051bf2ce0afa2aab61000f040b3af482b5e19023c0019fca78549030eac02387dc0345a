"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDeclaredInLib = typeDeclaredInLib;
function typeDeclaredInLib(declarationFiles, program) {
    // Assertion: The type is not an error type.
    // Intrinsic type (i.e. string, number, boolean, etc) - Treat it as if it's from lib.
    if (declarationFiles.length === 0) {
        return true;
    }
    return declarationFiles.some(declaration => program.isSourceFileDefaultLibrary(declaration));
}
//# sourceMappingURL=typeDeclaredInLib.js.map