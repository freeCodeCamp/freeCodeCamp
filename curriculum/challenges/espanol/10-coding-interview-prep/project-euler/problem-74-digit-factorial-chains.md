---
id: 5900f3b61000cf542c50fec9
title: 'Problema 74: Cadenas factorial de dígitos'
challengeType: 1
forumTopicId: 302187
dashedName: problem-74-digit-factorial-chains
---

# --description--

El número 145 es bien conocido por la propiedad que la suma del factorial de sus dígitos es igual a 145:

$$1! + 4! + 5! = 1 + 24 + 120 = 145$$

Tal vez menos conocido es 169, ya que produce la cadena más larga de números que remontan a 169; resulta que solo existen tres bucles de estos:

$$\begin{align} &169 → 363601 → 1454 → 169\\\\
&871 → 45361 → 871\\\\ &872 → 45362 → 872\\\\
\end{align}$$

No es díficil demostrar que EVERY(CADA) número inicial eventualmente se atascara en un bucle. Por ejemplo,

$$\begin{align} &69 → 363600 → 1454 → 169 → 363601\\ (→ 1454)\\\\
&78 → 45360 → 871 → 45361\\ (→ 871)\\\\ &540 → 145\\ (→ 145)\\\\
\end{align}$$

Iniciando con 69 produce una cadena de cinco terminos no repetitivos, pero la cadena de no repetición más larga que inicia con un número por debajo de un millón es de sesenta términos.

¿Cuántas cadenas, con un número inicial debajo de `n`, contienen exactamente sesenta términos que no se repiten?

# --hints--

`digitFactorialChains(2000)` debe devolver un número.

```js
assert(typeof digitFactorialChains(2000) === 'number');
```

`digitFactorialChains(2000)` debería devolver `6`.

```js
assert.strictEqual(digitFactorialChains(2000), 6);
```

`digitFactorialChains(100000)` debería devolver `42`.

```js
assert.strictEqual(digitFactorialChains(100000), 42);
```

`digitFactorialChains(500000)` debería devolver `282`.

```js
assert.strictEqual(digitFactorialChains(500000), 282);
```

`digitFactorialChains(1000000)` debería devolver `402`.

```js
assert.strictEqual(digitFactorialChains(1000000), 402);
```

# --seed--

## --seed-contents--

```js
function digitFactorialChains(n) {

  return true;
}

digitFactorialChains(2000);
```

# --solutions--

```js
function digitFactorialChains(n) {
  function sumDigitsFactorials(number) {
    let sum = 0;
    while (number > 0) {
      sum += factorials[number % 10];
      number = Math.floor(number / 10);
    }
    return sum;
  }

  const factorials = [1];
  for (let i = 1; i < 10; i++) {
    factorials.push(factorials[factorials.length - 1] * i);
  }

  const sequences = {
    169: 3,
    871: 2,
    872: 2,
    1454: 3,
    45362: 2,
    45461: 2,
    3693601: 3
  };
  let result = 0;

  for (let i = 2; i < n; i++) {
    let curNum = i;
    let chainLength = 0;
    const curSequence = [];
    while (curSequence.indexOf(curNum) === -1) {
      curSequence.push(curNum);
      curNum = sumDigitsFactorials(curNum);
      chainLength++;
      if (sequences.hasOwnProperty(curNum) > 0) {
        chainLength += sequences[curNum];
        break;
      }
    }
    if (chainLength === 60) {
      result++;
    }
    for (let j = 1; j < curSequence.length; j++) {
      sequences[curSequence[j]] = chainLength - j;
    }
  }
  return result;
}
```
