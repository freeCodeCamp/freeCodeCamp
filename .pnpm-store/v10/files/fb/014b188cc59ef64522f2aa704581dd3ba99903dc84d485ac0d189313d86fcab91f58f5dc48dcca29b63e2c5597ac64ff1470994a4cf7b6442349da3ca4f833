# @rolldown/pluginutils

A utility library for building flexible, composable filter expressions that can be used in plugin hook filters of Rolldown/Vite/Rollup/Unplugin plugins.

## Installation

```sh
pnpm add @rolldown/pluginutils
```

## Usage

### Simple Filters

```ts
import { exactRegex, makeIdFiltersToMatchWithQuery, prefixRegex } from '@rolldown/pluginutils';

// Match exactly 'foo.js'
const filter = exactRegex('foo.js');

// Match any id starting with 'lib/'
const prefix = prefixRegex('lib/');

// Match ids with query params (e.g. 'foo.js?bar')
const idFilters = makeIdFiltersToMatchWithQuery(['**/*.js', /\.ts$/]);

// Usage in a plugin to define a hook filter
const myPlugin = {
  resolveId: {
    filter: {
      id: [exactRegex('MY_ID_TO_CHECK'), /some-other-regex/],
    },
    handler(id) {
      // Your code here
    },
  },
};
```

### Composable Filters

> [!WARNING]
> Composable filters are not yet supported in Vite or unplugin. They can be used in Rolldown plugins only.

```ts
import { and, id, include, moduleType, query } from '@rolldown/pluginutils';

// Build a filter expression
const filterExpr = and(id(/\.ts$/), moduleType('ts'), query('foo', true));

// Usage in a plugin to define a hook filter
const myPlugin = {
  transform: {
    filter: [include(filterExpr)],
    handler(code, id, options) {
      // Your code here
    },
  },
};
```

## API Reference

### Simple Filters

- `exactRegex(str: string, flags?: string): RegExp` — Matches the exact string.
- `prefixRegex(str: string, flags?: string): RegExp` — Matches values with the given prefix.
- `makeIdFiltersToMatchWithQuery(input: string | RegExp | (string | RegExp)[]): string | RegExp | (string | RegExp)[]` — Adapts filters to match ids with query params.

### Composable Filters

- `and(...exprs)` / `or(...exprs)` / `not(expr)` — Logical composition of filter expressions.
- `id(pattern, params?)` — Filter by id. A `string` pattern is matched by exact equality (not glob); a `RegExp` is tested against the id.
- `importerId(pattern, params?)` — Filter by importer id. A `string` pattern is matched by exact equality; a `RegExp` is tested against the importer id. Only usable with the `resolveId` hook.
- `moduleType(type)` — Filter by module type (e.g. 'js', 'tsx', or 'json').
- `code(pattern)` — Filter by code content.
- `query(key, pattern)` — Filter by query parameter.
- `include(expr)` / `exclude(expr)` — Top-level include/exclude wrappers.
- `queries(obj)` — Compose multiple query filters.

### Utilities

- `filterVitePlugins(plugins)` — Filters out Vite plugins with `apply: 'serve'`.
