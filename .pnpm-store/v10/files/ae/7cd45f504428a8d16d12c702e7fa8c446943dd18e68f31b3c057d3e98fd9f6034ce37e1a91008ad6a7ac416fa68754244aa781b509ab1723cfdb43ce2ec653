"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_what_1 = require("css-what");
var procedure_1 = require("./procedure");
var attributes = {
    exists: 10,
    equals: 8,
    not: 7,
    start: 6,
    end: 6,
    any: 5,
    hyphen: 4,
    element: 4,
};
/**
 * Sort the parts of the passed selector,
 * as there is potential for optimization
 * (some types of selectors are faster than others)
 *
 * @param arr Selector to sort
 */
function sortByProcedure(arr) {
    var procs = arr.map(getProcedure);
    for (var i = 1; i < arr.length; i++) {
        var procNew = procs[i];
        if (procNew < 0)
            continue;
        for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
            var token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
        }
    }
}
exports.default = sortByProcedure;
function getProcedure(token) {
    var proc = procedure_1.procedure[token.type];
    if (token.type === css_what_1.SelectorType.Attribute) {
        proc = attributes[token.action];
        if (proc === attributes.equals && token.name === "id") {
            // Prefer ID selectors (eg. #ID)
            proc = 9;
        }
        if (token.ignoreCase) {
            /*
             * IgnoreCase adds some overhead, prefer "normal" token
             * this is a binary operation, to ensure it's still an int
             */
            proc >>= 1;
        }
    }
    else if (token.type === css_what_1.SelectorType.Pseudo) {
        if (!token.data) {
            proc = 3;
        }
        else if (token.name === "has" || token.name === "contains") {
            proc = 0; // Expensive in any case
        }
        else if (Array.isArray(token.data)) {
            // "matches" and "not"
            proc = 0;
            for (var i = 0; i < token.data.length; i++) {
                // TODO better handling of complex selectors
                if (token.data[i].length !== 1)
                    continue;
                var cur = getProcedure(token.data[i][0]);
                // Avoid executing :has or :contains
                if (cur === 0) {
                    proc = 0;
                    break;
                }
                if (cur > proc)
                    proc = cur;
            }
            if (token.data.length > 1 && proc > 0)
                proc -= 1;
        }
        else {
            proc = 1;
        }
    }
    return proc;
}
