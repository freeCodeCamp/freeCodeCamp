---
id: a26cbbe9ad8655a977e1ceb5
title: 找出字符串中的最長單詞
challengeType: 1
forumTopicId: 16015
dashedName: find-the-longest-word-in-a-string
---

# --description--

返回給出的句子中，最長單詞的長度。

函數的返回值應是一個數字。

# --hints--

`findLongestWordLength("The quick brown fox jumped over the lazy dog")` 應返回一個數字。

```js
assert(
  typeof findLongestWordLength(
    'The quick brown fox jumped over the lazy dog'
  ) === 'number'
);
```

`findLongestWordLength("The quick brown fox jumped over the lazy dog")` 應返回 `6`。

```js
assert(
  findLongestWordLength('The quick brown fox jumped over the lazy dog') === 6
);
```

`findLongestWordLength("May the force be with you")` 應返回 `5`。

```js
assert(findLongestWordLength('May the force be with you') === 5);
```

`findLongestWordLength("Google do a barrel roll")` 應返回 `6`。

```js
assert(findLongestWordLength('Google do a barrel roll') === 6);
```

`findLongestWordLength("What is the average airspeed velocity of an unladen swallow")` 應返回 `8`。

```js
assert(
  findLongestWordLength(
    'What is the average airspeed velocity of an unladen swallow'
  ) === 8
);
```

`findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")` 應返回 `19`。

```js
assert(
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  ) === 19
);
```

# --seed--

## --seed-contents--

```js
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

# --solutions--

```js
function findLongestWordLength(str) {
  return str.split(' ').sort((a, b) => b.length - a.length)[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```
