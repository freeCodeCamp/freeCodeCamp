---
id: 587d7b8d367417b2b2512b5b
title: Learn About Functional Programming
challengeType: 1
videoUrl: ''
localeTitle: 了解功能编程
---

## Description
<section id="description">功能编程是一种编程风格，其中解决方案是简单，独立的功能，在功能范围之外没有任何副作用。 <code>INPUT -&gt; PROCESS -&gt; OUTPUT</code>功能编程是关于：1）隔离函数 - 不依赖于程序的状态，其中包括可能发生变化的全局变量2）纯函数 - 相同的输入总是给出相同的输出3）副作用有限的功能 - 对功能外部程序状态的任何改变或突变都要仔细控制</section>

## Instructions
<section id="instructions"> freeCodeCamp的成员碰巧爱茶。在代码编辑器中，已经为您定义了<code>prepareTea</code>和<code>getTea</code>函数。调用<code>getTea</code>函数为团队获取40杯茶，并将它们存储在<code>tea4TeamFCC</code>变量中。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>tea4TeamFCC</code>变量应该为团队提供40杯茶。
    testString: assert(tea4TeamFCC.length === 40);
  - text: <code>tea4TeamFCC</code>变量应该拿着一杯绿茶。
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
```
</section>
