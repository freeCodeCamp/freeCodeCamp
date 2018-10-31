---
id: 56533eb9ac21ba0edf2244be
title: Global Scope and Functions
challengeType: 1
videoUrl: ''
localeTitle: Глобальная область и функции
---

## Description
<section id="description"> В JavaScript <dfn>область видимости</dfn> относится к видимости переменных. Переменные, определенные вне функционального блока, имеют <dfn>глобальную</dfn> область. Это означает, что их можно увидеть везде в вашем JavaScript-коде. Переменные, которые используются без ключевого слова <code>var</code> , автоматически создаются в <code>global</code> области. Это может привести к непредвиденным последствиям в другом месте вашего кода или при повторном запуске функции. Вы всегда должны объявлять переменные с помощью <code>var</code> . </section>

## Instructions
<section id="instructions"> Используя <code>var</code> , объявляйте <code>global</code> переменную <code>myGlobal</code> вне любой функции. Инициализируйте его со значением <code>10</code> . Внутри функции <code>fun1</code> присвойте <code>5</code> <code>oopsGlobal</code> <strong><em>без</em></strong> использования ключевого слова <code>var</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myGlobal</code> следует определить
    testString: 'assert(typeof myGlobal != "undefined", "<code>myGlobal</code> should be defined");'
  - text: <code>myGlobal</code> должен иметь значение <code>10</code>
    testString: 'assert(myGlobal === 10, "<code>myGlobal</code> should have a value of <code>10</code>");'
  - text: <code>myGlobal</code> следует объявить с помощью ключевого слова <code>var</code>
    testString: 'assert(/var\s+myGlobal/.test(code), "<code>myGlobal</code> should be declared using the <code>var</code> keyword");'
  - text: <code>oopsGlobal</code> должен быть глобальной переменной и иметь значение <code>5</code>
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
