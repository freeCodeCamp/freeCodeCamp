'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('node:util');
var path = require('node:path');
var Ajv = require('ajv');
var globals = require('globals');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var util__default = /*#__PURE__*/_interopDefaultLegacy(util);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var Ajv__default = /*#__PURE__*/_interopDefaultLegacy(Ajv);
var globals__default = /*#__PURE__*/_interopDefaultLegacy(globals);

/**
 * @fileoverview Config file operations. This file must be usable in the browser,
 * so no Node-specific code can be here.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

const RULE_SEVERITY_STRINGS = ["off", "warn", "error"],
    RULE_SEVERITY = RULE_SEVERITY_STRINGS.reduce((map, value, index) => {
        map[value] = index;
        return map;
    }, {}),
    VALID_SEVERITIES = new Set([0, 1, 2, "off", "warn", "error"]);

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Normalizes the severity value of a rule's configuration to a number
 * @param {(number|string|[number, ...*]|[string, ...*])} ruleConfig A rule's configuration value, generally
 * received from the user. A valid config value is either 0, 1, 2, the string "off" (treated the same as 0),
 * the string "warn" (treated the same as 1), the string "error" (treated the same as 2), or an array
 * whose first element is one of the above values. Strings are matched case-insensitively.
 * @returns {(0|1|2)} The numeric severity value if the config value was valid, otherwise 0.
 */
function getRuleSeverity(ruleConfig) {
    const severityValue = Array.isArray(ruleConfig) ? ruleConfig[0] : ruleConfig;

    if (severityValue === 0 || severityValue === 1 || severityValue === 2) {
        return severityValue;
    }

    if (typeof severityValue === "string") {
        return RULE_SEVERITY[severityValue.toLowerCase()] || 0;
    }

    return 0;
}

/**
 * Converts old-style severity settings (0, 1, 2) into new-style
 * severity settings (off, warn, error) for all rules. Assumption is that severity
 * values have already been validated as correct.
 * @param {Object} config The config object to normalize.
 * @returns {void}
 */
function normalizeToStrings(config) {

    if (config.rules) {
        Object.keys(config.rules).forEach(ruleId => {
            const ruleConfig = config.rules[ruleId];

            if (typeof ruleConfig === "number") {
                config.rules[ruleId] = RULE_SEVERITY_STRINGS[ruleConfig] || RULE_SEVERITY_STRINGS[0];
            } else if (Array.isArray(ruleConfig) && typeof ruleConfig[0] === "number") {
                ruleConfig[0] = RULE_SEVERITY_STRINGS[ruleConfig[0]] || RULE_SEVERITY_STRINGS[0];
            }
        });
    }
}

/**
 * Determines if the severity for the given rule configuration represents an error.
 * @param {int|string|Array} ruleConfig The configuration for an individual rule.
 * @returns {boolean} True if the rule represents an error, false if not.
 */
function isErrorSeverity(ruleConfig) {
    return getRuleSeverity(ruleConfig) === 2;
}

/**
 * Checks whether a given config has valid severity or not.
 * @param {number|string|Array} ruleConfig The configuration for an individual rule.
 * @returns {boolean} `true` if the configuration has valid severity.
 */
function isValidSeverity(ruleConfig) {
    let severity = Array.isArray(ruleConfig) ? ruleConfig[0] : ruleConfig;

    if (typeof severity === "string") {
        severity = severity.toLowerCase();
    }
    return VALID_SEVERITIES.has(severity);
}

/**
 * Checks whether every rule of a given config has valid severity or not.
 * @param {Object} config The configuration for rules.
 * @returns {boolean} `true` if the configuration has valid severity.
 */
function isEverySeverityValid(config) {
    return Object.keys(config).every(ruleId => isValidSeverity(config[ruleId]));
}

/**
 * Normalizes a value for a global in a config
 * @param {(boolean|string|null)} configuredValue The value given for a global in configuration or in
 * a global directive comment
 * @returns {("readable"|"writeable"|"off")} The value normalized as a string
 * @throws Error if global value is invalid
 */
function normalizeConfigGlobal(configuredValue) {
    switch (configuredValue) {
        case "off":
            return "off";

        case true:
        case "true":
        case "writeable":
        case "writable":
            return "writable";

        case null:
        case false:
        case "false":
        case "readable":
        case "readonly":
            return "readonly";

        default:
            throw new Error(`'${configuredValue}' is not a valid configuration for a global (use 'readonly', 'writable', or 'off')`);
    }
}

var ConfigOps = {
    __proto__: null,
    getRuleSeverity: getRuleSeverity,
    normalizeToStrings: normalizeToStrings,
    isErrorSeverity: isErrorSeverity,
    isValidSeverity: isValidSeverity,
    isEverySeverityValid: isEverySeverityValid,
    normalizeConfigGlobal: normalizeConfigGlobal
};

/**
 * @fileoverview Provide the function that emits deprecation warnings.
 * @author Toru Nagashima <http://github.com/mysticatea>
 */

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

// Defitions for deprecation warnings.
const deprecationWarningMessages = {
    ESLINT_LEGACY_ECMAFEATURES:
        "The 'ecmaFeatures' config file property is deprecated and has no effect.",
    ESLINT_PERSONAL_CONFIG_LOAD:
        "'~/.eslintrc.*' config files have been deprecated. " +
        "Please use a config file per project or the '--config' option.",
    ESLINT_PERSONAL_CONFIG_SUPPRESS:
        "'~/.eslintrc.*' config files have been deprecated. " +
        "Please remove it or add 'root:true' to the config files in your " +
        "projects in order to avoid loading '~/.eslintrc.*' accidentally."
};

const sourceFileErrorCache = new Set();

/**
 * Emits a deprecation warning containing a given filepath. A new deprecation warning is emitted
 * for each unique file path, but repeated invocations with the same file path have no effect.
 * No warnings are emitted if the `--no-deprecation` or `--no-warnings` Node runtime flags are active.
 * @param {string} source The name of the configuration source to report the warning for.
 * @param {string} errorCode The warning message to show.
 * @returns {void}
 */
function emitDeprecationWarning(source, errorCode) {
    const cacheKey = JSON.stringify({ source, errorCode });

    if (sourceFileErrorCache.has(cacheKey)) {
        return;
    }
    sourceFileErrorCache.add(cacheKey);

    const rel = path__default["default"].relative(process.cwd(), source);
    const message = deprecationWarningMessages[errorCode];

    process.emitWarning(
        `${message} (found in "${rel}")`,
        "DeprecationWarning",
        errorCode
    );
}

/**
 * @fileoverview The instance of Ajv validator.
 * @author Evgeny Poberezkin
 */

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------

/*
 * Copied from ajv/lib/refs/json-schema-draft-04.json
 * The MIT License (MIT)
 * Copyright (c) 2015-2017 Evgeny Poberezkin
 */
const metaSchema = {
    id: "http://json-schema.org/draft-04/schema#",
    $schema: "http://json-schema.org/draft-04/schema#",
    description: "Core schema meta-schema",
    definitions: {
        schemaArray: {
            type: "array",
            minItems: 1,
            items: { $ref: "#" }
        },
        positiveInteger: {
            type: "integer",
            minimum: 0
        },
        positiveIntegerDefault0: {
            allOf: [{ $ref: "#/definitions/positiveInteger" }, { default: 0 }]
        },
        simpleTypes: {
            enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: {
            type: "array",
            items: { type: "string" },
            minItems: 1,
            uniqueItems: true
        }
    },
    type: "object",
    properties: {
        id: {
            type: "string"
        },
        $schema: {
            type: "string"
        },
        title: {
            type: "string"
        },
        description: {
            type: "string"
        },
        default: { },
        multipleOf: {
            type: "number",
            minimum: 0,
            exclusiveMinimum: true
        },
        maximum: {
            type: "number"
        },
        exclusiveMaximum: {
            type: "boolean",
            default: false
        },
        minimum: {
            type: "number"
        },
        exclusiveMinimum: {
            type: "boolean",
            default: false
        },
        maxLength: { $ref: "#/definitions/positiveInteger" },
        minLength: { $ref: "#/definitions/positiveIntegerDefault0" },
        pattern: {
            type: "string",
            format: "regex"
        },
        additionalItems: {
            anyOf: [
                { type: "boolean" },
                { $ref: "#" }
            ],
            default: { }
        },
        items: {
            anyOf: [
                { $ref: "#" },
                { $ref: "#/definitions/schemaArray" }
            ],
            default: { }
        },
        maxItems: { $ref: "#/definitions/positiveInteger" },
        minItems: { $ref: "#/definitions/positiveIntegerDefault0" },
        uniqueItems: {
            type: "boolean",
            default: false
        },
        maxProperties: { $ref: "#/definitions/positiveInteger" },
        minProperties: { $ref: "#/definitions/positiveIntegerDefault0" },
        required: { $ref: "#/definitions/stringArray" },
        additionalProperties: {
            anyOf: [
                { type: "boolean" },
                { $ref: "#" }
            ],
            default: { }
        },
        definitions: {
            type: "object",
            additionalProperties: { $ref: "#" },
            default: { }
        },
        properties: {
            type: "object",
            additionalProperties: { $ref: "#" },
            default: { }
        },
        patternProperties: {
            type: "object",
            additionalProperties: { $ref: "#" },
            default: { }
        },
        dependencies: {
            type: "object",
            additionalProperties: {
                anyOf: [
                    { $ref: "#" },
                    { $ref: "#/definitions/stringArray" }
                ]
            }
        },
        enum: {
            type: "array",
            minItems: 1,
            uniqueItems: true
        },
        type: {
            anyOf: [
                { $ref: "#/definitions/simpleTypes" },
                {
                    type: "array",
                    items: { $ref: "#/definitions/simpleTypes" },
                    minItems: 1,
                    uniqueItems: true
                }
            ]
        },
        format: { type: "string" },
        allOf: { $ref: "#/definitions/schemaArray" },
        anyOf: { $ref: "#/definitions/schemaArray" },
        oneOf: { $ref: "#/definitions/schemaArray" },
        not: { $ref: "#" }
    },
    dependencies: {
        exclusiveMaximum: ["maximum"],
        exclusiveMinimum: ["minimum"]
    },
    default: { }
};

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

var ajvOrig = (additionalOptions = {}) => {
    const ajv = new Ajv__default["default"]({
        meta: false,
        useDefaults: true,
        validateSchema: false,
        missingRefs: "ignore",
        verbose: true,
        schemaId: "auto",
        ...additionalOptions
    });

    ajv.addMetaSchema(metaSchema);
    // eslint-disable-next-line no-underscore-dangle -- part of the API
    ajv._opts.defaultMeta = metaSchema.id;

    return ajv;
};

/**
 * @fileoverview Applies default rule options
 * @author JoshuaKGoldberg
 */

/**
 * Check if the variable contains an object strictly rejecting arrays
 * @param {unknown} value an object
 * @returns {boolean} Whether value is an object
 */
function isObjectNotArray(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Deeply merges second on top of first, creating a new {} object if needed.
 * @param {T} first Base, default value.
 * @param {U} second User-specified value.
 * @returns {T | U | (T & U)} Merged equivalent of second on top of first.
 */
function deepMergeObjects(first, second) {
    if (second === void 0) {
        return first;
    }

    if (!isObjectNotArray(first) || !isObjectNotArray(second)) {
        return second;
    }

    const result = { ...first, ...second };

    for (const key of Object.keys(second)) {
        if (Object.prototype.propertyIsEnumerable.call(first, key)) {
            result[key] = deepMergeObjects(first[key], second[key]);
        }
    }

    return result;
}

/**
 * Deeply merges second on top of first, creating a new [] array if needed.
 * @param {T[] | undefined} first Base, default values.
 * @param {U[] | undefined} second User-specified values.
 * @returns {(T | U | (T & U))[]} Merged equivalent of second on top of first.
 */
function deepMergeArrays(first, second) {
    if (!first || !second) {
        return second || first || [];
    }

    return [
        ...first.map((value, i) => deepMergeObjects(value, second[i])),
        ...second.slice(first.length)
    ];
}

/**
 * @fileoverview Defines a schema for configs.
 * @author Sylvan Mably
 */

const baseConfigProperties = {
    $schema: { type: "string" },
    env: { type: "object" },
    extends: { $ref: "#/definitions/stringOrStrings" },
    globals: { type: "object" },
    overrides: {
        type: "array",
        items: { $ref: "#/definitions/overrideConfig" },
        additionalItems: false
    },
    parser: { type: ["string", "null"] },
    parserOptions: { type: "object" },
    plugins: { type: "array" },
    processor: { type: "string" },
    rules: { type: "object" },
    settings: { type: "object" },
    noInlineConfig: { type: "boolean" },
    reportUnusedDisableDirectives: { type: "boolean" },

    ecmaFeatures: { type: "object" } // deprecated; logs a warning when used
};

const configSchema = {
    definitions: {
        stringOrStrings: {
            oneOf: [
                { type: "string" },
                {
                    type: "array",
                    items: { type: "string" },
                    additionalItems: false
                }
            ]
        },
        stringOrStringsRequired: {
            oneOf: [
                { type: "string" },
                {
                    type: "array",
                    items: { type: "string" },
                    additionalItems: false,
                    minItems: 1
                }
            ]
        },

        // Config at top-level.
        objectConfig: {
            type: "object",
            properties: {
                root: { type: "boolean" },
                ignorePatterns: { $ref: "#/definitions/stringOrStrings" },
                ...baseConfigProperties
            },
            additionalProperties: false
        },

        // Config in `overrides`.
        overrideConfig: {
            type: "object",
            properties: {
                excludedFiles: { $ref: "#/definitions/stringOrStrings" },
                files: { $ref: "#/definitions/stringOrStringsRequired" },
                ...baseConfigProperties
            },
            required: ["files"],
            additionalProperties: false
        }
    },

    $ref: "#/definitions/objectConfig"
};

/**
 * @fileoverview Defines environment settings and globals.
 * @author Elan Shanker
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Get the object that has difference.
 * @param {Record<string,boolean>} current The newer object.
 * @param {Record<string,boolean>} prev The older object.
 * @returns {Record<string,boolean>} The difference object.
 */
function getDiff(current, prev) {
    const retv = {};

    for (const [key, value] of Object.entries(current)) {
        if (!Object.hasOwn(prev, key)) {
            retv[key] = value;
        }
    }

    return retv;
}

const newGlobals2015 = getDiff(globals__default["default"].es2015, globals__default["default"].es5); // 19 variables such as Promise, Map, ...
const newGlobals2017 = {
    Atomics: false,
    SharedArrayBuffer: false
};
const newGlobals2020 = {
    BigInt: false,
    BigInt64Array: false,
    BigUint64Array: false,
    globalThis: false
};

const newGlobals2021 = {
    AggregateError: false,
    FinalizationRegistry: false,
    WeakRef: false
};

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/** @type {Map<string, import("../lib/shared/types").Environment>} */
var environments = new Map(Object.entries({

    // Language
    builtin: {
        globals: globals__default["default"].es5
    },
    es6: {
        globals: newGlobals2015,
        parserOptions: {
            ecmaVersion: 6
        }
    },
    es2015: {
        globals: newGlobals2015,
        parserOptions: {
            ecmaVersion: 6
        }
    },
    es2016: {
        globals: newGlobals2015,
        parserOptions: {
            ecmaVersion: 7
        }
    },
    es2017: {
        globals: { ...newGlobals2015, ...newGlobals2017 },
        parserOptions: {
            ecmaVersion: 8
        }
    },
    es2018: {
        globals: { ...newGlobals2015, ...newGlobals2017 },
        parserOptions: {
            ecmaVersion: 9
        }
    },
    es2019: {
        globals: { ...newGlobals2015, ...newGlobals2017 },
        parserOptions: {
            ecmaVersion: 10
        }
    },
    es2020: {
        globals: { ...newGlobals2015, ...newGlobals2017, ...newGlobals2020 },
        parserOptions: {
            ecmaVersion: 11
        }
    },
    es2021: {
        globals: { ...newGlobals2015, ...newGlobals2017, ...newGlobals2020, ...newGlobals2021 },
        parserOptions: {
            ecmaVersion: 12
        }
    },
    es2022: {
        globals: { ...newGlobals2015, ...newGlobals2017, ...newGlobals2020, ...newGlobals2021 },
        parserOptions: {
            ecmaVersion: 13
        }
    },
    es2023: {
        globals: { ...newGlobals2015, ...newGlobals2017, ...newGlobals2020, ...newGlobals2021 },
        parserOptions: {
            ecmaVersion: 14
        }
    },
    es2024: {
        globals: { ...newGlobals2015, ...newGlobals2017, ...newGlobals2020, ...newGlobals2021 },
        parserOptions: {
            ecmaVersion: 15
        }
    },

    // Platforms
    browser: {
        globals: globals__default["default"].browser
    },
    node: {
        globals: globals__default["default"].node,
        parserOptions: {
            ecmaFeatures: {
                globalReturn: true
            }
        }
    },
    "shared-node-browser": {
        globals: globals__default["default"]["shared-node-browser"]
    },
    worker: {
        globals: globals__default["default"].worker
    },
    serviceworker: {
        globals: globals__default["default"].serviceworker
    },

    // Frameworks
    commonjs: {
        globals: globals__default["default"].commonjs,
        parserOptions: {
            ecmaFeatures: {
                globalReturn: true
            }
        }
    },
    amd: {
        globals: globals__default["default"].amd
    },
    mocha: {
        globals: globals__default["default"].mocha
    },
    jasmine: {
        globals: globals__default["default"].jasmine
    },
    jest: {
        globals: globals__default["default"].jest
    },
    phantomjs: {
        globals: globals__default["default"].phantomjs
    },
    jquery: {
        globals: globals__default["default"].jquery
    },
    qunit: {
        globals: globals__default["default"].qunit
    },
    prototypejs: {
        globals: globals__default["default"].prototypejs
    },
    shelljs: {
        globals: globals__default["default"].shelljs
    },
    meteor: {
        globals: globals__default["default"].meteor
    },
    mongo: {
        globals: globals__default["default"].mongo
    },
    protractor: {
        globals: globals__default["default"].protractor
    },
    applescript: {
        globals: globals__default["default"].applescript
    },
    nashorn: {
        globals: globals__default["default"].nashorn
    },
    atomtest: {
        globals: globals__default["default"].atomtest
    },
    embertest: {
        globals: globals__default["default"].embertest
    },
    webextensions: {
        globals: globals__default["default"].webextensions
    },
    greasemonkey: {
        globals: globals__default["default"].greasemonkey
    }
}));

/**
 * @fileoverview Validates configs.
 * @author Brandon Mills
 */

const ajv = ajvOrig();

const ruleValidators = new WeakMap();
const noop = Function.prototype;

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------
let validateSchema;
const severityMap = {
    error: 2,
    warn: 1,
    off: 0
};

const validated = new WeakSet();

// JSON schema that disallows passing any options
const noOptionsSchema = Object.freeze({
    type: "array",
    minItems: 0,
    maxItems: 0
});

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

/**
 * Validator for configuration objects.
 */
class ConfigValidator {
    constructor({ builtInRules = new Map() } = {}) {
        this.builtInRules = builtInRules;
    }

    /**
     * Gets a complete options schema for a rule.
     * @param {Rule} rule A rule object
     * @throws {TypeError} If `meta.schema` is specified but is not an array, object or `false`.
     * @returns {Object|null} JSON Schema for the rule's options.
     *      `null` if rule wasn't passed or its `meta.schema` is `false`.
     */
    getRuleOptionsSchema(rule) {
        if (!rule) {
            return null;
        }

        if (!rule.meta) {
            return { ...noOptionsSchema }; // default if `meta.schema` is not specified
        }

        const schema = rule.meta.schema;

        if (typeof schema === "undefined") {
            return { ...noOptionsSchema }; // default if `meta.schema` is not specified
        }

        // `schema:false` is an allowed explicit opt-out of options validation for the rule
        if (schema === false) {
            return null;
        }

        if (typeof schema !== "object" || schema === null) {
            throw new TypeError("Rule's `meta.schema` must be an array or object");
        }

        // ESLint-specific array form needs to be converted into a valid JSON Schema definition
        if (Array.isArray(schema)) {
            if (schema.length) {
                return {
                    type: "array",
                    items: schema,
                    minItems: 0,
                    maxItems: schema.length
                };
            }

            // `schema:[]` is an explicit way to specify that the rule does not accept any options
            return { ...noOptionsSchema };
        }

        // `schema:<object>` is assumed to be a valid JSON Schema definition
        return schema;
    }

    /**
     * Validates a rule's severity and returns the severity value. Throws an error if the severity is invalid.
     * @param {options} options The given options for the rule.
     * @returns {number|string} The rule's severity value
     * @throws {Error} If the severity is invalid.
     */
    validateRuleSeverity(options) {
        const severity = Array.isArray(options) ? options[0] : options;
        const normSeverity = typeof severity === "string" ? severityMap[severity.toLowerCase()] : severity;

        if (normSeverity === 0 || normSeverity === 1 || normSeverity === 2) {
            return normSeverity;
        }

        throw new Error(`\tSeverity should be one of the following: 0 = off, 1 = warn, 2 = error (you passed '${util__default["default"].inspect(severity).replace(/'/gu, "\"").replace(/\n/gu, "")}').\n`);

    }

    /**
     * Validates the non-severity options passed to a rule, based on its schema.
     * @param {{create: Function}} rule The rule to validate
     * @param {Array} localOptions The options for the rule, excluding severity
     * @returns {void}
     * @throws {Error} If the options are invalid.
     */
    validateRuleSchema(rule, localOptions) {
        if (!ruleValidators.has(rule)) {
            try {
                const schema = this.getRuleOptionsSchema(rule);

                if (schema) {
                    ruleValidators.set(rule, ajv.compile(schema));
                }
            } catch (err) {
                const errorWithCode = new Error(err.message, { cause: err });

                errorWithCode.code = "ESLINT_INVALID_RULE_OPTIONS_SCHEMA";

                throw errorWithCode;
            }
        }

        const validateRule = ruleValidators.get(rule);

        if (validateRule) {
            const mergedOptions = deepMergeArrays(rule.meta?.defaultOptions, localOptions);

            validateRule(mergedOptions);

            if (validateRule.errors) {
                throw new Error(validateRule.errors.map(
                    error => `\tValue ${JSON.stringify(error.data)} ${error.message}.\n`
                ).join(""));
            }
        }
    }

    /**
     * Validates a rule's options against its schema.
     * @param {{create: Function}|null} rule The rule that the config is being validated for
     * @param {string} ruleId The rule's unique name.
     * @param {Array|number} options The given options for the rule.
     * @param {string|null} source The name of the configuration source to report in any errors. If null or undefined,
     * no source is prepended to the message.
     * @returns {void}
     * @throws {Error} If the options are invalid.
     */
    validateRuleOptions(rule, ruleId, options, source = null) {
        try {
            const severity = this.validateRuleSeverity(options);

            if (severity !== 0) {
                this.validateRuleSchema(rule, Array.isArray(options) ? options.slice(1) : []);
            }
        } catch (err) {
            let enhancedMessage = err.code === "ESLINT_INVALID_RULE_OPTIONS_SCHEMA"
                ? `Error while processing options validation schema of rule '${ruleId}': ${err.message}`
                : `Configuration for rule "${ruleId}" is invalid:\n${err.message}`;

            if (typeof source === "string") {
                enhancedMessage = `${source}:\n\t${enhancedMessage}`;
            }

            const enhancedError = new Error(enhancedMessage, { cause: err });

            if (err.code) {
                enhancedError.code = err.code;
            }

            throw enhancedError;
        }
    }

    /**
     * Validates an environment object
     * @param {Object} environment The environment config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {(envId:string) => Object} [getAdditionalEnv] A map from strings to loaded environments.
     * @returns {void}
     * @throws {Error} If the environment is invalid.
     */
    validateEnvironment(
        environment,
        source,
        getAdditionalEnv = noop
    ) {

        // not having an environment is ok
        if (!environment) {
            return;
        }

        Object.keys(environment).forEach(id => {
            const env = getAdditionalEnv(id) || environments.get(id) || null;

            if (!env) {
                const message = `${source}:\n\tEnvironment key "${id}" is unknown\n`;

                throw new Error(message);
            }
        });
    }

    /**
     * Validates a rules config object
     * @param {Object} rulesConfig The rules config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {(ruleId:string) => Object} getAdditionalRule A map from strings to loaded rules
     * @returns {void}
     */
    validateRules(
        rulesConfig,
        source,
        getAdditionalRule = noop
    ) {
        if (!rulesConfig) {
            return;
        }

        Object.keys(rulesConfig).forEach(id => {
            const rule = getAdditionalRule(id) || this.builtInRules.get(id) || null;

            this.validateRuleOptions(rule, id, rulesConfig[id], source);
        });
    }

    /**
     * Validates a `globals` section of a config file
     * @param {Object} globalsConfig The `globals` section
     * @param {string|null} source The name of the configuration source to report in the event of an error.
     * @returns {void}
     */
    validateGlobals(globalsConfig, source = null) {
        if (!globalsConfig) {
            return;
        }

        Object.entries(globalsConfig)
            .forEach(([configuredGlobal, configuredValue]) => {
                try {
                    normalizeConfigGlobal(configuredValue);
                } catch (err) {
                    throw new Error(`ESLint configuration of global '${configuredGlobal}' in ${source} is invalid:\n${err.message}`);
                }
            });
    }

    /**
     * Validate `processor` configuration.
     * @param {string|undefined} processorName The processor name.
     * @param {string} source The name of config file.
     * @param {(id:string) => Processor} getProcessor The getter of defined processors.
     * @returns {void}
     * @throws {Error} If the processor is invalid.
     */
    validateProcessor(processorName, source, getProcessor) {
        if (processorName && !getProcessor(processorName)) {
            throw new Error(`ESLint configuration of processor in '${source}' is invalid: '${processorName}' was not found.`);
        }
    }

    /**
     * Formats an array of schema validation errors.
     * @param {Array} errors An array of error messages to format.
     * @returns {string} Formatted error message
     */
    formatErrors(errors) {
        return errors.map(error => {
            if (error.keyword === "additionalProperties") {
                const formattedPropertyPath = error.dataPath.length ? `${error.dataPath.slice(1)}.${error.params.additionalProperty}` : error.params.additionalProperty;

                return `Unexpected top-level property "${formattedPropertyPath}"`;
            }
            if (error.keyword === "type") {
                const formattedField = error.dataPath.slice(1);
                const formattedExpectedType = Array.isArray(error.schema) ? error.schema.join("/") : error.schema;
                const formattedValue = JSON.stringify(error.data);

                return `Property "${formattedField}" is the wrong type (expected ${formattedExpectedType} but got \`${formattedValue}\`)`;
            }

            const field = error.dataPath[0] === "." ? error.dataPath.slice(1) : error.dataPath;

            return `"${field}" ${error.message}. Value: ${JSON.stringify(error.data)}`;
        }).map(message => `\t- ${message}.\n`).join("");
    }

    /**
     * Validates the top level properties of the config object.
     * @param {Object} config The config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @returns {void}
     * @throws {Error} If the config is invalid.
     */
    validateConfigSchema(config, source = null) {
        validateSchema = validateSchema || ajv.compile(configSchema);

        if (!validateSchema(config)) {
            throw new Error(`ESLint configuration in ${source} is invalid:\n${this.formatErrors(validateSchema.errors)}`);
        }

        if (Object.hasOwn(config, "ecmaFeatures")) {
            emitDeprecationWarning(source, "ESLINT_LEGACY_ECMAFEATURES");
        }
    }

    /**
     * Validates an entire config object.
     * @param {Object} config The config object to validate.
     * @param {string} source The name of the configuration source to report in any errors.
     * @param {(ruleId:string) => Object} [getAdditionalRule] A map from strings to loaded rules.
     * @param {(envId:string) => Object} [getAdditionalEnv] A map from strings to loaded envs.
     * @returns {void}
     */
    validate(config, source, getAdditionalRule, getAdditionalEnv) {
        this.validateConfigSchema(config, source);
        this.validateRules(config.rules, source, getAdditionalRule);
        this.validateEnvironment(config.env, source, getAdditionalEnv);
        this.validateGlobals(config.globals, source);

        for (const override of config.overrides || []) {
            this.validateRules(override.rules, source, getAdditionalRule);
            this.validateEnvironment(override.env, source, getAdditionalEnv);
            this.validateGlobals(config.globals, source);
        }
    }

    /**
     * Validate config array object.
     * @param {ConfigArray} configArray The config array to validate.
     * @returns {void}
     */
    validateConfigArray(configArray) {
        const getPluginEnv = Map.prototype.get.bind(configArray.pluginEnvironments);
        const getPluginProcessor = Map.prototype.get.bind(configArray.pluginProcessors);
        const getPluginRule = Map.prototype.get.bind(configArray.pluginRules);

        // Validate.
        for (const element of configArray) {
            if (validated.has(element)) {
                continue;
            }
            validated.add(element);

            this.validateEnvironment(element.env, element.name, getPluginEnv);
            this.validateGlobals(element.globals, element.name);
            this.validateProcessor(element.processor, element.name, getPluginProcessor);
            this.validateRules(element.rules, element.name, getPluginRule);
        }
    }

}

/**
 * @fileoverview Common helpers for naming of plugins, formatters and configs
 */

const NAMESPACE_REGEX = /^@.*\//iu;

/**
 * Brings package name to correct format based on prefix
 * @param {string} name The name of the package.
 * @param {string} prefix Can be either "eslint-plugin", "eslint-config" or "eslint-formatter"
 * @returns {string} Normalized name of the package
 * @private
 */
function normalizePackageName(name, prefix) {
    let normalizedName = name;

    /**
     * On Windows, name can come in with Windows slashes instead of Unix slashes.
     * Normalize to Unix first to avoid errors later on.
     * https://github.com/eslint/eslint/issues/5644
     */
    if (normalizedName.includes("\\")) {
        normalizedName = normalizedName.replace(/\\/gu, "/");
    }

    if (normalizedName.charAt(0) === "@") {

        /**
         * it's a scoped package
         * package name is the prefix, or just a username
         */
        const scopedPackageShortcutRegex = new RegExp(`^(@[^/]+)(?:/(?:${prefix})?)?$`, "u"),
            scopedPackageNameRegex = new RegExp(`^${prefix}(-|$)`, "u");

        if (scopedPackageShortcutRegex.test(normalizedName)) {
            normalizedName = normalizedName.replace(scopedPackageShortcutRegex, `$1/${prefix}`);
        } else if (!scopedPackageNameRegex.test(normalizedName.split("/")[1])) {

            /**
             * for scoped packages, insert the prefix after the first / unless
             * the path is already @scope/eslint or @scope/eslint-xxx-yyy
             */
            normalizedName = normalizedName.replace(/^@([^/]+)\/(.*)$/u, `@$1/${prefix}-$2`);
        }
    } else if (!normalizedName.startsWith(`${prefix}-`)) {
        normalizedName = `${prefix}-${normalizedName}`;
    }

    return normalizedName;
}

/**
 * Removes the prefix from a fullname.
 * @param {string} fullname The term which may have the prefix.
 * @param {string} prefix The prefix to remove.
 * @returns {string} The term without prefix.
 */
function getShorthandName(fullname, prefix) {
    if (fullname[0] === "@") {
        let matchResult = new RegExp(`^(@[^/]+)/${prefix}$`, "u").exec(fullname);

        if (matchResult) {
            return matchResult[1];
        }

        matchResult = new RegExp(`^(@[^/]+)/${prefix}-(.+)$`, "u").exec(fullname);
        if (matchResult) {
            return `${matchResult[1]}/${matchResult[2]}`;
        }
    } else if (fullname.startsWith(`${prefix}-`)) {
        return fullname.slice(prefix.length + 1);
    }

    return fullname;
}

/**
 * Gets the scope (namespace) of a term.
 * @param {string} term The term which may have the namespace.
 * @returns {string} The namespace of the term if it has one.
 */
function getNamespaceFromTerm(term) {
    const match = term.match(NAMESPACE_REGEX);

    return match ? match[0] : "";
}

var naming = {
    __proto__: null,
    normalizePackageName: normalizePackageName,
    getShorthandName: getShorthandName,
    getNamespaceFromTerm: getNamespaceFromTerm
};

/**
 * @fileoverview Package exports for @eslint/eslintrc
 * @author Nicholas C. Zakas
 */

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

const Legacy = {
    environments,

    // shared
    ConfigOps,
    ConfigValidator,
    naming
};

exports.Legacy = Legacy;
//# sourceMappingURL=eslintrc-universal.cjs.map
