---
title: Global Object
localeTitle: Objeto Global
---
O objeto global é um objeto inicializado pelo intérprete JavaScript antes de o código ser executado. Todas as variáveis ​​declaradas no escopo global (consulte: [Escopos](http://forum.freecodecamp.com/t/scopes-in-javascript/14696) ) são armazenadas no objeto global como propriedades.

Em um ambiente Node.js, o objeto global pode ser acessado pela palavra-chave `global` , enquanto em uma janela do navegador ele pode ser acessado pela palavra-chave da `window` . A palavra `this` chave `this` também se refere ao objeto global quando usado no escopo global. Por favor, note que usar `this` no escopo global retornará `undefined` se `strict mode` estiver habilitado.

Por exemplo:

```javascript
// global scope 
 var foo = "bar"; 
 
 console.log(global.foo); // bar (in a Node environment) 
 console.log(window.foo); // bar (in a browser window) 
 console.log(this.foo); // bar (if strict mode is disabled) 
```

A distinção entre escopos locais para funções e o escopo global é importante aqui: o objeto global contém apenas as variáveis ​​que foram declaradas no escopo global, não os escopos locais de funções.

O objeto global também contém as propriedades `NaN` , `undefined` e `Infinity` e as seguintes funções:

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

# Referências

1.  MSDN: [Objeto Global (Javascript)](https://msdn.microsoft.com/en-us/library/52f50e9t)