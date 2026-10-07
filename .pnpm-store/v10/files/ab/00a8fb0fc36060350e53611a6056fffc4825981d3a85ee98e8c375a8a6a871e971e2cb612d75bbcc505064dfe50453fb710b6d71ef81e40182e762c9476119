<div align="center">

<h1>Fork TS Checker Webpack Plugin</h1>
<p>Webpack plugin that runs TypeScript type checker on a separate process.</p>

[![npm version](https://img.shields.io/npm/v/fork-ts-checker-webpack-plugin.svg)](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin)
[![build status](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/workflows/CI/CD/badge.svg?branch=main&event=push)](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/actions?query=branch%3Amain+event%3Apush)
[![downloads](http://img.shields.io/npm/dm/fork-ts-checker-webpack-plugin.svg)](https://npmjs.org/package/fork-ts-checker-webpack-plugin)
[![commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

</div>

## Features

 * Speeds up [TypeScript](https://github.com/Microsoft/TypeScript) type checking and [ESLint](https://eslint.org/) linting (by moving each to a separate process) 🏎
 * Supports modern TypeScript features like [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) and [incremental mode](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#faster-subsequent-builds-with-the---incremental-flag) ✨
 * Supports [Vue Single File Component](https://vuejs.org/v2/guide/single-file-components.html) ✅ 
 * Displays nice error messages with the [code frame](https://babeljs.io/docs/en/next/babel-code-frame.html) formatter 🌈

## Installation

This plugin requires minimum **Node.js 10**, **Webpack 4**, **TypeScript 2.7** and optionally **ESLint 6**

* If you depend on **Webpack 2**, **Webpack 3**, or **TSLint 4**, please use [version 3](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/tree/v3.1.1) of the plugin. 
* If you depend on **TypeScript >= 2.1** and **< 2.7** or you can't update to **Node 10**, please use [version 4](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/tree/v4.1.4) of the plugin.
```sh
# with npm
npm install --save-dev fork-ts-checker-webpack-plugin

# with yarn
yarn add --dev fork-ts-checker-webpack-plugin
```

The minimal webpack config (with [ts-loader](https://github.com/TypeStrong/ts-loader))

```js
// webpack.config.js
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  context: __dirname, // to automatically find tsconfig.json
  entry: './src/index.ts',
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};
```

> Examples how to configure it with [babel-loader](https://github.com/babel/babel-loader), [ts-loader](https://github.com/TypeStrong/ts-loader),
> [eslint](https://github.com/eslint/eslint) and [Visual Studio Code](https://code.visualstudio.com/) are in the 
> [**examples**](./examples) directory.

## Modules resolution

It's very important to be aware that **this plugin uses [TypeScript](https://github.com/Microsoft/TypeScript)'s, not
[webpack](https://github.com/webpack/webpack)'s modules resolution**. It means that you have to setup `tsconfig.json` correctly. 

> It's because of the performance - with TypeScript's module resolution we don't have to wait for webpack to compile files.
>
> To debug TypeScript's modules resolution, you can use `tsc --traceResolution` command.

## ESLint

If you'd like to use ESLint with the plugin, ensure you have the relevant dependencies installed:

```sh
# with npm
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

# with yarn
yarn add --dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Then set up ESLint in the plugin. This is the minimal configuration:
```js
// webpack.config.js
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  // ...the webpack configuration
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
      }
    })
  ]
};
```

You should also have an ESLint configuration file in your root project directory. 
Here is a sample `.eslintrc.js` configuration for a TypeScript project:

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // place to specify ESLint rules - can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  }
};
```

There's a [good explanation on setting up TypeScript ESLint support by Robert Cooper](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb).

## Options

This plugin uses [`cosmiconfig`](https://github.com/davidtheclark/cosmiconfig). This means that besides the plugin constructor,
you can place your configuration in the:
 * `"fork-ts-checker"` field in the `package.json`
 * `.fork-ts-checkerrc` file in JSON or YAML format
 * `fork-ts-checker.config.js` file exporting a JS object
  
Options passed to the plugin constructor will overwrite options from the cosmiconfig (using [deepmerge](https://github.com/TehShrike/deepmerge)).

| Name              | Type                               | Default value                                                      | Description |
| ----------------- | ---------------------------------- | ------------------------------------------------------------------ | ----------- |
| `async`           | `boolean`                          | `compiler.options.mode === 'development'`                          | If `true`, reports issues **after** webpack's compilation is done. Thanks to that it doesn't block the compilation. Used only in the `watch` mode. |
| `typescript`      | `object` or `boolean`              | `true`                                                             | If a `boolean`, it enables/disables TypeScript checker. If an `object`, see [TypeScript options](#typescript-options). |
| `eslint`          | `object`                           | `undefined`                                                        | If `undefined`, it disables ESLint linter. If an `object`, see [ESLint options](#eslint-options). |
| `issue`           | `object`                           | `{}`                                                               | See [Issues options](#issues-options). |
| `formatter`       | `string` or `object` or `function` | `codeframe`                                                        | Available formatters are `basic`, `codeframe` and a custom `function`. To [configure](https://babeljs.io/docs/en/babel-code-frame#options) `codeframe` formatter, pass object: `{ type: 'codeframe', options: { <coderame options> } }`. |
| `logger`          | `object`              | `{ infrastructure: 'silent', issues: 'console', devServer: true }` | Available loggers are `silent`, `console`, and `webpack-infrastructure`. Infrastructure logger prints additional information, issue logger prints `issues` in the `async` mode. If `devServer` is set to `false`, errors will not be reported to Webpack Dev Server. |

### TypeScript options

Options for the TypeScript checker (`typescript` option object).

| Name                 | Type      | Default value                                                                                                  | Description |
| -------------------- | --------- | -------------------------------------------------------------------------------------------------------------- | ----------- |
| `enabled`            | `boolean` | `true`                                                                                                         | If `true`, it enables TypeScript checker. |
| `memoryLimit`        | `number`  | `2048`                                                                                                         | Memory limit for the checker process in MB. If the process exits with the allocation failed error, try to increase this number. |
| `configFile`         | `string`  | `'tsconfig.json'`                                                                                              | Path to the `tsconfig.json` file (path relative to the `compiler.options.context` or absolute path) |
| `configOverwrite`    | `object`  | `{ compilerOptions: { skipLibCheck: true, sourceMap: false, inlineSourceMap: false, declarationMap: false } }` | This configuration will overwrite configuration from the `tsconfig.json` file. Supported fields are: `extends`, `compilerOptions`, `include`, `exclude`, `files`, and `references`. |
| `context`            | `string`  | `dirname(configuration.configFile)`                                                                            | The base path for finding files specified in the `tsconfig.json`. Same as the `context` option from the [ts-loader](https://github.com/TypeStrong/ts-loader#context). Useful if you want to keep your `tsconfig.json` in an external package. Keep in mind that **not** having a `tsconfig.json` in your project root can cause different behaviour between `fork-ts-checker-webpack-plugin` and `tsc`. When using editors like `VS Code` it is advised to add a `tsconfig.json` file to the root of the project and extend the config file referenced in option `configFile`.  |
| `build`              | `boolean` | `false`                                                                                                        | The equivalent of the `--build` flag for the `tsc` command. |
| `mode`               | `'readonly'` or `'write-tsbuildinfo'` or `'write-dts'` or `'write-references'` | `'write-tsbuildinfo'`                                      | If you use the `babel-loader`, it's recommended to use `write-references` mode to improve initial compilation time. If you use `ts-loader`, it's recommended to use `write-tsbuildinfo` mode to not overwrite files emitted by the `ts-loader`. If you use `ts-loader` with `transpileOnly` flag set to `true`, use `'write-dts` to emit the type definition files. |
| `diagnosticOptions` | `object`  | `{ syntactic: false, semantic: true, declaration: false, global: false }`                                      | Settings to select which diagnostics do we want to perform. |
| `extensions`         | `object`  | `{}`                                                                                                           | See [TypeScript extensions options](#typescript-extensions-options). |
| `profile`            | `boolean` | `false`                                                                                                        | Measures and prints timings related to the TypeScript performance. |
| `typescriptPath`     | `string`  | `require.resolve('typescript')`                                                                                | If supplied this is a custom path where TypeScript can be found. |

#### TypeScript extensions options

Options for the TypeScript checker extensions (`typescript.extensions` option object).

| Name                 | Type                  | Default value             | Description |
| -------------------- | --------------------- | ------------------------- | ----------- |
| `vue`                | `object` or `boolean` | `false`                   | If `true`, it enables Vue [Single File Component](https://vuejs.org/v2/guide/single-file-components.html) support. |
| `vue.enabled`        | `boolean`             | `false`                   | Same as the `vue` option |
| `vue.compiler`       | `string`              | `'vue-template-compiler'` | The package name of the compiler that will be used to parse `.vue` files. You can use `'nativescript-vue-template-compiler'` if you use [nativescript-vue](https://github.com/nativescript-vue/nativescript-vue) | 

### ESLint options

Options for the ESLint linter (`eslint` option object).

| Name                 | Type                   | Default value             | Description |
| -------------------- | ---------------------- | ------------------------- | ----------- |
| `enabled`            | `boolean`              | `false`                   | If `true`, it enables ESLint linter. If you set the `files` option, it will be `true` by default. |
| `files`              | `string` or `string[]` | This value is required    | One or more [glob patterns](https://en.wikipedia.org/wiki/Glob_(programming)) to the files that should be linted. Works the same as the `eslint` command. |
| `memoryLimit`        | `number`               | `2048`                    | Memory limit for the linter process in MB. If the process exits with the allocation failed error, try to increase this number. |
| `options`            | `object`               | `{}`                      | [Options](https://eslint.org/docs/developer-guide/nodejs-api#cliengine) that can be used to initialize ESLint. |

### Issues options

Options for the issues filtering (`issue` option object).
I could write some plain text explanation of these options but I think code will explain it better:

```typescript
interface Issue {
  origin: 'typescript' | 'eslint';
  severity: 'error' | 'warning';
  code: string;
  file?: string;
}

type IssueMatch = Partial<Issue>; // file field supports glob matching
type IssuePredicate = (issue: Issue) => boolean;
type IssueFilter = IssueMatch | IssuePredicate | (IssueMatch | IssuePredicate)[];
```

| Name      | Type          | Default value | Description |
| --------- | ------------- | ------------- | ----------- |
| `include` | `IssueFilter` | `undefined`   | If `object`, defines issue properties that should be [matched](./src/issue/IssueMatch.ts). If `function`, acts as a predicate where `issue` is an argument. |
| `exclude` | `IssueFilter` | `undefined`   | Same as `include` but issues that match this predicate will be excluded. |

<details>
<summary>Expand example</summary>

Include issues from the `src` directory, exclude eslint issues from `.spec.ts` files:

```js
module.exports = {
  // ...the webpack configuration
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      issue: {
        include: [
          { file: '**/src/**/*' }
        ],
        exclude: [
          { origin: 'eslint', file: '**/*.spec.ts' }
        ]
      }
    })
  ]
};
```

</details>

## Vue.js

⚠️ There are additional **constraints** regarding Vue.js Single File Component support: ⚠️
 * It requires **TypeScript >= 3.8.0** (it's a limitation of the `transpileOnly` mode from `ts-loader`)
 * It doesn't work with the `build` mode (project references)

To enable Vue.js support, follow these steps:

<details>
<summary>Expand Vue.js set up instruction</summary>

1. Ensure you have all required packages installed:
```sh
# with npm
npm install --save vue vue-class-component
npm install --save-dev vue-loader ts-loader css-loader vue-template-compiler 

# with yarn
yarn add vue vue-class-component
yarn add --dev vue-loader ts-loader css-loader vue-template-compiler 
```

2. Add `tsconfig.json` configuration:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "jsx": "preserve",
    "target": "ES5",
    "lib": ["ES6", "DOM"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "~/*": ["src/*"]
    },
    "sourceMap": true,
    "importsNotUsedAsValues": "preserve"
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.vue"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

3. Add `webpack.config.js` configuration:
```js
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        }
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './src'),
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        extensions: {
          vue: true
        }
      }
    })
  ]
};
```

4. Add `src/types/vue.d.ts` file to shim `.vue` modules:
```typescript
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
```

5. If you are working in VSCode, you can get the [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) extension to complete the developer workflow.

</details>

## Plugin hooks

This plugin provides some custom webpack hooks:

| Hook key   | Type                       | Params                | Description |
| ---------- | -------------------------- | --------------------- | ----------- |
| `start`    | `AsyncSeriesWaterfallHook` | `change, compilation` | Starts issues checking for a compilation. It's an async waterfall hook, so you can modify the list of changed and removed files or delay the start of the service. |
| `waiting`  | `SyncHook`                 | `compilation`         | Waiting for the issues checking. |
| `canceled` | `SyncHook`                 | `compilation`         | Issues checking for the compilation has been canceled. |
| `error`    | `SyncHook`                 | `compilation`         | An error occurred during issues checking. |
| `issues`   | `SyncWaterfallHook`        | `issues, compilation` | Issues have been received and will be reported. It's a waterfall hook, so you can modify the list of received issues. |

To access plugin hooks and tap into the event, we need to use the `getCompilerHooks` static method.
When we call this method with a [webpack compiler instance](https://webpack.js.org/api/node/), it returns the object with
[tapable](https://github.com/webpack/tapable) hooks where you can pass in your callbacks.

```js
// ./src/webpack/MyWebpackPlugin.js
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

class MyWebpackPlugin {
  apply(compiler) {
    const hooks = ForkTsCheckerWebpackPlugin.getCompilerHooks(compiler);

    // log some message on waiting
    hooks.waiting.tap('MyPlugin', () => {
      console.log('waiting for issues');
    });
    // don't show warnings
    hooks.issues.tap('MyPlugin', (issues) => 
      issues.filter((issue) => issue.severity === 'error')
    );
  }
}

module.exports = MyWebpackPlugin;

// webpack.config.js
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MyWebpackPlugin = require('./src/webpack/MyWebpackPlugin');

module.exports = {
  /* ... */
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new MyWebpackPlugin()
  ]
};
```

## Typings

To use the plugin typings, you have to install `@types/webpack`. It's not included by default to not collide with your
existing typings (`@types/webpack` imports `@types/node`). [It's an old TypeScript issue](https://github.com/microsoft/TypeScript/issues/18588), 
the alternative is to set `skipLibCheck: true` in the `compilerOptions` 😉
```sh
# with npm
npm install --save-dev @types/webpack

# with yarn
yarn add --dev @types/webpack
```

## Profiling types resolution

Starting from TypeScript 4.1.0, you can profile long type checks by
setting "generateTrace" compiler option. This is an instruction from [microsoft/TypeScript#40063](https://github.com/microsoft/TypeScript/pull/40063):

1. Set "generateTrace": "{folderName}" in your `tsconfig.json`
2. Look in the resulting folder. If you used build mode, there will be a `legend.json` telling you what went where. 
   Otherwise, there will be `trace.json` file and `types.json` files.
3. Navigate to [edge://tracing](edge://tracing) or [chrome://tracing](chrome://tracing) and load `trace.json`
4. Expand Process 1 with the little triangle in the left sidebar
5. Click on different blocks to see their payloads in the bottom pane
6. Open `types.json` in an editor
7. When you see a type ID in the tracing output, go-to-line {id} to find data about that type


## Related projects
 
 * [`ts-loader`](https://github.com/TypeStrong/ts-loader) - TypeScript loader for webpack.
 * [`babel-loader`](https://github.com/babel/babel-loader) - Alternative TypeScript loader for webpack.
 * [`fork-ts-checker-notifier-webpack-plugin`](https://github.com/johnnyreilly/fork-ts-checker-notifier-webpack-plugin) - Notifies about build status using system notifications (similar to the [webpack-notifier](https://github.com/Turbo87/webpack-notifier)).

## Credits

This plugin was created in [Realytics](https://www.realytics.io/) in 2017. Thank you for supporting Open Source.

## License

MIT License
