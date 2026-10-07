"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ignore_1 = __importDefault(require("ignore"));
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-restricted-imports');
const allowTypeImportsOptionSchema = {
    allowTypeImports: {
        type: 'boolean',
        default: false,
    },
};
const schemaForMergeArrayOfStringsOrObjects = {
    items: {
        anyOf: [
            {},
            {
                properties: allowTypeImportsOptionSchema,
            },
        ],
    },
};
const schemaForMergeArrayOfStringsOrObjectPatterns = {
    anyOf: [
        {},
        {
            items: {
                properties: allowTypeImportsOptionSchema,
            },
        },
    ],
};
const schema = (0, util_1.deepMerge)(Object.assign({}, baseRule.meta.schema), {
    anyOf: [
        schemaForMergeArrayOfStringsOrObjects,
        {
            items: {
                properties: {
                    paths: schemaForMergeArrayOfStringsOrObjects,
                    patterns: schemaForMergeArrayOfStringsOrObjectPatterns,
                },
            },
        },
    ],
});
function isObjectOfPaths(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'paths');
}
function isObjectOfPatterns(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'patterns');
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
exports.default = (0, util_1.createRule)({
    name: 'no-restricted-imports',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow specified modules when loaded by `import`',
            recommended: false,
            extendsBaseRule: true,
        },
        messages: baseRule.meta.messages,
        fixable: baseRule.meta.fixable,
        schema,
    },
    defaultOptions: [],
    create(context) {
        const rules = baseRule.create(context);
        const { options } = context;
        if (options.length === 0) {
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
        for (const restrictedPattern of restrictedPatterns) {
            if (typeof restrictedPattern === 'object' &&
                restrictedPattern.allowTypeImports) {
                // Following how ignore is configured in the base rule
                allowedImportTypeMatchers.push((0, ignore_1.default)({
                    allowRelativePaths: true,
                    ignoreCase: !restrictedPattern.caseSensitive,
                }).add(restrictedPattern.group));
            }
        }
        function isAllowedTypeImportPattern(importSource) {
            return (
            // As long as there's one matching pattern that allows type import
            allowedImportTypeMatchers.some(matcher => matcher.ignores(importSource)));
        }
        return {
            ImportDeclaration(node) {
                if (node.importKind === 'type') {
                    const importSource = node.source.value.trim();
                    if (!isAllowedTypeImportPath(importSource) &&
                        !isAllowedTypeImportPattern(importSource)) {
                        return rules.ImportDeclaration(node);
                    }
                }
                else {
                    return rules.ImportDeclaration(node);
                }
            },
            'ExportNamedDeclaration[source]'(node) {
                if (node.exportKind === 'type') {
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
            ExportAllDeclaration: rules.ExportAllDeclaration,
        };
    },
});
//# sourceMappingURL=no-restricted-imports.js.map