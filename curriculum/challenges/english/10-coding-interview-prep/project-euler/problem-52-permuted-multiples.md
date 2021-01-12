---
id: 5900f3a01000cf542c50feb3
title: 'Problem 52: Permuted multiples'
challengeType: 5
forumTopicId: 302163
dashedName: problem-52-permuted-multiples
---

# --description--

It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, `x`, such that `2x`, `3x`, `4x`, `5x`, and `6x`, contain the same digits.

# --hints--

`permutedMultiples()` should return a number.

```js
assert(typeof permutedMultiples() === 'number');
```

`permutedMultiples()` should return 142857.

```js
assert.strictEqual(permutedMultiples(), 142857);
```

# --seed--

## --seed-contents--

```js
function permutedMultiples() {

  return true;
}

permutedMultiples();
```

# --solutions--

```js
function permutedMultiples() {
    const isPermutation = (a, b) =>
        a.length !== b.length
            ? false
            : a.split('').sort().join() === b.split('').sort().join();


    let start = 1;
    let found = false;
    let result = 0;

    while (!found) {
        start *= 10;
        for (let i = start; i < start * 10 / 6; i++) {
            found = true;
            for (let j = 2; j <= 6; j++) {
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
