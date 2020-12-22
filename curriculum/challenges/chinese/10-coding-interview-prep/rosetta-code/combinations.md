---
id: 5958469238c0d8d2632f46db
title: 组合
challengeType: 5
videoUrl: ''
---

# --description--

任务：

给定非负整数m和n ，以排序顺序生成从0 （零）到n-1的整数的所有大小m个 [组合](http://mathworld.wolfram.com/Combination.html "链接：http：//mathworld.wolfram.com/Combination.html") （每个组合被排序并且整个表被排序）。

例：

3梳子5是：

```
 0 1 2
0 1 3
0 1 4
0 2 3
0 2 4
0 3 4
1 2 3
1 2 4
1 3 4
2 3 4
```

</pre>

# --hints--

`combinations`是一种功能。

```js
assert(typeof combinations === 'function');
```

`combinations(3, 5)`应返回`[[0, 1, 2], [0, 1, 3], [0, 1, 4], [0, 2, 3], [0, 2, 4], [0, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]` 。

```js
assert.deepEqual(combinations(testInput1[0], testInput1[1]), testOutput1);
```

`combinations(4, 6)`应返回`[[0,1,2,3], [0,1,2,4], [0,1,2,5], [0,1,3,4], [0,1,3,5], [0,1,4,5], [0,2,3,4], [0,2,3,5], [0,2,4,5], [0,3,4,5], [1,2,3,4], [1,2,3,5], [1,2,4,5], [1,3,4,5], [2,3,4,5]]`

```js
assert.deepEqual(combinations(testInput2[0], testInput2[1]), testOutput2);
```

# --solutions--

