---
title: Await Promises
localeTitle: Aguardar Promessas
---
## Aguardar Promessas

Os [operadores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) `async` / `await` facilitam a implementação de muitas promessas assíncronas. Eles também permitem que os engenheiros escrevam códigos mais claros, mais sucintos e testáveis.

Para entender esse assunto, você deve ter uma compreensão sólida de como as [Promessas](https://guide.freecodecamp.org/javascript/promises) funcionam.

* * *

## Sintaxe Básica

```javascript 
function slowlyResolvedPromiseFunc (string) { 
   return new Promise (resolve => { 
     setTimeout (() => { resolver (string); }, 5000); 
   }); 
}

função assíncrona doIt () { 
  const myPromise = aguardar lentamenteResolvedPromiseFunc ("foo"); 
  console.log (myPromise); // "foo" 
}

faça();
```

Há outras coisas para se prestar atenção:

* A função que contém alguma declaração de `await` precisa incluir o operador `async` em sua declaração. Isso irá dizer ao interpretador JS para que ele espere até que a `Promise` seja resolvida ou rejeitada.
 * O operador `await` precisa ser declarado inline.
   * `const something = await thisReturnsAPromise()`
 * Isso funciona tanto para a rejeição ou a resolução de uma `Promise`.
 
 --- 
 
 ## Promises aninhadas vs. `Async` / `Await` 
 
 Implementar uma unica promise é muito facil. Por outro lado promises aninhadas ou a criação de uma "dependency pattern" pode produzir um código spagetti.
 
 Os exemplos a seguir assumem que <a href='https://github.com/request/request-promise' target='_blank' rel='nofollow'>`request-promise`</a> está disponível como `rp`. 
 
 ### Promises encadeadas/aninhadas
```js 

// Primeira Promisse
const fooPromise = rp("http://domain.com/foo");

fooPromise.then(resultFoo => { 
// deve esperar por "foo" para resolver 
  console.log (resultFoo);
})
```
```js
const barPromise = rp("http://domain.com/bar"); 
const bazPromise = rp("http://domain.com/baz"); 
 
Promise.all([barPromise, bazPromise])
.then(resultArr => {
   // Lidar com as resoluções "bar" e "baz" aqui 
   console.log(resultArr [0]); 
   console.log(resultArr [1]); 
});
```
### `async` and `await` Promises 

```js

// Enrole tudo em uma função assíncrona função assíncrona 
async doItAll () { 
 // Pega dados do ponto de extremidade "foo", mas aguarde a resolução 
 console.log (await rp("http://domain.com/foo"));

 // Concorrência aconteceConcurrently kick off the next two async calls, 
 // não espere por "bar" para disparar "baz"
 const barPromise = rp("http://domain.com/bar"); 
 const bazPromise = rp("http://domain.com/baz"); 
 
 // Depois que as duas foram disparadas, espere pelas duas
 const barResponse = await barPromise; 
 const bazResponse = await bazPromise; 
 
 console.log(barResponse); 
 console.log(bazResponse); 
}
```

```js
// Finalmente, invoque a função assíncrona 
doItAll().then(() => console.log ('Feito!'));
```

As vantagens de usar `async` e `await` deve estar claro. O codigo é mais modular, testavel e legível. 
 
Entretanto há um senso de concorrencia, os processos computacionais que ocorrem são os mesmos do exemplo anterior.
 
 --- 
 
## Lidando com Errors / Rejection 
 
Um bloco `try-catch` consegue lidar com rejeição de promises.

```js 
async errorExample () { 
  try { 
    const rejectedPromise = await Promise.reject ("Oh-oh!"); 
  } catch (erro) { 
    console.log (erro);
  }

errorExample ();
```

* * *

#### Mais Informações:

*   `await` Operador [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
*   [Documentos do MDN do](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function) operador de funções `async`
