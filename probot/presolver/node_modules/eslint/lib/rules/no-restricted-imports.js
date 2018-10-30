/**
 * @fileoverview Restrict usage of specified node imports.
 * @author Guy Ellis
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const ignore = require("ignore");

const arrayOfStrings = {
    type: "array",
    items: {
        type: "string"
    },
    uniqueItems: true
};

module.exports = {
    meta: {
        docs: {
            description: "disallow specified modules when loaded by `import`",
            category: "ECMAScript 6",
            recommended: false
        },

        schema: {
            anyOf: [
                arrayOfStrings,
                {
                    type: "array",
                    items: [{
                        type: "object",
                        properties: {
                            paths: arrayOfStrings,
                            patterns: arrayOfStrings
                        },
                        additionalProperties: false
                    }],
                    additionalItems: false
                }
            ]
        }
    },

    create(context) {
        const options = Array.isArray(context.options) ? context.options : [];
        const isStringArray = typeof options[0] !== "object";
        const restrictedPaths = new Set(isStringArray ? context.options : options[0].paths || []);
        const restrictedPatterns = isStringArray ? [] : options[0].patterns || [];

        // if no imports are restricted we don"t need to check
        if (restrictedPaths.size === 0 && restrictedPatterns.length === 0) {
            return {};
        }

        const ig = ignore().add(restrictedPatterns);

        return {
            ImportDeclaration(node) {
                if (node && node.source && node.source.value) {

                    const importName = node.source.value.trim();

                    if (restrictedPaths.has(importName)) {
                        context.report({
                            node,
                            message: "'{{importName}}' import is restricted from being used.",
                            data: { importName }
                        });
                    }
                    if (restrictedPatterns.length > 0 && ig.ignores(importName)) {
                        context.report({
                            node,
                            message: "'{{importName}}' import is restricted from being used by a pattern.",
                            data: { importName }
                        });
                    }
                }
            }
        };
    }
};
