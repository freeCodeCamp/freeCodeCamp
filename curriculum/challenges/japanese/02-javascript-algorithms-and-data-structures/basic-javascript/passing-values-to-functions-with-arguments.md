---
id: 56533eb9ac21ba0edf2244bd
title: 引数を使用して関数に値を渡す
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy8rahW'
forumTopicId: 18254
dashedName: passing-values-to-functions-with-arguments
---

# --description--

<dfn>パラメーター</dfn>は、関数が呼び出されたときに関数に入力される値のプレイスホルダーとして機能する変数です。 通常、関数を定義するときは 1 つ以上のパラメーターを一緒に定義します。 関数が呼び出されるときに入力される (または<dfn>「渡される」</dfn>) 実際の値のことを<dfn>引数</dfn>と呼びます。

次の関数は `param1` と `param2` の 2 つのパラメーターを持っています。

```js
function testFun(param1, param2) {
  console.log(param1, param2);
}
```

この `testFun` を `testFun("Hello", "World");` のように呼び出し、 `Hello` と `World` の 2 つの文字列を引数として渡すことができます。 関数の内部では、`param1` は文字列 `Hello` に等しくなり、`param2` は文字列 `World` に等しくなります。 別の引数を付けて再び `testFun` を呼び出すことができ、その場合、パラメーターは新しい引数の値を受け取ります。

# --instructions--

<ol><li>2 つの引数を受け取り、その合計を開発コンソールに出力する <code>functionWithArgs</code> という関数を作成してください。</li><li>2 つの数値を引数に取る関数を呼び出してください。</li></ol>

# --hints--

`functionWithArgs` は関数である必要があります。

```js
assert(typeof functionWithArgs === 'function');
```

`functionWithArgs(1,2)` は `3` を出力する必要があります。

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(1, 2);
  uncapture();
}
assert(logOutput == 3);
```

`functionWithArgs(7,9)` は `16` を出力する必要があります。

```js
if (typeof functionWithArgs === 'function') {
  capture();
  functionWithArgs(7, 9);
  uncapture();
}
assert(logOutput == 16);
```

2 つの数値を受け取る `functionWithArgs` を定義して呼び出す必要があります。

```js
assert(
  /functionWithArgs\([-+]?\d*\.?\d*,[-+]?\d*\.?\d*\)/.test(
    code.replace(/\s/g, '')
  )
);
```

# --seed--

## --before-user-code--

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

## --after-user-code--

```js
uncapture();

if (typeof functionWithArgs !== "function") { 
  (function() { return "functionWithArgs is not defined"; })();
} else {
  (function() { return logOutput || "console.log never called"; })();
}
```

## --seed-contents--

```js

```

# --solutions--

```js
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(10, 5);
```
