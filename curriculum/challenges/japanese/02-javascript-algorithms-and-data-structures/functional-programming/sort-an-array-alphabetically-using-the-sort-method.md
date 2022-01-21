---
id: 587d7da9367417b2b2512b69
title: sort メソッドを使用して配列をアルファベット順に並べ替える
challengeType: 1
forumTopicId: 18303
dashedName: sort-an-array-alphabetically-using-the-sort-method
---

# --description--

`sort` メソッドは、コールバック関数に従って配列の要素をソートします。

例を次に示します。

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
```

これは値 `[1, 2, 3, 4, 5]` を返します。

```js
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
```

これは値 `['z', 's', 'l', 'h', 'b']` を返します。

JavaScript のデフォルトのソート方法で基準となるのは文字列の Unicode ポイント値であり、予期しない結果を返す可能性があります。 そのため、配列アイテムのソート方法を指定するコールバック関数を用意することをお勧めします。 コールバック関数には通常は `compareFunction` などという名前を付けますが、そうしたコールバック関数を指定すると、`compareFunction` の戻り値に従って配列要素がソートされます。たとえば、`compareFunction(a,b)` が 2 つの要素 `a` と `b` に対して 0 よりも小さい値を返した場合、`a` は `b` の前になります。 `compareFunction(a,b)` が 2 つの要素 `a` と `b` に対して 0 よりも大きい値を返した場合、`b` は `a` の前になります。 `compareFunction(a,b)` が 2 つの要素 `a` と `b` に対して 0 と等しい値を返した場合、`a` と `b` の順序は変わりません。

# --instructions--

`alphabeticalOrder` 関数で `sort` メソッドを使用して、`arr` の要素をアルファベット順にソートしてください。 この関数はソートされた配列を返す必要があります。

# --hints--

コードで `sort` メソッドを使用する必要があります。

```js
assert(code.match(/\.sort/g));
```

`alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` は `["a", "a", "c", "d", "g", "z"]` を返す必要があります。

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) ===
    JSON.stringify(['a', 'a', 'c', 'd', 'g', 'z'])
);
```

`alphabeticalOrder(["x", "h", "a", "m", "n", "m"])` は `["a", "h", "m", "m", "n", "x"]` を返す必要があります。

```js
assert(
  JSON.stringify(alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) ===
    JSON.stringify(['a', 'h', 'm', 'm', 'n', 'x'])
);
```

`alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` は `["a", "a", "a", "a", "t", "x"]` を返す必要があります。

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])) ===
    JSON.stringify(['a', 'a', 'a', 'a', 't', 'x'])
);
```

# --seed--

## --seed-contents--

```js
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

# --solutions--

```js
function alphabeticalOrder(arr) {
  return arr.sort();
}
```
