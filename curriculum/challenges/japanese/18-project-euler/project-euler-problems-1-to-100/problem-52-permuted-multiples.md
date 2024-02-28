---
id: 5900f3a01000cf542c50feb3
title: '問題 52: 並べ替えられた倍数'
challengeType: 1
forumTopicId: 302163
dashedName: problem-52-permuted-multiples
---

# --description--

125874 という数とその倍数 251748 を見ると、それらは全く同じ数字を異なる順序で並べたものになっています。

整数 $\\{2, 3, \ldots, n\\}$ を乗じた結果が、元の数に含まれるのと同じ数字からなるような、最小の正の整数を求めなさい。

# --hints--

`permutedMultiples(2)` は数値を返す必要があります。

```js
assert(typeof permutedMultiples(2) === 'number');
```

`permutedMultiples(2)` は `125874` を返す必要があります。

```js
assert.strictEqual(permutedMultiples(2), 125874);
```

`permutedMultiples(6)` は `142857` を返す必要があります。

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
