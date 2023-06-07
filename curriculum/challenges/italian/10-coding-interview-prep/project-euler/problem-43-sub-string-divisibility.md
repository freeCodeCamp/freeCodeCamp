---
id: 5900f3971000cf542c50feaa
title: 'Problema 43: Divisibilità in sotto-stringhe'
challengeType: 1
forumTopicId: 302100
dashedName: problem-43-sub-string-divisibility
---

# --description--

Il numero 1406357289 è un numero pandigitale da 0 a 9 perché è costituito da ciascuna delle cifre da 0 a 9 in un certo ordine, ma ha anche una proprietà di divisibilità in sotto-stringhe piuttosto interessante.

Sia $d_1$ il $1^{st}$ numero, $d_2$ sia il $2^{nd}$ numero, e così via. In questo modo, notiamo quanto segue:

- ${d_2}{d_3}{d_4} = 406$ è divisibile per 2
- ${d_3}{d_4}{d_5} = 063$ è divisibile per 3
- ${d_4}{d_5}{d_6} = 635$ è divisibile per 5
- ${d_5}{d_6}{d_7} = 357$ è divisibile per 7
- ${d_6}{d_7}{d_8} = 572$ è divisibile per 11
- ${d_7}{d_8}{d_9} = 728$ è divisibile per 13
- ${d_8}{d_9}{d_{10}} = 289$ è divisibile per 17

Trova la somma di tutti i numeri pandigitali da 0 a `n` con sotto-stringhe che soddisfano `n - 2` di queste proprietà di divisibilità.

**Nota:** i numeri pandigitali che iniziano con `0` devono essere considerati nel risultato.

# --hints--

`substringDivisibility(5)` dovrebbe restituire un numero.

```js
assert(typeof substringDivisibility(5) === 'number');
```

`substringDivisibility(5)` dovrebbe restituire `12444480`.

```js
assert.strictEqual(substringDivisibility(5), 12444480)
```

`substringDivisibility(7)` dovrebbe restituire `1099210170`.

```js
assert.strictEqual(substringDivisibility(7), 1099210170)
```

`substringDivisibility(8)` dovrebbe restituire `1113342912`.

```js
assert.strictEqual(substringDivisibility(8), 1113342912)
```

`substringDivisibility(9)` dovrebbe restituire `16695334890`.

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
