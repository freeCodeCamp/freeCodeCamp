---
id: 5900f3831000cf542c50fe96
title: 'Problema 23: Soma dos números não abundantes'
challengeType: 1
forumTopicId: 301873
dashedName: problem-23-non-abundant-sums
---

# --description--

Um número perfeito é aquele igual à soma de seus divisores próprios. Por exemplo, a soma dos divisores próprios de 28 é 1 + 2 + 4 + 7 + 14 = 28. Isso significa que 28 é um número perfeito.

Um número `n` é chamado de deficiente se a soma de seus divisores próprios for menor que `n`. Se a soma dos divisores próprios for maior que `n`, esse número é chamado de abundante.

Como 12 é o menor número abundante, 1 + 2 + 3 + 4 + 6 = 16, o menor número que pode ser escrito como a soma de dois números abundantes é 24. Usando análise matemática, podemos comprovar que todos os números inteiros maiores que 28123 podem ser escritos como a soma de dois números abundantes. No entanto, este limite máximo não pode ser reduzido através de uma análise, embora se saiba que o maior número que não pode ser expresso como a soma de dois números abundantes é inferior a este limite.

Calcule a soma de todos os números inteiros positivos &lt;= `n` que não podem ser escritos como a soma de dois números abundantes.

# --hints--

`sumOfNonAbundantNumbers(10000)` deve retornar um número.

```js
assert(typeof sumOfNonAbundantNumbers(10000) === 'number');
```

`sumOfNonAbundantNumbers(10000)` deve retornar 3731004.

```js
assert(sumOfNonAbundantNumbers(10000) === 3731004);
```

`sumOfNonAbundantNumbers(15000)` deve retornar 4039939.

```js
assert(sumOfNonAbundantNumbers(15000) === 4039939);
```

`sumOfNonAbundantNumbers(20000)` deve retornar 4159710.

```js
assert(sumOfNonAbundantNumbers(20000) === 4159710);
```

`sumOfNonAbundantNumbers(28123)` deve retornar 4179871.

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
