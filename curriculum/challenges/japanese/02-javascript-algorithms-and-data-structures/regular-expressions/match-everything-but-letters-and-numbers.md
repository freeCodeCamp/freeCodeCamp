---
id: 587d7db8367417b2b2512ba0
title: 英文字と数字以外のすべてのものにマッチさせる
challengeType: 1
forumTopicId: 301353
dashedName: match-everything-but-letters-and-numbers
---

# --description--

ショートカットを使用して、`\w` で英数字 `[A-Za-z0-9_]` にマッチさせることができることを学びました。 しかし英数字以外のものを検索したいと思うのが自然なパターンかもしれません。

`\w` の反対を `\W` で検索できます。 ちなみに、逆のパターンでは大文字を使用します。 このショートカットは `[^A-Za-z0-9_]` と同じです。

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

最初の `match` 呼び出しは値 `["%"]` を返し、2 番目は `["!"]` を返します。

# --instructions--

文字クラスの略記 `\W` を使用して、さまざまな引用符や文字列にある英数字以外の文字の数を数えてください。

# --hints--

正規表現でグローバルフラグを使用する必要があります。

```js
assert(nonAlphabetRegex.global);
```

正規表現は、文字列 `The five boxing wizards jump quickly.` の中に英数字以外を 6 文字見つける必要があります。

```js
assert(
  'The five boxing wizards jump quickly.'.match(nonAlphabetRegex).length == 6
);
```

正規表現を英数字以外の文字にマッチさせるために、略記文字を使用する必要があります。

```js
assert(/\\W/.test(nonAlphabetRegex.source));
```

正規表現は、文字列 `Pack my box with five dozen liquor jugs.` の中に英数字以外を 8 文字見つける必要があります。

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length == 8
);
```

正規表現は、文字列 `How vexingly quick daft zebras jump!` の中に英数字以外を 6 文字見つける必要があります。

```js
assert(
  'How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length == 6
);
```

正規表現は、文字列 `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.` の中に英数字以外を 12 文字見つける必要があります。

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(nonAlphabetRegex)
    .length == 12
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards_jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```
