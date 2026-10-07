# Config Array

## Description

A config array is a way of managing configurations that are based on glob pattern matching of filenames. Each config array contains the information needed to determine the correct configuration for any file based on the filename.

**Note:** This is a generic package that can be used outside of ESLint. It contains no ESLint-specific functionality.

## Installation

For Node.js and compatible runtimes:

```shell
npm install @eslint/config-array
# or
yarn add @eslint/config-array
# or
pnpm install @eslint/config-array
# or
bun add @eslint/config-array
```

For Deno:

```shell
deno add @eslint/config-array
```

## Background

The basic idea is that all configuration, including overrides, can be represented by a single array where each item in the array is a config object. Config objects appearing later in the array override config objects appearing earlier in the array. You can calculate a config for a given file by traversing all config objects in the array to find the ones that match the filename. Matching is done by specifying glob patterns in `files` and `ignores` properties on each config object. Here's an example:

```js
export default [
	// match all JSON files
	{
		name: "JSON Handler",
		files: ["**/*.json"],
		handler: jsonHandler,
	},

	// match only package.json
	{
		name: "package.json Handler",
		files: ["package.json"],
		handler: packageJsonHandler,
	},
];
```

In this example, there are two config objects: the first matches all JSON files in all directories and the second matches just `package.json` in the base path directory (all the globs are evaluated as relative to a base path that can be specified). When you retrieve a configuration for `foo.json`, only the first config object matches so `handler` is equal to `jsonHandler`; when you retrieve a configuration for `package.json`, `handler` is equal to `packageJsonHandler` (because both config objects match, the second one wins).

## Usage

First, import the `ConfigArray` constructor:

```js
import { ConfigArray } from "@eslint/config-array";

// or using CommonJS

const { ConfigArray } = require("@eslint/config-array");
```

When you create a new instance of `ConfigArray`, you must pass in two arguments: an array of configs and an options object. The array of configs is most likely read in from a configuration file, so here's a typical example:

```js
const configFilename = path.resolve(process.cwd(), "my.config.js");
const { default: rawConfigs } = await import(configFilename);
const configs = new ConfigArray(rawConfigs, {
	// the path to match filenames from
	basePath: process.cwd(),

	// additional items in each config
	schema: mySchema,
});
```

This example reads in an object or array from `my.config.js` and passes it into the `ConfigArray` constructor as the first argument. The second argument is an object specifying the `basePath` (the directory in which `my.config.js` is found) and a `schema` to define the additional properties of a config object beyond `files`, `ignores`, `basePath`, and `name`.

### Specifying a Schema

The `schema` option is required for you to use additional properties in config objects. The schema is an object that follows the format of an [`ObjectSchema`](https://npmjs.com/package/@eslint/object-schema). The schema specifies both validation and merge rules that the `ConfigArray` instance needs to combine configs when there are multiple matches. Here's an example:

```js
const configFilename = path.resolve(process.cwd(), "my.config.js");
const { default: rawConfigs } = await import(configFilename);

const mySchema = {

    // define the handler key in configs
    handler: {
        required: true,
        merge(a, b) {
            if (!b) return a;
            if (!a) return b;
        },
        validate(value) {
            if (typeof value !== "function") {
                throw new TypeError("Function expected.");
            }
        }
    }
};

const configs = new ConfigArray(rawConfigs, {

    // the path to match filenames from
    basePath: process.cwd(),

    // additional item schemas in each config
    schema: mySchema,

    // additional config types supported (default: [])
    extraConfigTypes: ["array", "function"];
});
```

### Config Arrays

Config arrays can be multidimensional, so it's possible for a config array to contain another config array when `extraConfigTypes` contains `"array"`, such as:

```js
export default [
	// JS config
	{
		files: ["**/*.js"],
		handler: jsHandler,
	},

	// JSON configs
	[
		// match all JSON files
		{
			name: "JSON Handler",
			files: ["**/*.json"],
			handler: jsonHandler,
		},

		// match only package.json
		{
			name: "package.json Handler",
			files: ["package.json"],
			handler: packageJsonHandler,
		},
	],

	// filename must match function
	{
		files: [filePath => filePath.endsWith(".md")],
		handler: markdownHandler,
	},

	// filename must match all patterns in subarray
	{
		files: [["*.test.*", "*.js"]],
		handler: jsTestHandler,
	},

	// filename must not match patterns beginning with !
	{
		name: "Non-JS files",
		files: ["!*.js"],
		settings: {
			js: false,
		},
	},

	// specific settings for files inside `src` directory
	{
		name: "Source files",
		basePath: "src",
		files: ["**/*"],
		settings: {
			source: true,
		},
	},
];
```

In this example, the array contains both config objects and a config array. When a config array is normalized (see details below), it is flattened so only config objects remain. However, the order of evaluation remains the same.

If the `files` array contains a function, then that function is called with the path of the file as it was passed in. The function is expected to return `true` if there is a match and `false` if not. (The `ignores` array can also contain functions.)

If the `files` array contains an item that is an array of strings and functions, then all patterns must match in order for the config to match. In the preceding examples, both `*.test.*` and `*.js` must match in order for the config object to be used.

If a pattern in the files array begins with `!` then it excludes that pattern. In the preceding example, any filename that doesn't end with `.js` will automatically get a `settings.js` property set to `false`.

You can also specify an `ignores` key that will force files matching those patterns to not be included. If the `ignores` key is in a config object without any other keys, then those ignores will always be applied; otherwise those ignores act as exclusions. Here's an example:

```js
export default [

    // Always ignored
    {
        ignores: ["**/.git/**", "**/node_modules/**"]
    },

    // .eslintrc.js file is ignored only when .js file matches
    {
        files: ["**/*.js"],
        ignores: [".eslintrc.js"]
        handler: jsHandler
    }
];
```

You can use negated patterns in `ignores` to exclude a file that was already ignored, such as:

```js
export default [
	// Ignore all JSON files except tsconfig.json
	{
		files: ["**/*"],
		ignores: ["**/*.json", "!tsconfig.json"],
	},
];
```

### Config Functions

Config arrays can also include config functions when `extraConfigTypes` contains `"function"`. A config function accepts a single parameter, `context` (defined by you), and must return either a config object or a config array (it cannot return another function). Config functions allow end users to execute code in the creation of appropriate config objects. Here's an example:

```js
export default [
	// JS config
	{
		files: ["**/*.js"],
		handler: jsHandler,
	},

	// JSON configs
	function (context) {
		return [
			// match all JSON files
			{
				name: context.name + " JSON Handler",
				files: ["**/*.json"],
				handler: jsonHandler,
			},

			// match only package.json
			{
				name: context.name + " package.json Handler",
				files: ["package.json"],
				handler: packageJsonHandler,
			},
		];
	},
];
```

When a config array is normalized, each function is executed and replaced in the config array with the return value.

**Note:** Config functions can also be async.

### Normalizing Config Arrays

Once a config array has been created and loaded with all of the raw config data, it must be normalized before it can be used. The normalization process goes through and flattens the config array as well as executing all config functions to get their final values.

To normalize a config array, call the `normalize()` method and pass in a context object:

```js
await configs.normalize({
	name: "MyApp",
});
```

The `normalize()` method returns a promise, so be sure to use the `await` operator. The config array instance is normalized in-place, so you don't need to create a new variable.

If you want to disallow async config functions, you can call `normalizeSync()` instead. This method is completely synchronous and does not require using the `await` operator as it does not return a promise:

```js
await configs.normalizeSync({
	name: "MyApp",
});
```

**Important:** Once a `ConfigArray` is normalized, it cannot be changed further. You can, however, create a new `ConfigArray` and pass in the normalized instance to create an unnormalized copy.

### Getting Config for a File

To get the config for a file, use the `getConfig()` method on a normalized config array and pass in the filename to get a config for:

```js
// pass in filename
const fileConfig = configs.getConfig(
	path.resolve(process.cwd(), "package.json"),
);
```

The config array always returns an object, even if there are no configs matching the given filename. You can then inspect the returned config object to determine how to proceed.

A few things to keep in mind:

- If a filename is not an absolute path, it will be resolved relative to the base path directory.
- The returned config object never has `files`, `ignores`, `basePath`, or `name` properties; the only properties on the object will be the other configuration options specified.
- The config array caches configs, so subsequent calls to `getConfig()` with the same filename will return in a fast lookup rather than another calculation.
- A config will only be generated if the filename matches an entry in a `files` key. A config will not be generated without matching a `files` key (configs without a `files` key are only applied when another config with a `files` key is applied; configs without `files` are never applied on their own). Any config with a `files` key entry that is `*` or ends with `/**` or `/*` will only be applied if another entry in the same `files` key matches or another config matches.

## Determining Ignored Paths

You can determine if a file is ignored by using the `isFileIgnored()` method and passing in the path of any file, as in this example:

```js
const ignored = configs.isFileIgnored("/foo/bar/baz.txt");
```

A file is considered ignored if any of the following is true:

- **It's parent directory is ignored.** For example, if `foo` is in `ignores`, then `foo/a.js` is considered ignored.
- **It has an ancestor directory that is ignored.** For example, if `foo` is in `ignores`, then `foo/baz/a.js` is considered ignored.
- **It matches an ignored file pattern.** For example, if `**/a.js` is in `ignores`, then `foo/a.js` and `foo/baz/a.js` are considered ignored.
- **If it matches an entry in `files` and also in `ignores`.** For example, if `**/*.js` is in `files` and `**/a.js` is in `ignores`, then `foo/a.js` and `foo/baz/a.js` are considered ignored.
- **The file is outside the `basePath`.** If the `basePath` is `/usr/me`, then `/foo/a.js` is considered ignored.

For directories, use the `isDirectoryIgnored()` method and pass in the path of any directory, as in this example:

```js
const ignored = configs.isDirectoryIgnored("/foo/bar/");
```

A directory is considered ignored if any of the following is true:

- **It's parent directory is ignored.** For example, if `foo` is in `ignores`, then `foo/baz` is considered ignored.
- **It has an ancestor directory that is ignored.** For example, if `foo` is in `ignores`, then `foo/bar/baz/a.js` is considered ignored.
- **It matches and ignored file pattern.** For example, if `**/a.js` is in `ignores`, then `foo/a.js` and `foo/baz/a.js` are considered ignored.
- **If it matches an entry in `files` and also in `ignores`.** For example, if `**/*.js` is in `files` and `**/a.js` is in `ignores`, then `foo/a.js` and `foo/baz/a.js` are considered ignored.
- **The file is outside the `basePath`.** If the `basePath` is `/usr/me`, then `/foo/a.js` is considered ignored.

**Important:** A pattern such as `foo/**` means that `foo` and `foo/` are _not_ ignored whereas `foo/bar` is ignored. If you want to ignore `foo` and all of its subdirectories, use the pattern `foo` or `foo/` in `ignores`.

## Caching Mechanisms

Each `ConfigArray` aggressively caches configuration objects to avoid unnecessary work. This caching occurs in two ways:

1. **File-based Caching.** For each filename that is passed into a method, the resulting config is cached against that filename so you're always guaranteed to get the same object returned from `getConfig()` whenever you pass the same filename in.
2. **Index-based Caching.** Whenever a config is calculated, the config elements that were used to create the config are also cached. So if a given filename matches elements 1, 5, and 7, the resulting config is cached with a key of `1,5,7`. That way, if another file is passed that matches the same config elements, the result is already known and doesn't have to be recalculated. That means two files that match all the same elements will return the same config from `getConfig()`.

## Acknowledgements

The design of this project was influenced by feedback on the ESLint RFC, and incorporates ideas from:

- Teddy Katz (@not-an-aardvark)
- Toru Nagashima (@mysticatea)
- Kai Cataldo (@kaicataldo)

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
<p><a href="https://syntax.fm"><img src="https://github.com/syntaxfm.png" alt="Syntax" height="32"></a> <a href="https://cybozu.co.jp/"><img src="https://images.opencollective.com/cybozu/933e46d/logo.png" alt="Cybozu" height="32"></a> <a href="https://sentry.io"><img src="https://github.com/getsentry.png" alt="Sentry" height="32"></a> <a href="https://discord.com"><img src="https://images.opencollective.com/discordapp/f9645d9/logo.png" alt="Discord" height="32"></a> <a href="https://www.gitbook.com"><img src="https://avatars.githubusercontent.com/u/7111340" alt="GitBook" height="32"></a> <a href="https://nx.dev"><img src="https://avatars.githubusercontent.com/u/23692104" alt="Nx" height="32"></a> <a href="https://opensource.mercedes-benz.com/"><img src="https://avatars.githubusercontent.com/u/34240465" alt="Mercedes-Benz Group" height="32"></a> <a href="https://herocoders.com"><img src="https://avatars.githubusercontent.com/u/37549774" alt="HeroCoders" height="32"></a> <a href="https://www.lambdatest.com"><img src="https://avatars.githubusercontent.com/u/171592363" alt="LambdaTest" height="32"></a></p>
<h3>Technology Sponsors</h3>
Technology sponsors allow us to use their products and services for free as part of a contribution to the open source ecosystem and our work.
<p><a href="https://netlify.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/netlify-icon.svg" alt="Netlify" height="32"></a> <a href="https://algolia.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/algolia-icon.svg" alt="Algolia" height="32"></a> <a href="https://1password.com"><img src="https://raw.githubusercontent.com/eslint/eslint.org/main/src/assets/images/techsponsors/1password-icon.svg" alt="1Password" height="32"></a></p>
<!--sponsorsend-->
