---
id: 56104e9e514f539506016a5c
title: 使用 For 循環遍歷數組的奇數
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

對於循環，一次不必遞增一個。 通過更改我們的 `final-expression`，我們可以用偶數來計數。

初始化 `i = 0`，當 `i < 10` 的時候繼續循環。 `i += 2` 讓 `i` 每次循環之後增加 2。

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` 現在將包含 `[0, 2, 4, 6, 8]`。 改變計數器（`initialization`） ，這樣我們可以用奇數來遞增。

# --instructions--

寫一個 `for` 循環，把從 1 到 9 的奇數添加到 `myArray`。

# --hints--

應該使用 `for` 循環。

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` 應該等於 `[1, 3, 5, 7, 9]`。

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
