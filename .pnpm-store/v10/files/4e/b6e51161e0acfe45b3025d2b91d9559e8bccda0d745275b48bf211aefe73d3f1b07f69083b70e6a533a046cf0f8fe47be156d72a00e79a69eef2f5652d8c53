"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredefinedFormatToCheckFunction = void 0;
const enums_1 = require("./enums");
/*
These format functions are taken from `tslint-consistent-codestyle/naming-convention`:
https://github.com/ajafff/tslint-consistent-codestyle/blob/ab156cc8881bcc401236d999f4ce034b59039e81/rules/namingConventionRule.ts#L603-L645

The license for the code can be viewed here:
https://github.com/ajafff/tslint-consistent-codestyle/blob/ab156cc8881bcc401236d999f4ce034b59039e81/LICENSE
*/
/*
Why not regex here? Because it's actually really, really difficult to create a regex to handle
all of the unicode cases, and we have many non-english users that use non-english characters.
https://gist.github.com/mathiasbynens/6334847
*/
function isPascalCase(name) {
    return (name.length === 0 ||
        (name[0] === name[0].toUpperCase() && !name.includes('_')));
}
function isStrictPascalCase(name) {
    return (name.length === 0 ||
        (name[0] === name[0].toUpperCase() && hasStrictCamelHumps(name, true)));
}
function isCamelCase(name) {
    return (name.length === 0 ||
        (name[0] === name[0].toLowerCase() && !name.includes('_')));
}
function isStrictCamelCase(name) {
    return (name.length === 0 ||
        (name[0] === name[0].toLowerCase() && hasStrictCamelHumps(name, false)));
}
function hasStrictCamelHumps(name, isUpper) {
    function isUppercaseChar(char) {
        return char === char.toUpperCase() && char !== char.toLowerCase();
    }
    if (name.startsWith('_')) {
        return false;
    }
    for (let i = 1; i < name.length; ++i) {
        if (name[i] === '_') {
            return false;
        }
        if (isUpper === isUppercaseChar(name[i])) {
            if (isUpper) {
                return false;
            }
        }
        else {
            isUpper = !isUpper;
        }
    }
    return true;
}
function isSnakeCase(name) {
    return (name.length === 0 ||
        (name === name.toLowerCase() && validateUnderscores(name)));
}
function isUpperCase(name) {
    return (name.length === 0 ||
        (name === name.toUpperCase() && validateUnderscores(name)));
}
/** Check for leading trailing and adjacent underscores */
function validateUnderscores(name) {
    if (name.startsWith('_')) {
        return false;
    }
    let wasUnderscore = false;
    for (let i = 1; i < name.length; ++i) {
        if (name[i] === '_') {
            if (wasUnderscore) {
                return false;
            }
            wasUnderscore = true;
        }
        else {
            wasUnderscore = false;
        }
    }
    return !wasUnderscore;
}
exports.PredefinedFormatToCheckFunction = {
    [enums_1.PredefinedFormats.camelCase]: isCamelCase,
    [enums_1.PredefinedFormats.PascalCase]: isPascalCase,
    [enums_1.PredefinedFormats.snake_case]: isSnakeCase,
    [enums_1.PredefinedFormats.strictCamelCase]: isStrictCamelCase,
    [enums_1.PredefinedFormats.StrictPascalCase]: isStrictPascalCase,
    [enums_1.PredefinedFormats.UPPER_CASE]: isUpperCase,
};
//# sourceMappingURL=format.js.map