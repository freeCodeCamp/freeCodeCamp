---
title: Concurrency Model and Event Loop
localeTitle: Modelo de concurrencia y evento de bucle
---
## Modelo de concurrencia y evento de bucle

El tiempo de ejecución de Javascript es de un solo hilo, lo que significa que puede ejecutar una pieza de código a la vez. Para comprender el modelo de concurrencia y el bucle de eventos en Javascript, primero tenemos que encontrar algunos términos comunes que están asociados con él. Primero vamos a aprender qué es una pila de llamadas.

Una pila de llamadas es una estructura de datos simple que registra en qué parte del código estamos actualmente. Entonces, si entramos en una función que es una invocación de función, se envía a la pila de llamadas y, cuando regresamos de una función, se extrae de la pila.

Tomemos un ejemplo de código para entender la pila de llamadas

```javascript
function multiply(x,y) { 
   return x * y; 
 } 
 
 function squared(n) { 
     return multiply(n,n) 
  } 
 
 function printSquare(n) { 
   return squared(n) 
 } 
 
 let numberSquared = printSquare(5); 
 console.log(numberSquared); 
```

Primero, cuando el código se ejecuta, el tiempo de ejecución leerá cada una de las definiciones de funciones, pero cuando llegue a la línea donde se invoca la primera función **printSquare (5)** , empujará esta función a la pila de llamadas. A continuación, esta función se ejecutará y, antes de devolverla, encontrará otra función al **cuadrado (n),** por lo que suspenderá su operación actual y presionará esta función sobre la función existente. Ejecuta la función en este caso, la función al cuadrado y finalmente encuentra otra función **multiplicándose (n, n),** por lo que suspende sus ejecuciones actuales y empuja esta función en la pila de llamadas. La función Multiplica se ejecuta y vuelve con el valor multiplicado. Finalmente, la función cuadrada regresa y se extrae de la pila y luego lo mismo ocurre con printSquare. El valor cuadrado final se asigna a la variable numberSquared. En este caso, encontramos una invocación de función en este caso, es una declaración de console.log (), por lo que el tiempo de ejecución lo empuja hacia la pila que lo ejecuta, imprimiendo así el número cuadrado en la consola. Cabe señalar que la primera función que se inserta en la pila antes de que se ejecute cualquiera de los códigos anteriores es la función principal que en el tiempo de ejecución se denota como una "función anónima".

Entonces, para resumir cada vez que se invoca una función, se inserta en la pila de llamadas donde se ejecuta. Finalmente, cuando la función se realiza con su ejecución y regresa de forma implícita o explícita, se quitará de la pila. La pila de llamadas solo registra en qué punto en el tiempo qué función se estaba ejecutando. Mantiene un registro de qué función se está ejecutando actualmente.

Ahora sabemos por esto que Javascript puede ejecutar una cosa a la vez, pero ese no es el caso con el navegador. El navegador tiene su propio conjunto de API como setTimeout, XMLHttpRequests que no se especifican en el tiempo de ejecución de Javascript. De hecho, si revisa el código fuente de V8, el popular runtime de Javascript que impulsa los navegadores como Google Chrome, no encontrará ninguna definición para ello. Es porque estas API web especiales existen en el entorno del navegador y no en el entorno de javascript y se puede decir que estas API introducen la concurrencia en la mezcla. Veamos un diagrama para entender el cuadro completo.

![Modelo de bucle de concurrencia y evento](https://cdn-media-1.freecodecamp.org/imgr/rnQEY7o.png)

Se introducen algunos términos más

**Montón** - Es sobre todo el lugar donde se asignan los objetos.

**Cola de devolución de llamada** : es una estructura de datos que almacena todas las devoluciones de llamada. Como se trata de una cola, los elementos se procesan según FIFO, que es el primero en entrar, primero en salir.

**Event Loop** - Aquí es donde todas estas cosas se juntan. Lo que simplemente hace el bucle de eventos es que verifica las pilas de llamadas y, si está vacío, lo que significa que no hay funciones en la pila, se obtiene la devolución de llamada más antigua. la cola de devolución de llamada y la inserta en la pila de llamadas que finalmente ejecuta la devolución de llamada.

Entendamos esto con un ejemplo de código

```javascript
console.log('hi'); 
 
 setTimeout(function() { 
     console.log('freecodeCamp') 
 },5000); 
 
 console.log('JS') 
```

Cuando la primera línea se ejecuta, es una console.log () que es una invocación de función, lo que significa que esta función se inserta en la pila de llamadas donde ejecuta la impresión "hi" en la consola y finalmente se devuelve y se extrae de la pila. Luego, cuando el tiempo de ejecución se va a ejecutar setTimeout (), sabe que se trata de una API web y, por lo tanto, se lo entrega al navegador para que se encargue de su ejecución. El navegador inicia el temporizador y luego JS runtime saca el setTimeout () de la pila. Se encuentra con otra invocación de console.log () y, por lo tanto, inserta esto en la pila de llamadas, el mensaje 'JS' se registra en la consola y finalmente se devuelve y, por lo tanto, el último console.log () se extrae de la pila. Ahora la pila de llamadas está vacía. Mientras tanto, mientras todo esto continuaba, el temporizador finaliza, es decir, cuando han transcurrido 5 segundos, el navegador sigue adelante y empuja la función de devolución de llamada a la cola de devolución de llamada. A continuación, el bucle de eventos verifica si la pila de llamadas está libre o no. Dado que es gratuito, toma la función de devolución de llamada y la empuja nuevamente a la pila de llamadas que ejecuta el código en su interior. Una vez más, dentro del código hay una invocación de console.log (), por lo que esta función va a la parte superior de la pila. Ejecuta el registro de 'freecodecamp' en la consola y finalmente regresa, lo que significa que se extrae de la pila y finalmente se devuelve la devolución de llamada. De la pila y hemos terminado.

Para visualizar esto mejor, pruebe esta herramienta por Phillip Roberts- [Loupe Event Loop Visualizer](http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

#### Más información:

[Philip Roberts: ¿Qué diablos es el bucle de eventos de todos modos? | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

[Modelo de concurrencia y Event Loop MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)