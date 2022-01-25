---
id: 587d7b8a367417b2b2512b4c
title: >-
  分割代入で残余引数を使用して配列要素を割り当て直す
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

変数 `a` と `b` は配列の最初と 2 番目の値を受け取ります。 その後は残余引数になっているため、`arr` は残りの値を配列の形で受け取ります。 残余引数は、リスト内の最後の変数としてのみ正しく動作します。 したがって、残余引数を使用して元の配列の最後の要素を取り除いた部分配列を取得することはできません。

# --instructions--

分割代入と残余変数を使用して、`Array.prototype.slice()` の効果を実現してください。`arr` が、元の配列 `source` から最初の 2 つの要素を省いた部分配列となるようにします。

# --hints--

`arr` は `[3,4,5,6,7,8,9,10]` である必要があります。

```js
assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
```

`source` は `[1,2,3,4,5,6,7,8,9,10]` である必要があります。

```js
assert(source.every((v, i) => v === i + 1) && source.length === 10);
```

`Array.slice()` は使用しないでください。

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

`list` の分割を使用する必要があります。

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.arr\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
```

# --solutions--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
```
