---
title: Window setInterval Method
localeTitle: Método setInterval de ventana
---
## Método setInterval de ventana

El método `setInterval()` llama a una función o evalúa una expresión a intervalos especificados (en milisegundos).

```js
    setInterval(function(){ alert("Hello"); }, 3000); 
```

El método `setInterval()` continuará llamando a la función hasta que se `clearInterval()` , o se cierre la ventana.

El método `setInterval()` puede pasar parámetros adicionales a la función, como se muestra en el siguiente ejemplo.

```js
    setInterval(function, milliseconds, parameter1, parameter2, parameter3); 
```

El valor de ID devuelto por `setInterval()` se utiliza como parámetro para el método `clearInterval()` .

Consejos:

*   1000 ms = 1 segundo.
*   Para ejecutar una función solo una vez, después de un número específico de milisegundos, use el método `setTimeout()` .

#### Más información:

Documentación: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

JavaScript setInterval () Ejemplos de funciones: [Sitepoint](https://www.sitepoint.com/setinterval-example/)

y algunos ejemplos más: [w3schools](https://www.w3schools.com/jsref/met_win_setinterval.asp)