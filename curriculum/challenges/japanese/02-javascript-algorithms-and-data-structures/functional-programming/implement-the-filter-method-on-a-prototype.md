---
id: 587d7b8f367417b2b2512b64
title: プロトタイプに filter メソッドを実装する
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

`filter` メソッドについては、独自のバージョンを実装することで多くのことを学べるかもしれません。 `for` ループまたは `Array.prototype.forEach()` を使用することをお勧めします。

# --instructions--

`Array.prototype.filter()` とまったく同じように動作する、独自の `Array.prototype.myFilter()`を記述してください。 組み込みの `filter` メソッドを使用しないでください。 `myFilter` メソッドで `Array` インスタンスにアクセスするには `this` を使用します。

# --hints--

`new_s` は `[23, 65, 5]` と等しくなければなりません。

```js
assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
```

`filter` メソッドを使用しないでください。

```js
assert(!code.match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

# --solutions--

```js
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) newArray.push(this[i]);
  }
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```
