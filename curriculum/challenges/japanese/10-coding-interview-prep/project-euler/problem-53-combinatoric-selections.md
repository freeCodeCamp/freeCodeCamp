---
id: 5900f3a11000cf542c50feb4
title: '問題 53: 組み合せの選択'
challengeType: 1
forumTopicId: 302164
dashedName: problem-53-combinatoric-selections
---

# --description--

5 つの数字 12345 から 3 つを選ぶ方法はちょうど 10 通りあります。

<div style='text-align: center;'>123, 124, 125, 134, 135, 145, 234, 235, 245, 345</div>

組み合わせでは、これを $\\displaystyle \\binom 5 3 = 10$ と表します。

一般に、$\\displaystyle \\binom n r = \\dfrac{n!}{r!(n-r)!}$ であり、ここで、$r \\le n$, $n! = n \\times (n-1) \\times ... \\times 3 \\times 2 \\times 1$、かつ $0! = 1$ です。

$n = 23$ になって初めて値が 100 万を超えます: $\\displaystyle \\binom un {23} {10} = 1144066$

$1 \\le n \\le 100$ のとき、100万より大きい $1 \\displaystyle \\binom n r$ の値 (相異なる値でなくても良い) はいくつありますか。

# --hints--

`combinatoricSelections(1000)` は数値を返す必要があります。

```js
assert(typeof combinatoricSelections(1000) === 'number');
```

`combinatoricSelections(1000)` は 4626 を返す必要があります。

```js
assert.strictEqual(combinatoricSelections(1000), 4626);
```

`combinatoricSelections(10000)` は 4431 を返す必要があります。

```js
assert.strictEqual(combinatoricSelections(10000), 4431);
```

`combinatoricSelections(100000)` は 4255 を返す必要があります。

```js
assert.strictEqual(combinatoricSelections(100000), 4255);
```

`combinatoricSelections(1000000)` は 4075 を返す必要があります。

```js
assert.strictEqual(combinatoricSelections(1000000), 4075);
```

# --seed--

## --seed-contents--

```js
function combinatoricSelections(limit) {

  return 1;
}

combinatoricSelections(1000000);
```

# --solutions--

```js
function combinatoricSelections(limit) {
    const factorial = n =>
        Array.apply(null, { length: n })
            .map((_, i) => i + 1)
            .reduce((p, c) => p * c, 1);

    let result = 0;
    const nMax = 100;

    for (let n = 1; n <= nMax; n++) {
        for (let r = 0; r <= n; r++) {
            if (factorial(n) / (factorial(r) * factorial(n - r)) >= limit)
                result++;
        }
    }

    return result;
}
```
