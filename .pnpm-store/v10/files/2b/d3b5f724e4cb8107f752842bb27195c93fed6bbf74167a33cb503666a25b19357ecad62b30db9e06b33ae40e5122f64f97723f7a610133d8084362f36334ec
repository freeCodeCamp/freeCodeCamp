# @quansync/fs

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Unit Test][unit-test-src]][unit-test-href]

Filesystem utilities for [quansync](https://github.com/quansync-dev/quansync).

## Install

```bash
npm i @quansync/fs
```

## Usage

```ts
import { readFile } from '@quansync/fs'
import { quansync } from 'quansync'

const resultAsync = await readFile('/path', 'utf8')
const resultSync = readFile.sync('/path', 'utf8')

const readFileTrimmed = quansync(function* (id: string) {
  const text = yield* readFile(id, 'utf8').trim()
  return text
})
const readFileTrimmedSync = readFileTrimmed.sync
```

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/sxzz/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2025-PRESENT [Kevin Deng](https://github.com/sxzz)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@quansync/fs.svg
[npm-version-href]: https://npmjs.com/package/@quansync/fs
[npm-downloads-src]: https://img.shields.io/npm/dm/@quansync/fs
[npm-downloads-href]: https://www.npmcharts.com/compare/@quansync/fs?interval=30
[unit-test-src]: https://github.com/quansync-dev/fs/actions/workflows/unit-test.yml/badge.svg
[unit-test-href]: https://github.com/quansync-dev/fs/actions/workflows/unit-test.yml
