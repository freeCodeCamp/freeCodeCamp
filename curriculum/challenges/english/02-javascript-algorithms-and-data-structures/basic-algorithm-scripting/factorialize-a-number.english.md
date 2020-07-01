---
id: a302f7aae1aa3152a5b413bc
title: Factorialize a Number
isRequired: true
challengeType: 5
isHidden: false
forumTopicId: 16013
---

## Description
<section id='description'>
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation <code>n!</code>
For example: <code>5! = 1 * 2 * 3 * 4 * 5 = 120</code>
Only integers greater than or equal to zero will be supplied to the function.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>factorialize(5)</code> should return a number.
    testString: assert(typeof factorialize(5) === 'number');
  - text: <code>factorialize(5)</code> should return 120.
    testString: assert(factorialize(5) === 120);
  - text: <code>factorialize(10)</code> should return 3628800.
    testString: assert(factorialize(10) === 3628800);
  - text: <code>factorialize(20)</code> should return 2432902008176640000.
    testString: assert(factorialize(20) === 2432902008176640000);
  - text: <code>factorialize(0)</code> should return 1.
    testString: assert(factorialize(0) === 1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function factorialize(num) {
  return num;
}

factorialize(5);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function factorialize(num) {
  return num < 1 ? 1 : num * factorialize(num - 1);
}

factorialize(5);

```

</section>
