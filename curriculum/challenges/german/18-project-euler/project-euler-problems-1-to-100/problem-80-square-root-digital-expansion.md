---
id: 5900f3bc1000cf542c50fecf
title: 'Problem 80: Digitale Erweiterung der Quadratwurzel'
challengeType: 1
forumTopicId: 302194
dashedName: problem-80-square-root-digital-expansion
---

# --description--

It is well known that if the square root of a natural number is not an integer, then it is irrational. Die dezimale Erweiterung solcher Quadratwurzeln ist unendlich, ohne jegliches sich wiederholendes Muster.

Die Quadratwurzel von zwei ist `1.41421356237309504880...` und die digitale Summe der ersten hundert Dezimalstellen ist `475`.

Finde für die ersten `n` natürlichen Zahlen die Summe der digitalen Summen der ersten hundert Dezimalstellen für alle irrationalen Quadratwurzeln.

# --hints--

`sqrtDigitalExpansion(2)` sollte eine Zahl zurückgeben.

```js
assert(typeof sqrtDigitalExpansion(2) === 'number');
```

`sqrtDigitalExpansion(2)` sollte `475` zurückgeben.

```js
assert.strictEqual(sqrtDigitalExpansion(2), 475);
```

`sqrtDigitalExpansion(50)` sollte `19543` zurückgeben.

```js
assert.strictEqual(sqrtDigitalExpansion(50), 19543);
```

`sqrtDigitalExpansion(100)` sollte `40886` zurückgeben.

```js
assert.strictEqual(sqrtDigitalExpansion(100), 40886);
```

# --seed--

## --seed-contents--

```js
function sqrtDigitalExpansion(n) {

  return true;
}

sqrtDigitalExpansion(2);
```

# --solutions--

```js
function sqrtDigitalExpansion(n) {
  function sumDigits(number) {
    let sum = 0;
    while (number > 0n) {
      let digit = number % 10n;
      sum += parseInt(digit, 10);
      number = number / 10n;
    }
    return sum;
  }

  function power(numberA, numberB) {
    let result = 1n;
    for (let b = 0; b < numberB; b++) {
      result = result * BigInt(numberA);
    }
    return result;
  }

  // Based on http://www.afjarvis.staff.shef.ac.uk/maths/jarvisspec02.pdf
  function expandSquareRoot(number, numDigits) {
    let a = 5n * BigInt(number);
    let b = 5n;
    const boundaryWithNeededDigits = power(10, numDigits + 1);

    while (b < boundaryWithNeededDigits) {
      if (a >= b) {
        a = a - b;
        b = b + 10n;
      } else {
        a = a * 100n;
        b = (b / 10n) * 100n + 5n;
      }
    }
    return b / 100n;
  }

  let result = 0;
  let nextPerfectRoot = 1;
  const requiredDigits = 100;
  for (let i = 1; i <= n; i++) {
    if (nextPerfectRoot ** 2 === i) {
      nextPerfectRoot++;
      continue;
    }
    result += sumDigits(expandSquareRoot(i, requiredDigits));
  }

  return result;
}
```
