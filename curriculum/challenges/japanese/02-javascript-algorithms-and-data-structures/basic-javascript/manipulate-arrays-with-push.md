---
id: 56bbb991ad1ed5201cd392cb
title: push メソッドによる配列の操作
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnqmVtJ'
forumTopicId: 18237
dashedName: manipulate-arrays-with-push
---

# --description--

`push()` 関数を使用して、配列の末尾に簡単にデータを追加することができます。

`.push()` は 1 つ以上の<dfn>パラメーター</dfn>を受け取り、それらを配列の末尾に「プッシュ (押し込み)」します。

例:

```js
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
```

`arr1` の値は `[1, 2, 3, 4]` になり、`arr2` の値は `["Stimpson", "J", "cat", ["happy", "joy"]]` になります。

# --instructions--

`["dog", 3]` を `myArray` 変数の末尾に push してください。

# --hints--

`myArray` は `[["John", 23], ["cat", 2], ["dog", 3]]` になる必要があります。

```js
assert(
  (function (d) {
    if (
      d[2] != undefined &&
      d[0][0] == 'John' &&
      d[0][1] === 23 &&
      d[2][0] == 'dog' &&
      d[2][1] === 3 &&
      d[2].length == 2
    ) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myArray = ' + JSON.stringify(z);})(myArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);
```
