---
id: 56533eb9ac21ba0edf2244bd
title: Passing Values to Functions with Arguments
challengeType: 1
videoUrl: ''
localeTitle: 将值传递给带参数的函数
---

## Description
<section id="description"> <dfn>参数</dfn>是变量，它们作为调用函数时要输入到函数的值的占位符。定义函数时，通常将其与一个或多个参数一起定义。调用函数时输入（或<dfn>“传递”</dfn> ）的实际值称为<dfn>参数</dfn> 。这是一个带有两个参数的函数， <code>param1</code>和<code>param2</code> ： <blockquote> function testFun（param1，param2）{ <br> console.log（param1，param2）; <br> } </blockquote>然后我们可以调用<code>testFun</code> ： <code>testFun(&quot;Hello&quot;, &quot;World&quot;);</code>我们通过了两个论点， <code>&quot;Hello&quot;</code>和<code>&quot;World&quot;</code> 。在函数内部， <code>param1</code>将等于“Hello”， <code>param2</code>将等于“World”。请注意，您可以使用不同的参数再次调用<code>testFun</code> ，并且参数将采用新参数的值。 </section>

## Instructions
<section id="instructions"><ol><li>创建一个名为<code>functionWithArgs</code> ，该函数接受两个参数并将其总和输出到开发控制台。 </li><li>使用两个数字作为参数调用该函数。 </li></ol></section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

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
// solution required
```
</section>
