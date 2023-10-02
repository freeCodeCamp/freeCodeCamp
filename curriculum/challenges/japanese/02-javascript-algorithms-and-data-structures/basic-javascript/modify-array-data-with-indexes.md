---
id: cf1111c1c11feddfaeb8bdef
title: インデックスによる配列データの変更
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

文字列とは異なり、配列の項目は<dfn>ミュータブル</dfn>であり、配列が `const` で宣言されている場合であっても自由に変更することができます。

**例**

```js
const ourArray = [50, 40, 30];
ourArray[0] = 15;
```

`ourArray` の値は `[15, 40, 30]` となります。

**注:** 「`array [0]`」のように、配列名と角括弧 (ブラケット) の間にスペースを入れないでください。 JavaScript はこれを正しく処理できますが、このコードを読む他のプログラマーを混乱させる恐れがあります。

# --instructions--

`myArray` のインデックス `0` に格納されているデータの値を `45` に変更してください。

# --hints--

`myArray` は `[45, 64, 99]` となる必要があります。

```js
assert(
  (function () {
    if (
      typeof myArray != 'undefined' &&
      myArray[0] == 45 &&
      myArray[1] == 64 &&
      myArray[2] == 99
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

正しいインデックスを使用して、`myArray` の値を変更する必要があります。

```js
assert(
  (function () {
    if (code.match(/myArray\[0\]\s*=\s*/g)) {
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
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [18, 64, 99];

// Only change code below this line

```

# --solutions--

```js
const myArray = [18, 64, 99];
myArray[0] = 45;
```
