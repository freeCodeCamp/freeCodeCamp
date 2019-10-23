---
id: 56533eb9ac21ba0edf2244be
title: Global Scope and Functions
challengeType: 1
videoUrl: ''
localeTitle: 全球范围和职能
---

## Description
<section id="description">在JavaScript中， <dfn>范围</dfn>是指变量的可见性。在功能块之外定义的变量具有<dfn>全局</dfn>范围。这意味着，它们可以在JavaScript代码中随处可见。在没有<code>var</code>关键字的情况下使用的变量将在<code>global</code>范围内自动创建。这可能会在代码中的其他位置或再次运行函数时产生意外后果。您应该始终使用<code>var</code>声明变量。 </section>

## Instructions
<section id="instructions">使用<code>var</code> ，在任何函数之外声明一个<code>global</code>变量<code>myGlobal</code> 。使用值<code>10</code>初始化它。在函数<code>fun1</code>内部，在<strong><em>不</em></strong>使用<code>var</code>关键字的<strong><em>情况下</em></strong>为<code>oopsGlobal</code>分配<code>5</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该定义<code>myGlobal</code>
    testString: 'assert(typeof myGlobal != "undefined", "<code>myGlobal</code> should be defined");'
  - text: <code>myGlobal</code>的值应为<code>10</code>
    testString: 'assert(myGlobal === 10, "<code>myGlobal</code> should have a value of <code>10</code>");'
  - text: 应使用<code>var</code>关键字声明<code>myGlobal</code>
    testString: 'assert(/var\s+myGlobal/.test(code), "<code>myGlobal</code> should be declared using the <code>var</code> keyword");'
  - text: <code>oopsGlobal</code>应该是一个全局变量，其值为<code>5</code>
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
// solution required
```
</section>
