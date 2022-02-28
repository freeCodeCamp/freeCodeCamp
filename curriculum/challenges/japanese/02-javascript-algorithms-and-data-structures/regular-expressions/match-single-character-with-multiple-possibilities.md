---
id: 587d7db5367417b2b2512b95
title: 複数の候補を持つ単一の文字にマッチさせる
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

リテラルパターン (`/literal/`) とワイルドカード文字 (`/./`) にマッチさせる方法を学びました。 これらは正規表現の極端なもので、前者は完全にマッチするものを見つけ、後者はすべてにマッチします。 これら両極端の間をとったオプションがあります。

<dfn>文字クラス</dfn>を使用すると、ある程度柔軟にリテラルパターンを検索できます。 文字クラスでは、マッチさせたい文字のグループを角括弧 (`[` と `]`) で囲むことで定義できます。

たとえば、`bag`、`big`、`bug` にマッチし、`bog` にマッチしないようにするには、 正規表現 `/b[aiu]g/` を作成します。 `[aiu]` は、文字 `a`、`i`、または `u` にのみマッチする文字クラスです。

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```

4 つの `match` 呼び出しは順に、値 `["big"]`、`["bag"]`、`["bug"]`、`null` を返します。

# --instructions--

母音 (`a`、`e`、`i`、`o`、`u`) を持つ文字クラスを正規表現 `vowelRegex` で使用して、文字列 `quoteSample` 内のすべての母音を検索してください。

**注:** 必ず大文字と小文字の両方をマッチさせてください。

# --hints--

25 個の母音をすべて見つける必要があります。

```js
assert(result.length == 25);
```

正規表現 `vowelRegex` で文字クラスを使用する必要があります。

```js
assert(/\[.*\]/.test(vowelRegex.source));
```

正規表現 `vowelRegex` でグローバルフラグを使用する必要があります。

```js
assert(vowelRegex.flags.match(/g/).length == 1);
```

正規表現 `vowelRegex` で大文字小文字を区別しないフラグを使用する必要があります。

```js
assert(vowelRegex.flags.match(/i/).length == 1);
```

正規表現はどの子音にもマッチしない必要があります。

```js
assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()));
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```
