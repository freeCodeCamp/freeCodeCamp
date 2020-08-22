---
id: 587d7b8e367417b2b2512b5c
title: Understand Functional Programming Terminology
challengeType: 1
isHidden: false
forumTopicId: 301240
---

## Description
<section id='description'>
The FCC Team had a mood swing and now wants two types of tea: green tea and black tea. General Fact: Client mood swings are pretty common.
With that information, we'll need to revisit the <code>getTea</code> function from last challenge to handle various tea requests. We can modify <code>getTea</code> to accept a function as a parameter to be able to change the type of tea it prepares. This makes <code>getTea</code> more flexible, and gives the programmer more control when client requests change.
But first, let's cover some functional terminology:
<dfn>Callbacks</dfn> are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in <code>filter</code>, the callback function tells JavaScript the criteria for how to filter an array.
Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called <dfn>first class</dfn> functions. In JavaScript, all functions are first class functions.
The functions that take a function as an argument, or return a function as a return value are called <dfn>higher order</dfn> functions.
When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a <dfn>lambda</dfn>.
</section>

## Instructions
<section id='instructions'>
Prepare 27 cups of green tea and 13 cups of black tea and store them in <code>tea4GreenTeamFCC</code> and <code>tea4BlackTeamFCC</code> variables, respectively. Note that the <code>getTea</code> function has been modified so it now takes a function as the first argument.
Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>tea4GreenTeamFCC</code> variable should hold 27 cups of green tea for the team.
    testString: assert(tea4GreenTeamFCC.length === 27);
  - text: The <code>tea4GreenTeamFCC</code> variable should hold cups of green tea.
    testString: assert(tea4GreenTeamFCC[0] === 'greenTea');
  - text: The <code>tea4BlackTeamFCC</code> variable should hold 13 cups of black tea.
    testString: assert(tea4BlackTeamFCC.length === 13);
  - text: The <code>tea4BlackTeamFCC</code> variable should hold cups of black tea.
    testString: assert(tea4BlackTeamFCC[0] === 'blackTea');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

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

</section>
