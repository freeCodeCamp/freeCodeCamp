---
id: 56105e7b514f539506016a5e
title: 使用 For 循環反向遍歷數組
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
dashedName: count-backwards-with-a-for-loop
---

# --description--

只要我們定義好合適的條件，for 循環也可以反向遍歷。

爲了讓每次遞減 2，我們需要改變 initialization、condition 和 final-expression。

設置 `i = 10`，並且當 `i > 0` 的時候才繼續循環。 我們使用 `i -= 2` 來讓 `i` 每次循環遞減 2。

```js
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` 現在將包含 `[10, 8, 6, 4, 2]`。 讓我們改變初始值和最後的表達式，這樣我們就可以按照奇數從後往前兩兩倒着數。

# --instructions--

使用一個 `for`循環，把從 9 到 1 的奇數添加到 `myArray`。

# --hints--

應該使用 `for` 循環。

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

應該使用數組方法 `push`。

```js
assert(code.match(/myArray.push/));
```

`myArray` 應該等於 `[9, 7, 5, 3, 1]`。

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
