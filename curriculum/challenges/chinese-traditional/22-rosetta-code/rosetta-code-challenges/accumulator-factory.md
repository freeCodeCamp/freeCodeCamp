---
id: 594810f028c0303b75339ace
title: 累加器工廠
challengeType: 1
forumTopicId: 302222
dashedName: accumulator-factory
---

# --description--

A problem posed by Paul Graham is that of creating a function that takes a single (numeric) argument and which returns another function that is an accumulator. The returned accumulator function in turn also takes a single numeric argument, and returns the sum of all the numeric values passed in so far to that accumulator (including the initial value passed when the accumulator was created).

# --instructions--

創建一個函數，它接受一個數字 $n$ 並生成累加器函數，該函數返回傳遞給它們的每個數字的總和。

**規則：**

請勿使用全局變量。

**提示：**

關閉可保存外部狀態。

# --hints--

`accumulator` 應該是一個函數。

```js
assert(typeof accumulator === 'function');
```

`accumulator(0)` 應該返回一個函數。

```js
assert(typeof accumulator(0) === 'function');
```

`accumulator(0)(2)` 應該返回一個數字。

```js
assert(typeof accumulator(0)(2) === 'number');
```

傳入值 3、-4、1.5 和 5 應返回 5.5。

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
