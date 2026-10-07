# resolve-pkg-maps

Utils to resolve `package.json` subpath & conditional [`exports`](https://nodejs.org/api/packages.html#exports)/[`imports`](https://nodejs.org/api/packages.html#imports) in resolvers.

Implements the [ESM resolution algorithm](https://nodejs.org/api/esm.html#resolver-algorithm-specification). Tested [against Node.js](/tests/) for accuracy.

<sub>Support this project by ⭐️ starring and sharing it. [Follow me](https://github.com/privatenumber) to see what other cool projects I'm working on! ❤️</sub>

## Usage

### Resolving `exports`

_utils/package.json_
```json5
{
    // ...
    "exports": {
        "./reverse": {
            "require": "./file.cjs",
            "default": "./file.mjs"
        }
    },
    // ...
}
```

```ts
import { resolveExports } from 'resolve-pkg-maps'

const [packageName, packageSubpath] = parseRequest('utils/reverse')

const resolvedPaths: string[] = resolveExports(
    getPackageJson(packageName).exports,
    packageSubpath,
    ['import', ...otherConditions]
)
// => ['./file.mjs']
```

### Resolving `imports`

_package.json_
```json5
{
    // ...
    "imports": {
        "#supports-color": {
            "node": "./index.js",
            "default": "./browser.js"
        }
    },
    // ...
}
```

```ts
import { resolveImports } from 'resolve-pkg-maps'

const resolvedPaths: string[] = resolveImports(
    getPackageJson('.').imports,
    '#supports-color',
    ['node', ...otherConditions]
)
// => ['./index.js']
```

## API

### resolveExports(exports, request, conditions)

Returns: `string[]`

Resolves the `request` based on `exports` and `conditions`. Returns an array of paths (e.g. in case a fallback array is matched).

#### exports

Type:
```ts
type Exports = PathOrMap | readonly PathOrMap[]

type PathOrMap = string | PathConditionsMap

type PathConditionsMap = {
    [condition: string]: PathConditions | null
}
```

The [`exports` property](https://nodejs.org/api/packages.html#exports) value in `package.json`.

#### request

Type: `string`

The package subpath to resolve. Assumes a normalized path is passed in (eg. [repeating slashes `//`](https://github.com/nodejs/node/issues/44316)).

It _should not_ start with `/` or `./`.

Example: if the full import path is `some-package/subpath/file`, the request is `subpath/file`.


#### conditions

Type: `readonly string[]`

An array of conditions to use when resolving the request. For reference, Node.js's default conditions are [`['node', 'import']`](https://nodejs.org/api/esm.html#:~:text=defaultConditions%20is%20the%20conditional%20environment%20name%20array%2C%20%5B%22node%22%2C%20%22import%22%5D.).

The order of this array does not matter; the order of condition keys in the export map is what matters instead.

Not all conditions in the array need to be met to resolve the request. It just needs enough to resolve to a path.

---

### resolveImports(imports, request, conditions)

Returns: `string[]`

Resolves the `request` based on `imports` and `conditions`. Returns an array of paths (e.g. in case a fallback array is matched).

#### imports

Type:
```ts
type Imports = {
    [condition: string]: PathOrMap | readonly PathOrMap[] | null
}

type PathOrMap = string | Imports
```

The [`imports` property](https://nodejs.org/api/packages.html#imports) value in `package.json`.


#### request

Type: `string`

The request resolve. Assumes a normalized path is passed in (eg. [repeating slashes `//`](https://github.com/nodejs/node/issues/44316)).

> **Note:** In Node.js, imports resolutions are limited to requests prefixed with `#`. However, this package does not enforce that requirement in case you want to add custom support for non-prefixed entries.

#### conditions

Type: `readonly string[]`

An array of conditions to use when resolving the request. For reference, Node.js's default conditions are [`['node', 'import']`](https://nodejs.org/api/esm.html#:~:text=defaultConditions%20is%20the%20conditional%20environment%20name%20array%2C%20%5B%22node%22%2C%20%22import%22%5D.).

The order of this array does not matter; the order of condition keys in the import map is what matters instead.

Not all conditions in the array need to be met to resolve the request. It just needs enough to resolve to a path.

---

### Errors

#### `ERR_PACKAGE_PATH_NOT_EXPORTED`
 - If the request is not exported by the export map

#### `ERR_PACKAGE_IMPORT_NOT_DEFINED`
  - If the request is not defined by the import map

#### `ERR_INVALID_PACKAGE_CONFIG`

  - If an object contains properties that are both paths and conditions (e.g. start with and without `.`)
  - If an object contains numeric properties 
  
#### `ERR_INVALID_PACKAGE_TARGET`
  - If a resolved exports path is not a valid path (e.g. not relative or has protocol)
  - If a resolved path includes `..` or `node_modules`
  - If a resolved path is a type that cannot be parsed

## FAQ

### Why do the APIs return an array of paths?

`exports`/`imports` supports passing in a [fallback array](https://github.com/jkrems/proposal-pkg-exports/#:~:text=Whenever%20there%20is,to%20new%20cases.) to provide fallback paths if the previous one is invalid:

```json5
{
    "exports": {
        "./feature": [
            "./file.js",
            "./fallback.js"
        ]
    }
}
```

Node.js's implementation [picks the first valid path (without attempting to resolve it)](https://github.com/nodejs/node/issues/44282#issuecomment-1220151715) and throws an error if it can't be resolved. Node.js's fallback array is designed for [forward compatibility with features](https://github.com/jkrems/proposal-pkg-exports/#:~:text=providing%20forwards%20compatiblitiy%20for%20new%20features) (e.g. protocols) that can be immediately/inexpensively validated:

```json5
{
    "exports": {
        "./core-polyfill": ["std:core-module", "./core-polyfill.js"]
    }
}
```

However, [Webpack](https://webpack.js.org/guides/package-exports/#alternatives) and [TypeScript](https://github.com/microsoft/TypeScript/blob/71e852922888337ef51a0e48416034a94a6c34d9/src/compiler/moduleSpecifiers.ts#L695) have deviated from this behavior and attempts to resolve the next path if a path cannot be resolved.

By returning an array of matched paths instead of just the first one, the user can decide which behavior to adopt.

### How is it different from [`resolve.exports`](https://github.com/lukeed/resolve.exports)?

`resolve.exports` only resolves `exports`, whereas this package resolves both `exports` & `imports`. This comparison will only cover resolving `exports`.

- Despite it's name, `resolve.exports` handles more than just `exports`. It takes in the entire `package.json` object to handle resolving `.` and [self-references](https://nodejs.org/api/packages.html#self-referencing-a-package-using-its-name). This package only accepts `exports`/`imports` maps from `package.json` and is scoped to only resolving what's defined in the maps.

- `resolve.exports` accepts the full request (e.g. `foo/bar`), whereas this package only accepts the requested subpath (e.g. `bar`).

- `resolve.exports` only returns the first result in a fallback array. This package returns an array of results for the user to decide how to handle it.

- `resolve.exports` supports [subpath folder mapping](https://nodejs.org/docs/latest-v16.x/api/packages.html#subpath-folder-mappings) (deprecated in Node.js v16 & removed in v17) but seems to [have a bug](https://github.com/lukeed/resolve.exports/issues/7). This package does not support subpath folder mapping because Node.js has removed it in favor of using subpath patterns.

- Neither resolvers rely on a file-system

This package also addresses many of the bugs in `resolve.exports`, demonstrated in [this test](/tests/exports/compare-resolve.exports.ts).
