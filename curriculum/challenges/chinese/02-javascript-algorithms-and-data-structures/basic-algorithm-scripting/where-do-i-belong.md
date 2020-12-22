---
id: a24c1a4622e3c05097f71d67
title: 我属于哪里？
challengeType: 5
videoUrl: ''
---

# --description--

返回一个值（第二个参数）应该在排序后插入数组（第一个参数）的最低索引。返回的值应该是一个数字。例如， `getIndexToIns([1,2,3,4], 1.5)`应返回`1`因为它大于`1` （索引0），但小于`2` （索引1）。同样， `getIndexToIns([20,3,5], 19)`应返回`2`因为一旦数组已经排序，它将看起来像`[3,5,20]` ， `19`小于`20` （索引2）并且大于`5` （指数1）。如果卡住，请记得使用[Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) 。编写自己的代码。

# --hints--

`getIndexToIns([10, 20, 30, 40, 50], 35)`应返回`3` 。

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3);
```

`getIndexToIns([10, 20, 30, 40, 50], 35)`应返回一个数字。

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 35) === 'number');
```

`getIndexToIns([10, 20, 30, 40, 50], 30)`应该返回`2` 。

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2);
```

`getIndexToIns([10, 20, 30, 40, 50], 30)`应该返回一个数字。

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 30) === 'number');
```

`getIndexToIns([40, 60], 50)`应返回`1` 。

```js
assert(getIndexToIns([40, 60], 50) === 1);
```

`getIndexToIns([40, 60], 50)`应返回一个数字。

```js
assert(typeof getIndexToIns([40, 60], 50) === 'number');
```

`getIndexToIns([3, 10, 5], 3)`应该返回`0` 。

```js
assert(getIndexToIns([3, 10, 5], 3) === 0);
```

`getIndexToIns([3, 10, 5], 3)`应返回一个数字。

```js
assert(typeof getIndexToIns([3, 10, 5], 3) === 'number');
```

`getIndexToIns([5, 3, 20, 3], 5)`应返回`2` 。

```js
assert(getIndexToIns([5, 3, 20, 3], 5) === 2);
```

`getIndexToIns([5, 3, 20, 3], 5)`应返回一个数字。

```js
assert(typeof getIndexToIns([5, 3, 20, 3], 5) === 'number');
```

`getIndexToIns([2, 20, 10], 19)`应该返回`2` 。

```js
assert(getIndexToIns([2, 20, 10], 19) === 2);
```

`getIndexToIns([2, 20, 10], 19)`应返回一个数字。

```js
assert(typeof getIndexToIns([2, 20, 10], 19) === 'number');
```

`getIndexToIns([2, 5, 10], 15)`应该返回`3` 。

```js
assert(getIndexToIns([2, 5, 10], 15) === 3);
```

`getIndexToIns([2, 5, 10], 15)`应返回一个数字。

```js
assert(typeof getIndexToIns([2, 5, 10], 15) === 'number');
```

`getIndexToIns([], 1)`应该返回`0` 。

```js
assert(getIndexToIns([], 1) === 0);
```

`getIndexToIns([], 1)`应该返回一个数字。

```js
assert(typeof getIndexToIns([], 1) === 'number');
```

# --solutions--

