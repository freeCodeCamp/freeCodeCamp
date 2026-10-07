# emoji-regex [![Build status](https://github.com/mathiasbynens/emoji-regex/actions/workflows/main.yml/badge.svg)](https://github.com/mathiasbynens/emoji-regex/actions/workflows/main.yml) [![emoji-regex on npm](https://img.shields.io/npm/v/emoji-regex)](https://www.npmjs.com/package/emoji-regex)

_emoji-regex_ offers a regular expression to match all emoji symbols and sequences (including textual representations of emoji) as per the Unicode Standard. It’s based on [_emoji-test-regex-pattern_](https://github.com/mathiasbynens/emoji-test-regex-pattern), which generates (at build time) the regular expression pattern based on the Unicode Standard. As a result, _emoji-regex_ can easily be updated whenever new emoji are added to Unicode.

Since each version of _emoji-regex_ is tied to the latest Unicode version at the time of release, results are deterministic. This is important for use cases like image replacement, where you want to guarantee that an image asset is available for every possibly matched emoji. If you don’t need a deterministic regex, a lighter-weight, general emoji pattern is available via the [_emoji-regex-xs_](https://github.com/slevithan/emoji-regex-xs) package that follows the same API.

## Installation

Via [npm](https://www.npmjs.com/):

```bash
npm install emoji-regex
```

In [Node.js](https://nodejs.org/):

```js
const emojiRegex = require('emoji-regex');
// Note: because the regular expression has the global flag set, this module
// exports a function that returns the regex rather than exporting the regular
// expression itself, to make it impossible to (accidentally) mutate the
// original regular expression.

const text = `
\u{231A}: ⌚ default emoji presentation character (Emoji_Presentation)
\u{2194}\u{FE0F}: ↔️ default text presentation character rendered as emoji
\u{1F469}: 👩 emoji modifier base (Emoji_Modifier_Base)
\u{1F469}\u{1F3FF}: 👩🏿 emoji modifier base followed by a modifier
`;

const regex = emojiRegex();
for (const match of text.matchAll(regex)) {
  const emoji = match[0];
  console.log(`Matched sequence ${ emoji } — code points: ${ [...emoji].length }`);
}
```

Console output:

```
Matched sequence ⌚ — code points: 1
Matched sequence ⌚ — code points: 1
Matched sequence ↔️ — code points: 2
Matched sequence ↔️ — code points: 2
Matched sequence 👩 — code points: 1
Matched sequence 👩 — code points: 1
Matched sequence 👩🏿 — code points: 2
Matched sequence 👩🏿 — code points: 2
```

## For maintainers

### How to update emoji-regex after new Unicode Standard releases

1. [Update _emoji-test-regex-pattern_ as described in its repository](https://github.com/mathiasbynens/emoji-test-regex-pattern#how-to-update-emoji-test-regex-pattern-after-new-uts51-releases).

1. Bump the _emoji-test-regex-pattern_ dependency to the latest version.

1. Update the Unicode data dependency in `package.json` by running the following commands:

     ```sh
     # Example: updating from Unicode v13 to Unicode v14.
     npm uninstall @unicode/unicode-13.0.0
     npm install @unicode/unicode-14.0.0 --save-dev
     ````

 1. Generate the new output:

     ```sh
     npm run build
     ```

 1. Verify that tests still pass:

     ```sh
     npm test
     ```

### How to publish a new release

1. On the `main` branch, bump the emoji-regex version number in `package.json`:

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

_emoji-regex_ is available under the [MIT](https://mths.be/mit) license.
