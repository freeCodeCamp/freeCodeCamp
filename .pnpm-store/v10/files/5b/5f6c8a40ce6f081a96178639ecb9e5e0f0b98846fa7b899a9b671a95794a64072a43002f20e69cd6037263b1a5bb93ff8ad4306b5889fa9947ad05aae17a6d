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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const util = __importStar(require("../util"));
const util_1 = require("../util");
const definition = {
    type: 'object',
    properties: {
        before: { type: 'boolean' },
        after: { type: 'boolean' },
    },
    additionalProperties: false,
};
function createRules(options) {
    var _a;
    const globals = Object.assign(Object.assign({}, ((options === null || options === void 0 ? void 0 : options.before) !== undefined ? { before: options.before } : {})), ((options === null || options === void 0 ? void 0 : options.after) !== undefined ? { after: options.after } : {}));
    const override = (_a = options === null || options === void 0 ? void 0 : options.overrides) !== null && _a !== void 0 ? _a : {};
    const colon = Object.assign(Object.assign({ before: false, after: true }, globals), override === null || override === void 0 ? void 0 : override.colon);
    const arrow = Object.assign(Object.assign({ before: true, after: true }, globals), override === null || override === void 0 ? void 0 : override.arrow);
    return {
        colon: colon,
        arrow: arrow,
        variable: Object.assign(Object.assign({}, colon), override === null || override === void 0 ? void 0 : override.variable),
        property: Object.assign(Object.assign({}, colon), override === null || override === void 0 ? void 0 : override.property),
        parameter: Object.assign(Object.assign({}, colon), override === null || override === void 0 ? void 0 : override.parameter),
        returnType: Object.assign(Object.assign({}, colon), override === null || override === void 0 ? void 0 : override.returnType),
    };
}
function getIdentifierRules(rules, node) {
    const scope = node === null || node === void 0 ? void 0 : node.parent;
    if ((0, util_1.isVariableDeclarator)(scope)) {
        return rules.variable;
    }
    else if ((0, util_1.isFunctionOrFunctionType)(scope)) {
        return rules.parameter;
    }
    else {
        return rules.colon;
    }
}
function getRules(rules, node) {
    var _a;
    const scope = (_a = node === null || node === void 0 ? void 0 : node.parent) === null || _a === void 0 ? void 0 : _a.parent;
    if ((0, util_1.isTSFunctionType)(scope) || (0, util_1.isTSConstructorType)(scope)) {
        return rules.arrow;
    }
    else if ((0, util_1.isIdentifier)(scope)) {
        return getIdentifierRules(rules, scope);
    }
    else if ((0, util_1.isClassOrTypeElement)(scope)) {
        return rules.property;
    }
    else if ((0, util_1.isFunction)(scope)) {
        return rules.returnType;
    }
    else {
        return rules.colon;
    }
}
exports.default = util.createRule({
    name: 'type-annotation-spacing',
    meta: {
        type: 'layout',
        docs: {
            description: 'Require consistent spacing around type annotations',
            recommended: false,
        },
        fixable: 'whitespace',
        messages: {
            expectedSpaceAfter: "Expected a space after the '{{type}}'.",
            expectedSpaceBefore: "Expected a space before the '{{type}}'.",
            unexpectedSpaceAfter: "Unexpected space after the '{{type}}'.",
            unexpectedSpaceBefore: "Unexpected space before the '{{type}}'.",
            unexpectedSpaceBetween: "Unexpected space between the '{{previousToken}}' and the '{{type}}'.",
        },
        schema: [
            {
                type: 'object',
                properties: {
                    before: { type: 'boolean' },
                    after: { type: 'boolean' },
                    overrides: {
                        type: 'object',
                        properties: {
                            colon: definition,
                            arrow: definition,
                            variable: definition,
                            parameter: definition,
                            property: definition,
                            returnType: definition,
                        },
                        additionalProperties: false,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    defaultOptions: [
        // technically there is a default, but the overrides mean
        // that if we apply them here, it will break the no override case.
        {},
    ],
    create(context, [options]) {
        const punctuators = [':', '=>'];
        const sourceCode = context.getSourceCode();
        const ruleSet = createRules(options);
        /**
         * Checks if there's proper spacing around type annotations (no space
         * before colon, one space after).
         */
        function checkTypeAnnotationSpacing(typeAnnotation) {
            const nextToken = typeAnnotation;
            const punctuatorTokenEnd = sourceCode.getTokenBefore(nextToken);
            let punctuatorTokenStart = punctuatorTokenEnd;
            let previousToken = sourceCode.getTokenBefore(punctuatorTokenEnd);
            let type = punctuatorTokenEnd.value;
            if (!punctuators.includes(type)) {
                return;
            }
            const { before, after } = getRules(ruleSet, typeAnnotation);
            if (type === ':' && previousToken.value === '?') {
                if (
                // eslint-disable-next-line deprecation/deprecation -- TODO - switch once our min ESLint version is 6.7.0
                sourceCode.isSpaceBetweenTokens(previousToken, punctuatorTokenStart)) {
                    context.report({
                        node: punctuatorTokenStart,
                        messageId: 'unexpectedSpaceBetween',
                        data: {
                            type,
                            previousToken: previousToken.value,
                        },
                        fix(fixer) {
                            return fixer.removeRange([
                                previousToken.range[1],
                                punctuatorTokenStart.range[0],
                            ]);
                        },
                    });
                }
                // shift the start to the ?
                type = '?:';
                punctuatorTokenStart = previousToken;
                previousToken = sourceCode.getTokenBefore(previousToken);
                // handle the +/- modifiers for optional modification operators
                if (previousToken.value === '+' || previousToken.value === '-') {
                    type = `${previousToken.value}?:`;
                    punctuatorTokenStart = previousToken;
                    previousToken = sourceCode.getTokenBefore(previousToken);
                }
            }
            const previousDelta = punctuatorTokenStart.range[0] - previousToken.range[1];
            const nextDelta = nextToken.range[0] - punctuatorTokenEnd.range[1];
            if (after && nextDelta === 0) {
                context.report({
                    node: punctuatorTokenEnd,
                    messageId: 'expectedSpaceAfter',
                    data: {
                        type,
                    },
                    fix(fixer) {
                        return fixer.insertTextAfter(punctuatorTokenEnd, ' ');
                    },
                });
            }
            else if (!after && nextDelta > 0) {
                context.report({
                    node: punctuatorTokenEnd,
                    messageId: 'unexpectedSpaceAfter',
                    data: {
                        type,
                    },
                    fix(fixer) {
                        return fixer.removeRange([
                            punctuatorTokenEnd.range[1],
                            nextToken.range[0],
                        ]);
                    },
                });
            }
            if (before && previousDelta === 0) {
                context.report({
                    node: punctuatorTokenStart,
                    messageId: 'expectedSpaceBefore',
                    data: {
                        type,
                    },
                    fix(fixer) {
                        return fixer.insertTextAfter(previousToken, ' ');
                    },
                });
            }
            else if (!before && previousDelta > 0) {
                context.report({
                    node: punctuatorTokenStart,
                    messageId: 'unexpectedSpaceBefore',
                    data: {
                        type,
                    },
                    fix(fixer) {
                        return fixer.removeRange([
                            previousToken.range[1],
                            punctuatorTokenStart.range[0],
                        ]);
                    },
                });
            }
        }
        return {
            TSMappedType(node) {
                if (node.typeAnnotation) {
                    checkTypeAnnotationSpacing(node.typeAnnotation);
                }
            },
            TSTypeAnnotation(node) {
                checkTypeAnnotationSpacing(node.typeAnnotation);
            },
        };
    },
});
//# sourceMappingURL=type-annotation-spacing.js.map