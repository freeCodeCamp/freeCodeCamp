/**
 * @fileoverview Rule to enforce grouped require statements for Node.JS
 * @author Raphael Pigulla
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        deprecated: true,

        replacedBy: [],

        type: "suggestion",

        docs: {
            description: "disallow `require` calls to be mixed with regular variable declarations",
            category: "Node.js and CommonJS",
            recommended: false,
            url: "https://eslint.org/docs/rules/no-mixed-requires"
        },

        schema: [
            {
                oneOf: [
                    {
                        type: "boolean"
                    },
                    {
                        type: "object",
                        properties: {
                            grouping: {
                                type: "boolean"
                            },
                            allowCall: {
                                type: "boolean"
                            }
                        },
                        additionalProperties: false
                    }
                ]
            }
        ],

        messages: {
            noMixRequire: "Do not mix 'require' and other declarations.",
            noMixCoreModuleFileComputed: "Do not mix core, module, file and computed requires."
        }
    },

    create(context) {

        const options = context.options[0];
        let grouping = false,
            allowCall = false;

        if (typeof options === "object") {
            grouping = options.grouping;
            allowCall = options.allowCall;
        } else {
            grouping = !!options;
        }

        /**
         * Returns the list of built-in modules.
         * @returns {string[]} An array of built-in Node.js modules.
         */
        function getBuiltinModules() {

            /*
             * This list is generated using:
             * `require("repl")._builtinLibs.concat('repl').sort()`
             * This particular list is as per nodejs v0.12.2 and iojs v0.7.1
             */
            return [
                "assert", "buffer", "child_process", "cluster", "crypto",
                "dgram", "dns", "domain", "events", "fs", "http", "https",
                "net", "os", "path", "punycode", "querystring", "readline",
                "repl", "smalloc", "stream", "string_decoder", "tls", "tty",
                "url", "util", "v8", "vm", "zlib"
            ];
        }

        const BUILTIN_MODULES = getBuiltinModules();

        const DECL_REQUIRE = "require",
            DECL_UNINITIALIZED = "uninitialized",
            DECL_OTHER = "other";

        const REQ_CORE = "core",
            REQ_FILE = "file",
            REQ_MODULE = "module",
            REQ_COMPUTED = "computed";

        /**
         * Determines the type of a declaration statement.
         * @param {ASTNode} initExpression The init node of the VariableDeclarator.
         * @returns {string} The type of declaration represented by the expression.
         */
        function getDeclarationType(initExpression) {
            if (!initExpression) {

                // "var x;"
                return DECL_UNINITIALIZED;
            }

            if (initExpression.type === "CallExpression" &&
                initExpression.callee.type === "Identifier" &&
                initExpression.callee.name === "require"
            ) {

                // "var x = require('util');"
                return DECL_REQUIRE;
            }
            if (allowCall &&
                initExpression.type === "CallExpression" &&
                initExpression.callee.type === "CallExpression"
            ) {

                // "var x = require('diagnose')('sub-module');"
                return getDeclarationType(initExpression.callee);
            }
            if (initExpression.type === "MemberExpression") {

                // "var x = require('glob').Glob;"
                return getDeclarationType(initExpression.object);
            }

            // "var x = 42;"
            return DECL_OTHER;
        }

        /**
         * Determines the type of module that is loaded via require.
         * @param {ASTNode} initExpression The init node of the VariableDeclarator.
         * @returns {string} The module type.
         */
        function inferModuleType(initExpression) {
            if (initExpression.type === "MemberExpression") {

                // "var x = require('glob').Glob;"
                return inferModuleType(initExpression.object);
            }
            if (initExpression.arguments.length === 0) {

                // "var x = require();"
                return REQ_COMPUTED;
            }

            const arg = initExpression.arguments[0];

            if (arg.type !== "Literal" || typeof arg.value !== "string") {

                // "var x = require(42);"
                return REQ_COMPUTED;
            }

            if (BUILTIN_MODULES.indexOf(arg.value) !== -1) {

                // "var fs = require('fs');"
                return REQ_CORE;
            }
            if (/^\.{0,2}\//u.test(arg.value)) {

                // "var utils = require('./utils');"
                return REQ_FILE;
            }

            // "var async = require('async');"
            return REQ_MODULE;

        }

        /**
         * Check if the list of variable declarations is mixed, i.e. whether it
         * contains both require and other declarations.
         * @param {ASTNode} declarations The list of VariableDeclarators.
         * @returns {boolean} True if the declarations are mixed, false if not.
         */
        function isMixed(declarations) {
            const contains = {};

            declarations.forEach(declaration => {
                const type = getDeclarationType(declaration.init);

                contains[type] = true;
            });

            return !!(
                contains[DECL_REQUIRE] &&
                (contains[DECL_UNINITIALIZED] || contains[DECL_OTHER])
            );
        }

        /**
         * Check if all require declarations in the given list are of the same
         * type.
         * @param {ASTNode} declarations The list of VariableDeclarators.
         * @returns {boolean} True if the declarations are grouped, false if not.
         */
        function isGrouped(declarations) {
            const found = {};

            declarations.forEach(declaration => {
                if (getDeclarationType(declaration.init) === DECL_REQUIRE) {
                    found[inferModuleType(declaration.init)] = true;
                }
            });

            return Object.keys(found).length <= 1;
        }


        return {

            VariableDeclaration(node) {

                if (isMixed(node.declarations)) {
                    context.report({
                        node,
                        messageId: "noMixRequire"
                    });
                } else if (grouping && !isGrouped(node.declarations)) {
                    context.report({
                        node,
                        messageId: "noMixCoreModuleFileComputed"
                    });
                }
            }
        };

    }
};
