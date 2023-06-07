---
id: 5900f3971000cf542c50feaa
title: 'Problema 43: Divisibilidade de substrings'
challengeType: 1
forumTopicId: 302100
dashedName: problem-43-sub-string-divisibility
---

# --description--

O número 1406357289 é um número pandigital de 0 a 9 porque é composto por cada um dos algarismos de 0 a 9, mas tem também uma propriedade de divisão de suas substrings bastante interessante.

Considere que $d_1$ seja o 1º algarismo, $d_2$ seja o 2º algarismo, e assim por diante. Desta forma, podemos perceber o seguinte:

- ${d_2}{d_3}{d_4} = 406$ é divisível por 2
- ${d_3}{d_4}{d_5} = 063$ é divisível por 3
- ${d_4}{d_5}{d_6} = 635$ é divisível por 5
- ${d_5}{d_6}{d_7} = 357$ é divisível por 7
- ${d_6}{d_7}{d_8} = 572$ é divisível por 11
- ${d_7}{d_8}{d_9} = 728$ é divisível por 13
- ${d_8}{d_9}{d_{10}} = 289$ é divisível por 17

Calcule a soma de todos os números pandigitais de 0 a `n` com `n - 2` substrings que cumprem as propriedades de divisibilidade (2, 3, 5, 7, 11, 13 e 17).

**Observação:** os números pandigitais que começam com `0` devem ser considerados no resultado.

# --hints--

`substringDivisibility(5)` deve retornar um número.

```js
assert(typeof substringDivisibility(5) === 'number');
```

`substringDivisibility(5)` deve retornar `12444480`.

```js
assert.strictEqual(substringDivisibility(5), 12444480)
```

`substringDivisibility(7)` deve retornar `1099210170`.

```js
assert.strictEqual(substringDivisibility(7), 1099210170)
```

`substringDivisibility(8)` deve retornar `1113342912`.

```js
assert.strictEqual(substringDivisibility(8), 1113342912)
```

`substringDivisibility(9)` deve retornar `16695334890`.

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
  function isSubDivisable(digits) {
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
  const divisablePandigitals = [];
  heapsPermutations(
    allowedDigits.length,
    allowedDigits,
    isSubDivisable,
    divisablePandigitals
  );

  let sum = 0;
  for (let i = 0; i < divisablePandigitals.length; i++) {
    sum += divisablePandigitals[i];
  }

  return sum;
}
```
