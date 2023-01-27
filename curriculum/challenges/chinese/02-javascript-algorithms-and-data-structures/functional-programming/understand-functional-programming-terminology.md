---
id: 587d7b8e367417b2b2512b5c
title: 了解函数式编程术语
challengeType: 1
forumTopicId: 301240
dashedName: understand-functional-programming-terminology
---

# --description--

FCC 团队需求有变更，现在想要两种茶：绿茶（green tea）和红茶（black tea）。 事实证明，用户需求变更是很常见的。

基于以上信息，我们需要重构上一节挑战中的 `getTea` 函数来处理多种茶的请求。 我们可以修改 `getTea` 接受一个函数作为参数，使它能够修改茶的类型。 这让 `getTea` 更灵活，也使需求变更时为程序员提供更多控制权。

首先，我们将介绍一些术语：

<dfn>Callbacks</dfn> 是被传递到另一个函数中调用的函数。 你应该已经在其他函数中看过这个写法，例如在 `filter` 中，回调函数告诉 JavaScript 以什么规则过滤数组。

函数就像其他正常值一样，可以赋值给变量、传递给另一个函数，或从其它函数返回，这种函数叫做头等 <dfn>first class</dfn> 函数。 在 JavaScript 中，所有函数都是头等函数。

将函数作为参数或将函数作为返回值返回的函数叫作<dfn>高阶</dfn>函数。

当函数被传递给另一个函数或从另一个函数返回时，那些传入或返回的函数可以叫做 <dfn>lambda</dfn>。

# --instructions--

准备 27 杯绿茶和 13 杯红茶，分别存入 `tea4GreenTeamFCC` 和 `tea4BlackTeamFCC` 变量。 请注意，`getTea` 函数已经变了，现在它接收一个函数作为第一个参数。

注意：数据（茶的数量）作为最后一个参数。 我们将在后面的课程中对此进行更多讨论。

# --hints--

`tea4GreenTeamFCC` 变量应存有为团队准备的 27 杯茶。

```js
assert(tea4GreenTeamFCC.length === 27);
```

`tea4GreenTeamFCC` 变量应存有绿茶。

```js
assert(tea4GreenTeamFCC[0] === 'greenTea');
```

`tea4BlackTeamFCC` 变量应存有 13 杯红茶。

```js
assert(tea4BlackTeamFCC.length === 13);
```

`tea4BlackTeamFCC` 变量应存有红茶。

```js
assert(tea4BlackTeamFCC[0] === 'blackTea');
```

# --seed--

## --seed-contents--

```js
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
```

# --solutions--

```js
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
```
