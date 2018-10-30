# spdx-license-ids

[![npm version](https://img.shields.io/npm/v/spdx-license-ids.svg)](https://www.npmjs.org/package/spdx-license-ids)
[![Build Status](https://travis-ci.org/shinnn/spdx-license-ids.svg?branch=master)](https://travis-ci.org/shinnn/spdx-license-ids)

A list of [SPDX license](https://spdx.org/licenses/) identifiers

## Installation

[Download JSON directly](https://raw.githubusercontent.com/shinnn/spdx-license-ids/master/index.json), or [use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/getting-started/what-is-npm):

```
npm install spdx-license-ids
```

## [Node.js](https://nodejs.org/) API

### require('spdx-license-ids')

Type: `<Array<string>>`

All license IDs except for the currently deprecated ones.

```javascript
const ids = require('spdx-license-ids');
//=> ['0BSD', 'AAL', 'Abstyles', 'Adobe-2006', 'Adobe-Glyph', 'ADSL', 'AFL-1.1', 'AFL-1.2', ...]

ids.includes('BSD-3-Clause'); //=> true
ids.includes('CC-BY-1.0'); //=> true

ids.includes('GPL-3.0'); //=> false
```

### require('spdx-license-ids/deprecated')

Type: `<Array<string>>`

Deprecated license IDs.

```javascript
const deprecatedIds = require('spdx-license-ids/deprecated');
//=> ['AGPL-1.0', 'AGPL-3.0', 'eCos-2.0', 'GFDL-1.1', 'GFDL-1.2', 'GFDL-1.3', 'GPL-1.0', ...]

deprecatedIds.includes('BSD-3-Clause'); //=> false
deprecatedIds.includes('CC-BY-1.0'); //=> false

deprecatedIds.includes('GPL-3.0'); //=> true
```

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
