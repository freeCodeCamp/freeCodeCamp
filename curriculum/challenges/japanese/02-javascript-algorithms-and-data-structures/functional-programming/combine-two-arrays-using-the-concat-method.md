---
id: 587d7da9367417b2b2512b66
title: concat メソッドを使用して 2 つの配列を連結する
challengeType: 1
forumTopicId: 301229
dashedName: combine-two-arrays-using-the-concat-method
---

# --description--

複数のアイテムを最初から最後まで結合することを<dfn>連結 (Concatenation)</dfn> と呼びます。 JavaScript で提供されている `concat` メソッドは、文字列でも配列でも同じ動作をします。 配列の場合は、一方の配列でメソッドを呼び出してから、もう一方の配列を `concat` の引数として与えると、その配列が最初の配列の末尾に追加されます。 このメソッドは新しい配列を返し、元の配列のいずれもミューテートさせません。 例を示します。

```js
[1, 2, 3].concat([4, 5, 6]);
```

返される配列は `[1, 2, 3, 4, 5, 6]` となります。

# --instructions--

`nonMutatingConcat` 関数で `concat` メソッドを使用して、`original` の末尾に `attach` を連結してください。 この関数は連結した配列を返す必要があります。

# --hints--

コードでは `concat` メソッドを使用する必要があります。

```js
assert(code.match(/\.concat/g));
```

`first` 配列は変更しないでください。

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

`second` 配列は変更しないでください。

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingConcat([1, 2, 3], [4, 5])` は `[1, 2, 3, 4, 5]` を返す必要があります。

```js
assert(
  JSON.stringify(nonMutatingConcat([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingConcat(original, attach) {
  // Only change code below this line


  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
```

# --solutions--

```js
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
const first = [1, 2, 3];
const second = [4, 5];
```
