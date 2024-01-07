---
id: 587d7db7367417b2b2512b9f
title: すべての英文字と数字にマッチさせる
challengeType: 1
forumTopicId: 301346
dashedName: match-all-letters-and-numbers
---

# --description--

文字クラスを使用して、アルファベットのすべての文字を `[a-z]` で検索することができました。 この種の文字クラスはよく使用されるのでそのためのショートカットがありますが、それにはいくつかの余分な文字も含まれています。

JavaScript でアルファベットにマッチする最も近い文字クラスは `\w` で、 このショートカットは `[A-Za-z0-9_]` と同等です。 この文字クラスは大文字と小文字に加えて数字にもマッチします。 また、アンダースコア文字 (`_`) も含まれていることに注意してください。

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
```

これら 4 つの `test` 呼び出しはすべて `true` を返します。

これらのショートカット文字クラスは<dfn>文字クラスの略記</dfn>とも呼ばれます。

# --instructions--

文字クラス `\w` を使用して、さまざまな引用符や文字列の英数字の個数を数えてください。

# --hints--

正規表現でグローバルフラグを使用する必要があります。

```js
assert(alphabetRegexV2.global);
```

正規表現をすべての英数字にマッチさせるために、略記文字 `\w` を使用する必要があります。

```js
assert(/\\w/.test(alphabetRegexV2.source));
```

正規表現は、文字列 `The five boxing wizards jump quickly.` の中に英数字を 31 文字見つける必要があります。

```js
assert(
  'The five boxing wizards jump quickly.'.match(alphabetRegexV2).length === 31
);
```

正規表現は、文字列 `Pack my box with five dozen liquor jugs.` の中に英数字を 32 文字見つける必要があります。

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length ===
    32
);
```

正規表現は、文字列 `How vexingly quick daft zebras jump!` の中に英数字を 30 文字見つける必要があります。

```js
assert(
  'How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length === 30
);
```

正規表現は、文字列 `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.` の中に英数字を 36 文字見つける必要があります。

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(alphabetRegexV2)
    .length === 36
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```
