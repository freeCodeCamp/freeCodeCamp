/**
 * @author Toru Nagashima
 * @copyright 2015 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const path = require("path")
const getConvertPath = require("../util/get-convert-path")
const getPackageJson = require("../util/get-package-json")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const NODE_SHEBANG = "#!/usr/bin/env node\n"
const SHEBANG_PATTERN = /^(#!.+?)?(\r)?\n/
const NODE_SHEBANG_PATTERN = /#!\/usr\/bin\/env node(?: [^\r\n]+?)?\n/

/**
 * Checks whether or not a given path is a `bin` file.
 *
 * @param {string} filePath - A file path to check.
 * @param {string|object|undefined} binField - A value of the `bin` field of `package.json`.
 * @param {string} basedir - A directory path that `package.json` exists.
 * @returns {boolean} `true` if the file is a `bin` file.
 */
function isBinFile(filePath, binField, basedir) {
    if (!binField) {
        return false
    }
    if (typeof binField === "string") {
        return filePath === path.resolve(basedir, binField)
    }
    return Object.keys(binField).some(key => filePath === path.resolve(basedir, binField[key]))
}

/**
 * Gets the shebang line (includes a line ending) from a given code.
 *
 * @param {SourceCode} sourceCode - A source code object to check.
 * @returns {{length: number, bom: boolean, shebang: string, cr: boolean}}
 *      shebang's information.
 *      `retv.shebang` is an empty string if shebang doesn't exist.
 */
function getShebangInfo(sourceCode) {
    const m = SHEBANG_PATTERN.exec(sourceCode.text)

    return {
        bom: sourceCode.hasBOM,
        cr: Boolean(m && m[2]),
        length: (m && m[0].length) || 0,
        shebang: (m && m[1] && (`${m[1]}\n`)) || "",
    }
}

/**
 * The definition of this rule.
 *
 * @param {RuleContext} context - The rule context to check.
 * @returns {object} The definition of this rule.
 */
function create(context) {
    const sourceCode = context.getSourceCode()
    let filePath = context.getFilename()
    if (filePath === "<input>") {
        return {}
    }
    filePath = path.resolve(filePath)

    const p = getPackageJson(filePath)
    if (!p) {
        return {}
    }

    const basedir = path.dirname(p.filePath)
    filePath = path.join(
        basedir,
        getConvertPath(context)(path.relative(basedir, filePath).replace(/\\/g, "/"))
    )

    const needsShebang = isBinFile(filePath, p.bin, basedir)
    const info = getShebangInfo(sourceCode)

    return {
        Program(node) {
            if (needsShebang ? NODE_SHEBANG_PATTERN.test(info.shebang) : !info.shebang) {
                // Good the shebang target.
                // Checks BOM and \r.
                if (needsShebang && info.bom) {
                    context.report({
                        node,
                        message: "This file must not have Unicode BOM.",
                        fix(fixer) {
                            return fixer.removeRange([-1, 0])
                        },
                    })
                }
                if (needsShebang && info.cr) {
                    context.report({
                        node,
                        message: "This file must have Unix linebreaks (LF).",
                        fix(fixer) {
                            const index = sourceCode.text.indexOf("\r")
                            return fixer.removeRange([index, index + 1])
                        },
                    })
                }
            }
            else if (needsShebang) {
                // Shebang is lacking.
                context.report({
                    node,
                    message: "This file needs shebang \"#!/usr/bin/env node\".",
                    fix(fixer) {
                        return fixer.replaceTextRange([-1, info.length], NODE_SHEBANG)
                    },
                })
            }
            else {
                // Shebang is extra.
                context.report({
                    node,
                    message: "This file needs no shebang.",
                    fix(fixer) {
                        return fixer.removeRange([0, info.length])
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
            description: "enforce the correct usage of shebang",
            category: "Possible Errors",
            recommended: false,
        },
        fixable: "code",
        schema: [
            {
                type: "object",
                properties: { //
                    convertPath: getConvertPath.schema,
                },
                additionalProperties: false,
            },
        ],
    },
}
