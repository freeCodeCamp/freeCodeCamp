---
id: a3f503de51cfab748ff001aa
title: 成对
challengeType: 5
videoUrl: ''
---

# --description--

给定一个数组`arr` ，找到其总和等于第二个参数`arg`元素对，并返回它们的索引之和。您可以使用具有相同数字元素但索引不同的多个对。每对应使用尽可能低的可用指数。一旦元素被使用，它就不能被重用来与另一个元素配对。例如， `pairwise([1, 1, 2], 3)`使用indice 0处的1而不是indice 1处的1创建一对`[2, 1]` ，因为0 + 2 &lt;1 + 2。例如， `pairwise([7, 9, 11, 13, 15], 20)`返回`6` 。总和为20的对是`[7, 13]`和`[9, 11]` 。然后我们可以用它们的索引和值写出数组。

| **指数** | 0 | 1 | 2  | 3  | 4  |
| ------ | - | - | -- | -- | -- |
| 值      | 7 | 9 | 11 | 13 | 15 |

下面我们将采用相应的索引并添加它们。 7 + 13 = 20→指数0 + 3 = 3  
9 + 11 = 20→指数1 + 2 = 3  
3 + 3 = 6→返回`6`如果卡住，请记住使用[Read-Search-Ask](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514) 。尝试配对程序。编写自己的代码。

# --hints--

`pairwise([1, 4, 2, 3, 0, 5], 7)`应该返回11。

```js
assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
```

`pairwise([1, 3, 2, 4], 4)`应该返回1。

```js
assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
```

`pairwise([1, 1, 1], 2)`应该返回1。

```js
assert.deepEqual(pairwise([1, 1, 1], 2), 1);
```

`pairwise([0, 0, 0, 0, 1, 1], 1)`应返回10。

```js
assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
```

`pairwise([], 100)`应该返回0。

```js
assert.deepEqual(pairwise([], 100), 0);
```

# --solutions--

