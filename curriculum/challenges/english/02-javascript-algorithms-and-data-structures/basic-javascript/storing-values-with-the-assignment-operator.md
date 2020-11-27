---
id: 56533eb9ac21ba0edf2244a8
title: Storing Values with the Assignment Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
---

## Description

<section id='description'>

In JavaScript, you can store a value in a variable with the <dfn>assignment</dfn> operator (`=`).

`myVariable = 5;`

This assigns the `Number` value `5` to `myVariable`.

If there are any calculations to the right of the `=` operator, those are performed before the value is assigned to the variable on the left of the operator.

```js
var myVar;
myVar = 5;
```

First, this code creates a variable named `myVar`. Then, the code assigns `5` to `myVar`. Now, if `myVar` appears again in the code, the program will treat it as if it is `5`.

</section>

## Instructions

<section id='instructions'>

Assign the value `7` to variable `a`.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: You should not change code above the specified comment.
    testString: assert(/var a;/.test(code));
  - text: <code>a</code> should have a value of 7.
    testString: assert(typeof a === 'number' && a === 7);

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var a;

// Only change code below this line

```

</div>

### Before Test

<div id='js-setup'>

```js
if (typeof a != 'undefined') {
  a = undefined;
}
```

</div>

### After Test

<div id='js-teardown'>

```js
(function(a){return "a = " + a;})(a);
```

</div>

</section>

## Solution

<section id='solution'>

```js
var a;
a = 7;
```

</section>
