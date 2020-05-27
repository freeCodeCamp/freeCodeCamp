---
id: 587d7b85367417b2b2512b3a
title: Catch Arguments Passed in the Wrong Order When Calling a Function
challengeType: 1
isHidden: false
forumTopicId: 301184
---

## Description
<section id='description'>
Continuing the discussion on calling functions, the next bug to watch out for is when a function's arguments are supplied in the incorrect order. If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error. If the arguments are the same type (all integers, for example), then the logic of the code won't make sense. Make sure to supply all required arguments, in the proper order to avoid these issues.
</section>

## Instructions
<section id='instructions'>
The function <code>raiseToPower</code> raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of <code>power</code> is the expected 8.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should fix the variable <code>power</code> so it equals 2 raised to the 3rd power, not 3 raised to the 2nd power.
    testString: assert(power == 8);
  - text: Your code should use the correct order of the arguments for the <code>raiseToPower</code> function call.
    testString: assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```

</section>
