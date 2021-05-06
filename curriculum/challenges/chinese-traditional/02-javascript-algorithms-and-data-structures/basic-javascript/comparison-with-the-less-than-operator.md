---
id: 56533eb9ac21ba0edf2244d6
title: 小於運算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVRWtB'
forumTopicId: 16789
dashedName: comparison-with-the-less-than-operator
---

# --description--

使用小於運算符（`<`）來比較兩個數字。 如果小於運算符左邊的數字比右邊的數字小，它會返回 `true`。 否則會返回 `false`。 與相等運算符類似，小於運算符在做比較的時候會轉換值的數據類型。

**例如：**

```js
2   < 5
'3' < 7
5   < 5
3   < 2
'8' < 4
```

按順序，這些表達式會返回 `true`、`true`、`false`、`false` 和 `false`。

# --instructions--

添加小於運算符到指定行，使得函數的返回語句有意義。

# --hints--

`testLessThan(0)` 應該返回字符串 `Under 25`。

```js
assert(testLessThan(0) === 'Under 25');
```

`testLessThan(24)` 應該返回字符串 `Under 25`。

```js
assert(testLessThan(24) === 'Under 25');
```

`testLessThan(25)` 應該返回字符串 `Under 55`。

```js
assert(testLessThan(25) === 'Under 55');
```

`testLessThan(54)` 應該返回字符串 `Under 55`。

```js
assert(testLessThan(54) === 'Under 55');
```

`testLessThan(55)` 應該返回字符串 `55 or Over`。

```js
assert(testLessThan(55) === '55 or Over');
```

`testLessThan(99)` 應該返回字符串 `55 or Over`。

```js
assert(testLessThan(99) === '55 or Over');
```

應該使用 `<` 運算符至少兩次。

```js
assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
```

# --solutions--

```js
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
```
