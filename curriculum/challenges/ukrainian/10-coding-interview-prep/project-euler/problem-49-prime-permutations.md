---
id: 5900f39d1000cf542c50feb0
title: 'Завдання 49: Перестановки простих чисел'
challengeType: 1
forumTopicId: 302159
dashedName: problem-49-prime-permutations
---

# --description--

Арифметична прогресія 1487, 4817 і 8147, в якій кожен член збільшується на 3330, є незвичною з двох причин: по-перше, кожен з трьох членів є простим числом, а по-друге, усі чотиризначні числа є перестановками одне одного.

Не існує таких арифметичних прогресій, які б складалися з трьох 1-, 2- або 3-значних простих чисел, та які б виявляли таку властивість, однак існує ще одна 4-значна зростаюча прогресія.

Яке 12-значне число утвориться, якщо об'єднати три члени цієї прогресії?

# --hints--

`primePermutations()` має повернути число.

```js
assert(typeof primePermutations() === 'number');
```

`primePermutations()` має повернути число 296962999629.

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
