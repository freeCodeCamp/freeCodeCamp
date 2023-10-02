---
id: 56533eb9ac21ba0edf2244ae
title: 求余运算
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

<dfn>remainder</dfn> 求余运算符 `%` 返回两个数相除得到的余数

**示例**

<pre>
5 % 2 = 1
5 / 2 = 2 余 1
2 * 2 = 4
5 - 4 = 1
</pre>

**用法**  
在数学中，判断一个数是奇数还是偶数，只需要判断这个数除以 `2` 得到的余数是 0 还是 1。 如果是偶数，余数是 `0`，而如果是奇数，余数是 `1`。

<pre>
17 % 2 = 1
48 % 2 = 0
</pre>

**提示**余数运算符（<dfn>remainder</dfn>）有时被错误地称为“模数”运算符。 它与模数非常相似，但不能用于负数的运算。

# --instructions--

使用 <dfn>remainder</dfn> （`%`）运算符，计算 `11` 除以 `3` 的余数，并把余数赋给变量 `remainder`。

# --hints--

变量 `remainder` 应该被初始化。

```js
assert(/(const|let|var)\s+?remainder/.test(code));
```

`remainder` 的值应该等于 `2`。

```js
assert(remainder === 2);
```

你应该使用 `%` 运算符。

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
