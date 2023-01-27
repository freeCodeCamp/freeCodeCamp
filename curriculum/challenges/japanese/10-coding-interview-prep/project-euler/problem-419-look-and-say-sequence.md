---
id: 5900f5101000cf542c510022
title: '問題 419: 読み上げ数列'
challengeType: 1
forumTopicId: 302088
dashedName: problem-419-look-and-say-sequence
---

# --description--

読み上げ数列は、1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ... と続きます。

この数列は 1 から始まり、他のすべての項は、連続する桁によって前項の数を説明しています。

声に出して読むとすぐ分かります。

1 は 「1 個の 1」$→ 11$

11 は 「2 個の 1」$→ 21 $

21 は「1 個の 2 と 1 個の 1」$→ 1211$

1211 は 「1 個の 1、1 個の 2、2 個の 1」$→ 111221$

111221 は 「3 個の 1、2 個の 2、1 個の 1」$→ 312211$

このように続いていきます。

この数列の第 $n$ 項に含まれる 1, 2, 3 の個数をそれぞれ $A(n)$, $B(n)$, $C(n)$ とします。 $A(40) = 31\\,254$, $B(40) = 20\\,259$, $C(40) = 11\\,625$ であることを確認できます。

$n = {10}^{12}$ のとき、$A(n)$, $B(n)$, $C(n)$ を求めなさい。 回答は mod $2^{30}$ の文字列とし、値 $A$, $B$, $C$ をカンマで区切ること。 例: $n = 40$ のとき、回答は `31254,20259,11625` になります。

# --hints--

`lookAndSaySequence()` は文字列を返す必要があります。

```js
assert(typeof lookAndSaySequence() === 'string');
```


`lookAndSaySequence()` は文字列 `998567458,1046245404,43363922` を返す必要があります。

```js
assert.strictEqual(lookAndSaySequence(), '998567458,1046245404,43363922');
```

# --seed--

## --seed-contents--

```js
function lookAndSaySequence() {

  return true;
}

lookAndSaySequence();
```

# --solutions--

```js
// solution required
```
