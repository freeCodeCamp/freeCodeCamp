---
id: 587d7db4367417b2b2512b92
title: マッチしたものを抽出する
challengeType: 1
forumTopicId: 301340
dashedName: extract-matches
---

# --description--

ここまでは、単にパターンが文字列内に存在するかどうかをチェックしてきました。 `.match()` メソッドで見つけた実際のマッチ部分を抽出することもできます。

`.match()` メソッドを使用するには、メソッドを文字列に適用し、括弧内に正規表現を渡します。

例を示します。

```js
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

ここで最初の `match` は `["Hello"]` を返し、2 番目の match は `["expressions"]` を返します。

`.match` の構文は、これまで使用してきた `.test` メソッドの「反対」であることに注意してください。

```js
'string'.match(/regex/);
/regex/.test('string');
```

# --instructions--

`.match()` メソッドを適用して、文字列 `coding` を抽出してください。

# --hints--

`result` には文字列 `coding` が存在する必要があります。

```js
assert(result.join() === 'coding');
```

正規表現 `codingRegex` で文字列 `coding` を検索する必要があります。

```js
assert(codingRegex.source === 'coding');
```

`.match()` メソッドを使用する必要があります。

```js
assert(code.match(/\.match\(.*\)/));
```

# --seed--

## --seed-contents--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
```

# --solutions--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```
