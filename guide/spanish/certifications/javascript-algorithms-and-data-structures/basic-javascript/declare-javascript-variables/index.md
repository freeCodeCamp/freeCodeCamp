---
title: Declare JavaScript Variables
localeTitle: Declarar las variables de JavaScript
---
# Declarar las variables de JavaScript

Cuando almacenamos datos en una estructura de datos, lo llamamos una variable. Las variables de JavaScript están escritas en camel case. Un ejemplo de camel case es: `camelCase` .

Puedes declarar una variable de esta manera

```js
    var myName = "Rafael"; 
```

ES6 introdujo otras dos formas de declarar variables. **let** y **const** . _Let_ es bastante similar a var y en su mayor parte es intercambiable:

```js
    let myAge = 36; 
```

Donde _dejar que_ se diferencia, es en su alcance. Cuando declaramos que utilizamos _var_ , su alcance es global. Cuando declaramos usando _let_ , el alcance está limitado a esa función. Si desea utilizar una variable _Let_ fuera de una función, hay que hacerlo de alcance mundial o redeclare en la siguiente función.

**Const** , por otro lado, solo puede ser declarado una vez. Su valor nunca puede cambiar.

```js
    const myName = "Christina"; 

```