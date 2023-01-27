---
id: 56533eb9ac21ba0edf2244d7
title: 小於或等於運算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVR7Am'
forumTopicId: 16788
dashedName: comparison-with-the-less-than-or-equal-to-operator
---

# --description--

使用小於等於運算符（`<=`）比較兩個數字的大小。 如果在小於等於運算符左邊的數字小於或者等於右邊的數字，它會返回 `true`。 如果在小於等於運算符左邊的數字大於右邊的數字，它會返回 `false`。 與相等運算符類似，小於或等於運算符會轉換數據類型。

**例如**

```js
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false
```

# --instructions--

將小於或等於運算符添加到指示的行，以便返回語句有意義。

# --hints--

`testLessOrEqual(0)` 應該返回 `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(0) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(11)` 應該返回 `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(11) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(12)` 應該返回 `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(12) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(23)` 應該返回 `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(23) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(24)` 應該返回 `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(24) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(25)` 應該返回 `More Than 24`

```js
assert(testLessOrEqual(25) === 'More Than 24');
```

`testLessOrEqual(55)` 應該返回 `More Than 24`

```js
assert(testLessOrEqual(55) === 'More Than 24');
```

應該使用 `<=` 運算符至少兩次

```js
assert(code.match(/val\s*<=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
```

# --solutions--

```js
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
```
