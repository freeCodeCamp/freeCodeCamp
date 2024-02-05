---
id: 5e6dd15004c88cf00d2a78b3
title: 同时循环多个数组
challengeType: 1
forumTopicId: 385279
dashedName: loop-over-multiple-arrays-simultaneously
---

# --description--

Loop over multiple arrays and create a new array whose $i^{th}$ element is the concatenation of $i^{th}$ element of each of the given.

对于这个例子，如果你得到这个数组数组：

```js
[ ["a", "b", "c"], ["A", "B", "C"], [1, 2, 3] ]
```

输出应该是：

```js
["aA1","bB2","cC3"]
```

# --instructions--

编写一个函数，将数组数组作为参数并返回满足给定描述的字符串数组。

# --hints--

`loopSimult` 应该是一个函数。

```js
assert(typeof loopSimult == 'function');
```

`loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])` 应该返回一个数组。

```js
assert(
  Array.isArray(
    loopSimult([
      ['a', 'b', 'c'],
      ['A', 'B', 'C'],
      [1, 2, 3]
    ])
  )
);
```

`loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])` 应该返回 `["aA1", "bB2", "cC3"]`。

```js
assert.deepEqual(
  loopSimult([
    ['a', 'b', 'c'],
    ['A', 'B', 'C'],
    [1, 2, 3]
  ]),
  ['aA1', 'bB2', 'cC3']
);
```

`loopSimult([["c", "b", "c"], ["4", "5", "C"], [7, 7, 3]])` 应该返回 `["c47", "b57", "cC3"]`。

```js
assert.deepEqual(
  loopSimult([
    ['c', 'b', 'c'],
    ['4', '5', 'C'],
    [7, 7, 3]
  ]),
  ['c47', 'b57', 'cC3']
);
```

`loopSimult([["a", "b", "c", "d"], ["A", "B", "C", "d"], [1, 2, 3, 4]])` 应该返回 `["aA1", "bB2", "cC3", "dd4"]`。

```js
assert.deepEqual(
  loopSimult([
    ['a', 'b', 'c', 'd'],
    ['A', 'B', 'C', 'd'],
    [1, 2, 3, 4]
  ]),
  ['aA1', 'bB2', 'cC3', 'dd4']
);
```

`loopSimult([["a", "b"], ["A", "B"], [1, 2]])` 应该返回 `["aA1", "bB2"]`。

```js
assert.deepEqual(
  loopSimult([
    ['a', 'b'],
    ['A', 'B'],
    [1, 2]
  ]),
  ['aA1', 'bB2']
);
```

`loopSimult([["b", "c"], ["B", "C"], [2, 3]])` 应该返回 `["bB2", "cC3"]`。

```js
assert.deepEqual(
  loopSimult([
    ['b', 'c'],
    ['B', 'C'],
    [2, 3]
  ]),
  ['bB2', 'cC3']
);
```

# --seed--

## --seed-contents--

```js
function loopSimult(A) {

}
```

# --solutions--

```js
function loopSimult(A) {
    var res = [], output;
    for (var i = 0; i < A[0].length; i += 1) {
        output = "";
        for (var j = 0; j < A.length; j++)
            output += A[j][i];
        res.push(output);
    }
    return res;
}
```
