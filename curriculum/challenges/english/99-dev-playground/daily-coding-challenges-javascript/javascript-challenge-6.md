---
id: 681cb1afdab50c87ddb2e517
title: "JavaScript Challenge 6: Anagram Checker"
challengeType: 28
dashedName: javascript-challenge-6
---

# --description--

Given two strings, determine if they are anagrams of each other (contain the same characters in any order).

- Ignore casing and white space.

# --hints--

`areAnagrams("listen", "silent")` should return `true`.

```js
assert.isTrue(areAnagrams("listen", "silent"));
```

`areAnagrams("School master", "The classroom")` should return `true`.

```js
assert.isTrue(areAnagrams("School master", "The classroom"));
```

`areAnagrams("A gentleman", "Elegant man")` should return `true`.

```js
assert.isTrue(areAnagrams("A gentleman", "Elegant man"));
```

`areAnagrams("Hello", "World")` should return `false`.

```js
assert.isFalse(areAnagrams("Hello", "World"));
```

`areAnagrams("apple", "banana")` should return `false`.

```js
assert.isFalse(areAnagrams("apple", "banana"));
```

`areAnagrams("cat", "dog")` should return `false`.

```js
assert.isFalse(areAnagrams("cat", "dog"));
```

# --seed--

## --seed-contents--

```js
function areAnagrams(str1, str2) {

  return str1;
}
```

# --solutions--

```js
function areAnagrams(str1, str2) {
  const clean = (str) =>
    str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    
  return clean(str1) === clean(str2);
}
```
