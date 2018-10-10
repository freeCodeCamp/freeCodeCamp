---
id: 56bbb991ad1ed5201cd392cf
title: Write Reusable JavaScript with Functions
challengeType: 1
videoUrl: ''
localeTitle: 用函数编写可重用的JavaScript
---

## Description
<section id="description">在JavaScript中，我们可以将代码划分为称为<dfn>函数的</dfn>可重用部分。这是一个函数的例子： <blockquote> function functionName（）{ <br> console.log（“Hello World”）; <br> } </blockquote>您可以使用其名称后跟括号来调用或<dfn>调用</dfn>此函数，如下所示： <code>functionName();</code>每次调用该函数时，它都会在开发控制台上打印出<code>&quot;Hello World&quot;</code>消息。每次调用函数时，都会执行大括号之间的所有代码。 </section>

## Instructions
<section id="instructions"><ol><li>创建一个名为<code>reusableFunction</code>的函数，它将<code>&quot;Hi World&quot;</code>打印到开发控制台。 </li><li>调用该功能。 </li></ol></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>reusableFunction</code>应该是一个函数
    testString: 'assert(typeof reusableFunction === "function", "<code>reusableFunction</code> should be a function");'
  - text: <code>reusableFunction</code>应该将“Hi World”输出到开发控制台
    testString: 'assert("Hi World" === logOutput, "<code>reusableFunction</code> should output "Hi World" to the dev console");'
  - text: 定义后调用<code>reusableFunction</code>
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
// solution required
```
</section>
