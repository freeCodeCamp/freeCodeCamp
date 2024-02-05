---
id: 5900f3831000cf542c50fe96
title: 'Завдання 23: ненадлишкові суми'
challengeType: 1
forumTopicId: 301873
dashedName: problem-23-non-abundant-sums
---

# --description--

Досконале число — це число, сума властивих дільників якого дорівнює самому числу. Наприклад, сума властивих дільників числа 28 дорівнює 1 + 2 + 4 + 7 + 14 = 28, тому 28 є досконалим числом.

Число `n` називають недостатнім, якщо сума його властивих дільників є меншою ніж `n`, і надлишковим, якщо ця сума перевищує `n`.

Оскільки 12 є найменшим надлишковим числом (1 + 2 + 3 + 4 + 6 = 16), то найменшим числом, що може бути представлене як сума двох надлишкових чисел, є 24. За допомогою математичного аналізу можна довести, що всі цілі числа більші за 28123 можна представити як суму двох надлишкових чисел. Ця межа не може бути зменшена подальшим аналізом, навіть незважаючи на те, що найбільше число, яке не може бути записане як сума двох надлишкових чисел, менше за цю межу.

Знайдіть суму усіх натуральних чисел &lt;= `n`, які не можуть бути записані як сума двох надлишкових чисел.

# --hints--

`sumOfNonAbundantNumbers(10000)` має повернути число.

```js
assert(typeof sumOfNonAbundantNumbers(10000) === 'number');
```

`sumOfNonAbundantNumbers(10000)` має повернути 3731004.

```js
assert(sumOfNonAbundantNumbers(10000) === 3731004);
```

`sumOfNonAbundantNumbers(15000)` має повернути 4039939.

```js
assert(sumOfNonAbundantNumbers(15000) === 4039939);
```

`sumOfNonAbundantNumbers(20000)` має повернути 4159710.

```js
assert(sumOfNonAbundantNumbers(20000) === 4159710);
```

`sumOfNonAbundantNumbers(28123)` має повернути 4179871.

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
