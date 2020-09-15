---
title: Fibonacci sequence
id: 597f24c1dda4e70f53c79c81
challengeType: 5
forumTopicId: 302268
---

## Description
<section id='description'>
Write a function to generate the <code>n<sup>th</sup></code> Fibonacci number.
The <code>n<sup>th</sup></code> Fibonacci number is given by:
<code>F<sub>n</sub> = F<sub>n-1</sub> + F<sub>n-2</sub></code>
The first two terms of the series are 0 and 1.
Hence, the series is: 0, 1, 1, 2, 3, 5, 8, 13...
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fibonacci</code> should be a function.
    testString: assert(typeof fibonacci === 'function');
  - text: <code>fibonacci(2)</code> should return a number.
    testString: assert(typeof fibonacci(2) == 'number');
  - text: <code>fibonacci(3)</code> should return 2.
    testString: assert.equal(fibonacci(3),2);
  - text: <code>fibonacci(5)</code> should return 5.
    testString: assert.equal(fibonacci(5),5);
  - text: <code>fibonacci(10)</code> should return 55.
    testString: assert.equal(fibonacci(10),55);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fibonacci(n) {

}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function fibonacci(n) {
  let a = 0, b = 1, t;
  while (--n >= 0) {
    t = a;
    a = b;
    b += t;
  }
  return a;
}

```

</section>
