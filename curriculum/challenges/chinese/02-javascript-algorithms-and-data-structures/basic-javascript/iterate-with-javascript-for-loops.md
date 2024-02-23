---
id: cf1111c1c11feddfaeb5bdef
title: for 循环
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNVCe'
forumTopicId: 18219
dashedName: iterate-with-javascript-for-loops
---

# --description--

你可以使用循环多次执行相同的代码。

JavaScript 中最常见的循环就是 `for`，它可以循环指定次数。

for 循环中的可选三个表达式用分号隔开：

`for (a; b; c)`，其中`a`为初始化语句，`b`为条件语句，`c` 是最终的表达式。

初始化语句只会在执行循环开始之前执行一次。 它通常用于定义和设置你的循环变量。

循环条件语句会在每一轮循环的开始前执行，只要条件判断为 `true` 就会继续执行循环。 当条件为 `false` 的时候，循环将停止执行。 这意味着，如果条件在一开始就为 false，这个循环将不会执行。

终止循环表达式在每次循环迭代结束， 在下一个条件检查之前时执行，通常用来递增或递减循环计数。

在下面的例子中，先初始化 `i = 0`，条件 `i < 5` 为 true 时，进入循环。 每次循环后 `i` 的值增加 `1`，然后执行终止循环条件表达式 `i++`。

```js
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

`ourArray` 现在的值为 `[0, 1, 2, 3, 4]`。

# --instructions--

使用 `for` 循环把从 1 到 5 添加进 `myArray` 中。

# --hints--

你应该使用 `for` 循环。

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` 应该等于 `[1, 2, 3, 4, 5]`。

```js
assert.deepEqual(myArray, [1, 2, 3, 4, 5]);
```

# --seed--

## --after-user-code--

```js
if (typeof myArray !== "undefined"){(function(){return myArray;})();}
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
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
```
