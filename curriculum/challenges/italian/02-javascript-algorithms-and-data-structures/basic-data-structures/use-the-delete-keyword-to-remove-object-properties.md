---
id: 587d7b7c367417b2b2512b1b
title: Utilizzare la parola chiave delete per rimuovere proprietà da un oggetto
challengeType: 1
forumTopicId: 301168
dashedName: use-the-delete-keyword-to-remove-object-properties
---

# --description--

Ora sai cosa sono gli oggetti e quali sono le loro caratteristiche e vantaggi di base. In breve, si tratta di archivi di coppie chiave-valore che dispongono di un modo flessibile e intuitivo di strutturare i dati, ***e***, assicurano un tempo di ricerca molto veloce. Nel resto di queste sfide, descriveremo diverse operazioni comuni che puoi eseguire sugli oggetti in modo che tu possa acquisire dimestichezza nell'applicare queste utili strutture di dati nei tuoi programmi.

Nelle sfide precedenti, abbiamo sia aggiunto che modificato le coppie chiave-valore di un oggetto. Qui vedremo come possiamo *rimuovere* una coppia chiave-valore da un oggetto.

Rivisitiamo il nostro esempio di oggetto `foods` un'ultima volta. Se volessimo rimuovere la chiave `apples`, possiamo eliminarla utilizzando la parola chiave `delete` in questo modo:

```js
delete foods.apples;
```

# --instructions--

Usa la parola chiave delete per rimuovere le chiavi `oranges`, `plums`, e `strawberries` dall'oggetto `foods`.

# --hints--

L'oggetto `foods` dovrebbe avere solo tre chiavi: `apples`, `grapes`, e `bananas`.

```js
assert(
  !foods.hasOwnProperty('oranges') &&
    !foods.hasOwnProperty('plums') &&
    !foods.hasOwnProperty('strawberries') &&
    Object.keys(foods).length === 3
);
```

Le chiavi `oranges`, `plums` e `strawberries` dovrebbero essere rimosse usando `delete`.

```js
assert(
  code.search(/oranges:/) !== -1 &&
    code.search(/plums:/) !== -1 &&
    code.search(/strawberries:/) !== -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```
