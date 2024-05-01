---
id: 587d7b8a367417b2b2512b4c
title: >-
  残余要素を使用した分割代入
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

配列の分割において、残りの要素を別の配列にまとめたいことがあります。

次に示すように、`Array.prototype.slice()` に似た結果になります。

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

コンソールには、値 `1, 2` と `[3, 4, 5, 7]` が表示されます。

変数 `a` と `b` は配列の最初と 2 番目の値を受け取ります。 その後は残余構文になっているため、`arr` は残りの値を配列の形で受け取ります。 残余引数は、リスト内の最後の変数としてのみ正しく動作します。 したがって、残余構文を使用して元の配列の最後の要素を除いた部分配列を取得するようなことはできません。

# --instructions--

分割代入と残余構文を使用して、`Array.prototype.slice()` と同様の機能を実装してください。 `removeFirstTwo()` が、元の配列 `list` から最初の 2 つの要素を取り除いた部分配列を返すようにしてください。

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` の結果は `[3, 4, 5]` となるべきです。

```js
assert.deepEqual(removeFirstTwo([1, 2, 3, 4, 5]), [3, 4, 5]);
```

`removeFirstTwo()` は `list` を変更してはいけません。

```js
const _testArr = [1, 2, 3, 4, 5];
removeFirstTwo(_testArr);
assert.deepEqual(_testArr, [1, 2, 3, 4, 5])
```

`Array.slice()` は使用しないでください。

```js
assert(!__helpers.removeJSComments(code).match(/\.\s*slice\s*\(/));
```

You should use the rest syntax.

```js
assert.match(code, /\.\.\./);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  return list;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  // comment with 'slice' to check comments are removed in tests
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
