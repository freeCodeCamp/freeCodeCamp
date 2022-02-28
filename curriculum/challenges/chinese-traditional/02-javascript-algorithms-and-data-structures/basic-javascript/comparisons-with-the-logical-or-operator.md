---
id: 56533eb9ac21ba0edf2244d9
title: 邏輯或運算符
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
dashedName: comparisons-with-the-logical-or-operator
---

# --description--

只要<dfn>邏輯或</dfn>運算符（`||`）兩邊的任何一個<dfn>運算</dfn>的結果是 `true`，則返回 `true`。 否則，返回 `false`。

<dfn>邏輯或</dfn>運算符由兩個豎線（`||`）組成。 這個按鍵位於退格鍵和回車鍵之間。

下面這樣的語句你應該很熟悉：

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

只有當 `num` 大於等於 `5` 或小於等於 `10` 時，函數才返回 `Yes`。 相同的邏輯可以簡寫成：

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

# --instructions--

請使用邏輯或運算符把兩個 `if` 語句合併爲一個語句，如果 `val` 不在 `10` 和 `20` 之間（包括不是 10 和 不是 20），返回 `Outside`。 否則，返回 `Inside`。

# --hints--

應該使用一次 `||` 操作符。

```js
assert(code.match(/\|\|/g).length === 1);
```

應該只有一個 `if` 表達式。

```js
assert(code.match(/if/g).length === 1);
```

`testLogicalOr(0)` 應該返回字符串 `Outside`

```js
assert(testLogicalOr(0) === 'Outside');
```

`testLogicalOr(9)` 應該返回字符串 `Outside`

```js
assert(testLogicalOr(9) === 'Outside');
```

`testLogicalOr(10)` 應該返回字符串 `Inside`

```js
assert(testLogicalOr(10) === 'Inside');
```

`testLogicalOr(15)` 應該返回字符串 `Inside`

```js
assert(testLogicalOr(15) === 'Inside');
```

`testLogicalOr(19)` 應該返回字符串 `Inside`

```js
assert(testLogicalOr(19) === 'Inside');
```

`testLogicalOr(20)` 應該返回字符串 `Inside`

```js
assert(testLogicalOr(20) === 'Inside');
```

`testLogicalOr(21)` 應該返回字符串 `Outside`

```js
assert(testLogicalOr(21) === 'Outside');
```

`testLogicalOr(25)` 應該返回字符串 `Outside`

```js
assert(testLogicalOr(25) === 'Outside');
```

# --seed--

## --seed-contents--

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
```

# --solutions--

```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
```
