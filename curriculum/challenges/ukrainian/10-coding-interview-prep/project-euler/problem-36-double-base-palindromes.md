---
id: 5900f3901000cf542c50fea3
title: 'Завдання 36: Двоосновні паліндроми'
challengeType: 1
forumTopicId: 302020
dashedName: problem-36-double-base-palindromes
---

# --description--

Десяткове число 585 = 1001001001<sub>2</sub> (бінарне) є паліндромним в обох основах.

Знайдіть суму всіх чисел, менших за `n`, тоді як 1000 ≤ `n` ≤ 1000000, що є паліндромними у основі 10 та основі 2.

(Будь ласка, зверніть увагу на те, що паліндромне число може не містити провідних нулів у кожній основі.)

# --hints--

`doubleBasePalindromes(1000)` має повернути число.

```js
assert(typeof doubleBasePalindromes(1000) === 'number');
```

`doubleBasePalindromes(1000)` має повернути число 1772.

```js
assert(doubleBasePalindromes(1000) == 1772);
```

`doubleBasePalindromes(50000)` має повернути число 105795.

```js
assert(doubleBasePalindromes(50000) == 105795);
```

`doubleBasePalindromes(500000)` має повернути число 286602.

```js
assert(doubleBasePalindromes(500000) == 286602);
```

`doubleBasePalindromes(1000000)` має повернути число 872187.

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
