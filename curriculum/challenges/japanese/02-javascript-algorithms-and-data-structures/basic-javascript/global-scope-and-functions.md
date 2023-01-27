---
id: 56533eb9ac21ba0edf2244be
title: グローバルスコープと関数
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQM7mCN'
forumTopicId: 18193
dashedName: global-scope-and-functions
---

# --description--

JavaScript では、変数の効力の及ぶ範囲のことを<dfn>スコープ</dfn>と呼びます。 関数ブロックの外側で定義された変数は、<dfn>グローバル</dfn>のスコープを持ちます。 つまり、JavaScript コードのどこからでもその変数を参照することができます。

`let` キーワードまたは `const` キーワードを使用せずに宣言された変数は、自動的に `global` スコープで作成されます。 これは、コード内の他の場所や、関数を複数回実行する場合に、意図しない結果を引き起こす可能性があります。 変数は常に `let` または `const` を使用して宣言するようにしましょう。

# --instructions--

`let` または `const`を使用して、関数の外部で `myGlobal` という名前のグローバル変数を宣言し、 値 `10` で初期化してください。

関数 `fun1` の内側で、キーワード `var`、`let`、`const` のいずれも***使用せずに***、`oopsGlobal` に `5` を代入してください。

# --hints--

`myGlobal` を定義する必要があります。

```js
assert(typeof myGlobal != 'undefined');
```

`myGlobal` の値は `10` である必要があります。

```js
assert(myGlobal === 10);
```

`myGlobal` は `let` キーワードまたは `const` キーワードを使用して宣言する必要があります。

```js
assert(/(let|const)\s+myGlobal/.test(code));
```

`oopsGlobal` はグローバル変数で、値は `5` である必要があります。

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
