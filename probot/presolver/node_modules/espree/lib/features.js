/**
 * @fileoverview The list of feature flags supported by the parser and their default
 *      settings.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// None!

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

module.exports = {

    // React JSX parsing
    jsx: false,

    // allow return statement in global scope
    globalReturn: false,

    // allow implied strict mode
    impliedStrict: false,

    // allow experimental object rest/spread
    experimentalObjectRestSpread: false
};
