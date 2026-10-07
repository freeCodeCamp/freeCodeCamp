# at-least-node

![npm](https://img.shields.io/npm/v/at-least-node)
![node](https://img.shields.io/node/v/at-least-node)
![NPM](https://img.shields.io/npm/l/at-least-node)

Sometimes you need to check if you're on _at least_ a given Node.js version, but you don't want to pull in the whole [`semver`](https://www.npmjs.com/package/semver) kitchen sink. That's what `at-least-node` is for.

| Package         | Size    |
| --------------- | ------- |
| `at-least-node` | 2.6 kB  |
| `semver`        | 75.5 kB |

```js
const atLeastNode = require('at-least-node')
atLeastNode('10.12.0')
// -> true on Node 10.12.0+, false on anything below that
```

When passing in a version string:

- You cannot include a leading `v` (i.e. `v10.12.0`)
- You cannot omit sections (i.e. `10.12`)
- You cannot use pre-releases (i.e. `1.0.0-beta`)
- There is no input validation, if you make a mistake, the resulting behavior is undefined
