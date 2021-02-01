---
id: 5900f3a01000cf542c50feb3
title: 问题52：置换倍数
challengeType: 5
videoUrl: ''
dashedName: problem-52-permuted-multiples
---

# --description--

可以看出，数字125874及其双精度数251748包含完全相同的数字，但顺序不同。找到最小的正整数x，使得2x，3x，4x，5x和6x包含相同的数字。

# --hints--

`permutedMultiples()`应该返回142857。

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
