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
const utils_1 = require("@typescript-eslint/utils");
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
const astIgnoreKeys = new Set(['loc', 'parent', 'range']);
const isSameAstNode = (actualNode, expectedNode) => {
    if (actualNode === expectedNode) {
        return true;
    }
    if (actualNode &&
        expectedNode &&
        typeof actualNode === 'object' &&
        typeof expectedNode === 'object') {
        if (Array.isArray(actualNode) && Array.isArray(expectedNode)) {
            if (actualNode.length !== expectedNode.length) {
                return false;
            }
            return !actualNode.some((nodeEle, index) => !isSameAstNode(nodeEle, expectedNode[index]));
        }
        const actualNodeKeys = Object.keys(actualNode).filter(key => !astIgnoreKeys.has(key));
        const expectedNodeKeys = Object.keys(expectedNode).filter(key => !astIgnoreKeys.has(key));
        if (actualNodeKeys.length !== expectedNodeKeys.length) {
            return false;
        }
        if (actualNodeKeys.some(actualNodeKey => !Object.hasOwn(expectedNode, actualNodeKey))) {
            return false;
        }
        if (actualNodeKeys.some(actualNodeKey => !isSameAstNode(actualNode[actualNodeKey], expectedNode[actualNodeKey]))) {
            return false;
        }
        return true;
    }
    return false;
};
exports.default = (0, util_1.createRule)({
    name: 'no-duplicate-type-constituents',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow duplicate constituents of union or intersection types',
            recommended: 'recommended',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        messages: {
            duplicate: '{{type}} type constituent is duplicated with {{previous}}.',
            unnecessary: 'Explicit undefined is unnecessary on an optional parameter.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ignoreIntersections: {
                        type: 'boolean',
                        description: 'Whether to ignore `&` intersections.',
                    },
                    ignoreUnions: {
                        type: 'boolean',
                        description: 'Whether to ignore `|` unions.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            ignoreIntersections: false,
            ignoreUnions: false,
        },
    ],
    create(context, [{ ignoreIntersections, ignoreUnions }]) {
        const parserServices = (0, util_1.getParserServices)(context);
        const { sourceCode } = context;
        function report(messageId, constituentNode, data) {
            const getUnionOrIntersectionToken = (where, at) => sourceCode[`getTokens${where}`](constituentNode, {
                filter: token => ['&', '|'].includes(token.value) &&
                    constituentNode.parent.range[0] <= token.range[0] &&
                    token.range[1] <= constituentNode.parent.range[1],
            }).at(at);
            const beforeUnionOrIntersectionToken = getUnionOrIntersectionToken('Before', -1);
            let afterUnionOrIntersectionToken;
            let bracketBeforeTokens;
            let bracketAfterTokens;
            if (beforeUnionOrIntersectionToken) {
                bracketBeforeTokens = sourceCode.getTokensBetween(beforeUnionOrIntersectionToken, constituentNode);
                bracketAfterTokens = sourceCode.getTokensAfter(constituentNode, {
                    count: bracketBeforeTokens.length,
                });
            }
            else {
                afterUnionOrIntersectionToken = (0, util_1.nullThrows)(getUnionOrIntersectionToken('After', 0), util_1.NullThrowsReasons.MissingToken('union or intersection token', 'duplicate type constituent'));
                bracketAfterTokens = sourceCode.getTokensBetween(constituentNode, afterUnionOrIntersectionToken);
                bracketBeforeTokens = sourceCode.getTokensBefore(constituentNode, {
                    count: bracketAfterTokens.length,
                });
            }
            context.report({
                loc: {
                    start: constituentNode.loc.start,
                    end: (bracketAfterTokens.at(-1) ?? constituentNode).loc.end,
                },
                node: constituentNode,
                messageId,
                data,
                fix: fixer => [
                    beforeUnionOrIntersectionToken,
                    ...bracketBeforeTokens,
                    constituentNode,
                    ...bracketAfterTokens,
                    afterUnionOrIntersectionToken,
                ].flatMap(token => (token ? fixer.remove(token) : [])),
            });
        }
        function checkDuplicateRecursively(unionOrIntersection, constituentNode, uniqueConstituents, cachedTypeMap, forEachNodeType) {
            const reportDuplicate = (previous) => {
                report('duplicate', constituentNode, {
                    type: unionOrIntersection,
                    previous: sourceCode.getText(previous),
                });
            };
            // Check duplicates in the AST before type lookup for better performance.
            let duplicatedPrevious = uniqueConstituents.find(ele => isSameAstNode(ele, constituentNode));
            if (duplicatedPrevious) {
                reportDuplicate(duplicatedPrevious);
                return;
            }
            const type = parserServices.getTypeAtLocation(constituentNode);
            if (tsutils.isIntrinsicErrorType(type)) {
                return;
            }
            duplicatedPrevious = cachedTypeMap.get(type);
            if (duplicatedPrevious) {
                reportDuplicate(duplicatedPrevious);
                return;
            }
            forEachNodeType?.(type, constituentNode);
            cachedTypeMap.set(type, constituentNode);
            uniqueConstituents.push(constituentNode);
            if ((unionOrIntersection === 'Union' &&
                constituentNode.type === utils_1.AST_NODE_TYPES.TSUnionType) ||
                (unionOrIntersection === 'Intersection' &&
                    constituentNode.type === utils_1.AST_NODE_TYPES.TSIntersectionType)) {
                for (const constituent of constituentNode.types) {
                    checkDuplicateRecursively(unionOrIntersection, constituent, uniqueConstituents, cachedTypeMap, forEachNodeType);
                }
            }
        }
        function checkDuplicate(node, forEachNodeType) {
            const cachedTypeMap = new Map();
            const uniqueConstituents = [];
            const unionOrIntersection = node.type === utils_1.AST_NODE_TYPES.TSIntersectionType
                ? 'Intersection'
                : 'Union';
            for (const type of node.types) {
                checkDuplicateRecursively(unionOrIntersection, type, uniqueConstituents, cachedTypeMap, forEachNodeType);
            }
        }
        return {
            ...(!ignoreIntersections && {
                TSIntersectionType(node) {
                    if (node.parent.type === utils_1.AST_NODE_TYPES.TSIntersectionType) {
                        return;
                    }
                    checkDuplicate(node);
                },
            }),
            ...(!ignoreUnions && {
                TSUnionType: (node) => {
                    if (node.parent.type === utils_1.AST_NODE_TYPES.TSUnionType) {
                        return;
                    }
                    checkDuplicate(node, (constituentNodeType, constituentNode) => {
                        const maybeTypeAnnotation = node.parent;
                        if (maybeTypeAnnotation.type === utils_1.AST_NODE_TYPES.TSTypeAnnotation) {
                            const maybeIdentifier = maybeTypeAnnotation.parent;
                            if (maybeIdentifier.type === utils_1.AST_NODE_TYPES.Identifier &&
                                maybeIdentifier.optional) {
                                const maybeFunction = maybeIdentifier.parent;
                                if ((0, util_1.isFunctionOrFunctionType)(maybeFunction) &&
                                    maybeFunction.params.includes(maybeIdentifier) &&
                                    tsutils.isTypeFlagSet(constituentNodeType, ts.TypeFlags.Undefined)) {
                                    report('unnecessary', constituentNode);
                                }
                            }
                        }
                    });
                },
            }),
        };
    },
});
//# sourceMappingURL=no-duplicate-type-constituents.js.map