---
id: cf1111c1c12feddfaeb3bdef
title: Use Conditional Logic with If Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87mf3'
forumTopicId: 18348
---

## Description

<section id='description'>

`If` statements are used to make decisions in code. The keyword `if` tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as `Boolean` conditions and they may only be `true` or `false`.

When the condition evaluates to `true`, the program executes the statement inside the curly braces. When the Boolean condition evaluates to `false`, the statement inside the curly braces will not execute.

**Pseudocode**

<blockquote>if (<i>condition is true</i>) {<br>  <i>statement is executed</i><br>}</blockquote>

**Example**

```js
function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"
```

When `test` is called with a value of `true`, the `if` statement evaluates `myCondition` to see if it is `true` or not. Since it is `true`, the function returns `"It was true"`. When we call `test` with a value of `false`, `myCondition` is *not* `true` and the statement in the curly braces is not executed and the function returns `"It was false"`.

</section>

## Instructions

<section id='instructions'>

Create an `if` statement inside the function to return `"Yes, that was true"` if the parameter `wasThatTrue` is `true` and return `"No, that was false"` otherwise.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>trueOrFalse</code> should be a function
    testString: assert(typeof trueOrFalse === "function");
  - text: <code>trueOrFalse(true)</code> should return a string
    testString: assert(typeof trueOrFalse(true) === "string");
  - text: <code>trueOrFalse(false)</code> should return a string
    testString: assert(typeof trueOrFalse(false) === "string");
  - text: <code>trueOrFalse(true)</code> should return "Yes, that was true"
    testString: assert(trueOrFalse(true) === "Yes, that was true");
  - text: <code>trueOrFalse(false)</code> should return "No, that was false"
    testString: assert(trueOrFalse(false) === "No, that was false");

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function trueOrFalse(wasThatTrue) {
  // Only change code below this line



  // Only change code above this line

}
```

</div>

</section>

## Solution

<section id='solution'>

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```

</section>
