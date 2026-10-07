### Made by [@kilianvalkhof](https://twitter.com/kilianvalkhof)

#### Other projects:

- 💻 [Polypane](https://polypane.app) - Develop responsive websites and apps twice as fast on multiple screens at once
- 🖌️ [Superposition](https://superposition.design) - Kickstart your design system by extracting design tokens from your website
- 🗒️ [FromScratch](https://fromscratch.rocks) - A smart but simple autosaving scratchpad

---

# Electron-to-Chromium [![npm](https://img.shields.io/npm/v/electron-to-chromium.svg)](https://www.npmjs.com/package/electron-to-chromium) [![npm-downloads](https://img.shields.io/npm/dm/electron-to-chromium.svg)](https://www.npmjs.com/package/electron-to-chromium) [![codecov](https://codecov.io/gh/Kilian/electron-to-chromium/branch/master/graph/badge.svg)](https://codecov.io/gh/Kilian/electron-to-chromium)[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FKilian%2Felectron-to-chromium.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FKilian%2Felectron-to-chromium?ref=badge_shield)

This repository provides a mapping of Electron versions to the Chromium version that it uses.

This package is used in [Browserslist](https://github.com/ai/browserslist), so you can use e.g. `electron >= 1.4` in [Autoprefixer](https://github.com/postcss/autoprefixer), [Stylelint](https://github.com/stylelint/stylelint), [babel-preset-env](https://github.com/babel/babel-preset-env) and [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat).

**Supported by:**

  <a href="https://m.do.co/c/bb22ea58e765">
    <img src="https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/SVG/DO_Logo_horizontal_blue.svg" width="201px">
  </a>


## Install
Install using `npm install electron-to-chromium`.

## Usage
To include Electron-to-Chromium, require it:

```js
var e2c = require('electron-to-chromium');
```

### Properties
The Electron-to-Chromium object has 4 properties to use:

#### `versions`
An object of key-value pairs with a _major_ Electron version as the key, and the corresponding major Chromium version as the value.

```js
var versions = e2c.versions;
console.log(versions['1.4']);
// returns "53"
```

#### `fullVersions`
An object of key-value pairs with a Electron version as the key, and the corresponding full Chromium version as the value.

```js
var versions = e2c.fullVersions;
console.log(versions['1.4.11']);
// returns "53.0.2785.143"
```

#### `chromiumVersions`
An object of key-value pairs with a _major_ Chromium version as the key, and the corresponding major Electron version as the value.

```js
var versions = e2c.chromiumVersions;
console.log(versions['54']);
// returns "1.4"
```

#### `fullChromiumVersions`
An object of key-value pairs with a Chromium version as the key, and an array of the corresponding major Electron versions as the value.

```js
var versions = e2c.fullChromiumVersions;
console.log(versions['54.0.2840.101']);
// returns ["1.5.1", "1.5.0"]
```
### Functions

#### `electronToChromium(query)`
Arguments:
* Query: string or number, required. A major or full Electron version.

A function that returns the corresponding Chromium version for a given Electron function. Returns a string.

If you provide it with a major Electron version, it will return a major Chromium version:

```js
var chromeVersion = e2c.electronToChromium('1.4');
// chromeVersion is "53"
```

If you provide it with a full Electron version, it will return the full Chromium version.

```js
var chromeVersion = e2c.electronToChromium('1.4.11');
// chromeVersion is "53.0.2785.143"
```

If a query does not match a Chromium version, it will return `undefined`.

```js
var chromeVersion = e2c.electronToChromium('9000');
// chromeVersion is undefined
```

#### `chromiumToElectron(query)`
Arguments:
* Query: string or number, required. A major or full Chromium version.

Returns a string with the corresponding Electron version for a given Chromium query.

If you provide it with a major Chromium version, it will return a major Electron version:

```js
var electronVersion = e2c.chromiumToElectron('54');
// electronVersion is "1.4"
```

If you provide it with a full Chrome version, it will return an array of full Electron versions.

```js
var electronVersions = e2c.chromiumToElectron('56.0.2924.87');
// electronVersions is ["1.6.3", "1.6.2", "1.6.1", "1.6.0"]
```

If a query does not match an Electron version, it will return `undefined`.

```js
var electronVersion = e2c.chromiumToElectron('10');
// electronVersion is undefined
```

#### `electronToBrowserList(query)` **DEPRECATED**
Arguments:
* Query: string or number, required. A major Electron version.

_**Deprecated**: Browserlist already includes electron-to-chromium._

A function that returns a [Browserslist](https://github.com/ai/browserslist) query that matches the given major Electron version. Returns a string.

If you provide it with a major Electron version, it will return a Browserlist query string that matches the Chromium capabilities:

```js
var query = e2c.electronToBrowserList('1.4');
// query is "Chrome >= 53"
```

If a query does not match a Chromium version, it will return `undefined`.

```js
var query = e2c.electronToBrowserList('9000');
// query is undefined
```

### Importing just versions, fullVersions, chromiumVersions and fullChromiumVersions
All lists can be imported on their own, if file size is a concern.

#### `versions`

```js
var versions = require('electron-to-chromium/versions');
```

#### `fullVersions`

```js
var fullVersions = require('electron-to-chromium/full-versions');
```

#### `chromiumVersions`

```js
var chromiumVersions = require('electron-to-chromium/chromium-versions');
```

#### `fullChromiumVersions`

```js
var fullChromiumVersions = require('electron-to-chromium/full-chromium-versions');
```

## Updating
This package will be updated with each new Electron release.

To update the list, run `npm run build.js`. Requires internet access as it downloads from the canonical list of Electron versions.

To verify correct behaviour, run `npm test`.


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FKilian%2Felectron-to-chromium.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FKilian%2Felectron-to-chromium?ref=badge_large)
