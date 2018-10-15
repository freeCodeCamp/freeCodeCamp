---
title: Await Promises
localeTitle: Aguarda promesas
---
## Aguarda promesas

Los [operadores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) `async` / `await` facilitan la implementación de muchas promesas async. También permiten que los ingenieros escriban códigos más claros, concisos y verificables.

Para comprender este tema, debe tener una comprensión sólida de cómo funcionan las [promesas](https://guide.freecodecamp.org/javascript/promises) .

* * *

## Sintaxis basica

\`\` \`javascript function slowlyResolvedPromiseFunc (cadena) { devolver nueva Promesa (resolver => { setTimeout (() => { resolver (cadena); }, 5000); }); }

función asíncrona doIt () { const myPromise = aguardan slowResolvedPromiseFunc ("foo"); console.log (myPromise); // "foo" }

hazlo();
```
There are a few things to note: 
 
 * The function that encompasses the `await` declaration must include the `async` operator. This will tell the JS interpreter that it must wait until the Promise is resolved or rejected. 
 * The `await` operator must be inline, during the const declaration. 
 * This works for `reject` as well as `resolve`. 
 
 --- 
 
 ## Nested Promises vs. `Async` / `Await` 
 
 Implementing a single Promise is pretty straightforward. In contrast, Chained Promises or the creation of a dependency pattern may produce "spaghetti code". 
 
 The following examples assume that the <a href='https://github.com/request/request-promise' target='_blank' rel='nofollow'>`request-promise`</a> library is available as `rp`. 
 
 ### Chained/Nested Promises 
```

javascript // Primera promesa const fooPromise = rp ("http://domain.com/foo");

fooPromise.then (resultFoo => { // Debe esperar a que "foo" se resuelva console.log (resultFoo);
```
const barPromise = rp("http://domain.com/bar"); 
 const bazPromise = rp("http://domain.com/baz"); 
 
 return Promise.all([barPromise, bazPromise]); 
```

}). entonces (resultArr => { // Manejar resoluciones "bar" y "baz" aquí console.log (resultArr \[0\]); console.log (resultArr \[1\]); });
```
### `async` and `await` Promises 
```

javascript // Envolver todo en una función asíncrona función asíncrona doItAll () { // Agarra los datos del punto final "foo", pero espera la resolución console.log (aguarda rp ("http://domain.com/foo"));
```
// Concurrently kick off the next two async calls, 
 // don't wait for "bar" to kick off "baz" 
 const barPromise = rp("http://domain.com/bar"); 
 const bazPromise = rp("http://domain.com/baz"); 
 
 // After both are concurrently kicked off, wait for both 
 const barResponse = await barPromise; 
 const bazResponse = await bazPromise; 
 
 console.log(barResponse); 
 console.log(bazResponse); 
```

}

// Finalmente, invocar la función asíncrona. doItAll (). then (() => console.log ('Done!'));
```
The advantages of using `async` and `await` should be clear. This code is more readable, modular, and testable. 
 
 It's fair to note that even though there is an added sense of concurrency, the underlying computational process is the same as the previous example. 
 
 --- 
 
 ## Handling Errors / Rejection 
 
 A basic try-catch block handles a rejected Promise. 
```

javascript función asíncrona errorExample () { tratar { const rejectedPromise = aguarda Promise.reject ("Oh-oh!"); } captura (error) { console.log (error); // "¡UH oh!" } }

errorExample (); \`\` \`

* * *

#### Más información:

*   `await` operador [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
*   `async` Function Operator [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)