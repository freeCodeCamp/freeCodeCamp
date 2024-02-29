---
id: 5900f3841000cf542c50fe97
title: '問題 24: 辞書式順列'
challengeType: 1
forumTopicId: 301885
dashedName: problem-24-lexicographic-permutations
---

# --description--

順列とは、オブジェクトの順序付き配列です。 例えば 3124 は、数字 1, 2, 3, 4 の順列の一つです。 すべての順列が数字順またはアルファベット順に並べられている場合、それを辞書順と呼びます。 0, 1, 2 の辞書式順列は次のとおりです。

<div style='text-align: center;'>012   021   102   120   201   210</div>

数字 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 の辞書式順列における `n` 番目の順列を求めなさい。

# --hints--

`lexicographicPermutations(699999)` は数値を返す必要があります。

```js
assert(typeof lexicographicPermutations(699999) === 'number');
```

`lexicographicPermutations(699999)` は 1938246570 を返す必要があります。

```js
assert(lexicographicPermutations(699999) == 1938246570);
```

`lexicographicPermutations(899999)` は 2536987410 を返す必要があります。

```js
assert(lexicographicPermutations(899999) == 2536987410);
```

`lexicographicPermutations(900000)` は 2537014689 を返す必要があります。

```js
assert(lexicographicPermutations(900000) == 2537014689);
```

`lexicographicPermutations(999999)` は 2783915460 を返す必要があります。

```js
assert(lexicographicPermutations(999999) == 2783915460);
```

# --seed--

## --seed-contents--

```js
function lexicographicPermutations(n) {

  return n;
}

lexicographicPermutations(999999);
```

# --solutions--

```js
// solution required
```
