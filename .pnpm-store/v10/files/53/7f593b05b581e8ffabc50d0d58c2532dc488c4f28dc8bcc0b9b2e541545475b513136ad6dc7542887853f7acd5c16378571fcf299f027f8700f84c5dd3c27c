"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const ignore_1 = __importDefault(require("ignore"));
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-restricted-imports');
// In some versions of eslint, the base rule has a completely incompatible schema
// This helper function is to safely try to get parts of the schema. If it's not
// possible, we'll fallback to less strict checks.
const tryAccess = (getter, fallback) => {
    try {
        return getter();
    }
    catch {
        return fallback;
    }
};
const baseSchema = baseRule.meta.schema;
const allowTypeImportsOptionSchema = {
    allowTypeImports: {
        type: 'boolean',
        description: 'Whether to allow type-only imports for a path.',
    },
};
const arrayOfStringsOrObjects = {
    type: 'array',
    items: {
        anyOf: [
            { type: 'string' },
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ...tryAccess(() => baseSchema.anyOf[1].items[0].properties.paths.items.anyOf[1]
                        .properties, undefined),
                    ...allowTypeImportsOptionSchema,
                },
                required: tryAccess(() => baseSchema.anyOf[1].items[0].properties.paths.items.anyOf[1]
                    .required, undefined),
            },
        ],
    },
    uniqueItems: true,
};
const arrayOfStringsOrObjectPatterns = {
    anyOf: [
        {
            type: 'array',
            items: {
                type: 'string',
            },
            uniqueItems: true,
        },
        {
            type: 'array',
            items: {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ...tryAccess(() => baseSchema.anyOf[1].items[0].properties.patterns.anyOf[1].items
                        .properties, undefined),
                    ...allowTypeImportsOptionSchema,
                },
                required: tryAccess(() => baseSchema.anyOf[1].items[0].properties.patterns.anyOf[1].items
                    .required, []),
            },
            uniqueItems: true,
        },
    ],
};
const schema = {
    anyOf: [
        arrayOfStringsOrObjects,
        {
            type: 'array',
            additionalItems: false,
            items: [
                {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        paths: arrayOfStringsOrObjects,
                        patterns: arrayOfStringsOrObjectPatterns,
                    },
                },
            ],
        },
    ],
};
function isObjectOfPaths(obj) {
    return !!obj && Object.hasOwn(obj, 'paths');
}
function isObjectOfPatterns(obj) {
    return !!obj && Object.hasOwn(obj, 'patterns');
}
function isOptionsArrayOfStringOrObject(options) {
    if (isObjectOfPaths(options[0])) {
        return false;
    }
    if (isObjectOfPatterns(options[0])) {
        return false;
    }
    return true;
}
function getRestrictedPaths(options) {
    if (isOptionsArrayOfStringOrObject(options)) {
        return options;
    }
    if (isObjectOfPaths(options[0])) {
        return options[0].paths;
    }
    return [];
}
function getRestrictedPatterns(options) {
    if (isObjectOfPatterns(options[0])) {
        return options[0].patterns;
    }
    return [];
}
function shouldCreateRule(baseRules, options) {
    if (Object.keys(baseRules).length === 0 || options.length === 0) {
        return false;
    }
    if (!isOptionsArrayOfStringOrObject(options)) {
        return !!(options[0].paths?.length || options[0].patterns?.length);
    }
    return true;
}
exports.default = (0, util_1.createRule)({
    name: 'no-restricted-imports',
    meta: {
        type: 'suggestion',
        // defaultOptions, -- base rule does not use defaultOptions
        deprecated: {
            deprecatedSince: '8.64.0',
            replacedBy: [
                {
                    rule: {
                        name: 'no-restricted-imports',
                        url: 'https://eslint.org/docs/latest/rules/no-restricted-imports',
                    },
                },
            ],
            url: 'https://github.com/typescript-eslint/typescript-eslint/pull/12527',
        },
        docs: {
            description: 'Disallow specified modules when loaded by `import`',
            extendsBaseRule: true,
        },
        fixable: baseRule.meta.fixable,
        messages: baseRule.meta.messages,
        schema,
    },
    defaultOptions: [],
    create(context) {
        const rules = baseRule.create(context);
        const { options } = context;
        if (!shouldCreateRule(rules, options)) {
            return {};
        }
        const restrictedPaths = getRestrictedPaths(options);
        const allowedTypeImportPathNameSet = new Set();
        for (const restrictedPath of restrictedPaths) {
            if (typeof restrictedPath === 'object' &&
                restrictedPath.allowTypeImports) {
                allowedTypeImportPathNameSet.add(restrictedPath.name);
            }
        }
        function isAllowedTypeImportPath(importSource) {
            return allowedTypeImportPathNameSet.has(importSource);
        }
        const restrictedPatterns = getRestrictedPatterns(options);
        const allowedImportTypeMatchers = [];
        const allowedImportTypeRegexMatchers = [];
        for (const restrictedPattern of restrictedPatterns) {
            if (typeof restrictedPattern === 'object' &&
                restrictedPattern.allowTypeImports) {
                // Following how ignore is configured in the base rule
                if (restrictedPattern.group) {
                    allowedImportTypeMatchers.push((0, ignore_1.default)({
                        allowRelativePaths: true,
                        ignoreCase: !restrictedPattern.caseSensitive,
                    }).add(restrictedPattern.group));
                }
                if (restrictedPattern.regex) {
                    allowedImportTypeRegexMatchers.push(new RegExp(restrictedPattern.regex, restrictedPattern.caseSensitive ? 'u' : 'iu'));
                }
            }
        }
        function isAllowedTypeImportPattern(importSource) {
            return (
            // As long as there's one matching pattern that allows type import
            allowedImportTypeMatchers.some(matcher => matcher.ignores(importSource)) ||
                allowedImportTypeRegexMatchers.some(regex => regex.test(importSource)));
        }
        function checkImportNode(node) {
            if (node.importKind === 'type' ||
                (node.specifiers.length > 0 &&
                    node.specifiers.every(specifier => specifier.type === utils_1.AST_NODE_TYPES.ImportSpecifier &&
                        specifier.importKind === 'type'))) {
                const importSource = node.source.value.trim();
                if (!isAllowedTypeImportPath(importSource) &&
                    !isAllowedTypeImportPattern(importSource)) {
                    return rules.ImportDeclaration(node);
                }
            }
            else {
                return rules.ImportDeclaration(node);
            }
        }
        return {
            ExportAllDeclaration: rules.ExportAllDeclaration,
            'ExportNamedDeclaration[source]'(node) {
                if (node.exportKind === 'type' ||
                    (node.specifiers.length > 0 &&
                        node.specifiers.every(specifier => specifier.exportKind === 'type'))) {
                    const importSource = node.source.value.trim();
                    if (!isAllowedTypeImportPath(importSource) &&
                        !isAllowedTypeImportPattern(importSource)) {
                        return rules.ExportNamedDeclaration(node);
                    }
                }
                else {
                    return rules.ExportNamedDeclaration(node);
                }
            },
            ImportDeclaration: checkImportNode,
            TSImportEqualsDeclaration(node) {
                if (node.moduleReference.type === utils_1.AST_NODE_TYPES.TSExternalModuleReference) {
                    const synthesizedImport = {
                        ...node,
                        type: utils_1.AST_NODE_TYPES.ImportDeclaration,
                        assertions: [],
                        attributes: [],
                        source: node.moduleReference.expression,
                        specifiers: [
                            {
                                ...node.id,
                                type: utils_1.AST_NODE_TYPES.ImportDefaultSpecifier,
                                local: node.id,
                                // @ts-expect-error -- parent types are incompatible but it's fine for the purposes of this extension
                                parent: node.id.parent,
                            },
                        ],
                    };
                    return checkImportNode(synthesizedImport);
                }
            },
        };
    },
});
//# sourceMappingURL=no-restricted-imports.js.map