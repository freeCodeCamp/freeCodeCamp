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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const parserBase = __importStar(require("@typescript-eslint/parser"));
const all_1 = __importDefault(require("./configs/eslintrc/all"));
const base_1 = __importDefault(require("./configs/eslintrc/base"));
const disable_type_checked_1 = __importDefault(require("./configs/eslintrc/disable-type-checked"));
const eslint_recommended_1 = __importDefault(require("./configs/eslintrc/eslint-recommended"));
const recommended_1 = __importDefault(require("./configs/eslintrc/recommended"));
const recommended_type_checked_1 = __importDefault(require("./configs/eslintrc/recommended-type-checked"));
const recommended_type_checked_only_1 = __importDefault(require("./configs/eslintrc/recommended-type-checked-only"));
const strict_1 = __importDefault(require("./configs/eslintrc/strict"));
const strict_type_checked_1 = __importDefault(require("./configs/eslintrc/strict-type-checked"));
const strict_type_checked_only_1 = __importDefault(require("./configs/eslintrc/strict-type-checked-only"));
const stylistic_1 = __importDefault(require("./configs/eslintrc/stylistic"));
const stylistic_type_checked_1 = __importDefault(require("./configs/eslintrc/stylistic-type-checked"));
const stylistic_type_checked_only_1 = __importDefault(require("./configs/eslintrc/stylistic-type-checked-only"));
const all_2 = __importDefault(require("./configs/flat/all"));
const base_2 = __importDefault(require("./configs/flat/base"));
const disable_type_checked_2 = __importDefault(require("./configs/flat/disable-type-checked"));
const eslint_recommended_2 = __importDefault(require("./configs/flat/eslint-recommended"));
const recommended_2 = __importDefault(require("./configs/flat/recommended"));
const recommended_type_checked_2 = __importDefault(require("./configs/flat/recommended-type-checked"));
const recommended_type_checked_only_2 = __importDefault(require("./configs/flat/recommended-type-checked-only"));
const strict_2 = __importDefault(require("./configs/flat/strict"));
const strict_type_checked_2 = __importDefault(require("./configs/flat/strict-type-checked"));
const strict_type_checked_only_2 = __importDefault(require("./configs/flat/strict-type-checked-only"));
const stylistic_2 = __importDefault(require("./configs/flat/stylistic"));
const stylistic_type_checked_2 = __importDefault(require("./configs/flat/stylistic-type-checked"));
const stylistic_type_checked_only_2 = __importDefault(require("./configs/flat/stylistic-type-checked-only"));
const rules_1 = __importDefault(require("./rules"));
const parser = {
    meta: parserBase.meta,
    parseForESLint: parserBase.parseForESLint,
};
// note - cannot migrate this to an import statement because it will make TSC copy the package.json to the dist folder
const { name, version } = require('../package.json');
const plugin = {
    // not fully initialized yet.
    // See https://eslint.org/docs/latest/extend/plugins#configs-in-plugins
    configs: {
        all: all_1.default,
        base: base_1.default,
        'disable-type-checked': disable_type_checked_1.default,
        'eslint-recommended': eslint_recommended_1.default,
        recommended: recommended_1.default,
        /** @deprecated - please use "recommended-type-checked" instead. */
        'recommended-requiring-type-checking': recommended_type_checked_1.default,
        'recommended-type-checked': recommended_type_checked_1.default,
        'recommended-type-checked-only': recommended_type_checked_only_1.default,
        strict: strict_1.default,
        'strict-type-checked': strict_type_checked_1.default,
        'strict-type-checked-only': strict_type_checked_only_1.default,
        stylistic: stylistic_1.default,
        'stylistic-type-checked': stylistic_type_checked_1.default,
        'stylistic-type-checked-only': stylistic_type_checked_only_1.default,
    },
    meta: {
        name,
        namespace: '@typescript-eslint',
        version,
    },
    rules: rules_1.default,
};
// @ts-expect-error -- upstream type incompatibility stuff
const flatPlugin = plugin;
// included due to https://github.com/eslint/eslint/issues/19513
const flatConfigs = {
    'flat/all': (0, all_2.default)(flatPlugin, parser),
    'flat/base': (0, base_2.default)(flatPlugin, parser),
    'flat/disable-type-checked': (0, disable_type_checked_2.default)(flatPlugin, parser),
    'flat/eslint-recommended': (0, eslint_recommended_2.default)(flatPlugin, parser),
    'flat/recommended': (0, recommended_2.default)(flatPlugin, parser),
    'flat/recommended-type-checked': (0, recommended_type_checked_2.default)(flatPlugin, parser),
    'flat/recommended-type-checked-only': (0, recommended_type_checked_only_2.default)(flatPlugin, parser),
    'flat/strict': (0, strict_2.default)(flatPlugin, parser),
    'flat/strict-type-checked': (0, strict_type_checked_2.default)(flatPlugin, parser),
    'flat/strict-type-checked-only': (0, strict_type_checked_only_2.default)(flatPlugin, parser),
    'flat/stylistic': (0, stylistic_2.default)(flatPlugin, parser),
    'flat/stylistic-type-checked': (0, stylistic_type_checked_2.default)(flatPlugin, parser),
    'flat/stylistic-type-checked-only': (0, stylistic_type_checked_only_2.default)(flatPlugin, parser),
};
Object.assign(plugin.configs, flatConfigs);
module.exports = {
    flatConfigs,
    parser,
    plugin,
};
//# sourceMappingURL=raw-plugin.js.map