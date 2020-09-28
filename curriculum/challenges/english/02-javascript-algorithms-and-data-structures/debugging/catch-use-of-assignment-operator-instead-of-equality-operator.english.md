---
id: 587d7b85367417b2b2512b38
title: Catch Use of Assignment Operator Instead of Equality Operator
challengeType: 1
forumTopicId: 301191
---

## Description
<section id='description'>
Branching programs, i.e. ones that do different things if certain conditions are met, rely on <code>if</code>, <code>else if</code>, and <code>else</code> statements in JavaScript. The condition sometimes takes the form of testing whether a result is equal to a value.
This logic is spoken (in English, at least) as "if x equals y, then ..." which can literally translate into code using the <code>=</code>, or assignment operator. This leads to unexpected control flow in your program.
As covered in previous challenges, the assignment operator (<code>=</code>) in JavaScript assigns a value to a variable name. And the <code>==</code> and <code>===</code> operators check for equality (the triple <code>===</code> tests for strict equality, meaning both value and type are the same).
The code below assigns <code>x</code> to be 2, which evaluates as <code>true</code>. Almost every value on its own in JavaScript evaluates to <code>true</code>, except what are known as the "falsy" values: <code>false</code>, <code>0</code>, <code>""</code> (an empty string), <code>NaN</code>, <code>undefined</code>, and <code>null</code>.

```js
let x = 1;
let y = 2;
if (x = y) {
  // this code block will run for any value of y (unless y were originally set as a falsy)
} else {
  // this code block is what should run (but won't) in this example
}
```

</section>

## Instructions
<section id='instructions'>
Fix the condition so the program runs the right branch, and the appropriate value is assigned to <code>result</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should fix the condition so it checks for equality, instead of using assignment.
    testString: assert(result == "Not equal!");
  - text: The condition should use either <code>==</code> or <code>===</code> to test for equality.
    testString: assert(code.match(/x\s*?===?\s*?y/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```

</div>



</section>

## Solution
<section id='solution'>

```js
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);
```

</section>
