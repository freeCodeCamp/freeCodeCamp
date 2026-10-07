# Slashes

Add or remove backslashes (escape or unescape).

[![build](https://github.com/Shakeskeyboarde/slashes/actions/workflows/build.yml/badge.svg)](https://github.com/Shakeskeyboarde/slashes/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/Shakeskeyboarde/slashes/branch/main/graph/badge.svg?token=E2VYI8XJLB)](https://codecov.io/gh/Shakeskeyboarde/slashes)

# Getting started

```ts
import { addSlashes, removeSlashes } from 'slashes';

addSlashes(`foo\nbar`); // "foo\\nbar"
removeSlashes(`foo\\nbar`); // "foo\nbar"
```

## Adding slashes

By default, `addSlashes` will escape (encode) the following characters.

- Backspace (`\b`)
- Form Feed (`\f`)
- Newline (`\n`)
- Carriage Return (`\r`)
- Horizontal Tab (`\t`)
- Vertical Tab (`\v`)
- Null (`\0`)
- Double Quote (`"`)
- Backslash (`\`)

```ts
const escaped = addSlashes(`\n`); // "\\n"
```

The default character set are characters which cannot be used between double quotes in a JSON string.

```ts
const validJsonString = `{ "key": "${escaped}" }`;
```

### Custom encoding

Escape encoding can be customized using the `getEscaped` option.

The following is the default, equivalent to not setting the `getEscaped` option.

```ts
import { getEscapedJsonUnsafe } from 'slashes';

addSlashes('...', { getEscaped: getEscapedJsonUnsafe });
```

Included `getEscaped` implementations:

- `getEscapedJsonUnsafe` - (Default) Encode characters which cannot be used between double quotes in a JSON string.
- `getEscapedAny` - Encode _ANY_ character to a single letter (eg. `\n`) or an ES5 Unicode (eg. `\u0100`) escape sequence.

A custom `getEscaped` receives one character (may be Unicode > 2 bytes) at a time. It can return `true` to use the standard escape sequence, `false` to not escape the character, or a string to provide a custom escape sequence (must begin with a backslash and be at least 2 characters long).

```ts
getEscaped(character: string): boolean | `\\${string}`
```

## Removing slashes

Be default, `removeSlashes` will unescape (decode) all Javascript escape sequences.

```ts
// Handles letter escapes
removeSlashes(`\\n`); // "\n"
// Handles ES6 Unicode Code Point escapes
removeSlashes('\\u{a}'); // "\n"
// Handles ES5 Unicode escapes
removeSlashes('\u000a'); // "\n"
// Handles hex escapes
removeSlashes('\x0a'); // "\n"
// Handles octal escapes
removeSlashes('\12'); // "\n"
// Handles any other backslash sequence by removing the leading slash
removeSlashes(`\\a`); // "a"
```

### Custom decoding

Although it should generally not be necessary because all escapes are handled by default, escape decoding can be customized using the `getUnescaped` option.

The following is the default, equivalent to not setting the `getUnescaped` option.

```ts
import { getUnescapedAny } from 'slashes';

removeSlashes('...', { getUnescaped: getUnescapedAny });
```

Included `getUnescaped` implementations:

- `getUnescapedAny` - Decode _ANY_ Javascript supported escape sequence.

A custom `getUnescaped` implementation receives the escape sequence as the first argument, and the escape sequence code point number or `null` (for single letter escape sequences) as the second argument. It can return `true` to use the standard decoding, `false` to treat the sequence as invalid (only removes the leading backslash), or a string (non-zero length) to provide a custom decoded value for the escape sequence.

```ts
getUnescaped(sequence: `\\${string}`, code: number | null): boolean | string
```
