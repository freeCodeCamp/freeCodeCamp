---
id: 56105e7b514f539506016a5e
title: 使用 For 循环反向遍历数组
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
---

# --description--

for循环也可以逆向迭代，只要我们定义好合适的条件。

为了让每次倒数递减 2，我们需要改变我们的`初始化`，`条件判断`和`计数器`。

我们让`i = 10`，并且当`i > 0`的时候才继续循环。我们使用`i -= 2`来让`i`每次循环递减 2。

```js
var ourArray = [];
for (var i=10; i > 0; i-=2) {
  ourArray.push(i);
}
```

循环结束后，`ourArray`的值为`[10,8,6,4,2]`。 让我们改变`初始化`和`计数器`，这样我们就可以按照奇数从后往前两两倒着数。

# --instructions--

使用一个`for`循环，把 9 到 1 的奇数添加进`myArray`。

# --hints--

你应该使用`for`循环。

```js
assert(code.match(/for\s*\(/g).length > 1);
```

你应该使用数组方法`push`。

```js
assert(code.match(/myArray.push/));
```

`myArray`应该等于`[9,7,5,3,1]`。

```js
assert.deepEqual(myArray, [9, 7, 5, 3, 1]);
```

# --solutions--

