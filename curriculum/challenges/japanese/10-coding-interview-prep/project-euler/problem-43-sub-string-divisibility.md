---
id: 5900f3971000cf542c50feaa
title: '問題 43: 部分文字列の被整除性'
challengeType: 1
forumTopicId: 302100
dashedName: problem-43-sub-string-divisibility
---

# --description--

1406357289 という数は、0 から 9 の数字が何らかの順に各位に使われているので 0 から 9 のパンデジタル数ですが、さらに、部分文字列の被整除性という興味深い性質も持っています。

$d_1$ を $1$ 桁目にし、$d_2$ を $2$ 桁目にし、以降も同様にします。 そうすると次のことに気付きます。

- ${d_2}{d_3}{d_4} = 406$ は 2 で割り切れる
- ${d_3}{d_4}{d_5} = 063$ は 3 で割り切れる
- ${d_4}{d_5}{d_6} = 635$ は 5 で割り切れる
- ${d_5}{d_6}{d_7} = 357$ は 7 で割り切れる
- ${d_6}{d_7}{d_8} = 572$ は 11 で割り切れる
- ${d_7}{d_8}{d_9} = 728$ は 13 で割り切れる
- ${d_8}{d_9}{d_{10}} = 289$ は 17 で割り切れる

`n - 2` 個の部分文字列がこのような被整除性を持つ、0 から `n` のパンデジタル数の総和を求めなさい。

**注:** `0` で始まるパンデジタル数は結果の中で考慮されます。

# --hints--

`substringDivisibility(5)` は数値を返す必要があります。

```js
assert(typeof substringDivisibility(5) === 'number');
```

`substringDivisibility(5)` は `12444480` を返す必要があります。

```js
assert.strictEqual(substringDivisibility(5), 12444480)
```

`substringDivisibility(7)` は `1099210170` を返す必要があります。

```js
assert.strictEqual(substringDivisibility(7), 1099210170)
```

`substringDivisibility(8)` は `1113342912` を返す必要があります。

```js
assert.strictEqual(substringDivisibility(8), 1113342912)
```

`substringDivisibility(9)` は `16695334890` を返す必要があります。

```js
assert.strictEqual(substringDivisibility(9), 16695334890)
```

# --seed--

## --seed-contents--

```js
function substringDivisibility(n) {

  return true;
}

substringDivisibility(5);
```

# --solutions--

```js
function substringDivisibility(n) {
  function isSubDivisable(digits) {
    const factors = [2, 3, 5, 7, 11, 13, 17];

    for (let i = 1; i < digits.length - 2; i++) {
      const subNumber = digits[i] * 100 + digits[i + 1] * 10 + digits[i + 2];
      if (subNumber % factors[i - 1] !== 0) {
        return false;
      }
    }
    return true;
  }

  function heapsPermutations(k, digits, conditionCheck, results) {
    if (k === 1) {
      if (conditionCheck(digits)) {
        const number = parseInt(digits.join(''), 10);
        results.push(number);
      }
      return;
    }

    heapsPermutations(k - 1, digits, conditionCheck, results);

    for (let i = 0; i < k - 1; i++) {
      if (k % 2 === 0) {
        [digits[i], digits[k - 1]] = [digits[k - 1], digits[i]];
      } else {
        [digits[0], digits[k - 1]] = [digits[k - 1], digits[0]];
      }
      heapsPermutations(k - 1, digits, conditionCheck, results);
    }
    return;
  }

  const allowedDigits = [...new Array(n + 1).keys()];
  const divisablePandigitals = [];
  heapsPermutations(
    allowedDigits.length,
    allowedDigits,
    isSubDivisable,
    divisablePandigitals
  );

  let sum = 0;
  for (let i = 0; i < divisablePandigitals.length; i++) {
    sum += divisablePandigitals[i];
  }

  return sum;
}
```
