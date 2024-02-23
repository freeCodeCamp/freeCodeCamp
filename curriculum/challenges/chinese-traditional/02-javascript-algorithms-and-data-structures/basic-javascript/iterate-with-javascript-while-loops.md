---
id: cf1111c1c11feddfaeb1bdef
title: while 循環
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
forumTopicId: 18220
dashedName: iterate-with-javascript-while-loops
---

# --description--

你可以使用循環多次執行相同的代碼。

我們將學習的第一種類型的循環稱爲 `while` 循環，當 while 指定的條件爲真，循環纔會執行，反之不執行。

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

在上面的代碼裏，`while` 循環執行 5 次把 0 到 4 的數字添加到 `ourArray` 數組裏。

讓我們通過 while 循環將值添加到數組中。

# --instructions--

通過一個 `while` 循環，把從 5 到 0（包括 5 和 0） 的值添加到 `myArray` 中。

# --hints--

你應該使用 `while` 循環。

```js
assert(code.match(/while/g));
```

`myArray` 應該等於 `[5, 4, 3, 2, 1, 0]`。

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
