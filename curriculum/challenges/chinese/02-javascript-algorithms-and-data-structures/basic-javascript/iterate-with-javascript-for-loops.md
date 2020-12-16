---
id: cf1111c1c11feddfaeb5bdef
title: for 循环
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNVCe'
forumTopicId: 18219
---

# --description--

你可以使用循环多次执行相同的代码。

JavaScript 中最常见的循环就是 “`for循环`”。

for循环中的三个表达式用分号隔开：

`for ([初始化]; [条件判断]; [计数器])`

`初始化`语句只会在执行循环开始之前执行一次。它通常用于定义和设置你的循环变量。

`条件判断`语句会在每一轮循环的开始执行，只要条件判断为`true`就会继续执行循环。当条件为`false`的时候，循环将停止执行。这意味着，如果条件在一开始就为`false`，这个循环将不会执行。

`计数器`是在每一轮循环结束时执行，通常用于递增或递减。

在下面的例子中，先初始化`i = 0`，条件`i < 5`为真，进入第一次循环，执行大括号里的代码，第一次循环结束。递增`i`的值，条件判断，就这样依次执行下去，直到条件判断为假，整个循环结束。

```js
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

最终`ourArray`的值为`[0,1,2,3,4]`.

# --instructions--

使用`for`循环把从 1 到 5 添加进`myArray`中。

# --hints--

你应该使用`for`循环。

```js
assert(code.match(/for\s*\(/g).length > 1);
```

`myArray`应该等于`[1,2,3,4,5]`。

```js
assert.deepEqual(myArray, [1, 2, 3, 4, 5]);
```

# --solutions--

