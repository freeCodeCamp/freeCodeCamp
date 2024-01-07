---
id: 587d7db8367417b2b2512ba3
title: 空白にマッチさせる
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

ここまでのチャレンジでは、アルファベットと数字の文字のマッチングについて説明しました。 文字間の空白やスペースにマッチさせることもできます。

空白を検索するには `\s` (小文字の `s`) を使用できます。 このパターンは、空白にマッチするだけでなく、キャリッジリターン、タブ、フォームフィード、改行文字にもマッチします。 文字クラス`[ \r\t\f\n\v]` に似たものと考えることができます。

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

この `match` 呼び出しは `[" ", " "]` を返します。
# --instructions--

正規表現 `countWhiteSpace` を変更して、文字列内の複数の空白を検索してください。

# --hints--

正規表現でグローバルフラグを使用する必要があります。

```js
assert(countWhiteSpace.global);
```

正規表現を空白にマッチさせるために、略記文字 `\s` を使用する必要があります。

```js
assert(/\\s/.test(countWhiteSpace.source));
```

正規表現は、文字列 `Men are from Mars and women are from Venus.` の中に 8 個のスペースを見つける必要があります。

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countWhiteSpace).length ==
    8
);
```

正規表現は、文字列 `Space: the final frontier.` の中に 3 個のスペースを見つける必要があります。

```js
assert('Space: the final frontier.'.match(countWhiteSpace).length == 3);
```

正規表現は、文字列 `MindYourPersonalSpace` の中にスペースを見つけない必要があります。

```js
assert('MindYourPersonalSpace'.match(countWhiteSpace) == null);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```
