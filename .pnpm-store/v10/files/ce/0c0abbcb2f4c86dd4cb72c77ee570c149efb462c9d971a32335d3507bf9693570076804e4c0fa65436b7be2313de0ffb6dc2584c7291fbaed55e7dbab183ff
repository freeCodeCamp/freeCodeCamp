# Config Array

by [Nicholas C. Zakas](https://humanwhocodes.com)

If you find this useful, please consider supporting my work with a [donation](https://humanwhocodes.com/donate).

## Description

A config array is a way of managing configurations that are based on glob pattern matching of filenames. Each config array contains the information needed to determine the correct configuration for any file based on the filename. 

## Background

In 2019, I submitted an [ESLint RFC](https://github.com/eslint/rfcs/pull/9) proposing a new way of configuring ESLint. The goal was to streamline what had become an increasingly complicated configuration process. Over several iterations, this proposal was eventually born.

The basic idea is that all configuration, including overrides, can be represented by a single array where each item in the array is a config object. Config objects appearing later in the array override config objects appearing earlier in the array. You can calculate a config for a given file by traversing all config objects in the array to find the ones that match the filename. Matching is done by specifying glob patterns in `files` and `ignores` properties on each config object. Here's an example:

```js
export default [

    // match all JSON files
    {
        name: "JSON Handler",
        files: ["**/*.json"],
        handler: jsonHandler
    },

    // match only package.json
    {
        name: "package.json Handler",
        files: ["package.json"],
        handler: packageJsonHandler
    }
];
```

In this example, there are two config objects: the first matches all JSON files in all directories and the second matches just `package.json` in the base path directory (all the globs are evaluated as relative to a base path that can be specified). When you retrieve a configuration for `foo.json`, only the first config object matches so `handler` is equal to `jsonHandler`; when you retrieve a configuration for `package.json`, `handler` is equal to `packageJsonHandler` (because both config objects match, the second one wins).

## Installation

You can install the package using npm or Yarn:

```bash
npm install @humanwhocodes/config-array --save

# or

yarn add @humanwhocodes/config-array
```

## Usage

First, import the `ConfigArray` constructor:

```js
import { ConfigArray } from "@humanwhocodes/config-array";

// or using CommonJS

const { ConfigArray } = require("@humanwhocodes/config-array");
```

When you create a new instance of `ConfigArray`, you must pass in two arguments: an array of configs and an options object. The array of configs is most likely read in from a configuration file, so here's a typical example:

```js
const configFilename = path.resolve(process.cwd(), "my.config.js");
const { default: rawConfigs } = await import(configFilename);
const configs = new ConfigArray(rawConfigs, {
    
    // the path to match filenames from
    basePath: process.cwd(),

    // additional items in each config
    schema: mySchema
});
```

This example reads in an object or array from `my.config.js` and passes it into the `ConfigArray` constructor as the first argument. The second argument is an object specifying the `basePath` (the directoy in which `my.config.js` is found) and a `schema` to define the additional properties of a config object beyond `files`, `ignores`, and `name`.

### Specifying a Schema

The `schema` option is required for you to use additional properties in config objects. The schema is object that follows the format of an [`ObjectSchema`](https://npmjs.com/package/@humanwhocodes/object-schema). The schema specifies both validation and merge rules that the `ConfigArray` instance needs to combine configs when there are multiple matches. Here's an example:

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

    // additional items in each config
    schema: mySchema
});
```

### Config Arrays

Config arrays can be multidimensional, so it's possible for a config array to contain another config array, such as:

```js
export default [
    
    // JS config
    {
        files: ["**/*.js"],
        handler: jsHandler
    },

    // JSON configs
    [

        // match all JSON files
        {
            name: "JSON Handler",
            files: ["**/*.json"],
            handler: jsonHandler
        },

        // match only package.json
        {
            name: "package.json Handler",
            files: ["package.json"],
            handler: packageJsonHandler
        }
    ],

    // filename must match function
    {
        files: [ filePath => filePath.endsWith(".md") ],
        handler: markdownHandler
    },

    // filename must match all patterns in subarray
    {
        files: [ ["*.test.*", "*.js"] ],
        handler: jsTestHandler
    },

    // filename must not match patterns beginning with !
    {
        name: "Non-JS files",
        files: ["!*.js"],
        settings: {
            js: false
        }
    }
];
```

In this example, the array contains both config objects and a config array. When a config array is normalized (see details below), it is flattened so only config objects remain. However, the order of evaluation remains the same.

If the `files` array contains a function, then that function is called with the absolute path of the file and is expected to return `true` if there is a match and `false` if not. (The `ignores` array can also contain functions.)

If the `files` array contains an item that is an array of strings and functions, then all patterns must match in order for the config to match. In the preceding examples, both `*.test.*` and `*.js` must match in order for the config object to be used.

If a pattern in the files array begins with `!` then it excludes that pattern. In the preceding example, any filename that doesn't end with `.js` will automatically getting a `settings.js` property set to `false`.

### Config Functions

Config arrays can also include config functions. A config function accepts a single parameter, `context` (defined by you), and must return either a config object or a config array (it cannot return another function). Config functions allow end users to execute code in the creation of appropriate config objects. Here's an example:

```js
export default [
    
    // JS config
    {
        files: ["**/*.js"],
        handler: jsHandler
    },

    // JSON configs
    function (context) {
        return [

            // match all JSON files
            {
                name: context.name + " JSON Handler",
                files: ["**/*.json"],
                handler: jsonHandler
            },

            // match only package.json
            {
                name: context.name + " package.json Handler",
                files: ["package.json"],
                handler: packageJsonHandler
            }
        ];
    }
];
```

When a config array is normalized, each function is executed and replaced in the config array with the return value.

**Note:** Config functions cannot be async. This will be added in a future version.

### Normalizing Config Arrays

Once a config array has been created and loaded with all of the raw config data, it must be normalized before it can be used. The normalization process goes through and flattens the config array as well as executing all config functions to get their final values.

To normalize a config array, call the `normalize()` method and pass in a context object:

```js
await configs.normalize({
    name: "MyApp"
});
```

The `normalize()` method returns a promise, so be sure to use the `await` operator. The config array instance is normalized in-place, so you don't need to create a new variable.

**Important:** Once a `ConfigArray` is normalized, it cannot be changed further. You can, however, create a new `ConfigArray` and pass in the normalized instance to create an unnormalized copy.

### Getting Config for a File

To get the config for a file, use the `getConfig()` method on a normalized config array and pass in the filename to get a config for:

```js
// pass in absolute filename
const fileConfig = configs.getConfig(path.resolve(process.cwd(), "package.json"));
```

The config array always returns an object, even if there are no configs matching the given filename. You can then inspect the returned config object to determine how to proceed.

A few things to keep in mind:

* You must pass in the absolute filename to get a config for.
* The returned config object never has `files`, `ignores`, or `name` properties; the only properties on the object will be the other configuration options specified.
* The config array caches configs, so subsequent calls to `getConfig()` with the same filename will return in a fast lookup rather than another calculation.

## Acknowledgements

The design of this project was influenced by feedback on the ESLint RFC, and incorporates ideas from:

* Teddy Katz (@not-an-aardvark)
* Toru Nagashima (@mysticatea)
* Kai Cataldo (@kaicataldo)

## License

Apache 2.0
