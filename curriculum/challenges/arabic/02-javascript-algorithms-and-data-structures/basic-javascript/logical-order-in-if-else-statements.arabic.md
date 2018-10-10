---
id: 5690307fddb111c6084545d7
title: Logical Order in If Else Statements
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
    testString: 'assert(orderMyLogic(4) === "Less than 5", "<code>orderMyLogic(4)</code> should return "Less than 5"");'
  - text: ''
    testString: 'assert(orderMyLogic(6) === "Less than 10", "<code>orderMyLogic(6)</code> should return "Less than 10"");'
  - text: ''
    testString: 'assert(orderMyLogic(11) === "Greater than or equal to 10", "<code>orderMyLogic(11)</code> should return "Greater than or equal to 10"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
