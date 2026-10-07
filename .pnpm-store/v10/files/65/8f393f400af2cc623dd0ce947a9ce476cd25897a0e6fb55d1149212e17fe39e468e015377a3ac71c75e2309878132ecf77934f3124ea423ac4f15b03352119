/**
 * @fileoverview Default configuration
 * @author Nicholas C. Zakas
 */

"use strict";

//-----------------------------------------------------------------------------
// Requirements
//-----------------------------------------------------------------------------

const Rules = require("../rules");

//-----------------------------------------------------------------------------
// Helpers
//-----------------------------------------------------------------------------


exports.defaultConfig = [
    {
        plugins: {
            "@": {
                parsers: {
                    espree: require("espree")
                },

                /*
                 * Because we try to delay loading rules until absolutely
                 * necessary, a proxy  allows us to hook into the lazy-loading
                 * aspect of the rules map while still keeping all of the
                 * relevant configuration inside of the config array.
                 */
                rules: new Proxy({}, {
                    get(target, property) {
                        return Rules.get(property);
                    },

                    has(target, property) {
                        return Rules.has(property);
                    }
                })
            }
        },
        ignores: [
            "**/node_modules/**",
            ".git/**"
        ],
        languageOptions: {
            parser: "@/espree"
        }
    }
];
