---
id: 5900f3a01000cf542c50feb3
title: 'Problem 52: Permutierte Multiplikatoren'
challengeType: 1
forumTopicId: 302163
dashedName: problem-52-permuted-multiples
---

# --description--

Es ist zu erkennen, dass die Zahl 125874 und ihre Verdopplung 251748 genau dieselben Ziffern enthalten, allerdings in einer anderen Reihenfolge.

Finde die kleinste positive ganze Zahl, bei der die Multiplikation mit den ganzen Zahlen $\\{2, 3, \ldots, n\\}$ die gleichen Ziffern enthält.

# --hints--

`permutedMultiples(2)` sollte eine Zahl zurückgeben.

```js
assert(typeof permutedMultiples(2) === 'number');
```

`permutedMultiples(2)` sollte `125874` zurückgeben.

```js
assert.strictEqual(permutedMultiples(2), 125874);
```

`permutedMultiples(6)` sollte `142857` zurückgeben.

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
