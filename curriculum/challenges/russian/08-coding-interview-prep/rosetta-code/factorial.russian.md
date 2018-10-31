---
title: Factorial
id: 597b2b2a2702b44414742771
challengeType: 5
videoUrl: ''
localeTitle: Факториал
---

## Description
<section id="description"><p> Напишите функцию для возврата факториала числа. </p><p> Факториал числа определяется: </p> п! = n * (n-1) * (n-2) * ..... * 1 <p> Например: 3! = 3 * 2 * 1 = 6 4! = 4 * 3 * 2 * 1 = 24 </p><p> Примечание: 0! = 1 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>factorial</code> - это функция.
    testString: 'assert(typeof factorial === "function", "<code>factorial</code> is a function.");'
  - text: <code>factorial(2)</code> должен возвращать число.
    testString: 'assert(typeof factorial(2) === "number", "<code>factorial(2)</code> should return a number.");'
  - text: <code>factorial(3)</code> должен вернуть 6. &quot;)
    testString: 'assert.equal(factorial(3),results[0],"<code>factorial(3)</code> should return 6.");'
  - text: <code>factorial(3)</code> должен вернуть 120. »)
    testString: 'assert.equal(factorial(5),results[1],"<code>factorial(3)</code> should return 120.");'
  - text: '<code>factorial(3)</code> должен вернуть 3,628,800. &quot;)'
    testString: 'assert.equal(factorial(10),results[2],"<code>factorial(3)</code> should return 3,628,800.");'

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
