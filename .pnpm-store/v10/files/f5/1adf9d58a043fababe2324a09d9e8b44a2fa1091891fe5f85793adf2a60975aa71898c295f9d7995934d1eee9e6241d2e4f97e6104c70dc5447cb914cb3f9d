"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const getMemberHeadLoc_1 = require("../util/getMemberHeadLoc");
const rangeToLoc_1 = require("../util/rangeToLoc");
exports.default = (0, util_1.createRule)({
    name: 'explicit-member-accessibility',
    meta: {
        type: 'problem',
        docs: {
            description: 'Require explicit accessibility modifiers on class properties and methods',
            // too opinionated to be recommended
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            addExplicitAccessibility: "Add '{{ type }}' accessibility modifier",
            missingAccessibility: 'Missing accessibility modifier on {{type}} {{name}}.',
            unwantedPublicAccessibility: 'Public accessibility modifier on {{type}} {{name}}.',
        },
        schema: [
            {
                type: 'object',
                $defs: {
                    accessibilityLevel: {
                        oneOf: [
                            {
                                type: 'string',
                                description: 'Always require an accessor.',
                                enum: ['explicit'],
                            },
                            {
                                type: 'string',
                                description: 'Require an accessor except when public.',
                                enum: ['no-public'],
                            },
                            {
                                type: 'string',
                                description: 'Never check whether there is an accessor.',
                                enum: ['off'],
                            },
                        ],
                    },
                },
                additionalProperties: false,
                properties: {
                    accessibility: {
                        $ref: '#/items/0/$defs/accessibilityLevel',
                        description: 'Which accessibility modifier is required to exist or not exist.',
                    },
                    ignoredMethodNames: {
                        type: 'array',
                        description: 'Specific method names that may be ignored.',
                        items: {
                            type: 'string',
                        },
                    },
                    overrides: {
                        type: 'object',
                        additionalProperties: false,
                        description: 'Changes to required accessibility modifiers for specific kinds of class members.',
                        properties: {
                            accessors: {
                                $ref: '#/items/0/$defs/accessibilityLevel',
                                description: 'Which member accessibility modifier requirements to apply for accessors.',
                            },
                            constructors: {
                                $ref: '#/items/0/$defs/accessibilityLevel',
                                description: 'Which member accessibility modifier requirements to apply for constructors.',
                            },
                            methods: {
                                $ref: '#/items/0/$defs/accessibilityLevel',
                                description: 'Which member accessibility modifier requirements to apply for methods.',
                            },
                            parameterProperties: {
                                $ref: '#/items/0/$defs/accessibilityLevel',
                                description: 'Which member accessibility modifier requirements to apply for parameterProperties.',
                            },
                            properties: {
                                $ref: '#/items/0/$defs/accessibilityLevel',
                                description: 'Which member accessibility modifier requirements to apply for properties.',
                            },
                        },
                    },
                },
            },
        ],
    },
    defaultOptions: [{ accessibility: 'explicit' }],
    create(context, [option]) {
        const baseCheck = option.accessibility ?? 'explicit';
        const overrides = option.overrides ?? {};
        const ctorCheck = overrides.constructors ?? baseCheck;
        const accessorCheck = overrides.accessors ?? baseCheck;
        const methodCheck = overrides.methods ?? baseCheck;
        const propCheck = overrides.properties ?? baseCheck;
        const paramPropCheck = overrides.parameterProperties ?? baseCheck;
        const ignoredMethodNames = new Set(option.ignoredMethodNames ?? []);
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
            const { name: methodName } = (0, util_1.getNameFromMember)(methodDefinition, context.sourceCode);
            if (check === 'off' || ignoredMethodNames.has(methodName)) {
                return;
            }
            if (check === 'no-public' &&
                methodDefinition.accessibility === 'public') {
                const publicKeyword = findPublicKeyword(methodDefinition);
                context.report({
                    loc: (0, rangeToLoc_1.rangeToLoc)(context.sourceCode, publicKeyword.range),
                    messageId: 'unwantedPublicAccessibility',
                    data: {
                        name: methodName,
                        type: nodeType,
                    },
                    fix: fixer => fixer.removeRange(publicKeyword.rangeToRemove),
                });
            }
            else if (check === 'explicit' && !methodDefinition.accessibility) {
                context.report({
                    loc: (0, getMemberHeadLoc_1.getMemberHeadLoc)(context.sourceCode, methodDefinition),
                    messageId: 'missingAccessibility',
                    data: {
                        name: methodName,
                        type: nodeType,
                    },
                    suggest: getMissingAccessibilitySuggestions(methodDefinition),
                });
            }
        }
        /**
         * Returns an object containing a range that corresponds to the "public"
         * keyword for a node, and the range that would need to be removed to
         * remove the "public" keyword (including associated whitespace).
         */
        function findPublicKeyword(node) {
            const tokens = context.sourceCode.getTokens(node);
            let rangeToRemove;
            let keywordRange;
            for (let i = 0; i < tokens.length; i++) {
                const token = tokens[i];
                if (token.type === utils_1.AST_TOKEN_TYPES.Keyword &&
                    token.value === 'public') {
                    keywordRange = structuredClone(token.range);
                    const commentsAfterPublicKeyword = context.sourceCode.getCommentsAfter(token);
                    if (commentsAfterPublicKeyword.length) {
                        // public /* Hi there! */ static foo()
                        // ^^^^^^^
                        rangeToRemove = [
                            token.range[0],
                            commentsAfterPublicKeyword[0].range[0],
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
            return { range: keywordRange, rangeToRemove };
        }
        /**
         * Creates a fixer that adds an accessibility modifier keyword
         */
        function getMissingAccessibilitySuggestions(node) {
            function fix(accessibility, fixer) {
                if (node.decorators.length) {
                    const lastDecorator = node.decorators[node.decorators.length - 1];
                    const nextToken = (0, util_1.nullThrows)(context.sourceCode.getTokenAfter(lastDecorator), util_1.NullThrowsReasons.MissingToken('token', 'last decorator'));
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
            const { name: propertyName } = (0, util_1.getNameFromMember)(propertyDefinition, context.sourceCode);
            if (propCheck === 'no-public' &&
                propertyDefinition.accessibility === 'public') {
                const publicKeywordRange = findPublicKeyword(propertyDefinition);
                context.report({
                    loc: (0, rangeToLoc_1.rangeToLoc)(context.sourceCode, publicKeywordRange.range),
                    messageId: 'unwantedPublicAccessibility',
                    data: {
                        name: propertyName,
                        type: nodeType,
                    },
                    fix: fixer => fixer.removeRange(publicKeywordRange.rangeToRemove),
                });
            }
            else if (propCheck === 'explicit' &&
                !propertyDefinition.accessibility) {
                context.report({
                    loc: (0, getMemberHeadLoc_1.getMemberHeadLoc)(context.sourceCode, propertyDefinition),
                    messageId: 'missingAccessibility',
                    data: {
                        name: propertyName,
                        type: nodeType,
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
            const nodeName = node.parameter.type === utils_1.AST_NODE_TYPES.Identifier
                ? node.parameter.name
                : node.parameter.left.name;
            switch (paramPropCheck) {
                case 'explicit': {
                    if (!node.accessibility) {
                        context.report({
                            loc: (0, getMemberHeadLoc_1.getParameterPropertyHeadLoc)(context.sourceCode, node, nodeName),
                            messageId: 'missingAccessibility',
                            data: {
                                name: nodeName,
                                type: nodeType,
                            },
                            suggest: getMissingAccessibilitySuggestions(node),
                        });
                    }
                    break;
                }
                case 'no-public': {
                    if (node.accessibility === 'public' && node.readonly) {
                        const publicKeyword = findPublicKeyword(node);
                        context.report({
                            loc: (0, rangeToLoc_1.rangeToLoc)(context.sourceCode, publicKeyword.range),
                            messageId: 'unwantedPublicAccessibility',
                            data: {
                                name: nodeName,
                                type: nodeType,
                            },
                            fix: fixer => fixer.removeRange(publicKeyword.rangeToRemove),
                        });
                    }
                    break;
                }
            }
        }
        return {
            'MethodDefinition, TSAbstractMethodDefinition': checkMethodAccessibilityModifier,
            'PropertyDefinition, TSAbstractPropertyDefinition, AccessorProperty, TSAbstractAccessorProperty': checkPropertyAccessibilityModifier,
            TSParameterProperty: checkParameterPropertyAccessibilityModifier,
        };
    },
});
//# sourceMappingURL=explicit-member-accessibility.js.map