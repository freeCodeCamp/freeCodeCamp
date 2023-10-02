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
5 / 2 = 2 餘 1
2 * 2 = 4
5 - 4 = 1
</pre>

**用法**  
在數學中，判斷一個數是奇數還是偶數，只需要判斷這個數除以 `2` 得到的餘數是 0 還是 1。 如果是偶數，餘數是 `0`，而如果是奇數，餘數是 `1`。

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
