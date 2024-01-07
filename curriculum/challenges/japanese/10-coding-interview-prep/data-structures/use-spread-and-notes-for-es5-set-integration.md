---
id: 587d8255367417b2b2512c73
title: ES5 Set() 統合にスプレッドとノートを使用する
challengeType: 1
forumTopicId: 301720
dashedName: use-spread-and-notes-for-es5-set-integration
---

# --description--

ES6 スプレッド演算子 "`...`" を覚えていますか？

"`...`" は、ES6 の反復可能なオブジェクトを配列に変換することができます。

Set を作成し、スプレッド機能を使ってみましょう。

```js
var set = new Set([1,2,3]);
var setToArr = [...set]
console.log(setToArr) // returns [ 1, 2, 3 ]
```

# --instructions--

この課題では、Set オブジェクトを `checkSet` 関数に渡します。 この関数は、Set の値が含まれている配列を返す必要があります。

これで、ES6 `Set()` オブジェクトの使い方を正しく学びました。よくできました！

# --hints--

`checkSet(new Set([1,2,3,4,5,6,7])` は `[1, 2, 3, 4, 5, 6, 7]` を返す必要があります。

```js
assert(
  (function () {
    var test = checkSet(new Set([1, 2, 3, 4, 5, 6, 7]));
    return DeepEqual(test, [1, 2, 3, 4, 5, 6, 7]);
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(set){
   // Only change code below this line

   // Only change code above this line
}
```

# --solutions--

```js
function checkSet(set){
return [...set];}
```
