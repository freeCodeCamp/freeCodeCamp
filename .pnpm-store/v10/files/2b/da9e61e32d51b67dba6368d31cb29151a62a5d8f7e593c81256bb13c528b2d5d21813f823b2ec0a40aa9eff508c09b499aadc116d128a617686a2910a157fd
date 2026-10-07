"use strict";
// This rule was feature-frozen before we enabled no-property-in-node.
/* eslint-disable eslint-plugin/no-property-in-node */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOrder = void 0;
const utils_1 = require("@typescript-eslint/utils");
const natural_compare_1 = __importDefault(require("natural-compare"));
const util_1 = require("../util");
const neverConfig = {
    type: 'string',
    enum: ['never'],
};
const arrayConfig = (memberTypes) => ({
    type: 'array',
    items: {
        oneOf: [
            {
                $ref: memberTypes,
            },
            {
                type: 'array',
                items: {
                    $ref: memberTypes,
                },
            },
        ],
    },
});
const objectConfig = (memberTypes) => ({
    type: 'object',
    additionalProperties: false,
    properties: {
        memberTypes: {
            oneOf: [arrayConfig(memberTypes), neverConfig],
        },
        optionalityOrder: {
            $ref: '#/items/0/$defs/optionalityOrderOptions',
        },
        order: {
            $ref: '#/items/0/$defs/orderOptions',
        },
    },
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
    // Accessors
    'public-static-accessor',
    'protected-static-accessor',
    'private-static-accessor',
    '#private-static-accessor',
    'public-decorated-accessor',
    'protected-decorated-accessor',
    'private-decorated-accessor',
    'public-instance-accessor',
    'protected-instance-accessor',
    'private-instance-accessor',
    '#private-instance-accessor',
    'public-abstract-accessor',
    'protected-abstract-accessor',
    'public-accessor',
    'protected-accessor',
    'private-accessor',
    '#private-accessor',
    'static-accessor',
    'instance-accessor',
    'abstract-accessor',
    'decorated-accessor',
    'accessor',
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
const allMemberTypes = [
    ...new Set([
        'readonly-signature',
        'signature',
        'readonly-field',
        'field',
        'method',
        'call-signature',
        'constructor',
        'accessor',
        'get',
        'set',
        'static-initialization',
    ].flatMap(type => [
        type,
        ...['public', 'protected', 'private', '#private']
            .flatMap(accessibility => [
            type !== 'readonly-signature' &&
                type !== 'signature' &&
                type !== 'static-initialization' &&
                type !== 'call-signature' &&
                !(type === 'constructor' && accessibility === '#private')
                ? `${accessibility}-${type}` // e.g. `public-field`
                : [],
            // Only class instance fields, methods, accessors, get and set can have decorators attached to them
            accessibility !== '#private' &&
                (type === 'readonly-field' ||
                    type === 'field' ||
                    type === 'method' ||
                    type === 'accessor' ||
                    type === 'get' ||
                    type === 'set')
                ? [`${accessibility}-decorated-${type}`, `decorated-${type}`]
                : [],
            type !== 'constructor' &&
                type !== 'readonly-signature' &&
                type !== 'signature' &&
                type !== 'call-signature'
                ? [
                    'static',
                    'instance',
                    // There is no `static-constructor` or `instance-constructor` or `abstract-constructor`
                    ...(accessibility === '#private' ||
                        accessibility === 'private'
                        ? []
                        : ['abstract']),
                ].flatMap(scope => [
                    `${scope}-${type}`,
                    `${accessibility}-${scope}-${type}`,
                ])
                : [],
        ])
            .flat(),
    ])),
];
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
        case utils_1.AST_NODE_TYPES.TSMethodSignature:
            return node.kind;
        case utils_1.AST_NODE_TYPES.TSCallSignatureDeclaration:
            return 'call-signature';
        case utils_1.AST_NODE_TYPES.TSConstructSignatureDeclaration:
            return 'constructor';
        case utils_1.AST_NODE_TYPES.TSAbstractPropertyDefinition:
        case utils_1.AST_NODE_TYPES.TSPropertySignature:
            return node.readonly ? 'readonly-field' : 'field';
        case utils_1.AST_NODE_TYPES.TSAbstractAccessorProperty:
        case utils_1.AST_NODE_TYPES.AccessorProperty:
            return 'accessor';
        case utils_1.AST_NODE_TYPES.PropertyDefinition:
            return node.value && functionExpressions.includes(node.value.type)
                ? 'method'
                : node.readonly
                    ? 'readonly-field'
                    : 'field';
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
    const { name, type } = (0, util_1.getNameFromMember)(member, sourceCode);
    if (type === util_1.MemberNameType.Quoted) {
        return name.slice(1, -1);
    }
    if (type === util_1.MemberNameType.Private) {
        return name.slice(1);
    }
    return name;
}
/**
 * Gets the member name based on the member type.
 *
 * @param node the node to be evaluated.
 */
function getMemberName(node, sourceCode) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.TSPropertySignature:
        case utils_1.AST_NODE_TYPES.TSMethodSignature:
        case utils_1.AST_NODE_TYPES.TSAbstractAccessorProperty:
        case utils_1.AST_NODE_TYPES.TSAbstractPropertyDefinition:
        case utils_1.AST_NODE_TYPES.AccessorProperty:
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
            return (0, util_1.getNameFromIndexSignature)(node);
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
        case utils_1.AST_NODE_TYPES.TSAbstractAccessorProperty:
        case utils_1.AST_NODE_TYPES.TSAbstractPropertyDefinition:
        case utils_1.AST_NODE_TYPES.AccessorProperty:
        case utils_1.AST_NODE_TYPES.PropertyDefinition:
        case utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition:
        case utils_1.AST_NODE_TYPES.MethodDefinition:
            return node.optional;
    }
    return false;
}
function getMemberInitializer(node) {
    switch (node.type) {
        case utils_1.AST_NODE_TYPES.AccessorProperty:
        case utils_1.AST_NODE_TYPES.PropertyDefinition:
            return node.value;
    }
    return undefined;
}
function getThisPropertyName(node) {
    return node.computed
        ? (0, util_1.getStaticStringValue)(node.property)
        : node.property.name;
}
function isEvaluatedLater(node, initializer) {
    for (let current = node; current !== initializer.parent; current = (0, util_1.nullThrows)(current.parent, util_1.NullThrowsReasons.MissingParent)) {
        if (current.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
            current.type === utils_1.AST_NODE_TYPES.ClassBody ||
            current.type === utils_1.AST_NODE_TYPES.FunctionExpression) {
            return true;
        }
    }
    return false;
}
function collectImmediateThisPropertyNames(initializer) {
    const names = new Set();
    (0, util_1.forEachChildESTree)(initializer, node => {
        if (node.type === utils_1.AST_NODE_TYPES.MemberExpression &&
            node.object.type === utils_1.AST_NODE_TYPES.ThisExpression &&
            !isEvaluatedLater(node, initializer)) {
            const name = getThisPropertyName(node);
            if (name != null) {
                names.add(name);
            }
        }
        return null;
    });
    return names;
}
function isBlockedByEarlierMemberReferences(member, members, fromIndex, toIndex, sourceCode) {
    const initializer = getMemberInitializer(member);
    if (!initializer) {
        return false;
    }
    const referencedNames = collectImmediateThisPropertyNames(initializer);
    return members.slice(fromIndex, toIndex).some(other => {
        const otherName = getMemberName(other, sourceCode);
        return (otherName != null &&
            getMemberInitializer(other) != null &&
            referencedNames.has(otherName));
    });
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
    const stack = [...memberGroups]; // Get a copy of the member groups
    while (stack.length > 0 && rank === -1) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const memberGroup = stack.shift();
        rank = orderConfig.findIndex(memberType => Array.isArray(memberType)
            ? memberType.includes(memberGroup)
            : memberType === memberGroup);
    }
    return rank;
}
function getAccessibility(node) {
    if ('accessibility' in node && node.accessibility) {
        return node.accessibility;
    }
    if ('key' in node && node.key.type === utils_1.AST_NODE_TYPES.PrivateIdentifier) {
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
    if (node.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
        node.value.type === utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression) {
        return -1;
    }
    if (type == null) {
        // shouldn't happen but just in case, put it on the end
        return orderConfig.length - 1;
    }
    const abstract = node.type === utils_1.AST_NODE_TYPES.TSAbstractAccessorProperty ||
        node.type === utils_1.AST_NODE_TYPES.TSAbstractPropertyDefinition ||
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
                type === 'accessor' ||
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
 * Groups members into arrays of consecutive members with the same rank.
 * If, for example, the memberSet parameter looks like the following...
 * @example
 * ```
 * interface Foo {
 *   [a: string]: number;
 *
 *   a: x;
 *   B: x;
 *   c: x;
 *
 *   c(): void;
 *   B(): void;
 *   a(): void;
 *
 *   (): Baz;
 *
 *   new (): Bar;
 * }
 * ```
 * ...the resulting array will look like: [[a, B, c], [c, B, a]].
 * @param memberSet The members to be grouped.
 * @param memberType The configured order of member types.
 * @param supportsModifiers It'll get passed to getRank().
 * @returns The array of groups of members.
 */
function groupMembersByType(members, memberTypes, supportsModifiers) {
    const groupedMembers = [];
    const memberRanks = members.map(member => getRank(member, memberTypes, supportsModifiers));
    let previousRank = undefined;
    members.forEach((member, index) => {
        if (index === members.length - 1) {
            return;
        }
        const rankOfCurrentMember = memberRanks[index];
        const rankOfNextMember = memberRanks[index + 1];
        if (rankOfCurrentMember === previousRank) {
            groupedMembers.at(-1)?.push(member);
        }
        else if (rankOfCurrentMember === rankOfNextMember) {
            groupedMembers.push([member]);
            previousRank = rankOfCurrentMember;
        }
    });
    return groupedMembers;
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
 * @param target the minimum target rank to filter on.
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
    return lowestRanks.map(rank => rank.replaceAll('-', ' ')).join(', ');
}
exports.default = (0, util_1.createRule)({
    name: 'member-ordering',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Require a consistent member declaration order',
            frozen: true,
        },
        messages: {
            incorrectGroupOrder: 'Member {{name}} should be declared before all {{rank}} definitions.',
            incorrectOrder: 'Member {{member}} should be declared before member {{beforeMember}}.',
            incorrectRequiredMembersOrder: `Member {{member}} should be declared after all {{optionalOrRequired}} members.`,
        },
        schema: [
            {
                type: 'object',
                $defs: {
                    allItems: {
                        type: 'string',
                        enum: allMemberTypes,
                    },
                    optionalityOrderOptions: {
                        type: 'string',
                        enum: ['optional-first', 'required-first'],
                    },
                    orderOptions: {
                        type: 'string',
                        enum: [
                            'alphabetically',
                            'alphabetically-case-insensitive',
                            'as-written',
                            'natural',
                            'natural-case-insensitive',
                        ],
                    },
                    typeItems: {
                        type: 'string',
                        enum: [
                            'readonly-signature',
                            'signature',
                            'readonly-field',
                            'field',
                            'method',
                            'constructor',
                        ],
                    },
                    // ajv is order-dependent; these configs must come last
                    baseConfig: {
                        oneOf: [
                            neverConfig,
                            arrayConfig('#/items/0/$defs/allItems'),
                            objectConfig('#/items/0/$defs/allItems'),
                        ],
                    },
                    typesConfig: {
                        oneOf: [
                            neverConfig,
                            arrayConfig('#/items/0/$defs/typeItems'),
                            objectConfig('#/items/0/$defs/typeItems'),
                        ],
                    },
                },
                additionalProperties: false,
                properties: {
                    classes: {
                        $ref: '#/items/0/$defs/baseConfig',
                        description: 'Which ordering to enforce for classes.',
                    },
                    classExpressions: {
                        $ref: '#/items/0/$defs/baseConfig',
                        description: 'Which ordering to enforce for classExpressions.',
                    },
                    default: {
                        $ref: '#/items/0/$defs/baseConfig',
                        description: 'Which ordering to enforce for default.',
                    },
                    interfaces: {
                        $ref: '#/items/0/$defs/typesConfig',
                        description: 'Which ordering to enforce for interfaces.',
                    },
                    typeLiterals: {
                        $ref: '#/items/0/$defs/typesConfig',
                        description: 'Which ordering to enforce for typeLiterals.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            default: {
                memberTypes: exports.defaultOrder,
            },
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
            for (const member of members) {
                const rank = getRank(member, groupOrder, supportsModifiers);
                const name = getMemberName(member, context.sourceCode);
                const rankLastMember = previousRanks[previousRanks.length - 1];
                if (rank === -1) {
                    continue;
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
            }
            return isCorrectlySorted ? memberGroups : null;
        }
        /**
         * Checks if the members are alphabetically sorted.
         *
         * @param members Members to be validated.
         * @param order What order the members should be sorted in.
         *
         * @return True if all members are correctly sorted.
         */
        function checkAlphaSort(members, order) {
            let previousName = '';
            let previousIndex = 0;
            let isCorrectlySorted = true;
            // Find first member which isn't correctly sorted
            members.forEach((member, index) => {
                const name = getMemberName(member, context.sourceCode);
                // Note: Not all members have names
                if (name) {
                    if (naturalOutOfOrder(name, previousName, order)) {
                        if (isBlockedByEarlierMemberReferences(member, members, previousIndex, index, context.sourceCode)) {
                            return;
                        }
                        context.report({
                            node: member,
                            messageId: 'incorrectOrder',
                            data: {
                                beforeMember: previousName,
                                member: name,
                            },
                        });
                        isCorrectlySorted = false;
                    }
                    previousName = name;
                    previousIndex = index;
                }
            });
            return isCorrectlySorted;
        }
        function naturalOutOfOrder(name, previousName, order) {
            if (name === previousName) {
                return false;
            }
            switch (order) {
                case 'alphabetically':
                    return name < previousName;
                case 'alphabetically-case-insensitive':
                    return name.toLowerCase() < previousName.toLowerCase();
                case 'natural':
                    return (0, natural_compare_1.default)(name, previousName) !== 1;
                case 'natural-case-insensitive':
                    return ((0, natural_compare_1.default)(name.toLowerCase(), previousName.toLowerCase()) !== 1);
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
                loc: member.loc,
                messageId: 'incorrectRequiredMembersOrder',
                data: {
                    member: getMemberName(member, context.sourceCode),
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
            /**
             * It runs an alphabetic sort on the groups of the members of the class in the source code.
             * @param memberSet The members in the class of the source code on which the grouping operation will be performed.
             */
            const checkAlphaSortForAllMembers = (memberSet) => {
                const hasAlphaSort = !!(order && order !== 'as-written');
                if (hasAlphaSort && Array.isArray(memberTypes)) {
                    groupMembersByType(memberSet, memberTypes, supportsModifiers).forEach(members => {
                        checkAlphaSort(members, order);
                    });
                }
            };
            // returns true if everything is good and false if an error was reported
            const checkOrder = (memberSet) => {
                const hasAlphaSort = !!(order && order !== 'as-written');
                // Check order
                if (Array.isArray(memberTypes)) {
                    const grouped = checkGroupSort(memberSet, memberTypes, supportsModifiers);
                    if (grouped == null) {
                        checkAlphaSortForAllMembers(members);
                        return false;
                    }
                    if (hasAlphaSort) {
                        grouped.map(groupMember => checkAlphaSort(groupMember, order));
                    }
                }
                else if (hasAlphaSort) {
                    return checkAlphaSort(memberSet, order);
                }
                return false;
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
        // https://github.com/typescript-eslint/typescript-eslint/issues/5439
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        return {
            ClassDeclaration(node) {
                validateMembersOrder(node.body.body, options.classes ?? options.default, true);
            },
            'ClassDeclaration, FunctionDeclaration'(node) {
                if ('superClass' in node) {
                    // ...
                }
            },
            ClassExpression(node) {
                validateMembersOrder(node.body.body, options.classExpressions ?? options.default, true);
            },
            TSInterfaceDeclaration(node) {
                validateMembersOrder(node.body.body, options.interfaces ?? options.default, false);
            },
            TSTypeLiteral(node) {
                validateMembersOrder(node.members, options.typeLiterals ?? options.default, false);
            },
        };
        /* eslint-enable @typescript-eslint/no-non-null-assertion */
    },
});
//# sourceMappingURL=member-ordering.js.map