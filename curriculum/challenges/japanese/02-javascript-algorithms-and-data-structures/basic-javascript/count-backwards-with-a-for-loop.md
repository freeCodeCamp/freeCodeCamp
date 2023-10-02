---
id: 56105e7b514f539506016a5e
title: for ループでの減算
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
dashedName: count-backwards-with-a-for-loop
---

# --description--

for ループでは、適切な条件を定義することができれば、減算も可能です。

繰り返しごとに 2 ずつデクリメント (減算) するには、初期化式、条件式、および最終式を変更する必要があります。

`i = 10` から始めて、`i > 0` の間、ループ処理を行います。 `i -= 2` と記述すると、ループごとに `i` が 2 ずつデクリメントされます。

```js
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` の内容は `[10, 8, 6, 4, 2]` になります。 2 ずつ減算して奇数の降順の配列を作成できるように、初期化式と最終式を変更してみましょう。

# --instructions--

`for` ループを使用して、9 から 1 までの奇数を `myArray` に push してください。

# --hints--

この作業では `for` ループを使用してください。

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

配列メソッド `push` を使用してください。

```js
assert(code.match(/myArray.push/));
```

`myArray` は `[9, 7, 5, 3, 1]` となる必要があります。

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
