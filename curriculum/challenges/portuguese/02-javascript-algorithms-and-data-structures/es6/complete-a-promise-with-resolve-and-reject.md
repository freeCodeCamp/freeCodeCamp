---
id: 5cdafbc32913098997531680
title: Concluir uma promessa com resolve e reject
challengeType: 1
forumTopicId: 301196
dashedName: complete-a-promise-with-resolve-and-reject
---

# --description--

Uma promessa possui três estados: pendente (`pending`), cumprida (`fulfilled`) e rejeitada (`rejected`). A promessa que você criou no desafio anterior está presa no estado `pending` para sempre porque você não adicionou uma forma de concluir a promessa. Os parâmetros `resolve` e `reject` passados para o argumento da promessa servem para este propósito. `resolve` é utilizado quando a promessa for bem-sucedida, enquanto `reject` é utilizado quando ela falhar. Ambos são métodos que recebem apenas um argumento, como no exemplo abaixo.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

O exemplo acima usa strings como argumento desses métodos, mas você pode passar qualquer outro tipo de dado. Geralmente, é passado um objeto para esses métodos. Assim você pode acessar as propriedades deste objeto e usá-las em seu site ou em qualquer outro lugar.

# --instructions--

Adapte a promessa para ambas as situações de sucesso e fracasso. Se `responseFromServer` for `true`, chame o método `resolve` para completar a promessa com sucesso. Passe a string `We got the data` como argumento para o método `resolve`. Se `responseFromServer` for `false`, passe a string `Data not received` como argumento para o método `reject`.

# --hints--

O método `resolve` deve ser chamado com a string informada anteriormente quando a condição do `if` for `true`.

```js
assert(
  code.match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g)
);
```

O método `reject` deve ser chamado com a string informada anteriormente quando a condição do `if` for `false`.

```js
assert(
  code.match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g)
);
```

# --seed--

## --seed-contents--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    // Change this line
  } else {  
    // Change this line
  }
});
```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```
