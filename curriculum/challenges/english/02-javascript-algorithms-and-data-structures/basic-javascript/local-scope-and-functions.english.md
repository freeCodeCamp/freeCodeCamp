---
id: 56533eb9ac21ba0edf2244bf
title: Local Scope and Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
forumTopicId: 18227
---

## Description
<section id='description'>
Variables which are declared within a function, as well as the function parameters have <dfn>local</dfn> scope. That means, they are only visible within that function.
Here is a function <code>myTest</code> with a local variable called <code>loc</code>.

```js
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined
```

<code>loc</code> is not defined outside of the function.
</section>

## Instructions
<section id='instructions'>

The editor has two `console.log`s to help you see what is happening. Check the console as you code to see how it changes.  Declare a local variable `myVar` inside `myLocalScope` and run the tests.

**Note:** The console will still have 'ReferenceError: myVar is not defined', but this will not cause the tests to fail.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The code should not contain a global <code>myVar</code> variable.
    testString: |
      function declared(){
        myVar;
      }
      assert.throws(declared, ReferenceError);
  - text: You should add a local <code>myVar</code> variable.
    testString: assert(/functionmyLocalScope\(\)\{.+(var|let|const)myVar[\s\S]*}/.test(__helpers.removeWhiteSpace(code)));


```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myLocalScope() {
  'use strict';

  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

```

</div>

</section>

## Solution
<section id='solution'>


```js
function myLocalScope() {
  'use strict';

  // Only change code below this line
  var myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

```

</section>
