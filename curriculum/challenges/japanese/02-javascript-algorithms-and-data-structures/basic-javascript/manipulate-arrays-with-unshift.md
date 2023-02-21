---
id: 56bbb991ad1ed5201cd392ce
title: unshift メソッドによる配列の操作
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckNDESv'
forumTopicId: 18239
dashedName: manipulate-arrays-with-unshift
---

# --description--

`shift` を使用して配列の先頭から要素を取り出すだけでなく、`unshift` を使用して配列の先頭に要素を追加することも可能です。

`.unshift()` は `.push()` とまったく同様の動作をします。ただし、`unshift()` は配列の末尾に要素を追加するのではなく、配列の先頭に要素を追加します。

例:

```js
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
```

`shift` の後、`ourArray` の値は `["J", "cat"]` となります。 `unshift` の後、`ourArray` の値は `["Happy", "J", "cat"]` となります。

# --instructions--

`unshift()` を使用して、`myArray` 変数の先頭に `["Paul", 35]` を追加してください。

# --hints--

`myArray` は `[["Paul", 35], ["dog", 3]]` となる必要があります。

```js
assert(
  (function (d) {
    if (
      typeof d[0] === 'object' &&
      d[0][0] == 'Paul' &&
      d[0][1] === 35 &&
      d[1][0] != undefined &&
      d[1][0] == 'dog' &&
      d[1][1] != undefined &&
      d[1][1] == 3
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
(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);
```

## --seed-contents--

```js
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line

```

# --solutions--

```js
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
```
