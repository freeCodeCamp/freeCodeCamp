/**
 * @fileoverview Mocha test wrapper
 * @author Ilya Volodin
 */
"use strict";

/* global describe, it */

/*
 * This is a wrapper around mocha to allow for DRY unittests for eslint
 * Format:
 * RuleTester.run("{ruleName}", {
 *      valid: [
 *          "{code}",
 *          { code: "{code}", options: {options}, globals: {globals}, parser: "{parser}", settings: {settings} }
 *      ],
 *      invalid: [
 *          { code: "{code}", errors: {numErrors} },
 *          { code: "{code}", errors: ["{errorMessage}"] },
 *          { code: "{code}", options: {options}, globals: {globals}, parser: "{parser}", settings: {settings}, errors: [{ message: "{errorMessage}", type: "{errorNodeType}"}] }
 *      ]
 *  });
 *
 * Variables:
 * {code} - String that represents the code to be tested
 * {options} - Arguments that are passed to the configurable rules.
 * {globals} - An object representing a list of variables that are
 *             registered as globals
 * {parser} - String representing the parser to use
 * {settings} - An object representing global settings for all rules
 * {numErrors} - If failing case doesn't need to check error message,
 *               this integer will specify how many errors should be
 *               received
 * {errorMessage} - Message that is returned by the rule on failure
 * {errorNodeType} - AST node type that is returned by they rule as
 *                   a cause of the failure.
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const
    assert = require("assert"),
    path = require("path"),
    util = require("util"),
    merge = require("lodash.merge"),
    equal = require("fast-deep-equal"),
    Traverser = require("../../lib/shared/traverser"),
    { getRuleOptionsSchema, validate } = require("../shared/config-validator"),
    { Linter, SourceCodeFixer, interpolate } = require("../linter");

const ajv = require("../shared/ajv")({ strictDefaults: true });

const espreePath = require.resolve("espree");
const parserSymbol = Symbol.for("eslint.RuleTester.parser");

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/** @typedef {import("../shared/types").Parser} Parser */

/**
 * A test case that is expected to pass lint.
 * @typedef {Object} ValidTestCase
 * @property {string} code Code for the test case.
 * @property {any[]} [options] Options for the test case.
 * @property {{ [name: string]: any }} [settings] Settings for the test case.
 * @property {string} [filename] The fake filename for the test case. Useful for rules that make assertion about filenames.
 * @property {string} [parser] The absolute path for the parser.
 * @property {{ [name: string]: any }} [parserOptions] Options for the parser.
 * @property {{ [name: string]: "readonly" | "writable" | "off" }} [globals] The additional global variables.
 * @property {{ [name: string]: boolean }} [env] Environments for the test case.
 * @property {boolean} [only] Run only this test case or the subset of test cases with this property.
 */

/**
 * A test case that is expected to fail lint.
 * @typedef {Object} InvalidTestCase
 * @property {string} code Code for the test case.
 * @property {number | Array<TestCaseError | string | RegExp>} errors Expected errors.
 * @property {string | null} [output] The expected code after autofixes are applied. If set to `null`, the test runner will assert that no autofix is suggested.
 * @property {any[]} [options] Options for the test case.
 * @property {{ [name: string]: any }} [settings] Settings for the test case.
 * @property {string} [filename] The fake filename for the test case. Useful for rules that make assertion about filenames.
 * @property {string} [parser] The absolute path for the parser.
 * @property {{ [name: string]: any }} [parserOptions] Options for the parser.
 * @property {{ [name: string]: "readonly" | "writable" | "off" }} [globals] The additional global variables.
 * @property {{ [name: string]: boolean }} [env] Environments for the test case.
 * @property {boolean} [only] Run only this test case or the subset of test cases with this property.
 */

/**
 * A description of a reported error used in a rule tester test.
 * @typedef {Object} TestCaseError
 * @property {string | RegExp} [message] Message.
 * @property {string} [messageId] Message ID.
 * @property {string} [type] The type of the reported AST node.
 * @property {{ [name: string]: string }} [data] The data used to fill the message template.
 * @property {number} [line] The 1-based line number of the reported start location.
 * @property {number} [column] The 1-based column number of the reported start location.
 * @property {number} [endLine] The 1-based line number of the reported end location.
 * @property {number} [endColumn] The 1-based column number of the reported end location.
 */

//------------------------------------------------------------------------------
// Private Members
//------------------------------------------------------------------------------

/*
 * testerDefaultConfig must not be modified as it allows to reset the tester to
 * the initial default configuration
 */
const testerDefaultConfig = { rules: {} };
let defaultConfig = { rules: {} };

/*
 * List every parameters possible on a test case that are not related to eslint
 * configuration
 */
const RuleTesterParameters = [
    "code",
    "filename",
    "options",
    "errors",
    "output",
    "only"
];

/*
 * All allowed property names in error objects.
 */
const errorObjectParameters = new Set([
    "message",
    "messageId",
    "data",
    "type",
    "line",
    "column",
    "endLine",
    "endColumn",
    "suggestions"
]);
const friendlyErrorObjectParameterList = `[${[...errorObjectParameters].map(key => `'${key}'`).join(", ")}]`;

/*
 * All allowed property names in suggestion objects.
 */
const suggestionObjectParameters = new Set([
    "desc",
    "messageId",
    "data",
    "output"
]);
const friendlySuggestionObjectParameterList = `[${[...suggestionObjectParameters].map(key => `'${key}'`).join(", ")}]`;

const hasOwnProperty = Function.call.bind(Object.hasOwnProperty);

/**
 * Clones a given value deeply.
 * Note: This ignores `parent` property.
 * @param {any} x A value to clone.
 * @returns {any} A cloned value.
 */
function cloneDeeplyExcludesParent(x) {
    if (typeof x === "object" && x !== null) {
        if (Array.isArray(x)) {
            return x.map(cloneDeeplyExcludesParent);
        }

        const retv = {};

        for (const key in x) {
            if (key !== "parent" && hasOwnProperty(x, key)) {
                retv[key] = cloneDeeplyExcludesParent(x[key]);
            }
        }

        return retv;
    }

    return x;
}

/**
 * Freezes a given value deeply.
 * @param {any} x A value to freeze.
 * @returns {void}
 */
function freezeDeeply(x) {
    if (typeof x === "object" && x !== null) {
        if (Array.isArray(x)) {
            x.forEach(freezeDeeply);
        } else {
            for (const key in x) {
                if (key !== "parent" && hasOwnProperty(x, key)) {
                    freezeDeeply(x[key]);
                }
            }
        }
        Object.freeze(x);
    }
}

/**
 * Replace control characters by `\u00xx` form.
 * @param {string} text The text to sanitize.
 * @returns {string} The sanitized text.
 */
function sanitize(text) {
    return text.replace(
        /[\u0000-\u0009\u000b-\u001a]/gu, // eslint-disable-line no-control-regex
        c => `\\u${c.codePointAt(0).toString(16).padStart(4, "0")}`
    );
}

/**
 * Define `start`/`end` properties as throwing error.
 * @param {string} objName Object name used for error messages.
 * @param {ASTNode} node The node to define.
 * @returns {void}
 */
function defineStartEndAsError(objName, node) {
    Object.defineProperties(node, {
        start: {
            get() {
                throw new Error(`Use ${objName}.range[0] instead of ${objName}.start`);
            },
            configurable: true,
            enumerable: false
        },
        end: {
            get() {
                throw new Error(`Use ${objName}.range[1] instead of ${objName}.end`);
            },
            configurable: true,
            enumerable: false
        }
    });
}


/**
 * Define `start`/`end` properties of all nodes of the given AST as throwing error.
 * @param {ASTNode} ast The root node to errorize `start`/`end` properties.
 * @param {Object} [visitorKeys] Visitor keys to be used for traversing the given ast.
 * @returns {void}
 */
function defineStartEndAsErrorInTree(ast, visitorKeys) {
    Traverser.traverse(ast, { visitorKeys, enter: defineStartEndAsError.bind(null, "node") });
    ast.tokens.forEach(defineStartEndAsError.bind(null, "token"));
    ast.comments.forEach(defineStartEndAsError.bind(null, "token"));
}

/**
 * Wraps the given parser in order to intercept and modify return values from the `parse` and `parseForESLint` methods, for test purposes.
 * In particular, to modify ast nodes, tokens and comments to throw on access to their `start` and `end` properties.
 * @param {Parser} parser Parser object.
 * @returns {Parser} Wrapped parser object.
 */
function wrapParser(parser) {

    if (typeof parser.parseForESLint === "function") {
        return {
            [parserSymbol]: parser,
            parseForESLint(...args) {
                const ret = parser.parseForESLint(...args);

                defineStartEndAsErrorInTree(ret.ast, ret.visitorKeys);
                return ret;
            }
        };
    }

    return {
        [parserSymbol]: parser,
        parse(...args) {
            const ast = parser.parse(...args);

            defineStartEndAsErrorInTree(ast);
            return ast;
        }
    };
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

// default separators for testing
const DESCRIBE = Symbol("describe");
const IT = Symbol("it");
const IT_ONLY = Symbol("itOnly");

/**
 * This is `it` default handler if `it` don't exist.
 * @this {Mocha}
 * @param {string} text The description of the test case.
 * @param {Function} method The logic of the test case.
 * @returns {any} Returned value of `method`.
 */
function itDefaultHandler(text, method) {
    try {
        return method.call(this);
    } catch (err) {
        if (err instanceof assert.AssertionError) {
            err.message += ` (${util.inspect(err.actual)} ${err.operator} ${util.inspect(err.expected)})`;
        }
        throw err;
    }
}

/**
 * This is `describe` default handler if `describe` don't exist.
 * @this {Mocha}
 * @param {string} text The description of the test case.
 * @param {Function} method The logic of the test case.
 * @returns {any} Returned value of `method`.
 */
function describeDefaultHandler(text, method) {
    return method.call(this);
}

class RuleTester {

    /**
     * Creates a new instance of RuleTester.
     * @param {Object} [testerConfig] Optional, extra configuration for the tester
     */
    constructor(testerConfig) {

        /**
         * The configuration to use for this tester. Combination of the tester
         * configuration and the default configuration.
         * @type {Object}
         */
        this.testerConfig = merge(
            {},
            defaultConfig,
            testerConfig,
            { rules: { "rule-tester/validate-ast": "error" } }
        );

        /**
         * Rule definitions to define before tests.
         * @type {Object}
         */
        this.rules = {};
        this.linter = new Linter();
    }

    /**
     * Set the configuration to use for all future tests
     * @param {Object} config the configuration to use.
     * @returns {void}
     */
    static setDefaultConfig(config) {
        if (typeof config !== "object") {
            throw new TypeError("RuleTester.setDefaultConfig: config must be an object");
        }
        defaultConfig = config;

        // Make sure the rules object exists since it is assumed to exist later
        defaultConfig.rules = defaultConfig.rules || {};
    }

    /**
     * Get the current configuration used for all tests
     * @returns {Object} the current configuration
     */
    static getDefaultConfig() {
        return defaultConfig;
    }

    /**
     * Reset the configuration to the initial configuration of the tester removing
     * any changes made until now.
     * @returns {void}
     */
    static resetDefaultConfig() {
        defaultConfig = merge({}, testerDefaultConfig);
    }


    /*
     * If people use `mocha test.js --watch` command, `describe` and `it` function
     * instances are different for each execution. So `describe` and `it` should get fresh instance
     * always.
     */
    static get describe() {
        return (
            this[DESCRIBE] ||
            (typeof describe === "function" ? describe : describeDefaultHandler)
        );
    }

    static set describe(value) {
        this[DESCRIBE] = value;
    }

    static get it() {
        return (
            this[IT] ||
            (typeof it === "function" ? it : itDefaultHandler)
        );
    }

    static set it(value) {
        this[IT] = value;
    }

    /**
     * Adds the `only` property to a test to run it in isolation.
     * @param {string | ValidTestCase | InvalidTestCase} item A single test to run by itself.
     * @returns {ValidTestCase | InvalidTestCase} The test with `only` set.
     */
    static only(item) {
        if (typeof item === "string") {
            return { code: item, only: true };
        }

        return { ...item, only: true };
    }

    static get itOnly() {
        if (typeof this[IT_ONLY] === "function") {
            return this[IT_ONLY];
        }
        if (typeof this[IT] === "function" && typeof this[IT].only === "function") {
            return Function.bind.call(this[IT].only, this[IT]);
        }
        if (typeof it === "function" && typeof it.only === "function") {
            return Function.bind.call(it.only, it);
        }

        if (typeof this[DESCRIBE] === "function" || typeof this[IT] === "function") {
            throw new Error(
                "Set `RuleTester.itOnly` to use `only` with a custom test framework.\n" +
                "See https://eslint.org/docs/developer-guide/nodejs-api#customizing-ruletester for more."
            );
        }
        if (typeof it === "function") {
            throw new Error("The current test framework does not support exclusive tests with `only`.");
        }
        throw new Error("To use `only`, use RuleTester with a test framework that provides `it.only()` like Mocha.");
    }

    static set itOnly(value) {
        this[IT_ONLY] = value;
    }

    /**
     * Define a rule for one particular run of tests.
     * @param {string} name The name of the rule to define.
     * @param {Function} rule The rule definition.
     * @returns {void}
     */
    defineRule(name, rule) {
        this.rules[name] = rule;
    }

    /**
     * Adds a new rule test to execute.
     * @param {string} ruleName The name of the rule to run.
     * @param {Function} rule The rule to test.
     * @param {{
     *   valid: (ValidTestCase | string)[],
     *   invalid: InvalidTestCase[]
     * }} test The collection of tests to run.
     * @returns {void}
     */
    run(ruleName, rule, test) {

        const testerConfig = this.testerConfig,
            requiredScenarios = ["valid", "invalid"],
            scenarioErrors = [],
            linter = this.linter;

        if (!test || typeof test !== "object") {
            throw new TypeError(`Test Scenarios for rule ${ruleName} : Could not find test scenario object`);
        }

        requiredScenarios.forEach(scenarioType => {
            if (!test[scenarioType]) {
                scenarioErrors.push(`Could not find any ${scenarioType} test scenarios`);
            }
        });

        if (scenarioErrors.length > 0) {
            throw new Error([
                `Test Scenarios for rule ${ruleName} is invalid:`
            ].concat(scenarioErrors).join("\n"));
        }


        linter.defineRule(ruleName, Object.assign({}, rule, {

            // Create a wrapper rule that freezes the `context` properties.
            create(context) {
                freezeDeeply(context.options);
                freezeDeeply(context.settings);
                freezeDeeply(context.parserOptions);

                return (typeof rule === "function" ? rule : rule.create)(context);
            }
        }));

        linter.defineRules(this.rules);

        /**
         * Run the rule for the given item
         * @param {string|Object} item Item to run the rule against
         * @returns {Object} Eslint run result
         * @private
         */
        function runRuleForItem(item) {
            let config = merge({}, testerConfig),
                code, filename, output, beforeAST, afterAST;

            if (typeof item === "string") {
                code = item;
            } else {
                code = item.code;

                /*
                 * Assumes everything on the item is a config except for the
                 * parameters used by this tester
                 */
                const itemConfig = { ...item };

                for (const parameter of RuleTesterParameters) {
                    delete itemConfig[parameter];
                }

                /*
                 * Create the config object from the tester config and this item
                 * specific configurations.
                 */
                config = merge(
                    config,
                    itemConfig
                );
            }

            if (item.filename) {
                filename = item.filename;
            }

            if (hasOwnProperty(item, "options")) {
                assert(Array.isArray(item.options), "options must be an array");
                config.rules[ruleName] = [1].concat(item.options);
            } else {
                config.rules[ruleName] = 1;
            }

            const schema = getRuleOptionsSchema(rule);

            /*
             * Setup AST getters.
             * The goal is to check whether or not AST was modified when
             * running the rule under test.
             */
            linter.defineRule("rule-tester/validate-ast", () => ({
                Program(node) {
                    beforeAST = cloneDeeplyExcludesParent(node);
                },
                "Program:exit"(node) {
                    afterAST = node;
                }
            }));

            if (typeof config.parser === "string") {
                assert(path.isAbsolute(config.parser), "Parsers provided as strings to RuleTester must be absolute paths");
            } else {
                config.parser = espreePath;
            }

            linter.defineParser(config.parser, wrapParser(require(config.parser)));

            if (schema) {
                ajv.validateSchema(schema);

                if (ajv.errors) {
                    const errors = ajv.errors.map(error => {
                        const field = error.dataPath[0] === "." ? error.dataPath.slice(1) : error.dataPath;

                        return `\t${field}: ${error.message}`;
                    }).join("\n");

                    throw new Error([`Schema for rule ${ruleName} is invalid:`, errors]);
                }

                /*
                 * `ajv.validateSchema` checks for errors in the structure of the schema (by comparing the schema against a "meta-schema"),
                 * and it reports those errors individually. However, there are other types of schema errors that only occur when compiling
                 * the schema (e.g. using invalid defaults in a schema), and only one of these errors can be reported at a time. As a result,
                 * the schema is compiled here separately from checking for `validateSchema` errors.
                 */
                try {
                    ajv.compile(schema);
                } catch (err) {
                    throw new Error(`Schema for rule ${ruleName} is invalid: ${err.message}`);
                }
            }

            validate(config, "rule-tester", id => (id === ruleName ? rule : null));

            // Verify the code.
            const messages = linter.verify(code, config, filename);
            const fatalErrorMessage = messages.find(m => m.fatal);

            assert(!fatalErrorMessage, `A fatal parsing error occurred: ${fatalErrorMessage && fatalErrorMessage.message}`);

            // Verify if autofix makes a syntax error or not.
            if (messages.some(m => m.fix)) {
                output = SourceCodeFixer.applyFixes(code, messages).output;
                const errorMessageInFix = linter.verify(output, config, filename).find(m => m.fatal);

                assert(!errorMessageInFix, [
                    "A fatal parsing error occurred in autofix.",
                    `Error: ${errorMessageInFix && errorMessageInFix.message}`,
                    "Autofix output:",
                    output
                ].join("\n"));
            } else {
                output = code;
            }

            return {
                messages,
                output,
                beforeAST,
                afterAST: cloneDeeplyExcludesParent(afterAST)
            };
        }

        /**
         * Check if the AST was changed
         * @param {ASTNode} beforeAST AST node before running
         * @param {ASTNode} afterAST AST node after running
         * @returns {void}
         * @private
         */
        function assertASTDidntChange(beforeAST, afterAST) {
            if (!equal(beforeAST, afterAST)) {
                assert.fail("Rule should not modify AST.");
            }
        }

        /**
         * Check if the template is valid or not
         * all valid cases go through this
         * @param {string|Object} item Item to run the rule against
         * @returns {void}
         * @private
         */
        function testValidTemplate(item) {
            const result = runRuleForItem(item);
            const messages = result.messages;

            assert.strictEqual(messages.length, 0, util.format("Should have no errors but had %d: %s",
                messages.length,
                util.inspect(messages)));

            assertASTDidntChange(result.beforeAST, result.afterAST);
        }

        /**
         * Asserts that the message matches its expected value. If the expected
         * value is a regular expression, it is checked against the actual
         * value.
         * @param {string} actual Actual value
         * @param {string|RegExp} expected Expected value
         * @returns {void}
         * @private
         */
        function assertMessageMatches(actual, expected) {
            if (expected instanceof RegExp) {

                // assert.js doesn't have a built-in RegExp match function
                assert.ok(
                    expected.test(actual),
                    `Expected '${actual}' to match ${expected}`
                );
            } else {
                assert.strictEqual(actual, expected);
            }
        }

        /**
         * Check if the template is invalid or not
         * all invalid cases go through this.
         * @param {string|Object} item Item to run the rule against
         * @returns {void}
         * @private
         */
        function testInvalidTemplate(item) {
            assert.ok(item.errors || item.errors === 0,
                `Did not specify errors for an invalid test of ${ruleName}`);

            if (Array.isArray(item.errors) && item.errors.length === 0) {
                assert.fail("Invalid cases must have at least one error");
            }

            const ruleHasMetaMessages = hasOwnProperty(rule, "meta") && hasOwnProperty(rule.meta, "messages");
            const friendlyIDList = ruleHasMetaMessages ? `[${Object.keys(rule.meta.messages).map(key => `'${key}'`).join(", ")}]` : null;

            const result = runRuleForItem(item);
            const messages = result.messages;

            if (typeof item.errors === "number") {

                if (item.errors === 0) {
                    assert.fail("Invalid cases must have 'error' value greater than 0");
                }

                assert.strictEqual(messages.length, item.errors, util.format("Should have %d error%s but had %d: %s",
                    item.errors,
                    item.errors === 1 ? "" : "s",
                    messages.length,
                    util.inspect(messages)));
            } else {
                assert.strictEqual(
                    messages.length, item.errors.length, util.format(
                        "Should have %d error%s but had %d: %s",
                        item.errors.length,
                        item.errors.length === 1 ? "" : "s",
                        messages.length,
                        util.inspect(messages)
                    )
                );

                const hasMessageOfThisRule = messages.some(m => m.ruleId === ruleName);

                for (let i = 0, l = item.errors.length; i < l; i++) {
                    const error = item.errors[i];
                    const message = messages[i];

                    assert(hasMessageOfThisRule, "Error rule name should be the same as the name of the rule being tested");

                    if (typeof error === "string" || error instanceof RegExp) {

                        // Just an error message.
                        assertMessageMatches(message.message, error);
                    } else if (typeof error === "object" && error !== null) {

                        /*
                         * Error object.
                         * This may have a message, messageId, data, node type, line, and/or
                         * column.
                         */

                        Object.keys(error).forEach(propertyName => {
                            assert.ok(
                                errorObjectParameters.has(propertyName),
                                `Invalid error property name '${propertyName}'. Expected one of ${friendlyErrorObjectParameterList}.`
                            );
                        });

                        if (hasOwnProperty(error, "message")) {
                            assert.ok(!hasOwnProperty(error, "messageId"), "Error should not specify both 'message' and a 'messageId'.");
                            assert.ok(!hasOwnProperty(error, "data"), "Error should not specify both 'data' and 'message'.");
                            assertMessageMatches(message.message, error.message);
                        } else if (hasOwnProperty(error, "messageId")) {
                            assert.ok(
                                ruleHasMetaMessages,
                                "Error can not use 'messageId' if rule under test doesn't define 'meta.messages'."
                            );
                            if (!hasOwnProperty(rule.meta.messages, error.messageId)) {
                                assert(false, `Invalid messageId '${error.messageId}'. Expected one of ${friendlyIDList}.`);
                            }
                            assert.strictEqual(
                                message.messageId,
                                error.messageId,
                                `messageId '${message.messageId}' does not match expected messageId '${error.messageId}'.`
                            );
                            if (hasOwnProperty(error, "data")) {

                                /*
                                 *  if data was provided, then directly compare the returned message to a synthetic
                                 *  interpolated message using the same message ID and data provided in the test.
                                 *  See https://github.com/eslint/eslint/issues/9890 for context.
                                 */
                                const unformattedOriginalMessage = rule.meta.messages[error.messageId];
                                const rehydratedMessage = interpolate(unformattedOriginalMessage, error.data);

                                assert.strictEqual(
                                    message.message,
                                    rehydratedMessage,
                                    `Hydrated message "${rehydratedMessage}" does not match "${message.message}"`
                                );
                            }
                        }

                        assert.ok(
                            hasOwnProperty(error, "data") ? hasOwnProperty(error, "messageId") : true,
                            "Error must specify 'messageId' if 'data' is used."
                        );

                        if (error.type) {
                            assert.strictEqual(message.nodeType, error.type, `Error type should be ${error.type}, found ${message.nodeType}`);
                        }

                        if (hasOwnProperty(error, "line")) {
                            assert.strictEqual(message.line, error.line, `Error line should be ${error.line}`);
                        }

                        if (hasOwnProperty(error, "column")) {
                            assert.strictEqual(message.column, error.column, `Error column should be ${error.column}`);
                        }

                        if (hasOwnProperty(error, "endLine")) {
                            assert.strictEqual(message.endLine, error.endLine, `Error endLine should be ${error.endLine}`);
                        }

                        if (hasOwnProperty(error, "endColumn")) {
                            assert.strictEqual(message.endColumn, error.endColumn, `Error endColumn should be ${error.endColumn}`);
                        }

                        if (hasOwnProperty(error, "suggestions")) {

                            // Support asserting there are no suggestions
                            if (!error.suggestions || (Array.isArray(error.suggestions) && error.suggestions.length === 0)) {
                                if (Array.isArray(message.suggestions) && message.suggestions.length > 0) {
                                    assert.fail(`Error should have no suggestions on error with message: "${message.message}"`);
                                }
                            } else {
                                assert.strictEqual(Array.isArray(message.suggestions), true, `Error should have an array of suggestions. Instead received "${message.suggestions}" on error with message: "${message.message}"`);
                                assert.strictEqual(message.suggestions.length, error.suggestions.length, `Error should have ${error.suggestions.length} suggestions. Instead found ${message.suggestions.length} suggestions`);

                                error.suggestions.forEach((expectedSuggestion, index) => {
                                    assert.ok(
                                        typeof expectedSuggestion === "object" && expectedSuggestion !== null,
                                        "Test suggestion in 'suggestions' array must be an object."
                                    );
                                    Object.keys(expectedSuggestion).forEach(propertyName => {
                                        assert.ok(
                                            suggestionObjectParameters.has(propertyName),
                                            `Invalid suggestion property name '${propertyName}'. Expected one of ${friendlySuggestionObjectParameterList}.`
                                        );
                                    });

                                    const actualSuggestion = message.suggestions[index];
                                    const suggestionPrefix = `Error Suggestion at index ${index} :`;

                                    if (hasOwnProperty(expectedSuggestion, "desc")) {
                                        assert.ok(
                                            !hasOwnProperty(expectedSuggestion, "data"),
                                            `${suggestionPrefix} Test should not specify both 'desc' and 'data'.`
                                        );
                                        assert.strictEqual(
                                            actualSuggestion.desc,
                                            expectedSuggestion.desc,
                                            `${suggestionPrefix} desc should be "${expectedSuggestion.desc}" but got "${actualSuggestion.desc}" instead.`
                                        );
                                    }

                                    if (hasOwnProperty(expectedSuggestion, "messageId")) {
                                        assert.ok(
                                            ruleHasMetaMessages,
                                            `${suggestionPrefix} Test can not use 'messageId' if rule under test doesn't define 'meta.messages'.`
                                        );
                                        assert.ok(
                                            hasOwnProperty(rule.meta.messages, expectedSuggestion.messageId),
                                            `${suggestionPrefix} Test has invalid messageId '${expectedSuggestion.messageId}', the rule under test allows only one of ${friendlyIDList}.`
                                        );
                                        assert.strictEqual(
                                            actualSuggestion.messageId,
                                            expectedSuggestion.messageId,
                                            `${suggestionPrefix} messageId should be '${expectedSuggestion.messageId}' but got '${actualSuggestion.messageId}' instead.`
                                        );
                                        if (hasOwnProperty(expectedSuggestion, "data")) {
                                            const unformattedMetaMessage = rule.meta.messages[expectedSuggestion.messageId];
                                            const rehydratedDesc = interpolate(unformattedMetaMessage, expectedSuggestion.data);

                                            assert.strictEqual(
                                                actualSuggestion.desc,
                                                rehydratedDesc,
                                                `${suggestionPrefix} Hydrated test desc "${rehydratedDesc}" does not match received desc "${actualSuggestion.desc}".`
                                            );
                                        }
                                    } else {
                                        assert.ok(
                                            !hasOwnProperty(expectedSuggestion, "data"),
                                            `${suggestionPrefix} Test must specify 'messageId' if 'data' is used.`
                                        );
                                    }

                                    if (hasOwnProperty(expectedSuggestion, "output")) {
                                        const codeWithAppliedSuggestion = SourceCodeFixer.applyFixes(item.code, [actualSuggestion]).output;

                                        assert.strictEqual(codeWithAppliedSuggestion, expectedSuggestion.output, `Expected the applied suggestion fix to match the test suggestion output for suggestion at index: ${index} on error with message: "${message.message}"`);
                                    }
                                });
                            }
                        }
                    } else {

                        // Message was an unexpected type
                        assert.fail(`Error should be a string, object, or RegExp, but found (${util.inspect(message)})`);
                    }
                }
            }

            if (hasOwnProperty(item, "output")) {
                if (item.output === null) {
                    assert.strictEqual(
                        result.output,
                        item.code,
                        "Expected no autofixes to be suggested"
                    );
                } else {
                    assert.strictEqual(result.output, item.output, "Output is incorrect.");
                }
            } else {
                assert.strictEqual(
                    result.output,
                    item.code,
                    "The rule fixed the code. Please add 'output' property."
                );
            }

            // Rules that produce fixes must have `meta.fixable` property.
            if (result.output !== item.code) {
                assert.ok(
                    hasOwnProperty(rule, "meta"),
                    "Fixable rules should export a `meta.fixable` property."
                );

                // Linter throws if a rule that produced a fix has `meta` but doesn't have `meta.fixable`.
            }

            assertASTDidntChange(result.beforeAST, result.afterAST);
        }

        /*
         * This creates a mocha test suite and pipes all supplied info through
         * one of the templates above.
         */
        RuleTester.describe(ruleName, () => {
            RuleTester.describe("valid", () => {
                test.valid.forEach(valid => {
                    RuleTester[valid.only ? "itOnly" : "it"](
                        sanitize(typeof valid === "object" ? valid.code : valid),
                        () => {
                            testValidTemplate(valid);
                        }
                    );
                });
            });

            RuleTester.describe("invalid", () => {
                test.invalid.forEach(invalid => {
                    RuleTester[invalid.only ? "itOnly" : "it"](
                        sanitize(invalid.code),
                        () => {
                            testInvalidTemplate(invalid);
                        }
                    );
                });
            });
        });
    }
}

RuleTester[DESCRIBE] = RuleTester[IT] = RuleTester[IT_ONLY] = null;

module.exports = RuleTester;
