---
id: 587d7b8d367417b2b2512b5b
challengeType: 1
forumTopicId: 301233
title: 学习函数式编程
---

## Description
<section id='description'>
函数式编程是一种方案简单、功能独立、对作用域外没有任何副作用的编程范式。
<code>INPUT -> PROCESS -> OUTPUT</code>
函数式编程：
1）功能独立——不依赖于程序的状态（比如可能发生变化的全局变量）；
2）纯函数——同一个输入永远能得到同一个输出；
3）有限的副作用——可以严格地限制函数外部对状态的更改。
</section>

## Instructions
<section id='instructions'>
freeCodeCamp 成员在 love tea 的故事。
在代码编辑器中，已经为你定义好了<code>prepareTea</code>和<code>getTea</code>函数。调用<code>getTea</code>函数为团队准备 40 杯茶，并将它们存储在<code>tea4TeamFCC</code>变量里。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>tea4TeamFCC</code>变量里应有 40 杯为团队准备的茶。
    testString: assert(tea4TeamFCC.length === 40);
  - text: <code>tea4TeamFCC</code>变量里应有 greenTea。
    testString: assert(tea4TeamFCC[0] === 'greenTea');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4TeamFCC = null; // :(

// Add your code above this line

console.log(tea4TeamFCC);
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
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

</section>
