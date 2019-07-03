---
id: 56533eb9ac21ba0edf2244bf
title: Local Scope and Functions
challengeType: 1

videoUrl: ''
localeTitle: Local Scope and Functions
---

## Description
<section id='description'>
在一个函数内声明的变量，以及该函数的参数都是局部变量，意味着它们只在该函数内可见。
这是在函数<code>myTest</code>内声明局部变量<code>loc</code>的例子：
<blockquote>function myTest() {<br>  var loc = "foo";<br>  console.log(loc);<br>}<br>myTest(); // 打印出 "foo"<br>console.log(loc); // loc 没有定义</blockquote>
在函数外，<code>loc</code>是未定义的。
</section>

## Instructions
<section id='instructions'>
在函数<code>myFunction</code>内部声明一个局部变量<code>myVar</code>，并删除外部的 console.log。
<strong>提示：</strong><br>
如果你遇到了问题，可以先尝试刷新页面。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 未找到全局的<code>myVar</code>变量
    testString: assert(typeof myVar === 'undefined', '未找到全局的<code>myVar</code>变量');
  - text: 需要定义局部的<code>myVar</code>变量
    testString: assert(/var\s+myVar/.test(code), '需要定义局部的<code>myVar</code>变量');

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
typeof myLocalScope === 'function' && (capture(), myLocalScope(), uncapture());
(function() { return logOutput || "console.log never called"; })();
```

</div>

</section>

## Solution
<section id='solution'>

```js
function myLocalScope() {
  'use strict';
  
  var myVar;
  console.log(myVar);
}
myLocalScope();
```

</section>
              