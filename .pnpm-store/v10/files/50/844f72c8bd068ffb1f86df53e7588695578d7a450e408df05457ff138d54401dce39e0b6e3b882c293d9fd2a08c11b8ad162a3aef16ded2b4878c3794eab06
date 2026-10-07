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
exports.SCHEMA = void 0;
const util = __importStar(require("../../util"));
const enums_1 = require("./enums");
const UNDERSCORE_SCHEMA = {
    type: 'string',
    enum: util.getEnumNames(enums_1.UnderscoreOptions),
};
const PREFIX_SUFFIX_SCHEMA = {
    type: 'array',
    items: {
        type: 'string',
        minLength: 1,
    },
    additionalItems: false,
};
const MATCH_REGEX_SCHEMA = {
    type: 'object',
    properties: {
        match: { type: 'boolean' },
        regex: { type: 'string' },
    },
    required: ['match', 'regex'],
};
const FORMAT_OPTIONS_PROPERTIES = {
    format: {
        oneOf: [
            {
                type: 'array',
                items: {
                    type: 'string',
                    enum: util.getEnumNames(enums_1.PredefinedFormats),
                },
                additionalItems: false,
            },
            {
                type: 'null',
            },
        ],
    },
    custom: MATCH_REGEX_SCHEMA,
    leadingUnderscore: UNDERSCORE_SCHEMA,
    trailingUnderscore: UNDERSCORE_SCHEMA,
    prefix: PREFIX_SUFFIX_SCHEMA,
    suffix: PREFIX_SUFFIX_SCHEMA,
    failureMessage: {
        type: 'string',
    },
};
function selectorSchema(selectorString, allowType, modifiers) {
    const selector = {
        filter: {
            oneOf: [
                {
                    type: 'string',
                    minLength: 1,
                },
                MATCH_REGEX_SCHEMA,
            ],
        },
        selector: {
            type: 'string',
            enum: [selectorString],
        },
    };
    if (modifiers && modifiers.length > 0) {
        selector.modifiers = {
            type: 'array',
            items: {
                type: 'string',
                enum: modifiers,
            },
            additionalItems: false,
        };
    }
    if (allowType) {
        selector.types = {
            type: 'array',
            items: {
                type: 'string',
                enum: util.getEnumNames(enums_1.TypeModifiers),
            },
            additionalItems: false,
        };
    }
    return [
        {
            type: 'object',
            properties: Object.assign(Object.assign({}, FORMAT_OPTIONS_PROPERTIES), selector),
            required: ['selector', 'format'],
            additionalProperties: false,
        },
    ];
}
function selectorsSchema() {
    return {
        type: 'object',
        properties: Object.assign(Object.assign({}, FORMAT_OPTIONS_PROPERTIES), {
            filter: {
                oneOf: [
                    {
                        type: 'string',
                        minLength: 1,
                    },
                    MATCH_REGEX_SCHEMA,
                ],
            },
            selector: {
                type: 'array',
                items: {
                    type: 'string',
                    enum: [
                        ...util.getEnumNames(enums_1.MetaSelectors),
                        ...util.getEnumNames(enums_1.Selectors),
                    ],
                },
                additionalItems: false,
            },
            modifiers: {
                type: 'array',
                items: {
                    type: 'string',
                    enum: util.getEnumNames(enums_1.Modifiers),
                },
                additionalItems: false,
            },
            types: {
                type: 'array',
                items: {
                    type: 'string',
                    enum: util.getEnumNames(enums_1.TypeModifiers),
                },
                additionalItems: false,
            },
        }),
        required: ['selector', 'format'],
        additionalProperties: false,
    };
}
const SCHEMA = {
    type: 'array',
    items: {
        oneOf: [
            selectorsSchema(),
            ...selectorSchema('default', false, util.getEnumNames(enums_1.Modifiers)),
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
        ],
    },
    additionalItems: false,
};
exports.SCHEMA = SCHEMA;
//# sourceMappingURL=schema.js.map