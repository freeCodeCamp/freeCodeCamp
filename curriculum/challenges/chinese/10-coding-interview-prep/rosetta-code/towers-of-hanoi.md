---
id: 5951ed8945deab770972ae56
title: 河内的塔
challengeType: 5
videoUrl: ''
---

# --description--

任务：

解决[河内塔](https://en.wikipedia.org/wiki/Towers_of_Hanoi "wp：Towers_of_Hanoi")问题。

您的解决方案应该接受光盘数量作为第一个参数，并使用三个字符串来识别三个光盘堆栈中的每一个，例如`towerOfHanoi(4, 'A', 'B', 'C')` 。该函数应该返回一个包含移动列表的数组数组，source - > destination。例如，数组`[['A', 'C'], ['B', 'A']]`表示第一个移动是将光盘从堆栈A移动到C，第二个移动是移动一个从堆栈B到A的光盘

# --hints--

`towerOfHanoi`是一个功能。

```js
assert(typeof towerOfHanoi === 'function');
```

`towerOfHanoi(3, ...)` 应该返回7招。

```js
assert(res3.length === 7);
```

`towerOfHanoi(3, "A", "B", "C")`应返回\[[“A”，“B”]，[“A”，“C”]，[“B”，“C”]，[ “A”， “B”]，[ “C”， “A”]，[ “C”， “B”]，[ “A”， “B”]]“）。

```js
assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves);
```

`towerOfHanoi(5, "X", "Y", "Z")`第10 `towerOfHanoi(5, "X", "Y", "Z")`应为Y  - > X.

```js
assert.deepEqual(res5[9], ['Y', 'X']);
```

`towerOfHanoi(7, "A", "B", "C")`前十个动作是\[[“A”，“B”]，[“A”，“C”]，[“B”，“C”][ “A”， “B”]，[ “C”， “A”]，[ “C”， “B”]，[ “A”， “B”]，[ “A”， “C”][ “B”， “C”]，[ “B”， “A”]]“）。

```js
assert.deepEqual(towerOfHanoi(7, 'A', 'B', 'C').slice(0, 10), res7First10Moves);
```

# --solutions--

