---
id: cf1111c1c11feddfaeb1bdef
title: JavaScript の while ループによる繰り返し処理
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
forumTopicId: 18220
dashedName: iterate-with-javascript-while-loops
---

# --description--

ループ処理によって、同じコードを何度も実行できます。

まず最初に `while` ループと呼ばれるループ型を学習します。こう呼ばれるのは特定の条件が true である間 (while) は実行され、条件が true でなくなると終了するためです。

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

上記のコード例では、`while` ループは 5 回実行され、0 から 4 までの数字を `ourArray` に追加します。

while ループを利用して配列に値を push してみましょう。

# --instructions--

`while` ループを使用して、`myArray` に数字 5 ～ 0 を降順に追加してください。

# --hints--

この課題には `while` ループを使用してください。

```js
assert(code.match(/while/g));
```

`myArray` は `[5, 4, 3, 2, 1, 0]` となる必要があります。

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
