---
id: 56533eb9ac21ba0edf2244be
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
title: 全局作用域和函数
---

## Description
<section id='description'>
在 JavaScript 中，<dfn>作用域</dfn>涉及到变量的作用范围。在函数外定义的变量具有 <dfn>全局</dfn> 作用域。这意味着，具有全局作用域的变量可以在代码的任何地方被调用。
这些没有使用<code>var</code>关键字定义的变量，会被自动创建在全局作用域中，形成全局变量。当在代码其他地方无意间定义了一个变量，刚好变量名与全局变量相同，这时会产生意想不到的后果。因此你应该总是使用var关键字来声明你的变量。
</section>

## Instructions
<section id='instructions'>
在函数外声明一个<code>全局</code>变量<code>myGlobal</code>，并给它一个初始值<code>10</code>
在函数<code>fun1</code>的内部，<strong>不</strong>使用<code>var</code>关键字来声明<code>oopsGlobal</code>，并赋值为<code>5</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应定义<code>myGlobal</code>。
    testString: assert(typeof myGlobal != "undefined");
  - text: <code>myGlobal</code>的值应为<code>10</code>。
    testString: assert(myGlobal === 10);
  - text: 应使用<code>var</code>关键字定义<code>myGlobal</code>。
    testString: assert(/var\s+myGlobal/.test(code));
  - text: <code>oopsGlobal</code>应为全局变量且值为<code>5</code>。
    testString: assert(typeof oopsGlobal != "undefined" && oopsGlobal === 5);

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
