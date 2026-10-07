/**
 * @fileoverview Defines environment settings and globals.
 * @author Elan Shanker
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const globals = require("globals");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Get the object that has difference.
 * @param {Record<string,boolean>} current The newer object.
 * @param {Record<string,boolean>} prev The older object.
 * @returns {Record<string,boolean>} The difference object.
 */
function getDiff(current, prev) {
    const retv = {};

    for (const [key, value] of Object.entries(current)) {
        if (!Object.hasOwnProperty.call(prev, key)) {
            retv[key] = value;
        }
    }

    return retv;
}

const newGlobals2015 = getDiff(globals.es2015, globals.es5); // 19 variables such as Promise, Map, ...
const newGlobals2017 = {
    Atomics: false,
    SharedArrayBuffer: false
};
const newGlobals2020 = {
    BigInt: false,
    BigInt64Array: false,
    BigUint64Array: false,
    globalThis: false
};

const newGlobals2021 = {
    AggregateError: false,
    FinalizationRegistry: false,
    WeakRef: false
};

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/** @type {Map<string, import("../lib/shared/types").Environment>} */
module.exports = new Map(Object.entries({

    // Language
    builtin: {
        globals: globals.es5
    },
    es6: {
        globals: newGlobals2015,
        parserOptions: {
            ecmaVersion: 6
        }
    },
    es2015: {
        globals: newGlobals2015,
        parserOptions: {
            ecmaVersion: 6
        }
    },
    es2017: {
        globals: { ...newGlobals2015, ...newGlobals2017 },
        parserOptions: {
            ecmaVersion: 8
        }
    },
    es2020: {
        globals: { ...newGlobals2015, ...newGlobals2017, ...newGlobals2020 },
        parserOptions: {
            ecmaVersion: 11
        }
    },
    es2021: {
        globals: { ...newGlobals2015, ...newGlobals2017, ...newGlobals2020, ...newGlobals2021 },
        parserOptions: {
            ecmaVersion: 12
        }
    },

    // Platforms
    browser: {
        globals: globals.browser
    },
    node: {
        globals: globals.node,
        parserOptions: {
            ecmaFeatures: {
                globalReturn: true
            }
        }
    },
    "shared-node-browser": {
        globals: globals["shared-node-browser"]
    },
    worker: {
        globals: globals.worker
    },
    serviceworker: {
        globals: globals.serviceworker
    },

    // Frameworks
    commonjs: {
        globals: globals.commonjs,
        parserOptions: {
            ecmaFeatures: {
                globalReturn: true
            }
        }
    },
    amd: {
        globals: globals.amd
    },
    mocha: {
        globals: globals.mocha
    },
    jasmine: {
        globals: globals.jasmine
    },
    jest: {
        globals: globals.jest
    },
    phantomjs: {
        globals: globals.phantomjs
    },
    jquery: {
        globals: globals.jquery
    },
    qunit: {
        globals: globals.qunit
    },
    prototypejs: {
        globals: globals.prototypejs
    },
    shelljs: {
        globals: globals.shelljs
    },
    meteor: {
        globals: globals.meteor
    },
    mongo: {
        globals: globals.mongo
    },
    protractor: {
        globals: globals.protractor
    },
    applescript: {
        globals: globals.applescript
    },
    nashorn: {
        globals: globals.nashorn
    },
    atomtest: {
        globals: globals.atomtest
    },
    embertest: {
        globals: globals.embertest
    },
    webextensions: {
        globals: globals.webextensions
    },
    greasemonkey: {
        globals: globals.greasemonkey
    }
}));
