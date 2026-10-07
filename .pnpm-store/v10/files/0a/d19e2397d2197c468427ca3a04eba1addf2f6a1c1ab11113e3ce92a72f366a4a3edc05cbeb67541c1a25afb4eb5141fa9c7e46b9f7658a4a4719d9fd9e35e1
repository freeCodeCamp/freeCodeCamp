# empathic [![CI](https://github.com/lukeed/empathic/workflows/CI/badge.svg)](https://github.com/lukeed/empathic/actions?query=workflow%3ACI) [![licenses](https://licenses.dev/b/npm/empathic)](https://licenses.dev/npm/empathic)

> A set of small and [fast](/benchmarks.md) Node.js utilities to understand your pathing needs.

Multiple submodules (eg, `empathic/find`) are offered, _each of which_ are:

* **fast** — 8x to 40x faster than popular alternatives
* **modern** — based on newer `node:*` native APIs
* **small** — ranging from 200b to 500b in size
* **safe** — zero-dependency & easy to read

## Install

```sh
$ npm install empathic
```

## Usage

```ts
import { resolve } from 'node:path';
import * as find from 'empathic/find';
import * as pkg from 'empathic/package';

// Assumed example structure:
let cwd = resolve('path/to/acme/websites/dashboard');

// Find closest "foobar.config.js" file
let file = find.up('foobar.config.js', { cwd });
//=> "/.../path/to/acme/foobar.config.js"

// Find closest "package.json" file
let pkgfile = pkg.up({ cwd });
//=> "/.../path/to/acme/package.json"

// Construct (optionally create) "foobar" cache dir
let cache = pkg.cache('foobar', { cwd, create: true });
//=> "/.../path/to/acme/node_modules/.cache/foobar"
```

## API

### `empathic/access`

> [Source](/src/access.ts) · **Size:** `259b`

Check for file access/permissions. Named [`fs.accessSync`](https://nodejs.org/docs/latest/api/fs.html#fsaccesssyncpath-mode) shortcuts.

### `empathic/find`

> [Source](/src/find.ts) · [Benchmark](/benchmarks.md#find) · **Size:** `569b`

Find files and/or directories by walking up parent directories.

### `empathic/package`

> [Source](/src/package.ts) · [Benchmark](/benchmarks.md#package) · **Size:** `505b`

Convenience helpers for dealing with `package.json` files and/or `node_modules` packages.

### `empathic/resolve`

> [Source](/src/resolve.ts) · [Benchmark](/benchmarks.md#resolve) · **Size:** `419b`

Resolve absolute paths to package identifiers, relative paths, file URL, and/or from other root directories.

### `empathic/walk`

> [Source](/src/walk.ts) · [Benchmark](/benchmarks.md#walk) · **Size:** `208b`

Collect all the parent directories of a target. Controlled via `cwd` and `last` options.


## License

MIT © [Luke Edwards](https://lukeed.com)
