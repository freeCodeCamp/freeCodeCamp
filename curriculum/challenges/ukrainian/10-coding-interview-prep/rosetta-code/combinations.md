---
id: 5958469238c0d8d2632f46db
title: Комбінації
challengeType: 1
forumTopicId: 302233
dashedName: combinations
---

# --description--

Маючи невід'ємні цілі числа `m` і `n`, створіть усі розміри `m` комбінацій цілих чисел від `0` (нуля) до `n-1` у сортованому порядку (кожна комбінація сортується і вся таблиця сортується).

**Наприклад:**

`3` комб. `5` дає:

<pre>0 1 2
0 1 3
0 1 4
0 2 3
0 2 4
0 3 4
1 2 3
1 2 4
1 3 4
2 3 4
</pre>

# --hints--

`combinations` має бути функцією.

```js
assert(typeof combinations === 'function');
```

Функція `combinations(3, 5)` повинна вертати `[[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]`.

```js
assert.deepEqual(combinations(testInput1[0], testInput1[1]), testOutput1);
```

Функція `combinations(4, 6)` повинна вертати `[[0,1,2,3], [0,1,2,4], [0,1,2,5], [0,1,3,4], [0,1,3,5], [0,1,4,5], [0,2,3,4], [0,2,3,5], [0,2,4,5], [0,3,4,5], [1,2,3,4], [1,2,3,5], [1,2,4,5], [1,3,4,5], [2,3,4,5]]`

```js
assert.deepEqual(combinations(testInput2[0], testInput2[1]), testOutput2);
```

# --seed--

## --after-user-code--

```js
const testInput1 = [3, 5];
const testOutput1 = [[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]];

const testInput2 = [4, 6];
const testOutput2 = [[0, 1, 2, 3], [0, 1, 2, 4], [0, 1, 2, 5], [0, 1, 3, 4], [0, 1, 3, 5], [0, 1, 4, 5], [0, 2, 3, 4], [0, 2, 3, 5], [0, 2, 4, 5], [0, 3, 4, 5], [1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 4, 5], [1, 3, 4, 5], [2, 3, 4, 5]];
```

## --seed-contents--

```js
function combinations(m, n) {

  return true;
}
```

# --solutions--

```js
function combinations(m, n) {
  const nArr = [...Array(n).keys()];

  return (function generateCombinations (size, numArr) {
    const ret = [];

    for (let i = 0; i < numArr.length; i++) {
      if (size === 1) {
        ret.push([numArr[i]]);
      }
      else {
        const sub = generateCombinations(size - 1, numArr.slice(i + 1, numArr.length));
        for (let subI = 0; subI < sub.length; subI++) {
          const next = sub[subI];
          next.unshift(numArr[i]);
          ret.push(next);
        }
      }
    }
    return ret;
  }(m, nArr));
}
```
