---
id: 5a661e0f1068aca922b3ef17
title: ブラケット記法による配列内容へのアクセス
challengeType: 1
forumTopicId: 301149
dashedName: access-an-arrays-contents-using-bracket-notation
---

# --description--

当然ですが、どんなデータ構造でも基本的な機能として、データを保存できるだけでなく、コマンドでそれらのデータを取得することもできます。 ここまで配列の作成方法を学びました。今度は配列の情報にアクセスする方法を見ていきましょう。

以下では単純な配列を定義していますが、配列には 3 つのアイテムがあります。

```js
let ourArray = ["a", "b", "c"];
```

配列では、配列のアイテムがそれぞれ<dfn>インデックス</dfn>を持ちます。 このインデックスは、配列内のアイテムの位置と参照方法を兼ねています。 ただし、JavaScript の配列では<dfn>インデックスは 0 から始まる</dfn>ことを覚えておいてください。つまり、配列の最初の要素の位置は ***0*** であって、1 ではないということです。 配列から要素を取得するには、インデックスをブラケット (角括弧) で囲み、配列の末尾に追加するか、または通常は配列オブジェクトを参照する変数に追加します。 これを<dfn>ブラケット記法</dfn>といいます。 たとえば、`ourArray` から `a` を取得して変数に割り当てたい場合、コードは次のようになります。

```js
let ourVariable = ourArray[0];
```

これで `ourVariable` の値は `a` になります。

ブラケット記法を使用して、インデックスに関連付けられた値にアクセスできるだけでなく、インデックスに*値を設定する*こともできます。

```js
ourArray[1] = "not b anymore";
```

ブラケット記法を使用して、このアイテムのインデックス 1 を文字列 `b` から `not b anymore` に設定しなおしました。 これで、`ourArray` は `["a", "not b anymore", "c"]` になります。

# --instructions--

`myArray` の 2 番目の位置 (インデックス `1`) に任意の要素 (文字 `b` 以外) を設定して、このチャレンジを完了してください。

# --hints--

`myArray[0]` は文字 `a` と等しくなければなりません。

```js
assert.strictEqual(myArray[0], 'a');
```

`myArray[1]` は文字 `b` と等しくしてはなりません。

```js
assert.notStrictEqual(myArray[1], 'b');
```

`myArray[2]` は文字 `c` と等しくなければなりません。

```js
assert.strictEqual(myArray[2], 'c');
```

`myArray[3]` は文字 `d` と等しくなければなりません。

```js
assert.strictEqual(myArray[3], 'd');
```

# --seed--

## --seed-contents--

```js
let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);
```

# --solutions--

```js
let myArray = ["a", "b", "c", "d"];
myArray[1] = "e";
```
