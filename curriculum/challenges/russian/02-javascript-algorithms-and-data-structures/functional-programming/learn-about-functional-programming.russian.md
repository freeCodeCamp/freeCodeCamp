---
id: 587d7b8d367417b2b2512b5b
title: Learn About Functional Programming
challengeType: 1
forumTopicId: 301233
localeTitle: Узнайте о функциональном программировании
---

## Description
<section id='description'>
Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.
<code>INPUT -> PROCESS -> OUTPUT</code>
Functional programming is about:
1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
2) Pure functions - the same input always gives the same output
3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled
</section>

## Instructions
<section id='instructions'>
The members of freeCodeCamp happen to love tea.
In the code editor, the <code>prepareTea</code> and <code>getTea</code> functions are already defined for you. Call the <code>getTea</code> function to get 40 cups of tea for the team, and store them in the <code>tea4TeamFCC</code> variable.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>tea4TeamFCC</code> variable should hold 40 cups of tea for the team.
    testString: assert(tea4TeamFCC.length === 40);
  - text: The <code>tea4TeamFCC</code> variable should hold cups of green tea.
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
