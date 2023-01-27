---
id: 5900f4151000cf542c50ff27
title: 'Problema 168: Rotaciones númericas'
challengeType: 1
forumTopicId: 301802
dashedName: problem-168-number-rotations
---

# --description--

Considera el número 142857. Podemos rotar-derecha este número moviendo el último dígito (7) al frente de este dándonos 714285.

Puede ser verificado que $714285 = 5 × 142857$.

Esto demuestra la propiedad inusual de 142857: este es un divisor de su rotación-derecha.

Para los dígitos del numero entero $a$ y $b$, encuentra los últimos 5 dígitos de la sumatoria de todos los enteros $n$, $10^a &lt; n &lt; 10^b$, que tengan esta propiedad.

# --hints--

`numberRotations(2, 10)` deberia devolver `98311`.

```js
assert.strictEqual(numberRotations(2, 10), 98311);
```

`numberRotations(2, 100)` debería devolver `59206`.

```js
assert.strictEqual(numberRotations(2, 100), 59206);
```

# --seed--

## --seed-contents--

```js
function numberRotations(a, b) {

  return 0;
}

numberRotations();
```

# --solutions--

```js
function numberRotations(minDigits, maxDigits) {
  const DIGITS_TO_KEEP = 100000n;
  const powersOfTen = Array(maxDigits).fill(0);
  powersOfTen[0] = 1n;
  for (let i = 1; i < maxDigits; i++) {
    powersOfTen[i] = powersOfTen[i - 1] * 10n;
  }

  // We want numbers of the form xd * m = dx
  // Or more precisely:
  //   (x * 10 + d) * m = d*10^(n-1) + x
  // Solving for x:
  //   x = d (10^(n-1) - m) / (10 * m - 1)
  let total = 0n;
  for (let numDigits = minDigits; numDigits <= maxDigits; numDigits++) {
    // Check all multiplier - digit pairs to see if a candidate can be built
    //  with the correct number of digits
    for (let multiplier = 1n; multiplier < 10n; multiplier++) {
      for (let lastDigit = 1n; lastDigit < 10n; lastDigit++) {
        const numerator   = lastDigit * (powersOfTen[numDigits - 1] - multiplier);
        const denominator = (powersOfTen[1] * multiplier - 1n);
        if (numerator % denominator === 0n) {
          const candidate = (numerator / denominator) * 10n + lastDigit;
          if (candidate.toString().length === numDigits) {
            total = (total + candidate) % DIGITS_TO_KEEP;
          }
        }
      }
    }
  }

  return parseInt(total);
}
```
