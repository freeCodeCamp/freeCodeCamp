---
id: 56533eb9ac21ba0edf2244c3
title: Assignment with a Returned Value
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
---

## Description

<section id='description'>

If you'll recall from our discussion of [Storing Values with the Assignment Operator](/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator), everything to the right of the equal sign is resolved before the value is assigned. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function `sum` which adds two numbers together, then:

`ourSum = sum(5, 12);`

will call `sum` function, which returns a value of `17` and assigns it to `ourSum` variable.

</section>

## Instructions

<section id='instructions'>

Call the `processArg` function with an argument of `7` and assign its return value to the variable `processed`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>processed</code> should have a value of <code>2</code>
    testString: assert(processed === 2);
  - text: You should assign <code>processArg</code> to <code>processed</code>
    testString: assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(code));

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

```

</div>

### After Test

<div id='js-teardown'>

```js
(function(){return "processed = " + processed})();
```

</div>

</section>

## Solution

<section id='solution'>

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```

</section>
