---
id: 56533eb9ac21ba0edf2244a8
title: Storing Values with the Assignment Operator
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
    testString: 'assert(/var a;/.test(code) && /var b = 2;/.test(code), "Do not change code above the line");'
  - text: ''
    testString: 'assert(typeof a === "number" && a === 7, "<code>a</code> should have a value of 7");'
  - text: ''
    testString: 'assert(typeof b === "number" && b === 7, "<code>b</code> should have a value of 7");'
  - text: ''
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
// solution required
```
</section>
