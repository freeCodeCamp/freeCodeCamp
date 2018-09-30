---
id: 56533eb9ac21ba0edf2244bd
title: Passing Values to Functions with Arguments
challengeType: 1
---

## Description
<section id='description'>
<dfn>Parameters</dfn> are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or <dfn>"passed"</dfn>) into a function when it is called are known as <dfn>arguments</dfn>.
Here is a function with two parameters, <code>param1</code> and <code>param2</code>:
<blockquote>function testFun(param1, param2) {<br>&nbsp;&nbsp;console.log(param1, param2);<br>}</blockquote>
Then we can call <code>testFun</code>:
<code>testFun("Hello", "World");</code>
We have passed two arguments, <code>"Hello"</code> and <code>"World"</code>. Inside the function, <code>param1</code> will equal "Hello" and <code>param2</code> will equal "World". Note that you could call <code>testFun</code> again with different arguments and the parameters would take on the value of the new arguments.
</section>

## Instructions
<section id='instructions'>
<ol><li>Create a function called <code>functionWithArgs</code> that accepts two arguments and outputs their sum to the dev console.</li><li>Call the function with two numbers as arguments.</li></ol>
</section>

## Tests
<section id='tests'>

```yml
- text: <code>functionWithArgs</code> should be a function
  testString: 'assert(typeof functionWithArgs === "function", "<code>functionWithArgs</code> should be a function");'
- text: '<code>functionWithArgs(1,2)</code> should output <code>3</code>'
  testString: 'if(typeof functionWithArgs === "function") { capture(); functionWithArgs(1,2); uncapture(); } assert(logOutput == 3, "<code>functionWithArgs(1,2)</code> should output <code>3</code>");'
- text: '<code>functionWithArgs(7,9)</code> should output <code>16</code>'
  testString: 'if(typeof functionWithArgs === "function") { capture(); functionWithArgs(7,9); uncapture(); } assert(logOutput == 16, "<code>functionWithArgs(7,9)</code> should output <code>16</code>");'
- text: Call <code>functionWithArgs</code> with two numbers after you define it.
  testString: 'assert(/^\s*functionWithArgs\s*\(\s*\d+\s*,\s*\d+\s*\)\s*;/m.test(code), "Call <code>functionWithArgs</code> with two numbers after you define it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.


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
        if(message) logOutput = JSON.stringify(message).trim();
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

capture();
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
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5);
```

</section>
