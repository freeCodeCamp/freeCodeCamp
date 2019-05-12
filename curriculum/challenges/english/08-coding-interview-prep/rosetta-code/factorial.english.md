---
title: Factorial
id: 597b2b2a2702b44414742771
challengeType: 5
---

## Description
<section id='description'>
<p>Write a function to return the factorial of a number.</p>
<p>Factorial of a number is given by : </p>
n! = n * (n-1) * (n-2) * ..... * 1
<p>
For example :
3! = 3*2*1 = 6
4! = 4*3*2*1 = 24
</p>
<p>Note :
0! = 1
</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>factorial</code> is a function.
    testString: assert(typeof factorial === 'function', '<code>factorial</code> is a function.');
  - text: <code>factorial(2)</code> should return a number.
    testString: assert(typeof factorial(2) === 'number', '<code>factorial(2)</code> should return a number.');
  - text: <code>factorial(3)</code> should return 6.
    testString: assert.equal(factorial(3),results[0],"<code>factorial(3)</code> should return 6.");
  - text: <code>factorial(3)</code> should return 120.
    testString: assert.equal(factorial(5),results[1],"<code>factorial(3)</code> should return 120.");
  - text: <code>factorial(3)</code> should return 3,628,800.
    testString: assert.equal(factorial(10),results[2],"<code>factorial(3)</code> should return 3,628,800.");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function factorial (n) {
  // Good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const results=[6,120,3628800];
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
