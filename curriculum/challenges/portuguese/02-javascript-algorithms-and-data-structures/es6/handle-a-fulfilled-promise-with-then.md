---
id: 5cdafbd72913098997531681
title: Manipular uma promessa cumprida usando o then
challengeType: 1
forumTopicId: 301203
dashedName: handle-a-fulfilled-promise-with-then
---

# --description--

Promessas são úteis quando você tem um processo que leva uma quantidade de tempo desconhecido para ser finalizado (ou seja, algo assíncrono). Muitas vezes, uma requisição a um servidor. Fazer uma requisição a um servidor leva tempo, e após a requisição ser finalizada, você geralmente quer fazer algo com a resposta retornada. Isso pode ser feito usando o método `then`. O método `then` é executado imediatamente após a promessa ser cumprida com `resolve`. Exemplo:

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
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.then\(/g)
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
      .removeWhiteSpace(code)
      .match(/\.then\(.*?result.*?console.log\(result\).*?\)/)
);
```

# --seed--

## --after-user-code--

```js
const resultIsParameter = /\.then\((function\(result\){|result|\(result\)=>)/.test(__helpers.removeWhiteSpace(code));
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
