/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 *
 * @deprecated since v4.2.0
 * This rule was based on an invalid assumption.
 * No meaning.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const path = require("path")
const resolve = require("resolve")
const getPackageJson = require("../util/get-package-json")
const getRequireTargets = require("../util/get-require-targets")
const getImportExportTargets = require("../util/get-import-export-targets")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const CORE_MODULES = new Set([
    "assert", "buffer", "child_process", "cluster", "console", "constants",
    "crypto", "dgram", "dns", /* "domain", */ "events", "fs", "http", "https",
    "module", "net", "os", "path", /* "punycode", */ "querystring", "readline",
    "repl", "stream", "string_decoder", "timers", "tls", "tty", "url", "util",
    "vm", "zlib",
])
const BACK_SLASH = /\\/g

/**
 * Creates AST event handlers for no-hide-core-modules.
 *
 * @param {RuleContext} context - The rule context.
 * @returns {object} AST event handlers.
 */
function create(context) {
    if (context.getFilename() === "<input>") {
        return {}
    }
    const filePath = path.resolve(context.getFilename())
    const dirPath = path.dirname(filePath)
    const packageJson = getPackageJson(filePath)
    const deps = new Set([].concat(
        Object.keys((packageJson && packageJson.dependencies) || {}),
        Object.keys((packageJson && packageJson.devDependencies) || {})
    ))
    const options = context.options[0] || {}
    const allow = options.allow || []
    const ignoreDirectDependencies = Boolean(options.ignoreDirectDependencies)
    const ignoreIndirectDependencies = Boolean(options.ignoreIndirectDependencies)

    return {
        "Program:exit"(node) {
            const targets =
                [].concat(
                    getRequireTargets(context, true),
                    getImportExportTargets(context, node, true)
                )
                .filter(t => CORE_MODULES.has(t.moduleName))

            for (const target of targets) {
                const name = target.moduleName
                const allowed =
                    allow.indexOf(name) !== -1 ||
                    (ignoreDirectDependencies && deps.has(name)) ||
                    (ignoreIndirectDependencies && !deps.has(name))

                if (allowed) {
                    continue
                }

                const resolved = resolve.sync(name, {basedir: dirPath})
                const isCore = resolved === name

                if (isCore) {
                    continue
                }

                context.report({
                    node: target.node,
                    loc: target.node.loc,
                    message: "Unexpected import of third-party module '{{name}}'.",
                    data: {
                        name: path
                            .relative(dirPath, resolved)
                            .replace(BACK_SLASH, "/"),
                    },
                })
            }
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
            description: "disallow third-party modules which are hiding core modules",
            category: "Possible Errors",
            recommended: false,
        },
        deprecated: true,
        fixable: false,
        schema: [
            {
                type: "object",
                properties: {
                    allow: {
                        type: "array",
                        items: {enum: Array.from(CORE_MODULES)},
                        additionalItems: false,
                        uniqueItems: true,
                    },
                    ignoreDirectDependencies: {type: "boolean"},
                    ignoreIndirectDependencies: {type: "boolean"},
                },
                additionalProperties: false,
            },
        ],
    },
}
