---
id: cf1111c1c11feddfaeb1bdef
title: while 循环
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
forumTopicId: 18220
dashedName: iterate-with-javascript-while-loops
---

# --description--

你可以使用循环多次执行相同的代码。

我们将学习的第一种类型的循环称为 `while` 循环，当 while 指定的条件为真，循环才会执行，反之不执行。

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

在上面的代码里，`while` 循环执行 5 次把 0 到 4 的数字添加到 `ourArray` 数组里。

让我们通过 while 循环将值添加到数组中。

# --instructions--

通过一个 `while` 循环，把从 5 到 0（包括 5 和 0） 的值添加到 `myArray` 中。

# --hints--

你应该使用 `while` 循环。

```js
assert(code.match(/while/g));
```

`myArray` 应该等于 `[5, 4, 3, 2, 1, 0]`。

```js
assert.deepEqual(myArray, [5, 4, 3, 2, 1, 0]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
```
