# unicode-canonical-property-names-ecmascript [![Build status](https://travis-ci.org/mathiasbynens/unicode-canonical-property-names-ecmascript.svg?branch=main)](https://travis-ci.org/mathiasbynens/unicode-canonical-property-names-ecmascript) [![unicode-canonical-property-names-ecmascript on npm](https://img.shields.io/npm/v/unicode-canonical-property-names-ecmascript)](https://www.npmjs.com/package/unicode-canonical-property-names-ecmascript)

_unicode-canonical-property-names-ecmascript_ exports the set of canonical Unicode property names that are supported in [ECMAScript RegExp property escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes).

## Installation

To use _unicode-canonical-property-names-ecmascript_, install it as a dependency via [npm](https://www.npmjs.com/):

```bash
$ npm install unicode-canonical-property-names-ecmascript
```

Then, `require` it:

```js
const properties = require('unicode-canonical-property-names-ecmascript');
```

## Example

```js
properties.has('ID_Start');
// → true
properties.has('IDS');
// → false
```

## For maintainers

### How to publish a new release

1. On the `main` branch, bump the version number in `package.json`:

    ```sh
    npm version patch -m 'Release v%s'
    ```

    Instead of `patch`, use `minor` or `major` [as needed](https://semver.org/).

    Note that this produces a Git commit + tag.

1. Push the release commit and tag:

    ```sh
    git push && git push --tags
    ```

    Our CI then automatically publishes the new release to npm.

## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_unicode-canonical-property-names-ecmascript_ is available under the [MIT](https://mths.be/mit) license.
