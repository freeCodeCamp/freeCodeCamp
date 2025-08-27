---
id: 596fda99c69f779975a1b67d
title: Count occurrences of a substring
challengeType: 1
forumTopicId: 302237
dashedName: count-occurrences-of-a-substring
---

# --description--

Create a function, or show a built-in function, to count the number of non-overlapping occurrences of a substring inside a string.

The function should take two arguments:

<ul>
  <li>the first argument being the string to search, and</li>
  <li>the second a substring to be searched for.</li>
</ul>

It should return an integer count.

The matching should yield the highest number of non-overlapping matches.

In general, this essentially means matching from left-to-right or right-to-left.

# --hints--

`countSubstring` should be a function.

```js
assert(typeof countSubstring === 'function');
```

`countSubstring("the three truths", "th")` should return `3`.

```js
assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
```

`countSubstring("ababababab", "abab")` should return `2`.

```js
assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
```

`countSubstring("abaabba*bbaba*bbab", "a*b")` should return `2`.

```js
assert.equal(countSubstring(testCases[2], searchString[2]), results[2]);
```

# --seed--

## --after-user-code--

```js
const testCases = ['the three truths', 'ababababab', 'abaabba*bbaba*bbab'];
const searchString = ['th', 'abab', 'a*b'];
const results = [3, 2, 2];
```

## --seed-contents--

```js
function countSubstring(str, subStr) {

  return true;
}
```

# --solutions--

```js
function countSubstring(str, subStr) {
  const escapedSubStr = subStr.replace(/[.+*?^$[\]{}()|/]/g, '\\$&');
  const matches = str.match(new RegExp(escapedSubStr, 'g'));
  return matches ? matches.length : 0;
}
```
