---
id: cf1111c1c11feddfaeb5bdef
title: for 循環
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNVCe'
forumTopicId: 18219
dashedName: iterate-with-javascript-for-loops
---

# --description--

你可以使用循環多次執行相同的代碼。

JavaScript 中最常見的循環就是 `for`，它可以循環指定次數。

for 循環中的可選三個表達式用分號隔開：

`for (a; b; c)`，其中`a`爲初始化語句，`b`爲條件語句，`c` 是最終的表達式。

初始化語句只會在執行循環開始之前執行一次。 它通常用於定義和設置你的循環變量。

循環條件語句會在每一輪循環的開始前執行，只要條件判斷爲 `true` 就會繼續執行循環。 當條件爲 `false` 的時候，循環將停止執行。 這意味着，如果條件在一開始就爲 false，這個循環將不會執行。

終止循環表達式在每次循環迭代結束， 在下一個條件檢查之前時執行，通常用來遞增或遞減循環計數。

在下面的例子中，先初始化 `i = 0`，條件 `i < 5` 爲 true 時，進入循環。 每次循環後 `i` 的值增加 `1`，然後執行終止循環條件表達式 `i++`。

```js
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

`ourArray` 現在的值爲 `[0, 1, 2, 3, 4]`。

# --instructions--

使用 `for` 循環把從 1 到 5 添加進 `myArray` 中。

# --hints--

你應該使用 `for` 循環。

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` 應該等於 `[1, 2, 3, 4, 5]`。

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
