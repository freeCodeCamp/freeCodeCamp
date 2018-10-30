/**
 * @fileoverview Config to enable all rules.
 * @author Robert Fletcher
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const load = require("../lib/load-rules"),
    rules = require("../lib/rules");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const enabledRules = Object.keys(load()).reduce((result, ruleId) => {
    if (!rules.get(ruleId).meta.deprecated) {
        result[ruleId] = "error";
    }
    return result;
}, {});

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

module.exports = { rules: enabledRules };
