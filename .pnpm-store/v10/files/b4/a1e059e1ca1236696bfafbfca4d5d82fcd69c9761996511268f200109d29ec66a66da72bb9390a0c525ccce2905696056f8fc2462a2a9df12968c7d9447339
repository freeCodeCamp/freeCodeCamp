"use strict";
/* eslint-disable import/first -- intentionally executing code before rest of the require()s. This will not work with ESM. */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.globs = exports.extensions = exports.config = exports.configs = exports.plugin = exports.parser = void 0;
const ts = __importStar(require("typescript"));
const [versionMajor, _versionMinor] = ts.versionMajorMinor
    .split('.')
    .map(Number);
if (versionMajor >= 7) {
    // eslint-disable-next-line no-console
    console.error([
        'typescript-eslint does not support TS 7.0.',
        'Please see https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0 to run typescript-eslint using the TS 6 API.',
        "See also https://github.com/typescript-eslint/typescript-eslint/issues/10940 for tracking typescript-eslint's support for TS >=7.1",
    ].join('\n'));
    throw new Error('typescript-eslint does not support TS 7.0.');
}
const eslint_plugin_1 = __importDefault(require("@typescript-eslint/eslint-plugin"));
const raw_plugin_1 = __importDefault(require("@typescript-eslint/eslint-plugin/use-at-your-own-risk/raw-plugin"));
const typescript_estree_1 = require("@typescript-eslint/typescript-estree");
const config_helper_1 = require("./config-helper");
const getTSConfigRootDirFromStack_1 = require("./getTSConfigRootDirFromStack");
const globs_1 = require("./globs");
exports.parser = raw_plugin_1.default.parser;
/*
we could build a plugin object here without the `configs` key - but if we do
that then we create a situation in which
```
require('typescript-eslint').plugin !== require('@typescript-eslint/eslint-plugin')
```

This is bad because it means that 3rd party configs would be required to use
`typescript-eslint` or else they would break a user's config if the user either
used `tseslint.configs.recommended` et al or
```
{
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
}
```

This might be something we could consider okay (eg 3rd party flat configs must
use our new package); however legacy configs consumed via `@eslint/eslintrc`
would never be able to satisfy this constraint and thus users would be blocked
from using them.
*/
exports.plugin = eslint_plugin_1.default;
exports.configs = createConfigsGetters({
    /**
     * Enables each the rules provided as a part of typescript-eslint. Note that many rules are not applicable in all codebases, or are meant to be configured.
     * @see {@link https://typescript-eslint.io/users/configs#all}
     */
    all: raw_plugin_1.default.flatConfigs['flat/all'],
    /**
     * A minimal ruleset that sets only the required parser and plugin options needed to run typescript-eslint.
     * We don't recommend using this directly; instead, extend from an earlier recommended rule.
     * @see {@link https://typescript-eslint.io/users/configs#base}
     */
    base: raw_plugin_1.default.flatConfigs['flat/base'],
    /**
     * A utility ruleset that will disable type-aware linting and all type-aware rules available in our project.
     * @see {@link https://typescript-eslint.io/users/configs#disable-type-checked}
     */
    disableTypeChecked: raw_plugin_1.default.flatConfigs['flat/disable-type-checked'],
    /**
     * This is a compatibility ruleset that:
     * - disables rules from eslint:recommended which are already handled by TypeScript.
     * - enables rules that make sense due to TS's typechecking / transpilation.
     * @see {@link https://typescript-eslint.io/users/configs/#eslint-recommended}
     */
    eslintRecommended: raw_plugin_1.default.flatConfigs['flat/eslint-recommended'],
    /**
     * Recommended rules for code correctness that you can drop in without additional configuration.
     * @see {@link https://typescript-eslint.io/users/configs#recommended}
     */
    recommended: raw_plugin_1.default.flatConfigs['flat/recommended'],
    /**
     * Contains all of `recommended` along with additional recommended rules that require type information.
     * @see {@link https://typescript-eslint.io/users/configs#recommended-type-checked}
     */
    recommendedTypeChecked: raw_plugin_1.default.flatConfigs['flat/recommended-type-checked'],
    /**
     * A version of `recommended` that only contains type-checked rules and disables of any corresponding core ESLint rules.
     * @see {@link https://typescript-eslint.io/users/configs#recommended-type-checked-only}
     */
    recommendedTypeCheckedOnly: raw_plugin_1.default.flatConfigs['flat/recommended-type-checked-only'],
    /**
     * Contains all of `recommended`, as well as additional strict rules that can also catch bugs.
     * @see {@link https://typescript-eslint.io/users/configs#strict}
     */
    strict: raw_plugin_1.default.flatConfigs['flat/strict'],
    /**
     * Contains all of `recommended`, `recommended-type-checked`, and `strict`, along with additional strict rules that require type information.
     * @see {@link https://typescript-eslint.io/users/configs#strict-type-checked}
     */
    strictTypeChecked: raw_plugin_1.default.flatConfigs['flat/strict-type-checked'],
    /**
     * A version of `strict` that only contains type-checked rules and disables of any corresponding core ESLint rules.
     * @see {@link https://typescript-eslint.io/users/configs#strict-type-checked-only}
     */
    strictTypeCheckedOnly: raw_plugin_1.default.flatConfigs['flat/strict-type-checked-only'],
    /**
     * Rules considered to be best practice for modern TypeScript codebases, but that do not impact program logic.
     * @see {@link https://typescript-eslint.io/users/configs#stylistic}
     */
    stylistic: raw_plugin_1.default.flatConfigs['flat/stylistic'],
    /**
     * Contains all of `stylistic`, along with additional stylistic rules that require type information.
     * @see {@link https://typescript-eslint.io/users/configs#stylistic-type-checked}
     */
    stylisticTypeChecked: raw_plugin_1.default.flatConfigs['flat/stylistic-type-checked'],
    /**
     * A version of `stylistic` that only contains type-checked rules and disables of any corresponding core ESLint rules.
     * @see {@link https://typescript-eslint.io/users/configs#stylistic-type-checked-only}
     */
    stylisticTypeCheckedOnly: raw_plugin_1.default.flatConfigs['flat/stylistic-type-checked-only'],
});
function createConfigsGetters(values) {
    const configs = {};
    Object.defineProperties(configs, Object.fromEntries(Object.entries(values).map(([key, value]) => [
        key,
        {
            enumerable: true,
            get: () => {
                const candidateRootDir = (0, getTSConfigRootDirFromStack_1.getTSConfigRootDirFromStack)();
                if (candidateRootDir) {
                    (0, typescript_estree_1.addCandidateTSConfigRootDir)(candidateRootDir);
                }
                return value;
            },
        },
    ])));
    return configs;
}
/*
we do both a default and named exports to allow people to use this package from
both CJS and ESM in very natural ways.

EG it means that all of the following are valid:

```ts
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...tseslint.configs.recommended,
);
```
```ts
import { config, parser, plugin } from 'typescript-eslint';

export default config(
  {
    languageOptions: { parser }
    plugins: { ts: plugin },
  }
);
```
```ts
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  ...tseslint.configs.recommended,
);
```
```ts
const { config, parser, plugin } = require('typescript-eslint');

module.exports = config(
  {
    languageOptions: { parser }
    plugins: { ts: plugin },
  }
);
```
*/
exports.default = {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    config: config_helper_1.config,
    configs: exports.configs,
    extensions: globs_1.extensions,
    globs: globs_1.globs,
    parser: exports.parser,
    plugin: exports.plugin,
};
var config_helper_2 = require("./config-helper");
// eslint-disable-next-line @typescript-eslint/no-deprecated
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return config_helper_2.config; } });
var globs_2 = require("./globs");
Object.defineProperty(exports, "extensions", { enumerable: true, get: function () { return globs_2.extensions; } });
Object.defineProperty(exports, "globs", { enumerable: true, get: function () { return globs_2.globs; } });
//# sourceMappingURL=index.js.map