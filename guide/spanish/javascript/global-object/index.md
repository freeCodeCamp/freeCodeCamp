---
title: Global Object
localeTitle: Objeto global
---
El objeto global es un objeto que es inicializado por el intérprete de JavaScript antes de que se ejecute el código. Todas las variables que se declaran en el ámbito global (ver: [Ámbitos](http://forum.freecodecamp.com/t/scopes-in-javascript/14696) ) se almacenan en el objeto global como propiedades.

En un entorno Node.js, se puede acceder al objeto `global` palabra clave `global` , mientras que en una ventana del navegador se puede acceder con la palabra clave `window` . La palabra clave `this` también hace referencia al objeto global cuando se utiliza en el ámbito global. Tenga en cuenta que el uso de `this` en el ámbito global volverá `undefined` si el `strict mode` está habilitado.

Por ejemplo:

```javascript
// global scope 
 var foo = "bar"; 
 
 console.log(global.foo); // bar (in a Node environment) 
 console.log(window.foo); // bar (in a browser window) 
 console.log(this.foo); // bar (if strict mode is disabled) 
```

La distinción entre los ámbitos locales a las funciones y el ámbito global es importante aquí: el objeto global solo contiene las variables que se declararon en el ámbito global, no los ámbitos locales de las funciones.

El objeto global también contiene las propiedades `NaN` , `undefined` e `Infinity` y las siguientes funciones:

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

# Referencias

1.  MSDN: [Objeto global (Javascript)](https://msdn.microsoft.com/en-us/library/52f50e9t)