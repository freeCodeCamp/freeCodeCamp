---
title: Await Promises
localeTitle: Aguarda promesas
---
## Aguarda promesas

Los [operadores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) `async` / `await` facilitan la implementación de muchas promesas async. También permiten que los ingenieros escriban códigos más claros, concisos y verificables.

Para comprender este tema, debes tener una comprensión sólida de cómo funcionan las [promesas](https://guide.freecodecamp.org/javascript/promises) .

* * *

## Sintaxis basica

```javascript 

function slowlyResolvedPromiseFunc(string) { 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(string);
    }, 5000);
  });
}

async function doIt() {
  const myPromise = await slowlyResolvedPromiseFunc("foo");
  console.log(myPromise); // "foo"
}

doIt();
```
Hay algunas cosas a tener en cuenta:

 * La function que abarca la declaración de  `await`  debe incluir el operador  `async`. Esto le dirá al intérprete de JS que debe esperar hasta que la Promesa se resuelva o rechace.
 * El operador `await` debe estar dentro de linea, durante la declaración de const.
 * Esto funciona para `reject` tan bien como para `resolve`. 
 
 --- 
 
 ## Promesas Anidadas vs. `Async` / `Await` 
 
 Implementar una sola promesa es bastante sencillo. En contraste, promesas encadenadas o la creación de un patrón de dependencia puede producir "código spaguetti".
 
 Los siguientes ejemplos asumen que la libreria <a href='https://github.com/request/request-promise' target='_blank' rel='nofollow'>`request-promise`</a> está disponible como `rp`. 
 
 ### Promesas Encadenadas/Anidadas 
 
```javascript

// Primera promesa const fooPromise = rp ("http://domain.com/foo");

fooPromise.then (resultFoo => { 
   // Debe esperar a que "foo" se resuelva 
   console.log (resultFoo);
   
   const barPromise = rp("http://domain.com/bar"); 
   const bazPromise = rp("http://domain.com/baz"); 
   return Promise.all([barPromise, bazPromise]); 

}). then (resultArr => { 
   // Maneja las resoluciones "bar" y "baz" aquí 
   console.log (resultArr \[0\]); 
   console.log (resultArr \[1\]); });
   
```
### `async` and `await` Promises 


```javascript 

// Envolver todo en una función asíncrona 

async function doItAll () {
   // Agarra los datos del endpoint "foo", pero espera la resolución 
   console.log (await rp ("http://domain.com/foo"));
   
   // Iniciar al mismo tiempo las siguientes dos llamadas async
   // No esperes a que "bar" llame a "baz"

   const barPromise = rp("http://domain.com/bar"); 
   const bazPromise = rp("http://domain.com/baz"); 
 
   // Después de que ambas estén comenzadas, espera por ambas 
   const barResponse = await barPromise; 
   const bazResponse = await bazPromise; 
 
   console.log(barResponse); 
   console.log(bazResponse); 
}

// Finalmente, invocar la función asíncrona. doItAll (). then (() => console.log ('Done!'));
```
Las ventajas de usar `async` y `await` deben ser claras. Este código es más redactable, modular, y testeable.
 
Es justo tener en cuenta que a pesar de que hay un sentido adicional de concurrencia, el proceso computacional subyacente es el mismo que el del ejemplo anterior. 
 
 --- 
 
 ## Manejando Errors / Rejection 
 
 
 Un bloque try-catch básico maneja una promesa rechazada.
 
```javascript 

async function errorExample () { 

   try {
      const rejectedPromise = await Promise.reject ("Oh-oh!"); 
   } catch (error) { 
      console.log (error); // "¡UH oh!" 
   } 
}

errorExample (); 
```

* * *

#### Más información:

*   Operador `await` [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
*   Operador `async` [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)
