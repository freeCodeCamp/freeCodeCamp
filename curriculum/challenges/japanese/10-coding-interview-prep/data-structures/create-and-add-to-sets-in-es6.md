---
id: 587d8254367417b2b2512c70
title: ES6 で Set を作成する・Set に追加する
challengeType: 1
forumTopicId: 301636
dashedName: create-and-add-to-sets-in-es6
---

# --description--

これまで ES5 を使って作業してきた方も、これから ES6 で同じようなことを行います。 その方がはるかに簡単です。 ES6 には `Set` というデータ構造が組み込まれており、これまで手作業で書いていた操作の多くが既に用意されています。 それを見てみましょう。

新しい空のセット (集合) を作成するには次のようにします。

```js
var set = new Set();
```

1 つの値を持つセットを作成できます。

```js
var set = new Set(1);
```

配列を使用してセットを作成できます。

```js
var set = new Set([1, 2, 3]);
```

セットを作成したら、`add` メソッドを使用して任意の値を追加できます。

```js
var set = new Set([1, 2, 3]);
set.add([4, 5, 6]);
```

セットは重複値を含むことができないデータ構造であることを思い出してください。

```js
var set = new Set([1, 2, 3, 1, 2, 3]);
// set contains [1, 2, 3] only
```

# --instructions--

この演習では、`1、2、3、'Taco'、'Cat'、'Awesome'` という値のセットを返してください。

# --hints--

`Set` には `1、2、3、Taco、Cat、Awesome` という値のみを含める必要があります。

```js
assert(
  (function () {
    var test = checkSet();
    return (
      test.size == 6 &&
      test.has(1) &&
      test.has(2) &&
      test.has(3) &&
      test.has('Taco') &&
      test.has('Cat') &&
      test.has('Awesome')
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // Only change code below this line

  // Only change code above this line
  console.log(Array.from(set));
  return set;
}

checkSet();
```

# --solutions--

```js
function checkSet(){var set = new Set([1,2,3,'Taco','Cat','Awesome']);
return set;}
```
