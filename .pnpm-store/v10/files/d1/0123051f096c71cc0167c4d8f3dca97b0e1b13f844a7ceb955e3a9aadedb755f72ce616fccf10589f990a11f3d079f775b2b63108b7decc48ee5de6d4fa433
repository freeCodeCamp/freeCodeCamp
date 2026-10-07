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
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
const accessibilityLevel = {
    oneOf: [
        {
            const: 'explicit',
            description: 'Always require an accessor.',
        },
        {
            const: 'no-public',
            description: 'Require an accessor except when public.',
        },
        {
            const: 'off',
            description: 'Never check whether there is an accessor.',
        },
    ],
};
exports.default = util.createRule({
    name: 'explicit-member-accessibility',
    meta: {
        hasSuggestions: true,
        type: 'problem',
        docs: {
            description: 'Require explicit accessibility modifiers on class properties and methods',
            // too opinionated to be recommended
            recommended: false,
        },
        fixable: 'code',
        messages: {
            missingAccessibility: 'Missing accessibility modifier on {{type}} {{name}}.',
            unwantedPublicAccessibility: 'Public accessibility modifier on {{type}} {{name}}.',
            addExplicitAccessibility: "Add '{{ type }}' accessibility modifier",
        },
        schema: {
            $defs: {
                accessibilityLevel,
            },
            prefixItems: [
                {
                    type: 'object',
                    properties: {
                        accessibility: { $ref: '#/$defs/accessibilityLevel' },
                        overrides: {
                            type: 'object',
                            properties: {
                                accessors: { $ref: '#/$defs/accessibilityLevel' },
                                constructors: { $ref: '#/$defs/accessibilityLevel' },
                                methods: { $ref: '#/$defs/accessibilityLevel' },
                                properties: { $ref: '#/$defs/accessibilityLevel' },
                                parameterProperties: {
                                    $ref: '#/$defs/accessibilityLevel',
                                },
                            },
                            additionalProperties: false,
                        },
                        ignoredMethodNames: {
                            type: 'array',
                            items: {
                                type: 'string',
                            },
                        },
                    },
                    additionalProperties: false,
                },
            ],
            type: 'array',
        },
    },
    defaultOptions: [{ accessibility: 'explicit' }],
    create(context, [option]) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const sourceCode = context.getSourceCode();
        const baseCheck = (_a = option.accessibility) !== null && _a !== void 0 ? _a : 'explicit';
        const overrides = (_b = option.overrides) !== null && _b !== void 0 ? _b : {};
        const ctorCheck = (_c = overrides.constructors) !== null && _c !== void 0 ? _c : baseCheck;
        const accessorCheck = (_d = overrides.accessors) !== null && _d !== void 0 ? _d : baseCheck;
        const methodCheck = (_e = overrides.methods) !== null && _e !== void 0 ? _e : baseCheck;
        const propCheck = (_f = overrides.properties) !== null && _f !== void 0 ? _f : baseCheck;
        const paramPropCheck = (_g = overrides.parameterProperties) !== null && _g !== void 0 ? _g : baseCheck;
        const ignoredMethodNames = new Set((_h = option.ignoredMethodNames) !== null && _h !== void 0 ? _h : []);
        /**
         * Checks if a method declaration has an accessibility modifier.
         * @param methodDefinition The node representing a MethodDefinition.
         */
        function checkMethodAccessibilityModifier(methodDefinition) {
            if (methodDefinition.key.type === utils_1.AST_NODE_TYPES.PrivateIdentifier) {
                return;
            }
            let nodeType = 'method definition';
            let check = baseCheck;
            switch (methodDefinition.kind) {
                case 'method':
                    check = methodCheck;
                    break;
                case 'constructor':
                    check = ctorCheck;
                    break;
                case 'get':
                case 'set':
                    check = accessorCheck;
                    nodeType = `${methodDefinition.kind} property accessor`;
                    break;
            }
            const { name: methodName } = util.getNameFromMember(methodDefinition, sourceCode);
            if (check === 'off' || ignoredMethodNames.has(methodName)) {
                return;
            }
            if (check === 'no-public' &&
                methodDefinition.accessibility === 'public') {
                context.report({
                    node: methodDefinition,
                    messageId: 'unwantedPublicAccessibility',
                    data: {
                        type: nodeType,
                        name: methodName,
                    },
                    fix: getUnwantedPublicAccessibilityFixer(methodDefinition),
                });
            }
            else if (check === 'explicit' && !methodDefinition.accessibility) {
                context.report({
                    node: methodDefinition,
                    messageId: 'missingAccessibility',
                    data: {
                        type: nodeType,
                        name: methodName,
                    },
                    suggest: getMissingAccessibilitySuggestions(methodDefinition),
                });
            }
        }
        /**
         * Creates a fixer that removes a "public" keyword with following spaces
         */
        function getUnwantedPublicAccessibilityFixer(node) {
            return function (fixer) {
                const tokens = sourceCode.getTokens(node);
                let rangeToRemove;
                for (let i = 0; i < tokens.length; i++) {
                    const token = tokens[i];
                    if (token.type === utils_1.AST_TOKEN_TYPES.Keyword &&
                        token.value === 'public') {
                        const commensAfterPublicKeyword = sourceCode.getCommentsAfter(token);
                        if (commensAfterPublicKeyword.length) {
                            // public /* Hi there! */ static foo()
                            // ^^^^^^^
                            rangeToRemove = [
                                token.range[0],
                                commensAfterPublicKeyword[0].range[0],
                            ];
                            break;
                        }
                        else {
                            // public static foo()
                            // ^^^^^^^
                            rangeToRemove = [token.range[0], tokens[i + 1].range[0]];
                            break;
                        }
                    }
                }
                return fixer.removeRange(rangeToRemove);
            };
        }
        /**
         * Creates a fixer that adds a "public" keyword with following spaces
         */
        function getMissingAccessibilitySuggestions(node) {
            function fix(accessibility, fixer) {
                var _a;
                if ((_a = node === null || node === void 0 ? void 0 : node.decorators) === null || _a === void 0 ? void 0 : _a.length) {
                    const lastDecorator = node.decorators[node.decorators.length - 1];
                    const nextToken = sourceCode.getTokenAfter(lastDecorator);
                    return fixer.insertTextBefore(nextToken, `${accessibility} `);
                }
                return fixer.insertTextBefore(node, `${accessibility} `);
            }
            return [
                {
                    messageId: 'addExplicitAccessibility',
                    data: { type: 'public' },
                    fix: fixer => fix('public', fixer),
                },
                {
                    messageId: 'addExplicitAccessibility',
                    data: { type: 'private' },
                    fix: fixer => fix('private', fixer),
                },
                {
                    messageId: 'addExplicitAccessibility',
                    data: { type: 'protected' },
                    fix: fixer => fix('protected', fixer),
                },
            ];
        }
        /**
         * Checks if property has an accessibility modifier.
         * @param propertyDefinition The node representing a PropertyDefinition.
         */
        function checkPropertyAccessibilityModifier(propertyDefinition) {
            if (propertyDefinition.key.type === utils_1.AST_NODE_TYPES.PrivateIdentifier) {
                return;
            }
            const nodeType = 'class property';
            const { name: propertyName } = util.getNameFromMember(propertyDefinition, sourceCode);
            if (propCheck === 'no-public' &&
                propertyDefinition.accessibility === 'public') {
                context.report({
                    node: propertyDefinition,
                    messageId: 'unwantedPublicAccessibility',
                    data: {
                        type: nodeType,
                        name: propertyName,
                    },
                    fix: getUnwantedPublicAccessibilityFixer(propertyDefinition),
                });
            }
            else if (propCheck === 'explicit' &&
                !propertyDefinition.accessibility) {
                context.report({
                    node: propertyDefinition,
                    messageId: 'missingAccessibility',
                    data: {
                        type: nodeType,
                        name: propertyName,
                    },
                    suggest: getMissingAccessibilitySuggestions(propertyDefinition),
                });
            }
        }
        /**
         * Checks that the parameter property has the desired accessibility modifiers set.
         * @param node The node representing a Parameter Property
         */
        function checkParameterPropertyAccessibilityModifier(node) {
            const nodeType = 'parameter property';
            // HAS to be an identifier or assignment or TSC will throw
            if (node.parameter.type !== utils_1.AST_NODE_TYPES.Identifier &&
                node.parameter.type !== utils_1.AST_NODE_TYPES.AssignmentPattern) {
                return;
            }
            const nodeName = node.parameter.type === utils_1.AST_NODE_TYPES.Identifier
                ? node.parameter.name
                : // has to be an Identifier or TSC will throw an error
                    node.parameter.left.name;
            switch (paramPropCheck) {
                case 'explicit': {
                    if (!node.accessibility) {
                        context.report({
                            node,
                            messageId: 'missingAccessibility',
                            data: {
                                type: nodeType,
                                name: nodeName,
                            },
                            suggest: getMissingAccessibilitySuggestions(node),
                        });
                    }
                    break;
                }
                case 'no-public': {
                    if (node.accessibility === 'public' && node.readonly) {
                        context.report({
                            node,
                            messageId: 'unwantedPublicAccessibility',
                            data: {
                                type: nodeType,
                                name: nodeName,
                            },
                            fix: getUnwantedPublicAccessibilityFixer(node),
                        });
                    }
                    break;
                }
            }
        }
        return {
            'MethodDefinition, TSAbstractMethodDefinition': checkMethodAccessibilityModifier,
            'PropertyDefinition, TSAbstractPropertyDefinition': checkPropertyAccessibilityModifier,
            TSParameterProperty: checkParameterPropertyAccessibilityModifier,
        };
    },
});
//# sourceMappingURL=explicit-member-accessibility.js.map