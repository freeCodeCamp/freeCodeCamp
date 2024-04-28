---
id: 5cdafbd72913098997531681
title: Manipular uma promessa cumprida usando o then
challengeType: 1
forumTopicId: 301203
dashedName: handle-a-fulfilled-promise-with-then
---

# --description--

Promessas são úteis quando você tem um processo que leva uma quantidade de tempo desconhecido para ser finalizado (ou seja, algo assíncrono). Muitas vezes, uma requisição a um servidor. Fazer uma requisição a um servidor leva tempo, e após a requisição ser finalizada, você geralmente quer fazer algo com a resposta retornada. Isso pode ser feito usando o método `then`.

```js
Promise.prototype.then(onFulfilled, onRejected)
```

O método `then` agenda as funções de callback para a eventual conclusão de uma promise – seja satisfazendo a promise ou a rejeitando. Um dos manipuladores, `onFulfilled` e `onRejected`, será executado para lidar com o cumprimento da promise ou com sua rejeição atual. Quando a promise é cumprida com `resolve`, o manipulador `onFulfilled` é chamado.

```js
myPromise.then(result => {

});
```

O parâmetro `result` vem do argumento dado ao método `resolve`.

# --instructions--

Adicione o método `then` à sua promessa. Use `result` como parâmetro de sua função de callback e exiba `result` no console.

# --hints--

Você deve chamar o método `then` na promessa.

```js
assert(
  __helpers.removeWhiteSpace(__helpers.removeJSComments(code)).match(/(makeServerRequest|\))\.then\(/g)
);
```

O método `then` deve ter uma função de callback com `result` como seu parâmetro.

```js
assert(resultIsParameter);
```

Você deve exibir o valor do parâmetro `result` no console.

```js
assert(
  resultIsParameter &&
    __helpers
      .removeWhiteSpace(__helpers.removeJSComments(code))
      .match(/\.then\(.*?result.*?console.log\(result\).*?\)/)
);
```

# --seed--

## --after-user-code--

```js
const resultIsParameter = /\.then\((function\(result\){|result|\(result\)=>)/.test(__helpers.removeWhiteSpace(__helpers.removeJSComments(code)));
```

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
```
