---
id: 587d7db8367417b2b2512ba1
title: 数字以外のすべてにマッチさせる
challengeType: 1
forumTopicId: 301347
dashedName: match-all-non-numbers
---

# --description--

前回のチャレンジでは、ショートカット `\d` で小文字の `d` を使用して数字を検索する方法を示しました。 似たようなショートカットで、代わりに大文字の `D` を使用して数字以外を検索することもできます。

数字以外の文字を検索するためのショートカットは `\D` です。 これは文字クラス `[^0-9]` と同等です。0 から 9 の数字以外の単一の文字を検索します。

# --instructions--

文字クラスの略記 `\D` を使用して、映画のタイトルに含まれている数字以外の文字の個数を数えてください。

# --hints--

正規表現で、数字以外の文字にマッチするショートカット文字を使用する必要があります。

```js
assert(/\\D/.test(noNumRegex.source));
```

正規表現でグローバルフラグを使用する必要があります。

```js
assert(noNumRegex.global);
```

正規表現は、文字列 `9` の中に数字以外のものを見つけない必要があります。

```js
assert('9'.match(noNumRegex) == null);
```

正規表現は、文字列 `Catch 22` の中に数字以外の 6 個の文字を見つける必要があります。

```js
assert('Catch 22'.match(noNumRegex).length == 6);
```

正規表現は、文字列 `101 Dalmatians` の中に数字以外の 11 個の文字を見つける必要があります。

```js
assert('101 Dalmatians'.match(noNumRegex).length == 11);
```

正規表現は、文字列 `One, Two, Three` の中に数字以外の 15 個の文字を見つける必要があります。

```js
assert('One, Two, Three'.match(noNumRegex).length == 15);
```

正規表現は、文字列 `21 Jump Street` の中に数字以外の 12 個の文字を見つける必要があります。

```js
assert('21 Jump Street'.match(noNumRegex).length == 12);
```

正規表現は、文字列 `2001: A Space Odyssey` の中に数字以外の 17 個の文字を見つける必要があります。

```js
assert('2001: A Space Odyssey'.match(noNumRegex).length == 17);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```
