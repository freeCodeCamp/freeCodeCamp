---
id: 594810f028c0303b75339ad8
title: 之字形矩阵
challengeType: 5
videoUrl: ''
---

# --description--

“zig-zag”数组是第一个$ N ^ 2 $整数的正方形排列，当数组沿着数组的[反对角线](https://en.wiktionary.org/wiki/antidiagonal)曲折时，数字会逐渐增加。例如，给定“'5”'，产生这个数组：

```
 0 1 5 6 14
2 4 7 13 15
3 8 12 16 21
9 11 17 20 22
10 18 19 23 24
```

</pre>编写一个采用Z字形矩阵大小的函数，并将相应的矩阵作为二维数组返回。 

# --hints--

ZigZagMatrix必须是一个功能

```js
assert.equal(typeof ZigZagMatrix, 'function');
```

ZigZagMatrix应该返回数组

```js
assert.equal(typeof ZigZagMatrix(1), 'object');
```

ZigZagMatrix应该返回一个nestes数组的数组

```js
assert.equal(typeof ZigZagMatrix(1)[0], 'object');
```

ZigZagMatrix（1）应返回\[[0]]

```js
assert.deepEqual(ZigZagMatrix(1), zm1);
```

ZigZagMatrix（2）应返回\[[0,1]，[2,3]]

```js
assert.deepEqual(ZigZagMatrix(2), zm2);
```

ZigZagMatrix（5）必须返回指定的矩阵

```js
assert.deepEqual(ZigZagMatrix(5), zm5);
```

# --solutions--

