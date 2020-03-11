---
id: 587d7b8e367417b2b2512b5c
title: Understand Functional Programming Terminology
challengeType: 1
videoUrl: ''
localeTitle: 理解功能编程术语
---

## Description
<section id="description">联邦通信委员会团队有一种情绪波动，现在想要两种类型的茶：绿茶和红茶。一般事实：客户情绪波动很常见。有了这些信息，我们需要重新审视上次挑战中的<code>getTea</code>功能，以处理各种茶叶请求。我们可以修改<code>getTea</code>来接受一个函数作为参数，以便能够改变它准备的茶的类型。这使得<code>getTea</code>更加灵活，并且在客户端请求发生变化时为程序员提供更多控制。但首先，让我们介绍一些函数术语： <code>Callbacks</code>函数是滑动或传递给另一个函数来决定函数调用的函数。您可能已经看到它们传递给其他方法，例如在<code>filter</code> ，回调函数告诉JavaScript如何过滤数组的标准。可以分配给变量，传递到另一个函数或从其他函数返回的函数就像任何其他正常值一样，称为<code>first class</code>函数。在JavaScript中，所有函数都是<code>first class</code>函数。将函数作为参数或将函数作为返回值返回的函数称为<code>higher order</code>函数。当函数传递给另一个函数或从另一个函数返回时，那些传入或返回的函数可以称为<code>lambda</code> 。 </section>

## Instructions
<section id="instructions">准备27杯绿茶和13杯红茶，分别储存在<code>tea4GreenTeamFCC</code>和<code>tea4BlackTeamFCC</code>变量中。请注意， <code>getTea</code>函数已被修改，因此它现在将函数作为第一个参数。注意：数据（茶杯数量）作为最后一个参数提供。我们将在后面的课程中对此进行更多讨论。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>tea4GreenTeamFCC</code>变量应该为团队提供27杯绿茶。
    testString: assert(tea4GreenTeamFCC.length === 27);
  - text: <code>tea4GreenTeamFCC</code>变量应该拿着一杯绿茶。
    testString: assert(tea4GreenTeamFCC[0] === 'greenTea');
  - text: <code>tea4BlackTeamFCC</code>变量应该可以容纳13杯红茶。
    testString: assert(tea4BlackTeamFCC.length === 13);
  - text: <code>tea4BlackTeamFCC</code>变量应该拿着一杯红茶。
    testString: assert(tea4BlackTeamFCC[0] === 'blackTea');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = null; // :(
const tea4BlackTeamFCC = null; // :(

// Add your code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
