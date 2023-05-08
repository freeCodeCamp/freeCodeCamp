---
id: 5900f3a11000cf542c50feb4
title: 'Problema 53: Seleção de combinações'
challengeType: 1
forumTopicId: 302164
dashedName: problem-53-combinatoric-selections
---

# --description--

Existem exatamente dez maneiras de selecionar um número de 3 algarismos a partir de um número de 5 algarismos, 12345:

<div style='text-align: center;'>123, 124, 125, 134, 135, 145, 234, 235, 245 e 345</div>

Na combinatória, usamos a notação $\\displaystyle \\binom 5 3 = 10$

No geral, $\\displaystyle \\binom n r = \\dfrac{n!}{r!(n-r)!}$, onde $r \\le n$, $n! = n \\times (n-1) \\times ... \\times 3 \\times 2 \\times 1$, e $0! = 1$.

É só depois de $n = 23$ que um valor excede um milhão: $\\displaystyle \\binom {23} {10} = 1144066$.

Quantos valores de $\\displaystyle \\binom n r$ para $1 \\le n \\le 100$, não necessariamente distintos, são maiores que um milhão?

# --hints--

`combinatoricSelections(1000)` deve retornar um número.

```js
assert(typeof combinatoricSelections(1000) === 'number');
```

`combinatoricSelections(1000)` deve retornar 4626.

```js
assert.strictEqual(combinatoricSelections(1000), 4626);
```

`combinatoricSelections(10000)` deve retornar 4431.

```js
assert.strictEqual(combinatoricSelections(10000), 4431);
```

`combinatoricSelections(100000)` deve retornar 4255.

```js
assert.strictEqual(combinatoricSelections(100000), 4255);
```

`combinatoricSelections(1000000)` deve retornar 4075.

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
