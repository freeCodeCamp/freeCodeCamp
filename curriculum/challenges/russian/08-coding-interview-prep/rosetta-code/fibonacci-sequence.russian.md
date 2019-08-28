---
title: Fibonacci sequence
id: 597f24c1dda4e70f53c79c81
challengeType: 5
forumTopicId: 302268
localeTitle: Последовательность Фибоначчи
---

## Description
<section id='description'>
<p> Напишите функцию для генерации <big>n- <sup>го</sup></big> числа Фибоначчи. </p> /// <p> <big>N- <sup>е</sup></big> число Фибоначчи дается: /// </p><p> F <sub>n</sub> = F <sub>n-1</sub> + F <sub>n-2</sub> </p> /// <p> Первые два члена серии - 0, 1. </p> /// <p> Следовательно, ряд равен: 0, 1, 1, 2, 3, 5, 8, 13 ... </p> ///
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fibonacci</code> is a function.
    testString: assert(typeof fibonacci === 'function');
  - text: <code>fibonacci(2)</code> should return a number.
    testString: assert(typeof fibonacci(2) == 'number');
  - text: <code>fibonacci(3)</code> should return 1.
    testString: assert.equal(fibonacci(3),1);
  - text: <code>fibonacci(5)</code> should return 3.
    testString: assert.equal(fibonacci(5),3);
  - text: <code>fibonacci(10)</code> should return 34.
    testString: assert.equal(fibonacci(10),34);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fibonacci(n) {
  // Good luck!
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function fibonacci(n) {
  let a = 0, b = 1, t;
  while (--n > 0) {
    t = a;
    a = b;
    b += t;
  }
  return a;
}
```

</section>
