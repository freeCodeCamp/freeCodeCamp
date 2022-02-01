---
id: 587d7db6367417b2b2512b99
title: 1 回以上出現する文字にマッチさせる
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

場合によっては、1 行に 1 回以上出現する文字 (または文字のグループ) にマッチさせる必要があります。 つまり、少なくとも 1 回出現し、繰り返される可能性がある文字です。

`+` 文字を使用すると、そうしたマッチかどうかを調べることができます。 文字やパターンは連続して存在する必要があることに注意してください。 つまり、文字は連続して繰り返されている必要があります。

たとえば、 `/a+/g` は `abc` で 1 つのマッチを見つけ、`["a"]` を返します。 `+` があるため、`aabc` でも単一のマッチを見つけ、`["aa"]` を返します。

文字列 `abab` の場合は、`b` が間に入っていて `a` が連続していないため、2 つのマッチ `["a", "a"]` を見つけて返します。 文字列 `bcd` には `a`がないので、マッチしません。

# --instructions--

`Mississippi` で、文字 `s` が複数回出現する箇所にマッチを見つける必要があります。 `+` 記号を使用する正規表現を記述してください。

# --hints--

正規表現 `myRegex` で `+` 記号を使用して、1 つまたは複数の文字 `s` にマッチさせる必要があります。

```js
assert(/\+/.test(myRegex.source));
```

正規表現 `myRegex` は 2 つのアイテムにマッチする必要があります。

```js
assert(result.length == 2);
```

`result` 変数は、2 つの `ss` のマッチを含む配列となる必要があります。

```js
assert(result[0] == 'ss' && result[1] == 'ss');
```

# --seed--

## --seed-contents--

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

# --solutions--

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```
