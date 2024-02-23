---
id: 56bbb991ad1ed5201cd392ca
title: インデックスによる配列データへのアクセス
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

<dfn>インデックス</dfn>を使用して配列内のデータにアクセスすることができます。

配列インデックスは文字列と同じくブラケット記法で記述します。異なっているのは、文字の代わりに配列内のエントリを指定する点です。 文字列と同様に、配列では <dfn>0 から始まる</dfn>インデックスを使用するため、配列の最初の要素のインデックスは `0` になります。

<br>

**例**

```js
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
```

ここで、`console.log(array[0])` は `50` を出力し、`data` の値は `60` となります。

# --instructions--

`myData` という変数を作成し、ブラケット記法を使用して、`myArray` の最初の値と等しくなるように設定してください。

# --hints--

変数 `myData` は、`myArray` の最初の値と等しくなる必要があります。

```js
assert(
  (function () {
    if (
      typeof myArray !== 'undefined' &&
      typeof myData !== 'undefined' &&
      myArray[0] === myData
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

ブラケット記法を使用して、変数 `myArray` 内のデータにアクセスする必要があります。

```js
assert(
  (function () {
    if (code.match(/\s*=\s*myArray\[0\]/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
```

## --seed-contents--

```js
const myArray = [50, 60, 70];


```

# --solutions--

```js
const myArray = [50, 60, 70];
const myData = myArray[0];
```
