---
id: a302f7aae1aa3152a5b413bc
title: Factorialize a Number
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation <code>n!</code>
For example: <code>5! = 1 * 2 * 3 * 4 * 5 = 120</code>
Only integers greater than or equal to zero will be supplied to the function.
Remember to use <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>factorialize(5)</code> should return a number.
  testString: 'assert(typeof factorialize(5) === ''number'', ''<code>factorialize(5)</code> should return a number.'');'
- text: <code>factorialize(5)</code> should return 120.
  testString: 'assert(factorialize(5) === 120, ''<code>factorialize(5)</code> should return 120.'');'
- text: <code>factorialize(10)</code> should return 3628800.
  testString: 'assert(factorialize(10) === 3628800, ''<code>factorialize(10)</code> should return 3628800.'');'
- text: <code>factorialize(20)</code> should return 2432902008176640000.
  testString: 'assert(factorialize(20) === 2432902008176640000, ''<code>factorialize(20)</code> should return 2432902008176640000.'');'
- text: <code>factorialize(0)</code> should return 1.
  testString: 'assert(factorialize(0) === 1, ''<code>factorialize(0)</code> should return 1.'');'

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
