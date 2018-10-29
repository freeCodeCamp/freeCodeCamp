---
title: Timing Events
localeTitle: Eventos de tiempo
---
## Eventos de tiempo

Los programadores utilizan eventos de temporización para retrasar la ejecución del código o para repetir el código en un intervalo específico.

Hay dos funciones nativas en la biblioteca de JavaScript que se utilizan para realizar estas tareas: `setTimeout()` y `setInterval()` .

Utiliza `setTimeout()` para retrasar la ejecución de la función pasada por un período de tiempo específico. Hay dos parámetros que pasa a `setTimeout()` : la función que desea llamar y la cantidad de tiempo en milisegundos. (Hay 1000 milisegundos (ms) en 1 segundo. Ejemplo: 5000 ms = 5 segundos). `setTimeout()` se ejecutará una vez después de que haya transcurrido el tiempo especificado.

`setTimeout()` :

```javascript
var timeoutID; 
 
 function delayTimer() { 
  timeoutID = setTimeout(delayedFunction, 3000); 
 } 
 
 function delayedFunction() { 
  alert(“Three seconds have elapsed.”); 
 } 
```

Cuando se llama a la función delayTimer se ejecutará setTimeout. Después de 3 segundos, ejecutará delayedFunction, que enviará una alerta.

Utilice `setInterval()` para especificar una función para repetir con un retraso de tiempo entre ejecuciones. De nuevo, se pasan dos parámetros a `setInterval()` : la función que desea llamar y la cantidad de tiempo en milisegundos. `setInterval()` continuará ejecutándose hasta que se borre.

`setInterval()` :

```javascript
var intervalID; 
 
 function repeatEverySecond() { 
  intervalID = setInterval(sendMessage, 1000); 
 } 
 
 function sendMessage() { 
  console.log(“One second elapsed.”); 
 } 
```

Cuando su código llama a la función repeatEverySecond ejecutará setInterval. setInterval ejecutará la función sendMessage cada 1000 milisegundos.

También hay funciones nativas correspondientes para detener los eventos de temporización: `clearTimeout()` y `clearInterval()` .

Es posible que haya notado que cada función del temporizador se guarda en una variable. Cuando la función establecida se ejecuta, se le asigna un número que se guarda en esta variable. Este número generado es único para cada instancia de temporizadores. Este número asignado también es la forma en que los temporizadores se identifican para detenerse. Por esta razón, siempre debe configurar su temporizador a una variable.

Para mayor claridad de su código, siempre debe hacer coincidir `clearTimeout()` con `setTimeout()` y `clearInterval()` con `setInterval()` .

Para detener un temporizador, llame a la función de borrado correspondiente y pásele la variable de ID de temporizador que coincida con el temporizador que desea detener. La sintaxis de `clearInterval()` y `clearTimeout()` son las mismas.

Ejemplo:

```javascript
var timeoutID; 
 
 function delayTimer() { 
  timeoutID = setTimeout(delayedFunction, 3000); 
 } 
 
 function delayedFunction() { 
  alert(“Three seconds have elapsed.”); 
 } 
 
 function clearAlert() { 
  clearTimeout(timeoutID); 
 } 

```