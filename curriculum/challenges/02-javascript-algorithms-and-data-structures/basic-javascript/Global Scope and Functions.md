---
id: 56533eb9ac21ba0edf2244be
title: Global Scope and Functions
challengeType: 1
---

## Description
<section id='description'>
In JavaScript, <dfn>scope</dfn> refers to the visibility of variables. Variables which are defined outside of a function block have <dfn>Global</dfn> scope. This means, they can be seen everywhere in your JavaScript code.
Variables which are used without the <code>var</code> keyword are automatically created in the <code>global</code> scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with <code>var</code>.
</section>

## Instructions
<section id='instructions'>
Using <code>var</code>, declare a <code>global</code> variable <code>myGlobal</code> outside of any function. Initialize it with a value of <code>10</code>.
Inside function <code>fun1</code>, assign <code>5</code> to <code>oopsGlobal</code> <strong><em>without</em></strong> using the <code>var</code> keyword.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>myGlobal</code> should be defined
  testString: 'assert(typeof myGlobal != "undefined", "<code>myGlobal</code> should be defined");'
- text: <code>myGlobal</code> should have a value of <code>10</code>
  testString: 'assert(myGlobal === 10, "<code>myGlobal</code> should have a value of <code>10</code>");'
- text: <code>myGlobal</code> should be declared using the <code>var</code> keyword
  testString: 'assert(/var\s+myGlobal/.test(code), "<code>myGlobal</code> should be declared using the <code>var</code> keyword");'
- text: <code>oopsGlobal</code> should be a global variable and have a value of <code>5</code>
  testString: 'assert(typeof oopsGlobal != "undefined" && oopsGlobal === 5, "<code>oopsGlobal</code> should be a global variable and have a value of <code>5</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Declare your variable here


function fun1() {
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
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
var oopsGlobal;
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
// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if(typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if(typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

</section>
