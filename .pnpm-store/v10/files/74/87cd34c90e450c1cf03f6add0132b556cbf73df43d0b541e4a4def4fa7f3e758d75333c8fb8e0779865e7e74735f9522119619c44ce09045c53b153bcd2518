<h1 align="center">Are Docs Informative</h1>

<p align="center">Checks whether a documentation description introduces any new information.</p>

<p align="center">
	<a href="#contributors" target="_blank">
<!-- prettier-ignore-start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<img alt="All Contributors: 1" src="https://img.shields.io/badge/all_contributors-1-21bb42.svg" />
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- prettier-ignore-end -->
	</a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/are-docs-informative" target="_blank">
		<img alt="Codecov Test Coverage" src="https://codecov.io/gh/JoshuaKGoldberg/are-docs-informative/branch/main/graph/badge.svg?token=eVIFY4MhfQ"/>
	</a>
	<a href="https://github.com/JoshuaKGoldberg/are-docs-informative/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank">
		<img alt="Contributor Covenant" src="https://img.shields.io/badge/code_of_conduct-enforced-21bb42" />
	</a>
	<a href="https://github.com/JoshuaKGoldberg/are-docs-informative/blob/main/LICENSE.md" target="_blank">
	    <img alt="License: MIT" src="https://img.shields.io/github/license/JoshuaKGoldberg/are-docs-informative?color=21bb42">
    </a>
	<a href="https://github.com/sponsors/JoshuaKGoldberg" target="_blank">
    	<img alt="Sponsor: On GitHub" src="https://img.shields.io/badge/sponsor-on_github-21bb42.svg" />
    </a>
	<img alt="Style: Prettier" src="https://img.shields.io/badge/style-prettier-21bb42.svg" />
    <img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npm i are-docs-informative
```

```ts
import { areDocsInformative } from "are-docs-informative";

areDocsInformative("The user id.", "userId"); // false
areDocsInformative("Retrieved user id.", "userId"); // true
```

### Options

The `areDocsInformative` function can receive a third, optional parameter

#### `aliases`

The `aliases` option allows indicating words as synonyms (aliases) of each other.

For example, with `{ aliases: { emoji: ["smiley", "winkey"] } }`, the following comment would be considered uninformative:

```js
/** Default smiley/winkey. */
export const defaultSmiley = "🙂";
```

The default `aliases` option is:

```json
{
	"a": ["an", "our"]
}
```

#### `uselessWords`

Words that are ignored when searching for one that adds meaning.

For example, with `{ uselessWords: ["our"] }`, the following comment would be considered uninformative:

```js
/** Our text. */
export const text = ":)";
```

The default `uselessWords` option is:

```json
["a", "an", "i", "in", "of", "s", "the"]
```

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 💖

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg"/><br /><sub><b>Josh Goldberg</b></sub></a><br /><a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package is based on [@JoshuaKGoldberg](https://github.com/JoshuaKGoldberg)'s [template-typescript-node-package](https://github.com/JoshuaKGoldberg/template-typescript-node-package).
