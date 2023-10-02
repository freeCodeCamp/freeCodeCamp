---
id: 587d7b85367417b2b2512b38
title: 等価演算子の代わりに代入演算子を使用していないかキャッチする
challengeType: 1
forumTopicId: 301191
dashedName: catch-use-of-assignment-operator-instead-of-equality-operator
---

# --description--

プログラムの分岐、つまり、満たされた特定の条件ごとに異なる処理を実行する部分では、JavaScript の `if`、`else if`、`else` などのステートメントが使用されます。 条件として「結果が値と等しいかどうかをテストする」ことがあります。

このロジックを言葉にすれば (少なくとも英語では) "if x equals y, then ..." (x が y に等しい場合は、... を実行する) などとなり、代入演算子 `=` を使用すれば文字通りのコードに変換できますが、 そうするとプログラムで予期しない制御フローが生じます。

以前のチャレンジで説明したように、JavaScript の代入演算子 (`=`) は、変数名に値を割り当てます。 そして、`==` 演算子と `===` 演算子は、等しいかどうかをチェックします (3 連続の `===` は、厳密に等しいかどうか、つまり、値と型が同じかどうかをテストします)。

以下のコードでは、`x` に 2 が代入され、`true` として評価されます。 JavaScript では、ほとんどすべての値はそれ自体が `true` に評価されます。ただし、「偽」の値とされる `false`、`0`、`""` (空の文字列)、`NaN`、`undefined`、および `null` は例外となります。

```js
let x = 1;
let y = 2;
if (x = y) {

} else {

}
```

この例では、`if`ステートメント内のコードブロックは、`y` が偽でない限り、`y` がどのような値であっても実行されます。 ここで実行されるものと期待されている `else` ブロックは、実際には実行されません。

# --instructions--

プログラムで分岐が正しく実行されるように条件を修正し、`result` に適切な値が代入されるようにしてください。

# --hints--

代入ではなく、等しいかどうかを確認するように条件を修正する必要があります。

```js
assert(result == 'Not equal!');
```

等しいかどうかをテストするために `==` または `===` を使用する必要があります。

```js
assert(code.match(/x\s*?===?\s*?y/g));
```

# --seed--

## --seed-contents--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```

# --solutions--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);
```
