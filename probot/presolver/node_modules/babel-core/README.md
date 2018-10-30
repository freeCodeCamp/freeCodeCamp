# babel-core

> Babel compiler core.


```javascript
var babel = require("babel-core");
import { transform } from 'babel-core';
import * as babel from 'babel-core';
```

All transformations will use your local configuration files (.babelrc or in package.json). See [options](#options) to disable it.

## babel.transform(code: string, [options?](#options): Object)

Transforms the passed in `code`. Returning an object with the generated code,
source map, and AST.

```js
babel.transform(code, options) // => { code, map, ast }
```

**Example**

```js
var result = babel.transform("code();", options);
result.code;
result.map;
result.ast;
```

## babel.transformFile(filename: string, [options?](#options): Object, callback: Function)

Asynchronously transforms the entire contents of a file.

```js
babel.transformFile(filename, options, callback)
```

**Example**

```js
babel.transformFile("filename.js", options, function (err, result) {
  result; // => { code, map, ast }
});
```

## babel.transformFileSync(filename: string, [options?](#options): Object)

Synchronous version of `babel.transformFile`. Returns the transformed contents of
the `filename`.

```js
babel.transformFileSync(filename, options) // => { code, map, ast }
```

**Example**

```js
babel.transformFileSync("filename.js", options).code;
```

## babel.transformFromAst(ast: Object, code?: string, [options?](#options): Object)

Given, an [AST](https://astexplorer.net/), transform it.

```js
const code = "if (true) return;";
const ast = babylon.parse(code, { allowReturnOutsideFunction: true });
const { code, map, ast } = babel.transformFromAst(ast, code, options);
```

## Options

> #### Babel CLI
> 
> You can pass these options from the Babel CLI like so:
> 
> `babel --name=value`

Following is a table of the options you can use:

| Option                   | Default              | Description                     |
| ------------------------ | -------------------- | ------------------------------- |
| `ast`                    | `true`               | Include the AST in the returned object |
| `auxiliaryCommentAfter`  | `null`               | Attach a comment after all non-user injected code. |
| `auxiliaryCommentBefore` | `null`               | Attach a comment before all non-user injected code. |
| `babelrc`                | `true`               | Specify whether or not to use .babelrc and .babelignore files. Not available when using the CLI, [use `--no-babelrc` instead](https://babeljs.io/docs/en/babel-cli#ignoring-babelrc). |
| `code`                   | `true`               | Enable code generation |
| `comments`               | `true`               | Output comments in generated output. |
| `compact`                | `"auto"`             | Do not include superfluous whitespace characters and line terminators. When set to `"auto"` compact is set to `true` on input sizes of >500KB. |
| `env`                    | `{}`                 | This is an object of keys that represent different environments. For example, you may have: `{ env: { production: { /* specific options */ } } }` which will use those options when the environment variable `BABEL_ENV` is set to `"production"`. If `BABEL_ENV` isn't set then `NODE_ENV` will be used, if it's not set then it defaults to `"development"` |
| `extends`                | `null`               | A path to an `.babelrc` file to extend |
| `filename`               | `"unknown"`          | Filename for use in errors etc. |
| `filenameRelative`       | `(filename)`         | Filename relative to `sourceRoot`. |
| `generatorOpts`          | `{}`                 | An object containing the options to be passed down to the babel code generator, babel-generator |
| `getModuleId`            | `null`               | Specify a custom callback to generate a module id with. Called as `getModuleId(moduleName)`. If falsy value is returned then the generated module id is used. |
| `highlightCode`          | `true`               | ANSI highlight syntax error code frames |
| `ignore`                 | `null`               | Opposite to the `only` option. `ignore` is disregarded if `only` is specified. |
| `inputSourceMap`         | `null`               | A source map object that the output source map will be based on. |
| `minified`               | `false`              | Should the output be minified (not printing last semicolons in blocks, printing literal string values instead of escaped ones, stripping `()` from `new` when safe) |
| `moduleId`               | `null`               | Specify a custom name for module ids. |
| `moduleIds`              | `false`              | If truthy, insert an explicit id for modules. By default, all modules are anonymous. (Not available for `common` modules) |
| `moduleRoot`             | `(sourceRoot)`       | Optional prefix for the AMD module formatter that will be prepend to the filename on module definitions. |
| `only`                   | `null`               | A [glob](https://github.com/isaacs/minimatch), regex, or mixed array of both, matching paths to **only** compile. Can also be an array of arrays containing paths to explicitly match. When attempting to compile a non-matching file it's returned verbatim. |
| `parserOpts`             | `{}`                 | An object containing the options to be passed down to the babel parser, babylon |
| `plugins`                | `[]`                 | List of [plugins](https://babeljs.io/docs/en/plugins) to load and use. |
| `presets`                | `[]`                 | List of [presets](https://babeljs.io/docs/en/plugins#presets) (a set of plugins) to load and use. |
| `retainLines`            | `false`              | Retain line numbers. This will lead to wacky code but is handy for scenarios where you can't use source maps. (**NOTE:** This will not retain the columns) |
| `resolveModuleSource`    | `null`               | Resolve a module source ie. `import "SOURCE";` to a custom value. Called as `resolveModuleSource(source, filename)`. |
| `shouldPrintComment`     | `null`               | An optional callback that controls whether a comment should be output or not. Called as `shouldPrintComment(commentContents)`. **NOTE:** This overrides the `comment` option when used. |
| `sourceFileName`         | `(filenameRelative)` | Set `sources[0]` on returned source map. |
| `sourceMaps`             | `false`              | If truthy, adds a `map` property to returned output. If set to `"inline"`, a comment with a sourceMappingURL directive is added to the bottom of the returned code. If set to `"both"` then a `map` property is returned as well as a source map comment appended. **This does not emit sourcemap files by itself!** To have sourcemaps emitted using the CLI, you must pass it the `--source-maps` option. |
| `sourceMapTarget`        | `(filenameRelative)` | Set `file` on returned source map. |
| `sourceRoot`             | `(moduleRoot)`       | The root from which all sources are relative. |
| `sourceType`             | `"module"`           | Indicate the mode the code should be parsed in. Can be either "script" or "module". |
| `wrapPluginVisitorMethod`| `null`               | An optional callback that can be used to wrap visitor methods. **NOTE:** This is useful for things like introspection, and not really needed for implementing anything. Called as `wrapPluginVisitorMethod(pluginAlias, visitorType, callback)`.
