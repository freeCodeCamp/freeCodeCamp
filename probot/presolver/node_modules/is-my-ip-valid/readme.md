# Is my IP valid

A small lib to validate IP addresses.

## Installation

```sh
npm install --save is-my-ip-valid
```

## Usage

```js
const validator = require('is-my-ip-valid')
const validate = validator()
const validate4 = validator({ version: 4 })
const validate6 = validator({ version: 6 })

console.log(validate('127.0.0.1'))
//=> true

console.log(validate4('127.0.0.1'))
//=> true

console.log(validate6('127.0.0.1'))
//=> false

console.log(validate('2001:0db8:85a3:0000:0000:8a2e:0370:7334'))
//=> true

console.log(validate4('2001:0db8:85a3:0000:0000:8a2e:0370:7334'))
//=> false

console.log(validate6('2001:0db8:85a3:0000:0000:8a2e:0370:7334'))
//=> true
```

## Acknowledgements

The code is mostly based on this wonderful library: [beaugunderson/ip-address](https://github.com/beaugunderson/ip-address)

All regexes used are audited for catastrophic backtracking by this module: [substack/safe-regex](https://github.com/substack/safe-regex)
