---
id: 5900f39d1000cf542c50feb0
title: 'Problema 49: Permutações de números primos'
challengeType: 1
forumTopicId: 302159
dashedName: problem-49-prime-permutations
---

# --description--

A sequência aritmética, 1487, 4817, 8147, em que cada um dos termos aumenta em 3330, é incomum por dois motivos: (i) todos os três números são primos, e, (ii) cada um dos números de 4 algarismos são permutações um do outro.

Não existem sequências aritméticas de números primos de 1, 2 ou 3 dígitos que possuem essas mesmas propriedades. Mas existe outra sequência crescente de 4 algarismos.

Qual número de 12 algarismos você forma ao concatenar os três termos nessa sequência?

# --hints--

`primePermutations()` deve retornar um número.

```js
assert(typeof primePermutations() === 'number');
```

`primePermutations()` deve retornar 296962999629.

```js
assert.strictEqual(primePermutations(), 296962999629);
```

# --seed--

## --seed-contents--

```js
function primePermutations() {

  return true;
}

primePermutations();
```

# --solutions--

```js
function primePermutations() {
  function arePermutations(num1, num2) {
    const numStr1 = num1.toString();
    let numStr2 = num2.toString();
    if (numStr1.length !== numStr2.length) {
      return false;
    }

    for (let i = 0; i < numStr1.length; i++) {
      const index = numStr2.indexOf(numStr1[i]);
      if (index === -1) {
        return false;
      }
      numStr2 = numStr2.slice(0, index) + numStr2.slice(index + 1);
    }
    return true;
  }

  function isPrime(num) {
    if (num < 2) {
      return false;
    } else if (num === 2) {
      return true;
    }
    const sqrtOfNum = Math.floor(num ** 0.5);
    for (let i = 2; i <= sqrtOfNum + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let num1 = 1000; num1 <= 9999; num1++) {
    const num2 = num1 + 3330;
    const num3 = num2 + 3330;
    if (isPrime(num1) && isPrime(num2) && isPrime(num3)) {
      if (arePermutations(num1, num2) && arePermutations(num1, num3)
        && num1 !== 1487) {
        // concatenate and return numbers
        return (num1 * 100000000) + (num2 * 10000) + num3;
      }
    }
  }
  return 0;
}
```
