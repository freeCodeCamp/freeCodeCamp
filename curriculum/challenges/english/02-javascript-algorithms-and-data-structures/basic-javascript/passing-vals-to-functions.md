---
id: 663a681002cceb71ddc38ac6
title: Passing Values to Functions with Arguments
challengeType: 1
dashedName: passing-vals-to-functions
---

# --description--

<dfn>Parameters</dfn> are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or <dfn>"passed"</dfn>) into a function when it is called are known as <dfn>arguments</dfn>.

Here is a function with two parameters, `param1` and `param2`:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

Then we can call `testFun` like this: `testFun("Hello", "World");`. We have passed two string arguments, `Hello` and `World`. Inside the function, `param1` will equal the string `Hello` and `param2` will equal the string `World`. Note that you could call `testFun` again with different arguments and the parameters would take on the value of the new arguments.

# --instructions--

<ol><li>Create a function called <code>functionWithArgs</code> that accepts two arguments and outputs their sum to the dev console.</li><li>Call the function with two numbers as arguments.</li></ol>

<h2>Hinglish</h2>
<dfn>Parameters</dfn> placeholders hote hain jo ek function mein input ke values ke liye kaam karte hain jab woh call hota hai. Jab ek function define hota hai, toh typically ek ya zyada parameters ke saath define hota hai. Actual values jo input (ya <dfn>"passed"</dfn>) hote hain ek function mein jab woh call hota hai, unhe <dfn>arguments</dfn> kaha jata hai.

Yahan ek function hai jismein do parameters hain, `param1` aur `param2`:

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

Phir hum `testFun` ko aise call kar sakte hain: `testFun("Hello", "World");`. Humne do string arguments pass kiye hain, `Hello` aur `World`. Function ke andar, `param1` string `Hello` ke equal hoga aur `param2` string `World` ke equal hoga. Dhyaan rakhein ki aap `testFun` ko phir se alag arguments ke saath call kar sakte hain aur parameters naye arguments ke value ko le lenge.


<ol><li><code>functionWithArgs</code> naam ka ek function banao jo do arguments accept karta hai aur unka sum dev console mein output karta hai.</li><li>Function ko do numbers ke saath call karo.</li></ol>

# --hints--

`functionWithArgs` should be a function.

```js
assert(typeof functionWithArgs === 'function');
```

`functionWithArgs(1,2)` should output `3`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

`functionWithArgs(7,9)` should output `16`.

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

You should call `functionWithArgs` with two numbers after you define it.

```js
assert(
  /functionWithArgs\([-+]?\d*\.?\d*,[-+]?\d*\.?\d*\)/.test(
    __helpers.removeJSComments(code).replace(/\s/g, '')
  )
);
```

# --seed--

## --before-user-code--

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

## --after-user-code--

```js
uncapture();

if (typeof functionWithArgs !== "function") { 
  (function() { return "functionWithArgs is not defined"; })();
} else {
  (function() { return logOutput || "console.log never called"; })();
}
```

## --seed-contents--

```js

```

# --solutions--

```js
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5);
```

