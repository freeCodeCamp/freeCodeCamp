---
id: 56bbb991ad1ed5201cd392cc
title: pop メソッドによる配列の操作
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVZAB'
forumTopicId: 18236
dashedName: manipulate-arrays-with-pop
---

# --description--

配列内のデータを変更する別の方法として、`.pop()` 関数を使用できます。

`.pop()` は配列の末尾の値を取り出すのに使用します。 pop で取り出した値は、変数に代入して格納できます。 `.pop()` は配列から最後の要素を削除してその要素を返す、と言うこともできます。

配列から任意の型の項目 (数値、文字列、さらにはネストされた配列) を取り出すことが可能です。

```js
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

最初の `console.log` は値 `6`を表示し、2 番目は値 `[1, 4]` を表示します。

# --instructions--

`.pop()` 関数を使用して、`myArray` の最後のアイテムを削除し、取り出した値を新しい変数 `removedFromMyArray` に代入してください。

# --hints--

`myArray` は `[["John", 23]]` のみを含む必要があります。

```js
assert(
  (function (d) {
    if (d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

`myArray` で `pop()` を使用する必要があります。

```js
assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code));
```

`removedFromMyArray` は `["cat", 2]` のみを含む必要があります。

```js
assert(
  (function (d) {
    if (d[0] == 'cat' && d[1] === 2 && d[2] == undefined) {
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
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();
```
