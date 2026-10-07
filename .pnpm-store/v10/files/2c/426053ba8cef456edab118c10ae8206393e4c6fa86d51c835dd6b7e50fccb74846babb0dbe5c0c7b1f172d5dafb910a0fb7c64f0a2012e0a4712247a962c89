/*globals require, self, window */
"use strict"

const ac = require("./dist/abort-controller")

/*eslint-disable @mysticatea/prettier */
const g =
    typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    typeof global !== "undefined" ? global :
    /* otherwise */ undefined
/*eslint-enable @mysticatea/prettier */

if (g) {
    if (typeof g.AbortController === "undefined") {
        g.AbortController = ac.AbortController
    }
    if (typeof g.AbortSignal === "undefined") {
        g.AbortSignal = ac.AbortSignal
    }
}
