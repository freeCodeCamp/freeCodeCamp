---
id: 56bbb991ad1ed5201cd392cf
title: Write Reusable JavaScript with Functions
challengeType: 1

videoUrl: ''
localeTitle: Write Reusable JavaScript with Functions
---

## Description
<section id='description'>
在 JavaScript 中，我们可以把代码的重复部分抽取出来，放到一个<dfn>函数</dfn>中。
举个例子：
<blockquote>function functionName() {<br>&nbsp;&nbsp;console.log("Hello World");<br>}</blockquote>
你可以通过函数名<code>functionName</code>加上后面的小括号来调用这个函数，就像这样：
<code>functionName();</code>
每次调用函数时，它都会在控制台上打印消息<code>"Hello World"</code>。每次调用函数时，大括号之间的所有代码都将被执行。
</section>

## Instructions
<section id='instructions'>
<ol><li>先创建一个名为<code>reusableFunction</code>的函数，这个函数可以打印<code>"Hi World"</code>到控制台上。</li><li>然后调用这个函数。</li></ol>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>reusableFunction</code>应该是一个函数
    testString: assert(typeof reusableFunction === 'function', '<code>reusableFunction</code>应该是一个函数');
  - text: "<code>reusableFunction</code>应该在控制台中输出 'Hi World'"
    testString: assert("Hi World" === logOutput, '<code>reusableFunction</code>应该在控制台中输出 "Hi World"');
  - text: 在你定义<code>reusableFunction</code>之后记得调用它
    testString: assert(/^\s*reusableFunction\(\)\s*;/m.test(code), '在你定义<code>reusableFunction</code>之后记得调用它');

```

</section>

## Challenge Seed
<section id='challengeSeed'>











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
uncapture();

if (typeof reusableFunction !== "function") { 
  (function() { return "reusableFunction is not defined"; })();
} else {
  (function() { return logOutput || "console.log never called"; })();
}
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
              