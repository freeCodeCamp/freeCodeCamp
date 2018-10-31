---
id: 56533eb9ac21ba0edf2244be
title: Global Scope and Functions
challengeType: 1
videoUrl: ''
localeTitle: النطاق العالمي والوظائف
---

## Description
<section id="description"> في JavaScript ، يشير <dfn>النطاق</dfn> إلى رؤية المتغيرات. المتغيرات التي يتم تعريفها خارج كتلة وظيفة لها نطاق <dfn>عالمي</dfn> . وهذا يعني أنه يمكن رؤيتها في أي مكان في شفرة جافا سكريبت. يتم إنشاء المتغيرات التي يتم استخدامها بدون الكلمة الأساسية <code>var</code> تلقائيًا في النطاق <code>global</code> . هذا يمكن أن يخلق عواقب غير مقصودة في مكان آخر في التعليمات البرمجية الخاصة بك أو عند تشغيل وظيفة مرة أخرى. يجب عليك دائما أن تعلن عن المتغيرات الخاصة بك مع <code>var</code> . </section>

## Instructions
<section id="instructions"> باستخدام <code>var</code> ، قم بتعريف متغير <code>global</code> <code>myGlobal</code> خارج أي وظيفة. قم بتهيئته بقيمة <code>10</code> . داخل الدالة <code>fun1</code> ، قم بتعيين <code>5</code> إلى <code>oopsGlobal</code> <strong><em>دون</em></strong> استخدام الكلمة الأساسية <code>var</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تعريف <code>myGlobal</code>
    testString: 'assert(typeof myGlobal != "undefined", "<code>myGlobal</code> should be defined");'
  - text: يجب أن يكون ل <code>myGlobal</code> قيمة <code>10</code>
    testString: 'assert(myGlobal === 10, "<code>myGlobal</code> should have a value of <code>10</code>");'
  - text: يجب إعلان <code>myGlobal</code> باستخدام الكلمة الرئيسية <code>var</code>
    testString: 'assert(/var\s+myGlobal/.test(code), "<code>myGlobal</code> should be declared using the <code>var</code> keyword");'
  - text: يجب أن يكون <code>oopsGlobal</code> متغيرًا عامًا وله قيمة <code>5</code>
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
