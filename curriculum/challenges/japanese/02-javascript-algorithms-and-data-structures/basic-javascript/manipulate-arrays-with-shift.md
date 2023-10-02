---
id: 56bbb991ad1ed5201cd392cd
title: shift メソッドによる配列の操作
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVETW'
forumTopicId: 18238
dashedName: manipulate-arrays-with-shift
---

# --description--

`pop()` は常に配列の最後の要素を削除します。 では、最初の要素を削除したい場合はどうすればいいでしょうか？

そのような場合に使用するのが `.shift()` です。 これは `.pop()` と同様の動作をしますが、最後の要素ではなく最初の要素を削除します。

例:

```js
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
```

`removedFromOurArray` の値は文字列 `Stimpson` となり、`ourArray` は `["J", ["cat"]]` となります。

# --instructions--

`.shift()` 関数を使用して、`myArray` の最初のアイテムを削除し、取り出した値を新しい変数 `removedFromMyArray` に代入してください。

# --hints--

`myArray` は `[["dog", 3]]` となる必要があります。

```js
assert(
  (function (d) {
    if (d[0][0] == 'dog' && d[0][1] === 3 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

`removedFromMyArray` は `["John", 23]` を含む必要があります。

```js
assert(
  (function (d) {
    if (
      d[0] == 'John' &&
      d[1] === 23 &&
      typeof removedFromMyArray === 'object'
    ) {
      return true;
    } else {
      return false;
    }
  })(removedFromMyArray)
);
```

# --seed--

## --after-user-code--

```js
if (typeof removedFromMyArray !== 'undefined') (function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
```
