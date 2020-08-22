---
id: 56533eb9ac21ba0edf2244be
title: Global Scope and Functions
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
---

## Description
<section id='description'>
In JavaScript, <dfn>scope</dfn> refers to the visibility of variables. Variables which are defined outside of a function block have <dfn>Global</dfn> scope. This means, they can be seen everywhere in your JavaScript code.
Variables which are used without the <code>var</code> keyword are automatically created in the <code>global</code> scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with <code>var</code>.
</section>

## Instructions
<section id='instructions'>
Using <code>var</code>, declare a global variable named <code>myGlobal</code> outside of any function. Initialize it with a value of <code>10</code>.
Inside function <code>fun1</code>, assign <code>5</code> to <code>oopsGlobal</code> <strong><em>without</em></strong> using the <code>var</code> keyword.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myGlobal</code> should be defined
    testString: assert(typeof myGlobal != "undefined");
  - text: <code>myGlobal</code> should have a value of <code>10</code>
    testString: assert(myGlobal === 10);
  - text: <code>myGlobal</code> should be declared using the <code>var</code> keyword
    testString: assert(/var\s+myGlobal/.test(code));
  - text: <code>oopsGlobal</code> should be a global variable and have a value of <code>5</code>
    testString: assert(typeof oopsGlobal != "undefined" && oopsGlobal === 5);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Declare the myGlobal variable below this line


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
fun1();
fun2();
uncapture();
(function() { return logOutput || "console.log never called"; })();
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

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
