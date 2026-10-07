"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBaseClassMemberOfClassElement = exports.getIteratorYieldResultFromIteratorResult = exports.getInstanceTypeOfClassLikeDeclaration = exports.getConstructorTypeOfClassLikeDeclaration = exports.getSymbolOfClassLikeDeclaration = exports.getPropertyNameFromType = exports.symbolHasReadonlyDeclaration = exports.isPropertyReadonlyInType = exports.getWellKnownSymbolPropertyOfType = exports.getPropertyOfType = exports.isBooleanLiteralType = exports.isFalsyType = exports.isThenableType = exports.someTypePart = exports.intersectionTypeParts = exports.unionTypeParts = exports.getCallSignaturesOfType = exports.isTypeAssignableToString = exports.isTypeAssignableToNumber = exports.isOptionalChainingUndefinedMarkerType = exports.removeOptionalChainingUndefinedMarkerType = exports.removeOptionalityFromType = exports.isEmptyObjectType = void 0;
const ts = require("typescript");
const type_1 = require("../typeguard/type");
const util_1 = require("./util");
const node_1 = require("../typeguard/node");
function isEmptyObjectType(type) {
    if (type_1.isObjectType(type) &&
        type.objectFlags & ts.ObjectFlags.Anonymous &&
        type.getProperties().length === 0 &&
        type.getCallSignatures().length === 0 &&
        type.getConstructSignatures().length === 0 &&
        type.getStringIndexType() === undefined &&
        type.getNumberIndexType() === undefined) {
        const baseTypes = type.getBaseTypes();
        return baseTypes === undefined || baseTypes.every(isEmptyObjectType);
    }
    return false;
}
exports.isEmptyObjectType = isEmptyObjectType;
function removeOptionalityFromType(checker, type) {
    if (!containsTypeWithFlag(type, ts.TypeFlags.Undefined))
        return type;
    const allowsNull = containsTypeWithFlag(type, ts.TypeFlags.Null);
    type = checker.getNonNullableType(type);
    return allowsNull ? checker.getNullableType(type, ts.TypeFlags.Null) : type;
}
exports.removeOptionalityFromType = removeOptionalityFromType;
function containsTypeWithFlag(type, flag) {
    for (const t of unionTypeParts(type))
        if (util_1.isTypeFlagSet(t, flag))
            return true;
    return false;
}
function removeOptionalChainingUndefinedMarkerType(checker, type) {
    if (!type_1.isUnionType(type))
        return isOptionalChainingUndefinedMarkerType(checker, type) ? type.getNonNullableType() : type;
    let flags = 0;
    let containsUndefinedMarker = false;
    for (const t of type.types) {
        if (isOptionalChainingUndefinedMarkerType(checker, t)) {
            containsUndefinedMarker = true;
        }
        else {
            flags |= t.flags;
        }
    }
    return containsUndefinedMarker
        ? checker.getNullableType(type.getNonNullableType(), flags)
        : type;
}
exports.removeOptionalChainingUndefinedMarkerType = removeOptionalChainingUndefinedMarkerType;
function isOptionalChainingUndefinedMarkerType(checker, t) {
    return util_1.isTypeFlagSet(t, ts.TypeFlags.Undefined) && checker.getNullableType(t.getNonNullableType(), ts.TypeFlags.Undefined) !== t;
}
exports.isOptionalChainingUndefinedMarkerType = isOptionalChainingUndefinedMarkerType;
function isTypeAssignableToNumber(checker, type) {
    return isTypeAssignableTo(checker, type, ts.TypeFlags.NumberLike);
}
exports.isTypeAssignableToNumber = isTypeAssignableToNumber;
function isTypeAssignableToString(checker, type) {
    return isTypeAssignableTo(checker, type, ts.TypeFlags.StringLike);
}
exports.isTypeAssignableToString = isTypeAssignableToString;
function isTypeAssignableTo(checker, type, flags) {
    flags |= ts.TypeFlags.Any;
    let typeParametersSeen;
    return (function check(t) {
        if (type_1.isTypeParameter(t) && t.symbol !== undefined && t.symbol.declarations !== undefined) {
            if (typeParametersSeen === undefined) {
                typeParametersSeen = new Set([t]);
            }
            else if (!typeParametersSeen.has(t)) {
                typeParametersSeen.add(t);
            }
            else {
                return false;
            }
            const declaration = t.symbol.declarations[0];
            if (declaration.constraint === undefined)
                return true; // TODO really?
            return check(checker.getTypeFromTypeNode(declaration.constraint));
        }
        if (type_1.isUnionType(t))
            return t.types.every(check);
        if (type_1.isIntersectionType(t))
            return t.types.some(check);
        return util_1.isTypeFlagSet(t, flags);
    })(type);
}
function getCallSignaturesOfType(type) {
    if (type_1.isUnionType(type)) {
        const signatures = [];
        for (const t of type.types)
            signatures.push(...getCallSignaturesOfType(t));
        return signatures;
    }
    if (type_1.isIntersectionType(type)) {
        let signatures;
        for (const t of type.types) {
            const sig = getCallSignaturesOfType(t);
            if (sig.length !== 0) {
                if (signatures !== undefined)
                    return []; // if more than one type of the intersection has call signatures, none of them is useful for inference
                signatures = sig;
            }
        }
        return signatures === undefined ? [] : signatures;
    }
    return type.getCallSignatures();
}
exports.getCallSignaturesOfType = getCallSignaturesOfType;
/** Returns all types of a union type or an array containing `type` itself if it's no union type. */
function unionTypeParts(type) {
    return type_1.isUnionType(type) ? type.types : [type];
}
exports.unionTypeParts = unionTypeParts;
/** Returns all types of a intersection type or an array containing `type` itself if it's no intersection type. */
function intersectionTypeParts(type) {
    return type_1.isIntersectionType(type) ? type.types : [type];
}
exports.intersectionTypeParts = intersectionTypeParts;
function someTypePart(type, predicate, cb) {
    return predicate(type) ? type.types.some(cb) : cb(type);
}
exports.someTypePart = someTypePart;
function isThenableType(checker, node, type = checker.getTypeAtLocation(node)) {
    for (const ty of unionTypeParts(checker.getApparentType(type))) {
        const then = ty.getProperty('then');
        if (then === undefined)
            continue;
        const thenType = checker.getTypeOfSymbolAtLocation(then, node);
        for (const t of unionTypeParts(thenType))
            for (const signature of t.getCallSignatures())
                if (signature.parameters.length !== 0 && isCallback(checker, signature.parameters[0], node))
                    return true;
    }
    return false;
}
exports.isThenableType = isThenableType;
function isCallback(checker, param, node) {
    let type = checker.getApparentType(checker.getTypeOfSymbolAtLocation(param, node));
    if (param.valueDeclaration.dotDotDotToken) {
        // unwrap array type of rest parameter
        type = type.getNumberIndexType();
        if (type === undefined)
            return false;
    }
    for (const t of unionTypeParts(type))
        if (t.getCallSignatures().length !== 0)
            return true;
    return false;
}
/** Determine if a type is definitely falsy. This function doesn't unwrap union types. */
function isFalsyType(type) {
    if (type.flags & (ts.TypeFlags.Undefined | ts.TypeFlags.Null | ts.TypeFlags.Void))
        return true;
    if (type_1.isLiteralType(type))
        return !type.value;
    return isBooleanLiteralType(type, false);
}
exports.isFalsyType = isFalsyType;
/** Determines whether the given type is a boolean literal type and matches the given boolean literal (true or false). */
function isBooleanLiteralType(type, literal) {
    return util_1.isTypeFlagSet(type, ts.TypeFlags.BooleanLiteral) &&
        type.intrinsicName === (literal ? 'true' : 'false');
}
exports.isBooleanLiteralType = isBooleanLiteralType;
function getPropertyOfType(type, name) {
    if (!name.startsWith('__'))
        return type.getProperty(name);
    return type.getProperties().find((s) => s.escapedName === name);
}
exports.getPropertyOfType = getPropertyOfType;
function getWellKnownSymbolPropertyOfType(type, wellKnownSymbolName, checker) {
    const prefix = '__@' + wellKnownSymbolName;
    for (const prop of type.getProperties()) {
        if (!prop.name.startsWith(prefix))
            continue;
        const globalSymbol = checker.getApparentType(checker.getTypeAtLocation(prop.valueDeclaration.name.expression)).symbol;
        if (prop.escapedName === getPropertyNameOfWellKnownSymbol(checker, globalSymbol, wellKnownSymbolName))
            return prop;
    }
    return;
}
exports.getWellKnownSymbolPropertyOfType = getWellKnownSymbolPropertyOfType;
function getPropertyNameOfWellKnownSymbol(checker, symbolConstructor, symbolName) {
    const knownSymbol = symbolConstructor &&
        checker.getTypeOfSymbolAtLocation(symbolConstructor, symbolConstructor.valueDeclaration).getProperty(symbolName);
    const knownSymbolType = knownSymbol && checker.getTypeOfSymbolAtLocation(knownSymbol, knownSymbol.valueDeclaration);
    if (knownSymbolType && type_1.isUniqueESSymbolType(knownSymbolType))
        return knownSymbolType.escapedName;
    return ('__@' + symbolName);
}
/** Determines if writing to a certain property of a given type is allowed. */
function isPropertyReadonlyInType(type, name, checker) {
    let seenProperty = false;
    let seenReadonlySignature = false;
    for (const t of unionTypeParts(type)) {
        if (getPropertyOfType(t, name) === undefined) {
            // property is not present in this part of the union -> check for readonly index signature
            const index = (util_1.isNumericPropertyName(name) ? checker.getIndexInfoOfType(t, ts.IndexKind.Number) : undefined) ||
                checker.getIndexInfoOfType(t, ts.IndexKind.String);
            if (index !== undefined && index.isReadonly) {
                if (seenProperty)
                    return true;
                seenReadonlySignature = true;
            }
        }
        else if (seenReadonlySignature || isReadonlyPropertyIntersection(t, name, checker)) {
            return true;
        }
        else {
            seenProperty = true;
        }
    }
    return false;
}
exports.isPropertyReadonlyInType = isPropertyReadonlyInType;
function isReadonlyPropertyIntersection(type, name, checker) {
    return someTypePart(type, type_1.isIntersectionType, (t) => {
        const prop = getPropertyOfType(t, name);
        if (prop === undefined)
            return false;
        if (prop.flags & ts.SymbolFlags.Transient) {
            if (/^(?:[1-9]\d*|0)$/.test(name) && type_1.isTupleTypeReference(t))
                return t.target.readonly;
            switch (isReadonlyPropertyFromMappedType(t, name, checker)) {
                case true:
                    return true;
                case false:
                    return false;
                default:
                // `undefined` falls through
            }
        }
        return (
        // members of namespace import
        util_1.isSymbolFlagSet(prop, ts.SymbolFlags.ValueModule) ||
            // we unwrapped every mapped type, now we can check the actual declarations
            symbolHasReadonlyDeclaration(prop, checker));
    });
}
function isReadonlyPropertyFromMappedType(type, name, checker) {
    if (!type_1.isObjectType(type) || !util_1.isObjectFlagSet(type, ts.ObjectFlags.Mapped))
        return;
    const declaration = type.symbol.declarations[0];
    // well-known symbols are not affected by mapped types
    if (declaration.readonlyToken !== undefined && !/^__@[^@]+$/.test(name))
        return declaration.readonlyToken.kind !== ts.SyntaxKind.MinusToken;
    return isPropertyReadonlyInType(type.modifiersType, name, checker);
}
function symbolHasReadonlyDeclaration(symbol, checker) {
    return (symbol.flags & ts.SymbolFlags.Accessor) === ts.SymbolFlags.GetAccessor ||
        symbol.declarations !== undefined &&
            symbol.declarations.some((node) => util_1.isModifierFlagSet(node, ts.ModifierFlags.Readonly) ||
                node_1.isVariableDeclaration(node) && util_1.isNodeFlagSet(node.parent, ts.NodeFlags.Const) ||
                node_1.isCallExpression(node) && util_1.isReadonlyAssignmentDeclaration(node, checker) ||
                node_1.isEnumMember(node) ||
                (node_1.isPropertyAssignment(node) || node_1.isShorthandPropertyAssignment(node)) && util_1.isInConstContext(node.parent));
}
exports.symbolHasReadonlyDeclaration = symbolHasReadonlyDeclaration;
/** Returns the the literal name or unique symbol name from a given type. Doesn't unwrap union types. */
function getPropertyNameFromType(type) {
    // string or number literal. bigint is intentionally excluded
    if (type.flags & (ts.TypeFlags.StringLiteral | ts.TypeFlags.NumberLiteral)) {
        const value = String(type.value);
        return { displayName: value, symbolName: ts.escapeLeadingUnderscores(value) };
    }
    if (type_1.isUniqueESSymbolType(type))
        return {
            displayName: `[${type.symbol
                ? `${isKnownSymbol(type.symbol) ? 'Symbol.' : ''}${type.symbol.name}`
                : type.escapedName.replace(/^__@|@\d+$/g, '')}]`,
            symbolName: type.escapedName,
        };
}
exports.getPropertyNameFromType = getPropertyNameFromType;
function isKnownSymbol(symbol) {
    return util_1.isSymbolFlagSet(symbol, ts.SymbolFlags.Property) &&
        symbol.valueDeclaration !== undefined &&
        node_1.isInterfaceDeclaration(symbol.valueDeclaration.parent) &&
        symbol.valueDeclaration.parent.name.text === 'SymbolConstructor' &&
        isGlobalDeclaration(symbol.valueDeclaration.parent);
}
function isGlobalDeclaration(node) {
    return util_1.isNodeFlagSet(node.parent, ts.NodeFlags.GlobalAugmentation) || node_1.isSourceFile(node.parent) && !ts.isExternalModule(node.parent);
}
function getSymbolOfClassLikeDeclaration(node, checker) {
    var _a;
    return checker.getSymbolAtLocation((_a = node.name) !== null && _a !== void 0 ? _a : util_1.getChildOfKind(node, ts.SyntaxKind.ClassKeyword));
}
exports.getSymbolOfClassLikeDeclaration = getSymbolOfClassLikeDeclaration;
function getConstructorTypeOfClassLikeDeclaration(node, checker) {
    return node.kind === ts.SyntaxKind.ClassExpression
        ? checker.getTypeAtLocation(node)
        : checker.getTypeOfSymbolAtLocation(getSymbolOfClassLikeDeclaration(node, checker), node);
}
exports.getConstructorTypeOfClassLikeDeclaration = getConstructorTypeOfClassLikeDeclaration;
function getInstanceTypeOfClassLikeDeclaration(node, checker) {
    return node.kind === ts.SyntaxKind.ClassDeclaration
        ? checker.getTypeAtLocation(node)
        : checker.getDeclaredTypeOfSymbol(getSymbolOfClassLikeDeclaration(node, checker));
}
exports.getInstanceTypeOfClassLikeDeclaration = getInstanceTypeOfClassLikeDeclaration;
function getIteratorYieldResultFromIteratorResult(type, node, checker) {
    return type_1.isUnionType(type) && type.types.find((t) => {
        const done = t.getProperty('done');
        return done !== undefined &&
            isBooleanLiteralType(removeOptionalityFromType(checker, checker.getTypeOfSymbolAtLocation(done, node)), false);
    }) || type;
}
exports.getIteratorYieldResultFromIteratorResult = getIteratorYieldResultFromIteratorResult;
/** Lookup the declaration of a class member in the super class. */
function getBaseClassMemberOfClassElement(node, checker) {
    if (!node_1.isClassLikeDeclaration(node.parent))
        return;
    const base = util_1.getBaseOfClassLikeExpression(node.parent);
    if (base === undefined)
        return;
    const name = util_1.getSingleLateBoundPropertyNameOfPropertyName(node.name, checker);
    if (name === undefined)
        return;
    const baseType = checker.getTypeAtLocation(util_1.hasModifier(node.modifiers, ts.SyntaxKind.StaticKeyword)
        ? base.expression
        : base);
    return getPropertyOfType(baseType, name.symbolName);
}
exports.getBaseClassMemberOfClassElement = getBaseClassMemberOfClassElement;
//# sourceMappingURL=type.js.map