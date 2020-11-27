---
id: 598e8944f009e646fc236146
title: Understanding Undefined Value returned from a Function
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2p7cL'
forumTopicId: 301177
---

## Description

<section id='description'>

A function can include the `return` statement but it does not have to. In the case that the function doesn't have a `return` statement, when you call it, the function processes the inner code but the returned value is `undefined`.

**Example**

```js
var sum = 0;
function addSum(num) {
  sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined
```

`addSum` is a function without a `return` statement. The function will change the global `sum` variable but the returned value of the function is `undefined`.

</section>

## Instructions

<section id='instructions'>

Create a function `addFive` without any arguments. This function adds 5 to the `sum` variable, but its returned value is `undefined`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>addFive</code> should be a function.
    testString: assert(typeof addFive === 'function');
  - text: Once both functions have ran, the <code>sum</code> should be equal to 8.
    testString: assert(sum === 8);
  - text: Returned value from <code>addFive</code> should be <code>undefined</code>.
    testString: assert(addFive() === undefined);
  - text: Inside the <code>addFive</code> function, you should add <code>5</code> to the <code>sum</code> variable.
    testString: assert(__helpers.removeWhiteSpace(addFive.toString()).match(/sum=sum\+5|sum\+=5/));

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line


// Only change code above this line

addThree();
addFive();
```

</div>

## Solution

<section id='solution'>

```js
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
```

</section>
