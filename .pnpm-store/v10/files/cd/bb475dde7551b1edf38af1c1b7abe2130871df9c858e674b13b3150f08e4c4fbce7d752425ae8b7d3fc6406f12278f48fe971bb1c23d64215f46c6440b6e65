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
exports.checkModifiers = checkModifiers;
const ts = __importStar(require("typescript"));
const getModifiers_1 = require("./getModifiers");
const node_utils_1 = require("./node-utils");
const SyntaxKind = ts.SyntaxKind;
// `ts.nodeIsMissing`
function nodeIsMissing(node) {
    if (node == null) {
        return true;
    }
    return (node.pos === node.end &&
        node.pos >= 0 &&
        node.kind !== SyntaxKind.EndOfFileToken);
}
// `ts.nodeIsPresent`
function nodeIsPresent(node) {
    return !nodeIsMissing(node);
}
// `ts.hasAbstractModifier`
function hasAbstractModifier(node) {
    return (0, node_utils_1.hasModifier)(SyntaxKind.AbstractKeyword, node);
}
// `ts.getThisParameter`
function getThisParameter(signature) {
    if (signature.parameters.length && !ts.isJSDocSignature(signature)) {
        const thisParameter = signature.parameters[0];
        if (parameterIsThisKeyword(thisParameter)) {
            return thisParameter;
        }
    }
    return null;
}
// `ts.parameterIsThisKeyword`
function parameterIsThisKeyword(parameter) {
    return (0, node_utils_1.isThisIdentifier)(parameter.name);
}
// `ts.getContainingFunction`
function getContainingFunction(node) {
    return ts.findAncestor(node.parent, ts.isFunctionLike);
}
// Rewrite version of `ts.nodeCanBeDecorated`
// Returns `true` for both `useLegacyDecorators: true` and `useLegacyDecorators: false`
function nodeCanBeDecorated(node) {
    switch (node.kind) {
        case SyntaxKind.ClassDeclaration:
            return true;
        case SyntaxKind.ClassExpression:
            // `ts.nodeCanBeDecorated` returns `false` if `useLegacyDecorators: true`
            return true;
        case SyntaxKind.PropertyDeclaration: {
            const { parent } = node;
            // `ts.nodeCanBeDecorated` uses this if `useLegacyDecorators: true`
            if (ts.isClassDeclaration(parent)) {
                return true;
            }
            // `ts.nodeCanBeDecorated` uses this if `useLegacyDecorators: false`
            // parent is already a ClassLike subtype; defensive check
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (ts.isClassLike(parent) && !hasAbstractModifier(node)) {
                return true;
            }
            return false;
        }
        case SyntaxKind.GetAccessor:
        case SyntaxKind.SetAccessor:
        case SyntaxKind.MethodDeclaration: {
            const { parent } = node;
            // In `ts.nodeCanBeDecorated`
            // when `useLegacyDecorators: true` uses `ts.isClassDeclaration`
            // when `useLegacyDecorators: true` uses `ts.isClassLike`
            return (Boolean(node.body) &&
                (ts.isClassDeclaration(parent) || ts.isClassLike(parent)));
        }
        case SyntaxKind.Parameter: {
            // `ts.nodeCanBeDecorated` returns `false` if `useLegacyDecorators: false`
            const { parent } = node;
            const grandparent = parent.parent;
            return (Boolean(parent) &&
                'body' in parent &&
                Boolean(parent.body) &&
                (parent.kind === SyntaxKind.Constructor ||
                    parent.kind === SyntaxKind.MethodDeclaration ||
                    parent.kind === SyntaxKind.SetAccessor) &&
                getThisParameter(parent) !== node &&
                Boolean(grandparent) &&
                grandparent.kind === SyntaxKind.ClassDeclaration);
        }
    }
    return false;
}
function nodeHasIllegalDecorators(node) {
    return !!('illegalDecorators' in node &&
        node.illegalDecorators?.length);
}
function checkModifiers(node) {
    // typescript<5.0.0
    if (nodeHasIllegalDecorators(node)) {
        throw (0, node_utils_1.createError)(node.illegalDecorators[0], 'Decorators are not valid here.');
    }
    for (const decorator of (0, getModifiers_1.getDecorators)(node, 
    /* includeIllegalDecorators */ true) ?? []) {
        // `checkGrammarModifiers` function in typescript
        if (!nodeCanBeDecorated(node)) {
            if (ts.isMethodDeclaration(node) && !nodeIsPresent(node.body)) {
                throw (0, node_utils_1.createError)(decorator, 'A decorator can only decorate a method implementation, not an overload.');
            }
            else {
                throw (0, node_utils_1.createError)(decorator, 'Decorators are not valid here.');
            }
        }
    }
    const modifiers = (0, getModifiers_1.getModifiers)(node, /* includeIllegalModifiers */ true) ?? [];
    for (const modifier of modifiers) {
        if (modifier.kind !== SyntaxKind.ReadonlyKeyword) {
            if (node.kind === SyntaxKind.PropertySignature ||
                node.kind === SyntaxKind.MethodSignature) {
                throw (0, node_utils_1.createError)(modifier, `'${ts.tokenToString(modifier.kind)}' modifier cannot appear on a type member`);
            }
            if (node.kind === SyntaxKind.IndexSignature &&
                (modifier.kind !== SyntaxKind.StaticKeyword ||
                    !ts.isClassLike(node.parent))) {
                throw (0, node_utils_1.createError)(modifier, `'${ts.tokenToString(modifier.kind)}' modifier cannot appear on an index signature`);
            }
        }
        if (modifier.kind !== SyntaxKind.InKeyword &&
            modifier.kind !== SyntaxKind.OutKeyword &&
            modifier.kind !== SyntaxKind.ConstKeyword &&
            node.kind === SyntaxKind.TypeParameter) {
            throw (0, node_utils_1.createError)(modifier, `'${ts.tokenToString(modifier.kind)}' modifier cannot appear on a type parameter`);
        }
        if ((modifier.kind === SyntaxKind.InKeyword ||
            modifier.kind === SyntaxKind.OutKeyword) &&
            (node.kind !== SyntaxKind.TypeParameter ||
                !(ts.isInterfaceDeclaration(node.parent) ||
                    ts.isClassLike(node.parent) ||
                    ts.isTypeAliasDeclaration(node.parent)))) {
            throw (0, node_utils_1.createError)(modifier, `'${ts.tokenToString(modifier.kind)}' modifier can only appear on a type parameter of a class, interface or type alias`);
        }
        if (modifier.kind === SyntaxKind.ReadonlyKeyword &&
            node.kind !== SyntaxKind.PropertyDeclaration &&
            node.kind !== SyntaxKind.PropertySignature &&
            node.kind !== SyntaxKind.IndexSignature &&
            node.kind !== SyntaxKind.Parameter) {
            throw (0, node_utils_1.createError)(modifier, "'readonly' modifier can only appear on a property declaration or index signature.");
        }
        if (modifier.kind === SyntaxKind.DeclareKeyword &&
            ts.isClassLike(node.parent) &&
            !ts.isPropertyDeclaration(node)) {
            throw (0, node_utils_1.createError)(modifier, `'${ts.tokenToString(modifier.kind)}' modifier cannot appear on class elements of this kind.`);
        }
        if (modifier.kind === SyntaxKind.DeclareKeyword &&
            ts.isVariableStatement(node)) {
            const declarationKind = (0, node_utils_1.getDeclarationKind)(node.declarationList);
            if (declarationKind === 'using' || declarationKind === 'await using') {
                throw (0, node_utils_1.createError)(modifier, `'declare' modifier cannot appear on a '${declarationKind}' declaration.`);
            }
        }
        if (modifier.kind === SyntaxKind.AbstractKeyword &&
            node.kind !== SyntaxKind.ClassDeclaration &&
            node.kind !== SyntaxKind.ConstructorType &&
            node.kind !== SyntaxKind.MethodDeclaration &&
            node.kind !== SyntaxKind.PropertyDeclaration &&
            node.kind !== SyntaxKind.GetAccessor &&
            node.kind !== SyntaxKind.SetAccessor) {
            throw (0, node_utils_1.createError)(modifier, `'${ts.tokenToString(modifier.kind)}' modifier can only appear on a class, method, or property declaration.`);
        }
        if ((modifier.kind === SyntaxKind.StaticKeyword ||
            modifier.kind === SyntaxKind.PublicKeyword ||
            modifier.kind === SyntaxKind.ProtectedKeyword ||
            modifier.kind === SyntaxKind.PrivateKeyword) &&
            (node.parent.kind === SyntaxKind.ModuleBlock ||
                node.parent.kind === SyntaxKind.SourceFile)) {
            throw (0, node_utils_1.createError)(modifier, `'${ts.tokenToString(modifier.kind)}' modifier cannot appear on a module or namespace element.`);
        }
        if (modifier.kind === SyntaxKind.AccessorKeyword &&
            node.kind !== SyntaxKind.PropertyDeclaration) {
            throw (0, node_utils_1.createError)(modifier, "'accessor' modifier can only appear on a property declaration.");
        }
        // `checkGrammarAsyncModifier` function in `typescript`
        if (modifier.kind === SyntaxKind.AsyncKeyword &&
            node.kind !== SyntaxKind.MethodDeclaration &&
            node.kind !== SyntaxKind.FunctionDeclaration &&
            node.kind !== SyntaxKind.FunctionExpression &&
            node.kind !== SyntaxKind.ArrowFunction) {
            throw (0, node_utils_1.createError)(modifier, "'async' modifier cannot be used here.");
        }
        // `checkGrammarModifiers` function in `typescript`
        if (node.kind === SyntaxKind.Parameter &&
            (modifier.kind === SyntaxKind.StaticKeyword ||
                modifier.kind === SyntaxKind.ExportKeyword ||
                modifier.kind === SyntaxKind.DeclareKeyword ||
                modifier.kind === SyntaxKind.AsyncKeyword)) {
            throw (0, node_utils_1.createError)(modifier, `'${ts.tokenToString(modifier.kind)}' modifier cannot appear on a parameter.`);
        }
        // `checkGrammarModifiers` function in `typescript`
        if (modifier.kind === SyntaxKind.PublicKeyword ||
            modifier.kind === SyntaxKind.ProtectedKeyword ||
            modifier.kind === SyntaxKind.PrivateKeyword) {
            for (const anotherModifier of modifiers) {
                if (anotherModifier !== modifier &&
                    (anotherModifier.kind === SyntaxKind.PublicKeyword ||
                        anotherModifier.kind === SyntaxKind.ProtectedKeyword ||
                        anotherModifier.kind === SyntaxKind.PrivateKeyword)) {
                    throw (0, node_utils_1.createError)(anotherModifier, `Accessibility modifier already seen.`);
                }
            }
        }
        // `checkParameter` function in `typescript`
        if (node.kind === SyntaxKind.Parameter &&
            // In `typescript` package, it's `ts.hasSyntacticModifier(node, ts.ModifierFlags.ParameterPropertyModifier)`
            // https://github.com/typescript-eslint/typescript-eslint/pull/6615#discussion_r1136489935
            (modifier.kind === SyntaxKind.PublicKeyword ||
                modifier.kind === SyntaxKind.PrivateKeyword ||
                modifier.kind === SyntaxKind.ProtectedKeyword ||
                modifier.kind === SyntaxKind.ReadonlyKeyword ||
                modifier.kind === SyntaxKind.OverrideKeyword)) {
            const func = getContainingFunction(node);
            if (!(func?.kind === SyntaxKind.Constructor && nodeIsPresent(func.body))) {
                throw (0, node_utils_1.createError)(modifier, 'A parameter property is only allowed in a constructor implementation.');
            }
            const param = node;
            if (param.dotDotDotToken) {
                throw (0, node_utils_1.createError)(modifier, 'A parameter property cannot be a rest parameter.');
            }
            if (param.name.kind === SyntaxKind.ArrayBindingPattern ||
                param.name.kind === SyntaxKind.ObjectBindingPattern) {
                throw (0, node_utils_1.createError)(modifier, 'A parameter property may not be declared using a binding pattern.');
            }
        }
        checkObjectPropertyModifier(node, modifier);
    }
    // `ts.getModifiers()` can't access invalid modifiers on object properties
    // Eg: `({declare a: 1})`
    // See https://github.com/typescript-eslint/typescript-eslint/pull/11931#discussion_r2678961730
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- incorrect type
    if (node.parent?.kind === SyntaxKind.ObjectLiteralExpression) {
        // @ts-expect-error intentional to access deprecated `node.modifiers`
        for (const modifier of node.modifiers ??
            []) {
            if (ts.isDecorator(modifier) || modifiers.includes(modifier)) {
                continue;
            }
            checkObjectPropertyModifier(node, modifier);
        }
    }
}
function checkObjectPropertyModifier(node, modifier) {
    // From `checkGrammarObjectLiteralExpression` function in `typescript`
    if ((modifier.kind !== SyntaxKind.AsyncKeyword ||
        node.kind !== SyntaxKind.MethodDeclaration) &&
        node.parent.kind === SyntaxKind.ObjectLiteralExpression) {
        throw (0, node_utils_1.createError)(modifier, `'${ts.tokenToString(modifier.kind)}' modifier cannot be used here.`);
    }
}
