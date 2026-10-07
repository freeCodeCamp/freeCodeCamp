/**
 * @fileoverview Tracks performance of individual rules.
 * @author Brandon Mills
 */

"use strict";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/* istanbul ignore next */
/**
 * Align the string to left
 * @param {string} str string to evaluate
 * @param {int} len length of the string
 * @param {string} ch delimiter character
 * @returns {string} modified string
 * @private
 */
function alignLeft(str, len, ch) {
    return str + new Array(len - str.length + 1).join(ch || " ");
}

/* istanbul ignore next */
/**
 * Align the string to right
 * @param {string} str string to evaluate
 * @param {int} len length of the string
 * @param {string} ch delimiter character
 * @returns {string} modified string
 * @private
 */
function alignRight(str, len, ch) {
    return new Array(len - str.length + 1).join(ch || " ") + str;
}

//------------------------------------------------------------------------------
// Module definition
//------------------------------------------------------------------------------

const enabled = !!process.env.TIMING;

const HEADERS = ["Rule", "Time (ms)", "Relative"];
const ALIGN = [alignLeft, alignRight, alignRight];

/**
 * Decide how many rules to show in the output list.
 * @returns {number} the number of rules to show
 */
function getListSize() {
    const MINIMUM_SIZE = 10;

    if (typeof process.env.TIMING !== "string") {
        return MINIMUM_SIZE;
    }

    if (process.env.TIMING.toLowerCase() === "all") {
        return Number.POSITIVE_INFINITY;
    }

    const TIMING_ENV_VAR_AS_INTEGER = Number.parseInt(process.env.TIMING, 10);

    return TIMING_ENV_VAR_AS_INTEGER > 10 ? TIMING_ENV_VAR_AS_INTEGER : MINIMUM_SIZE;
}

/* istanbul ignore next */
/**
 * display the data
 * @param {Object} data Data object to be displayed
 * @returns {void} prints modified string with console.log
 * @private
 */
function display(data) {
    let total = 0;
    const rows = Object.keys(data)
        .map(key => {
            const time = data[key];

            total += time;
            return [key, time];
        })
        .sort((a, b) => b[1] - a[1])
        .slice(0, getListSize());

    rows.forEach(row => {
        row.push(`${(row[1] * 100 / total).toFixed(1)}%`);
        row[1] = row[1].toFixed(3);
    });

    rows.unshift(HEADERS);

    const widths = [];

    rows.forEach(row => {
        const len = row.length;

        for (let i = 0; i < len; i++) {
            const n = row[i].length;

            if (!widths[i] || n > widths[i]) {
                widths[i] = n;
            }
        }
    });

    const table = rows.map(row => (
        row
            .map((cell, index) => ALIGN[index](cell, widths[index]))
            .join(" | ")
    ));

    table.splice(1, 0, widths.map((width, index) => {
        const extraAlignment = index !== 0 && index !== widths.length - 1 ? 2 : 1;

        return ALIGN[index](":", width + extraAlignment, "-");
    }).join("|"));

    console.log(table.join("\n")); // eslint-disable-line no-console
}

/* istanbul ignore next */
module.exports = (function() {

    const data = Object.create(null);

    /**
     * Time the run
     * @param {*} key key from the data object
     * @param {Function} fn function to be called
     * @returns {Function} function to be executed
     * @private
     */
    function time(key, fn) {
        if (typeof data[key] === "undefined") {
            data[key] = 0;
        }

        return function(...args) {
            let t = process.hrtime();

            fn(...args);
            t = process.hrtime(t);
            data[key] += t[0] * 1e3 + t[1] / 1e6;
        };
    }

    if (enabled) {
        process.on("exit", () => {
            display(data);
        });
    }

    return {
        time,
        enabled,
        getListSize
    };

}());
