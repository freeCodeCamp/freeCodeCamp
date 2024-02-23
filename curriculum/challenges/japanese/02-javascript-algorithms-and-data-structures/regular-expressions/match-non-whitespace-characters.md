---
id: 587d7db9367417b2b2512ba4
title: 空白以外の文字にマッチさせる
challengeType: 1
forumTopicId: 18210
dashedName: match-non-whitespace-characters
---

# --description--

小文字の `s` による `\s` を使用した空白の検索方法を学びました。 空白以外のすべてのものを検索することもできます。

空白以外を検索するには `\S` を使用します。これには大文字の `s` を使用します。 このパターンは、空白、キャリッジリターン、タブ、フォームフィード、および改行文字にマッチしません。 文字クラス `[^ \r\t\f\n\v]` に似たものと考えることができます。

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
```

`.length` メソッドによって返される値は `32` になります。

# --instructions--

正規表現 `countNonWhiteSpace` を変更して、文字列にある複数の空白以外の文字を検索してください。

# --hints--

正規表現でグローバルフラグを使用する必要があります。

```js
assert(countNonWhiteSpace.global);
```

正規表現を空白以外のすべての文字にマッチさせるために、略記文字 `\S` を使用する必要があります。

```js
assert(/\\S/.test(countNonWhiteSpace.source));
```

正規表現は、文字列 `Men are from Mars and women are from Venus.` の中に 35 個のスペース以外の文字を見つける必要があります。

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countNonWhiteSpace)
    .length == 35
);
```

正規表現は、文字列 `Space: the final frontier.` の中に 23 個のスペース以外の文字を見つける必要があります。

```js
assert('Space: the final frontier.'.match(countNonWhiteSpace).length == 23);
```

正規表現は、文字列 `MindYourPersonalSpace` の中に 21 個のスペース以外の文字を見つける必要があります。

```js
assert('MindYourPersonalSpace'.match(countNonWhiteSpace).length == 21);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```
