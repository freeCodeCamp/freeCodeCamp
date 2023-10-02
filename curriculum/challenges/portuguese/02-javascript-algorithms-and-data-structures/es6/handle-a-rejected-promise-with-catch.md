---
id: 5cdafbe72913098997531682
title: Manipular uma promessa rejeitada usando o catch
challengeType: 1
forumTopicId: 301204
dashedName: handle-a-rejected-promise-with-catch
---

# --description--

`catch` é o método usado quando a promessa é rejeitada. Ele é executado imediatamente após o método `reject` da promessa ser chamado. Aqui está a sintaxe:

```js
myPromise.catch(error => {

});
```

O parâmetro `error` é o argumento passado para o método `reject`.

# --instructions--

Adicione o método `catch` à sua promessa. Use `error` como parâmetro de sua função de callback e exiba o valor de `error` no console.

# --hints--

Você deve chamar o método `catch` na promessa.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.catch\(/g)
);
```

O método `catch` deve ter uma função de callback com `error` como seu parâmetro.

```js
assert(errorIsParameter);
```

Você deve exibir o valor de `error` no console.

```js
assert(
  errorIsParameter &&
    __helpers
      .removeWhiteSpace(code)
      .match(/\.catch\(.*?error.*?console.log\(error\).*?\)/)
);
```

# --seed--

## --after-user-code--

```js
const errorIsParameter = /\.catch\((function\(error\){|error|\(error\)=>)/.test(__helpers.removeWhiteSpace(code));
```

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

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

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});
```
