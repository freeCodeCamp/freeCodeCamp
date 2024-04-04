---
id: 5900f3831000cf542c50fe96
title: 'Problem 23: Nicht-abundante Summen'
challengeType: 1
forumTopicId: 301873
dashedName: problem-23-non-abundant-sums
---

# --description--

Eine perfekte Zahl ist eine Zahl, für die die Summe der richtigen Divisoren genau der Zahl entspricht. Die Summe der richtigen Teiler von 28 wäre zum Beispiel 1 + 2 + 4 + 7 + 14 = 28, was bedeutet, dass 28 eine perfekte Zahl ist.

Eine Zahl `n` heißt defizient, wenn die Summe ihrer eigenen Teiler kleiner ist als `n`, und sie heißt abundant, wenn diese Summe `n` übersteigt.

Da 12 die kleinste abundante Zahl ist, 1 + 2 + 3 + 4 + 6 = 16, ist die kleinste Zahl, die als Summe zweier abundanter Zahlen geschrieben werden kann, 24. Nach mathematischer Analyse kann nachgewiesen werden, dass alle Zahlen größer als 28123 als Summe zweier abundanter Zahlen geschrieben werden können. Diese Obergrenze kann jedoch durch die Analyse nicht weiter reduziert werden, obwohl bekannt ist, dass die größte Zahl, die nicht als Summe zweier abundanter Zahlen ausgedrückt werden kann, kleiner als diese Grenze ist.

Finde die Summe aller positiven ganzen Zahlen &lt;= `n`, die nicht als Summe von zwei abundanten Zahlen geschrieben werden können.

# --hints--

`sumOfNonAbundantNumbers(10000)` sollte eine Zahl zurückgeben.

```js
assert(typeof sumOfNonAbundantNumbers(10000) === 'number');
```

`sumOfNonAbundantNumbers(10000)` sollte 3731004 zurückgeben.

```js
assert(sumOfNonAbundantNumbers(10000) === 3731004);
```

`sumOfNonAbundantNumbers(15000)` sollte 4039939 zurückgeben.

```js
assert(sumOfNonAbundantNumbers(15000) === 4039939);
```

`sumOfNonAbundantNumbers(20000)` sollte 4159710 zurückgeben.

```js
assert(sumOfNonAbundantNumbers(20000) === 4159710);
```

`sumOfNonAbundantNumbers(28123)` sollte 4179871 zurückgeben.

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
