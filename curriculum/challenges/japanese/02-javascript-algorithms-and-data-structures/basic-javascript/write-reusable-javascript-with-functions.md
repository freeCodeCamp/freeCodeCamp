---
id: 56bbb991ad1ed5201cd392cf
title: 関数を使用して再利用可能な JavaScript を記述する
challengeType: 1
videoUrl: 'https://scrimba.com/c/cL6dqfy'
forumTopicId: 18378
dashedName: write-reusable-javascript-with-functions
---

# --description--

JavaScript では、コードを<dfn>関数</dfn>と呼ばれる再利用可能なパーツに分割することができます。

次は関数の例です。

```js
function functionName() {
  console.log("Hello World");
}
```

この関数は `functionName();` のように関数名に括弧をつけて、<dfn>呼び出す</dfn>ことができます。この関数を呼びだすごとに、`Hello World` というメッセージが開発コンソールに出力されます。 関数が呼び出されるたびに、中括弧で囲まれたコードの部分がすべて実行されます。

# --instructions--

<ol>
  <li>
    文字列 <code>Hi World</code> を開発コンソールに出力する <code>reusableFunction</code> という関数を作成してください。
  </li>
  <li>
    この関数を呼び出してください。
  </li>
</ol>

# --hints--

`reusableFunction` は関数である必要があります。

```js
assert(typeof reusableFunction === 'function');
```

`reusableFunction` は、呼び出されたときに文字列 `Hi World` をコンソールに出力する必要があります。

```js
assert(testConsole());
```

`reusableFunction` を定義した後に、呼び出す必要があります。

```js
const functionStr = reusableFunction && __helpers.removeWhiteSpace(reusableFunction.toString());
const codeWithoutFunction = __helpers.removeWhiteSpace(code).replace(/reusableFunction\(\)\{/g, '');
assert(/reusableFunction\(\)/.test(codeWithoutFunction));
```

# --seed--

## --after-user-code--

```js

function testConsole() {
  var logOutput = "";
  var originalConsole = console;
  var nativeLog = console.log;
  var hiWorldWasLogged = false;
  console.log = function (message) {
    if(message === 'Hi World')  {
      console.warn(message)
      hiWorldWasLogged = true;
    }
    if(message && message.trim) logOutput = message.trim();
    if(nativeLog.apply) {
      nativeLog.apply(originalConsole, arguments);
    } else {
      var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
      nativeLog(nativeMsg);
    }
  };
  reusableFunction();
  console.log = nativeLog;
  return hiWorldWasLogged;
}

```

## --seed-contents--

```js

```

# --solutions--

```js
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();
```
