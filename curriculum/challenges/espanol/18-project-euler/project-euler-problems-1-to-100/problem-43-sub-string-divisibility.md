---
id: 5900f3971000cf542c50feaa
title: 'Problema 43: División de subcadena'
challengeType: 1
forumTopicId: 302100
dashedName: problem-43-sub-string-divisibility
---

# --description--

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Sea $d_1$ el dígito $1^{st}$, $d_2$ sea el dígito $2^{nd}$, y así sucesivamente. De esta manera, tomamos nota de lo siguiente:

- ${d_2}{d_3}{d_4} = 406$ is divisible by 2
- ${d_3}{d_4}{d_5} = 063$ es divisible por 3
- ${d_4}{d_5}{d_6} = 635$ es divisible por 5
- ${d_5}{d_6}{d_7} = 357$ es divisible por 7
- ${d_6}{d_7}{d_8} = 572$ es divisible por 11
- ${d_7}{d_8}{d_9} = 728$ es divisible por 13
- ${d_8}{d_9}{d_{10}} = 289$ es divisible por 17

Encuentra la suma de todos los números pandigitales de 0 a `n` con substrings cumpliendo `n - 2` de estas propiedades de divisibilidad.

**Note:** Número Pandigitales iniciando con `0` son considerados en el resultado.

# --hints--

`substringDivisibility(5)` debería devolver un número.

```js
assert(typeof substringDivisibility(5) === 'number');
```

`substringDivisibility(5)` debería devolver `12444480`.

```js
assert.strictEqual(substringDivisibility(5), 12444480)
```

`substringDivisibility(7)` debería devolver `1099210170`.

```js
assert.strictEqual(substringDivisibility(7), 1099210170)
```

`substringDivisibility(8)` debería devolver `1113342912`.

```js
assert.strictEqual(substringDivisibility(8), 1113342912)
```

`substringDivisibility(9)` debería devolver `16695334890`.

```js
assert.strictEqual(substringDivisibility(9), 16695334890)
```

# --seed--

## --seed-contents--

```js
function substringDivisibility(n) {

  return true;
}

substringDivisibility(5);
```

# --solutions--

```js
function substringDivisibility(n) {
  function isSubDivisible(digits) {
    const factors = [2, 3, 5, 7, 11, 13, 17];

    for (let i = 1; i < digits.length - 2; i++) {
      const subNumber = digits[i] * 100 + digits[i + 1] * 10 + digits[i + 2];
      if (subNumber % factors[i - 1] !== 0) {
        return false;
      }
    }
    return true;
  }

  function heapsPermutations(k, digits, conditionCheck, results) {
    if (k === 1) {
      if (conditionCheck(digits)) {
        const number = parseInt(digits.join(''), 10);
        results.push(number);
      }
      return;
    }

    heapsPermutations(k - 1, digits, conditionCheck, results);

    for (let i = 0; i < k - 1; i++) {
      if (k % 2 === 0) {
        [digits[i], digits[k - 1]] = [digits[k - 1], digits[i]];
      } else {
        [digits[0], digits[k - 1]] = [digits[k - 1], digits[0]];
      }
      heapsPermutations(k - 1, digits, conditionCheck, results);
    }
    return;
  }

  const allowedDigits = [...new Array(n + 1).keys()];
  const divisiblePandigitals = [];
  heapsPermutations(
    allowedDigits.length,
    allowedDigits,
    isSubDivisible,
    divisiblePandigitals
  );

  let sum = 0;
  for (let i = 0; i < divisiblePandigitals.length; i++) {
    sum += divisiblePandigitals[i];
  }

  return sum;
}
```
