---
id: 5f490b3bd7fa89604fa0bdee
title: Example pyodide
challengeType: 12
isHidden: false
---

## Description

<section id='description'>
An example of a challenge using pyodide to run python code in the browser
</section>

## Instructions

<section id='instructions'>
Instructions about what exactly needs to be done.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should not change code above the specified comment.
    testString: assert(/var a;/.test(code) && /var b = 2;/.test(code));
  - text: <code>a</code> should have a value of 7.
    testString: assert(typeof a === 'number' && a === 7);
  - text: <code>b</code> should have a value of 7.
    testString: assert(typeof b === 'number' && b === 7);
  - text: <code>a</code> should be assigned to <code>b</code> with <code>=</code>.
    testString: assert(/b\s*=\s*a\s*;/g.test(code));

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
(function(a,b){return "a = " + a + ", b = " + b;})(a,b);
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
