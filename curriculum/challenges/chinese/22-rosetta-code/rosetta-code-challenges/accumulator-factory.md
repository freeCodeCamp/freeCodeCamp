---
id: 594810f028c0303b75339ace
title: 累加器工厂
challengeType: 1
forumTopicId: 302222
dashedName: accumulator-factory
---

# --description--

A problem posed by Paul Graham is that of creating a function that takes a single (numeric) argument and which returns another function that is an accumulator. The returned accumulator function in turn also takes a single numeric argument, and returns the sum of all the numeric values passed in so far to that accumulator (including the initial value passed when the accumulator was created).

# --instructions--

创建一个函数，它接受一个数字 $n$ 并生成累加器函数，该函数返回传递给它们的每个数字的总和。

**规则：**

请勿使用全局变量。

**提示：**

关闭可保存外部状态。

# --hints--

`accumulator` 应该是一个函数。

```js
assert(typeof accumulator === 'function');
```

`accumulator(0)` 应该返回一个函数。

```js
assert(typeof accumulator(0) === 'function');
```

`accumulator(0)(2)` 应该返回一个数字。

```js
assert(typeof accumulator(0)(2) === 'number');
```

传入值 3、-4、1.5 和 5 应返回 5.5。

```js
assert(testFn(5) === 5.5);
```

# --seed--

## --after-user-code--

```js
const testFn = typeof accumulator(3) === 'function' && accumulator(3);
if (testFn) {
  testFn(-4);
  testFn(1.5);
}
```

## --seed-contents--

```js
function accumulator(sum) {

}
```

# --solutions--

```js
function accumulator(sum) {
  return function(n) {
    return sum += n;
  };
}
```
