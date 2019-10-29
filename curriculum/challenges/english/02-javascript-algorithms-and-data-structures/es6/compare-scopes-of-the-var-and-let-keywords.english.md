---
id: 587d7b87367417b2b2512b40
title: Compare Scopes of the var and let Keywords
challengeType: 1
forumTopicId: 301195
---

## Description
<section id='description'>
When you declare a variable with the <code>var</code> keyword, it is declared globally, or locally if declared inside a function.
The <code>let</code> keyword behaves similarly, but with some extra features. When you declare a variable with the <code>let</code> keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
For example:

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3
```

With the <code>var</code> keyword, <code>i</code> is declared globally. So when <code>i++</code> is executed, it updates the global variable. This code is similar to the following:

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3
```

This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the <code>i</code> variable. This is because the stored function will always refer to the value of the updated global <code>i</code> variable.

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3
```

As you can see, <code>printNumTwo()</code> prints 3 and not 2. This is because the value assigned to <code>i</code> was updated and the <code>printNumTwo()</code> returns the global <code>i</code> and not the value <code>i</code> had when the function was created in the for loop. The <code>let</code> keyword does not follow this behavior:

```js
'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"
```

<code>i</code> is not defined because it was not declared in the global scope. It is only declared within the for loop statement. <code>printNumTwo()</code> returned the correct value because three different <code>i</code> variables with unique values (0, 1, and 2) were created by the <code>let</code> keyword within the loop statement.
</section>

## Instructions
<section id='instructions'>
Fix the code so that <code>i</code> declared in the if statement is a separate variable than <code>i</code> declared in the first line of the function. Be certain not to use the <code>var</code> keyword anywhere in your code.
This exercise is designed to illustrate the difference between how <code>var</code> and <code>let</code> keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> should not exist in code.
    testString: getUserInput => assert(!getUserInput('index').match(/var/g));
  - text: The variable <code>i</code> declared in the if statement should equal "block scope".
    testString: getUserInput => assert(getUserInput('index').match(/(i\s*=\s*).*\s*.*\s*.*\1('|")block\s*scope\2/g));
  - text: <code>checkScope()</code> should return "function scope"
    testString: assert(checkScope() === "function scope");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkScope() {
  'use strict';
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
```

</div>



</section>

## Solution
<section id='solution'>

```js
function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
 
  console.log('Function scope i is: ', i);
  return i;
}
```

</section>
