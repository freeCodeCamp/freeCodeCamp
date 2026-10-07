# Regular Expression Tokenizer

Tokenizes strings that represent a regular expressions.

![Depfu](https://img.shields.io/depfu/fent/ret.js)
[![codecov](https://codecov.io/gh/fent/ret.js/branch/master/graph/badge.svg)](https://codecov.io/gh/fent/ret.js)

# Usage

```js
const ret = require('ret');

let tokens = ret(/foo|bar/.source);
```

`tokens` will contain the following object

```js
{
  "type": ret.types.ROOT
  "options": [
    [ { "type": ret.types.CHAR, "value", 102 },
      { "type": ret.types.CHAR, "value", 111 },
      { "type": ret.types.CHAR, "value", 111 } ],
    [ { "type": ret.types.CHAR, "value",  98 },
      { "type": ret.types.CHAR, "value",  97 },
      { "type": ret.types.CHAR, "value", 114 } ]
  ]
}
```

# Reconstructing Regular Expressions from Tokens

The `reconstruct` function accepts an *any* token and returns, as a string, the *component* of the regular expression that is associated with that token.

```ts
import { reconstruct, types } from 'ret'
const tokens = ret(/foo|bar/.source)
const setToken = {
    "type": types.SET,
    "set": [
      { "type": types.CHAR, "value": 97 },
      { "type": types.CHAR, "value": 98 },
      { "type": types.CHAR, "value": 99 }
    ],
    "not": true
  }
reconstruct(tokens)                               // 'foo|bar'
reconstruct({ "type": types.CHAR, "value": 102 }) // 'f'
reconstruct(setToken)                             // '^abc'
```

# Token Types

`ret.types` is a collection of the various token types exported by ret.

### ROOT

Only used in the root of the regexp. This is needed due to the posibility of the root containing a pipe `|` character. In that case, the token will have an `options` key that will be an array of arrays of tokens. If not, it will contain a `stack` key that is an array of tokens.

```js
{
  "type": ret.types.ROOT,
  "stack": [token1, token2...],
}
```

```js
{
  "type": ret.types.ROOT,
  "options" [
    [token1, token2...],
    [othertoken1, othertoken2...]
    ...
  ],
}
```

### GROUP

Groups contain tokens that are inside of a parenthesis. If the group begins with `?` followed by another character, it's a special type of group. A ':' tells the group not to be remembered when `exec` is used. '=' means the previous token matches only if followed by this group, and '!' means the previous token matches only if NOT followed.

Like root, it can contain an `options` key instead of `stack` if there is a pipe.

```js
{
  "type": ret.types.GROUP,
  "remember" true,
  "followedBy": false,
  "notFollowedBy": false,
  "stack": [token1, token2...],
}
```

```js
{
  "type": ret.types.GROUP,
  "remember" true,
  "followedBy": false,
  "notFollowedBy": false,
  "options" [
    [token1, token2...],
    [othertoken1, othertoken2...]
    ...
  ],
}
```

### POSITION

`\b`, `\B`, `^`, and `$` specify positions in the regexp.

```js
{
  "type": ret.types.POSITION,
  "value": "^",
}
```

### SET

Contains a key `set` specifying what tokens are allowed and a key `not` specifying if the set should be negated. A set can contain other sets, ranges, and characters.

```js
{
  "type": ret.types.SET,
  "set": [token1, token2...],
  "not": false,
}
```

### RANGE

Used in set tokens to specify a character range. `from` and `to` are character codes.

```js
{
  "type": ret.types.RANGE,
  "from": 97,
  "to": 122,
}
```

### REPETITION

```js
{
  "type": ret.types.REPETITION,
  "min": 0,
  "max": Infinity,
  "value": token,
}
```

### REFERENCE

References a group token. `value` is 1-9.

```js
{
  "type": ret.types.REFERENCE,
  "value": 1,
}
```

### CHAR

Represents a single character token. `value` is the character code. This might seem a bit cluttering instead of concatenating characters together. But since repetition tokens only repeat the last token and not the last clause like the pipe, it's simpler to do it this way.

```js
{
  "type": ret.types.CHAR,
  "value": 123,
}
```

## Errors

ret.js will throw errors if given a string with an invalid regular expression. All possible errors are

* Invalid group. When a group with an immediate `?` character is followed by an invalid character. It can only be followed by `!`, `=`, or `:`. Example: `/(?_abc)/`
* Nothing to repeat. Thrown when a repetitional token is used as the first token in the current clause, as in right in the beginning of the regexp or group, or right after a pipe. Example: `/foo|?bar/`, `/{1,3}foo|bar/`, `/foo(+bar)/`
* Unmatched ). A group was not opened, but was closed. Example: `/hello)2u/`
* Unterminated group. A group was not closed. Example: `/(1(23)4/`
* Unterminated character class. A custom character set was not closed. Example: `/[abc/`

# Regular Expression Syntax

Regular expressions follow the [JavaScript syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp).

The following latest JavaScript additions are not supported yet:
* `\p` and `\P`: [Unicode property escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes)
* `(?<group>)` and `\k<group>`: [Named groups](https://github.com/tc39/proposal-regexp-named-groups)
* `(?<=)` and `(?<!)`: [Negative lookbehind assertions](https://github.com/tc39/proposal-regexp-lookbehind)

# Examples

`/abc/`

```js
{
  "type": ret.types.ROOT,
  "stack": [
    { "type": ret.types.CHAR, "value": 97 },
    { "type": ret.types.CHAR, "value": 98 },
    { "type": ret.types.CHAR, "value": 99 }
  ]
}
```

`/[abc]/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{
    "type": ret.types.SET,
    "set": [
      { "type": ret.types.CHAR, "value": 97 },
      { "type": ret.types.CHAR, "value": 98 },
      { "type": ret.types.CHAR, "value": 99 }
    ],
    "not": false
  }]
}
```

`/[^abc]/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{
    "type": ret.types.SET,
    "set": [
      { "type": ret.types.CHAR, "value": 97 },
      { "type": ret.types.CHAR, "value": 98 },
      { "type": ret.types.CHAR, "value": 99 }
    ],
    "not": true
  }]
}
```

`/[a-z]/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{
    "type": ret.types.SET,
    "set": [
      { "type": ret.types.RANGE, "from": 97, "to": 122 }
    ],
    "not": false
  }]
}
```

`/\w/`

```js
// Similar logic for `\W`, `\d`, `\D`, `\s` and `\S`    
{
  "type": ret.types.ROOT,
  "stack": [{
    "type": ret.types.SET,
    "set": [{
      { "type": ret.types.CHAR, "value": 95 },
      { "type": ret.types.RANGE, "from": 97, "to": 122 },
      { "type": ret.types.RANGE, "from": 65, "to": 90 },
      { "type": ret.types.RANGE, "from": 48, "to": 57 }
    }],
    "not": false
  }]
}
```

`/./`

```js
// any character but CR, LF, U+2028 or U+2029
{
  "type": ret.types.ROOT,
  "stack": [{
    "type": ret.types.SET,
    "set": [ 
      { "type": ret.types.CHAR, "value": 10 },
      { "type": ret.types.CHAR, "value": 13 },
      { "type": ret.types.CHAR, "value": 8232 },
      { "type": ret.types.CHAR, "value": 8233 }
    ],
    "not": true
  }]
}
```

`/a*/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{ 
    "type": ret.types.REPETITION, 
    "min": 0,
    "max": Infinity,
    "value": { "type": ret.types.CHAR, "value": 97 }
  }]
}
```

`/a+/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{ 
    "type": ret.types.REPETITION, 
    "min": 1,
    "max": Infinity,
    "value": { "type": ret.types.CHAR, "value": 97 },
  }]
}
```

`/a?/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{ 
    "type": ret.types.REPETITION, 
    "min": 0,
    "max": 1,
    "value": { "type": ret.types.CHAR, "value": 97 }
  }]
}
```

`/a{3}/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{ 
    "type": ret.types.REPETITION, 
    "min": 3,
    "max": 3,
    "value": { "type": ret.types.CHAR, "value": 97 }
  }]
}
```

`/a{3,5}/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{ 
    "type": ret.types.REPETITION, 
    "min": 3,
    "max": 5,
    "value": { "type": ret.types.CHAR, "value": 97 }
  }]
}
```

`/a{3,}/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{ 
    "type": ret.types.REPETITION, 
    "min": 3,
    "max": Infinity,
    "value": { "type": ret.types.CHAR, "value": 97 }
  }]
}
```

`/(a)/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{ 
    "type": ret.types.GROUP, 
    "stack": { "type": ret.types.CHAR, "value": 97 },
    "remember": true
  }]
}
```

`/(?:a)/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{ 
    "type": ret.types.GROUP, 
    "stack": { "type": ret.types.CHAR, "value": 97 },
    "remember": false
  }]
}
```

`/(?=a)/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{ 
    "type": ret.types.GROUP, 
    "stack": { "type": ret.types.CHAR, "value": 97 },
    "remember": false,
    "followedBy": true
  }]
}
```

`/(?!a)/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{ 
    "type": ret.types.GROUP, 
    "stack": { "type": ret.types.CHAR, "value": 97 },
    "remember": false,
    "notFollowedBy": true
  }]
}
```

`/a|b/`

```js
{
  "type": ret.types.ROOT,
  "options": [
    [{ "type": ret.types.CHAR, "value": 97 }], 
    [{ "type": ret.types.CHAR, "value": 98 }] 
  ]
}
```

`/(a|b)/`

```js
{
  "type": ret.types.ROOT,
  "stack": [
    "type": ret.types.GROUP,
    "remember": true,
    "options": [
      [{ "type": ret.types.CHAR, "value": 97 }], 
      [{ "type": ret.types.CHAR, "value": 98 }] 
    ]
  ]
}
```

`/^/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{
    "type": ret.types.POSITION,
    "value": "^"
  }]
}
```

`/$/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{
    "type": ret.types.POSITION,
    "value": "$"
  }]
}
```

`/\b/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{
    "type": ret.types.POSITION,
    "value": "b"
  }]
}
```

`/\B/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{
    "type": ret.types.POSITION,
    "value": "B"
  }]
}
```

`/\1/`

```js
{
  "type": ret.types.ROOT,
  "stack": [{
    "type": ret.types.REFERENCE,
    "value": 1
  }]
}
```

# Install

    npm install ret


# Tests

Tests are written with [vows](http://vowsjs.org/)

```bash
npm test
```

# Security

To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security). Tidelift will coordinate the fix and disclosure.
