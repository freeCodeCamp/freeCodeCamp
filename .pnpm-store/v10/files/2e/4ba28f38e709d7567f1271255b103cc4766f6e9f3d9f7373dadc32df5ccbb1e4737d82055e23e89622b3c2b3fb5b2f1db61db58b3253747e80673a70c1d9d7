# ESLint Compatibility Utilities

## Overview

This packages contains functions that allow you to wrap existing ESLint rules, plugins, and configurations that were intended for use with ESLint v8.x to allow them to work as-is in ESLint v9.x.

**Note:** All plugins are not guaranteed to work in ESLint v9.x. This package fixes the most common issues but can't fix everything.

## Installation

For Node.js and compatible runtimes:

```shell
npm install @eslint/compat -D
# or
yarn add @eslint/compat -D
# or
pnpm install @eslint/compat -D
# or
bun add @eslint/compat -D
```

For Deno:

```shell
deno add @eslint/compat
```

## Usage

This package exports the following functions in both ESM and CommonJS format:

- `fixupRule(rule)` - wraps the given rule in a compatibility layer and returns the result
- `fixupPluginRules(plugin)` - wraps each rule in the given plugin using `fixupRule()` and returns a new object that represents the plugin with the fixed-up rules
- `fixupConfigRules(configs)` - wraps all plugins found in an array of config objects using `fixupPluginRules()`
- `includeIgnoreFile(path)` - reads an ignore file (like `.gitignore`) and converts the patterns into the correct format for the config file

### Fixing Rules

If you have a rule that you'd like to make compatible with ESLint v9.x, you can do so using the `fixupRule()` function:

```js
// ESM example
import { fixupRule } from "@eslint/compat";

// Step 1: Import your rule
import myRule from "./local-rule.js";

// Step 2: Create backwards-compatible rule
const compatRule = fixupRule(myRule);

// Step 3 (optional): Export fixed rule
export default compatRule;
```

Or in CommonJS:

```js
// CommonJS example
const { fixupRule } = require("@eslint/compat");

// Step 1: Import your rule
const myRule = require("./local-rule.js");

// Step 2: Create backwards-compatible rule
const compatRule = fixupRule(myRule);

// Step 3 (optional): Export fixed rule
module.exports = compatRule;
```

### Fixing Plugins

If you are using a plugin in your `eslint.config.js` that is not yet compatible with ESLint 9.x, you can wrap it using the `fixupPluginRules()` function:

```js
// eslint.config.js - ESM example
import { defineConfig } from "eslint/config";
import { fixupPluginRules } from "@eslint/compat";
import somePlugin from "eslint-plugin-some-plugin";

export default defineConfig([
	{
		plugins: {
			// insert the fixed plugin instead of the original
			somePlugin: fixupPluginRules(somePlugin),
		},
		rules: {
			"somePlugin/rule-name": "error",
		},
	},
]);
```

Or in CommonJS:

```js
// eslint.config.js - CommonJS example
const { defineConfig } = require("eslint/config");
const { fixupPluginRules } = require("@eslint/compat");
const somePlugin = require("eslint-plugin-some-plugin");

module.exports = defineConfig([
	{
		plugins: {
			// insert the fixed plugin instead of the original
			somePlugin: fixupPluginRules(somePlugin),
		},
		rules: {
			"somePlugin/rule-name": "error",
		},
	},
]);
```

### Fixing Configs

If you are importing other configs into your `eslint.config.js` that use plugins that are not yet compatible with ESLint 9.x, you can wrap the entire array or a single object using the `fixupConfigRules()` function:

```js
// eslint.config.js - ESM example
import { defineConfig } from "eslint/config";
import { fixupConfigRules } from "@eslint/compat";
import someConfig from "eslint-config-some-config";

export default defineConfig([
	...fixupConfigRules(someConfig),
	{
		// your overrides
	},
]);
```

Or in CommonJS:

```js
// eslint.config.js - CommonJS example
const { defineConfig } = require("eslint/config");
const { fixupConfigRules } = require("@eslint/compat");
const someConfig = require("eslint-config-some-config");

module.exports = defineConfig([
	...fixupConfigRules(someConfig),
	{
		// your overrides
	},
]);
```

### Including Ignore Files

If you were using an alternate ignore file in ESLint v8.x, such as using `--ignore-path .gitignore` on the command line, you can include those patterns programmatically in your config file using the `includeIgnoreFile()` function.

The `includeIgnoreFile()` function also accepts a second optional `name` parameter that allows you to set a custom name for this configuration object. If not specified, it defaults to `"Imported .gitignore patterns"`. For example:

```js
// eslint.config.js - ESM example
import { defineConfig } from "eslint/config";
import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default defineConfig([
	includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"), // second argument is optional.
	{
		// your overrides
	},
]);
```

Or in CommonJS:

```js
// eslint.config.js - CommonJS example
const { defineConfig } = require("eslint/config");
const { includeIgnoreFile } = require("@eslint/compat");
const path = require("node:path");
const gitignorePath = path.resolve(__dirname, ".gitignore");

module.exports = defineConfig([
	includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"), // second argument is optional.
	{
		// your overrides
	},
]);
```

**Limitation:** This works without modification when the ignore file is in the same directory as your config file. If the ignore file is in a different directory, you may need to modify the patterns manually.

## License

Apache 2.0

<!-- NOTE: This section is autogenerated. Do not manually edit.-->
<!--sponsorsstart-->

## Sponsors

The following companies, organizations, and individuals support ESLint's ongoing maintenance and development. [Become a Sponsor](https://eslint.org/donate)
to get your logo on our READMEs and [website](https://eslint.org/sponsors).

<h3>Platinum Sponsors</h3>
<p><a href="https://automattic.com"><img src="https://images.opencollective.com/automattic/d0ef3e1/logo.png" alt="Automattic" height="128"></a> <a href="https://www.airbnb.com/"><img src="https://images.opencollective.com/airbnb/d327d66/logo.png" alt="Airbnb" height="128"></a></p><h3>Gold Sponsors</h3>
<p><a href="https://qlty.sh/"><img src="https://images.opencollective.com/qltysh/33d157d/logo.png" alt="Qlty Software" height="96"></a> <a href="https://trunk.io/"><img src="https://images.opencollective.com/trunkio/fb92d60/avatar.png" alt="trunk.io" height="96"></a> <a href="https://shopify.engineering/"><img src="https://avatars.githubusercontent.com/u/8085" alt="Shopify" height="96"></a></p><h3>Silver Sponsors</h3>
<p><a href="https://vite.dev/"><img src="https://images.opencollective.com/vite/e6d15e1/logo.png" alt="Vite" height="64"></a> <a href="https://liftoff.io/"><img src="https://images.opencollective.com/liftoff/5c4fa84/logo.png" alt="Liftoff" height="64"></a> <a href="https://americanexpress.io"><img src="https://avatars.githubusercontent.com/u/3853301" alt="American Express" height="64"></a> <a href="https://stackblitz.com"><img src="https://avatars.githubusercontent.com/u/28635252" alt="StackBlitz" height="64"></a></p><h3>Bronze Sponsors</h3>
<p><a href="https://syntax.fm"><img src="https://github.com/syntaxfm.png" alt="Syntax" height="32"></a> <a href="https://cybozu.co.jp/"><img src="https://images.opencollective.com/cybozu/933e46d/logo.png" alt="Cybozu" height="32"></a> <a href="https://sentry.io"><img src="https://github.com/getsentry.png" alt="Sentry" height="32"></a> <a href="https://icons8.com/"><img src="https://images.opencollective.com/icons8/7fa1641/logo.png" alt="Icons8" height="32"></a> <a href="https://discord.com"><img src="https://images.opencollective.com/discordapp/f9645d9/logo.png" alt="Discord" height="32"></a> <a href="https://www.gitbook.com"><img src="https://avatars.githubusercontent.com/u/7111340" alt="GitBook" height="32"></a> <a href="https://nx.dev"><img src="https://avatars.githubusercontent.com/u/23692104" alt="Nx" height="32"></a> <a href="https://opensource.mercedes-benz.com/"><img src="https://avatars.githubusercontent.com/u/34240465" alt="Mercedes-Benz Group" height="32"></a> <a href="https://herocoders.com"><img src="https://avatars.githubusercontent.com/u/37549774" alt="HeroCoders" height="32"></a> <a href="https://www.lambdatest.com"><img src="https://avatars.githubusercontent.com/u/171592363" alt="LambdaTest" height="32"></a></p>
<h3>Technology Sponsors</h3>
Technology sponsors allow us to use their products and services for free as part of a contribution to the open source ecosystem and our work.
<p><a href="https://netlify.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/netlify-icon.svg" alt="Netlify" height="32"></a> <a href="https://algolia.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/algolia-icon.svg" alt="Algolia" height="32"></a> <a href="https://1password.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/1password-icon.svg" alt="1Password" height="32"></a></p>
<!--sponsorsend-->
