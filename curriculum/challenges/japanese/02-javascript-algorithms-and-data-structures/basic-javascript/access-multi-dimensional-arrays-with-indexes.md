---
id: 56592a60ddddeae28f7aa8e1
title: インデックスによる多次元配列へのアクセス
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckND4Cq'
forumTopicId: 16159
dashedName: access-multi-dimensional-arrays-with-indexes
---

# --description--

<dfn>多次元</dfn>配列は、*配列の配列*として考えることができます。 ブラケット (角括弧) を使用して配列にアクセスする場合、最初のブラケットの組は、一番外側 (最初の階層) の配列の項目を参照します。ブラケットを追加するたびに、そのひとつ内側の階層の項目を参照します。

**例**

```js
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1];
```

上の例では、`subarray` の値は `[[10, 11, 12], 13, 14]`、 `nestedSubarray` の値は `[10, 11, 12]`、 `element` の値は `11` となります。

**注:** 「`array [0][0]`」のように、配列名と角括弧 (ブラケット) の間にスペースを入れないでください。また、こうした `array [0] [0]` という記述は使用できません。 JavaScript はこれを正しく処理できますが、このコードを読む他のプログラマーを混乱させる恐れがあります。

# --instructions--

ブラケット記法を使用して、`myData` が `8` に等しくなるように、`myArray` から要素を取得してください。

# --hints--

`myData` が `8` に等しくなるようにします。

```js
assert(myData === 8);
```

ブラケット記法を使用して、`myArray` から正しい値を読み取る必要があります。

```js
assert(/myData=myArray\[2\]\[1\]/.test(__helpers.removeWhiteSpace(code)));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return "myData: " + myData + " myArray: " + JSON.stringify(myArray);})();}
```

## --seed-contents--

```js
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[0][0];
```

# --solutions--

```js
const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
const myData = myArray[2][1];
```
