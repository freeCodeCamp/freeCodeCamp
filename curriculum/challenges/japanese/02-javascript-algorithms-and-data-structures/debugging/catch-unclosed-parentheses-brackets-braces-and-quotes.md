---
id: 587d7b84367417b2b2512b36
title: '丸括弧、角括弧、中括弧、引用符の閉じ忘れをキャッチする'
challengeType: 1
forumTopicId: 301190
dashedName: catch-unclosed-parentheses-brackets-braces-and-quotes
---

# --description--

もう一つ注意すべき構文エラーは、すべての開始の丸括弧、角括弧、波括弧、および引用符に、終了のためのペアがあるかということです。 既存のコードを編集していて、アイテムを挿入するときにペアを記述し忘れることがよくあります。 また、コールバック関数をメソッドの引数として追加する場合など、コードブロックをネストする場合にも、注意が必要です。

こうした間違いを避ける方法の一つとして、開始文字を入力した直後に終了のペアを入力し、カーソルをその中間に戻してからコーディングを続けることができます。 幸い、最新のほとんどのコードエディターは、ペアの部分を自動的に生成してくれます。

# --instructions--

コード内の 2 つのペアエラーを修正してください。

# --hints--

配列で欠けているペアを修正する必要があります。

```js
assert(code.match(/myArray\s*?=\s*?\[\s*?1\s*?,\s*?2\s*?,\s*?3\s*?\];/g));
```

`.reduce()` メソッドで欠けている部分を修正する必要があります。 コンソール出力に `Sum of array values is: 6` と表示する必要があります。

```js
assert(arraySum === 6);
```

# --seed--

## --seed-contents--

```js
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```

# --solutions--

```js
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
```
