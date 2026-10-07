# eslint-import-resolver-typescript

[![GitHub Actions](https://github.com/import-js/eslint-import-resolver-typescript/workflows/CI/badge.svg)](https://github.com/import-js/eslint-import-resolver-typescript/actions/workflows/ci.yml)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fimport-js%2Feslint-import-resolver-typescript%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![npm](https://img.shields.io/npm/v/eslint-import-resolver-typescript.svg)](https://www.npmjs.com/package/eslint-import-resolver-typescript)
[![GitHub Release](https://img.shields.io/github/release/import-js/eslint-import-resolver-typescript)](https://github.com/import-js/eslint-import-resolver-typescript/releases)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![changesets](https://img.shields.io/badge/maintained%20with-changesets-176de3.svg)](https://github.com/changesets/changesets)

This plugin adds [`TypeScript`][] support to [`eslint-plugin-import`][] (Or maybe you want to try [`eslint-plugin-import-x`][] for faster speed)

This means you can:

- `import`/`require` files with extension `.cts`/`.mts`/`.ts`/`.tsx`/`.d.cts`/`.d.mts`/`.d.ts`
- Use [`paths`](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) defined in `tsconfig.json`
- Prefer resolving `@types/*` definitions over plain `.js`/`.jsx`
- Multiple tsconfigs support just like normal
- `imports/exports` fields support in `package.json`

## TOC <!-- omit in toc -->

- [Notice](#notice)
- [Installation](#installation)
  - [`eslint-plugin-import`](#eslint-plugin-import)
  - [`eslint-plugin-import-x`](#eslint-plugin-import-x)
- [Configuration](#configuration)
  - [`eslint.config.js`](#eslintconfigjs)
  - [`.eslintrc`](#eslintrc)
- [Options from `rspack-resolver`](#options-from-rspack-resolver)
  - [`conditionNames`](#conditionnames)
  - [`extensions`](#extensions)
  - [`extensionAlias`](#extensionalias)
  - [`mainFields`](#mainfields)
  - [Other options](#other-options)
  - [Default options](#default-options)
- [Contributing](#contributing)
- [Sponsors](#sponsors)
- [Backers](#backers)
- [Changelog](#changelog)
- [License](#license)

## Notice

After version 2.0.0, `.d.ts` will take higher priority then normal `.js`/`.jsx` files on resolving `node_modules` packages in favor of `@types/*` definitions or its own definition.

If you're facing some problems on rules `import/default` or `import/named` from [`eslint-plugin-import`][], do not post any issue here, because they are just working exactly as [expected](https://github.com/import-js/eslint-import-resolver-typescript/issues/31#issuecomment-539751607) on our sides, take [import-js/eslint-plugin-import#1525](https://github.com/import-js/eslint-plugin-import/issues/1525) as reference or post a new issue to [`eslint-plugin-import`][] instead.

## Installation

### `eslint-plugin-import`

```sh
# npm
npm i -D eslint-plugin-import eslint-import-resolver-typescript

# pnpm
pnpm i -D eslint-plugin-import eslint-import-resolver-typescript

# yarn
yarn add -D eslint-plugin-import eslint-import-resolver-typescript
```

### `eslint-plugin-import-x`

```sh
# npm
npm i -D eslint-plugin-import-x eslint-import-resolver-typescript

# pnpm
pnpm i -D eslint-plugin-import-x eslint-import-resolver-typescript

# yarn
yarn add -D eslint-plugin-import-x eslint-import-resolver-typescript
```

## Configuration

### `eslint.config.js`

If you are using `eslint-plugin-import-x@>=4.5.0`, you can use import/require to reference `eslint-import-resolver-typescript` directly in your ESLint flat config:

```js
// eslint.config.js, CommonJS is also supported
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'

export default [
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

          // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

          // use <root>/path/to/folder/tsconfig.json
          project: 'path/to/folder',

          // Multiple tsconfigs (Useful for monorepos)

          // use a glob pattern
          project: 'packages/*/tsconfig.json',

          // use an array
          project: [
            'packages/module-a/tsconfig.json',
            'packages/module-b/tsconfig.json',
          ],

          // use an array of glob patterns
          project: [
            'packages/*/tsconfig.json',
            'other-packages/*/tsconfig.json',
          ],

          // use <root>/jsconfig.json
          project: 'jsconfig.json',
        }),
      ],
    },
  },
]
```

But if you are using `eslint-plugin-import` or the older version of `eslint-plugin-import-x`, you can't use require/import:

```js
// eslint.config.js, CommonJS is also supported
export default [
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

          // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

          // use <root>/path/to/folder/tsconfig.json
          project: 'path/to/folder',

          // Multiple tsconfigs (Useful for monorepos)

          // use a glob pattern
          project: 'packages/*/tsconfig.json',

          // use an array
          project: [
            'packages/module-a/tsconfig.json',
            'packages/module-b/tsconfig.json',
          ],

          // use an array of glob patterns
          project: [
            'packages/*/tsconfig.json',
            'other-packages/*/tsconfig.json',
          ],

          // use <root>/jsconfig.json
          project: 'jsconfig.json',
        },
      },
    },
  },
]
```

### `.eslintrc`

Add the following to your `.eslintrc` config:

```jsonc
{
  "plugins": ["import"],
  "rules": {
    // turn on errors for missing imports
    "import/no-unresolved": "error",
  },
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        "project": "path/to/folder",

        // Multiple tsconfigs (Useful for monorepos)

        // use a glob pattern
        "project": "packages/*/tsconfig.json",

        // use an array
        "project": [
          "packages/module-a/tsconfig.json",
          "packages/module-b/tsconfig.json",
        ],

        // use an array of glob patterns
        "project": [
          "packages/*/tsconfig.json",
          "other-packages/*/tsconfig.json",
        ],

        // use <root>/jsconfig.json
        "project": "jsconfig.json",
      },
    },
  },
}
```

## Options from [`rspack-resolver`][]

### `conditionNames`

Default:

```jsonc
[
  "types",
  "import",

  // APF: https://angular.io/guide/angular-package-format
  "esm2020",
  "es2020",
  "es2015",

  "require",
  "node",
  "node-addons",
  "browser",
  "default",
]
```

### `extensions`

Default:

```jsonc
[
  // `.mts`, `.cts`, `.d.mts`, `.d.cts`, `.mjs`, `.cjs` are not included because `.cjs` and `.mjs` must be used explicitly
  ".ts",
  ".tsx",
  ".d.ts",
  ".js",
  ".jsx",
  ".json",
  ".node",
]
```

### `extensionAlias`

Default:

```jsonc
{
  ".js": [
    ".ts",
    // `.tsx` can also be compiled as `.js`
    ".tsx",
    ".d.ts",
    ".js",
  ],
  ".jsx": [".tsx", ".d.ts", ".jsx"],
  ".cjs": [".cts", ".d.cts", ".cjs"],
  ".mjs": [".mts", ".d.mts", ".mjs"],
}
```

### `mainFields`

Default:

```jsonc
[
  "types",
  "typings",

  // APF: https://angular.io/guide/angular-package-format
  "fesm2020",
  "fesm2015",
  "esm2020",
  "es2020",

  "module",
  "jsnext:main",

  "main",
]
```

### Other options

You can pass through other options of [`rspack-resolver`][] directly

### Default options

You can reuse `defaultConditionNames`, `defaultExtensions`, `defaultExtensionAlias` and `defaultMainFields` by `require/import` them directly

## Contributing

- Make sure your change is covered by a test import.
- Make sure that `yarn test` passes without a failure.
- Make sure that `yarn lint` passes without conflicts.
- Make sure your code changes match our [type-coverage](https://github.com/plantain-00/type-coverage) settings: `yarn type-coverage`.

We have [GitHub Actions](https://github.com/import-js/eslint-import-resolver-typescript/actions) which will run the above commands on your PRs.

If either fails, we won't be able to merge your PR until it's fixed.

[![Sponsors](https://raw.githubusercontent.com/1stG/static/master/sponsors.svg)](https://github.com/sponsors/JounQin)

## Sponsors

| 1stG                                                                                                                               | RxTS                                                                                                                               | UnTS                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/organizations.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/organizations.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/organizations.svg)](https://opencollective.com/unts) |

## Backers

| 1stG                                                                                                                             | RxTS                                                                                                                             | UnTS                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/individuals.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/individuals.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/individuals.svg)](https://opencollective.com/unts) |

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[ISC][]

[`eslint-plugin-import`]: https://github.com/import-js/eslint-plugin-import
[`eslint-plugin-import-x`]: https://github.com/un-ts/eslint-plugin-import-x
[`rspack-resolver`]: https://github.com/unrs/rspack-resolver
[`typescript`]: https://www.typescriptlang.org
[isc]: https://opensource.org/licenses/ISC
