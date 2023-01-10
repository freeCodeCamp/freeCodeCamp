---
id: 5958469238c0d8d2632f46db
title: 組み合わせ
challengeType: 1
forumTopicId: 302233
dashedName: combinations
---

# --description--

負でない整数 `m` と `n` が与えられると、`0` (ゼロ) から `n-1` までの整数におけるすべての `m` の組み合わせをソート順に生成します (各組合せとテーブル全体を並べ替えます)。

**例:**

`3` と `5` の組み合わせは以下の通りです。

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

`combinations` という関数です。

```js
assert(typeof combinations === 'function');
```

`combinations(3, 5)` は `[[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]` を返します。

```js
assert.deepEqual(combinations(testInput1[0], testInput1[1]), testOutput1);
```

`combinations(4, 6)` は `[[0,1,2,3], [0,1,2,4], [0,1,2,5], [0,1,3,4], [0,1,3,5], [0,1,4,5], [0,2,3,4], [0,2,3,5], [0,2,4,5], [0,3,4,5], [1,2,3,4], [1,2,3,5], [1,2,4,5], [1,3,4,5], [2,3,4,5]]` を返します。

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
