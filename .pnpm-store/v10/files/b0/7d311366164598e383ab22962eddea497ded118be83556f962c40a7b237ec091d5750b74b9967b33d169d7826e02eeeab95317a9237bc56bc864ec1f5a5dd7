## Usage

```javascript
var correct = require('spdx-correct')
var assert = require('assert')

assert.strictEqual(correct('mit'), 'MIT')

assert.strictEqual(correct('Apache 2'), 'Apache-2.0')

assert(correct('No idea what license') === null)

// disable upgrade option
assert(correct('GPL-3.0'), 'GPL-3.0-or-later')
assert(correct('GPL-3.0', { upgrade: false }), 'GPL-3.0')
```

## Contributors

spdx-correct has benefited from the work of several contributors.
See [the GitHub repository](https://github.com/jslicense/spdx-correct.js/graphs/contributors)
for more information.
