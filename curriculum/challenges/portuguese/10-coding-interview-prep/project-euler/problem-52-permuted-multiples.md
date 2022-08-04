---
id: 5900f3a01000cf542c50feb3
title: 'Problema 52: Múltiplos permutados'
challengeType: 1
forumTopicId: 302163
dashedName: problem-52-permuted-multiples
---

# --description--

Podemos notar que o número, 125874, e o seu dobro, 251748, contêm exatamente os mesmos algarismos, mas em uma ordem diferente.

Encontre o menor número inteiro positivo, tal que, multiplicado por números inteiros $\\{2, 3, \ldots, n\\}$, contém os mesmos algarismos.

# --hints--

`permutedMultiples(2)` deve retornar um número.

```js
assert(typeof permutedMultiples(2) === 'number');
```

`permutedMultiples(2)` deve retornar `125874`.

```js
assert.strictEqual(permutedMultiples(2), 125874);
```

`permutedMultiples(6)` deve retornar `142857`.

```js
assert.strictEqual(permutedMultiples(6), 142857);
```

# --seed--

## --seed-contents--

```js
function permutedMultiples(n) {

  return true;
}

permutedMultiples(2);
```

# --solutions--

```js
function permutedMultiples(n) {
    const isPermutation = (a, b) =>
        a.length !== b.length
            ? false
            : a.split('').sort().join() === b.split('').sort().join();


    let start = 1;
    let found = false;
    let result = 0;

    while (!found) {
        start *= 10;
        for (let i = start; i < start * 10 / n; i++) {
            found = true;
            for (let j = 2; j <= n; j++) {
                if (!isPermutation(i + '', j * i + '')) {
                    found = false;
                    break;
                }
            }
            if (found) {
                result = i;
                break;
            }
        }
    }

    return result;
}
```
