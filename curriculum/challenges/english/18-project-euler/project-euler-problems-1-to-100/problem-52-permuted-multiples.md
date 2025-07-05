---
id: 5900f3a01000cf542c50feb3
title: 'Problem 52: Permuted multiples'
challengeType: 1
forumTopicId: 302163
dashedName: problem-52-permuted-multiples
---

# --description--

It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, such that multiplied by integers $\\{2, 3, \ldots, n\\}$, contain the same digits.

# --hints--

`permutedMultiples(2)` should return a number.

```js
assert(typeof permutedMultiples(2) === 'number');
```

`permutedMultiples(2)` should return `125874`.

```js
assert.strictEqual(permutedMultiples(2), 125874);
```

`permutedMultiples(6)` should return `142857`.

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
