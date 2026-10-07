"use strict";
// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// SEE https://typescript-eslint.io/users/configs
//
// For developers working in the typescript-eslint monorepo:
// You can regenerate it using `pnpm run generate-configs`
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("./base"));
const eslint_recommended_1 = __importDefault(require("./eslint-recommended"));
/**
 * A version of `stylistic` that only contains type-checked rules and disables of any corresponding core ESLint rules.
 * @see {@link https://typescript-eslint.io/users/configs#stylistic-type-checked-only}
 */
exports.default = (plugin, parser) => [
    (0, base_1.default)(plugin, parser),
    (0, eslint_recommended_1.default)(plugin, parser),
    {
        name: 'typescript-eslint/stylistic-type-checked-only',
        rules: {
            'dot-notation': 'off',
            '@typescript-eslint/dot-notation': 'error',
            '@typescript-eslint/non-nullable-type-assertion-style': 'error',
            '@typescript-eslint/prefer-find': 'error',
            '@typescript-eslint/prefer-includes': 'error',
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/prefer-regexp-exec': 'error',
            '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        },
    },
];
//# sourceMappingURL=stylistic-type-checked-only.js.map