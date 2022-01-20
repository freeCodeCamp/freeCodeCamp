---
id: 587d7db7367417b2b2512b9d
title: 先頭の文字列パターンにマッチさせる
challengeType: 1
forumTopicId: 301349
dashedName: match-beginning-string-patterns
---

# --description--

これまでのチャレンジで、正規表現を使用して多くのマッチを探せることがわかりました。 正規表現では、文字列内で特定の位置にあるパターンを検索することもできます。

以前のチャレンジでは、文字セットの内側でキャレット文字 (`^`) を使用して、`[^thingsThatWillNotBeMatched]` という形式で否定の文字セットを作成しました。 文字セットの外側でキャレットを使用すると、文字列の先頭にあるパターンを検索できます。

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

最初の `test` 呼び出しは `true` を返し、2 番目の呼び出しは `false` を返します。

# --instructions--

正規表現でキャレット文字を使用して、文字列 `rickyAndCal` の先頭にある `Cal` のみを検索してください。

# --hints--

正規表現で、1 文字目が大文字の文字列 `Cal` を検索する必要があります。

```js
assert(calRegex.source == '^Cal');
```

正規表現でフラグを使用しないでください。

```js
assert(calRegex.flags == '');
```

正規表現は、文字列の先頭にある文字列 `Cal` にマッチする必要があります。

```js
calRegex.lastIndex = 0;
assert(calRegex.test('Cal and Ricky both like racing.'));
```

正規表現は、文字列の途中にある文字列 `Cal` にマッチしない必要があります。

```js
calRegex.lastIndex = 0;
assert(!calRegex.test('Ricky and Cal both like racing.'));
```

# --seed--

## --seed-contents--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

# --solutions--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```
