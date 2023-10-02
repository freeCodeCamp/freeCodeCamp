---
id: 587d7b88367417b2b2512b44
title: 编写带参数的箭头函数
challengeType: 1
forumTopicId: 301223
dashedName: write-arrow-functions-with-parameters
---

# --description--

和一般的函数一样，你也可以给箭头函数传递参数。

```js
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` 将返回 `8`。

如果箭头函数只有一个参数，则可以省略参数外面的括号。

```js
const doubler = item => item * 2;
```

可以给箭头函数传递多个参数。

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` 将返回 `8`。

# --instructions--

使用箭头函数的语法重写 `myConcat` 函数，将 `arr2` 的内容添加到 `arr1`。

# --hints--

应替换 `var` 关键词。

```js
assert.notMatch(code, /var/g);
```

`myConcat` 应该是一个常量（使用`const`）。

```js
assert.match(code, /const\s+myConcat/g);
```

`myConcat` 应该是一个带有两个参数的箭头函数。

```js
assert(
  /myConcat=\(\w+,\w+\)=>/.test(code.replace(/\s/g, '')) &&
    typeof myConcat === 'function'
);
```

`myConcat()` 应该返回 `[1, 2, 3, 4, 5]`。

```js
assert.deepEqual(myConcat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);
```

不能使用 `function` 关键字。

```js
assert.notMatch(code, /function/g);
```

# --seed--

## --seed-contents--

```js
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```

# --solutions--

```js
const myConcat = (arr1, arr2) =>  {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```
