---
id: 587d7db9367417b2b2512ba7
title: マッチさせる数を厳密に指定する
challengeType: 1
forumTopicId: 301365
dashedName: specify-exact-number-of-matches
---

# --description--

中括弧を使用して、数量指定子でパターンの最小数と最大数を指定できます。 特定の数のマッチしか必要としない場合があります。

特定数のパターンを指定するには、中括弧の間に数字を 1 つ指定します。

たとえば、単語 `hah` に対して文字 `a` を `3` 回だけマッチさせる正規表現は、`/ha{3}h/` となります。

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
```

3 つの `test` 呼び出しは順に、`false`、`true`、`false` を返します。

# --instructions--

正規表現 `timRegex` を変更して、単語 `Timber` に対して 4 つの文字 `m` を持つ場合のみにマッチさせてください。

# --hints--

正規表現で中括弧を使用してください。

```js
assert(timRegex.source.match(/{.*?}/).length > 0);
```

正規表現は文字列 `Timber` にマッチしない必要があります。

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timber'));
```

正規表現は文字列 `Timmber` にマッチしない必要があります。

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmber'));
```

正規表現は文字列 `Timmmber` にマッチしない必要があります。

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmmber'));
```

正規表現は文字列 `Timmmmber` にマッチする必要があります。

```js
timRegex.lastIndex = 0;
assert(timRegex.test('Timmmmber'));
```

正規表現は、30 個の `m` を持つ文字列 `Timber` にマッチしない必要があります。

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Ti' + 'm'.repeat(30) + 'ber'));
```

# --seed--

## --seed-contents--

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
```

# --solutions--

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```
