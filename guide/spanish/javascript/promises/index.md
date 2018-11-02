---
title: Promises
localeTitle: Promesas
---
## Promesas

JavaScript es de un solo hilo, lo que significa que dos bits de script no pueden ejecutarse al mismo tiempo; Tienen que correr uno tras otro. Una promesa es un objeto que representa la finalización (o falla) eventual de una operación asíncrona y su valor resultante.

```javascript
var promise = new Promise(function(resolve, reject) { 
  // do thing, then… 
 
  if (/* everything worked */) { 
    resolve("See, it worked!"); 
  } 
  else { 
    reject(Error("It broke")); 
  } 
 }); 
```

## Una promesa existe en uno de estos estados

*   Pendiente: estado inicial, ni cumplido ni rechazado.
*   Cumplido: operación completada con éxito.
*   Rechazado: operación fallida.

El objeto Promesa funciona como proxy para un valor que no se conoce necesariamente cuando se crea la promesa. Le permite asociar los controladores con el valor de éxito eventual de una acción asíncrona o la razón del fallo. Esto permite que los métodos asíncronos devuelvan valores como métodos síncronos: en lugar de devolver inmediatamente el valor final, el método asíncrono devuelve una promesa de suministrar el valor en algún momento en el futuro.

## Usando 'Then' (Promesa Encadenamiento)

Para tomar varias llamadas asíncronas y sincronizarlas una tras otra, puede usar el encadenamiento de promesa. Esto permite usar un valor de la primera promesa en posteriores devoluciones de llamada posteriores.

```javascript
Promise.resolve('some') 
  .then(function(string) { // <-- This will happen after the above Promise resolves (returning the value 'some') 
    return new Promise(function(resolve, reject) { 
      setTimeout(function() { 
        string += 'thing'; 
        resolve(string); 
      }, 1); 
    }); 
  }) 
  .then(function(string) { // <-- This will happen after the above .then's new Promise resolves 
    console.log(string); // <-- Logs 'something' to the console 
  }); 
```

## API de promesa

Hay 4 métodos estáticos en la clase Promesa:

*   Promise.resolve
*   Promise.reject
*   Promesa.todos
*   Promesa

## Las promesas se pueden encadenar

Cuando escriba Promesas para resolver un problema en particular, puede encadenarlos para formar lógica.

```javascript
var add = function(x, y) { 
  return new Promise((resolve,reject) => { 
    var sum = x + y; 
    if (sum) { 
      resolve(sum); 
    } 
    else { 
      reject(Error("Could not add the two values!")); 
    } 
  }); 
 }; 
 
 var subtract = function(x, y) { 
  return new Promise((resolve, reject) => { 
    var sum = x - y; 
    if (sum) { 
      resolve(sum); 
    } 
    else { 
      reject(Error("Could not subtract the two values!")); 
    } 
  }); 
 }; 
 
 // Starting promise chain 
 add(2,2) 
  .then((added) => { 
    // added = 4 
    return subtract(added, 3); 
  }) 
  .then((subtracted) => { 
    // subtracted = 1 
    return add(subtracted, 5); 
  }) 
  .then((added) => { 
    // added = 6 
    return added * 2; 
  }) 
  .then((result) => { 
    // result = 12 
    console.log("My result is ", result); 
  }) 
  .catch((err) => { 
    // If any part of the chain is rejected, print the error message. 
    console.log(err); 
  }); 
```

Esto es útil para seguir un paradigma de _programación funcional_ . Por crear Las funciones para manipular datos se pueden encadenar para ensamblar una final. resultado. Si en algún punto de la cadena de funciones se _rechaza_ un valor, la cadena saltará al controlador `catch()` más cercano.

Para más información sobre Programación [Funcional](https://en.wikipedia.org/wiki/Functional_programming) : [Programación Funcional.](https://en.wikipedia.org/wiki/Functional_programming)

## Generadores de funciones

En versiones recientes, JavaScript ha introducido más formas de manejar las promesas de forma nativa. Una de esas formas es el generador de funciones. Los generadores de funciones son funciones "pausables". Cuando se usan con Promesas, los generadores pueden hacer que el uso sea mucho más fácil de leer y parezca "síncrono".

```javascript
const myFirstGenerator = function* () { 
  const one = yield 1; 
  const two = yield 2; 
  const three = yield 3; 
 
  return 'Finished!'; 
 } 
 
 const gen = myFirstGenerator(); 
```

Aquí está nuestro primer generador, que puede ver por la `function*` sintaxis. La variable `gen` que `myFirstGenerator` no ejecutará `myFirstGenerator` , sino que "este generador está listo para usar".

```javascript
console.log(gen.next()); 
 // Returns { value: 1, done: false } 
```

Cuando ejecutamos `gen.next()` , se desactiva el generador y continúa. Como esta es la primera vez que llamamos `gen.next()` ejecutará el `yield 1` y se `gen.next()` hasta que llamemos `gen.next()` nuevamente. Cuando se llama el `yield 1` , nos devolverá el `value` que se obtuvo y si el generador está `done` o no.

```javascript
console.log(gen.next()); 
 // Returns { value: 2, done: false } 
 
 console.log(gen.next()); 
 // Returns { value: 3, done: false } 
 
 console.log(gen.next()); 
 // Returns { value: 'Finished!', done: true } 
 
 console.log(gen.next()); 
 // Will throw an error 
```

A medida que seguimos llamando a `gen.next()` , continuará con el siguiente `yield` y se detendrá cada vez. Una vez que no queda más `yield` , procederá a ejecutar el resto del generador, que en este caso simplemente devuelve `'Finished!'` . Si `gen.next()` llamar a `gen.next()` , se producirá un error cuando el generador finalice.

Ahora, imagine que si cada `yield` en este ejemplo fuera una `Promise` , el código en sí mismo parecería extremadamente sincrónico.

### Promise.all (iterable) es muy útil para solicitudes múltiples a diferentes fuentes

El método Promise.all (iterable) devuelve una Promesa única que se resuelve cuando todas las promesas en el argumento iterable se han resuelto o cuando el argumento iterable no contiene promesas. Se rechaza con el motivo de la primera promesa que rechaza.

```javascript
var promise1 = Promise.resolve(catSource); 
 var promise2 = Promise.resolve(dogSource); 
 var promise3 = Promise.resolve(cowSource); 
 
 Promise.all([promise1, promise2, promise3]).then(function(values) { 
  console.log(values); 
 }); 
 // expected output: Array ["catData", "dogData", "cowData"] 
```

### Más información

Para más información sobre promesas: [Promesas.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)