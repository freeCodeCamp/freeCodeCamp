---
title: Factorial
id: 597b2b2a2702b44414742771
challengeType: 5
forumTopicId: 302263
---

## Description
<section id='description'>
Write a function to return the factorial of a number.
Factorial of a number is given by:
<pre>
<big>n! = n * (n-1) * (n-2) * ..... * 1</big>
</pre>
For example:
<ul>
  <li><code>3! = 3 * 2 * 1 = 6</code></li>
  <li><code>4! = 4 * 3 * 2 * 1 = 24</code></li>
</ul>
<strong>Note:</strong> <code>0! = 1</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>factorial</code> should be a function.
    testString: assert(typeof factorial === 'function');
  - text: <code>factorial(2)</code> should return a number.
    testString: assert(typeof factorial(2) === 'number');
  - text: <code>factorial(3)</code> should return 6.
    testString: assert.equal(factorial(3), 6);
  - text: <code>factorial(5)</code> should return 120.
    testString: assert.equal(factorial(5), 120);
  - text: <code>factorial(10)</code> should return 3,628,800.
    testString: assert.equal(factorial(10), 3628800);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function factorial(n) {

}
```

</div>


</section>

## Solution
<section id='solution'>


```js
function factorial(n) {
  let sum = 1;
  while (n > 1) {
    sum *= n;
    n--;
  }
  return sum;
}


```

</section>
