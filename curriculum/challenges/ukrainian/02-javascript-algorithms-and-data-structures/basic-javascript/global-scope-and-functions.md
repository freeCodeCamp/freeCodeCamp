---
id: 56533eb9ac21ba0edf2244be
title: Глобальна область видимості та функції
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
dashedName: global-scope-and-functions
---

# --description--

У JavaScript, <dfn>область видимості</dfn> стосується видимості змінних. Змінні, які знаходяться за межами функції, мають <dfn>Глобальну</dfn> область видимості. Це означає, що їх можна побачити всюди у вашому коді в JavaScript.

Змінні, які оголошуються без ключових слів `let` чи `const` автоматично створюються в `global` області видимості. Це може створити непередбачувані наслідки десь у вашому коді або при запуску функції знову. Ви повинні завжди визначати свої змінні за допомогою `let` чи `const`.

# --instructions--

Використовуючи `let` чи `const`, визначте глобальну змінну `myGlobal` поза будь-якою функцією. Привласніть їй значення `10`.

Призначте `5` для `oopsGlobal` всередині функції `fun1` ***не*** використовуючи ключове слово `let` чи `const`.

# --hints--

`myGlobal` краще визначити

```js
assert(typeof myGlobal != 'undefined');
```

`myGlobal` повинне мати значення `10`

```js
assert(myGlobal === 10);
```

Для визначення `myGlobal` потрібно використати ключове слово `let` чи `const`

```js
assert(/(let|const)\s+myGlobal/.test(code));
```

`oopsGlobal` має бути глобальною змінною і мати значення `5`

```js
assert(typeof oopsGlobal != 'undefined' && oopsGlobal === 5);
```

# --seed--

## --before-user-code--

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

## --after-user-code--

```js
fun1();
fun2();
uncapture();
(function() { return logOutput || "console.log never called"; })();
```

## --seed-contents--

```js
// Declare the myGlobal variable below this line


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

# --solutions--

```js
const myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

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
