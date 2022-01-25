---
id: 587d7db9367417b2b2512ba6
title: 最小マッチ数のみを指定する
challengeType: 1
forumTopicId: 301366
dashedName: specify-only-the-lower-number-of-matches
---

# --description--

中括弧を使用して、数量指定子でパターンの最小数と最大数を指定できます。 上限なしでパターンの最小数だけを指定したい場合があります。

パターンの最小数だけを指定するには、最初の数字の後にコンマを置いてください。

たとえば、文字列 `hah` に対して文字 `a` が少なくとも `3` 回出現する場合にマッチさせる正規表現は、`/ha{3,}h/` となります。

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

3 つの `test` 呼び出しは順に、`true`、`false`、`true` を返します。

# --instructions--

正規表現 `haRegex` を変更して、単語 `Hazzah` を 4 つ以上の文字 `z` を持つ場合のみにマッチさせてください。

# --hints--

正規表現で中括弧を使用してください。

```js
assert(haRegex.source.match(/{.*?}/).length > 0);
```

正規表現は文字列 `Hazzah` にマッチしない必要があります。

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzah'));
```

正規表現は文字列 `Hazzzah` にマッチしない必要があります。

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzzah'));
```

正規表現は文字列 `Hazzzzah` にマッチする必要があります。

```js
assert('Hazzzzah'.match(haRegex)[0].length === 8);
```

正規表現は文字列 `Hazzzzzah` にマッチする必要があります。

```js
assert('Hazzzzzah'.match(haRegex)[0].length === 9);
```

正規表現は文字列 `Hazzzzzzah` にマッチする必要があります。

```js
assert('Hazzzzzzah'.match(haRegex)[0].length === 10);
```

正規表現は、30 個の `z` を持つ文字列 `Hazzah` にマッチする必要があります。

```js
assert('Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah'.match(haRegex)[0].length === 34);
```

# --seed--

## --seed-contents--

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

# --solutions--

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```
