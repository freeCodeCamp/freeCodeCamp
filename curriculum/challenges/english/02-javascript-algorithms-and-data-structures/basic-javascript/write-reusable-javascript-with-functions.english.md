---
id: 56bbb991ad1ed5201cd392cf
title: Write Reusable JavaScript with Functions
challengeType: 1
---

## Description
<section id='description'>
In JavaScript, we can divide up our code into reusable parts called <dfn>functions</dfn>.
Here's an example of a function:
<blockquote>function functionName() {<br>&nbsp;&nbsp;console.log("Hello World");<br>}</blockquote>
You can call or <dfn>invoke</dfn> this function by using its name followed by parentheses, like this:
<code>functionName();</code>
Each time the function is called it will print out the message <code>"Hello World"</code> on the dev console. All of the code between the curly braces will be executed every time the function is called.
</section>

## Instructions
<section id='instructions'>
<ol><li>Create a function called <code>reusableFunction</code> which prints <code>"Hi World"</code> to the dev console.</li><li>Call the function.</li></ol>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>reusableFunction</code> should be a function
    testString: 'assert(typeof reusableFunction === "function", "<code>reusableFunction</code> should be a function");'
  - text: <code>reusableFunction</code> should output "Hi World" to the dev console
    testString: 'assert("Hi World" === logOutput, "<code>reusableFunction</code> should output "Hi World" to the dev console");'
  - text: Call <code>reusableFunction</code> after you define it
    testString: 'assert(/^\s*reusableFunction\(\)\s*;/m.test(code), "Call <code>reusableFunction</code> after you define it");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line

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
        if(message && message.trim) logOutput = message.trim();
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
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
```

</section>
