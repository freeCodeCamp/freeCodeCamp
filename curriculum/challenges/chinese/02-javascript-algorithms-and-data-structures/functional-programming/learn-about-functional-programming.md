---
id: 587d7b8d367417b2b2512b5b
title: 学习函数式编程
challengeType: 1
forumTopicId: 301233
dashedName: learn-about-functional-programming
---

# --description--

函数式编程是一种方案简单、功能独立、对作用域外没有任何副作用的编程范式：`INPUT -> PROCESS -> OUTPUT`。

函数式编程：

1）功能独立——不依赖于程序的状态（比如可能发生变化的全局变量）；

2）纯函数——同一个输入永远能得到同一个输出；

3）有限的副作用——可以严格地限制函数外部对状态的更改。

# --instructions--

freeCodeCamp 的成员们爱喝茶。

在代码编辑器中，已经为你定义好了`prepareTea`和`getTea`函数。 调用 `getTea` 函数为团队准备 40 杯茶，并将它们存储在 `tea4TeamFCC` 变量里。

# --hints--

`tea4TeamFCC` 变量里应有 40 杯为团队准备的茶。

```js
assert(tea4TeamFCC.length === 40);
```

`tea4TeamFCC` 变量里应有几杯 greenTea（绿茶）。

```js
assert(tea4TeamFCC[0] === 'greenTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = null;
// Only change code above this line
```

# --solutions--

```js
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

const tea4TeamFCC = getTea(40); 
```
