---
id: 587d7dab367417b2b2512b70
title: Introduction to Currying and Partial Application
challengeType: 1
forumTopicId: 301232
localeTitle: Введение в каррирование и частичное применение
---

## Description
<section id='description'>
The <code>arity</code> of a function is the number of arguments it requires. <code>Currying</code> a function means to convert a function of N <code>arity</code> into N functions of <code>arity</code> 1.
In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
Here's an example:

```js
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
//Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3
```

This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the <code>curried</code> function in the example above:

```js
// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
```

Similarly, <code>partial application</code> can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.
Here's an example:

```js
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
```

</section>

## Instructions
<section id='instructions'>
Заполните тело функции <code>add</code> чтобы он использовал currying для добавления параметров <code>x</code> , <code>y</code> и <code>z</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>add(10)(20)(30)</code> should return <code>60</code>.
    testString: assert(add(10)(20)(30) === 60);
  - text: <code>add(1)(2)(3)</code> should return <code>6</code>.
    testString: assert(add(1)(2)(3) === 6);
  - text: <code>add(11)(22)(33)</code> should return <code>66</code>.
    testString: assert(add(11)(22)(33) === 66);
  - text: Your code should include a final statement that returns <code>x + y + z</code>.
    testString: assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function add(x) {
  // Add your code below this line


  // Add your code above this line
}
add(10)(20)(30);

```

</div>

</section>

## Solution
<section id='solution'>

```js
const add = x => y => z => x + y + z
```

</section>
