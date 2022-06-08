---
id: 596e414344c3b2872167f0fe
title: Comma quibbling
challengeType: 5
forumTopicId: 302234
dashedName: comma-quibbling
---

# --description--

Comma quibbling is a task originally set by Eric Lippert in his 2009 blog. In this challenge, you will create a `string` from an `array`. You have to account for the `array` having none items, single item, or multiple items in it. 

# --instructions--

Write a function to generate a string output which is the concatenation of input words from a Array where:

|                          Array                           |                      Output                             |
| -------------------------------------------------------- | ------------------------------------------------------- |
| []                                                       | "{}"                                                    |
| ["freeCodeCamp"]                                         | "{freeCodeCamp}"                                        |
| ["freeCodeCamp", "Curriculum"]                           | "{freeCodeCamp and Curriculum}"                         |
| ["freeCodeCamp", "Curriculum", "Articles", "Volunteers"] | "{freeCodeCamp, Curriculum, Articles and Volunteers}"   |

# --hints--

`quibble` should be a function.

```js
assert(typeof quibble === 'function');
```

`quibble(["freeCodeCamp"])` should return a string.

```js
assert(typeof quibble(['freeCodeCamp']) === 'string');
```

`quibble([])` should return "{}".

```js
assert.equal(quibble(testCases[0]), results[0]);
```

`quibble(["freeCodeCamp"])` should return `"{freeCodeCamp}"`.

```js
assert.equal(quibble(testCases[1]), results[1]);
```

`quibble(["freeCodeCamp", "Curriculum"])` should return "{freeCodeCamp and Curriculum}".

```js
assert.equal(quibble(testCases[2]), results[2]);
```

`quibble(["freeCodeCamp", "Curriculum", "Articles", "Volunteers"])` should return "{freeCodeCamp, Curriculum, Articles and Volunteers}".

```js
assert.equal(quibble(testCases[3]), results[3]);
```

# --seed--

## --after-user-code--

```js
const testCases = [[], ["freeCodeCamp"], ["freeCodeCamp", "Curriculum"], ["freeCodeCamp", "Curriculum", "Articles", "Volunteers"]];
const results = ["{}", "{freeCodeCamp}", "{freeCodeCamp and Curriculum}", "{freeCodeCamp,Curriculum,Articles and Volunteers}"];
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
