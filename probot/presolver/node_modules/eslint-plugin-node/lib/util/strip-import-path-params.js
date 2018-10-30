/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = function stripImportPathParams(path) {
    const i = path.indexOf("!")
    return i === -1 ? path : path.slice(0, i)
}
