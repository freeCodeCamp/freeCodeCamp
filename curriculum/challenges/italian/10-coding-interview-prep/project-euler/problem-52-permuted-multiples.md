---
id: 5900f3a01000cf542c50feb3
title: 'Problema 52: multipli permutati'
challengeType: 1
forumTopicId: 302163
dashedName: problem-52-permuted-multiples
---

# --description--

Si può notare che il numero 125874 e il suo doppio, 251748, contengono esattamente le stesse cifre, ma in un ordine differente.

Trova il più piccolo numero intero positivo, che moltiplicato per gli interi $\\{2, 3, \ldots, n\\}$, contenga le stesse cifre.

# --hints--

`permutedMultiples(2)` dovrebbe restituire un numero.

```js
assert(typeof permutedMultiples(2) === 'number');
```

`permutedMultiples(2)` dovrebbe restituire `125874`.

```js
assert.strictEqual(permutedMultiples(2), 125874);
```

`permutedMultiples(6)` dovrebbe restituire `142857`.

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
