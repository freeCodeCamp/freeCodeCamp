"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCHEMA = void 0;
const util_1 = require("../../util");
const enums_1 = require("./enums");
const $DEFS = {
    // enums
    predefinedFormats: {
        enum: (0, util_1.getEnumNames)(enums_1.PredefinedFormats),
        type: 'string',
    },
    typeModifiers: {
        enum: (0, util_1.getEnumNames)(enums_1.TypeModifiers),
        type: 'string',
    },
    underscoreOptions: {
        enum: (0, util_1.getEnumNames)(enums_1.UnderscoreOptions),
        type: 'string',
    },
    // repeated types
    formatOptionsConfig: {
        oneOf: [
            {
                additionalItems: false,
                items: {
                    $ref: '#/$defs/predefinedFormats',
                },
                type: 'array',
            },
            {
                type: 'null',
            },
        ],
    },
    matchRegexConfig: {
        additionalProperties: false,
        properties: {
            match: { type: 'boolean' },
            regex: { type: 'string' },
        },
        required: ['match', 'regex'],
        type: 'object',
    },
    prefixSuffixConfig: {
        additionalItems: false,
        items: {
            minLength: 1,
            type: 'string',
        },
        type: 'array',
    },
};
const UNDERSCORE_SCHEMA = {
    $ref: '#/$defs/underscoreOptions',
};
const PREFIX_SUFFIX_SCHEMA = {
    $ref: '#/$defs/prefixSuffixConfig',
};
const MATCH_REGEX_SCHEMA = {
    $ref: '#/$defs/matchRegexConfig',
};
const FORMAT_OPTIONS_PROPERTIES = {
    custom: MATCH_REGEX_SCHEMA,
    failureMessage: {
        type: 'string',
    },
    format: {
        $ref: '#/$defs/formatOptionsConfig',
    },
    leadingUnderscore: UNDERSCORE_SCHEMA,
    prefix: PREFIX_SUFFIX_SCHEMA,
    suffix: PREFIX_SUFFIX_SCHEMA,
    trailingUnderscore: UNDERSCORE_SCHEMA,
};
function selectorSchema(selectorString, allowType, modifiers) {
    const selector = {
        filter: {
            oneOf: [
                {
                    minLength: 1,
                    type: 'string',
                },
                MATCH_REGEX_SCHEMA,
            ],
        },
        selector: {
            enum: [selectorString],
            type: 'string',
        },
    };
    if (modifiers && modifiers.length > 0) {
        selector.modifiers = {
            additionalItems: false,
            items: {
                enum: modifiers,
                type: 'string',
            },
            type: 'array',
        };
    }
    if (allowType) {
        selector.types = {
            additionalItems: false,
            items: {
                $ref: '#/$defs/typeModifiers',
            },
            type: 'array',
        };
    }
    return [
        {
            additionalProperties: false,
            description: `Selector '${selectorString}'`,
            properties: {
                ...FORMAT_OPTIONS_PROPERTIES,
                ...selector,
            },
            required: ['selector', 'format'],
            type: 'object',
        },
    ];
}
function selectorsSchema() {
    return {
        additionalProperties: false,
        description: 'Multiple selectors in one config',
        properties: {
            ...FORMAT_OPTIONS_PROPERTIES,
            filter: {
                oneOf: [
                    {
                        minLength: 1,
                        type: 'string',
                    },
                    MATCH_REGEX_SCHEMA,
                ],
            },
            modifiers: {
                additionalItems: false,
                items: {
                    enum: (0, util_1.getEnumNames)(enums_1.Modifiers),
                    type: 'string',
                },
                type: 'array',
            },
            selector: {
                additionalItems: false,
                items: {
                    enum: [...(0, util_1.getEnumNames)(enums_1.MetaSelectors), ...(0, util_1.getEnumNames)(enums_1.Selectors)],
                    type: 'string',
                },
                type: 'array',
            },
            types: {
                additionalItems: false,
                items: {
                    $ref: '#/$defs/typeModifiers',
                },
                type: 'array',
            },
        },
        required: ['selector', 'format'],
        type: 'object',
    };
}
exports.SCHEMA = {
    $defs: $DEFS,
    additionalItems: false,
    items: {
        oneOf: [
            selectorsSchema(),
            ...selectorSchema('default', false, (0, util_1.getEnumNames)(enums_1.Modifiers)),
            ...selectorSchema('variableLike', false, ['unused', 'async']),
            ...selectorSchema('variable', true, [
                'const',
                'destructured',
                'exported',
                'global',
                'unused',
                'async',
            ]),
            ...selectorSchema('function', false, [
                'exported',
                'global',
                'unused',
                'async',
            ]),
            ...selectorSchema('parameter', true, ['destructured', 'unused']),
            ...selectorSchema('memberLike', false, [
                'abstract',
                'private',
                '#private',
                'protected',
                'public',
                'readonly',
                'requiresQuotes',
                'static',
                'override',
                'async',
            ]),
            ...selectorSchema('classProperty', true, [
                'abstract',
                'private',
                '#private',
                'protected',
                'public',
                'readonly',
                'requiresQuotes',
                'static',
                'override',
            ]),
            ...selectorSchema('objectLiteralProperty', true, [
                'public',
                'requiresQuotes',
            ]),
            ...selectorSchema('typeProperty', true, [
                'public',
                'readonly',
                'requiresQuotes',
            ]),
            ...selectorSchema('parameterProperty', true, [
                'private',
                'protected',
                'public',
                'readonly',
            ]),
            ...selectorSchema('property', true, [
                'abstract',
                'private',
                '#private',
                'protected',
                'public',
                'readonly',
                'requiresQuotes',
                'static',
                'override',
                'async',
            ]),
            ...selectorSchema('classMethod', false, [
                'abstract',
                'private',
                '#private',
                'protected',
                'public',
                'requiresQuotes',
                'static',
                'override',
                'async',
            ]),
            ...selectorSchema('objectLiteralMethod', false, [
                'public',
                'requiresQuotes',
                'async',
            ]),
            ...selectorSchema('typeMethod', false, ['public', 'requiresQuotes']),
            ...selectorSchema('method', false, [
                'abstract',
                'private',
                '#private',
                'protected',
                'public',
                'requiresQuotes',
                'static',
                'override',
                'async',
            ]),
            ...selectorSchema('classicAccessor', true, [
                'abstract',
                'private',
                'protected',
                'public',
                'requiresQuotes',
                'static',
                'override',
            ]),
            ...selectorSchema('autoAccessor', true, [
                'abstract',
                'private',
                'protected',
                'public',
                'requiresQuotes',
                'static',
                'override',
            ]),
            ...selectorSchema('accessor', true, [
                'abstract',
                'private',
                'protected',
                'public',
                'requiresQuotes',
                'static',
                'override',
            ]),
            ...selectorSchema('enumMember', false, ['requiresQuotes']),
            ...selectorSchema('typeLike', false, ['abstract', 'exported', 'unused']),
            ...selectorSchema('class', false, ['abstract', 'exported', 'unused']),
            ...selectorSchema('interface', false, ['exported', 'unused']),
            ...selectorSchema('typeAlias', false, ['exported', 'unused']),
            ...selectorSchema('enum', false, ['exported', 'unused']),
            ...selectorSchema('typeParameter', false, ['unused']),
            ...selectorSchema('import', false, ['default', 'namespace']),
        ],
    },
    type: 'array',
};
//# sourceMappingURL=schema.js.map