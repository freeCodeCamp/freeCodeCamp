---
id: 56104e9e514f539506016a5c
title: 使用 For 循环遍历数组的奇数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

对于循环，一次不必递增一个。 通过更改我们的 `final-expression`，我们可以用偶数来计数。

初始化 `i = 0`，当 `i < 10` 的时候继续循环。 `i += 2` 让 `i` 每次循环之后增加 2。

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` 现在将包含 `[0, 2, 4, 6, 8]`。 改变计数器（`initialization`） ，这样我们可以用奇数来递增。

# --instructions--

写一个 `for` 循环，把从 1 到 9 的奇数添加到 `myArray`。

# --hints--

应该使用 `for` 循环。

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` 应该等于 `[1, 3, 5, 7, 9]`。

```js
assert.deepEqual(myArray, [1, 3, 5, 7, 9]);
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
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```
