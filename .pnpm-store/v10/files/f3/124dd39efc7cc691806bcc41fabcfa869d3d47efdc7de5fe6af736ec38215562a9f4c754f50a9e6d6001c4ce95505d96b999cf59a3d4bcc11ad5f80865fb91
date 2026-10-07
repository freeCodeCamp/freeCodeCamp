# spdx-license-ids

[![npm version](https://img.shields.io/npm/v/spdx-license-ids.svg)](https://www.npmjs.com/package/spdx-license-ids)
[![Github Actions](https://action-badges.now.sh/jslicense/spdx-license-ids)](https://wdp9fww0r9.execute-api.us-west-2.amazonaws.com/production/results/jslicense/spdx-license-ids)

A list of [SPDX license](https://spdx.org/licenses/) identifiers

## Installation

[Download JSON directly](https://raw.githubusercontent.com/jslicense/spdx-license-ids/main/index.json), or [use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/):

```
npm install spdx-license-ids
```

## [Node.js](https://nodejs.org/) API

### require('spdx-license-ids')

Type: `string[]`

All license IDs except for the currently deprecated ones.

```javascript
const ids = require('spdx-license-ids');
//=> ['0BSD', 'AAL', 'ADSL', 'AFL-1.1', 'AFL-1.2', 'AFL-2.0', 'AFL-2.1', 'AFL-3.0', 'AGPL-1.0-only', ...]

ids.includes('BSD-3-Clause'); //=> true
ids.includes('CC-BY-1.0'); //=> true

ids.includes('GPL-3.0'); //=> false
```

### require('spdx-license-ids/deprecated')

Type: `string[]`

Deprecated license IDs.

```javascript
const deprecatedIds = require('spdx-license-ids/deprecated');
//=> ['AGPL-1.0', 'AGPL-3.0', 'GFDL-1.1', 'GFDL-1.2', 'GFDL-1.3', 'GPL-1.0', 'GPL-2.0', ...]

deprecatedIds.includes('BSD-3-Clause'); //=> false
deprecatedIds.includes('CC-BY-1.0'); //=> false

deprecatedIds.includes('GPL-3.0'); //=> true
```

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
