---
id: 5900f3831000cf542c50fe96
title: 'Problema 23: Sumas no abundantes'
challengeType: 1
forumTopicId: 301873
dashedName: problem-23-non-abundant-sums
---

# --description--

Un número perfecto es aquel que es igual a la suma de sus divisores propios. Por ejemplo, la suma de los divisores propios de 28 es 1 + 2 + 4 + 7 + 14 = 28, con lo cual 28 es un número perfecto.

Un número `n` es deficiente si la suma de sus divisores propios es menor que `n`, y es abundante si dicha suma es mayor que `n`.

Como 12 es el número abundante más pequeño, 1 + 2 + 3 + 4 + 6 = 16, el número más pequeño que puede ser expresado como suma de dos números abundantes es 24. Mediante análisis matemático, puede demostrarse que todo entero mayor que 28123 puede expresarse como la suma de dos números abundantes. Sin embargo, se sabe que el mayor número que no se puede expresar como la suma de dos números abundantes es menor que ese límite, aunque esto no ha podido ser demostrado rigurosamente.

Encuentra la suma de todos los enteros positivos &lt;= `n` que no se pueden expresar como la suma de dos números abundantes.

# --hints--

`sumOfNonAbundantNumbers(10000)` debe devolver un número.

```js
assert(typeof sumOfNonAbundantNumbers(10000) === 'number');
```

`sumOfNonAbundantNumbers(10000)` debe devolver 3731004.

```js
assert(sumOfNonAbundantNumbers(10000) === 3731004);
```

`sumOfNonAbundantNumbers(15000)` debe devolver 4039939.

```js
assert(sumOfNonAbundantNumbers(15000) === 4039939);
```

`sumOfNonAbundantNumbers(20000)` debe devolver 4159710.

```js
assert(sumOfNonAbundantNumbers(20000) === 4159710);
```

`sumOfNonAbundantNumbers(28123)` debe devolver 4179871.

```js
assert(sumOfNonAbundantNumbers(28123) === 4179871);
```

# --seed--

## --seed-contents--

```js
function sumOfNonAbundantNumbers(n) {

  return n;
}

sumOfNonAbundantNumbers(28123);
```

# --solutions--

```js
function abundantCheck(number) {
  let sum = 1;

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if(number % i === 0) {
      sum += i + +(i !== Math.sqrt(number) && number / i);
    }
  }
  return sum > number;
}

function sumOfNonAbundantNumbers(n) {
  let sum = 0;
  const memo = {};
  let abundantList = [];

  // Function checkSum checks if num can be represented as a sum of numbers in the stack (array)
  const checkSum = (num, stack, memo) => {
    for (let i = 0; i < stack.length; i += 1) {
      if ((num - stack[i]) in memo) return true;
    }
    return false;
  };

  for (let i = 1; i <= n; i += 1) {
    if (abundantCheck(i)) {
      abundantList.push(i);
      memo[i] = 1;
    }
    if (checkSum(i, abundantList, memo)) continue;
    sum += i;
  }
  return sum;
}
```
