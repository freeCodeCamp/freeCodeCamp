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
exports.isStaticMemberAccessOfValue = exports.MemberNameType = void 0;
exports.isDefinitionFile = isDefinitionFile;
exports.upperCaseFirst = upperCaseFirst;
exports.arrayGroupByToMap = arrayGroupByToMap;
exports.arraysAreEqual = arraysAreEqual;
exports.findFirstResult = findFirstResult;
exports.getNameFromIndexSignature = getNameFromIndexSignature;
exports.getNameFromMember = getNameFromMember;
exports.getEnumNames = getEnumNames;
exports.formatWordList = formatWordList;
exports.findLastIndex = findLastIndex;
exports.typeNodeRequiresParentheses = typeNodeRequiresParentheses;
exports.isRestParameterDeclaration = isRestParameterDeclaration;
exports.isParenlessArrowFunction = isParenlessArrowFunction;
exports.getStaticMemberAccessValue = getStaticMemberAccessValue;
const type_utils_1 = require("@typescript-eslint/type-utils");
const utils_1 = require("@typescript-eslint/utils");
const ts = __importStar(require("typescript"));
const astUtils_1 = require("./astUtils");
const DEFINITION_EXTENSIONS = [
    ts.Extension.Dts,
    ts.Extension.Dcts,
    ts.Extension.Dmts,
];
/**
 * Check if the context file name is *.d.ts or *.d.tsx
 */
function isDefinitionFile(fileName) {
    const lowerFileName = fileName.toLowerCase();
    for (const definitionExt of DEFINITION_EXTENSIONS) {
        if (lowerFileName.endsWith(definitionExt)) {
            return true;
        }
    }
    return /\.d\.(ts|cts|mts|.*\.ts)$/.test(lowerFileName);
}
/**
 * Upper cases the first character or the string
 */
function upperCaseFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}
function arrayGroupByToMap(array, getKey) {
    const groups = new Map();
    for (const item of array) {
        const key = getKey(item);
        const existing = groups.get(key);
        if (existing) {
            existing.push(item);
        }
        else {
            groups.set(key, [item]);
        }
    }
    return groups;
}
function arraysAreEqual(a, b, eq) {
    return (a === b ||
        (a != null && a.length === b?.length && a.every((x, idx) => eq(x, b[idx]))));
}
/** Returns the first non-`undefined` result. */
function findFirstResult(inputs, getResult) {
    for (const element of inputs) {
        const result = getResult(element);
        // eslint-disable-next-line @typescript-eslint/internal/eqeq-nullish
        if (result !== undefined) {
            return result;
        }
    }
    return undefined;
}
/**
 * Gets a string representation of the name of the index signature.
 */
function getNameFromIndexSignature(node) {
    const propName = node.parameters.find((parameter) => parameter.type === utils_1.AST_NODE_TYPES.Identifier);
    return propName ? propName.name : '(index signature)';
}
var MemberNameType;
(function (MemberNameType) {
    MemberNameType[MemberNameType["Private"] = 1] = "Private";
    MemberNameType[MemberNameType["Quoted"] = 2] = "Quoted";
    MemberNameType[MemberNameType["Normal"] = 3] = "Normal";
    MemberNameType[MemberNameType["Expression"] = 4] = "Expression";
})(MemberNameType || (exports.MemberNameType = MemberNameType = {}));
/**
 * Gets a string name representation of the name of the given MethodDefinition
 * or PropertyDefinition node, with handling for computed property names.
 */
function getNameFromMember(member, sourceCode) {
    if (member.key.type === utils_1.AST_NODE_TYPES.Identifier) {
        return {
            name: member.key.name,
            type: MemberNameType.Normal,
        };
    }
    if (member.key.type === utils_1.AST_NODE_TYPES.PrivateIdentifier) {
        return {
            name: `#${member.key.name}`,
            type: MemberNameType.Private,
        };
    }
    if (member.key.type === utils_1.AST_NODE_TYPES.Literal) {
        const name = `${member.key.value}`;
        if ((0, type_utils_1.requiresQuoting)(name)) {
            return {
                name: `"${name}"`,
                type: MemberNameType.Quoted,
            };
        }
        return {
            name,
            type: MemberNameType.Normal,
        };
    }
    return {
        name: sourceCode.text.slice(...member.key.range),
        type: MemberNameType.Expression,
    };
}
function getEnumNames(myEnum) {
    return Object.keys(myEnum).filter(x => isNaN(Number(x)));
}
/**
 * Given an array of words, returns an English-friendly concatenation, separated with commas, with
 * the `and` clause inserted before the last item.
 *
 * Example: ['foo', 'bar', 'baz' ] returns the string "foo, bar, and baz".
 */
function formatWordList(words) {
    if (!words.length) {
        return '';
    }
    if (words.length === 1) {
        return words[0];
    }
    return [words.slice(0, -1).join(', '), words.slice(-1)[0]].join(' and ');
}
/**
 * Iterates the array in reverse and returns the index of the first element it
 * finds which passes the predicate function.
 *
 * @returns Returns the index of the element if it finds it or -1 otherwise.
 */
function findLastIndex(members, predicate) {
    let idx = members.length - 1;
    while (idx >= 0) {
        const valid = predicate(members[idx]);
        if (valid) {
            return idx;
        }
        idx--;
    }
    return -1;
}
function typeNodeRequiresParentheses(node, text) {
    return (node.type === utils_1.AST_NODE_TYPES.TSFunctionType ||
        node.type === utils_1.AST_NODE_TYPES.TSConstructorType ||
        node.type === utils_1.AST_NODE_TYPES.TSConditionalType ||
        (node.type === utils_1.AST_NODE_TYPES.TSUnionType && text.startsWith('|')) ||
        (node.type === utils_1.AST_NODE_TYPES.TSIntersectionType && text.startsWith('&')));
}
function isRestParameterDeclaration(decl) {
    return ts.isParameter(decl) && decl.dotDotDotToken != null;
}
function isParenlessArrowFunction(node, sourceCode) {
    return (node.params.length === 1 && !(0, astUtils_1.isParenthesized)(node.params[0], sourceCode));
}
/**
 * Gets a member being accessed or declared if its value can be determined statically, and
 * resolves it to the string or symbol value that will be used as the actual member
 * access key at runtime. Otherwise, returns `undefined`.
 *
 * ```ts
 * x.member // returns 'member'
 * ^^^^^^^^
 *
 * x?.member // returns 'member' (optional chaining is treated the same)
 * ^^^^^^^^^
 *
 * x['value'] // returns 'value'
 * ^^^^^^^^^^
 *
 * x[Math.random()] // returns undefined (not a static value)
 * ^^^^^^^^^^^^^^^^
 *
 * arr[0] // returns '0' (NOT 0)
 * ^^^^^^
 *
 * arr[0n] // returns '0' (NOT 0n)
 * ^^^^^^^
 *
 * const s = Symbol.for('symbolName')
 * x[s] // returns `Symbol.for('symbolName')` (since it's a static/global symbol)
 * ^^^^
 *
 * const us = Symbol('symbolName')
 * x[us] // returns undefined (since it's a unique symbol, so not statically analyzable)
 * ^^^^^
 *
 * var object = {
 *     1234: '4567', // returns '1234' (NOT 1234)
 *     ^^^^^^^^^^^^
 *     method() { } // returns 'method'
 *     ^^^^^^^^^^^^
 * }
 *
 * class WithMembers {
 *     foo: string // returns 'foo'
 *     ^^^^^^^^^^^
 * }
 * ```
 */
function getStaticMemberAccessValue(node, { sourceCode }) {
    const key = node.type === utils_1.AST_NODE_TYPES.MemberExpression ? node.property : node.key;
    const { type } = key;
    if (!node.computed &&
        (type === utils_1.AST_NODE_TYPES.Identifier ||
            type === utils_1.AST_NODE_TYPES.PrivateIdentifier)) {
        return key.name;
    }
    const result = (0, astUtils_1.getStaticValue)(key, sourceCode.getScope(node));
    if (!result) {
        return undefined;
    }
    const { value } = result;
    return typeof value === 'symbol' ? value : String(value);
}
/**
 * Answers whether the member expression looks like
 * `x.value`, `x['value']`,
 * or even `const v = 'value'; x[v]` (or optional variants thereof).
 */
const isStaticMemberAccessOfValue = (memberExpression, context, ...values) => values.includes(getStaticMemberAccessValue(memberExpression, context));
exports.isStaticMemberAccessOfValue = isStaticMemberAccessOfValue;
//# sourceMappingURL=misc.js.map