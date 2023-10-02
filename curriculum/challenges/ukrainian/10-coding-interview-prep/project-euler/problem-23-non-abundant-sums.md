---
id: 5900f3831000cf542c50fe96
title: 'Завдання 23: Ненадлишкові суми чисел'
challengeType: 1
forumTopicId: 301873
dashedName: problem-23-non-abundant-sums
---

# --description--

Досконале число - це число, у якому сума його власних дільників дорівнює цьому числу. Наприклад, сума власних дільників числа 28 становитиме 1 + 2 + 4 + 7 + 14 = 28, що означає, що 28 - досконале число.

Число `n` називають недостатнім, якщо сума його власних дільників є меншою, ніж `n`, і надлишковим, якщо ця сума перевищує `n`.

Так як 12 - найменше надлишкове число (1 + 2 + 3 + 4 + 6 = 16), найменшим числом, що може бути представлене як сума двох надлишкових чисел, є 24. Використовуючи математичний аналіз, можна показати, що всі цілі числа, більші за 28123, можуть бути представлені як сума двох надлишкових чисел. Однак, верхня границя не може бути ще більш знижена у результаті аналізу, навіть якщо відомо, що найбільше число, яке не може бути виражено як сума двох надлишкових чисел, менше цієї границі.

Знайдіть суму усіх натуральних чисел &lt;= `n`, які не можуть бути записані як сума двох надлишкових чисел.

# --hints--

`sumOfNonAbundantNumbers(10000)` має повернути число.

```js
assert(typeof sumOfNonAbundantNumbers(10000) === 'number');
```

`sumOfNonAbundantNumbers(10000)` має повернути число 3731004.

```js
assert(sumOfNonAbundantNumbers(10000) === 3731004);
```

`sumOfNonAbundantNumbers(15000)` має повернути число 4039939.

```js
assert(sumOfNonAbundantNumbers(15000) === 4039939);
```

`sumOfNonAbundantNumbers(20000)` має повернути число 4159710.

```js
assert(sumOfNonAbundantNumbers(20000) === 4159710);
```

`sumOfNonAbundantNumbers(28123)` має повернути число 4179871.

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
