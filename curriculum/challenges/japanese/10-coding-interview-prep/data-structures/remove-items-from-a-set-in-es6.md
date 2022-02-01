---
id: 587d8254367417b2b2512c71
title: ES6 でセットから要素を削除する
challengeType: 1
forumTopicId: 301713
dashedName: remove-items-from-a-set-in-es6
---

# --description--

`delete` メソッドを使って ES6 のセットから要素を削除する方法を練習しましょう。

まず、ES6のセットを作成します。

```js
var set = new Set([1,2,3]);
```

次に、`delete` メソッドを使用してセットから要素を削除します。

```js
set.delete(1);
console.log([...set]) // should return [ 2, 3 ]
```

# --instructions--

整数 1、2、3、4、5 を使ってセットを作成してください。

値 2 と 5 を削除してから、セットを返します。

# --hints--

セットには、値 1、3、4 が含まれている必要があります。

```js
assert(
  (function () {
    var test = checkSet();
    return test.has(1) && test.has(3) && test.has(4) && test.size === 3;
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(){
  // Only change code below this line
  var set = null;

  // Only change code above this line
  return set;   
}
```

# --solutions--

```js
function checkSet(){
var set = new Set([1,2,3,4,5]);
set.delete(2);
set.delete(5);
return set;}
```
