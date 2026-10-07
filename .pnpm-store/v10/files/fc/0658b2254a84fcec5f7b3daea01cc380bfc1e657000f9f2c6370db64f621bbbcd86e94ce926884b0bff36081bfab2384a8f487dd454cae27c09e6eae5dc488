<p align="center">
	<img width="160" src=".github/logo.webp">
</p>
<h1 align="center">
	<sup>get-tsconfig</sup>
	<br>
	<a href="https://npm.im/get-tsconfig"><img src="https://badgen.net/npm/v/get-tsconfig"></a> <a href="https://npm.im/get-tsconfig"><img src="https://badgen.net/npm/dm/get-tsconfig"></a>
</h1>

Find and parse `tsconfig.json` files.

### Features
- Zero dependency (not even TypeScript)
- Tested against TypeScript for correctness
- Supports comments & dangling commas in `tsconfig.json`
- Resolves [`extends`](https://www.typescriptlang.org/tsconfig/#extends)
- Fully typed `tsconfig.json`
- Validates and throws parsing errors
- Tiny! `7 kB` Minified + Gzipped

<br>

<p align="center">
	<a href="https://github.com/sponsors/privatenumber/sponsorships?tier_id=398771"><img width="412" src="https://raw.githubusercontent.com/privatenumber/sponsors/master/banners/assets/donate.webp"></a>
	<a href="https://github.com/sponsors/privatenumber/sponsorships?tier_id=397608"><img width="412" src="https://raw.githubusercontent.com/privatenumber/sponsors/master/banners/assets/sponsor.webp"></a>
</p>
<p align="center"><sup><i>Already a sponsor?</i> Join the discussion in the <a href="https://github.com/pvtnbr/get-tsconfig">Development repo</a>!</sup></p>

## Install

```bash
npm install get-tsconfig
```

## Why?
For TypeScript related tooling to correctly parse `tsconfig.json` file without depending on TypeScript.

## API

### getTsconfig(searchPath?, configName?, cache?, includes?)

Searches for a tsconfig file (defaults to `tsconfig.json`) in the `searchPath` and parses it. (If you already know the tsconfig path, use [`parseTsconfig`](#parsetsconfigtsconfigpath-cache) instead). Returns `null` if a config file cannot be found, or an object containing the path and parsed TSConfig object if found.

Returns:

```ts
type TsconfigResult = {

    /**
     * The path to the tsconfig.json file
     */
    path: string

    /**
     * The resolved tsconfig.json file
     */
    config: TsConfigJsonResolved
}
```

#### searchPath
Type: `string`

Default: `process.cwd()`

Path to a source file or directory. The directory tree is searched up for a `tsconfig.json` file. Typically a TypeScript/JavaScript file path (e.g. `./src/index.ts`), but a directory path also works if you don't have a specific file.

#### configName
Type: `string`

Default: `tsconfig.json`

The file name of the TypeScript config file.

#### cache
Type: `Map<string, any>`

Default: `new Map()`

Optional cache for fs operations.

#### includes
Type: `boolean`

Default: `false`

When `true` and `searchPath` is a file path, validates that the found tsconfig applies to the file (via `files`, `include`, and `exclude`). If the file isn't matched, continues searching parent directories.

By default, `getTsconfig` returns the nearest tsconfig — matching `tsc` CLI behavior ([`findConfigFile()`](https://github.com/microsoft/TypeScript/blob/b19a9da2a3b8/src/compiler/program.ts#L328)). With `includes`, it checks the file is included by `include`/`files` and not excluded by `exclude` before accepting the tsconfig — matching VS Code's TypeScript Language Server behavior ([`isMatchedByConfig()`](https://github.com/microsoft/TypeScript/blob/b19a9da2a3b8/src/server/editorServices.ts#L4486)).

#### Example

```ts
import { getTsconfig } from 'get-tsconfig'

// Searches for tsconfig.json starting in the current directory
console.log(getTsconfig())

// Find tsconfig.json from a TypeScript file path
console.log(getTsconfig('./path/to/index.ts'))

// Find tsconfig.json from a directory file path
console.log(getTsconfig('./path/to/directory'))

// Explicitly pass in tsconfig.json path
console.log(getTsconfig('./path/to/tsconfig.json'))

// Search for jsconfig.json - https://code.visualstudio.com/docs/languages/jsconfig
console.log(getTsconfig('.', 'jsconfig.json'))

// Find the tsconfig that actually applies to a file (Language Server behavior)
// Skips tsconfig files where the file is excluded or not included
console.log(getTsconfig('./src/index.ts', 'tsconfig.json', new Map(), true))
```

---

### findTsconfig(searchPath?, configName?, cache?, includes?)

Searches for a tsconfig file by walking up the directory tree. Returns the path to the found tsconfig file, or `undefined` if not found.

Supports the same [`includes`](#includes) option as `getTsconfig` to validate that the tsconfig applies to the `searchPath` file.

#### Example

```ts
import { findTsconfig } from 'get-tsconfig'

// Find the tsconfig.json path
findTsconfig()

// Find the tsconfig that includes the file
findTsconfig('./src/index.ts', 'tsconfig.json', new Map(), true)
```

---

### parseTsconfig(tsconfigPath, cache?)

Parse the tsconfig file provided. Used internally by `getTsconfig`. Returns the parsed tsconfig as `TsConfigJsonResolved`.

#### tsconfigPath
Type: `string`

Required path to the tsconfig file.

#### cache
Type: `Map<string, any>`

Default: `new Map()`

Optional cache for fs operations.

#### Example

```ts
import { parseTsconfig } from 'get-tsconfig'

// Must pass in a path to an existing tsconfig.json file
console.log(parseTsconfig('./path/to/tsconfig.custom.json'))
```

---

### createFilesMatcher(tsconfig: TsconfigResult, caseSensitivePaths?: boolean)

Given a `tsconfig.json` file, it returns a file-matcher function that determines whether it should apply to a file path.

```ts
type FileMatcher = (filePath: string) => TsconfigResult['config'] | undefined
```

#### tsconfig
Type: `TsconfigResult`

Pass in the return value from `getTsconfig`, or a `TsconfigResult` object.

#### caseSensitivePaths
Type: `boolean`

By default, it uses [`is-fs-case-sensitive`](https://github.com/privatenumber/is-fs-case-sensitive) to detect whether the file-system is case-sensitive.

Pass in `true` to make it case-sensitive.

#### Example

For example, if it's called with a `tsconfig.json` file that has `include`/`exclude`/`files` defined, the file-matcher will return the config for files that match `include`/`files`, and return `undefined` for files that don't match or match `exclude`.

```ts
const tsconfig = getTsconfig()
const fileMatcher = tsconfig && createFilesMatcher(tsconfig)

/*
 * Returns tsconfig.json if it matches the file,
 * undefined if not
 */
const configForFile = fileMatcher?.('/path/to/file.ts')
const distCode = compileTypescript({
    code: sourceCode,
    tsconfig: configForFile
})
```

---

### createPathsMatcher(tsconfig: TsconfigResult)

Given a tsconfig with [`compilerOptions.paths`](https://www.typescriptlang.org/tsconfig#paths) defined, it returns a matcher function.

The matcher function accepts an [import specifier (the path to resolve)](https://nodejs.org/api/esm.html#terminology), checks it against `compilerOptions.paths`, and returns an array of possible paths to check:
```ts
function pathsMatcher(specifier: string): string[]
```

This function only returns possible paths and doesn't actually do any resolution. This helps increase compatibility wtih file/build systems which usually have their own resolvers.

#### Example

```ts
import { getTsconfig, createPathsMatcher } from 'get-tsconfig'

const tsconfig = getTsconfig()
const pathsMatcher = createPathsMatcher(tsconfig)

const exampleResolver = (request: string) => {
    if (pathsMatcher) {
        const tryPaths = pathsMatcher(request)

        // Check if paths in `tryPaths` exist
    }
}
```

## FAQ

### How can I use TypeScript to parse `tsconfig.json`?
This package is a re-implementation of TypeScript's `tsconfig.json` parser.

However, if you already have TypeScript as a dependency, you can simply use it's API:

```ts
import {
    sys as tsSys,
    findConfigFile,
    readConfigFile,
    parseJsonConfigFileContent
} from 'typescript'

// Find tsconfig.json file
const tsconfigPath = findConfigFile(process.cwd(), tsSys.fileExists, 'tsconfig.json')

// Read tsconfig.json file
const tsconfigFile = readConfigFile(tsconfigPath, tsSys.readFile)

// Resolve extends
const parsedTsconfig = parseJsonConfigFileContent(
    tsconfigFile.config,
    tsSys,
    path.dirname(tsconfigPath)
)
```

## Sponsors
<p align="center">
	<a href="https://github.com/sponsors/privatenumber">
		<img src="https://cdn.jsdelivr.net/gh/privatenumber/sponsors/sponsorkit/sponsors.svg">
	</a>
</p>
