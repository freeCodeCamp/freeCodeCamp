"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOptions = parseOptions;
const util_1 = require("../../util");
const enums_1 = require("./enums");
const shared_1 = require("./shared");
const validator_1 = require("./validator");
function normalizeOption(option) {
    let weight = 0;
    option.modifiers?.forEach(mod => {
        weight |= enums_1.Modifiers[mod];
    });
    option.types?.forEach(mod => {
        weight |= enums_1.TypeModifiers[mod];
    });
    // give selectors with a filter the _highest_ priority
    if (option.filter) {
        weight |= 1 << 30;
    }
    const normalizedOption = {
        // format options
        custom: option.custom
            ? {
                match: option.custom.match,
                regex: new RegExp(option.custom.regex, 'u'),
            }
            : null,
        filter: option.filter != null
            ? typeof option.filter === 'string'
                ? {
                    match: true,
                    regex: new RegExp(option.filter, 'u'),
                }
                : {
                    match: option.filter.match,
                    regex: new RegExp(option.filter.regex, 'u'),
                }
            : null,
        format: option.format ? option.format.map(f => enums_1.PredefinedFormats[f]) : null,
        leadingUnderscore: option.leadingUnderscore != null
            ? enums_1.UnderscoreOptions[option.leadingUnderscore]
            : null,
        modifiers: option.modifiers?.map(m => enums_1.Modifiers[m]) ?? null,
        prefix: option.prefix && option.prefix.length > 0 ? option.prefix : null,
        suffix: option.suffix && option.suffix.length > 0 ? option.suffix : null,
        trailingUnderscore: option.trailingUnderscore != null
            ? enums_1.UnderscoreOptions[option.trailingUnderscore]
            : null,
        types: option.types?.map(m => enums_1.TypeModifiers[m]) ?? null,
        // calculated ordering weight based on modifiers
        modifierWeight: weight,
    };
    const selectors = Array.isArray(option.selector)
        ? option.selector
        : [option.selector];
    return selectors.map(selector => ({
        selector: (0, shared_1.isMetaSelector)(selector)
            ? enums_1.MetaSelectors[selector]
            : enums_1.Selectors[selector],
        ...normalizedOption,
    }));
}
function parseOptions(context) {
    const normalizedOptions = context.options.flatMap(normalizeOption);
    return Object.fromEntries((0, util_1.getEnumNames)(enums_1.Selectors).map(k => [
        k,
        (0, validator_1.createValidator)(k, context, normalizedOptions),
    ]));
}
//# sourceMappingURL=parse-options.js.map