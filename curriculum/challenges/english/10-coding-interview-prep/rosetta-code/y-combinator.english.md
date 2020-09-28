---
title: Y combinator
id: 594810f028c0303b75339ad5
challengeType: 5
forumTopicId: 302345
---

## Description
<section id='description'>

In strict <a href="https://en.wikipedia.org/wiki/Functional programming" title="wp: functional programming" target="_blank">functional programming</a> and the <a href="https://en.wikipedia.org/wiki/lambda calculus" title="wp: lambda calculus" target="_blank">lambda calculus</a>, functions (lambda expressions) don't have state and are only allowed to refer to arguments of enclosing functions. This rules out the usual definition of a recursive function wherein a function is associated with the state of a variable and this variable's state is used in the body of the function.
The <a href="https://mvanier.livejournal.com/2897.html" target="_blank">Y combinator</a> is itself a stateless function that, when applied to another stateless function, returns a recursive version of the function. The Y combinator is the simplest of the class of such functions, called <a href="https://en.wikipedia.org/wiki/Fixed-point combinator" title="wp: fixed-point combinator" target="_blank">fixed-point combinators</a>.
</section>

## Instructions
<section id='instructions'>

Define the stateless Y combinator function and use it to compute <a href="https://en.wikipedia.org/wiki/Factorial" title="wp: factorial" target="_blank">factorial</a>. The <code>factorial(N)</code> function is already given to you.
<strong>See also:</strong>
<ul>
  <li><a href="https://vimeo.com/45140590" target="_blank">Jim Weirich: Adventures in Functional Programming</a>.</li>
</ul>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Y should return a function.
    testString: assert.equal(typeof Y(f => n => n), 'function');
  - text: factorial(1) should return 1.
    testString: assert.equal(factorial(1), 1);
  - text: factorial(2) should return 2.
    testString: assert.equal(factorial(2), 2);
  - text: factorial(3) should return 6.
    testString: assert.equal(factorial(3), 6);
  - text: factorial(4) should return 24.
    testString: assert.equal(factorial(4), 24);
  - text: factorial(10) should return 3628800.
    testString: assert.equal(factorial(10), 3628800);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Y(f) {
  return function() {

  };
}

var factorial = Y(function(f) {
  return function (n) {
    return n > 1 ? n * f(n - 1) : 1;
  };
});
```

</div>


### After Test
<div id='js-teardown'>

```js
var factorial = Y(f => n => (n > 1 ? n * f(n - 1) : 1));
```

</div>

</section>

## Solution
<section id='solution'>


```js
var Y = f => (x => x(x))(y => f(x => y(y)(x)));

```

</section>
