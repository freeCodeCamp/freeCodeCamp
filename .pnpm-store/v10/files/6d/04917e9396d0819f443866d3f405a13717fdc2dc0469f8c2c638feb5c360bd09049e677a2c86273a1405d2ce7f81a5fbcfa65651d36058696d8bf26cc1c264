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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOrder = void 0;
const utils_1 = require("@typescript-eslint/utils");
const natural_compare_lite_1 = __importDefault(require("natural-compare-lite"));
const util = __importStar(require("../util"));
const neverConfig = {
    type: 'string',
    enum: ['never'],
};
const arrayConfig = (memberTypes) => ({
    type: 'array',
    items: {
        oneOf: [
            {
                enum: memberTypes,
            },
            {
                type: 'array',
                items: {
                    enum: memberTypes,
                },
            },
        ],
    },
});
const objectConfig = (memberTypes) => ({
    type: 'object',
    properties: {
        memberTypes: {
            oneOf: [arrayConfig(memberTypes), neverConfig],
        },
        order: {
            type: 'string',
            enum: [
                'alphabetically',
                'alphabetically-case-insensitive',
                'as-written',
                'natural',
                'natural-case-insensitive',
            ],
        },
        optionalityOrder: {
            type: 'string',
            enum: ['optional-first', 'required-first'],
        },
    },
    additionalProperties: false,
});
exports.defaultOrder = [
    // Index signature
    'signature',
    'call-signature',
    // Fields
    'public-static-field',
    'protected-static-field',
    'private-static-field',
    '#private-static-field',
    'public-decorated-field',
    'protected-decorated-field',
    'private-decorated-field',
    'public-instance-field',
    'protected-instance-field',
    'private-instance-field',
    '#private-instance-field',
    'public-abstract-field',
    'protected-abstract-field',
    'public-field',
    'protected-field',
    'private-field',
    '#private-field',
    'static-field',
    'instance-field',
    'abstract-field',
    'decorated-field',
    'field',
    // Static initialization
    'static-initialization',
    // Constructors
    'public-constructor',
    'protected-constructor',
    'private-constructor',
    'constructor',
    // Getters
    'public-static-get',
    'protected-static-get',
    'private-static-get',
    '#private-static-get',
    'public-decorated-get',
    'protected-decorated-get',
    'private-decorated-get',
    'public-instance-get',
    'protected-instance-get',
    'private-instance-get',
    '#private-instance-get',
    'public-abstract-get',
    'protected-abstract-get',
    'public-get',
    'protected-get',
    'private-get',
    '#private-get',
    'static-get',
    'instance-get',
    'abstract-get',
    'decorated-get',
    'get',
    // Setters
    'public-static-set',
    'protected-static-set',
    'private-static-set',
    '#private-static-set',
    'public-decorated-set',
    'protected-decorated-set',
    'private-decorated-set',
    'public-instance-set',
    'protected-instance-set',
    'private-instance-set',
    '#private-instance-set',
    'public-abstract-set',
    'protected-abstract-set',
    'public-set',
    'protected-set',
    'private-set',
    '#private-set',
    'static-set',
    'instance-set',
    'abstract-set',
    'decorated-set',
    'set',
    // Methods
    'public-static-method',
    'protected-static-method',
    'private-static-method',
    '#private-static-method',
    'public-decorated-method',
    'protected-decorated-method',
    'private-decorated-method',
    'public-instance-method',
    'protected-instance-method',
    'private-instance-method',
    '#private-instance-method',
    'public-abstract-method',
    'protected-abstract-method',
    'public-method',
    'protected-method',
    'private-method',
    '#private-method',
    'static-method',
    'instance-method',
    'abstract-method',
    'decorated-method',
    'method',
];
const allMemberTypes = Array.from([
    'readonly-signature',
    'signature',
    'readonly-field',
    'field',
    'method',
    'call-signature',
    'constructor',
    'get',
    'set',
    'static-initialization',
].reduce((all, type) => {
    all.add(type);
    ['public', 'protected', 'private', '#private'].forEach(accessibility => {
        if (type !== 'readonly-signature' &&
            type !== 'signature' &&
            type !== 'static-initialization' &&
            type !== 'call-signature' &&
            !(type === 'constructor' && accessibility === '#private')) {
            all.add(`${accessibility}-${type}`); // e.g. `public-field`
        }
        // Only class instance fields, methods, get and set can have decorators attached to them
        if (accessibility !== '#private' &&
            (type === 'readonly-field' ||
                type === 'field' ||
                type === 'method' ||
                type === 'get' ||
                type === 'set')) {
            all.add(`${accessibility}-decorated-${type}`);
            all.add(`decorated-${type}`);
        }
        if (type !== 'constructor' &&
            type !== 'readonly-signature' &&
            type !== 'signature' &&
            type !== 'call-signature') {
            // There is no `static-constructor` or `instance-constructor` or `abstract-constructor`
            if (accessibility === '#private' || accessibility === 'private') {
                ['static', 'instance'].forEach(scope => {
                    all.add(`${scope}-${type}`);
                    all.add(`${accessibility}-${scope}-${type}`);
                });
            }
            else {
                ['static', 'instance', 'abstract'].forEach(scope => {
                    all.add(`${scope}-${type}`);
                    all.add(`${accessibility}-${scope}-${type}`);
                });
            }
        }
    });
    return all;
}, new Set()));
const functionExpressions = [
    utils_1.AST_NODE_TYPES.FunctionExpression,
    utils_1.AST_NODE_TYPES.ArrowFunctionExpression,
];
/**
 * Gets the node type.
 *
 * @param node the node to be evaluated.
 */
function getNodeType(node) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition:
        case utils_1.AST_NODE_TYPES.MethodDefinition:
            return node.kind;
        case utils_1.AST_NODE_TYPES.TSMethodSignature:
            return 'method';
        case utils_1.AST_NODE_TYPES.TSCallSignatureDeclaration:
            return 'call-signature';
        case utils_1.AST_NODE_TYPES.TSConstructSignatureDeclaration:
            return 'constructor';
        case utils_1.AST_NODE_TYPES.TSAbstractPropertyDefinition:
            return node.readonly ? 'readonly-field' : 'field';
        case utils_1.AST_NODE_TYPES.PropertyDefinition:
            return node.value && functionExpressions.includes(node.value.type)
                ? 'method'
                : node.readonly
                    ? 'readonly-field'
                    : 'field';
        case utils_1.AST_NODE_TYPES.TSPropertySignature:
            return node.readonly ? 'readonly-field' : 'field';
        case utils_1.AST_NODE_TYPES.TSIndexSignature:
            return node.readonly ? 'readonly-signature' : 'signature';
        case utils_1.AST_NODE_TYPES.StaticBlock:
            return 'static-initialization';
        default:
            return null;
    }
}
/**
 * Gets the raw string value of a member's name
 */
function getMemberRawName(member, sourceCode) {
    const { name, type } = util.getNameFromMember(member, sourceCode);
    if (type === util.MemberNameType.Quoted) {
        return name.slice(1, -1);
    }
    if (type === util.MemberNameType.Private) {
        return name.slice(1);
    }
    return name;
}
/**
 * Gets the member name based on the member type.
 *
 * @param node the node to be evaluated.
 * @param sourceCode
 */
function getMemberName(node, sourceCode) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.TSPropertySignature:
        case utils_1.AST_NODE_TYPES.TSMethodSignature:
        case utils_1.AST_NODE_TYPES.TSAbstractPropertyDefinition:
        case utils_1.AST_NODE_TYPES.PropertyDefinition:
            return getMemberRawName(node, sourceCode);
        case utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition:
        case utils_1.AST_NODE_TYPES.MethodDefinition:
            return node.kind === 'constructor'
                ? 'constructor'
                : getMemberRawName(node, sourceCode);
        case utils_1.AST_NODE_TYPES.TSConstructSignatureDeclaration:
            return 'new';
        case utils_1.AST_NODE_TYPES.TSCallSignatureDeclaration:
            return 'call';
        case utils_1.AST_NODE_TYPES.TSIndexSignature:
            return util.getNameFromIndexSignature(node);
        case utils_1.AST_NODE_TYPES.StaticBlock:
            return 'static block';
        default:
            return null;
    }
}
/**
 * Returns true if the member is optional based on the member type.
 *
 * @param node the node to be evaluated.
 *
 * @returns Whether the member is optional, or false if it cannot be optional at all.
 */
function isMemberOptional(node) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.TSPropertySignature:
        case utils_1.AST_NODE_TYPES.TSMethodSignature:
        case utils_1.AST_NODE_TYPES.TSAbstractPropertyDefinition:
        case utils_1.AST_NODE_TYPES.PropertyDefinition:
        case utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition:
        case utils_1.AST_NODE_TYPES.MethodDefinition:
            return !!node.optional;
    }
    return false;
}
/**
 * Gets the calculated rank using the provided method definition.
 * The algorithm is as follows:
 * - Get the rank based on the accessibility-scope-type name, e.g. public-instance-field
 * - If there is no order for accessibility-scope-type, then strip out the accessibility.
 * - If there is no order for scope-type, then strip out the scope.
 * - If there is no order for type, then return -1
 * @param memberGroups the valid names to be validated.
 * @param orderConfig the current order to be validated.
 *
 * @return Index of the matching member type in the order configuration.
 */
function getRankOrder(memberGroups, orderConfig) {
    let rank = -1;
    const stack = memberGroups.slice(); // Get a copy of the member groups
    while (stack.length > 0 && rank === -1) {
        const memberGroup = stack.shift();
        rank = orderConfig.findIndex(memberType => Array.isArray(memberType)
            ? memberType.includes(memberGroup)
            : memberType === memberGroup);
    }
    return rank;
}
function getAccessibility(node) {
    var _a;
    if ('accessibility' in node && node.accessibility) {
        return node.accessibility;
    }
    if ('key' in node && ((_a = node.key) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.PrivateIdentifier) {
        return '#private';
    }
    return 'public';
}
/**
 * Gets the rank of the node given the order.
 * @param node the node to be evaluated.
 * @param orderConfig the current order to be validated.
 * @param supportsModifiers a flag indicating whether the type supports modifiers (scope or accessibility) or not.
 */
function getRank(node, orderConfig, supportsModifiers) {
    const type = getNodeType(node);
    if (type == null) {
        // shouldn't happen but just in case, put it on the end
        return orderConfig.length - 1;
    }
    const abstract = node.type === utils_1.AST_NODE_TYPES.TSAbstractPropertyDefinition ||
        node.type === utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition;
    const scope = 'static' in node && node.static
        ? 'static'
        : abstract
            ? 'abstract'
            : 'instance';
    const accessibility = getAccessibility(node);
    // Collect all existing member groups that apply to this node...
    // (e.g. 'public-instance-field', 'instance-field', 'public-field', 'constructor' etc.)
    const memberGroups = [];
    if (supportsModifiers) {
        const decorated = 'decorators' in node && node.decorators.length > 0;
        if (decorated &&
            (type === 'readonly-field' ||
                type === 'field' ||
                type === 'method' ||
                type === 'get' ||
                type === 'set')) {
            memberGroups.push(`${accessibility}-decorated-${type}`);
            memberGroups.push(`decorated-${type}`);
            if (type === 'readonly-field') {
                memberGroups.push(`${accessibility}-decorated-field`);
                memberGroups.push(`decorated-field`);
            }
        }
        if (type !== 'readonly-signature' &&
            type !== 'signature' &&
            type !== 'static-initialization') {
            if (type !== 'constructor') {
                // Constructors have no scope
                memberGroups.push(`${accessibility}-${scope}-${type}`);
                memberGroups.push(`${scope}-${type}`);
                if (type === 'readonly-field') {
                    memberGroups.push(`${accessibility}-${scope}-field`);
                    memberGroups.push(`${scope}-field`);
                }
            }
            memberGroups.push(`${accessibility}-${type}`);
            if (type === 'readonly-field') {
                memberGroups.push(`${accessibility}-field`);
            }
        }
    }
    memberGroups.push(type);
    if (type === 'readonly-signature') {
        memberGroups.push('signature');
    }
    else if (type === 'readonly-field') {
        memberGroups.push('field');
    }
    // ...then get the rank order for those member groups based on the node
    return getRankOrder(memberGroups, orderConfig);
}
/**
 * Gets the lowest possible rank(s) higher than target.
 * e.g. given the following order:
 *   ...
 *   public-static-method
 *   protected-static-method
 *   private-static-method
 *   public-instance-method
 *   protected-instance-method
 *   private-instance-method
 *   ...
 * and considering that a public-instance-method has already been declared, so ranks contains
 * public-instance-method, then the lowest possible rank for public-static-method is
 * public-instance-method.
 * If a lowest possible rank is a member group, a comma separated list of ranks is returned.
 * @param ranks the existing ranks in the object.
 * @param target the target rank.
 * @param order the current order to be validated.
 * @returns the name(s) of the lowest possible rank without dashes (-).
 */
function getLowestRank(ranks, target, order) {
    let lowest = ranks[ranks.length - 1];
    ranks.forEach(rank => {
        if (rank > target) {
            lowest = Math.min(lowest, rank);
        }
    });
    const lowestRank = order[lowest];
    const lowestRanks = Array.isArray(lowestRank) ? lowestRank : [lowestRank];
    return lowestRanks.map(rank => rank.replace(/-/g, ' ')).join(', ');
}
exports.default = util.createRule({
    name: 'member-ordering',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require a consistent member declaration order',
            recommended: false,
        },
        messages: {
            incorrectOrder: 'Member {{member}} should be declared before member {{beforeMember}}.',
            incorrectGroupOrder: 'Member {{name}} should be declared before all {{rank}} definitions.',
            incorrectRequiredMembersOrder: `Member {{member}} should be declared after all {{optionalOrRequired}} members.`,
        },
        schema: [
            {
                type: 'object',
                properties: {
                    default: {
                        oneOf: [
                            neverConfig,
                            arrayConfig(allMemberTypes),
                            objectConfig(allMemberTypes),
                        ],
                    },
                    classes: {
                        oneOf: [
                            neverConfig,
                            arrayConfig(allMemberTypes),
                            objectConfig(allMemberTypes),
                        ],
                    },
                    classExpressions: {
                        oneOf: [
                            neverConfig,
                            arrayConfig(allMemberTypes),
                            objectConfig(allMemberTypes),
                        ],
                    },
                    interfaces: {
                        oneOf: [
                            neverConfig,
                            arrayConfig([
                                'readonly-signature',
                                'signature',
                                'readonly-field',
                                'field',
                                'method',
                                'constructor',
                            ]),
                            objectConfig([
                                'readonly-signature',
                                'signature',
                                'readonly-field',
                                'field',
                                'method',
                                'constructor',
                            ]),
                        ],
                    },
                    typeLiterals: {
                        oneOf: [
                            neverConfig,
                            arrayConfig([
                                'readonly-signature',
                                'signature',
                                'readonly-field',
                                'field',
                                'method',
                                'constructor',
                            ]),
                            objectConfig([
                                'readonly-signature',
                                'signature',
                                'readonly-field',
                                'field',
                                'method',
                                'constructor',
                            ]),
                        ],
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    defaultOptions: [
        {
            default: exports.defaultOrder,
        },
    ],
    create(context, [options]) {
        /**
         * Checks if the member groups are correctly sorted.
         *
         * @param members Members to be validated.
         * @param groupOrder Group order to be validated.
         * @param supportsModifiers A flag indicating whether the type supports modifiers (scope or accessibility) or not.
         *
         * @return Array of member groups or null if one of the groups is not correctly sorted.
         */
        function checkGroupSort(members, groupOrder, supportsModifiers) {
            const previousRanks = [];
            const memberGroups = [];
            let isCorrectlySorted = true;
            // Find first member which isn't correctly sorted
            members.forEach(member => {
                const rank = getRank(member, groupOrder, supportsModifiers);
                const name = getMemberName(member, context.getSourceCode());
                const rankLastMember = previousRanks[previousRanks.length - 1];
                if (rank === -1) {
                    return;
                }
                // Works for 1st item because x < undefined === false for any x (typeof string)
                if (rank < rankLastMember) {
                    context.report({
                        node: member,
                        messageId: 'incorrectGroupOrder',
                        data: {
                            name,
                            rank: getLowestRank(previousRanks, rank, groupOrder),
                        },
                    });
                    isCorrectlySorted = false;
                }
                else if (rank === rankLastMember) {
                    // Same member group --> Push to existing member group array
                    memberGroups[memberGroups.length - 1].push(member);
                }
                else {
                    // New member group --> Create new member group array
                    previousRanks.push(rank);
                    memberGroups.push([member]);
                }
            });
            return isCorrectlySorted ? memberGroups : null;
        }
        /**
         * Checks if the members are alphabetically sorted.
         *
         * @param members Members to be validated.
         * @param caseSensitive indicates if the alpha ordering is case sensitive or not.
         *
         * @return True if all members are correctly sorted.
         */
        function checkAlphaSort(members, order) {
            let previousName = '';
            let isCorrectlySorted = true;
            // Find first member which isn't correctly sorted
            members.forEach(member => {
                const name = getMemberName(member, context.getSourceCode());
                // Note: Not all members have names
                if (name) {
                    if (naturalOutOfOrder(name, previousName, order)) {
                        context.report({
                            node: member,
                            messageId: 'incorrectOrder',
                            data: {
                                member: name,
                                beforeMember: previousName,
                            },
                        });
                        isCorrectlySorted = false;
                    }
                    previousName = name;
                }
            });
            return isCorrectlySorted;
        }
        function naturalOutOfOrder(name, previousName, order) {
            switch (order) {
                case 'alphabetically':
                    return name < previousName;
                case 'alphabetically-case-insensitive':
                    return name.toLowerCase() < previousName.toLowerCase();
                case 'natural':
                    return (0, natural_compare_lite_1.default)(name, previousName) !== 1;
                case 'natural-case-insensitive':
                    return ((0, natural_compare_lite_1.default)(name.toLowerCase(), previousName.toLowerCase()) !== 1);
            }
        }
        /**
         * Checks if the order of optional and required members is correct based
         * on the given 'required' parameter.
         *
         * @param members Members to be validated.
         * @param optionalityOrder Where to place optional members, if not intermixed.
         *
         * @return True if all required and optional members are correctly sorted.
         */
        function checkRequiredOrder(members, optionalityOrder) {
            const switchIndex = members.findIndex((member, i) => i && isMemberOptional(member) !== isMemberOptional(members[i - 1]));
            const report = (member) => context.report({
                messageId: 'incorrectRequiredMembersOrder',
                loc: member.loc,
                data: {
                    member: getMemberName(member, context.getSourceCode()),
                    optionalOrRequired: optionalityOrder === 'required-first' ? 'required' : 'optional',
                },
            });
            // if the optionality of the first item is correct (based on optionalityOrder)
            // then the first 0 inclusive to switchIndex exclusive members all
            // have the correct optionality
            if (isMemberOptional(members[0]) !==
                (optionalityOrder === 'optional-first')) {
                report(members[0]);
                return false;
            }
            for (let i = switchIndex + 1; i < members.length; i++) {
                if (isMemberOptional(members[i]) !==
                    isMemberOptional(members[switchIndex])) {
                    report(members[switchIndex]);
                    return false;
                }
            }
            return true;
        }
        /**
         * Validates if all members are correctly sorted.
         *
         * @param members Members to be validated.
         * @param orderConfig Order config to be validated.
         * @param supportsModifiers A flag indicating whether the type supports modifiers (scope or accessibility) or not.
         */
        function validateMembersOrder(members, orderConfig, supportsModifiers) {
            if (orderConfig === 'never') {
                return;
            }
            // Standardize config
            let order;
            let memberTypes;
            let optionalityOrder;
            // returns true if everything is good and false if an error was reported
            const checkOrder = (memberSet) => {
                const hasAlphaSort = !!(order && order !== 'as-written');
                // Check order
                if (Array.isArray(memberTypes)) {
                    const grouped = checkGroupSort(memberSet, memberTypes, supportsModifiers);
                    if (grouped == null) {
                        return false;
                    }
                    if (hasAlphaSort) {
                        return !grouped.some(groupMember => !checkAlphaSort(groupMember, order));
                    }
                }
                else if (hasAlphaSort) {
                    return checkAlphaSort(memberSet, order);
                }
                return true;
            };
            if (Array.isArray(orderConfig)) {
                memberTypes = orderConfig;
            }
            else {
                order = orderConfig.order;
                memberTypes = orderConfig.memberTypes;
                optionalityOrder = orderConfig.optionalityOrder;
            }
            if (!optionalityOrder) {
                checkOrder(members);
                return;
            }
            const switchIndex = members.findIndex((member, i) => i && isMemberOptional(member) !== isMemberOptional(members[i - 1]));
            if (switchIndex !== -1) {
                if (!checkRequiredOrder(members, optionalityOrder)) {
                    return;
                }
                checkOrder(members.slice(0, switchIndex));
                checkOrder(members.slice(switchIndex));
            }
            else {
                checkOrder(members);
            }
        }
        return {
            ClassDeclaration(node) {
                var _a;
                validateMembersOrder(node.body.body, (_a = options.classes) !== null && _a !== void 0 ? _a : options.default, true);
            },
            ClassExpression(node) {
                var _a;
                validateMembersOrder(node.body.body, (_a = options.classExpressions) !== null && _a !== void 0 ? _a : options.default, true);
            },
            TSInterfaceDeclaration(node) {
                var _a;
                validateMembersOrder(node.body.body, (_a = options.interfaces) !== null && _a !== void 0 ? _a : options.default, false);
            },
            TSTypeLiteral(node) {
                var _a;
                validateMembersOrder(node.members, (_a = options.typeLiterals) !== null && _a !== void 0 ? _a : options.default, false);
            },
        };
    },
});
//# sourceMappingURL=member-ordering.js.map