---
id: 5d712346c441eddfaeb5bdef
title: すべての数字にマッチさせる
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

英数字のような一般的な文字列パターンのショートカットを学びました。 もう一つの一般的なパターンは、数字や数値のみの検索です。

数字を探すためのショートカットは `\d`で、小文字の `d` です。 これは文字クラス `[0-9]` と同等で、0 から 9 までの数字のうち任意の数字 1 文字を検索します。

# --instructions--

文字クラスの略記 `\d` を使用して、映画のタイトルに含まれている数字の個数を数えてください。 単語で書かれた数字 (6 ではなく「six」) は数えません。

# --hints--

正規表現で、数字にマッチするショートカット文字を使用する必要があります。

```js
assert(/\\d/.test(numRegex.source));
```

正規表現でグローバルフラグを使用する必要があります。

```js
assert(numRegex.global);
```

正規表現は、文字列 `9` の中に 1 つ数字を見つける必要があります。

```js
assert('9'.match(numRegex).length == 1);
```

正規表現は、文字列 `Catch 22` の中に 2 つ数字を見つける必要があります。

```js
assert('Catch 22'.match(numRegex).length == 2);
```

正規表現は、文字列 `101 Dalmatians` の中に 3 つ数字を見つける必要があります。

```js
assert('101 Dalmatians'.match(numRegex).length == 3);
```

正規表現は、文字列 `One, Two, Three` の中に数字を見つけない必要があります。

```js
assert('One, Two, Three'.match(numRegex) == null);
```

正規表現は、文字列 `21 Jump Street` の中に 2 つ数字を見つける必要があります。

```js
assert('21 Jump Street'.match(numRegex).length == 2);
```

正規表現は、文字列 `2001: A Space Odyssey` の中に 4 つ数字を見つける必要があります。

```js
assert('2001: A Space Odyssey'.match(numRegex).length == 4);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```
