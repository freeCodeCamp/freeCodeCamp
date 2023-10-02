---
id: 5900f3881000cf542c50fe9b
title: '問題 28: らせん状に配置された数字の対角線'
challengeType: 1
forumTopicId: 301930
dashedName: problem-28-number-spiral-diagonals
---

# --description--

数 1 から始めて時計回りに右へ移動していくと、次のように 5 x 5 のらせんができます。

<div style='padding-left: 4em;'>
  <div style='color: red; display: inline;'>21</div> 22 23 24 <div style='color: red; display: inline;'>25</div><br>
  20  <div style='color: red; display: inline;'>7</div>  8  <div style='color: red; display: inline;'>9</div> 10<br>
  19  6  <div style='color: red; display: inline;'>1</div>  2 11<br>
  18  <div style='color: red; display: inline;'>5</div>  4  <div style='color: red; display: inline;'>3</div> 12<br>
  <div style='color: red; display: inline;'>17</div> 16 15 14 <div style='color: red; display: inline;'>13</div><br>
</div>

2 本の対角線上の数の和が 101 であることを確認できます。

同じように得られた `n` x `n` のらせんの 2 本の対角線上の数の和を求めなさい。

# --hints--

`spiralDiagonals(101)` は数値を返す必要があります。

```js
assert(typeof spiralDiagonals(101) === 'number');
```

`spiralDiagonals(101)` は 692101 を返す必要があります

```js
assert(spiralDiagonals(101) == 692101);
```

`spiralDiagonals(303)` は、18591725 を返す必要があります。

```js
assert(spiralDiagonals(303) == 18591725);
```

`spiralDiagonals(505)` は85986601を返す必要があります。

```js
assert(spiralDiagonals(505) == 85986601);
```

`spiralDiagonals(1001)` は 669171001 を返す必要があります。

```js
assert(spiralDiagonals(1001) == 669171001);
```

# --seed--

## --seed-contents--

```js
function spiralDiagonals(n) {

  return n;
}

spiralDiagonals(1001);
```

# --solutions--

```js
const spiralDiagonals = (n) => {
  const Sn2 = (n) => {
    return n*(n+1)*(2*n+1)/6;
  };
  const Sn = (n) => {
    return n*(n+1)/2;
  };
  let sum = (Sn2(n-1) + Sn(n-1) + n-1) + (Math.floor(n/2) + Sn2(n));
  return sum;
};
```
