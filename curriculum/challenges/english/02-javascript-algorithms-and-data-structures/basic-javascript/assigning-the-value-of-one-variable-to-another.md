---
id: 5ee127a03c3b35dd45426493
title: Assigning the Value of One Variable to Another
challengeType: 1
videoUrl: ''
forumTopicId: 418265
---

## Description

<section id='description'>
After a value is assigned to a variable using the <dfn>assignment</dfn> operator, you can assign the value of that variable to another variable using the <dfn>assignment</dfn> operator.

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

The above declares a `myVar` variable with no value, then assigns it the value `5`. Next, a variable named `myNum` is declared with no value. Then, the contents of `myVar` (which is `5`) is assigned to the variable `myNum`. Now, `myNum` also has the value of `5`.

</section>

## Instructions

<section id='instructions'>
Assign the contents of <code>a</code> to variable <code>b</code>.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: You should not change code above the specified comment.
    testString: assert(/var a;/.test(code) && /a = 7;/.test(code) &&  /var b;/.test(code));
  - text: <code>b</code> should have a value of 7.
    testString: assert(typeof b === 'number' && b === 7);
  - text: <code>a</code> should be assigned to <code>b</code> with <code>=</code>.
    testString: assert(/b\s*=\s*a\s*/g.test(code));
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var a;
a = 7;
var b;

// Only change code below this line
```

</div>

### Before Test

<div id='js-setup'>

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}
```

</div>

### After Test

<div id='js-teardown'>

```js
(function(a, b) {
  return 'a = ' + a + ', b = ' + b;
})(a, b);
```

</div>

</section>

## Solution

<section id='solution'>

```js
var a;
a = 7;
var b;
b = a;
```

</section>
