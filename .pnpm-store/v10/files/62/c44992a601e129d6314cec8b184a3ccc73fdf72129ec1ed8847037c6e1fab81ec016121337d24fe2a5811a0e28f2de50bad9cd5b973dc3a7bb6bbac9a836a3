# import-without-cache

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Unit Test][unit-test-src]][unit-test-href]

Import ES modules without cache.

## Features

- Import ES modules without cache
- All dependencies are also imported without cache

## Install

```bash
npm i import-without-cache
```

## Usage

```ts
import { clearRequireCache, init, isSupported } from 'import-without-cache'

if (!isSupported) {
  throw new Error('import-without-cache is not supported in this environment.')
}

const deregister = init({
  // Optional
  skipNodeModules: false,
})

const mod = await import('some-module', { with: { cache: 'no' } })

clearRequireCache() // Optional: clear CommonJS cache if needed

// or
const mod2 = await import(`no-cache://some-module`)

expect(mod).not.toBe(mod2) // Different instances

deregister() // Optional: deregister the hooks when no longer needed
```

## Known Limitations

- Support Node.js since v22.15.0, and doesn't support Deno.
  - For Bun, `clearRequireCache` works, but `init` is not needed since ESM imports is the same as CJS requires.
  - Yarn PnP is not supported on Node.js < v24.
- Only supports ESM modules by default. CommonJS cache can be cleared by `clearRequireCache`.
- `require(esm)` is supported since Node.js v24.13.1.

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2025-PRESENT [Kevin Deng](https://github.com/sxzz)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/import-without-cache.svg
[npm-version-href]: https://npmjs.com/package/import-without-cache
[npm-downloads-src]: https://img.shields.io/npm/dm/import-without-cache
[npm-downloads-href]: https://www.npmcharts.com/compare/import-without-cache?interval=30
[unit-test-src]: https://github.com/sxzz/import-without-cache/actions/workflows/unit-test.yml/badge.svg
[unit-test-href]: https://github.com/sxzz/import-without-cache/actions/workflows/unit-test.yml
