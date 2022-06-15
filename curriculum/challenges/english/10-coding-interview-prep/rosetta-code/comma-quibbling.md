---
id: 596e414344c3b2872167f0fe
title: Comma quibbling
challengeType: 5
forumTopicId: 302234
dashedName: comma-quibbling
---

# --description--

Comma quibbling is a task originally set by Eric Lippert in his 2009 blog. In this challenge, you will create a `string` from an `array`. You have to account for the `array` having no items, a single item, or multiple items in it. 

# --instructions--

Write a function to generate a string output which is the concatenation of input words from a Array where:

|             Array          |           Output         |
| -------------------------- | ------------------------ |
| []                         | "{}"                     |
| ["ABC"]                    | "{ABC}"                  |
| ["ABC", "DEF"]             | "{ABC and DEF}"          |
| ["ABC", "DEF", "G", "H"]   | "{ABC, DEF, G and H}"    |

# --hints--

`quibble` should be a function.

```js
assert(typeof quibble === 'function');
```

`quibble(["ABC"])` should return a string.

```js
assert(typeof quibble(['ABC']) === 'string');
```

`quibble([])` should return "{}".

```js
assert.equal(quibble(testCases[0]), results[0]);
```

`quibble(["ABC"])` should return `"{ABC}"`.

```js
assert.equal(quibble(testCases[1]), results[1]);
```

`quibble(["ABC", "DEF"])` should return `"{ABC and DEF}"`.

```js
assert.equal(quibble(testCases[2]), results[2]);
```

`quibble(["ABC", "DEF", "G", "H"])` should return `"{ABC, DEF, G and H}"`.

```js
assert.equal(quibble(testCases[3]), results[3]);
```

# --seed--

## --after-user-code--

```js
const testCases = [[], ["ABC"], ["ABC", "DEF"], ["ABC", "DEF", "G", "H"]];
const results = ["{}", "{ABC}", "{ABC and DEF}", "{ABC,DEF,G and H}"];
```

## --seed-contents--

```js
function quibble(words) {

  return true;
}
```

# --solutions--

```js
function quibble(words) {
  return "{" +
    words.slice(0, words.length - 1).join(",") +
   (words.length > 1 ? " and " : "") +
   (words[words.length - 1] || '') +
  "}";
}
```
