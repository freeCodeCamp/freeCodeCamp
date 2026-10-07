/**
 * @module create-header
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const ansiStyles = require("ansi-styles")

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Creates the header text for a given task.
 *
 * @param {string} nameAndArgs - A task name and arguments.
 * @param {object} packageInfo - A package.json's information.
 * @param {object} packageInfo.body - A package.json's JSON object.
 * @param {string} packageInfo.path - A package.json's file path.
 * @param {boolean} isTTY - The flag to color the header.
 * @returns {string} The header of a given task.
 */
module.exports = function createHeader(nameAndArgs, packageInfo, isTTY) {
    if (!packageInfo) {
        return `\n> ${nameAndArgs}\n\n`
    }

    const index = nameAndArgs.indexOf(" ")
    const name = (index === -1) ? nameAndArgs : nameAndArgs.slice(0, index)
    const args = (index === -1) ? "" : nameAndArgs.slice(index + 1)
    const packageName = packageInfo.body.name
    const packageVersion = packageInfo.body.version
    const scriptBody = packageInfo.body.scripts[name]
    const packagePath = packageInfo.path
    const color = isTTY ? ansiStyles.gray : { open: "", close: "" }

    return `
${color.open}> ${packageName}@${packageVersion} ${name} ${packagePath}${color.close}
${color.open}> ${scriptBody} ${args}${color.close}

`
}
