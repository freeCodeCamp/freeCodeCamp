---
id: 587d7b8d367417b2b2512b5b
title: Learn About Functional Programming
challengeType: 1
videoUrl: ''
localeTitle: Узнайте о функциональном программировании
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(tea4TeamFCC.length === 40, "The <code>tea4TeamFCC</code> variable should hold 40 cups of tea for the team.");'
  - text: ''
    testString: 'assert(tea4TeamFCC[0] === "greenTea", "The <code>tea4TeamFCC</code> variable should hold cups of green tea.");'

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
