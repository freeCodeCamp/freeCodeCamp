---
id: 5a23c84252665b21eecc7eb1
title: 身份矩阵
challengeType: 5
videoUrl: ''
---

# --description--

*单位矩阵*是大小为\\（n \\次n \\）的方阵，其中对角元素都是**1** s（1），所有其他元素都是**0** s（零）。 \\ begin {bmatrix} 1＆0＆0 \\ cr 0＆1＆0 \\ cr 0＆0＆1 \\ cr \\ end {bmatrix}编写一个以数字'n'作为参数并返回单位矩阵的函数订单nx n。

# --hints--

`idMatrix`应该是一个功能。

```js
assert(typeof idMatrix == 'function');
```

`idMatrix(1)`应该返回一个数组。

```js
assert(Array.isArray(idMatrix(1)));
```

`idMatrix(1)`应返回`"+JSON.stringify(results[0])+"` 。

```js
assert.deepEqual(idMatrix(1), results[0]);
```

`idMatrix(2)`应返回`"+JSON.stringify(results[1])+"` 。

```js
assert.deepEqual(idMatrix(2), results[1]);
```

`idMatrix(3)`应返回`"+JSON.stringify(results[2])+"` 。

```js
assert.deepEqual(idMatrix(3), results[2]);
```

`idMatrix(4)`应返回`"+JSON.stringify(results[3])+"` 。

```js
assert.deepEqual(idMatrix(4), results[3]);
```

# --solutions--

