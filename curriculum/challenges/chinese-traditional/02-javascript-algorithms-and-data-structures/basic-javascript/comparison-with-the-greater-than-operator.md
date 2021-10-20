---
id: 56533eb9ac21ba0edf2244d4
title: 大於運算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp6GbH4'
forumTopicId: 16786
dashedName: comparison-with-the-greater-than-operator
---

# --description--

使用大於運算符（`>`）來比較兩個數字。 如果大於運算符左邊的數字大於右邊的數字，將會返回 `true`。 否則，它返回 `false`。

與相等運算符一樣，大於運算符在比較的時候，會轉換值的數據類型。

**例如：**

```js
5   >  3
7   > '3'
2   >  3
'1' >  9
```

按順序，這些表達式會返回 `true`、`true`、`false` 和 `false`。

# --instructions--

添加大於運算符到指定的行，使得返回的語句是有意義的。

# --hints--

`testGreaterThan(0)` 應該返回字符串 `10 or Under`。

```js
assert(testGreaterThan(0) === '10 or Under');
```

`testGreaterThan(10)` 應該返回字符串 `10 or Under`。

```js
assert(testGreaterThan(10) === '10 or Under');
```

`testGreaterThan(11)` 應該返回字符串 `Over 10`。

```js
assert(testGreaterThan(11) === 'Over 10');
```

`testGreaterThan(99)` 應該返回字符串 `Over 10`。

```js
assert(testGreaterThan(99) === 'Over 10');
```

`testGreaterThan(100)` 應該返回字符串 `Over 10`。

```js
assert(testGreaterThan(100) === 'Over 10');
```

`testGreaterThan(101)` 應該返回字符串 `Over 100`。

```js
assert(testGreaterThan(101) === 'Over 100');
```

`testGreaterThan(150)` 應該返回字符串 `Over 100`。

```js
assert(testGreaterThan(150) === 'Over 100');
```

應該使用 `>` 運算符至少兩次。

```js
assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
```

# --solutions--

```js
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
```
