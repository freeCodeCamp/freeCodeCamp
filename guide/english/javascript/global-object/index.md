---
title: Global Object
---
The global object is an object that is initialized by the JavaScript interpreter before the code is executed. All variables that are declared on the global scope (see: <a href='http://forum.freecodecamp.com/t/scopes-in-javascript/14696' target='_blank' rel='nofollow'>Scopes</a>) are stored in the global object as properties.

In a Node.js environment, the global object can be accessed by the `global` keyword, while in a browser window it can be accessed by the `window` keyword. The `this` keyword also refers to the global object when used in the global scope. Please note that using `this` in the global scope will return `undefined` if `strict mode` is enabled.

For example:

```javascript
// global scope
var foo = "bar";

console.log(global.foo); // bar (in a Node environment)
console.log(window.foo); // bar (in a browser window)
console.log(this.foo); // bar (if strict mode is disabled)
```

The distinction between scopes local to functions and the global scope is important here: the global object only contains the variables that were declared on the global scope, not the local scopes of functions.

The global object also contains the properties `NaN`, `undefined` and `Infinity` and the following functions:

1.  `decodeURI()`
2.  `decodeURIComponent()`
3.  `encodeURI()`
4.  `encodeURIComponent()`
5.  `escape()`
6.  `eval()`
7.  `GetObject()`
8.  `isFinite()`
9.  `isNaN()`
10.  `parseFloat()`
11.  `parseInt()`
12.  `ScriptEngine()`
13.  `ScriptEngineBuildVersion()`
14.  `ScriptEngineMajorVersion()`
15.  `ScriptEngineMinorVersion()`
16.  `unescape()`

# References

1.  MSDN: <a href='https://msdn.microsoft.com/en-us/library/52f50e9t' target='_blank' rel='nofollow'>Global Object (Javascript)</a>
