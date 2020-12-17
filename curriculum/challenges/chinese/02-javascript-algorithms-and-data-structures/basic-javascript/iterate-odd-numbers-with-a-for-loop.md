---
id: 56104e9e514f539506016a5c
title: 使用 For 循环遍历数组的奇数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
---

# --description--

for循环可以按照我们指定的顺序来迭代，通过更改我们的`计数器`，我们可以按照偶数顺序来迭代。

初始化`i = 0`，当`i < 10`的时候继续循环。

`i += 2`让`i`每次循环之后增加2。

```js
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

循环结束后，`ourArray`的值为`[0,2,4,6,8]`。 改变`计数器`，这样我们可以用奇数来数。

# --instructions--

写一个`for`循环，把从 1 到 9 的奇数添加到`myArray`。

# --hints--

你应该使用`for`循环。

```js
assert(code.match(/for\s*\(/g).length > 1);
```

`myArray`应该等于`[1,3,5,7,9]`。

```js
assert.deepEqual(myArray, [1, 3, 5, 7, 9]);
```

# --solutions--

