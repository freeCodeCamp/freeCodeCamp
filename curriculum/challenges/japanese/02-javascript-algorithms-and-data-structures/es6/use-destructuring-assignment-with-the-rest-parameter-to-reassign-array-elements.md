---
id: 587d7b8a367417b2b2512b4c
title: >-
  Destructuring via rest elements
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

変数 `a` と `b` は配列の最初と 2 番目の値を受け取ります。 After that, because of the rest syntax presence, `arr` gets the rest of the values in the form of an array. 残余引数は、リスト内の最後の変数としてのみ正しく動作します。 As in, you cannot use the rest syntax to catch a subarray that leaves out the last element of the original array.

# --instructions--

Use a destructuring assignment with the rest syntax to emulate the behavior of `Array.prototype.slice()`. `removeFirstTwo()` が、元の配列 `list` から最初の 2 つの要素を取り除いた部分配列を返すようにしてください。

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` の結果は `[3, 4, 5]` となるべきです。

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArrWORemoved_.every((e, i) => e === i + 3) && testArrWORemoved_.length === 3);
```

`removeFirstTwo()` は `list` を変更してはいけません。

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArr_.every((e, i) => e === i + 1) && testArr_.length === 5);
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
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.shorterList\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  // Only change code below this line
  const shorterList = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
