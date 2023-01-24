---
id: 5900f3901000cf542c50fea3
title: 'Problem 36: Doppelte Palindrome'
challengeType: 1
forumTopicId: 302020
dashedName: problem-36-double-base-palindromes
---

# --description--

Die Dezimalzahl 585 = 1001001001<sub>2</sub> (binär), ist von beiden Seiten palindromisch.

Finde die Summe aller Zahlen, die kleiner sind als `n`, wobei 1000 ≤ `n` ≤ 1000000, die in 10 und 2 palindromisch sind.

(Bitte beachte, dass die palindromische Zahl in beiden Basen keine führenden Nullen enthalten darf)

# --hints--

`doubleBasePalindromes(1000)` sollte eine Zahl zurückgeben.

```js
assert(typeof doubleBasePalindromes(1000) === 'number');
```

`doubleBasePalindromes(1000)` sollte 1772 zurückgeben.

```js
assert(doubleBasePalindromes(1000) == 1772);
```

`doubleBasePalindromes(50000)` sollte 105795 zurückgeben.

```js
assert(doubleBasePalindromes(50000) == 105795);
```

`doubleBasePalindromes(500000)` sollte 286602 zurückgeben.

```js
assert(doubleBasePalindromes(500000) == 286602);
```

`doubleBasePalindromes(1000000)` sollte 872187 zurückgeben.

```js
assert(doubleBasePalindromes(1000000) == 872187);
```

# --seed--

## --seed-contents--

```js
function doubleBasePalindromes(n) {

  return n;
}

doubleBasePalindromes(1000000);
```

# --solutions--

```js
// solution required
```
