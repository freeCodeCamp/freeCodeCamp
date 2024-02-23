---
id: bd7123c9c443eddfaeb5bdef
title: JavaScript 変数を宣言する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNanrHq'
forumTopicId: 17556
dashedName: declare-javascript-variables
---

# --description--

コンピューターサイエンスでは、<dfn>データ</dfn>とはコンピューターにとって意味のある情報のことです。 JavaScript では 8 つの異なる<dfn>データ型</dfn>として、`undefined`、`null`、`boolean`、`string`、`symbol`、`bigint`、`number`、`object` が提供されています。

たとえば、コンピューターでは `12` などの数値と、`"12"`、 `"dog"`、`"123 cats"` といった文字の集まりである `strings` (文字列) が区別されます。 コンピューターは数値に対して数学演算を実行することができますが、文字列に対してそれを実行することはできません。

<dfn>変数</dfn>を使用すると、コンピューターがデータを動的に格納して操作することが可能になります。 その際、データ自体が使用されるのではなく、データを指し示す「ラベル」が使用されます。 8 つのデータ型はどれも変数に格納することができます。

変数は、数学で使用される x や y といった変数と似ています。つまり、これらは参照したいデータを表す名前にすぎません。 コンピューターの変数は数学の変数とは異なり、さまざまな値をさまざまなタイミングで格納することができます。

JavaScript で変数を作成または<dfn>宣言</dfn>するには、次のように変数の前に `var` キーワードを付けます。

```js
var ourName;
```

これで `ourName` という変数が作成されます。 JavaScript では、ステートメントの終わりにセミコロンを付けます。 変数名には、数字、文字、`$`、または `_` を使用できます。 ただし、スペースを含めることはできず、数字で名前を始めることはできません。

# --instructions--

`var` キーワードを使用して `myName` という変数を作成してください。

**ヒント**  
わからない場合は上の `ourName` の例を見てください。

# --hints--

`myName` を `var` キーワードで宣言し、末尾にセミコロンを付ける必要があります。

```js
assert(/var\s+myName\s*;/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof myName !== "undefined"){(function(v){return v;})(myName);}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myName;
```
