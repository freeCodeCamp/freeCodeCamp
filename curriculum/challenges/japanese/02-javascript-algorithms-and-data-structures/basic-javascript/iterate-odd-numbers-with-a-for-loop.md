---
id: 56104e9e514f539506016a5c
title: for ループによる奇数の繰り返し処理
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

for ステートメントのループ処理は必ずしも 1 回に 1 つずつ繰り返す必要はありません。 `final-expression` の部分を変更して偶数ずつカウントすることができます。

`i = 0` から始めて、`i < 10` の間、ループ処理を行います。 `i += 2` で、`i` をループごとに 2 ずつインクリメントします。

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` には `[0, 2, 4, 6, 8]` が格納されます。 奇数をカウントできるように `initialization` の部分を変更してみましょう。

# --instructions--

`for` ループを使用して、1 から 9 までの奇数を `myArray` に push してください。

# --hints--

この作業には `for` ループを使用してください。

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` は `[1, 3, 5, 7, 9]` になる必要があります。

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
