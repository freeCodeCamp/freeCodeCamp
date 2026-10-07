"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseOptions = void 0;
const util = __importStar(require("../../util"));
const enums_1 = require("./enums");
const shared_1 = require("./shared");
const validator_1 = require("./validator");
function normalizeOption(option) {
    var _a, _b, _c, _d, _e, _f;
    let weight = 0;
    (_a = option.modifiers) === null || _a === void 0 ? void 0 : _a.forEach(mod => {
        weight |= enums_1.Modifiers[mod];
    });
    (_b = option.types) === null || _b === void 0 ? void 0 : _b.forEach(mod => {
        weight |= enums_1.TypeModifiers[mod];
    });
    // give selectors with a filter the _highest_ priority
    if (option.filter) {
        weight |= 1 << 30;
    }
    const normalizedOption = {
        // format options
        format: option.format ? option.format.map(f => enums_1.PredefinedFormats[f]) : null,
        custom: option.custom
            ? {
                regex: new RegExp(option.custom.regex, 'u'),
                match: option.custom.match,
            }
            : null,
        leadingUnderscore: option.leadingUnderscore !== undefined
            ? enums_1.UnderscoreOptions[option.leadingUnderscore]
            : null,
        trailingUnderscore: option.trailingUnderscore !== undefined
            ? enums_1.UnderscoreOptions[option.trailingUnderscore]
            : null,
        prefix: option.prefix && option.prefix.length > 0 ? option.prefix : null,
        suffix: option.suffix && option.suffix.length > 0 ? option.suffix : null,
        modifiers: (_d = (_c = option.modifiers) === null || _c === void 0 ? void 0 : _c.map(m => enums_1.Modifiers[m])) !== null && _d !== void 0 ? _d : null,
        types: (_f = (_e = option.types) === null || _e === void 0 ? void 0 : _e.map(m => enums_1.TypeModifiers[m])) !== null && _f !== void 0 ? _f : null,
        filter: option.filter !== undefined
            ? typeof option.filter === 'string'
                ? {
                    regex: new RegExp(option.filter, 'u'),
                    match: true,
                }
                : {
                    regex: new RegExp(option.filter.regex, 'u'),
                    match: option.filter.match,
                }
            : null,
        // calculated ordering weight based on modifiers
        modifierWeight: weight,
    };
    const selectors = Array.isArray(option.selector)
        ? option.selector
        : [option.selector];
    return selectors.map(selector => (Object.assign({ selector: (0, shared_1.isMetaSelector)(selector)
            ? enums_1.MetaSelectors[selector]
            : enums_1.Selectors[selector] }, normalizedOption)));
}
function parseOptions(context) {
    const normalizedOptions = context.options
        .map(opt => normalizeOption(opt))
        .reduce((acc, val) => acc.concat(val), []);
    return util.getEnumNames(enums_1.Selectors).reduce((acc, k) => {
        acc[k] = (0, validator_1.createValidator)(k, context, normalizedOptions);
        return acc;
    }, {});
}
exports.parseOptions = parseOptions;
//# sourceMappingURL=parse-options.js.map