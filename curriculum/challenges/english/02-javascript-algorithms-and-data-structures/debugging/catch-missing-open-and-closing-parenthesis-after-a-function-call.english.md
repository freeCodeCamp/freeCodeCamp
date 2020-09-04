---
id: 587d7b85367417b2b2512b39
title: Catch Missing Open and Closing Parenthesis After a Function Call
challengeType: 1
forumTopicId: 301185
---

## Description
<section id='description'>
When a function or method doesn't take any arguments, you may forget to include the (empty) opening and closing parentheses when calling it. Often times the result of a function call is saved in a variable for other use in your code. This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the expected value the function returns.
The variables in the following example are different:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"
```

</section>

## Instructions
<section id='instructions'>
Fix the code so the variable <code>result</code> is set to the value returned from calling the function <code>getNine</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should fix the variable <code>result</code> so it is set to the number that the function <code>getNine</code> returns.
    testString: assert(result == 9);
  - text: Your code should call the <code>getNine</code> function.
    testString: assert(code.match(/getNine\(\)/g).length == 2);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```

</section>
