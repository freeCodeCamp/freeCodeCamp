---
id: 5900f3901000cf542c50fea3
title: 'Problema 36: palindromi in doppia base'
challengeType: 1
forumTopicId: 302020
dashedName: problem-36-double-base-palindromes
---

# --description--

Il numero decimale 585 = 1001001001<sub>2</sub> (binary) è un palindromo in entrambe le basi.

Trova la somma di tutti i numeri, meno di `n`, dove 1000 ≤ `n` ≤ 1000000, che sono palindromi in base 10 e in base 2.

(Si noti che il numero palindromico, in entrambe le basi, non può includere zeri iniziali.)

# --hints--

`doubleBasePalindromes(1000)` dovrebbe restituire un numero.

```js
assert(typeof doubleBasePalindromes(1000) === 'number');
```

`doubleBasePalindromes(1000)` dovrebbe restituire 1772.

```js
assert(doubleBasePalindromes(1000) == 1772);
```

`doubleBasePalindromes(50000)` dovrebbe restituire 105795.

```js
assert(doubleBasePalindromes(50000) == 105795);
```

`doubleBasePalindromes(500000)` dovrebbe restituire 286602.

```js
assert(doubleBasePalindromes(500000) == 286602);
```

`doubleBasePalindromes(1000000)` dovrebbe restituire 872187.

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
