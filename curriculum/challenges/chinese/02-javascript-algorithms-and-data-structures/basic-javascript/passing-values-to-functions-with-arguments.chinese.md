---
id: 56533eb9ac21ba0edf2244bd
title: Passing Values to Functions with Arguments
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
localeTitle: 将值传递给带有参数的函数
---

## Description
<section id='description'>
函数的参数<code>parameters</code>在函数中充当占位符(也叫形参)的作用，参数可以为一个或多个。调用一个函数时所传入的参数为实参，实参决定着形参真正的值。简单理解：形参即形式、实参即内容。
这是带有两个参数的函数，<code>param1</code>和<code>param2</code>：

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

接着我们调用<code>testFun</code>：
<code>testFun("Hello", "World");</code>
我们传递了两个参数，<code>"Hello"</code>和<code>"World"</code>。在函数内部，<code>param1</code>等于“Hello”，<code>param2</code>等于“World”。请注意，<code>testFun</code>函数可以多次调用，每次调用时传递的参数会决定形参的实际值。
</section>

## Instructions
<section id='instructions'>
<ol><li>创建一个名为<code>functionWithArgs</code>的函数，它可以接收两个参数，计算参数的和，将结果输出到控制台。</li><li>调用这个函数。</li></ol>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>functionWithArgs</code>应该是一个函数。
    testString: assert(typeof functionWithArgs === 'function');
  - text: <code>functionWithArgs(1,2)</code>应该输出<code>3</code>。
    testString: if(typeof functionWithArgs === "function") { capture(); functionWithArgs(1,2); uncapture(); } assert(logOutput == 3);
  - text: <code>functionWithArgs(7,9)</code>应该输出<code>16</code>。
    testString: if(typeof functionWithArgs === "function") { capture(); functionWithArgs(7,9); uncapture(); } assert(logOutput == 16);
  - text: 在你定义<code>functionWithArgs</code>之后记得调用它。
    testString: assert(/^\s*functionWithArgs\s*\(\s*\d+\s*,\s*\d+\s*\)\s*;?/m.test(code));

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
uncapture();

if (typeof functionWithArgs !== "function") { 
  (function() { return "functionWithArgs is not defined"; })();
} else {
  (function() { return logOutput || "console.log never called"; })();
}
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
