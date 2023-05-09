---
id: 5900f3a41000cf542c50feb7
title: 'Problema 56: Poderosa soma de algarismos'
challengeType: 1
forumTopicId: 302167
dashedName: problem-56-powerful-digit-sum
---

# --description--

Um googol ($10^{100}$) é um número absurdamente enorme: um seguido por cem zeros. Já $100^{100}$ é quase inimaginavelmente grande: um seguido por duzentos zeros. Apesar do seu tamanho, a soma dos algarismos em cada número é de apenas 1.

Considerando os números naturais da fórmula $a^b$, onde `a`, `b` &lt; `n`, qual é a soma máxima dos algarismos?

# --hints--

`powerfulDigitSum(3)` deve retornar um número.

```js
assert(typeof powerfulDigitSum(3) === 'number');
```

`powerfulDigitSum(3)` deve retornar `4`.

```js
assert.strictEqual(powerfulDigitSum(3), 4);
```

`powerfulDigitSum(10)` deve retornar `45`.

```js
assert.strictEqual(powerfulDigitSum(10), 45);
```

`powerfulDigitSum(50)` deve retornar `406`.

```js
assert.strictEqual(powerfulDigitSum(50), 406);
```

`powerfulDigitSum(75)` deve retornar `684`.

```js
assert.strictEqual(powerfulDigitSum(75), 684);
```

`powerfulDigitSum(100)` deve retornar `972`.

```js
assert.strictEqual(powerfulDigitSum(100), 972);
```

# --seed--

## --seed-contents--

```js
function powerfulDigitSum(n) {

  return true;
}

powerfulDigitSum(3);
```

# --solutions--

```js
function powerfulDigitSum(n) {
  function sumDigitsOfPower(numA, numB) {
    let digitsSum = 0;
    let number = power(numA, numB);
    while (number > 0n) {
      const digit = number % 10n;
      digitsSum += parseInt(digit, 10);
      number = number / 10n;
    }
    return digitsSum;
  }

  function power(numA, numB) {
    let sum = 1n;
    for (let b = 0; b < numB; b++) {
      sum = sum * BigInt(numA);
    }
    return sum;
  }

  const limit = n - 1;
  let maxDigitsSum = 0;
  for (let a = limit; a > 0; a--) {
    for (let b = limit; b > 0; b--) {
      const curDigitSum = sumDigitsOfPower(a, b);
      if (curDigitSum > maxDigitsSum) {
        maxDigitsSum = curDigitSum;
      }
    }
  }
  return maxDigitsSum;
}
```
