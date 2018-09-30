---
id: 56533eb9ac21ba0edf2244c4
title: Return Early Pattern for Functions
challengeType: 1
---

## Description
<section id='description'>
When a <code>return</code> statement is reached, the execution of the current function stops and control returns to the calling location.
<strong>Example</strong>
<blockquote>function myFun() {<br>&nbsp;&nbsp;console.log("Hello");<br>&nbsp;&nbsp;return "World";<br>&nbsp;&nbsp;console.log("byebye")<br>}<br>myFun();</blockquote>
The above outputs "Hello" to the console, returns "World", but <code>"byebye"</code> is never output, because the function exits at the <code>return</code> statement.
</section>

## Instructions
<section id='instructions'>
Modify the function <code>abTest</code> so that if <code>a</code> or <code>b</code> are less than <code>0</code> the function will immediately exit with a value of <code>undefined</code>.
<strong>Hint</strong><br>Remember that <a href='http://www.freecodecamp.org/challenges/understanding-uninitialized-variables' target='_blank'><code>undefined</code> is a keyword</a>, not a string.
</section>

## Tests
<section id='tests'>

```yml
- text: '<code>abTest(2,2)</code> should return a number'
  testString: 'assert(typeof abTest(2,2) === "number" , "<code>abTest(2,2)</code> should return a number");'
- text: '<code>abTest(2,2)</code> should return <code>8</code>'
  testString: 'assert(abTest(2,2) === 8 , "<code>abTest(2,2)</code> should return <code>8</code>");'
- text: '<code>abTest(-2,2)</code> should return <code>undefined</code>'
  testString: 'assert(abTest(-2,2) === undefined , "<code>abTest(-2,2)</code> should return <code>undefined</code>");'
- text: '<code>abTest(2,-2)</code> should return <code>undefined</code>'
  testString: 'assert(abTest(2,-2) === undefined , "<code>abTest(2,-2)</code> should return <code>undefined</code>");'
- text: '<code>abTest(2,8)</code> should return <code>18</code>'
  testString: 'assert(abTest(2,8) === 18 , "<code>abTest(2,8)</code> should return <code>18</code>");'
- text: '<code>abTest(3,3)</code> should return <code>12</code>'
  testString: 'assert(abTest(3,3) === 12 , "<code>abTest(3,3)</code> should return <code>12</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```

</section>
