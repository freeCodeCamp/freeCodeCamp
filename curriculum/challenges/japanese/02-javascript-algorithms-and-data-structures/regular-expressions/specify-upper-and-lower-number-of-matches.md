---
id: 587d7db9367417b2b2512ba5
title: マッチ数の上限と下限を指定する
challengeType: 1
forumTopicId: 301367
dashedName: specify-upper-and-lower-number-of-matches
---

# --description--

プラス記号 `+` を使用して 1 個以上の文字を検索し、アスタリスク `*` を使用して 0 個以上の文字を検索することについてすでに説明しました。 これらは便利ですが、パターンの特定の範囲にマッチさせたい場合もあります。

<dfn>数量指定子</dfn>を使用すると、パターン数の下限と上限を指定できます。 数量指定子は中括弧 (`{` と `}`) と一緒に使用します。 中括弧の間に 2 つの数字を入れると、パターンの最小数と最大数になります。

たとえば、文字列 `ah` の中で文字 `a` が `3` 回から `5` 回まで出現する場合のみにマッチさせる正規表現は、`/a{3,5}h/` となります。

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
```

最初の `test` 呼び出しは `true`を返し、2 番目の呼び出しは `false` を返します。

# --instructions--

正規表現 `ohRegex` を変更して、フレーズ `Oh no` について全体で文字 `h` が `3` 個から `6` 個まで出現する場合のみにマッチさせてください。

# --hints--

正規表現で中括弧を使用してください。

```js
assert(ohRegex.source.match(/{.*?}/).length > 0);
```

正規表現は文字列 `Ohh no` にマッチしない必要があります。

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohh no'));
```

正規表現は文字列 `Ohhh no` にマッチする必要があります。

```js
assert('Ohhh no'.match(ohRegex)[0].length === 7);
```

正規表現は文字列 `Ohhhh no` にマッチする必要があります。

```js
assert('Ohhhh no'.match(ohRegex)[0].length === 8);
```

正規表現は文字列 `Ohhhhh no` にマッチする必要があります。

```js
assert('Ohhhhh no'.match(ohRegex)[0].length === 9);
```

正規表現は文字列 `Ohhhhhh no` にマッチする必要があります。

```js
assert('Ohhhhhh no'.match(ohRegex)[0].length === 10);
```

正規表現は文字列 `Ohhhhhhh no` にマッチしない必要があります。

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohhhhhhh no'));
```

# --seed--

## --seed-contents--

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
```

# --solutions--

```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
```
