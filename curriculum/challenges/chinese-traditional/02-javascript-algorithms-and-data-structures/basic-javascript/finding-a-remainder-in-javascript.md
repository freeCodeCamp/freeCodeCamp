---
id: 56533eb9ac21ba0edf2244ae
title: 求餘運算
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

<dfn>remainder</dfn> 求餘運算符 `%` 返回兩個數相除得到的餘數

**示例**

<pre>
5 % 2 = 1
5 / 2 = 2 remainder 1
2 * 2 = 4
5 - 4 = 1
</pre>

**Usage**  
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by `2`. Even numbers have a remainder of `0`, while odd numbers a remainder of `1`.

<pre>
17 % 2 = 1
48 % 2 = 0
</pre>

**提示**餘數運算符（<dfn>remainder</dfn>）有時被錯誤地稱爲“模數”運算符。 它與模數非常相似，但不能用於負數的運算。

# --instructions--

使用 <dfn>remainder</dfn> （`%`）運算符，計算 `11` 除以 `3` 的餘數，並把餘數賦給變量 `remainder`。

# --hints--

變量 `remainder` 應該被初始化。

```js
assert(/(const|let|var)\s+?remainder/.test(code));
```

`remainder` 的值應該等於 `2`。

```js
assert(remainder === 2);
```

你應該使用 `%` 運算符。

```js
assert(/\s+?remainder\s*?=\s*?.*%.*;?/.test(code));
```

# --seed--

## --after-user-code--

```js
(function (y) {
  return 'remainder = ' + y;
})(remainder);
```

## --seed-contents--

```js
const remainder = 0;
```

# --solutions--

```js
const remainder = 11 % 3;
```
