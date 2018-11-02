---
title: Callback Functions
localeTitle: Funciones de devolución de llamada
---
Este artículo ofrece una breve introducción al concepto y uso de las funciones de devolución de llamada en el lenguaje de programación Javascript.

## Las funciones son objetos

Lo primero que debemos saber es que en Javascript, las funciones son objetos de primera clase. Como tal, podemos trabajar con ellos de la misma manera que trabajamos con otros objetos, como asignarlos a variables y pasarlos como argumentos a otras funciones. Esto es importante, porque es la última técnica que nos permite ampliar la funcionalidad de nuestras aplicaciones.

## Funciones de devolución de llamada

Una **función de devolución de llamada** es una función que se pasa _como un argumento_ a otra función, para ser "devuelta" más adelante. Una función que acepta otras funciones como argumentos se denomina **función de orden superior** , que contiene la lógica para _cuando_ se ejecuta la función de devolución de llamada. Es la combinación de estos dos que nos permiten ampliar nuestra funcionalidad.

Para ilustrar las devoluciones de llamada, comencemos con un ejemplo simple:

```javascript
function createQuote(quote, callback){ 
  var myQuote = "Like I always say, " + quote; 
  callback(myQuote); // 2 
 } 
 
 function logQuote(quote){ 
  console.log(quote); 
 } 
 
 createQuote("eat your vegetables!", logQuote); // 1 
 
 // Result in console: 
 // Like I always say, eat your vegetables! 
```

En el ejemplo anterior, `createQuote` es la función de orden superior, que acepta dos argumentos, el segundo es la devolución de llamada. La función `logQuote` se utiliza para pasar como nuestra función de devolución de llamada. Cuando ejecutamos la función `createQuote` _(1)_ , observe que no estamos _agregando_ paréntesis a `logQuote` cuando la pasamos como argumento. Esto se debe a que no queremos ejecutar nuestra función de devolución de llamada de inmediato, simplemente queremos pasar la definición de la función a la función de orden superior para que pueda ejecutarse más tarde.

Además, debemos asegurarnos de que si la función de devolución de llamada que pasamos en espera los argumentos, proporcionamos esos argumentos al ejecutar la devolución de llamada _(2)_ . En el ejemplo anterior, esa sería la `callback(myQuote);` declaración, ya que sabemos que `logQuote` espera que se `logQuote` una cotización.

Además, podemos pasar en funciones anónimas como devoluciones de llamada. La siguiente llamada a `createQuote` tendría el mismo resultado que el ejemplo anterior:

```javascript
createQuote("eat your vegetables!", function(quote){ 
  console.log(quote); 
 }); 
```

Incidentalmente, no _tiene_ que usar la palabra "devolución de llamada" como el nombre de su argumento, Javascript solo necesita saber que es el nombre correcto del argumento. Basado en el ejemplo anterior, la función siguiente se comportará exactamente de la misma manera.

```javascript
function createQuote(quote, functionToCall) { 
  var myQuote = "Like I always say, " + quote; 
  functionToCall(myQuote); 
 } 
```

## ¿Por qué usar devoluciones de llamada?

La mayoría de las veces estamos creando programas y aplicaciones que funcionan de manera **sincrónica** . En otras palabras, algunas de nuestras operaciones se inician solo después de que se hayan completado las anteriores. A menudo, cuando solicitamos datos de otras fuentes, como una API externa, no siempre sabemos _cuándo_ serán devueltos nuestros datos. En estos casos, queremos esperar la respuesta, pero no siempre queremos que se detenga completamente toda la aplicación mientras se recuperan los datos. Estas situaciones son donde las funciones de devolución de llamada son útiles.

Veamos un ejemplo que simula una solicitud a un servidor:

```javascript
function serverRequest(query, callback){ 
  setTimeout(function(){ 
    var response = query + "full!"; 
    callback(response); 
  },5000); 
 } 
 
 function getResults(results){ 
  console.log("Response from the server: " + results); 
 } 
 
 serverRequest("The glass is half ", getResults); 
 
 // Result in console after 5 second delay: 
 // Response from the server: The glass is half full! 
```

En el ejemplo anterior, hacemos una solicitud simulada a un servidor. Transcurridos 5 segundos, la respuesta se modifica y, a continuación, se ejecuta nuestra función de devolución de llamada `getResults` . Para ver esto en acción, puede copiar / pegar el código anterior en la herramienta de desarrollo de su navegador y ejecutarlo.

Además, si ya está familiarizado con `setTimeout` , entonces ha estado usando las funciones de devolución de llamada todo el tiempo. El argumento de la función anónima pasado en la llamada a la función `setTimeout` del ejemplo anterior también es una devolución de llamada. Por lo tanto, la devolución de llamada original del ejemplo es ejecutada por otra devolución de llamada ¡Tenga cuidado de no anidar demasiadas devoluciones de llamada si puede evitarlo, ya que esto puede llevar a algo llamado "infierno de devolución de llamada"! Como su nombre lo indica, no es una alegría tratar con él.