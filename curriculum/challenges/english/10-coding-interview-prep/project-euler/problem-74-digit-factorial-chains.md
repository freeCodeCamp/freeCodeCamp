---
id: 5900f3b61000cf542c50fec9
title: 'Problem 74: Digit factorial chains'
challengeType: 1
forumTopicId: 302187
dashedName: problem-74-digit-factorial-chains
---

# --description--

The number 145 is well known for the property that the sum of the factorial of its digits is equal to 145:

$$1! + 4! + 5! = 1 + 24 + 120 = 145$$

Perhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; it turns out that there are only three such loops that exist:

$$\begin{align}
&169 → 363601 → 1454 → 169\\\\
&871 → 45361 → 871\\\\
&872 → 45362 → 872\\\\
\end{align}$$

It is not difficult to prove that EVERY starting number will eventually get stuck in a loop. For example,

$$\begin{align}
&69 → 363600 → 1454 → 169 → 363601\\ (→ 1454)\\\\
&78 → 45360 → 871 → 45361\\ (→ 871)\\\\
&540 → 145\\ (→ 145)\\\\
\end{align}$$

Starting with 69 produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.

How many chains, with a starting number below `n`, contain exactly sixty non-repeating terms?

# --hints--

`digitFactorialChains(2000)` should return a number.

```js
assert(typeof digitFactorialChains(2000) === 'number');
```

`digitFactorialChains(2000)` should return `6`.

```js
assert.strictEqual(digitFactorialChains(2000), 6);
```

`digitFactorialChains(100000)` should return `42`.

```js
assert.strictEqual(digitFactorialChains(100000), 42);
```

`digitFactorialChains(500000)` should return `282`.

```js
assert.strictEqual(digitFactorialChains(500000), 282);
```

`digitFactorialChains(1000000)` should return `402`.

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
