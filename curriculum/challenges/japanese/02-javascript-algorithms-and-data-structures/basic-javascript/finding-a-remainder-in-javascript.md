---
id: 56533eb9ac21ba0edf2244ae
title: JavaScript で割り算の余りを求める
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWP24Ub'
forumTopicId: 18184
dashedName: finding-a-remainder-in-javascript
---

# --description--

<dfn>剰余</dfn>演算子 `%` は 2 つの数値の割り算の余りを取得します。

**例**

<blockquote>5 % 2 = 1 なぜならば<br>Math.floor(5 / 2) = 2 (割り算の商)<br>2 * 2 = 4<br>5 - 4 = 1 (割り算の余り)</blockquote>

**使用例**  
数学では、ある数が偶数か奇数かを求めるために、その数を `2` で割った余りを調べることができます。

<blockquote>17 % 2 = 1 (17 は奇数)<br>48 % 2 = 0 (48 は偶数)</blockquote>

**注:** <dfn>剰余</dfn>演算子はしばしばモジュロ演算子と混同されることがあります。 剰余はモジュロと非常によく似ていますが、負数では正しく機能しません。

# --instructions--

<dfn>剰余</dfn> (`%`) 演算子を使用して、`remainder` が `11` を `3` で割った余りと等しくなるように設定してください。

# --hints--

変数 `remainder` を初期化する必要があります。

```js
assert(/(const|let|var)\s+?remainder/.test(code));
```

`remainder` の値は `2` になる必要があります。

```js
assert(remainder === 2);
```

`%` 演算子を使用してください。

```js
assert(/\s+?remainder\s*?=\s*?.*%.*;?/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(y){return 'remainder = '+y;})(remainder);
```

## --seed-contents--

```js
const remainder = 0;
```

# --solutions--

```js
const remainder = 11 % 3;
```
