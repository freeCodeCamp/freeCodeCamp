---
id: 587d7dab367417b2b2512b70
title: Introduction to Currying and Partial Application
challengeType: 1
---

## Description
<section id='description'>
The <code>arity</code> of a function is the number of arguments it requires. <code>Currying</code> a function means to convert a function of N <code>arity</code> into N functions of <code>arity</code> 1.
In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
Here's an example:
<blockquote>//Un-curried function<br>function unCurried(x, y) {<br>&nbsp;&nbsp;return x + y;<br>}<br><br>//Curried function<br>function curried(x) {<br>&nbsp;&nbsp;return function(y) {<br>&nbsp;&nbsp;&nbsp;&nbsp;return x + y;<br>&nbsp;&nbsp;}<br>}
<br>//Alternative using ES6
<br>const curried = x => y => x + y
<br>
<br>curried(1)(2) // Returns 3</blockquote>
This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. Here's an example using the <code>curried</code> function in the example above:
<blockquote>// Call a curried function in parts:<br>var funcForY = curried(1);<br>console.log(funcForY(2)); // Prints 3</blockquote>
Similarly, <code>partial application</code> can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.
Here's an example:
<blockquote>//Impartial function<br>function impartial(x, y, z) {<br>&nbsp;&nbsp;return x + y + z;<br>}<br>var partialFn = impartial.bind(this, 1, 2);<br>partialFn(10); // Returns 13</blockquote>
</section>

## Instructions
<section id='instructions'>
Fill in the body of the <code>add</code> function so it uses currying to add parameters <code>x</code>, <code>y</code>, and <code>z</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>add(10)(20)(30)</code> should return <code>60</code>.
    testString: 'assert(add(10)(20)(30) === 60, "<code>add(10)(20)(30)</code> should return <code>60</code>.");'
  - text: <code>add(1)(2)(3)</code> should return <code>6</code>.
    testString: 'assert(add(1)(2)(3) === 6, "<code>add(1)(2)(3)</code> should return <code>6</code>.");'
  - text: <code>add(11)(22)(33)</code> should return <code>66</code>.
    testString: 'assert(add(11)(22)(33) === 66, "<code>add(11)(22)(33)</code> should return <code>66</code>.");'
  - text: Your code should include a final statement that returns <code>x + y + z</code>.
    testString: 'assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g), "Your code should include a final statement that returns <code>x + y + z</code>.");'

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
