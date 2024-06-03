---
id: 5900f3a51000cf542c50feb8
title: '問題 57: 平方根の収束数'
challengeType: 1
forumTopicId: 302168
dashedName: problem-57-square-root-convergents
---

# --description--

2 の平方根を無限に続く分数として表せるということを、証明することができます。

<div style='text-align: center;'>$\sqrt 2 =1+ \frac 1 {2+ \frac 1 {2 +\frac 1 {2+ \dots}}}$</div>

最初の 4 回の繰り返しを展開すると、次のようになります。

$1 + \\frac 1 2 = \\frac 32 = 1.5$

$1 + \\frac 1 {2 + \\frac 1 2} = \\frac 7 5 = 1.4$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 2}} = \\frac {17}{12} = 1.41666 \\dots$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 {2+\\frac 1 2}}} = \\frac {41}{29} = 1.41379 \\dots$

これに続く 3 つの展開は $\\frac {99}{70}$, $\\frac {239}{169}$, $\\frac {577}{408}$ ですが、8 番目の展開 $\\frac {1393}{985}$ では分子の桁数が初めて分母の桁数を超えます。

`n` 番目までの展開において、分子の桁数が分母の桁数を超える分数はいくつありますか。

# --hints--

`squareRootConvergents(10)` は数値を返す必要があります。

```js
assert(typeof squareRootConvergents(10) === 'number');
```

`squareRootConvergents(10)` は 1 を返す必要があります。

```js
assert.strictEqual(squareRootConvergents(10), 1);
```

`squareRootConvergents(100)` は 15 を返す必要があります。

```js
assert.strictEqual(squareRootConvergents(100), 15);
```

`squareRootConvergents(1000)` は 153 を返す必要があります。

```js
assert.strictEqual(squareRootConvergents(1000), 153);
```

# --seed--

## --seed-contents--

```js
function squareRootConvergents(n) {

  return true;
}

squareRootConvergents(1000);
```

# --solutions--

```js
function squareRootConvergents(n) {
  function countDigits(number) {
    let counter = 0;
    while (number > 0) {
      counter++;
      number = number / 10n;
    }
    return counter;
  }

  // Use BigInt as integer won't handle all cases
  let numerator = 3n;
  let denominator = 2n;
  let moreDigitsInNumerator = 0;

  for (let i = 2; i <= n; i++) {
    [numerator, denominator] = [
      numerator + 2n * denominator,
      denominator + numerator
    ];

    if (countDigits(numerator) > countDigits(denominator)) {
      moreDigitsInNumerator++;
    }
  }
  return moreDigitsInNumerator;
}
```
