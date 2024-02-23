---
id: 587d7b7c367417b2b2512b1b
title: delete キーワードを使用してオブジェクトプロパティを削除する
challengeType: 1
forumTopicId: 301168
dashedName: use-the-delete-keyword-to-remove-object-properties
---

# --description--

ここまで、オブジェクトとは何か、そしてその基本的な機能と利点について学んできました。 手短に言えば、オブジェクトとはキーと値のペアを格納したものです。データを構造化するための柔軟で直感的な方法を提供し、***なおかつ***、参照時間が非常に高速です。 以降のチャレンジでは、オブジェクトに対するいくつかの一般的な操作について説明します。これらを学ぶことで、こうした便利なデータ構造を自身のプログラムで自信をもって扱えるようになるでしょう。

前のチャレンジで、オブジェクトのキーと値のペアの追加と変更について説明しました。 ここでは、オブジェクトからキーと値のペアを*削除*する方法について説明します。

もう一度だけ、`foods` オブジェクトの例を取り上げてみましょう。 `apples` キーを削除したい場合は、次のように `delete` キーワードを使用して削除できます。

```js
delete foods.apples;
```

# --instructions--

delete キーワードを使用して、`foods` オブジェクトから `oranges`、`plums`、`strawberries` のキーを削除してください。

# --hints--

`foods` オブジェクトには `apples`、`grapes`、`bananas` の 3 つのキーのみが存在する必要があります。

```js
assert(
  !foods.hasOwnProperty('oranges') &&
    !foods.hasOwnProperty('plums') &&
    !foods.hasOwnProperty('strawberries') &&
    Object.keys(foods).length === 3
);
```

`delete`を使用して `oranges`、`plums`、`strawberries` のキーを削除する必要があります。

```js
assert(
  code.search(/oranges:/) !== -1 &&
    code.search(/plums:/) !== -1 &&
    code.search(/strawberries:/) !== -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```
