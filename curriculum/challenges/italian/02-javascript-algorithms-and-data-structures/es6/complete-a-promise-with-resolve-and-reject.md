---
id: 5cdafbc32913098997531680
title: Completare una promise con resolve e reject
challengeType: 1
forumTopicId: 301196
dashedName: complete-a-promise-with-resolve-and-reject
---

# --description--

Una promise ha tre stati: `pending` (in attesa), `fulfilled` (soddisfatta) e `rejected` (rifiutata). La promise che hai creato nell'ultima sfida è bloccata per sempre nello stato `pending` perché non hai aggiunto un modo per completarla. I parametri `resolve` e `reject` forniti all'argomento della promise vengono utilizzati per farlo. `resolve` è usato quando vuoi che la promise abbia successo, e `reject` è usato quando vuoi che la promise fallisca. Questi sono metodi che prendono un argomento, come si vede qui sotto.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

L'esempio qui sopra utilizza stringhe come argomento di queste funzioni, ma può essere utilizzata davvero qualsiasi cosa. Spesso potrebbe essere un oggetto, di cui potresti voler utilizzare i dati per metterli sul tuo sito web o altrove.

# --instructions--

Fai sì che la promise gestisca il successo e il fallimento. Se `responseFromServer` è `true`, chiama il metodo `resolve` per completare con successo la promise. Passa a `resolve` una stringa di valore `We got the data`. Se invece `responseFromServer` è `false`, utilizza il metodo `reject` e passagli la stringa: `Data not received`.

# --hints--

`resolve` dovrebbe essere chiamato con la stringa prevista quando la condizione dell'`if` è `true`.

```js
assert(
  code.match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g)
);
```

`reject` dovrebbe essere chiamato con la stringa prevista quando la condizione dell'`if` è `false`.

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
