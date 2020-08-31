---
id: 56533eb9ac21ba0edf2244a8
title: Storing Values with the Assignment Operator
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
---

## Description
<section id='description'>
In JavaScript, you can store a value in a variable with the <dfn>assignment</dfn> operator (<code>=</code>). 
<code>myVariable = 5;</code>
This assigns the <code>Number</code> value <code>5</code> to <code>myVariable</code>.
If there are any calculations to the right of the <code>=</code> operator, those are performed before the value is assigned to the variable on the left of the operator.

```js
var myVar;
myVar = 5;
```

First, this code creates a variable named <code>myVar</code>. Then, the code assigns <code>5</code> to <code>myVar</code>. Now, if <code>myVar</code> appears again in the code, the program will treat it as if it is <code>5</code>.
</section>

## Instructions
<section id='instructions'>
Assign the value <code>7</code> to variable <code>a</code>.
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
