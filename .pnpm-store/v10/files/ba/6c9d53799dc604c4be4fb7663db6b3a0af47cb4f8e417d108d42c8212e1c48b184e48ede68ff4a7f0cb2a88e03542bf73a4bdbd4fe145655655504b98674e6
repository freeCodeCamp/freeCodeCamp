# confbox

<!-- automd:badges color=yellow bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/confbox?color=yellow)](https://npmjs.com/package/confbox)
[![npm downloads](https://img.shields.io/npm/dm/confbox?color=yellow)](https://npm.chart.dev/confbox)
[![bundle size](https://img.shields.io/bundlephobia/minzip/confbox?color=yellow)](https://bundlephobia.com/package/confbox)
[![install size](https://badgen.net/packagephobia/install/confbox?color=yellow)](https://packagephobia.com/result?p=confbox)

<!-- /automd -->

Parsing and serialization utils for [YAML](https://yaml.org/) ([js-yaml](https://github.com/nodeca/js-yaml)), [TOML](https://toml.io/) ([smol-toml](https://github.com/squirrelchat/smol-toml)), [JSONC](https://github.com/microsoft/node-jsonc-parser) ([jsonc-parser](https://github.com/microsoft/node-jsonc-parser)), [JSON5](https://json5.org/) ([json5](https://github.com/json5/json5)), [INI](https://en.wikipedia.org/wiki/INI_file) ([ini](https://www.npmjs.com/package/ini)) and [JSON](https://www.json.org/json-en.html).

✨ Zero dependency and tree-shakable

✨ Types exported out of the box

✨ Preserves code style (indentation and whitespace)

> [!TIP]
> Use [unjs/c12](https://github.com/unjs/c12) for a full featured configuration loader!

## Usage

Install package:

<!-- automd:pm-i no-version -->

```sh
# ✨ Auto-detect
npx nypm install confbox

# npm
npm install confbox

# yarn
yarn add confbox

# pnpm
pnpm install confbox

# bun
bun install confbox

# deno
deno install confbox
```

<!-- /automd -->

Import:

<!-- automd:jsimport cdn src="./src/index.ts" -->

**ESM** (Node.js, Bun, Deno)

```js
import {
  parseJSON5,
  stringifyJSON5,
  parseJSONC,
  stringifyJSONC,
  parseYAML,
  stringifyYAML,
  parseJSON,
  stringifyJSON,
  parseTOML,
  stringifyTOML,
  parseINI,
  stringifyINI,
} from "confbox";
```

**CDN** (Deno, Bun and Browsers)

```js
import {
  parseJSON5,
  stringifyJSON5,
  parseJSONC,
  stringifyJSONC,
  parseYAML,
  stringifyYAML,
  parseJSON,
  stringifyJSON,
  parseTOML,
  stringifyTOML,
  parseINI,
  stringifyINI,
} from "https://esm.sh/confbox";
```

<!-- /automd -->

<!-- automd:jsdocs src="./src/index" -->

### `parseINI(text, options?)`

Converts an [INI](https://www.ini.org/ini-en.html) string into an object.

**Note:** Style and indentation are not preserved currently.

### `parseJSON(text, options?)`

Converts a [JSON](https://www.json.org/json-en.html) string into an object.

Indentation status is auto-detected and preserved when stringifying back using `stringifyJSON`

### `parseJSON5(text, options?)`

Converts a [JSON5](https://json5.org/) string into an object.

### `parseJSONC(text, options?)`

Converts a [JSONC](https://github.com/microsoft/node-jsonc-parser) string into an object.

### `parseTOML(text)`

Converts a [TOML](https://toml.io/) string into an object.

### `parseYAML(text, options?)`

Converts a [YAML](https://yaml.org/) string into an object.

### `stringifyINI(value, options?)`

Converts a JavaScript value to an [INI](https://www.ini.org/ini-en.html) string.

**Note:** Style and indentation are not preserved currently.

### `stringifyJSON(value, options?)`

Converts a JavaScript value to a [JSON](https://www.json.org/json-en.html) string.

Indentation status is auto detected and preserved when using value from parseJSON.

### `stringifyJSON5(value, options?)`

Converts a JavaScript value to a [JSON5](https://json5.org/) string.

### `stringifyJSONC(value, options?)`

Converts a JavaScript value to a [JSONC](https://github.com/microsoft/node-jsonc-parser) string.

### `stringifyTOML(value)`

Converts a JavaScript value to a [TOML](https://toml.io/) string.

### `stringifyYAML(value, options?)`

Converts a JavaScript value to a [YAML](https://yaml.org/) string.

<!-- /automd -->

<!-- automd:fetch url="gh:unjs/.github/main/snippets/readme-contrib-node-pnpm.md" -->

## Contribution

<details>
  <summary>Local development</summary>

- Clone this repository
- Install the latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run tests using `pnpm dev` or `pnpm test`

</details>

<!-- /automd -->

## License

<!-- automd:contributors license=MIT author=pi0 -->

Published under the [MIT](https://github.com/unjs/confbox/blob/main/LICENSE) license.
Made by [@pi0](https://github.com/pi0) and [community](https://github.com/unjs/confbox/graphs/contributors) 💛
<br><br>
<a href="https://github.com/unjs/confbox/graphs/contributors">
<img src="https://contrib.rocks/image?repo=unjs/confbox" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
