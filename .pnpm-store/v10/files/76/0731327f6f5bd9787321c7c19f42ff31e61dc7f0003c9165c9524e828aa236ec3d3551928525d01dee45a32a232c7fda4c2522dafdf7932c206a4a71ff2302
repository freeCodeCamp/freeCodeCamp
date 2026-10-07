"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPromiseLike = isPromiseLike;
exports.isPromiseConstructorLike = isPromiseConstructorLike;
exports.isErrorLike = isErrorLike;
exports.isReadonlyErrorLike = isReadonlyErrorLike;
exports.isReadonlyTypeLike = isReadonlyTypeLike;
exports.isBuiltinTypeAliasLike = isBuiltinTypeAliasLike;
exports.isBuiltinSymbolLike = isBuiltinSymbolLike;
exports.isBuiltinSymbolLikeRecurser = isBuiltinSymbolLikeRecurser;
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const isSymbolFromDefaultLibrary_1 = require("./isSymbolFromDefaultLibrary");
/**
 * @example
 * ```ts
 * class DerivedClass extends Promise<number> {}
 * DerivedClass.reject
 * // ^ PromiseLike
 * ```
 */
function isPromiseLike(program, type) {
    return isBuiltinSymbolLike(program, type, 'Promise');
}
/**
 * @example
 * ```ts
 * const value = Promise
 * value.reject
 * // ^ PromiseConstructorLike
 * ```
 */
function isPromiseConstructorLike(program, type) {
    return isBuiltinSymbolLike(program, type, 'PromiseConstructor');
}
/**
 * @example
 * ```ts
 * class Foo extends Error {}
 * new Foo()
 * //   ^ ErrorLike
 * ```
 */
function isErrorLike(program, type) {
    return isBuiltinSymbolLike(program, type, 'Error');
}
/**
 * @example
 * ```ts
 * type T = Readonly<Error>
 * //   ^ ReadonlyErrorLike
 * ```
 */
function isReadonlyErrorLike(program, type) {
    return isReadonlyTypeLike(program, type, subtype => {
        const [typeArgument] = subtype.aliasTypeArguments;
        return (isErrorLike(program, typeArgument) ||
            isReadonlyErrorLike(program, typeArgument));
    });
}
/**
 * @example
 * ```ts
 * type T = Readonly<{ foo: 'bar' }>
 * //   ^ ReadonlyTypeLike
 * ```
 */
function isReadonlyTypeLike(program, type, predicate) {
    return isBuiltinTypeAliasLike(program, type, subtype => {
        return (subtype.aliasSymbol.getName() === 'Readonly' && !!predicate?.(subtype));
    });
}
function isBuiltinTypeAliasLike(program, type, predicate) {
    return isBuiltinSymbolLikeRecurser(program, type, subtype => {
        const { aliasSymbol, aliasTypeArguments } = subtype;
        if (!aliasSymbol || !aliasTypeArguments) {
            return false;
        }
        if ((0, isSymbolFromDefaultLibrary_1.isSymbolFromDefaultLibrary)(program, aliasSymbol) &&
            predicate(subtype)) {
            return true;
        }
        return null;
    });
}
function isBuiltinSymbolLike(program, type, symbolName) {
    return isBuiltinSymbolLikeRecurser(program, type, subType => {
        const symbol = subType.getSymbol();
        if (!symbol) {
            return false;
        }
        const actualSymbolName = symbol.getName();
        if ((Array.isArray(symbolName)
            ? symbolName.some(name => actualSymbolName === name)
            : actualSymbolName === symbolName) &&
            (0, isSymbolFromDefaultLibrary_1.isSymbolFromDefaultLibrary)(program, symbol)) {
            return true;
        }
        return null;
    });
}
function isBuiltinSymbolLikeRecurser(program, type, predicate) {
    if (type.isIntersection()) {
        return type.types.some(t => isBuiltinSymbolLikeRecurser(program, t, predicate));
    }
    if (type.isUnion()) {
        return type.types.every(t => isBuiltinSymbolLikeRecurser(program, t, predicate));
    }
    if (tsutils.isTypeParameter(type)) {
        const t = type.getConstraint();
        if (t) {
            return isBuiltinSymbolLikeRecurser(program, t, predicate);
        }
        return false;
    }
    const predicateResult = predicate(type);
    if (typeof predicateResult === 'boolean') {
        return predicateResult;
    }
    const symbol = type.getSymbol();
    if (symbol &&
        tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.Class | ts.SymbolFlags.Interface)) {
        const checker = program.getTypeChecker();
        const declaredType = checker.getDeclaredTypeOfSymbol(symbol);
        for (const baseType of checker.getBaseTypes(declaredType)) {
            if (isBuiltinSymbolLikeRecurser(program, baseType, predicate)) {
                return true;
            }
        }
    }
    return false;
}
//# sourceMappingURL=builtinSymbolLikes.js.map