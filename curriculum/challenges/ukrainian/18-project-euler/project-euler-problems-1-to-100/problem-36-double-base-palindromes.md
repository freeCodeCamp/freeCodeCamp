---
id: 5900f3901000cf542c50fea3
title: 'Завдання 36: двоосновні паліндроми'
challengeType: 1
forumTopicId: 302020
dashedName: problem-36-double-base-palindromes
---

# --description--

Десяткове число 585 = 1001001001<sub>2</sub> (бінарне) є паліндромним в обох основах.

Знайдіть суму всіх чисел, менших за `n`, де 1000 ≤ `n` ≤ 1000000, які є паліндромними в основах 10 та 2.

(Зверніть увагу, що паліндромне число не може починатися з нуля в основі.)

# --hints--

`doubleBasePalindromes(1000)` має повернути число.

```js
assert(typeof doubleBasePalindromes(1000) === 'number');
```

`doubleBasePalindromes(1000)` має повернути 1772.

```js
assert(doubleBasePalindromes(1000) == 1772);
```

`doubleBasePalindromes(50000)` має повернути 105795.

```js
assert(doubleBasePalindromes(50000) == 105795);
```

`doubleBasePalindromes(500000)` має повернути 286602.

```js
assert(doubleBasePalindromes(500000) == 286602);
```

`doubleBasePalindromes(1000000)` має повернути 872187.

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
