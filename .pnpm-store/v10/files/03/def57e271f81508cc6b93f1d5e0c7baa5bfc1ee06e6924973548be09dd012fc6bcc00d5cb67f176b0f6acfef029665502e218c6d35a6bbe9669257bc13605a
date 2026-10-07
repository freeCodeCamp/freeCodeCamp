# pkg-types

<!-- automd:badges color=yellow codecov -->

[![npm version](https://img.shields.io/npm/v/pkg-types?color=yellow)](https://npmjs.com/package/pkg-types)
[![npm downloads](https://img.shields.io/npm/dm/pkg-types?color=yellow)](https://npm.chart.dev/pkg-types)
[![codecov](https://img.shields.io/codecov/c/gh/unjs/pkg-types?color=yellow)](https://codecov.io/gh/unjs/pkg-types)

<!-- /automd -->

Node.js utilities and TypeScript definitions for `package.json`, `tsconfig.json`, and other configuration files.

## Install

<!-- automd:pm-i -->

```sh
# ✨ Auto-detect
npx nypm install pkg-types

# npm
npm install pkg-types

# yarn
yarn add pkg-types

# pnpm
pnpm install pkg-types

# bun
bun install pkg-types

# deno
deno install pkg-types
```

<!-- /automd -->

## Usage

### Package Configuration

#### `readPackage`

Reads any package file format (package.json, package.json5, or package.yaml) with automatic format detection.

```js
import { readPackage } from "pkg-types";
const localPackage = await readPackage();
// or
const package = await readPackage("/fully/resolved/path/to/folder");
```

#### `writePackage`

Writes package data with format detection based on file extension.

```js
import { writePackage } from "pkg-types";

await writePackage("path/to/package.json", pkg);
await writePackage("path/to/package.json5", pkg);
await writePackage("path/to/package.yaml", pkg);
```

#### `findPackage`

Finds the nearest package file (package.json, package.json5, or package.yaml).

```js
import { findPackage } from "pkg-types";
const filename = await findPackage();
// or
const filename = await findPackage("/fully/resolved/path/to/folder");
```

#### `readPackageJSON`

```js
import { readPackageJSON } from "pkg-types";
const localPackageJson = await readPackageJSON();
// or
const packageJson = await readPackageJSON("/fully/resolved/path/to/folder");
```

#### `writePackageJSON`

```js
import { writePackageJSON } from "pkg-types";

await writePackageJSON("path/to/package.json", pkg);
```

#### `resolvePackageJSON`

```js
import { resolvePackageJSON } from "pkg-types";
const filename = await resolvePackageJSON();
// or
const packageJson = await resolvePackageJSON("/fully/resolved/path/to/folder");
```

### TypeScript Configuration

#### `readTSConfig`

```js
import { readTSConfig } from "pkg-types";
const tsconfig = await readTSConfig();
// or
const tsconfig2 = await readTSConfig("/fully/resolved/path/to/folder");
```

#### `writeTSConfig`

```js
import { writeTSConfig } from "pkg-types";

await writeTSConfig("path/to/tsconfig.json", tsconfig);
```

#### `resolveTSConfig`

```js
import { resolveTSConfig } from "pkg-types";
const filename = await resolveTSConfig();
// or
const tsconfig = await resolveTSConfig("/fully/resolved/path/to/folder");
```

### File Resolution

#### `resolveFile`

```js
import { resolveFile } from "pkg-types";
const filename = await resolveFile("README.md", {
  startingFrom: id,
  rootPattern: /^node_modules$/,
  matcher: (filename) => filename.endsWith(".md"),
});
```

#### `resolveLockFile`

Find path to the lock file (`yarn.lock`, `package-lock.json`, `pnpm-lock.yaml`, `npm-shrinkwrap.json`, `bun.lockb`, `bun.lock`, `deno.lock`) or throws an error.

```js
import { resolveLockFile } from "pkg-types";
const lockfile = await resolveLockFile(".");
```

#### `findWorkspaceDir`

Try to detect workspace dir by in order:

1. Farthest workspace file (`pnpm-workspace.yaml`, `lerna.json`, `turbo.json`, `rush.json`, `deno.json`, `deno.jsonc`)
2. Closest `.git/config` file
3. Farthest lockfile
4. Farthest `package.json` file

If fails, throws an error.

```js
import { findWorkspaceDir } from "pkg-types";
const workspaceDir = await findWorkspaceDir(".");
```

### Git Configuration

#### `resolveGitConfig`

Finds closest `.git/config` file.

```js
import { resolveGitConfig } from "pkg-types";

const gitConfig = await resolveGitConfig(".")
```

#### `readGitConfig`

Finds and reads closest `.git/config` file into a JS object.

```js
import { readGitConfig } from "pkg-types";

const gitConfigObj = await readGitConfig(".")
```

#### `writeGitConfig`

Stringifies git config object into INI text format and writes it to a file.

```js
import { writeGitConfig } from "pkg-types";

await writeGitConfig(".git/config", gitConfigObj)
```

#### `parseGitConfig`

Parses a git config file in INI text format into a JavaScript object.

```js
import { parseGitConfig } from "pkg-types";

const gitConfigObj = parseGitConfig(gitConfigINI)
```

#### `stringifyGitConfig`

Stringifies a git config object into a git config file INI text format.

```js
import { stringifyGitConfig } from "pkg-types";

const gitConfigINI = stringifyGitConfig(gitConfigObj)
```

## Types

**Note:** In order to make types working, you need to install `typescript` as a devDependency.

You can directly use typed interfaces:

```ts
import type { TSConfig, PackageJSON, GitConfig } from "pkg-types";
```

You can also use define utils for type support for using in plain `.js` files and auto-complete in IDE.

```js
import type { definePackageJSON } from 'pkg-types'

const pkg = definePackageJSON({})
```

```js
import type { defineTSConfig } from 'pkg-types'

const pkg = defineTSConfig({})
```

```js
import type { defineGitConfig } from 'pkg-types'

const gitConfig = defineGitConfig({})
```

## Alternatives

- [dominikg/tsconfck](https://github.com/dominikg/tsconfck)

## License

<!-- automd:contributors license=MIT author="pi0,danielroe" -->

Published under the [MIT](https://github.com/unjs/pkg-types/blob/main/LICENSE) license.
Made by [@pi0](https://github.com/pi0), [@danielroe](https://github.com/danielroe) and [community](https://github.com/unjs/pkg-types/graphs/contributors) 💛
<br><br>
<a href="https://github.com/unjs/pkg-types/graphs/contributors">
<img src="https://contrib.rocks/image?repo=unjs/pkg-types" />
</a>

<!-- /automd -->
