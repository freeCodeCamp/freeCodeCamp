---
id: 587d7db5367417b2b2512b96
title: アルファベットの文字にマッチさせる
challengeType: 1
forumTopicId: 301354
dashedName: match-letters-of-the-alphabet
---

# --description--

<dfn>文字セット</dfn>を使用して、マッチ対象の文字のグループを指定する方法を見てきました。しかし、マッチさせる文字の範囲が広い場合 (たとえば、アルファベットのすべての文字など)、たくさんの入力が必要になります。 幸い、その作業を手早く簡単にしてくれる組み込み機能があります。

文字セットの中でハイフン文字 `-` を使用すると、マッチさせる文字の範囲を定義することができます。

たとえば、小文字の `a` から `e` までマッチさせるには、`[a-e]` と記述します。

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
```

3 つの `match` 呼び出しは順に、値 `["cat"]`、`["bat"]`、`null` を返します。

# --instructions--

文字列 `quoteSample` 内のすべての文字をマッチさせてください。

**注**: 必ず大文字と小文字の両方をマッチさせてください。

# --hints--

正規表現 `alphabetRegex` は 35 個のアイテムにマッチする必要があります。

```js
assert(result.length == 35);
```

正規表現 `alphabetRegex` でグローバルフラグを使用する必要があります。

```js
assert(alphabetRegex.flags.match(/g/).length == 1);
```

正規表現 `alphabetRegex` で大文字小文字を区別しないフラグを使用する必要があります。

```js
assert(alphabetRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```
