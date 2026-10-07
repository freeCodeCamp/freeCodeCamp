"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyDefault = applyDefault;
const deepMerge_1 = require("./deepMerge");
/**
 * Pure function - doesn't mutate either parameter!
 * Uses the default options and overrides with the options provided by the user
 * @param defaultOptions the defaults
 * @param userOptions the user opts
 * @returns the options with defaults
 */
function applyDefault(defaultOptions, userOptions) {
    // clone defaults
    const options = structuredClone(defaultOptions);
    if (userOptions == null) {
        return options;
    }
    // For avoiding the type error
    //   `This expression is not callable. Type 'unknown' has no call signatures.ts(2349)`
    options.forEach((opt, i) => {
        // eslint-disable-next-line @typescript-eslint/internal/eqeq-nullish
        if (userOptions[i] !== undefined) {
            const userOpt = userOptions[i];
            if ((0, deepMerge_1.isObjectNotArray)(userOpt) && (0, deepMerge_1.isObjectNotArray)(opt)) {
                options[i] = (0, deepMerge_1.deepMerge)(opt, userOpt);
            }
            else {
                options[i] = userOpt;
            }
        }
    });
    return options;
}
