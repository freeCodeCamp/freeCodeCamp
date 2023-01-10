---
id: 5900f3ac1000cf542c50febf
title: '問題 64: 奇数の周期を持つ平方根'
challengeType: 1
forumTopicId: 302176
dashedName: problem-64-odd-period-square-roots
---

# --description--

すべての平方根は連分数として表すと周期的であり、次のように表すことができます。

$\\displaystyle \\quad \\quad \\sqrt{N}=a_0+\\frac 1 {a_1+\\frac 1 {a_2+ \\frac 1 {a3+ \\dots}}}$

For example, let us consider $\\sqrt{23}$:

$\\quad \\quad \\sqrt{23}=4+\\sqrt{23}-4=4+\\frac 1 {\\frac 1 {\\sqrt{23}-4}}=4+\\frac 1 {1+\\frac{\\sqrt{23}-3}7}$

これを続けていくと、次のような展開が得られます。

$\\displaystyle \\quad \\quad \\sqrt{23}=4+\\frac 1 {1+\\frac 1 {3+ \\frac 1 {1+\\frac 1 {8+ \\dots}}}}$

この操作は次のように要約することができます。

$\\quad \\quad a_0=4, \\frac 1 {\\sqrt{23}-4}=\\frac {\\sqrt{23}+4} 7=1+\\frac {\\sqrt{23}-3} 7$

$\\quad \\quad a_1=1, \\frac 7 {\\sqrt{23}-3}=\\frac {7(\\sqrt{23}+3)} {14}=3+\\frac {\\sqrt{23}-3} 2$

$\\quad \\quad a_2=3, \\frac 2 {\\sqrt{23}-3}=\\frac {2(\\sqrt{23}+3)} {14}=1+\\frac {\\sqrt{23}-4} 7$

$\\quad \\quad a_3=1, \\frac 7 {\\sqrt{23}-4}=\\frac {7(\\sqrt{23}+4)} 7=8+\\sqrt{23}-4$

$\\quad \\quad a_4=8, \\frac 1 {\\sqrt{23}-4}=\\frac {\\sqrt{23}+4} 7=1+\\frac {\\sqrt{23}-3} 7$

$\\quad \\quad a_5=1, \\frac 7 {\\sqrt{23}-3}=\\frac {7 (\\sqrt{23}+3)} {14}=3+\\frac {\\sqrt{23}-3} 2$

$\\quad \\quad a_6=3, \\frac 2 {\\sqrt{23}-3}=\\frac {2(\\sqrt{23}+3)} {14}=1+\\frac {\\sqrt{23}-4} 7$

$\\quad \\quad a_7=1, \\frac 7 {\\sqrt{23}-4}=\\frac {7(\\sqrt{23}+4)} {7}=8+\\sqrt{23}-4$

数列が繰り返されていることが分かります。 簡潔にするため、ブロック (1,3,1,8) が無限に繰り返されることを $\\sqrt{23}=\[4;(1,3,1,8)]$ と表記します。

(無理数である) 平方根の最初の 10 個の連分数は次のように表されます。

$\\quad \\quad \\sqrt{2}=\[1;(2)]$, 周期 = 1

$\\quad \\quad \\sqrt{3}=\[1;(1,2)]$, 周期 = 2

$\\quad \\quad \\sqrt{5}=\[2;(4)]$, 周期 = 1

$\\quad \\quad \\sqrt{6}=\[2;(2,4)]$, 周期 = 2

$\\quad \\quad \\sqrt{7}=\[2;(1,1,1,4)]$, 周期 = 4

$\\quad \\quad \\sqrt{8}=\[2;(1,4)]$, 周期 = 2

$\\quad \\quad \\sqrt{10}=\[3;(6)]$, 周期 = 1

$\\quad \\quad \\sqrt{11}=\[3;(3,6)]$, 周期 = 2

$\\quad \\quad \\sqrt{12}=\[3;(2,6)]$, 周期 = 2

$\\quad \\quad \\sqrt{13}=\[3;(1,1,1,1,6)]$, 周期 = 5

$N \\le 13$ のとき、ちょうど 4 つの連分数が奇数の周期を持ちます。

$N \\le n$ のとき、奇数の周期を持つ連分数はいくつありますか。

# --hints--

`oddPeriodSqrts(13)` は数値を返す必要があります。

```js
assert(typeof oddPeriodSqrts(13) === 'number');
```

`oddPeriodSqrts(500)` は `83` を返す必要があります。

```js
assert.strictEqual(oddPeriodSqrts(500), 83);
```

`oddPeriodSqrts(1000)` は `152` を返す必要があります。

```js
assert.strictEqual(oddPeriodSqrts(1000), 152);
```

`oddPeriodSqrts(5000)` は `690` を返す必要があります。

```js
assert.strictEqual(oddPeriodSqrts(5000), 690);
```

`oddPeriodSqrts(10000)` は `1322` を返す必要があります。

```js
assert.strictEqual(oddPeriodSqrts(10000), 1322);
```

# --seed--

## --seed-contents--

```js
function oddPeriodSqrts(n) {

  return true;
}

oddPeriodSqrts(13);
```

# --solutions--

```js
function oddPeriodSqrts(n) {
  // Based on https://www.mathblog.dk/project-euler-continued-fractions-odd-period/
  function getPeriod(num) {
    let period = 0;
    let m = 0;
    let d = 1;
    let a = Math.floor(Math.sqrt(num));
    const a0 = a;
    while (2 * a0 !== a) {
      m = d * a - m;
      d = Math.floor((num - m ** 2) / d);
      a = Math.floor((Math.sqrt(num) + m) / d);
      period++;
    }
    return period;
  }

  function isPerfectSquare(num) {
    return Number.isInteger(Math.sqrt(num));
  }

  let counter = 0;
  for (let i = 2; i <= n; i++) {
    if (!isPerfectSquare(i)) {
      if (getPeriod(i) % 2 !== 0) {
        counter++;
      }
    }
  }
  return counter;
}
```
