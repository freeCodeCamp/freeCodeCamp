---
id: 587d7b8f367417b2b2512b62
title: プロトタイプに map を実装する
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

前に説明した `Array.prototype.map()` (または単純に `map()`) の適用からわかるように、`map` メソッドは、呼び出された配列と同じ長さの配列を返します。 また、コールバック関数で操作しない限り、元の配列も変更しません。

言い換えれば、`map` は純粋な関数であり、その出力は入力にのみ依存します。 さらに、引数として別の関数を取ります。

`map` メソッドについては、独自のバージョンを実装することで多くのことを学べるかもしれません。 `for` ループまたは `Array.prototype.forEach()` を使用することをお勧めします。

# --instructions--

`Array.prototype.map()` とまったく同じように動作する、独自の `Array.prototype.myMap()`を記述してください。 組み込みの `map` メソッドを使用しないでください。 `myMap` メソッドで `Array` インスタンスにアクセスするには `this` を使用します。

# --hints--

`new_s` は `[46, 130, 196, 10]` と等しくなければなりません。

```js
assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
```

コードでは `map` メソッドを使用しないでください。

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```

# --solutions--

```js
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (const elem of this) {
    newArray.push(callback(elem));
  }
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```
