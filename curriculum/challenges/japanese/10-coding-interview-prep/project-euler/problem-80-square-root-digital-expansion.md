---
id: 5900f3bc1000cf542c50fecf
title: '問題 80: 平方根の小数展開'
challengeType: 1
forumTopicId: 302194
dashedName: problem-80-square-root-digital-expansion
---

# --description--

よく知られているとおり、自然数の平方根は、整数でない場合は無理数です。 このような平方根の小数展開は無限であり、繰り返されるパターンが全くありません。

2 の平方根は `1.41421356237309504880...` で、小数第 1 位から第 100 位までの各位の和は `475` です。

最初の `n` 個の自然数について、その平方根が無理数であれば小数第 1 位から第 100 位までの各位の和を求めるとします。その和を、該当するすべての無理数で合計するといくつになりますか。

# --hints--

`sqrtDigitalExpansion(2)` は数値を返す必要があります。

```js
assert(typeof sqrtDigitalExpansion(2) === 'number');
```

`sqrtDigitalExpansion(2)` は `475` を返す必要があります。

```js
assert.strictEqual(sqrtDigitalExpansion(2), 475);
```

`sqrtDigitalExpansion(50)` は `19543` を返す必要があります。

```js
assert.strictEqual(sqrtDigitalExpansion(50), 19543);
```

`sqrtDigitalExpansion(100)` は `40886` を返す必要があります。

```js
assert.strictEqual(sqrtDigitalExpansion(100), 40886);
```

# --seed--

## --seed-contents--

```js
function sqrtDigitalExpansion(n) {

  return true;
}

sqrtDigitalExpansion(2);
```

# --solutions--

```js
function sqrtDigitalExpansion(n) {
  function sumDigits(number) {
    let sum = 0;
    while (number > 0n) {
      let digit = number % 10n;
      sum += parseInt(digit, 10);
      number = number / 10n;
    }
    return sum;
  }

  function power(numberA, numberB) {
    let result = 1n;
    for (let b = 0; b < numberB; b++) {
      result = result * BigInt(numberA);
    }
    return result;
  }

  // Based on http://www.afjarvis.staff.shef.ac.uk/maths/jarvisspec02.pdf
  function expandSquareRoot(number, numDigits) {
    let a = 5n * BigInt(number);
    let b = 5n;
    const boundaryWithNeededDigits = power(10, numDigits + 1);

    while (b < boundaryWithNeededDigits) {
      if (a >= b) {
        a = a - b;
        b = b + 10n;
      } else {
        a = a * 100n;
        b = (b / 10n) * 100n + 5n;
      }
    }
    return b / 100n;
  }

  let result = 0;
  let nextPerfectRoot = 1;
  const requiredDigits = 100;
  for (let i = 1; i <= n; i++) {
    if (nextPerfectRoot ** 2 === i) {
      nextPerfectRoot++;
      continue;
    }
    result += sumDigits(expandSquareRoot(i, requiredDigits));
  }

  return result;
}
```
