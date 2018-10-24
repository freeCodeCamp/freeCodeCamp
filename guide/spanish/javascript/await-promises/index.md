---
title: Await Promises
localeTitle: Promesas await
---
## Promesas `await`

Los [operadores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) `async` / `await` facilitan la implementación de muchas promesas async. También permiten que los ingenieros escriban códigos más claros, concisos y verificables.

Para comprender este tema, debe tener una comprensión sólida de cómo funcionan las [promesas](https://guide.freecodecamp.org/javascript/promises) .

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
  const myPromise = await slowResolvedPromiseFunc("foo");
  console.log(myPromise); // "foo"
}

doIt();
```

Hay algunas cosas que observar: 
 
* La función que engloba la declaración `await` debe incluir el operador `async`. Esto le dirá al intérprete de JS que debe esperar hasta que la Promesa se resuelva o se rechace. 
* El operador `await` debe estar en la misma línea, durante la declaración `const`. 
* Funciona tanto para `reject` como para `resolve`. 
 
--- 
 
## Promesas anidadas vs. `Async` / `Await` 
 
Implementar una sola Promesa es bastante sencillo. Por el contrario, las Promesas encadenadas o la creación de un patrón de dependencia puede producir "código espagueti". 
 
Los siguientes ejemplos asumen que la biblioteca <a href='https://github.com/request/request-promise' target='_blank' rel='nofollow'>`request-promise`</a> está disponible como `rp`. 
 
### Promesas encadenadas/anidadas 
```javascript
// Primera promesa
const fooPromise = rp("http://domain.com/foo");

fooPromise.then(resultFoo => {
  // Debe esperar a que "foo" se resuelva
  console.log (resultFoo);
  
  const barPromise = rp("http://domain.com/bar"); 
  const bazPromise = rp("http://domain.com/baz"); 
 
  return Promise.all([barPromise, bazPromise]);
}).then(resultArr => {
  // Manejar resoluciones "bar" y "baz" aquí
  console.log(resultArr[0]);
  console.log(resultArr[1]);
});
```
### `async` y promesas `await` 
```javascript
// Envolver todo en una función asíncrona
async function doItAll() {
  // Agarra los datos del punto final "foo", pero espera la resolución
  console.log(await rp("http://domain.com/foo"));

  // Concurrentemente ejecuta las siguientes dos llamadas asíncronas, 
  // no esperes a "bar" para ejecutar "baz" 
  const barPromise = rp("http://domain.com/bar"); 
  const bazPromise = rp("http://domain.com/baz"); 
 
  // Después de que ambas hayan sido llamadas concurrentemente, espéralas 
  const barResponse = await barPromise; 
  const bazResponse = await bazPromise; 
 
  console.log(barResponse); 
  console.log(bazResponse);
}

// Finalmente, invoca la función asíncrona.
doItAll().then(() => console.log ('Done!'));
```

Las ventajas de usar `async` y `await` son claras. Este código es más comprensible, modula y verificable. 
 
Es justo decir que aunque se ha añadido un cierto sentido de concurrencia, el proceso computacional subyacente es el mismo que el del ejemplo anterior. 
 
--- 
 
## Handling Errors / Rejection 

Un bloque try-catch básico se encarga de una Promesa rechazada. 
```javascript
async function errorExample () {
  try {
    const rejectedPromise = await Promise.reject("Oh-oh!");
  } catch(error) {
    console.log (error); // "¡UH oh!"
  }
}

errorExample (); 
```

* * *

#### Más información:

*   `await` operador [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
*   `async` Function Operator [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)
