---
id: 5e6dd139859c290b6ab80292
title: 最長増加部分列
challengeType: 5
forumTopicId: 385272
dashedName: longest-increasing-subsequence
---

# --description--

最長増加部分列問題は、与えられた数列で、部分列の要素が最小から最大の順になっているもののうち最長の長さの部分列を求めるものです。 以下に例を示します。

次の配列の場合:

$\\{3, 10, 2, 1, 20\\}$

最長増加部分列は:

$\\{3, 10, 20\\}$

この問題の詳細については、 [Wikipedia](https://en.wikipedia.org/wiki/Longest increasing subsequence) を参照してください。

# --instructions--

数列をパラメータとして取り、最長増加部分列を返す関数を記述してください。

数列はすべて最長増加部分列を持つことが保証されています。

# --hints--

`findSequence` は関数とします。

```js
assert(typeof findSequence == 'function');
```

`findSequence([3, 10, 2, 1, 20])` は配列を返す必要があります。

```js
assert(Array.isArray(findSequence([3, 10, 2, 1, 20])));
```

`findSequence([3, 10, 2, 1, 20])` は `[3, 10, 20]` を返す必要があります。

```js
assert.deepEqual(findSequence([3, 10, 2, 1, 20]), [3, 10, 20]);
```

`findSequence([2, 7, 3, 5, 8])` は `[2, 3, 5, 8]` を返す必要があります。

```js
assert.deepEqual(findSequence([2, 7, 3, 5, 8]), [2, 3, 5, 8]);
```

`findSequence([2, 6, 4, 5, 1])` は `[2, 4, 5]` を返す必要があります。

```js
assert.deepEqual(findSequence([2, 6, 4, 5, 1]), [2, 4, 5]);
```

`findSequence([10, 22, 9, 33, 21, 50, 60, 80])` は `[10, 22, 33, 50, 60, 80]` を返す必要があります。

```js
assert.deepEqual(findSequence([10, 22, 9, 33, 21, 50, 60, 80]), [
  10,
  22,
  33,
  50,
  60,
  80
]);
```

`findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])` は `[0, 2, 6, 9, 11, 15` を返す必要があります。

```js
assert.deepEqual(
  findSequence([0, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]),
  [0, 2, 6, 9, 11, 15]
);
```

# --seed--

## --seed-contents--

```js
function findSequence(input) {

}
```

# --solutions--

```js
function findSequence(input) {
    var len = input.length;
    var result = []
    for (var i = 0; i < len; i++) result.push(1)

    for (var i = 0; i < len; i++)
        for (var j = i - 1; j >= 0; j--)
            if (input[i] > input[j] && result[j] >= result[i])
                result[i] = result[j] + 1;

    var maxValue = Math.max.apply(null, result);
    var maxIndex = result.indexOf(Math.max.apply(Math, result));
    var output = [];
    output.push(input[maxIndex]);
    for (var i = maxIndex; i >= 0; i--) {
        if (maxValue == 0) break;
        if (input[maxIndex] > input[i] && result[i] == maxValue - 1) {
            output.push(input[i]);
            maxValue--;
        }
    }
    output.reverse();
    return output;
}
```
