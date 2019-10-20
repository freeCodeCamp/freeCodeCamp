---
id: 56533eb9ac21ba0edf2244bf
title: Local Scope and Functions
challengeType: 1
videoUrl: ''
localeTitle: 本地范围和功能
---

## Description
<section id="description">在函数内声明的变量，以及函数参数都具有<dfn>局部</dfn>范围。这意味着，它们仅在该功能中可见。这是一个函数<code>myTest</code>带有一个名为<code>loc</code>的局部变量。 <blockquote> function myTest（）{ <br> var loc =“foo”; <br>的console.log（LOC）; <br> } <br> MYTEST（）; //记录“foo” <br>的console.log（LOC）; // loc未定义</blockquote> <code>loc</code>未在函数外定义。 </section>

## Instructions
<section id="instructions">在<code>myLocalScope</code>声明一个局部变量<code>myVar</code> 。运行测试，然后按照编辑器中注释的说明进行操作。 <strong>暗示</strong> <br>如果您遇到问题，刷新页面可能会有所帮助。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 没有全局<code>myVar</code>变量
    testString: 'assert(typeof myVar === "undefined", "No global <code>myVar</code> variable");'
  - text: 添加本地<code>myVar</code>变量
    testString: 'assert(/var\s+myVar/.test(code), "Add a local <code>myVar</code> variable");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line

  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// Now remove the console log line to pass the test

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
