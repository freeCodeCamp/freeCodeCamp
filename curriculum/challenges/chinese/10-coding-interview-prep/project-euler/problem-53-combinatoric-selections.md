---
id: 5900f3a11000cf542c50feb4
title: 问题53：组合选择
challengeType: 5
videoUrl: ''
dashedName: problem-53-combinatoric-selections
---

# --description--

有十种方法从五种中选择三种，12345：123,124,125,134,135,145,234,235,245和345在组合学中，我们使用符号，5C3 = 10.一般来说，

nCr = n！r！（n-r）！ ，其中r≤n，n！ = n×（n-1）×...×3×2×1和0！ = 1。

直到n = 23，一个值超过一百万：23C10 = 1144066.对于1≤n≤100，nCr的多少，不一定是不同的值大于一百万？

# --hints--

`combinatoricSelections(1000)`应返回4626。

```js
assert.strictEqual(combinatoricSelections(1000), 4626);
```

`combinatoricSelections(10000)`应该返回4431。

```js
assert.strictEqual(combinatoricSelections(10000), 4431);
```

`combinatoricSelections(100000)`应返回4255。

```js
assert.strictEqual(combinatoricSelections(100000), 4255);
```

`combinatoricSelections(1000000)`应该返回4075。

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
