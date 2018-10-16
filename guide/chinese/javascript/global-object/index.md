---
title: Global Object
localeTitle: 全球对象
---
全局对象是在执行代码之前由JavaScript解释器初始化的对象。在全局范围（参见： [Scopes](http://forum.freecodecamp.com/t/scopes-in-javascript/14696) ）上声明的所有变量都作为属性存储在全局对象中。

在Node.js环境中，全局对象可以通过`global`关键字访问，而在浏览器窗口中，可以通过`window`关键字访问它。在全局范围中使用时， `this`关键字也引用全局对象。请注意，如果启用了`strict mode`则在全局范围内使用`this`将返回`undefined` 。

例如：

```javascript
// global scope 
 var foo = "bar"; 
 
 console.log(global.foo); // bar (in a Node environment) 
 console.log(window.foo); // bar (in a browser window) 
 console.log(this.foo); // bar (if strict mode is disabled) 
```

函数本地范围与全局范围之间的区别在此非常重要：全局对象仅包含在全局范围内声明的变量，而不包含函数的本地范围。

全局对象还包含`NaN` ， `undefined`和`Infinity`属性以及以下函数：

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

# 参考

1.  MSDN： [全局对象（Javascript）](https://msdn.microsoft.com/en-us/library/52f50e9t)