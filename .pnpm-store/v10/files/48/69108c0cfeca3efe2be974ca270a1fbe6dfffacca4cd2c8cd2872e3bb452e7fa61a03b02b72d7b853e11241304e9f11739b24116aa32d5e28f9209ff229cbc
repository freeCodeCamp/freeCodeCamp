# regexpu-core [![Build status](https://github.com/mathiasbynens/regexpu-core/workflows/run-checks/badge.svg)](https://github.com/mathiasbynens/regexpu-core/actions?query=workflow%3Arun-checks) [![regexpu-core on npm](https://img.shields.io/npm/v/regexpu-core)](https://www.npmjs.com/package/regexpu-core)

_regexpu_ is a source code transpiler that enables the use of ES2015 Unicode regular expressions in JavaScript-of-today (ES5).

_regexpu-core_ contains _regexpu_’s core functionality, i.e. `rewritePattern(pattern, flag)`, which enables rewriting regular expressions that make use of [the ES2015 `u` flag](https://mathiasbynens.be/notes/es6-unicode-regex) into equivalent ES5-compatible regular expression patterns.

## Installation

To use _regexpu-core_ programmatically, install it as a dependency via [npm](https://www.npmjs.com/):

```bash
npm install regexpu-core --save
```

Then, `require` it:

```js
const rewritePattern = require('regexpu-core');
```

## API

This module exports a single function named `rewritePattern`.

### `rewritePattern(pattern, flags, options)`

This function takes a string that represents a regular expression pattern as well as a string representing its flags, and returns an ES5-compatible version of the pattern.

```js
rewritePattern('foo.bar', 'u');
// → 'foo(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uDC00-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF])bar'

rewritePattern('[\\u{1D306}-\\u{1D308}a-z]', 'u');
// → '(?:[a-z]|\\uD834[\\uDF06-\\uDF08])'

rewritePattern('[\\u{1D306}-\\u{1D308}a-z]', 'ui');
// → '(?:[a-z\\u017F\\u212A]|\\uD834[\\uDF06-\\uDF08])'
```

_regexpu-core_ can rewrite non-ES6 regular expressions too, which is useful to demonstrate how their behavior changes once the `u` and `i` flags are added:

```js
// In ES5, the dot operator only matches BMP symbols:
rewritePattern('foo.bar');
// → 'foo(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uFFFF])bar'

// But with the ES2015 `u` flag, it matches astral symbols too:
rewritePattern('foo.bar', 'u');
// → 'foo(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uDC00-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF])bar'
```

The optional `options` argument recognizes the following properties:

#### Stable regular expression features

These options can be set to `false` or `'transform'`. When using `'transform'`, the corresponding features are compiled to older syntax that can run in older browsers. When using `false` (the default), they are not compiled and they can be relied upon to compile more modern features.

- `unicodeFlag` - The `u` flag, enabling support for Unicode code point escapes in the form `\u{...}`.

  ```js
  rewritePattern('\\u{ab}', '', {
    unicodeFlag: 'transform'
  });
  // → '\\u{ab}'

  rewritePattern('\\u{ab}', 'u', {
    unicodeFlag: 'transform'
  });
  // → '\\xAB'
  ```

- `dotAllFlag` - The [`s` (`dotAll`) flag](https://github.com/mathiasbynens/es-regexp-dotall-flag).

  ```js
  rewritePattern('.', '', {
    dotAllFlag: 'transform'
  });
  // → '[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uFFFF]'

  rewritePattern('.', 's', {
    dotAllFlag: 'transform'
  });
  // → '[\\0-\\uFFFF]'

  rewritePattern('.', 'su', {
    dotAllFlag: 'transform'
  });
  // → '(?:[\\0-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])'
  ```

- `unicodePropertyEscapes` - [Unicode property escapes](property-escapes.md).

  By default they are compiled to Unicode code point escapes of the form `\u{...}`. If the `unicodeFlag` option is set to `'transform'` they often result in larger output, although there are cases (such as `\p{Lu}`) where it actually _decreases_ the output size.

  ```js
  rewritePattern('\\p{Script_Extensions=Anatolian_Hieroglyphs}', 'u', {
    unicodePropertyEscapes: 'transform'
  });
  // → '[\\u{14400}-\\u{14646}]'

  rewritePattern('\\p{Script_Extensions=Anatolian_Hieroglyphs}', 'u', {
    unicodeFlag: 'transform',
    unicodePropertyEscapes: 'transform'
  });
  // → '(?:\\uD811[\\uDC00-\\uDE46])'
  ```

- `namedGroups` - [Named capture groups](https://github.com/tc39/proposal-regexp-named-groups).

  ```js
  rewritePattern('(?<name>.)\\k<name>', '', {
    namedGroups: 'transform'
  });
  // → '(.)\1'
  ```

#### Experimental regular expression features

These options can be set to `false`, `'parse'` and `'transform'`. When using `'transform'`, the corresponding features are compiled to older syntax that can run in older browsers. When using `'parse'`, they are parsed and left as-is in the output pattern. When using `false` (the default), they result in a syntax error if used.

Once these features become stable (when the proposals are accepted as part of ECMAScript), they will be parsed by default and thus `'parse'` will behave like `false`.

- `unicodeSetsFlag` - [The `v` (`unicodeSets`) flag](https://github.com/tc39/proposal-regexp-set-notation)

  ```js
  rewritePattern('[\\p{Emoji}&&\\p{ASCII}]', 'u', {
    unicodeSetsFlag: 'transform'
  });
  // → '[#\*0-9]'
  ```

  By default, patterns with the `v` flag are transformed to patterns with the `u` flag. If you want to downlevel them more you can set the `unicodeFlag: 'transform'` option.

  ```js
  rewritePattern('[^[a-h]&&[f-z]]', 'v', {
    unicodeSetsFlag: 'transform'
  });
  // → '[^f-h]' (to be used with /u)
  ```

  ```js
  rewritePattern('[^[a-h]&&[f-z]]', 'v', {
    unicodeSetsFlag: 'transform',
    unicodeFlag: 'transform'
  });
  // → '(?:(?![f-h])[\s\S])' (to be used without /u)
  ```

- `modifiers` - [Inline `m`/`s`/`i` modifiers](https://github.com/tc39/proposal-regexp-modifiers)

  ```js
  rewritePattern('(?i:[a-z])[a-z]', '', {
    modifiers: 'transform'
  });
  // → '(?:[a-zA-Z])([a-z])'
  ```

#### Miscellaneous options

- `onNamedGroup`

  This option is a function that gets called when a named capture group is found. It receives two parameters:
  the name of the group, and its index.

  ```js
  rewritePattern('(?<name>.)\\k<name>', '', {
    onNamedGroup(name, index) {
      console.log(name, index);
      // → 'name', 1
    }
  });
  ```

- `onNewFlags`

  This option is a function that gets called to pass the flags that the resulting pattern must be interpreted with.

  ```js
  rewritePattern('abc', 'um', '', {
    unicodeFlag: 'transform',
    onNewFlags(flags) {
      console.log(flags);
      // → 'm'
    }
  })
  ```

### Caveats

- [Lookbehind assertions](https://github.com/tc39/proposal-regexp-lookbehind) cannot be transformed to older syntax.
- When using `namedGroups: 'transform'`, _regexpu-core_ only takes care of the _syntax_: you will still need a runtime wrapper around the regular expression to populate the `.groups` property of `RegExp.prototype.match()`'s result. If you are using _regexpu-core_ via Babel, it's handled automatically.

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
    git push --follow-tags
    ```

    Our CI then automatically publishes the new release to npm.

1. Once the release has been published to npm, update [`regexpu`](https://github.com/mathiasbynens/regexpu) to make use of it, and [cut a new release of `regexpu` as well](https://github.com/mathiasbynens/regexpu#how-to-publish-a-new-release).


## Author

| [![twitter/mathias](https://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](https://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](https://mathiasbynens.be/) |

## License

_regexpu-core_ is available under the [MIT](https://mths.be/mit) license.
