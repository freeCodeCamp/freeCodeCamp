---
id: 5900f3881000cf542c50fe9b
title: 'Problem 28: Anzahl der spiralen Diagonalen'
challengeType: 1
forumTopicId: 301930
dashedName: problem-28-number-spiral-diagonals
---

# --description--

Beginnend mit der Zahl 1 und im Uhrzeigersinn nach rechts wird eine 5-mal-5-Spirale wie folgt gebildet:

<div style='padding-left: 4em;'>
  <div style='color: red; display: inline;'>21</div> 22 23 24 <div style='color: red; display: inline;'>25</div><br>
  20<div style='color: red; display: inline;'>7</div>  8  <div style='color: red; display: inline;'>9</div> 10<br>
  19  6  <div style='color: red; display: inline;'>1</div>  2 11<br>
  18  <div style='color: red; display: inline;'>5</div>  4  <div style='color: red; display: inline;'>3</div> 12<br>
  <div style='color: red; display: inline;'>17</div> 16 15 14 <div style='color: red; display: inline;'>13</div><br>
</div>

Er kann überprüft werden, dass die Summe der Zahlen auf den Diagonalen 101 ist.

Wie hoch ist die Summe der Zahlen auf den Diagonalen einer `n` mal `n`-Spirale, die auf die gleiche Weise gebildet wird?

# --hints--

`spiralDiagonals(101)` sollte eine Zahl zurückgeben.

```js
assert(typeof spiralDiagonals(101) === 'number');
```

`spiralDiagonals(101)` sollte 692101 zurückgeben.

```js
assert(spiralDiagonals(101) == 692101);
```

`spiralDiagonals(303)` sollte 18591725 zurückgeben.

```js
assert(spiralDiagonals(303) == 18591725);
```

`spiralDiagonals(505)` sollte 85986601 zurückgeben.

```js
assert(spiralDiagonals(505) == 85986601);
```

`spiralDiagonals(1001)` sollte 669171001 zurückgeben.

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
