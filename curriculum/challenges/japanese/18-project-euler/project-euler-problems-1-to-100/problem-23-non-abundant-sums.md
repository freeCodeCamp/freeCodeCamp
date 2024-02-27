---
id: 5900f3831000cf542c50fe96
title: '問題 23: 非過剰数の和'
challengeType: 1
forumTopicId: 301873
dashedName: problem-23-non-abundant-sums
---

# --description--

完全数とは、その真の約数の和がそれ自体と等しくなるような数のことです。 例えば、28 の真の約数の和は 1 + 2 + 4 + 7 + 14 = 28 なので、28 は完全数です。

数 `n` は、その真の約数の和が `n` より小さい場合は不足数、`n` より大きい場合は過剰数と呼ばれます。

12 は最小の過剰数 (1 + 2 + 3 + 4 + 6 = 16) なので、2 つの過剰数の和として表せる最小数は 24 です。 数学的解析により、28123 を超えるすべての整数は 2 つの過剰数の和として表せることを証明できます。 しかし、2 つの過剰数の和として表せない最大の数がこの上限よりも小さいことが分かっているにもかかわらず、分析によってこの上限を引き下げることができません。

2 つの過剰数の和として表せない、`n` 以下の正の整数の総和を求めなさい。

# --hints--

`sumOfNonAbundantNumbers(10000)` は数値を返す必要があります。

```js
assert(typeof sumOfNonAbundantNumbers(10000) === 'number');
```

`sumOfNonAbundantNumbers(10000)` は 3731004 を返す必要があります。

```js
assert(sumOfNonAbundantNumbers(10000) === 3731004);
```

`sumOfNonAbundantNumbers(15000)` は 4039939 を返す必要があります。

```js
assert(sumOfNonAbundantNumbers(15000) === 4039939);
```

`sumOfNonAbundantNumbers(20000)` は4159710を返す必要があります

```js
assert(sumOfNonAbundantNumbers(20000) === 4159710);
```

`sumOfNonAbundantNumbers(28123)` は4179871を返す必要があります。

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
