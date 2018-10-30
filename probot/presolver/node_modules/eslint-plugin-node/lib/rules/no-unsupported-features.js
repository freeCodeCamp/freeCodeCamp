/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const semver = require("semver")
const features = require("../util/features")
const getPackageJson = require("../util/get-package-json")
const getValueIfString = require("../util/get-value-if-string")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const VERSIONS = [0.10, 0.12, 4, 5, 6, 7, 7.6]
const OPTIONS = Object.keys(features)
const FUNC_TYPE = /^(?:Arrow)?Function(?:Declaration|Expression)$/
const CLASS_TYPE = /^Class(?:Declaration|Expression)$/
const DESTRUCTURING_PARENT_TYPE = /^(?:Function(?:Declaration|Expression)|ArrowFunctionExpression|AssignmentExpression|VariableDeclarator)$/
const TOPLEVEL_SCOPE_TYPE = /^(?:global|function|module)$/
const BINARY_NUMBER = /^0[bB]/
const OCTAL_NUMBER = /^0[oO]/
const UNICODE_ESC = /(\\+)u\{[0-9a-fA-F]+?\}/g
const GET_OR_SET = /^(?:g|s)et$/
const NEW_BUILTIN_TYPES = [
    "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array",
    "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "DataView",
    "Map", "Set", "WeakMap", "WeakSet", "Proxy", "Reflect", "Promise", "Symbol",
]
const SUBCLASSING_TEST_TARGETS = [
    "Array", "RegExp", "Function", "Promise", "Boolean", "Number", "String",
    "Map", "Set",
]
const PROPERTY_TEST_TARGETS = {
    Object: [
        "assign", "is", "getOwnPropertySymbols", "setPrototypeOf", "values",
        "entries", "getOwnPropertyDescriptors",
    ],
    String: ["raw", "fromCodePoint"],
    Array: ["from", "of"],
    Number: [
        "isFinite", "isInteger", "isSafeInteger", "isNaN", "EPSILON",
        "MIN_SAFE_INTEGER", "MAX_SAFE_INTEGER",
    ],
    Math: [
        "clz32", "imul", "sign", "log10", "log2", "log1p", "expm1", "cosh",
        "sinh", "tanh", "acosh", "asinh", "atanh", "trunc", "fround", "cbrt",
        "hypot",
    ],
    Symbol: [
        "hasInstance", "isConcatSpreadablec", "iterator", "species", "replace",
        "search", "split", "match", "toPrimitive", "toStringTag", "unscopables",
    ],
}

/**
 * Gets major version of 'semver.Comparator'.
 *
 * @param {semver.Comparator} comparator - A comparator to get.
 * @returns {number} The major version of the comparator.
 */
function parseVersion(comparator) {
    const major = comparator.semver.major
    const minor = comparator.semver.minor

    if (major >= 1 || minor >= 10) {
        return parseFloat(`${major}.${minor}`)
    }
    return 0.10
}

/**
 * Gets default version configuration of this rule.
 *
 * This finds and reads 'package.json' file, then parses 'engines.node' field.
 * If it's nothing, this returns '0.10'.
 *
 * @param {string} filename - The file name of the current linting file.
 * @returns {number} The default version configuration.
 */
function getDefaultVersion(filename) {
    const info = getPackageJson(filename)
    const nodeVersion = info && info.engines && info.engines.node

    try {
        const range = new semver.Range(nodeVersion)
        const comparators = Array.prototype.concat.apply([], range.set)
        const version = comparators.reduce(
            (minVersion, comparator) => {
                const op = comparator.operator

                if (op === "" || op === ">" || op === ">=") {
                    return Math.min(minVersion, parseVersion(comparator))
                }
                return minVersion
            },
            Number.POSITIVE_INFINITY
        )

        if (Number.isFinite(version)) {
            return version
        }
    }
    catch (_err) {
        // ignore
    }

    return 0.10
}

/**
 * Gets values of the `ignores` option.
 *
 * @returns {string[]} Values of the `ignores` option.
 */
function getIgnoresEnum() {
    return Object.keys(OPTIONS.reduce(
        (retv, key) => {
            for (const alias of features[key].alias) {
                retv[alias] = true
            }
            retv[key] = true
            return retv
        },
        Object.create(null)
    ))
}

/**
 * Checks whether a given key should be ignored or not.
 *
 * @param {string} key - A key to check.
 * @param {string[]} ignores - An array of keys and aliases to be ignored.
 * @returns {boolean} `true` if the key should be ignored.
 */
function isIgnored(key, ignores) {
    return (
        ignores.indexOf(key) !== -1 ||
        features[key].alias.some(alias => ignores.indexOf(alias) !== -1)
    )
}

/**
 * Parses the options.
 *
 * @param {object} options - An option object to parse.
 * @param {number} defaultVersion - The default version to use if the version option was omitted.
 * @returns {object} Parsed value.
 */
function parseOptions(options, defaultVersion) {
    let version = 0
    let ignores = null

    if (typeof options === "number") {
        version = options || defaultVersion
        ignores = []
    }
    else if (typeof options === "object") {
        version = options.version || defaultVersion
        ignores = options.ignores || []
    }
    else {
        version = defaultVersion
        ignores = []
    }

    return Object.freeze({
        version: version < 1 ? version.toFixed(2) : String(version),
        features: Object.freeze(OPTIONS.reduce(
            (retv, key) => {
                const feature = features[key]

                if (isIgnored(key, ignores)) {
                    retv[key] = Object.freeze({
                        name: feature.name,
                        singular: Boolean(feature.singular),
                        supported: true,
                        supportedInStrict: true,
                    })
                }
                else if (typeof feature.node === "number") {
                    retv[key] = Object.freeze({
                        name: feature.name,
                        singular: Boolean(feature.singular),
                        supported: version >= feature.node,
                        supportedInStrict: version >= feature.node,
                    })
                }
                else {
                    retv[key] = Object.freeze({
                        name: feature.name,
                        singular: Boolean(feature.singular),
                        supported: version >= feature.node.sloppy,
                        supportedInStrict: version >= feature.node.strict,
                    })
                }

                return retv
            },
            Object.create(null)
        )),
    })
}

/**
 * Checks whether or not the current configure has a special lexical environment.
 * If it's modules or globalReturn then it has a special lexical environment.
 *
 * @param {RuleContext} context - A context to check.
 * @returns {boolean} `true` if the current configure is modules or globalReturn.
 */
function checkSpecialLexicalEnvironment(context) {
    const parserOptions = context.parserOptions
    const ecmaFeatures = parserOptions.ecmaFeatures
    return Boolean(
        parserOptions.sourceType === "module" ||
        (ecmaFeatures && ecmaFeatures.globalReturn)
    )
}

/**
 * Gets the name of a given node.
 *
 * @param {ASTNode} node - An Identifier node to get.
 * @returns {string} The name of the node.
 */
function getIdentifierName(node) {
    return node.name
}

/**
 * Checks whether the given string has `\u{90ABCDEF}`-like escapes.
 *
 * @param {string} raw - The string to check.
 * @returns {boolean} `true` if the string has Unicode code point escapes.
 */
function hasUnicodeCodePointEscape(raw) {
    let match = null

    UNICODE_ESC.lastIndex = 0
    while ((match = UNICODE_ESC.exec(raw)) != null) {
        if (match[1].length % 2 === 1) {
            return true
        }
    }

    return false
}

/**
 * The definition of this rule.
 *
 * @param {RuleContext} context - The rule context to check.
 * @returns {object} The definition of this rule.
 */
function create(context) {
    const sourceCode = context.getSourceCode()
    const supportInfo = parseOptions(
        context.options[0],
        getDefaultVersion(context.getFilename())
    )
    const hasSpecialLexicalEnvironment = checkSpecialLexicalEnvironment(context)

    /**
     * Gets the references of the specified global variables.
     *
     * @param {string[]} names - Variable names to get.
     * @returns {void}
     */
    function* getReferences(names) {
        const globalScope = context.getScope()

        for (const name of names) {
            const variable = globalScope.set.get(name)

            if (variable && variable.defs.length === 0) {
                yield* variable.references
            }
        }
    }

    /**
     * Checks whether or not the current scope is strict mode.
     *
     * @returns {boolean}
     *      `true` if the current scope is strict mode. Otherwise `false`.
     */
    function isStrict() {
        let scope = context.getScope()
        if (scope.type === "global" && hasSpecialLexicalEnvironment) {
            scope = scope.childScopes[0]
        }
        return scope.isStrict
    }

    /**
     * Checks whether the given function has trailing commas or not.
     *
     * @param {ASTNode} node - The function node to check.
     * @returns {boolean} `true` if the function has trailing commas.
     */
    function hasTrailingCommaForFunction(node) {
        const length = node.params.length

        return (
            length >= 1 &&
            sourceCode.getTokenAfter(node.params[length - 1]).value === ","
        )
    }

    /**
     * Checks whether the given call expression has trailing commas or not.
     *
     * @param {ASTNode} node - The call expression node to check.
     * @returns {boolean} `true` if the call expression has trailing commas.
     */
    function hasTrailingCommaForCall(node) {
        return (
            node.arguments.length >= 1 &&
            sourceCode.getLastToken(node, 1).value === ","
        )
    }

    /**
     * Checks whether the given class extends from null or not.
     *
     * @param {ASTNode} node - The class node to check.
     * @returns {boolean} `true` if the class extends from null.
     */
    function extendsNull(node) {
        return (
            node.superClass != null &&
            node.superClass.type === "Literal" &&
            node.superClass.value === null
        )
    }

    /**
     * Reports a given node if the specified feature is not supported.
     *
     * @param {ASTNode} node - A node to be reported.
     * @param {string} key - A feature name to report.
     * @returns {void}
     */
    function report(node, key) {
        const version = supportInfo.version
        const feature = supportInfo.features[key]
        if (feature.supported) {
            return
        }

        if (!feature.supportedInStrict) {
            context.report({
                node,
                message: "{{feature}} {{be}} not supported yet on Node v{{version}}.",
                data: {
                    feature: feature.name,
                    be: feature.singular ? "is" : "are",
                    version,
                },
            })
        }
        else if (!isStrict()) {
            context.report({
                node,
                message: "{{feature}} {{be}} not supported yet on Node v{{version}}.",
                data: {
                    feature: `${feature.name} in non-strict mode`,
                    be: feature.singular ? "is" : "are",
                    version,
                },
            })
        }
    }

    return {
        //----------------------------------------------------------------------
        // Program
        //----------------------------------------------------------------------

        "Program:exit"() {
            // Check new global variables.
            for (const name of NEW_BUILTIN_TYPES) {
                for (const reference of getReferences([name])) {
                    report(reference.identifier, name)
                }
            }

            // Check static methods.
            for (const reference of getReferences(Object.keys(PROPERTY_TEST_TARGETS))) {
                const node = reference.identifier
                const parentNode = node.parent
                if (parentNode.type !== "MemberExpression" ||
                    parentNode.object !== node
                ) {
                    continue
                }

                const objectName = node.name
                const properties = PROPERTY_TEST_TARGETS[objectName]
                const propertyName = (parentNode.computed ? getValueIfString : getIdentifierName)(parentNode.property)
                if (propertyName && properties.indexOf(propertyName) !== -1) {
                    report(parentNode, `${objectName}.${propertyName}`)
                }
            }

            // Check subclassing
            for (const reference of getReferences(SUBCLASSING_TEST_TARGETS)) {
                const node = reference.identifier
                const parentNode = node.parent
                if (CLASS_TYPE.test(parentNode.type) &&
                    parentNode.superClass === node
                ) {
                    report(node, `extends${node.name}`)
                }
            }
        },

        //----------------------------------------------------------------------
        // Functions
        //----------------------------------------------------------------------

        "ArrowFunctionExpression"(node) {
            report(node, "arrowFunctions")
            if (node.async) {
                report(node, "asyncAwait")
            }
            if (hasTrailingCommaForFunction(node)) {
                report(node, "trailingCommasInFunctionSyntax")
            }
        },

        "AssignmentPattern"(node) {
            if (FUNC_TYPE.test(node.parent.type)) {
                report(node, "defaultParameters")
            }
        },

        "FunctionDeclaration"(node) {
            const scope = context.getScope().upper
            if (!TOPLEVEL_SCOPE_TYPE.test(scope.type)) {
                report(node, "blockScopedFunctions")
            }
            if (node.generator) {
                report(node, "generatorFunctions")
            }
            if (node.async) {
                report(node, "asyncAwait")
            }
            if (hasTrailingCommaForFunction(node)) {
                report(node, "trailingCommasInFunctionSyntax")
            }
        },

        "FunctionExpression"(node) {
            if (node.generator) {
                report(node, "generatorFunctions")
            }
            if (node.async) {
                report(node, "asyncAwait")
            }
            if (hasTrailingCommaForFunction(node)) {
                report(node, "trailingCommasInFunctionSyntax")
            }
        },

        "MetaProperty"(node) {
            const meta = node.meta.name || node.meta
            const property = node.property.name || node.property
            if (meta === "new" && property === "target") {
                report(node, "new.target")
            }
        },

        "RestElement"(node) {
            if (FUNC_TYPE.test(node.parent.type)) {
                report(node, "restParameters")
            }
        },

        //----------------------------------------------------------------------
        // Classes
        //----------------------------------------------------------------------

        "ClassDeclaration"(node) {
            report(node, "classes")

            if (extendsNull(node)) {
                report(node, "extendsNull")
            }
        },

        "ClassExpression"(node) {
            report(node, "classes")

            if (extendsNull(node)) {
                report(node, "extendsNull")
            }
        },

        //----------------------------------------------------------------------
        // Statements
        //----------------------------------------------------------------------

        "ForOfStatement"(node) {
            report(node, "forOf")
        },

        "VariableDeclaration"(node) {
            if (node.kind === "const") {
                report(node, "const")
            }
            else if (node.kind === "let") {
                report(node, "let")
            }
        },

        //----------------------------------------------------------------------
        // Expressions
        //----------------------------------------------------------------------

        "ArrayPattern"(node) {
            if (DESTRUCTURING_PARENT_TYPE.test(node.parent.type)) {
                report(node, "destructuring")
            }
        },

        "AssignmentExpression"(node) {
            if (node.operator === "**=") {
                report(node, "exponentialOperators")
            }
        },

        "AwaitExpression"(node) {
            report(node, "asyncAwait")
        },

        "BinaryExpression"(node) {
            if (node.operator === "**") {
                report(node, "exponentialOperators")
            }
        },

        "CallExpression"(node) {
            if (hasTrailingCommaForCall(node)) {
                report(node, "trailingCommasInFunctionSyntax")
            }
        },

        "Identifier"(node) {
            const raw = sourceCode.getText(node)
            if (hasUnicodeCodePointEscape(raw)) {
                report(node, "unicodeCodePointEscapes")
            }
        },

        "Literal"(node) {
            if (typeof node.value === "number") {
                if (BINARY_NUMBER.test(node.raw)) {
                    report(node, "binaryNumberLiterals")
                }
                else if (OCTAL_NUMBER.test(node.raw)) {
                    report(node, "octalNumberLiterals")
                }
            }
            else if (typeof node.value === "string") {
                if (hasUnicodeCodePointEscape(node.raw)) {
                    report(node, "unicodeCodePointEscapes")
                }
            }
            else if (node.regex) {
                if (node.regex.flags.indexOf("y") !== -1) {
                    report(node, "regexpY")
                }
                if (node.regex.flags.indexOf("u") !== -1) {
                    report(node, "regexpU")
                }
            }
        },

        "NewExpression"(node) {
            if (node.callee.type === "Identifier" &&
                node.callee.name === "RegExp" &&
                node.arguments.length === 2 &&
                node.arguments[1].type === "Literal" &&
                typeof node.arguments[1].value === "string"
            ) {
                if (node.arguments[1].value.indexOf("y") !== -1) {
                    report(node, "regexpY")
                }
                if (node.arguments[1].value.indexOf("u") !== -1) {
                    report(node, "regexpU")
                }
            }
            if (hasTrailingCommaForCall(node)) {
                report(node, "trailingCommasInFunctionSyntax")
            }
        },

        "ObjectPattern"(node) {
            if (DESTRUCTURING_PARENT_TYPE.test(node.parent.type)) {
                report(node, "destructuring")
            }
        },

        "Property"(node) {
            if (node.parent.type === "ObjectExpression" &&
                (node.computed || node.shorthand || node.method)
            ) {
                if (node.shorthand && GET_OR_SET.test(node.key.name)) {
                    report(node, "objectPropertyShorthandOfGetSet")
                }
                else {
                    report(node, "objectLiteralExtensions")
                }
            }
        },

        "SpreadElement"(node) {
            report(node, "spreadOperators", 5)
        },

        "TemplateLiteral"(node) {
            report(node, "templateStrings")
        },

        //----------------------------------------------------------------------
        // Modules
        //----------------------------------------------------------------------

        "ExportAllDeclaration"(node) {
            report(node, "modules")
        },

        "ExportDefaultDeclaration"(node) {
            report(node, "modules")
        },

        "ExportNamedDeclaration"(node) {
            report(node, "modules")
        },

        "ImportDeclaration"(node) {
            report(node, "modules")
        },
    }
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    create,
    meta: {
        docs: {
            description: "disallow unsupported ECMAScript features on the specified version",
            category: "Possible Errors",
            recommended: false,
        },
        fixable: false,
        schema: [
            {
                oneOf: [
                    {enum: VERSIONS},
                    {
                        type: "object",
                        properties: {
                            version: {enum: VERSIONS},
                            ignores: {
                                type: "array",
                                items: {enum: getIgnoresEnum()},
                                uniqueItems: true,
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
    },
}
