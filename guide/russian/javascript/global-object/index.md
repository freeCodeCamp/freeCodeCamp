---
title: Global Object
localeTitle: Глобальный объект
---
Глобальный объект - это объект, который инициализируется интерпретатором JavaScript перед выполнением кода. Все переменные, объявленные в глобальной области (см.: [Области](http://forum.freecodecamp.com/t/scopes-in-javascript/14696) ), хранятся в глобальном объекте как свойства.

В среде Node.js к глобальному объекту можно получить доступ к `global` ключевому слову, тогда как в окне браузера к нему можно получить доступ с помощью ключевого слова `window` . `this` ключевое слово также ссылается на глобальный объект при использовании в глобальном масштабе. Обратите внимание, что использование `this` в глобальной области действия будет возвращено `undefined` если включен `strict mode` .

Например:

```javascript
// global scope 
 var foo = "bar"; 
 
 console.log(global.foo); // bar (in a Node environment) 
 console.log(window.foo); // bar (in a browser window) 
 console.log(this.foo); // bar (if strict mode is disabled) 
```

Здесь важна различие между локальными областями функций и глобальной областью: глобальный объект содержит только переменные, объявленные в глобальной области действия, а не локальные области функций.

Глобальный объект также содержит свойства `NaN` , `undefined` и `Infinity` и следующие функции:

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

# Рекомендации

1.  MSDN: [глобальный объект (Javascript)](https://msdn.microsoft.com/en-us/library/52f50e9t)