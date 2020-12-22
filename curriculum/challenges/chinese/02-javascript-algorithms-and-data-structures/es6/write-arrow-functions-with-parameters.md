---
id: 587d7b88367417b2b2512b44
title: 编写带参数的箭头函数
challengeType: 1
forumTopicId: 301223
---

# --description--

和一般的函数一样，你也可以给箭头函数传递参数。

```js
// 给传入的数值乘以 2 并返回结果
const doubler = (item) => item * 2;
```

如果箭头函数只有一个参数，则可以省略包含该参数的括号。

```js
// the same function, without the argument parentheses
const doubler = item => item * 2;
```

可以将多个参数传递到箭头函数中。

```js
// multiplies the first input value by the second and returns it
const multiplier = (item, multi) => item * multi;
```

# --instructions--

使用箭头函数的语法重写`myConcat`函数，使其可以将`arr2`的内容填充在`arr1`里。

# --hints--

替换掉所有的`var`关键字。

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`myConcat`应该是一个常量 (使用`const`)。

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+myConcat/g));
```

`myConcat`应该是一个函数。

```js
assert(typeof myConcat === 'function');
```

`myConcat()` 应该返回 `[1, 2, 3, 4, 5]`。

```js
assert(() => {
  const a = myConcat([1], [2]);
  return a[0] == 1 && a[1] == 2;
});
```

不要使用`function`关键字。

```js
(getUserInput) => assert(!getUserInput('index').match(/function/g));
```

# --solutions--

