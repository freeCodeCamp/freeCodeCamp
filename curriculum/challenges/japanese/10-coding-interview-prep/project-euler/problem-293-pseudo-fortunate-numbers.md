---
id: 5900f4931000cf542c50ffa4
title: '問題 293: 疑似フォーチュン数'
challengeType: 1
forumTopicId: 301945
dashedName: problem-293-pseudo-fortunate-numbers
---

# --description--

偶数の正整数 $N$ は、2 の累乗であるか、またはその相異なる素因数が連続した素数である場合、「許容的」であるとされます。

許容的な数を最小のものから 12 個挙げると 2, 4, 6, 8, 12, 16, 18, 24, 30, 32, 36, 48 となります。

$N$ が許容的である場合、$N + M$ が素数になるような最小の整数 $M > 1$ を、$N$ に対する「擬似フォーチュン数」と呼ぶことにします。

例えば、$N = 630$ は許容的です。偶数であり、その相異なる素因子は連続する素数 2, 3, 5, 7 だからです。 631 の次の 素数は 641 なので、630 に対する疑似フォーチュン数は $M = 11$ です。 また、16 の擬似フォーチュン数が 3 であることが分かります。

${10}^9$ 未満の許容的な数 $N$ に対する相異なる疑似フォーチュン数の総和を求めなさい。

# --hints--

`pseudoFortunateNumbers()` は `2209` を返す必要があります。

```js
assert.strictEqual(pseudoFortunateNumbers(), 2209);
```

# --seed--

## --seed-contents--

```js
function pseudoFortunateNumbers() {

  return true;
}

pseudoFortunateNumbers();
```

# --solutions--

```js
// solution required
```
