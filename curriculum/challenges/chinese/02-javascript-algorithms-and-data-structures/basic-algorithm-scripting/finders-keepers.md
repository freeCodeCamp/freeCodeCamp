---
id: a6e40f1041b06c996f7b2406
title: Finders Keepers
challengeType: 5
videoUrl: ''
---

# --description--

创建一个查看数组（第一个参数）的函数，并返回数组中传递真值测试的第一个元素（第二个参数）。如果没有元素通过测试，则返回undefined。如果卡住，请记得使用[Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) 。尝试配对程序。编写自己的代码。

# --hints--

`findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })`应该返回8。

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

`findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })`应返回undefined。

```js
assert.strictEqual(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  }),
  undefined
);
```

# --solutions--

