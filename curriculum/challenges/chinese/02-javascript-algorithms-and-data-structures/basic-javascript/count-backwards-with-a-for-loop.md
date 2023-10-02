---
id: 56105e7b514f539506016a5e
title: 使用 For 循环反向遍历数组
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
dashedName: count-backwards-with-a-for-loop
---

# --description--

只要我们定义好合适的条件，for 循环也可以反向遍历。

为了让每次递减 2，我们需要改变 initialization、condition 和 final-expression。

设置 `i = 10`，并且当 `i > 0` 的时候才继续循环。 我们使用 `i -= 2` 来让 `i` 每次循环递减 2。

```js
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` 现在将包含 `[10, 8, 6, 4, 2]`。 让我们改变初始值和最后的表达式，这样我们就可以按照奇数从后往前两两倒着数。

# --instructions--

使用一个 `for`循环，把从 9 到 1 的奇数添加到 `myArray`。

# --hints--

应该使用 `for` 循环。

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

应该使用数组方法 `push`。

```js
assert(code.match(/myArray.push/));
```

`myArray` 应该等于 `[9, 7, 5, 3, 1]`。

```js
assert.deepEqual(myArray, [9, 7, 5, 3, 1]);
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
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```
