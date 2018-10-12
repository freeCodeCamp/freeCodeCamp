---
title: Await Promises
localeTitle: Aguardar Promessas
---
## Aguardar Promessas

Os [operadores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) `async` / `await` facilitam a implementação de muitas promessas assíncronas. Eles também permitem que os engenheiros escrevam códigos mais claros, mais sucintos e testáveis.

Para entender esse assunto, você deve ter uma compreensão sólida de como as [Promessas](https://guide.freecodecamp.org/javascript/promises) funcionam.

* * *

## Sintaxe Básica

\`\` \`javascript function slowlyResolvedPromiseFunc (string) { return new Promise (resolve => { setTimeout (() => { resolver (string); }, 5000); }); }

função assíncrona doIt () { const myPromise = aguardar lentamenteResolvedPromiseFunc ("foo"); console.log (myPromise); // "foo" }

faça();
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

javascript // Primeira Promessa const fooPromise = rp ("http://domain.com/foo");

fooPromise.then (resultFoo => { // deve esperar por "foo" para resolver console.log (resultFoo);
```
const barPromise = rp("http://domain.com/bar"); 
 const bazPromise = rp("http://domain.com/baz"); 
 
 return Promise.all([barPromise, bazPromise]); 
```

}). then (resultArr => { // Lidar com as resoluções "bar" e "baz" aqui console.log (resultArr \[0\]); console.log (resultArr \[1\]); });
```
### `async` and `await` Promises 
```

javascript // Enrole tudo em uma função assíncrona função assíncrona doItAll () { // Pega dados do ponto de extremidade "foo", mas aguarde a resolução console.log (aguarde rp ("http://domain.com/foo"));
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

// Finalmente, invoque a função assíncrona doItAll (). then (() => console.log ('Feito!'));
```
The advantages of using `async` and `await` should be clear. This code is more readable, modular, and testable. 
 
 It's fair to note that even though there is an added sense of concurrency, the underlying computational process is the same as the previous example. 
 
 --- 
 
 ## Handling Errors / Rejection 
 
 A basic try-catch block handles a rejected Promise. 
```

javascript função assíncrona errorExample () { experimentar { const rejectedPromise = await Promise.reject ("Oh-oh!"); } pegar (erro) { console.log (erro); // "Uh-oh!" } }

errorExample (); \`\` \`

* * *

#### Mais Informações:

*   `await` Operador [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
*   [Documentos do MDN do](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function) operador de funções `async`