# napi-postinstall

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/un-ts/napi-postinstall/ci.yml?branch=main)](https://github.com/un-ts/napi-postinstall/actions/workflows/ci.yml?query=branch%3Amain)
[![Codecov](https://img.shields.io/codecov/c/github/un-ts/napi-postinstall.svg)](https://codecov.io/gh/un-ts/napi-postinstall)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fun-ts%2Fnapi-postinstall%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/un-ts/napi-postinstall)](https://coderabbit.ai)
[![npm](https://img.shields.io/npm/v/napi-postinstall.svg)](https://www.npmjs.com/package/napi-postinstall)
[![GitHub Release](https://img.shields.io/github/release/un-ts/napi-postinstall)](https://github.com/un-ts/napi-postinstall/releases)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![changesets](https://img.shields.io/badge/maintained%20with-changesets-176de3.svg)](https://github.com/changesets/changesets)

The `postinstall` script helper for handling native bindings in legacy `npm` versions, this is a reimplementation of the [`node-install`][node-install] functionality from [`esbuild`][esbuild] for [`napi-rs`][napi-rs] ecosystem packages like [`rollup`][rollup], [`@swc/core`][swc-core] and [`unrs-resolver`][unrs-resolver].

For more details, please refer to the following issues:

- [npm/cli#4828](https://github.com/npm/cli/issues/4828) -- root cause
- [napi-rs/napi-rs#2569](https://github.com/napi-rs/napi-rs/issues/2569)
- [unrs/unrs-resolver#56](https://github.com/unrs/unrs-resolver/issues/56)

## TOC <!-- omit in toc -->

- [Usage](#usage)
  - [Install](#install)
  - [CLI](#cli)
  - [API](#api)
    - [Types](#types)
    - [Example](#example)
- [Sponsors and Backers](#sponsors-and-backers)
  - [Sponsors](#sponsors)
  - [Backers](#backers)
- [Changelog](#changelog)
- [License](#license)

## Usage

### Install

```sh
# pnpm
pnpm add napi-postinstall

# yarn
yarn add napi-postinstall

# npm
npm i napi-postinstall

# bun
bun add napi-postinstall
```

### CLI

```sh
napi-postinstall unrs-resolver #<napi-package-name>
```

You can put it into `scripts#postinstall` of your `package.json`:

```json
{
  "scripts": {
    "postinstall": "napi-postinstall unrs-resolver"
  }
}
```

This will check and prepare the napi binding packages for you automatically.

### API

#### Types

```ts
export interface PackageJson {
  name: string
  version: string
}

export declare function checkAndPreparePackage(
  packageNameOrPackageJson: PackageJson | string,
  checkVersion?: boolean,
): Promise<void>
```

#### Example

```js
import { checkAndPreparePackage, isNpm } from 'napi-postinstall'

if (isNpm()) {
  checkAndPreparePackage('unrs-resolver' /* <napi-package-name> */)
}
```

## Sponsors and Backers

[![Sponsors](https://raw.githubusercontent.com/1stG/static/master/sponsors.svg)](https://github.com/sponsors/JounQin)

### Sponsors

| 1stG                                                                                                                   | RxTS                                                                                                                   | UnTS                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective sponsors](https://opencollective.com/1stG/organizations.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective sponsors](https://opencollective.com/rxts/organizations.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective sponsors](https://opencollective.com/unts/organizations.svg)](https://opencollective.com/unts) |

### Backers

| 1stG                                                                                                                | RxTS                                                                                                                | UnTS                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers](https://opencollective.com/1stG/individuals.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers](https://opencollective.com/rxts/individuals.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers](https://opencollective.com/unts/individuals.svg)](https://opencollective.com/unts) |

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[node-install]: https://github.com/evanw/esbuild/blob/4475787eef4c4923b92b9fa37ebba1c88b9e1d9b/lib/npm/node-install.ts
[esbuild]: https://github.com/evanw/esbuild
[napi-rs]: https://github.com/napi-rs/napi-rs
[rollup]: https://github.com/rollup/rollup
[swc-core]: https://github.com/swc-project/swc
[unrs-resolver]: https://github.com/unrs/unrs-resolver
[1stG.me]: https://www.1stG.me
[JounQin]: https://github.com/JounQin
[MIT]: http://opensource.org/licenses/MIT
