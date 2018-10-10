---
id: 598e8944f009e646fc236146
title: Understanding Undefined Value returned from a Function
challengeType: 1
videoUrl: ''
localeTitle: ''
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
    testString: 'assert(typeof addFive === "function", "<code>addFive</code> should be a function");'
  - text: ''
    testString: 'assert(sum === 8, "<code>sum</code> should be equal to 8");'
  - text: ''
    testString: 'assert(addFive() === undefined, "Returned value from <code>addFive</code> should be <code>undefined</code>");'
  - text: ''
    testString: 'assert(code.match(/(sum\s*\=\s*sum\s*\+\s*5)|(sum\s*\+\=\s*5)/g).length === 1, "Inside of your functions, add 5 to the <code>sum</code> variable");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line



// Only change code above this line
var returnedValue = addFive();

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
