"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_recommended_raw_1 = __importDefault(require("../eslint-recommended-raw"));
/**
 * This is a compatibility ruleset that:
 * - disables rules from eslint:recommended which are already handled by TypeScript.
 * - enables rules that make sense due to TS's typechecking / transpilation.
 * @see {@link https://typescript-eslint.io/users/configs/#eslint-recommended}
 */
exports.default = (_plugin, _parser) => ({
    ...(0, eslint_recommended_raw_1.default)('minimatch'),
    name: 'typescript-eslint/eslint-recommended',
});
//# sourceMappingURL=eslint-recommended.js.map