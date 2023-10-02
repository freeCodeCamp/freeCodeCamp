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

`[23, 65, 98, 5, 13].myMap(item => item * 2)` は `[46, 130, 196, 10, 26]` と等しくなければなりません。

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item * 2;
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())` は `["NAOMI", "QUINCY", "CAMPERBOT"]` を返す必要があります。

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element.toUpperCase();
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])` は `[1, 2, 5, 2, 1]` を返す必要があります。

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array[index + 1] || array[0];
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`map` メソッドは使用しないでください。

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};
```

# --solutions--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const doubled_s = s.myMap(item => item * 2);
```
