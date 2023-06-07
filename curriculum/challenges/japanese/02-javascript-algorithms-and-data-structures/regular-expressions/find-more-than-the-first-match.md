---
id: 587d7db4367417b2b2512b93
title: 複数回出現するマッチを検索する
challengeType: 1
forumTopicId: 301342
dashedName: find-more-than-the-first-match
---

# --description--

ここまではパターンを 1 回だけ抽出または検索することができました。

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

この `match` は `["Repeat"]` を返します。

パターンを複数回検索または抽出するには、グローバルサーチフラグ `g` を使用します。

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

この `match` は値 `["Repeat", "Repeat", "Repeat"]` を返します。

# --instructions--

正規表現 `starRegex`を使用して、文字列 `twinkleStar` から両方の単語 `Twinkle` を検索して抽出してください。

**注**  
`/search/gi` のように正規表現に複数のフラグを付けることができます。

# --hints--

正規表現 `starRegex` でグローバルフラグ `g` を使用する必要があります。

```js
assert(starRegex.flags.match(/g/).length == 1);
```

正規表現 `starRegex` で大文字小文字を区別しないフラグ `i` を使用する必要があります。

```js
assert(starRegex.flags.match(/i/).length == 1);
```

単語 `Twinkle` の両方の出現にマッチする必要があります。

```js
assert(
  result.sort().join() ==
    twinkleStar
      .match(/twinkle/gi)
      .sort()
      .join()
);
```

マッチの `result` には 2 つの要素が含まれる必要があります。

```js
assert(result.length == 2);
```

# --seed--

## --seed-contents--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

# --solutions--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```
