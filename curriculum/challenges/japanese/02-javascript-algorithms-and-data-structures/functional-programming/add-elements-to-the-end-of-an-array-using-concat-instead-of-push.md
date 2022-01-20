---
id: 587d7da9367417b2b2512b67
title: push の代わりに concat を使用して要素を配列の末尾に追加する
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

関数型プログラミングで重要なのは、ミューテーションを起こさない関数を作成して使用することです。

前回のチャレンジでは、元の配列をミューテートさせずに配列を新しい配列に結合する方法として、`concat` メソッドを紹介しました。 `concat` を `push` メソッドと比較してみましょう。 `push` は、呼び出された同じ配列の末尾にアイテムを追加し、その配列をミューテートさせます。 例を示します。

```js
const arr = [1, 2, 3];
arr.push([4, 5, 6]);
```

`arr` の変更後の値は `[1, 2, 3, [4, 5, 6]]` となりますが、これは関数型プログラミングの方法ではありません。

`concat` では、ミューテーションの副作用を起こさずに、配列の末尾に新しいアイテムを追加できます。

# --instructions--

`nonMutatingPush` 関数を変更し、`push` の代わりに `concat` を使用して `newItem` を `original` の末尾に追加するようにしてください。 この関数は配列を返す必要があります。

# --hints--

コードで `concat` メソッドを使用する必要があります。

```js
assert(code.match(/\.concat/g));
```

コードで `push` メソッドを使用しないでください。

```js
assert(!code.match(/\.?[\s\S]*?push/g));
```

`first` 配列を変更しないようにする必要があります。

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

`second` 配列を変更しないようにする必要があります。

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingPush([1, 2, 3], [4, 5])` は `[1, 2, 3, 4, 5]` を返す必要があります。

```js
assert(
  JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
```

# --solutions--

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];
```
