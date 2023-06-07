---
id: 56533eb9ac21ba0edf2244be
title: Глобальна область видимості та функції
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
dashedName: global-scope-and-functions
---

# --description--

У JavaScript <dfn>область видимості</dfn> стосується видимості змінних. Змінні, які визначені поза межами функції, мають <dfn>глобальну</dfn> область видимості. Це означає, що їх можна побачити всюди у вашому коді JavaScript.

Змінні, оголошені без ключових слів `let` чи `const`, автоматично створюються в глобальній (`global`) області видимості. Це може створити непередбачувані наслідки у вашому коді або при повторному запуску функції. Ви повинні завжди оголошувати свої змінні з `let` чи `const`.

# --instructions--

Використовуючи `let` чи `const`, оголосіть глобальну змінну під назвою `myGlobal` поза будь-якою функцією. Ініціалізуйте її зі значенням `10`.

Призначте `5` до `oopsGlobal` всередині функції `fun1` ***не*** використовуючи ключові слова `var`, `let` чи `const`.

# --hints--

`myGlobal` повинна бути визначеною

```js
assert(typeof myGlobal != 'undefined');
```

`myGlobal` повинна мати значення `10`

```js
assert(myGlobal === 10);
```

`myGlobal` потрібно оголосити, використовуючи ключове слово `let` або `const`

```js
assert(/(let|const)\s+myGlobal/.test(code));
```

`oopsGlobal` повинна бути глобальною змінною і мати значення `5`

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
  // Assign 5 to oopsGlobal here

}

// Only change code above this line

function fun2() {
  let output = "";
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
  let output = "";
  if(typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if(typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```
