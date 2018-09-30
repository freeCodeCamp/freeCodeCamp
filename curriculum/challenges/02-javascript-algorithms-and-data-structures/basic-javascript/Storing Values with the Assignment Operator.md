---
id: 56533eb9ac21ba0edf2244a8
title: Storing Values with the Assignment Operator
challengeType: 1
---

## Description
<section id='description'>
In JavaScript, you can store a value in a variable with the <dfn>assignment</dfn> operator.
<code>myVariable = 5;</code>
This assigns the <code>Number</code> value <code>5</code> to <code>myVariable</code>.
Assignment always goes from right to left. Everything to the right of the <code>=</code> operator is resolved before the value is assigned to the variable to the left of the operator.
<blockquote>myVar = 5;<br>myNum = myVar;</blockquote>
This assigns <code>5</code> to <code>myVar</code> and then resolves <code>myVar</code> to <code>5</code>  again and assigns it to <code>myNum</code>.
</section>

## Instructions
<section id='instructions'>
Assign the value <code>7</code> to variable <code>a</code>.
Assign the contents of <code>a</code> to variable <code>b</code>.
</section>

## Tests
<section id='tests'>

```yml
- text: Do not change code above the line
  testString: 'assert(/var a;/.test(code) && /var b = 2;/.test(code), "Do not change code above the line");'
- text: <code>a</code> should have a value of 7
  testString: 'assert(typeof a === "number" && a === 7, "<code>a</code> should have a value of 7");'
- text: <code>b</code> should have a value of 7
  testString: 'assert(typeof b === "number" && b === 7, "<code>b</code> should have a value of 7");'
- text: <code>a</code> should be assigned to <code>b</code> with <code>=</code>
  testString: 'assert(/b\s*=\s*a\s*;/g.test(code), "<code>a</code> should be assigned to <code>b</code> with <code>=</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var a;
var b = 2;

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
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
var a;
var b = 2;
a = 7;
b = a;
```

</section>
