---
id: 587d8255367417b2b2512c72
title: ES6 Set に .has と .size を使用する
challengeType: 1
forumTopicId: 301717
dashedName: use--has-and--size-on-an-es6-set
---

# --description--

ES6 Set オブジェクトで利用できる .has メソッドと .size メソッドを見てみましょう。

まず、ES6 Set を作成します。

```js
var set = new Set([1,2,3]);
```

.has メソッドは、その値がセットに含まれているかどうかを調べます。

```js
var hasTwo = set.has(2);
```

.size メソッドは、セットのサイズを表す整数を返します。

```js
var howBig = set.size;
```

# --instructions--

この課題では、checkSet() 関数に配列と値を渡します。 この関数は配列引数から ES6 Set を作成します。 値の引数がセットに含まれているかどうかを調べてください。 セットのサイズを求めてください。 そして、配列内のこれら 2 つの値を返してください。

# --hints--

`checkSet([4, 5, 6], 3)` は [false, 3 ] を返す必要があります

```js
assert(
  (function () {
    var test = checkSet([4, 5, 6], 3);
    return DeepEqual(test, [false, 3]);
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(arrToBeSet, checkValue){

   // Only change code below this line

   // Only change code above this line

}
```

# --solutions--

```js
function checkSet(arrToBeSet, checkValue){
var set = new Set(arrToBeSet);
var result = [
set.has(checkValue),
set.size
];
return result;
}
```
