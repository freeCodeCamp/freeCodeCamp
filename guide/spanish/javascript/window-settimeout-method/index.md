---
title: Window setTimeout Method
localeTitle: Método setTimeout de ventana
---
## Método setTimeout de ventana

El método `setTimeout()` llama a una función o evalúa una expresión después de un número específico de milisegundos.

Consejos:

*   1000 ms = 1 segundo.
*   La función solo se ejecuta una vez. Si necesita repetir la ejecución, use el método `setInterval()` .
*   Utilice el método `clearTimeout()` para evitar que la función se ejecute.

La sintaxis del método `setTimout()` es la siguiente:

```js
setTimeout(function, milliseconds, param1, param2, ...); 
```

Por ejemplo:

```js
setTimeout(function(){ alert("Hello"); }, 3000); 
```

Una cosa muy importante acerca de `setTimeout()` es que se ejecutará de forma asíncrona. Tomemos un ejemplo:

```js
console.log("A"); 
 setTimeout(function(){ console.log("B"); }, 0); 
 console.log("C"); 
 // The order in the console will be 
 // A 
 // C 
 // B 
```

**¡No como se espera! Pero especificamos solo 0 segundos !!!** Para resolver este problema y asegurarnos de que nuestro código se ejecute de forma sincrónica, solo tenemos que anidar la última consola en la función

```js
console.log("A"); 
 setTimeout(function() { 
    console.log("B"); 
    console.log("C"); 
 }, 0); 
 // The order in the console will be 
 // A 
 // B 
 // C 
```

#### Más información:

Documentación: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

Más ejemplos de la función [setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp) : [w3schools](https://www.w3schools.com/jsref/met_win_settimeout.asp)

Para entender lo que realmente sucede debajo del capó, simplemente mire este impresionante video [Philip Roberts: ¿Qué diablos es el bucle de eventos de todos modos? | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)