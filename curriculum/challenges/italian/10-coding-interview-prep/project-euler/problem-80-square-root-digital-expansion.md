---
id: 5900f3bc1000cf542c50fecf
title: 'Problema 80: Espansione digitale della radice quadrata'
challengeType: 1
forumTopicId: 302194
dashedName: problem-80-square-root-digital-expansion
---

# --description--

È noto che se la radice quadrata di un numero naturale non è un intero, allora è irrazionale. L'espansione decimale di tali radici quadrate è infinita senza alcun pattern di ripetizione.

La radice quadrata di due è `1.41421356237309504880...`, e la somma digitale delle prime cento cifre decimali è `475`.

Per i primi `n` numeri naturali, trova il totale delle somme digitali delle prime cento cifre decimali per tutte le radici quadrate irrazionali.

# --hints--

`sqrtDigitalExpansion(2)` dovrebbe restituire un numero.

```js
assert(typeof sqrtDigitalExpansion(2) === 'number');
```

`sqrtDigitalExpansion(2)` dovrebbe restituire `475`.

```js
assert.strictEqual(sqrtDigitalExpansion(2), 475);
```

`sqrtDigitalExpansion(50)` dovrebbe restituire `19543`.

```js
assert.strictEqual(sqrtDigitalExpansion(50), 19543);
```

`sqrtDigitalExpansion(100)` dovrebbe restituire `40886`.

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
