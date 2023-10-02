---
id: 5900f3a11000cf542c50feb4
title: 'Завдання 53: комбінаторні вибірки'
challengeType: 1
forumTopicId: 302164
dashedName: problem-53-combinatoric-selections
---

# --description--

Існує рівно десять способів як з п'яти елементів 12345 вибрати три:

<div style='text-align: center;'>123, 124, 125, 134, 135, 145, 234, 235, 245 і 345</div>

У комбінататориці ми використовуємо позначення $\\displaystyle \\binom 5 = 10$

Загалом, $\\displaystyle \\binom n r = \\dfrac{n!}{r!(n-r)!}$, де $r \\le n$, $n! = n \\times (n-1) \\times ... \\times 3 \\times 2 \\times 1$, та $0! = 1$.

І тільки тоді, коли $n = 23$, значення перевищує один мільйон: $\\displaystyle \\binom {23} {10} = 1144066$.

Скільки, не обов'язково різних, значень $\\displaystyle \\binom n r$ для $1 \\le n \\le 100$, є більшими за один мільйон?

# --hints--

`combinatoricSelections(1000)` має повернути число.

```js
assert(typeof combinatoricSelections(1000) === 'number');
```

`combinatoricSelections(1000)` має повернути число 4626.

```js
assert.strictEqual(combinatoricSelections(1000), 4626);
```

`combinatoricSelections(10000)` має повернути число 4431.

```js
assert.strictEqual(combinatoricSelections(10000), 4431);
```

`combinatoricSelections(100000)` має повернути число 4255.

```js
assert.strictEqual(combinatoricSelections(100000), 4255);
```

`combinatoricSelections(1000000)` має повернути число 4075.

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
