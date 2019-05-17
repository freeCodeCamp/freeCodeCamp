---
id: 56533eb9ac21ba0edf2244bf
title: Local Scope and Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd62NhM'
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
Declare a local variable <code>myVar</code> inside <code>myLocalScope</code>. Run the tests and then follow the instructions commented out in the editor.
<strong>Hint</strong><br>Refreshing the page may help if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: No global <code>myVar</code> variable
    testString: assert(typeof myVar === 'undefined', 'No global <code>myVar</code> variable');
  - text: Add a local <code>myVar</code> variable
    testString: assert(/function\s+myLocalScope\s*\(\s*\)\s*\{\s[\s\S]+\s*var\s*myVar\s*(\s*|=[\s\S]+)\s*;[\s\S]+}/.test(code), 'Add a local <code>myVar</code> variable');


```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line

  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// Now remove the console log line to pass the test

```

</div>

### Before Test
<div id='js-setup'>

```js
var logOutput = "";
var originalConsole = console
function capture() {
  var nativeLog = console.log;
  console.log = function (message) {
    logOutput = message;
    if(nativeLog.apply) {
      nativeLog.apply(originalConsole, arguments);
    } else {
      var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
      nativeLog(nativeMsg);
    }
  };
}

function uncapture() {
  console.log = originalConsole.log;
}

```

</div>

### After Test
<div id='js-teardown'>

```js
typeof myLocalScope === 'function' && (capture(), myLocalScope(), uncapture());
(function() { return logOutput || "console.log never called"; })();
```

</div>

</section>

## Solution
<section id='solution'>


```js
function myLocalScope() {
  'use strict';

  var myVar;
  console.log(myVar);
}
myLocalScope();
```

</section>
