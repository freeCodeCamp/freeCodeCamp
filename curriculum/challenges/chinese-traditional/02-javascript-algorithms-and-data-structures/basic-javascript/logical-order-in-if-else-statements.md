---
id: 5690307fddb111c6084545d7
title: if else 語句中的邏輯順序
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
forumTopicId: 18228
dashedName: logical-order-in-if-else-statements
---

# --description--

`if`、`else if` 語句中的代碼順序是很重要的。

在條件判斷語句中，代碼的執行順序是從上到下，所以你需要考慮清楚先執行哪一句，後執行哪一句。

這有兩個例子。

第一個例子：

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

第二個例子更改了代碼的執行順序：

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

這兩個函數看起來幾乎一模一樣，我們傳一個值進去看看它們有什麼區別。

```js
foo(0)
bar(0)
```

`foo(0)` 將返回字符串 `Less than one`，`bar(0)` 將返回字符串 `Less than two`。

# --instructions--

更改函數的邏輯順序以便通過所有的測試用例。

# --hints--

`orderMyLogic(4)` 應該返回字符串 `Less than 5`

```js
assert(orderMyLogic(4) === 'Less than 5');
```

`orderMyLogic(6)` 應該返回字符串 `Less than 10`

```js
assert(orderMyLogic(6) === 'Less than 10');
```

`orderMyLogic(11)`應該返回 `Greater than or equal to 10`。

```js
assert(orderMyLogic(11) === 'Greater than or equal to 10');
```

# --seed--

## --seed-contents--

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
```

# --solutions--

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```
