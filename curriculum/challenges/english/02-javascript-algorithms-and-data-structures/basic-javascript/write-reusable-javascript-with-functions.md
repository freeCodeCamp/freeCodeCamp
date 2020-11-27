---
id: 56bbb991ad1ed5201cd392cf
title: Write Reusable JavaScript with Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cL6dqfy'
forumTopicId: 18378
---

# --description--

In JavaScript, we can divide up our code into reusable parts called <dfn>functions</dfn>.

Here's an example of a function:

```js
function functionName() {
  console.log("Hello World");
}
```

You can call or <dfn>invoke</dfn> this function by using its name followed by parentheses, like this: `functionName();` Each time the function is called it will print out the message `"Hello World"` on the dev console. All of the code between the curly braces will be executed every time the function is called.

# --instructions--

<ol><li>Create a function called <code>reusableFunction</code> which prints <code>"Hi World"</code> to the dev console.</li><li>Call the function.</li></ol>

# --hints--

`reusableFunction` should be a function.

```js
assert(typeof reusableFunction === 'function');
```

`reusableFunction` should output "Hi World" to the dev console.

```js
assert(hiWorldWasLogged);
```

You should call `reusableFunction` after you define it.

```js
assert(/^\s*reusableFunction\(\)\s*/m.test(code));
```

# --seed--

## --before-user-code--

```js
var logOutput = "";
var originalConsole = console;
var nativeLog = console.log;
var hiWorldWasLogged = false;
function capture() {
    console.log = function (message) {
        if(message === 'Hi World')  hiWorldWasLogged = true;
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
  console.log = nativeLog;
}

capture();
```

## --after-user-code--

```js
uncapture();

if (typeof reusableFunction !== "function") { 
  (function() { return "reusableFunction is not defined"; })();
} else {
  (function() { return logOutput || "console.log never called"; })();
}
```

## --seed-contents--

```js
```

# --solutions--

```js
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
```
