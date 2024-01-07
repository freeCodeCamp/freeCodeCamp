---
id: 587d7db6367417b2b2512b98
title: 未指定の単一の文字にマッチさせる
challengeType: 1
forumTopicId: 301358
dashedName: match-single-characters-not-specified
---

# --description--

ここまでは、マッチさせたい文字のセットを作成していましたが、マッチさせたくない文字のセットを作成することもできます。 このタイプの文字セットのことを<dfn>否定文字セット</dfn>と呼びます。

否定文字セットを作成するには、開始角括弧の後の、マッチさせたくない文字の前に、キャレット文字 (`^`) を置きます。

たとえば、 `/[^aeiou]/gi` は母音でないすべての文字にマッチします。 `.`、`!`、`[`、`@`、`/` などの文字および空白にはマッチします。そのため、母音の否定文字セットは母音の文字だけを除外します。

# --instructions--

数字でも母音でもないすべての文字にマッチする単一の正規表現を作成してください。 正規表現に適切なフラグを含めることを忘れないでください。

# --hints--

正規表現 `myRegex` は 9 個のアイテムにマッチする必要があります。

```js
assert(result.length == 9);
```

正規表現 `myRegex` でグローバルフラグを使用する必要があります。

```js
assert(myRegex.flags.match(/g/).length == 1);
```

正規表現 `myRegex` で大文字小文字を区別しないフラグを使用する必要があります。

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
