/**
 * @fileoverview RuleContext utility for rules
 * @author Nicholas C. Zakas
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const ruleFixer = require("./util/rule-fixer");

//------------------------------------------------------------------------------
// Constants
//------------------------------------------------------------------------------

const PASSTHROUGHS = [
    "getAncestors",
    "getDeclaredVariables",
    "getFilename",
    "getScope",
    "markVariableAsUsed",

    // DEPRECATED
    "getAllComments",
    "getComments",
    "getFirstToken",
    "getFirstTokens",
    "getJSDocComment",
    "getLastToken",
    "getLastTokens",
    "getNodeByRangeIndex",
    "getSource",
    "getSourceLines",
    "getTokenAfter",
    "getTokenBefore",
    "getTokenByRangeStart",
    "getTokens",
    "getTokensAfter",
    "getTokensBefore",
    "getTokensBetween"
];

//------------------------------------------------------------------------------
// Typedefs
//------------------------------------------------------------------------------

/**
 * An error message description
 * @typedef {Object} MessageDescriptor
 * @property {string} nodeType The type of node.
 * @property {Location} loc The location of the problem.
 * @property {string} message The problem message.
 * @property {Object} [data] Optional data to use to fill in placeholders in the
 *      message.
 * @property {Function} fix The function to call that creates a fix command.
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * Rule context class
 * Acts as an abstraction layer between rules and the main eslint object.
 */
class RuleContext {

    /**
     * @param {string} ruleId The ID of the rule using this object.
     * @param {eslint} eslint The eslint object.
     * @param {number} severity The configured severity level of the rule.
     * @param {Array} options The configuration information to be added to the rule.
     * @param {Object} settings The configuration settings passed from the config file.
     * @param {Object} parserOptions The parserOptions settings passed from the config file.
     * @param {Object} parserPath The parser setting passed from the config file.
     * @param {Object} meta The metadata of the rule
     * @param {Object} parserServices The parser services for the rule.
     */
    constructor(ruleId, eslint, severity, options, settings, parserOptions, parserPath, meta, parserServices) {

        // public.
        this.id = ruleId;
        this.options = options;
        this.settings = settings;
        this.parserOptions = parserOptions;
        this.parserPath = parserPath;
        this.meta = meta;

        // create a separate copy and freeze it (it's not nice to freeze other people's objects)
        this.parserServices = Object.freeze(Object.assign({}, parserServices));

        // private.
        this.eslint = eslint;
        this.severity = severity;

        Object.freeze(this);
    }

    /**
     * Passthrough to eslint.getSourceCode().
     * @returns {SourceCode} The SourceCode object for the code.
     */
    getSourceCode() {
        return this.eslint.getSourceCode();
    }

    /**
     * Passthrough to eslint.report() that automatically assigns the rule ID and severity.
     * @param {ASTNode|MessageDescriptor} nodeOrDescriptor The AST node related to the message or a message
     *      descriptor.
     * @param {Object=} location The location of the error.
     * @param {string} message The message to display to the user.
     * @param {Object} opts Optional template data which produces a formatted message
     *     with symbols being replaced by this object's values.
     * @returns {void}
     */
    report(nodeOrDescriptor, location, message, opts) {

        // check to see if it's a new style call
        if (arguments.length === 1) {
            const descriptor = nodeOrDescriptor;
            let fix = null;

            // if there's a fix specified, get it
            if (typeof descriptor.fix === "function") {
                fix = descriptor.fix(ruleFixer);
            }

            this.eslint.report(
                this.id,
                this.severity,
                descriptor.node,
                descriptor.loc || descriptor.node.loc.start,
                descriptor.message,
                descriptor.data,
                fix,
                this.meta
            );

            return;
        }

        // old style call
        this.eslint.report(
            this.id,
            this.severity,
            nodeOrDescriptor,
            location,
            message,
            opts,
            this.meta
        );
    }
}

// Copy over passthrough methods. All functions will have 5 or fewer parameters.
PASSTHROUGHS.forEach(function(name) {
    this[name] = function(a, b, c, d, e) {
        return this.eslint[name](a, b, c, d, e);
    };
}, RuleContext.prototype);

module.exports = RuleContext;
