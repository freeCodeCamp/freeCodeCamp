/**
 * @fileoverview Restrict usage of duplicate imports.
 * @author Simen Bekkhus
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * Returns the name of the module imported or re-exported.
 *
 * @param {ASTNode} node - A node to get.
 * @returns {string} the name of the module, or empty string if no name.
 */
function getValue(node) {
    if (node && node.source && node.source.value) {
        return node.source.value.trim();
    }

    return "";
}

/**
 * Checks if the name of the import or export exists in the given array, and reports if so.
 *
 * @param {RuleContext} context - The ESLint rule context object.
 * @param {ASTNode} node - A node to get.
 * @param {string} value - The name of the imported or exported module.
 * @param {string[]} array - The array containing other imports or exports in the file.
 * @param {string} message - A message to be reported after the name of the module
 *
 * @returns {void} No return value
 */
function checkAndReport(context, node, value, array, message) {
    if (array.indexOf(value) !== -1) {
        context.report({
            node,
            message: "'{{module}}' {{message}}",
            data: {
                module: value,
                message
            }
        });
    }
}

/**
 * @callback nodeCallback
 * @param {ASTNode} node - A node to handle.
 */

/**
 * Returns a function handling the imports of a given file
 *
 * @param {RuleContext} context - The ESLint rule context object.
 * @param {boolean} includeExports - Whether or not to check for exports in addition to imports.
 * @param {string[]} importsInFile - The array containing other imports in the file.
 * @param {string[]} exportsInFile - The array containing other exports in the file.
 *
 * @returns {nodeCallback} A function passed to ESLint to handle the statement.
 */
function handleImports(context, includeExports, importsInFile, exportsInFile) {
    return function(node) {
        const value = getValue(node);

        if (value) {
            checkAndReport(context, node, value, importsInFile, "import is duplicated.");

            if (includeExports) {
                checkAndReport(context, node, value, exportsInFile, "import is duplicated as export.");
            }

            importsInFile.push(value);
        }
    };
}

/**
 * Returns a function handling the exports of a given file
 *
 * @param {RuleContext} context - The ESLint rule context object.
 * @param {string[]} importsInFile - The array containing other imports in the file.
 * @param {string[]} exportsInFile - The array containing other exports in the file.
 *
 * @returns {nodeCallback} A function passed to ESLint to handle the statement.
 */
function handleExports(context, importsInFile, exportsInFile) {
    return function(node) {
        const value = getValue(node);

        if (value) {
            checkAndReport(context, node, value, exportsInFile, "export is duplicated.");
            checkAndReport(context, node, value, importsInFile, "export is duplicated as import.");

            exportsInFile.push(value);
        }
    };
}

module.exports = {
    meta: {
        docs: {
            description: "disallow duplicate module imports",
            category: "ECMAScript 6",
            recommended: false
        },

        schema: [{
            type: "object",
            properties: {
                includeExports: {
                    type: "boolean"
                }
            },
            additionalProperties: false
        }]
    },

    create(context) {
        const includeExports = (context.options[0] || {}).includeExports,
            importsInFile = [],
            exportsInFile = [];

        const handlers = {
            ImportDeclaration: handleImports(context, includeExports, importsInFile, exportsInFile)
        };

        if (includeExports) {
            handlers.ExportNamedDeclaration = handleExports(context, importsInFile, exportsInFile);
            handlers.ExportAllDeclaration = handleExports(context, importsInFile, exportsInFile);
        }

        return handlers;
    }
};
