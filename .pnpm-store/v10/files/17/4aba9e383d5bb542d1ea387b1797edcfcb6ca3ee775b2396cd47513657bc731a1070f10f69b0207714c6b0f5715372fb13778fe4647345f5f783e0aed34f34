"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberHeadLoc = getMemberHeadLoc;
exports.getParameterPropertyHeadLoc = getParameterPropertyHeadLoc;
const eslint_utils_1 = require("@typescript-eslint/utils/eslint-utils");
/**
 * Generates report loc suitable for reporting on how a class member is
 * declared, rather than how it's implemented.
 *
 * ```ts
 * class A {
 *   abstract method(): void;
 *   ~~~~~~~~~~~~~~~
 *
 *   concreteMethod(): void {
 *   ~~~~~~~~~~~~~~
 *      // code
 *   }
 *
 *   abstract private property?: string;
 *   ~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *   @decorator override concreteProperty = 'value';
 *              ~~~~~~~~~~~~~~~~~~~~~~~~~
 * }
 * ```
 */
function getMemberHeadLoc(sourceCode, node) {
    let start;
    if (node.decorators.length === 0) {
        start = node.loc.start;
    }
    else {
        const lastDecorator = node.decorators[node.decorators.length - 1];
        const nextToken = (0, eslint_utils_1.nullThrows)(sourceCode.getTokenAfter(lastDecorator), eslint_utils_1.NullThrowsReasons.MissingToken('token', 'last decorator'));
        start = nextToken.loc.start;
    }
    let end;
    if (!node.computed) {
        end = node.key.loc.end;
    }
    else {
        const closingBracket = (0, eslint_utils_1.nullThrows)(sourceCode.getTokenAfter(node.key, token => token.value === ']'), eslint_utils_1.NullThrowsReasons.MissingToken(']', node.type));
        end = closingBracket.loc.end;
    }
    return {
        end: structuredClone(end),
        start: structuredClone(start),
    };
}
/**
 * Generates report loc suitable for reporting on how a parameter property is
 * declared.
 *
 * ```ts
 * class A {
 *   constructor(private property: string = 'value') {
 *               ~~~~~~~~~~~~~~~~
 *   }
 * ```
 */
function getParameterPropertyHeadLoc(sourceCode, node, nodeName) {
    // Parameter properties have a weirdly different AST structure
    // than other class members.
    let start;
    if (node.decorators.length === 0) {
        start = structuredClone(node.loc.start);
    }
    else {
        const lastDecorator = node.decorators[node.decorators.length - 1];
        const nextToken = (0, eslint_utils_1.nullThrows)(sourceCode.getTokenAfter(lastDecorator), eslint_utils_1.NullThrowsReasons.MissingToken('token', 'last decorator'));
        start = structuredClone(nextToken.loc.start);
    }
    const end = sourceCode.getLocFromIndex(node.parameter.range[0] + nodeName.length);
    return {
        end,
        start,
    };
}
//# sourceMappingURL=getMemberHeadLoc.js.map