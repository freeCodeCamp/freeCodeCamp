---
id: 6821ebd4237de8297eaee791
title: "JavaScript Challenge 15: camelCase"
challengeType: 28
dashedName: javascript-challenge-15
---

# --description--

Given a string, return its camel case version using the following rules:

- Words in the string argument are separated by one or more characters from the following set: space (` `), dash (`-`), or underscore (`_`). Treat any sequence of these as a word break.
- The first word should be all lowercase.
- Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
- All spaces and separators should be removed.

# --hints--

`toCamelCase("hello world")` should return `"helloWorld"`.

```js
assert.equal(toCamelCase("hello world"), "helloWorld");
```

`toCamelCase("HELLO WORLD")` should return `"helloWorld"`.

```js
assert.equal(toCamelCase("HELLO WORLD"), "helloWorld");
```

`toCamelCase("secret agent-X")` should return `"secretAgentX"`.

```js
assert.equal(toCamelCase("secret agent-X"), "secretAgentX");
```

`toCamelCase("FREE cODE cAMP")` should return `"freeCodeCamp"`.

```js
assert.equal(toCamelCase("FREE cODE cAMP"), "freeCodeCamp");
```

`toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk")` should return `"yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk"`.

```js
assert.equal(toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"), "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk");
```

# --seed--

## --seed-contents--

```js
function toCamelCase(s) {

  return s;
}
```

# --solutions--

```js
function toCamelCase(s) {
  const words = s.replace(/[_\- ]+/g, ' ').split(' ');

  return words.map((word, i) => {
    if (i === 0) {
      return word.toLowerCase();
    } else {
      const tempWord = word.split('');
      return tempWord.shift().toUpperCase() + tempWord.join('').toLowerCase();
    }
  }).join('')
}
```
