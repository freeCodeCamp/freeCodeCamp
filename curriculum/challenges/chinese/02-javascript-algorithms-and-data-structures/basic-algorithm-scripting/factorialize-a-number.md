---
id: a302f7aae1aa3152a5b413bc
title: 计算整数的阶乘
challengeType: 1
forumTopicId: 16013
dashedName: factorialize-a-number
---

# --description--

返回一个给定整数的阶乘计算结果。

对于整数 `n`，n 的阶乘就是所有小于等于 `n` 的正整数的乘积。

阶乘通常用符号 `n!` 来表示。

例如：`5! = 1 * 2 * 3 * 4 * 5 = 120`

在这个挑战中，只有非负整数会作为参数传入函数。

# --hints--

`factorialize(5)` 应返回一个数字。

```js
assert(typeof factorialize(5) === 'number');
```

`factorialize(5)` 应该返回 `120`。

```js
assert(factorialize(5) === 120);
```

`factorialize(10)` 应该返回 `3628800`。

```js
assert(factorialize(10) === 3628800);
```

`factorialize(20)` 应该返回 `2432902008176640000`。

```js
assert(factorialize(20) === 2432902008176640000);
```

`factorialize(0)` 应该返回 `1`。

```js
assert(factorialize(0) === 1);
```

# --seed--

## --seed-contents--

```js
function factorialize(num) {
  return num;
}

factorialize(5);
```

# --solutions--

```js
function factorialize(num) {
  return num < 1 ? 1 : num * factorialize(num - 1);
}

factorialize(5);
```
