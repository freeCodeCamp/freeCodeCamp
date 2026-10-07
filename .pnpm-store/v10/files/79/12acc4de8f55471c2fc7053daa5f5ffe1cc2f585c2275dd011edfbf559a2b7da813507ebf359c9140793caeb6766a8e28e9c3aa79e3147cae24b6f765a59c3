"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeOfPropertyOfType = exports.getTypeOfPropertyOfName = void 0;
function getTypeOfPropertyOfName(checker, type, name, escapedName) {
    // Most names are directly usable in the checker and aren't different from escaped names
    if (!escapedName || !isSymbol(escapedName)) {
        return checker.getTypeOfPropertyOfType(type, name);
    }
    // Symbolic names may differ in their escaped name compared to their human-readable name
    // https://github.com/typescript-eslint/typescript-eslint/issues/2143
    const escapedProperty = type
        .getProperties()
        .find(property => property.escapedName === escapedName);
    return escapedProperty
        ? checker.getDeclaredTypeOfSymbol(escapedProperty)
        : undefined;
}
exports.getTypeOfPropertyOfName = getTypeOfPropertyOfName;
function getTypeOfPropertyOfType(checker, type, property) {
    return getTypeOfPropertyOfName(checker, type, property.getName(), property.getEscapedName());
}
exports.getTypeOfPropertyOfType = getTypeOfPropertyOfType;
// Symbolic names need to be specially handled because TS api is not sufficient for these cases.
// Source based on:
// https://github.com/microsoft/TypeScript/blob/0043abe982aae0d35f8df59f9715be6ada758ff7/src/compiler/utilities.ts#L3388-L3402
function isSymbol(escapedName) {
    return isKnownSymbol(escapedName) || isPrivateIdentifierSymbol(escapedName);
}
// case for escapedName: "__@foo@10", name: "__@foo@10"
function isKnownSymbol(escapedName) {
    return escapedName.startsWith('__@');
}
// case for escapedName: "__#1@#foo", name: "#foo"
function isPrivateIdentifierSymbol(escapedName) {
    return escapedName.startsWith('__#');
}
//# sourceMappingURL=propertyTypes.js.map