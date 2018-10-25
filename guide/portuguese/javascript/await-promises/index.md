---
title: Await Promises
localeTitle: Await Promises
---
## Await Promises

Os [operadores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) `async` / `await` facilitam a implementação de muitas `Promises` assíncronas. Eles também permitem que os engenheiros escrevam códigos mais claros, mais sucintos e testáveis.

Para entender esse assunto, você deve ter uma compreensão sólida de como as [Promises](https://guide.freecodecamp.org/javascript/promises) funcionam.

* * *

## Sintaxe Básica

``` javascript
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

Há outras coisas para se prestar atenção:

* A função que contém alguma declaração de `await` precisa incluir o operador `async` em sua declaração. Isso irá dizer ao interpretador JS para que ele espere até que a `Promise` seja resolvida ou rejeitada.
 * O operador `await` precisa ser declarado inline, durante a declaração da `const`.
 * Isso funciona tanto para a rejeição ou a resolução de uma `Promise`.
 
 --- 
 
 ## Promises aninhadas vs. `Async` / `Await` 
 
 Implementar uma unica Promise é muito fácil. Por outro lado Promises aninhadas ou a criação de uma "dependency pattern" pode produzir um "código spagetti".
 
 Os exemplos a seguir assumem que <a href='https://github.com/request/request-promise' target='_blank' rel='nofollow'>`request-promise`</a> está disponível como `rp`. 
 
 ### Promises encadeadas/aninhadas
 
 
``` javascript
// Primeira Promise
const fooPromise = rp("http://domain.com/foo");

fooPromise.then(resultFoo => {
    // Deve aguardar por "foo" para resolver
    console.log(resultFoo);

    const barPromise = rp("http://domain.com/bar");
    const bazPromise = rp("http://domain.com/baz");

    return Promise.all([barPromise, bazPromise]);
}).then(resultArr => {
    // Lidar com as resoluções "bar" e "baz" aqui 
    console.log(resultArr[0]);
    console.log(resultArr[1]);
});
```
 
### `async` e `await` Promises

``` javascript
// Envolva tudo em uma função assíncrona (async)
async function doItAll() {
   // Pega os dados do ponto final "foo", mas aguarda a resolução
   console.log(await rp("http://domain.com/foo"));
   
   // Ao mesmo tempo, inicie as próximas duas chamadas assíncronas,
   // Não espera por "bar" para disparar "baz"
   const barPromise = rp("http://domain.com/bar");
   const bazPromise = rp("http://domain.com/baz");
   
   // Depois que as duas foram disparadas, espere pelas duas
   const barResponse = await barPromise;
   const bazResponse = await bazPromise;
   
   console.log(barResponse);
   console.log(bazResponse);
}

// Finalmente, chame a função assíncrona
doItAll().then(() => console.log('Done!'));
```

As vantagens de usar `async` e `await` devem estar bem claras. O código é mais modular, testavel e legível. 
 
É justo notar que, embora exista uma sensação adicional de simultaneidade, os processos computacionais que ocorrem são os mesmos do exemplo anterior.
 
 --- 
 
## Lidando com Errors / Rejection 
 
Um bloco `try-catch` consegue lidar com rejeição de promises.

``` javascript
async function errorExample() {
  try {
    const rejectedPromise = await Promise.reject("Oh-oh!");
  } catch (error) {
    console.log(error); // "Uh-oh!"
  }
}

errorExample();
```

---

### Mais informação:

* Operador `await` <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/await' target='_blank' rel='nofollow'>MDN Docs</a>
* Função `async` <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/async_function' target='_blank' rel=''nofollow'>MDN Docs</a>
